import type { AppState, Completion } from '../types';

const STORAGE_KEY = 'habit-tracker-v1';
const CURRENT_SCHEMA = 1;

export const defaultState: AppState = {
  schemaVersion: CURRENT_SCHEMA,
  habits: [],
  completions: [],
};

const normalizeDate = (value: string): string => {
  const [year, month, day] = value.split('-').map(Number);
  return `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const normalizeCompletions = (completions: unknown[]): Completion[] => {
  const seen = new Set<string>();
  const result: Completion[] = [];

  completions.forEach((item) => {
    if (typeof item !== 'object' || item === null) return;
    const completion = item as { habitId?: string; date?: string };
    if (!completion.habitId || !completion.date) return;
    const date = normalizeDate(completion.date);
    const key = `${completion.habitId}|${date}`;
    if (seen.has(key)) return;
    seen.add(key);
    result.push({ habitId: completion.habitId, date });
  });

  return result;
};

export function loadState(): AppState {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;

    const parsed = JSON.parse(raw) as AppState;
    if (!parsed || parsed.schemaVersion !== CURRENT_SCHEMA) {
      return defaultState;
    }

    return {
      schemaVersion: CURRENT_SCHEMA,
      habits: Array.isArray(parsed.habits) ? parsed.habits : [],
      completions: Array.isArray(parsed.completions) ? normalizeCompletions(parsed.completions) : [],
    };
  } catch {
    return defaultState;
  }
}

export function saveState(state: AppState): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
