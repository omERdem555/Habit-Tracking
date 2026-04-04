import type { AppState } from '../types';

const STORAGE_KEY = 'habit-tracker-v1';
const CURRENT_SCHEMA = 1;

export const defaultState: AppState = {
  schemaVersion: CURRENT_SCHEMA,
  habits: [],
  completions: [],
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
      completions: Array.isArray(parsed.completions) ? parsed.completions : [],
    };
  } catch {
    return defaultState;
  }
}

export function saveState(state: AppState): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
