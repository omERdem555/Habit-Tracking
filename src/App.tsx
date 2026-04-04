import { useEffect, useMemo, useReducer, useState } from 'react';
import { loadState, saveState, defaultState } from './lib/storage';
import type { Action, AppState, Habit, Completion } from './types';

const localDateString = (date = new Date()): string => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

const normalizeDate = (value: string): string => {
  return new Date(value + 'T00:00:00').toISOString().slice(0, 10);
};

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'load':
      return action.payload;
    case 'addHabit': {
      const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      return {
        ...state,
        habits: [
          {
            id,
            name: action.payload.name.trim(),
            color: action.payload.color,
            active: true,
            createdAt: localDateString(),
          },
          ...state.habits,
        ],
      };
    }
    case 'editHabit':
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id ? { ...habit, name: action.payload.name.trim() } : habit,
        ),
      };
    case 'toggleHabitActive':
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id
            ? {
                ...habit,
                active: !habit.active,
                archivedAt: habit.active ? localDateString() : undefined,
              }
            : habit,
        ),
      };
    case 'addCompletion':
      return {
        ...state,
        completions: [...state.completions, { habitId: action.payload.habitId, date: normalizeDate(action.payload.date) }],
      };
    case 'removeCompletion':
      return {
        ...state,
        completions: state.completions.filter(
          (completion) => !(completion.habitId === action.payload.habitId && completion.date === normalizeDate(action.payload.date)),
        ),
      };
    default:
      return state;
  }
};

const groupByDate = (completions: Completion[]) => {
  return completions.reduce<Record<string, Completion[]>>((acc, completion) => {
    const date = normalizeDate(completion.date);
    acc[date] = acc[date] ? [...acc[date], completion] : [completion];
    return acc;
  }, {});
};

const getPreviousDate = (dateString: string): string => {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() - 1);
  return normalizeDate(date.toISOString().slice(0, 10));
};

const getYearDays = (year: number) => {
  const days: string[] = [];
  const start = new Date(`${year}-01-01T00:00:00`);
  const end = new Date(`${year}-12-31T00:00:00`);
  for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
    days.push(normalizeDate(current.toISOString().slice(0, 10)));
  }
  return days;
};

const getStreak = (habitId: string, completionSet: Set<string>) => {
  let streak = 0;
  let cursor = localDateString();
  while (completionSet.has(`${habitId}|${cursor}`)) {
    streak += 1;
    cursor = getPreviousDate(cursor);
  }
  return streak;
};

const buildYearSummaries = (years: number[], completionMap: Record<string, Completion[]>) => {
  return years.map((year) => {
    const days = getYearDays(year);
    return {
      year,
      days: days.map((day) => ({
        day,
        count: completionMap[day]?.length ?? 0,
      })),
    };
  });
};

const getColorShade = (count: number) => {
  if (count === 0) return 'rgba(255,255,255,0.04)';
  if (count === 1) return 'rgba(96,165,250,0.28)';
  if (count === 2) return 'rgba(96,165,250,0.42)';
  if (count === 3) return 'rgba(96,165,250,0.6)';
  return 'rgba(96,165,250,0.82)';
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [habitName, setHabitName] = useState('');
  const [habitColor, setHabitColor] = useState('#60a5fa');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    dispatch({ type: 'load', payload: loadState() });
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const today = localDateString();
  const completionSet = useMemo(() => {
    return new Set(state.completions.map((item) => `${item.habitId}|${normalizeDate(item.date)}`));
  }, [state.completions]);

  const completionsByDate = useMemo(() => groupByDate(state.completions), [state.completions]);

  const activeHabits = useMemo(() => state.habits.filter((habit) => habit.active), [state.habits]);
  const totalCompletedToday = useMemo(
    () => activeHabits.filter((habit) => completionSet.has(`${habit.id}|${today}`)).length,
    [activeHabits, completionSet, today],
  );

  const legacyYears = useMemo(() => {
    const years = new Set<number>();
    const now = new Date();
    years.add(now.getFullYear());
    state.completions.forEach((completion) => {
      const year = new Date(`${completion.date}T00:00:00`).getFullYear();
      years.add(year);
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [state.completions]);

  const yearSummary = useMemo(() => buildYearSummaries(legacyYears, completionsByDate), [legacyYears, completionsByDate]);

  const stats = useMemo(() => {
    const totalCompletions = state.completions.length;
    const longestStreak = state.habits.reduce((best, habit) => {
      const completions = state.completions
        .filter((c) => c.habitId === habit.id)
        .map((c) => normalizeDate(c.date));
      const uniqueSet = new Set(completions);
      let maxStreak = 0;
      let current = 0;
      const sortedDays = Array.from(uniqueSet).sort();
      for (let i = 0; i < sortedDays.length; i += 1) {
        if (i === 0) {
          current = 1;
        } else {
          const prev = getPreviousDate(sortedDays[i]);
          current = sortedDays[i - 1] === prev ? current + 1 : 1;
        }
        maxStreak = Math.max(maxStreak, current);
      }
      return Math.max(best, maxStreak);
    }, 0);
    return { totalCompletions, longestStreak };
  }, [state.completions, state.habits]);

  const handleAddHabit = () => {
    const name = habitName.trim();
    if (!name) return;
    dispatch({ type: 'addHabit', payload: { name, color: habitColor } });
    setHabitName('');
  };

  const handleToggleToday = (habit: Habit) => {
    const exists = completionSet.has(`${habit.id}|${today}`);
    if (exists) {
      dispatch({ type: 'removeCompletion', payload: { habitId: habit.id, date: today } });
    } else {
      dispatch({ type: 'addCompletion', payload: { habitId: habit.id, date: today } });
    }
  };

  const selectedDayItems = selectedDay ? completionsByDate[selectedDay] ?? [] : [];

  return (
    <div className="app-shell">
      <header>
        <div>
          <h1>Habit Tracker</h1>
          <p style={{ opacity: 0.78, marginTop: 8, maxWidth: 540 }}>
            Create daily habits, mark completion for today, track streaks, and explore your yearly performance with persistent browser storage.
          </p>
        </div>
      </header>

      <section className="card">
        <div className="form-row">
          <input
            value={habitName}
            onChange={(event) => setHabitName(event.target.value)}
            placeholder="Add a new habit"
            aria-label="New habit name"
          />
          <input
            type="color"
            value={habitColor}
            onChange={(event) => setHabitColor(event.target.value)}
            aria-label="Habit color"
            style={{ padding: 0, height: '100%', width: '100%' }}
          />
          <button type="button" onClick={handleAddHabit}>
            Add
          </button>
        </div>
      </section>

      <section className="card habit-summary">
        <div className="summary-card">
          <h3>Active habits</h3>
          <p>{activeHabits.length}</p>
        </div>
        <div className="summary-card">
          <h3>Completed today</h3>
          <p>{totalCompletedToday}</p>
        </div>
        <div className="summary-card">
          <h3>Longest streak</h3>
          <p>{stats.longestStreak}</p>
        </div>
        <div className="summary-card">
          <h3>Total completions</h3>
          <p>{stats.totalCompletions}</p>
        </div>
      </section>

      <section className="habits card">
        <h2>Habits</h2>
        <div className="habit-list">
          {state.habits.length === 0 ? (
            <p style={{ opacity: 0.75 }}>No habits yet. Add one to begin tracking.</p>
          ) : (
            state.habits.map((habit) => {
              const completedToday = completionSet.has(`${habit.id}|${today}`);
              const streak = getStreak(habit.id, completionSet);
              const total = state.completions.filter((item) => item.habitId === habit.id).length;
              return (
                <div key={habit.id} className="habit-row">
                  <div className="habit-details">
                    <div className="habit-label">
                      <span className="habit-color" style={{ background: habit.color }} />
                      <strong>{habit.name}</strong>
                      {!habit.active && <span style={{ opacity: 0.6 }}>Archived</span>}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ opacity: 0.8 }}>Streak: {streak}</span>
                      <span style={{ opacity: 0.8 }}>Total: {total}</span>
                      <span style={{ opacity: 0.8 }}>Last: {state.completions
                        .filter((item) => item.habitId === habit.id)
                        .map((item) => item.date)
                        .sort()
                        .pop() ?? '—'}</span>
                    </div>
                  </div>
                  <div className="habit-actions">
                    <button
                      type="button"
                      className={`marker-button ${completedToday ? 'completed' : ''} ${!habit.active ? 'inactive' : ''}`}
                      disabled={!habit.active}
                      onClick={() => handleToggleToday(habit)}
                    >
                      {completedToday ? 'Undo' : 'Mark'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(habit.id);
                        setEditingName(habit.name);
                      }}
                    >
                      Rename
                    </button>
                    <button type="button" onClick={() => dispatch({ type: 'toggleHabitActive', payload: { id: habit.id } })}>
                      {habit.active ? 'Archive' : 'Activate'}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {yearSummary.length > 0 && (
        <section className="card calendar-grid">
          <h2>Calendar performance</h2>
          {yearSummary.map((yearRow) => (
            <div key={yearRow.year} className="year-row">
              <div className="day-label">{yearRow.year}</div>
              <div className="week-grid">
                {yearRow.days.map((day) => (
                  <button
                    key={day.day}
                    type="button"
                    className="day-cell"
                    style={{ background: getColorShade(day.count) }}
                    onClick={() => setSelectedDay(day.day)}
                    aria-label={`Day ${day.day}, ${day.count} completions`}
                  >
                    <span />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {selectedDay && (
        <div className="modal-backdrop" onClick={() => setSelectedDay(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedDay} summary</h3>
              <button type="button" onClick={() => setSelectedDay(null)}>
                Close
              </button>
            </div>
            <p style={{ opacity: 0.78, marginTop: '0.75rem' }}>
              {selectedDayItems.length > 0
                ? `${selectedDayItems.length} habit${selectedDayItems.length > 1 ? 's' : ''} completed.`
                : 'No habits were marked complete on this day.'}
            </p>
            <ul className="modal-list">
              {selectedDayItems.length > 0 ? (
                selectedDayItems.map((item) => {
                  const habit = state.habits.find((habitItem) => habitItem.id === item.habitId);
                  return (
                    <li key={`${item.habitId}-${item.date}`}>
                      <span>
                        <strong style={{ color: habit?.color ?? '#fff' }}>{habit?.name ?? 'Unknown habit'}</strong>
                      </span>
                    </li>
                  );
                })
              ) : (
                <li style={{ opacity: 0.75 }}>No completed habits.</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {editingId && (
        <div className="modal-backdrop" onClick={() => setEditingId(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3>Rename habit</h3>
              <button type="button" onClick={() => setEditingId(null)}>
                Close
              </button>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <input
                value={editingName}
                onChange={(event) => setEditingName(event.target.value)}
                style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(16,20,33,0.9)', color: '#f5f7fb' }}
                placeholder="Habit name"
              />
              <button
                type="button"
                style={{ marginTop: '1rem', width: '100%', padding: '0.95rem 1rem', borderRadius: '14px', border: 'none', background: 'rgba(96,165,250,0.18)', color: '#e2e8f0' }}
                onClick={() => {
                  if (editingName.trim()) {
                    dispatch({ type: 'editHabit', payload: { id: editingId, name: editingName } });
                    setEditingId(null);
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
