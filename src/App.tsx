import { useEffect, useMemo, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadState, saveState, defaultState } from './lib/storage';
import type { Action, AppState, Habit, Completion } from './types';

const HABIT_COLOR = '#60a5fa';

const localDateString = (date = new Date()): string => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

const normalizeDate = (value: string): string => {
  const [year, month, day] = value.split('-').map(Number);
  return `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const normalizeCompletions = (completions: Completion[]) => {
  const seen = new Set<string>();
  return completions.filter((completion) => {
    const key = `${completion.habitId}|${normalizeDate(completion.date)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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
            color: HABIT_COLOR,
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
    case 'addCompletion': {
      const date = normalizeDate(action.payload.date);
      const alreadyExists = state.completions.some(
        (completion) => completion.habitId === action.payload.habitId && completion.date === date,
      );
      if (alreadyExists) return state;
      return {
        ...state,
        completions: [...state.completions, { habitId: action.payload.habitId, date }],
      };
    }
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
  return localDateString(date);
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

const getDayBackground = (count: number, total: number) => {
  if (count === 0) return 'rgba(226, 232, 255, 0.18)';
  const progress = Math.min(count / Math.max(total, 1), 1);
  const alpha = 0.25 + progress * 0.55;
  return `rgba(96, 165, 250, ${alpha.toFixed(2)})`;
};

const buildYearSummaries = (
  years: number[],
  completionMap: Record<string, Completion[]>,
  habitsById: Record<string, Habit | undefined>,
  activeHabitCount: number,
) => {
  return years.map((year) => {
    const days = getYearDays(year);
    return {
      year,
      days: days.map((day) => {
        const dayCompletions = completionMap[day] ?? [];
        const uniqueHabitIds = Array.from(new Set(dayCompletions.map((item) => item.habitId)));
        const activeCompletedCount = new Set(
          dayCompletions.filter((item) => habitsById[item.habitId]?.active).map((item) => item.habitId),
        ).size;
        const allComplete = activeHabitCount > 0 && activeCompletedCount >= activeHabitCount;
        return {
          day,
          count: uniqueHabitIds.length,
          allComplete,
        };
      }),
    };
  });
};

function App() {
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [habitName, setHabitName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    dispatch({ type: 'load', payload: loadState() });
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const today = localDateString();
  const completionSet = useMemo(() => {
    return new Set(normalizeCompletions(state.completions).map((item) => `${item.habitId}|${normalizeDate(item.date)}`));
  }, [state.completions]);

  const completionsByDate = useMemo(
    () => groupByDate(normalizeCompletions(state.completions)),
    [state.completions],
  );

  const habitsById = useMemo(
    () => Object.fromEntries(state.habits.map((habit) => [habit.id, habit] as const)),
    [state.habits],
  );

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

  const yearSummary = useMemo(
    () => buildYearSummaries(legacyYears, completionsByDate, habitsById, activeHabits.length),
    [legacyYears, completionsByDate, habitsById, activeHabits.length],
  );

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
    dispatch({ type: 'addHabit', payload: { name } });
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="navbar-content">
          <h1 style={{ opacity: 0.9 }}>{t('title')}</h1>
          <div className="navbar-buttons">
            <button
              type="button"
              className="theme-button"
              onClick={toggleTheme}
            >
              {theme === 'light' ? t('dark') : t('light')}
            </button>
            <button
              type="button"
              className="lang-button"
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
            >
              {i18n.language === 'en' ? 'TR' : 'ENG'}
            </button>
          </div>
        </div>
      </nav>
      <header>
        <div>
          <p style={{ opacity: 0.9, marginTop: 8, maxWidth: 540, color: 'var(--text-secondary)' }}>
            {t('subtitle')}
          </p>
        </div>
      </header>

      <section className="card">
        <div className="form-row">
          <input
            value={habitName}
            onChange={(event) => setHabitName(event.target.value)}
            placeholder={t('addHabitPlaceholder')}
            aria-label="New habit name"
          />
          <button type="button" onClick={handleAddHabit}>
            {t('addButton')}
          </button>
        </div>
      </section>

      <section className="card habit-summary">
        <div className="summary-card">
          <h3>{t('activeHabits')}</h3>
          <p>{activeHabits.length}</p>
        </div>
        <div className="summary-card">
          <h3>{t('completedToday')}</h3>
          <p>{totalCompletedToday}</p>
        </div>
        <div className="summary-card">
          <h3>{t('longestStreak')}</h3>
          <p>{stats.longestStreak}</p>
        </div>
        <div className="summary-card">
          <h3>{t('totalCompletions')}</h3>
          <p>{stats.totalCompletions}</p>
        </div>
      </section>

      {yearSummary.length > 0 && (
        <section className="card calendar-grid">
          <h2 style={{ opacity: 0.85 }}>{t('calendarPerformance')}</h2>
          {yearSummary.map((yearRow) => (
            <div key={yearRow.year} className="year-row">
              <div className="day-label">{yearRow.year}</div>
              <div className="week-grid">
                {yearRow.days.map((day) => (
                  <button
                    key={day.day}
                    type="button"
                    className="day-cell"
                    style={{
                      background: getDayBackground(day.count, activeHabits.length),
                      boxShadow: day.allComplete
                        ? `0 0 0 2px rgba(96, 165, 250, 0.4), 0 0 15px rgba(96, 165, 250, 0.22)`
                        : day.day === today
                        ? '0 0 0 0.5px rgba(14, 165, 233, 0.55), 0 0 12px rgba(14, 165, 233, 0.16)'
                        : undefined,
                      borderColor: day.day === today ? '#0ea5e9' : 'rgba(148, 163, 184, 0.24)',
                    }}
                    onClick={() => setSelectedDay(day.day)}
                    aria-label={`${day.day}, ${day.count} completed habit${day.count !== 1 ? 's' : ''}`}
                    title={`${day.day} — ${day.count} completed habit${day.count !== 1 ? 's' : ''}`}
                  >
                    <span />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="habits card">
        <h2 style={{ opacity: 0.85 }}>{t('habits')}</h2>
        <div className="habit-list">
          {state.habits.length === 0 ? (
            <p style={{ opacity: 0.9, color: 'var(--text-secondary)' }}>{t('noHabits')}</p>
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
                      {!habit.active && <span style={{ opacity: 0.6 }}>{t('archived')}</span>}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ opacity: 0.8 }}>{t('streak')}: {streak}</span>
                      <span style={{ opacity: 0.8 }}>{t('total')}: {total}</span>
                      <span style={{ opacity: 0.8 }}>{t('last')}: {state.completions
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
                      {completedToday ? t('undo') : t('mark')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(habit.id);
                        setEditingName(habit.name);
                      }}
                    >
                      {t('rename')}
                    </button>
                    <button type="button" onClick={() => dispatch({ type: 'toggleHabitActive', payload: { id: habit.id } })}>
                      {habit.active ? t('archive') : t('activate')}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {selectedDay && (
        <div className="modal-backdrop" onClick={() => setSelectedDay(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ opacity: 0.9 }}>{selectedDay} {t('summary')}</h3>
              <button type="button" onClick={() => setSelectedDay(null)}>
                {t('close')}
              </button>
            </div>
            <p style={{ opacity: 0.78, marginTop: '0.75rem' }}>
              {selectedDayItems.length > 0
                ? `${selectedDayItems.length} ${selectedDayItems.length !== 1 ? t('habitsCompleted') : t('habitCompleted')}`
                : t('noCompletedHabitsOnDay')}
            </p>
            <ul className="modal-list">
              {selectedDayItems.length > 0 ? (
                selectedDayItems.map((item) => {
                  const habit = state.habits.find((habitItem) => habitItem.id === item.habitId);
                  return (
                    <li key={`${item.habitId}-${item.date}`}>
                      <span>
                        <strong style={{ color: habit?.color ?? '#fff' }}>{habit?.name ?? t('unknownHabit')}</strong>
                      </span>
                    </li>
                  );
                })
              ) : (
                <li style={{ opacity: 0.75 }}>{t('noCompletedHabits')}</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {editingId && (
        <div className="modal-backdrop" onClick={() => setEditingId(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ opacity: 0.9 }}>{t('renameHabit')}</h3>
              <button type="button" onClick={() => setEditingId(null)}>
                {t('close')}
              </button>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <input
                value={editingName}
                onChange={(event) => setEditingName(event.target.value)}
                style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(16,20,33,0.9)', color: '#f5f7fb' }}
                placeholder={t('habitNamePlaceholder')}
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
                {t('save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
