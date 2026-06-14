import { useEffect, useMemo, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { loadState, saveState, defaultState } from './lib/storage';
import { getStreak, getLongestStreak, getTotalCompletions, getHabitStats } from './lib/stats';
import { groupByDate, normalizeCompletions } from './lib/completion';
import { localDateString } from './lib/date';
import { buildYearSummaries, getDayBackground } from './lib/heatmap';
// duplicate import removed
import reducer from './reducers/appReducer';

import type { Habit, Completion } from './types';

/* components */
import CompletionModal from './components/CompletionModal';
import DayDetailsModal from './components/DayDetailsModal';
import HabitCard from './components/HabitCard';
import EditHabitModal from './components/EditHabitModal';
import InstallPrompt from './components/InstallPrompt';
import SettingsModal from './components/SettingsModal';
import SummaryCards from './components/SummaryCards';
import UndoModal from './components/UndoModal';
import YearHeatmap from './components/YearHeatmap';
import Navbar from './components/Navbar';
import AddHabitForm from './components/AddHabitForm';

/* hooks */
import useNotifications from './hooks/useNotifications';
import useTheme from './hooks/useTheme';

/* auth */
import { useAuth } from './auth/AuthContext';

/*firebase*/
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './lib/firebase';
import { initFCMForUser } from './lib/fcm';
import { fetchDeviceSettings, updateDeviceSettings } from './lib/deviceSettings';
import {
  getLiveNotificationPermission,
  isNotificationGranted,
} from './lib/notifications';
import {
  isStandaloneMode,
  triggerNativeInstall,
} from './lib/pwaInstall';

/* constants */
const HABIT_COLOR = '#60a5fa';

/* ================= APP ================= */

function App() {
  const { t, i18n } = useTranslation();

  const [state, dispatch] = useReducer(reducer, defaultState);

  const { theme, toggleTheme } = useTheme();

  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const [completionModal, setCompletionModal] = useState<any>(null);
  const [completionHours, setCompletionHours] = useState('');
  const [completionNote, setCompletionNote] = useState('');

  const [undoModal, setUndoModal] = useState<any>(null);

  const [expandedCompletions, setExpandedCompletions] = useState<Set<string>>(new Set());

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [showInstallPrompt, setShowInstallPrompt] = useState(
    () => !isStandaloneMode(),
  );
  const [remoteStateLoaded, setRemoteStateLoaded] = useState(false);

  const { user, loading: authLoading } = useAuth();

  const isStandalone = isStandaloneMode();

  /* ================= EFFECTS ================= */

  // Load State (guest or authenticated)
  useEffect(() => {
    let canceled = false;

    if (authLoading) return;

    if (!user) {
      setRemoteStateLoaded(false);
      dispatch({ type: 'load', payload: loadState() });
      return;
    }

    // Authenticated user: load local cache immediately for offline speed
    const cached = loadState(user.uid);
    dispatch({ type: 'load', payload: cached });

    const loadRemoteState = async () => {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const snapshot = await getDoc(userDocRef);

        if (canceled) return;

        if (!snapshot.exists()) {
          setRemoteStateLoaded(true);
          return;
        }

        const data = snapshot.data();

        if (data?.state && typeof data.state === 'object') {
          const loadedState = {
            ...defaultState,
            ...data.state,
          };

          if ('Notification' in window) {
            const livePermission = getLiveNotificationPermission();
            loadedState.notificationSettings = {
              ...loadedState.notificationSettings,
              permissionStatus: livePermission,
            };
          }

          const isPending = localStorage.getItem(`habit-tracker-user-${user.uid}-pending`) === 'true';

          if (isPending) {
            console.info('Local state has unsynced offline changes. Syncing local state to Firestore.');
            try {
              const sanitizedState = JSON.parse(
                JSON.stringify({
                  ...cached,
                  schemaVersion: defaultState.schemaVersion,
                }),
              );

              await setDoc(
                userDocRef,
                {
                  state: sanitizedState,
                  updatedAt: serverTimestamp(),
                },
                { merge: true },
              );
              localStorage.removeItem(`habit-tracker-user-${user.uid}-pending`);
              console.info('Synced pending state on startup.');
            } catch (err) {
              console.warn('Failed to sync pending state on startup:', err);
            }
          } else {
            dispatch({
              type: 'load',
              payload: loadedState,
            });
            saveState(loadedState, user.uid);
          }
        }
      } catch (err) {
        console.error('Failed to load user state from Firestore:', err);
      } finally {
        if (!canceled) {
          setRemoteStateLoaded(true);
        }
      }
    };

    loadRemoteState();

    return () => {
      canceled = true;
    };
  }, [authLoading, user]);

  // Save State (guest or authenticated)
  useEffect(() => {
    if (authLoading) return;

    // Guest (no auth) – just local storage
    if (!user) {
      saveState(state);
      return;
    }

    // If we are offline (remote state not yet loaded), keep the current local‑first behaviour
    if (!remoteStateLoaded) {
      saveState(state, user.uid);
      localStorage.setItem(`habit-tracker-user-${user.uid}-pending`, 'true');
      return;
    }

    // Online – write to Firestore first, then update local storage
    const syncOnline = async () => {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const sanitizedState = JSON.parse(
          JSON.stringify({
            ...state,
            schemaVersion: defaultState.schemaVersion,
          }),
        );
        await setDoc(
          userDocRef,
          { state: sanitizedState, updatedAt: serverTimestamp() },
          { merge: true },
        );
        // Remote write succeeded – now persist locally and clear pending flag
        saveState(state, user.uid);
        localStorage.removeItem(`habit-tracker-user-${user.uid}-pending`);
      } catch (err) {
        console.warn('Failed to save state to Firestore (offline fallback?):', err);
        // Fallback to local‑first strategy if remote write fails
        saveState(state, user.uid);
        localStorage.setItem(`habit-tracker-user-${user.uid}-pending`, 'true');
      }
    };
    syncOnline();
  }, [state, user, authLoading, remoteStateLoaded]);

  // Sync when online transitions occur
  useEffect(() => {
    if (!user || !remoteStateLoaded) return;

    const handleOnline = async () => {
      const isPending = localStorage.getItem(`habit-tracker-user-${user.uid}-pending`) === 'true';
      if (!isPending) return;

      console.info('Device went online, syncing pending state...');
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const cachedState = loadState(user.uid);
        const sanitizedState = JSON.parse(
          JSON.stringify({
            ...cachedState,
            schemaVersion: defaultState.schemaVersion,
          }),
        );

        await setDoc(
          userDocRef,
          {
            state: sanitizedState,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
        localStorage.removeItem(`habit-tracker-user-${user.uid}-pending`);
        console.info('Pending state synced successfully.');
      } catch (err) {
        console.warn('Sync on online transition failed:', err);
      }
    };

    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [user, remoteStateLoaded]);

  /* PWA install prompt — only hide when currently running as installed PWA */
  useEffect(() => {
    setShowInstallPrompt(!isStandalone);

    try {
      localStorage.removeItem('habit-tracker-pwa-install-dismissed');
    } catch {
      // ignore
    }
  }, [isStandalone]);

  useEffect(() => {
    if (!settingsOpen || !('Notification' in window)) return;

    const livePermission = getLiveNotificationPermission();

    dispatch({
      type: 'updateNotificationSettings',
      payload: {
        ...state.notificationSettings,
        permissionStatus: livePermission,
        enabled:
          state.notificationSettings.enabled &&
          livePermission === 'granted',
      },
    });
    // Only re-sync when the settings modal opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingsOpen]);

  /* Firebase Cloud Messaging token retrieval */

  // remote load merged with local load above



  useEffect(() => {
    if (!user) return;
    const loadDeviceSettings = async () => {
      // Ensure deviceId is available in state
      const currentDeviceId = state.deviceId;
      if (!currentDeviceId) return;
      const remoteSettings = await fetchDeviceSettings(user.uid, currentDeviceId);
      if (remoteSettings) {
        dispatch({
          type: 'updateNotificationSettings',
          payload: remoteSettings,
        });
        // Also persist to local storage for offline use
        saveState({ ...state, notificationSettings: remoteSettings }, user.uid);
      }
    };
    loadDeviceSettings();
  }, [user, state.deviceId]);

  useEffect(() => {
    if (!user) return;
    if (!state.notificationSettings.enabled) return;
    if (!isNotificationGranted()) return;

    const initFCM = async () => {
      try {
        const { token, deviceId } = await initFCMForUser(
          user.uid,
          i18n,
          state.notificationSettings,
        );

        if (!token) return;

        if (deviceId) {
          dispatch({ type: 'setDeviceId', payload: deviceId });
        }

        localStorage.setItem('fcm_token', token);
      } catch (err) {
        console.error('FCM init failed:', err);
      }
    };

    initFCM();
  }, [user, i18n, state.notificationSettings]);

  // remote save merged with local save above

  /* ================= DERIVED ================= */

  const today = localDateString();

  const completionSet = useMemo(
    () =>
      new Set(
        normalizeCompletions(state.completions).map(
          (c) => `${c.habitId}|${c.date}`,
        ),
      ),
    [state.completions],
  );

  const completionsByDate = useMemo(
    () => groupByDate(normalizeCompletions(state.completions)),
    [state.completions],
  );

  const habitsById = useMemo(
    () => Object.fromEntries(state.habits.map((h) => [h.id, h])),
    [state.habits],
  );

  const activeHabits = useMemo(
    () => state.habits.filter((h) => h.active),
    [state.habits],
  );

  const totalCompletedToday = useMemo(
    () =>
      activeHabits.filter((h) =>
        completionSet.has(`${h.id}|${today}`),
      ).length,
    [activeHabits, completionSet, today],
  );

  const stats = useMemo(
    () => ({
      longestStreak: getLongestStreak(state.habits, state.completions),
      totalCompletions: getTotalCompletions(state.completions),
      habitStats: getHabitStats(state.habits, state.completions),
    }),
    [state.habits, state.completions],
  );

  const legacyYears = useMemo(() => {
    const years = new Set<number>();
    const now = new Date();

    years.add(now.getFullYear());

    state.completions.forEach((c) => {
      years.add(new Date(`${c.date}T00:00:00`).getFullYear());
    });

    return Array.from(years).sort((a, b) => b - a);
  }, [state.completions]);

  const yearSummary = useMemo(
    () =>
      buildYearSummaries(
        legacyYears,
        completionsByDate,
        habitsById,
        activeHabits.length,
      ),
    [legacyYears, completionsByDate, habitsById, activeHabits.length],
  );

  const selectedDayItems = useMemo(() => {
    if (!selectedDay) return [];

    const items = completionsByDate[selectedDay] ?? [];

    const grouped = items.reduce<Record<string, Completion[]>>(
      (acc, item) => {
        (acc[item.habitId] ??= []).push(item);
        return acc;
      },
      {},
    );

    return Object.entries(grouped).map(([habitId, entries]) => ({
      habitId,
      entries,
    }));
  }, [selectedDay, completionsByDate]);

  const undoCompletions = useMemo(() => {
    if (!undoModal) return [];

    const target = undoModal.date;

    return normalizeCompletions(state.completions).filter(
      (c) =>
        c.habitId === undoModal.habitId && c.date === target,
    );
  }, [undoModal, state.completions]);

  /* ================= NOTIFICATIONS ================= */

  useNotifications({
    enabled:
      !!user &&
      state.notificationSettings.enabled &&
      isNotificationGranted(),
    settings: state.notificationSettings,
    habits: state.habits,
    completions: state.completions,
    language: i18n.language,
    isStandalone
  });


  /* ================= HANDLERS ================= */

  const handleMarkToday = (habit: Habit) =>
    setCompletionModal({ habitId: habit.id, date: today });

  const handleOpenUndo = (habit: Habit) =>
    setUndoModal({ habitId: habit.id, date: today });

  const handleSaveCompletion = () => {
    if (!completionModal) return;

    dispatch({
      type: 'addCompletion',
      payload: {
        habitId: completionModal.habitId,
        date: completionModal.date,
        hours: completionHours ? Number(completionHours) : undefined,
        note: completionNote || undefined,
      },
    });

    setCompletionModal(null);
  };

  const handleRemoveCompletion = (id: string) =>
    dispatch({ type: 'removeCompletion', payload: { completionId: id } });

  const toggleCompletionDetails = (habitId: string, date: string) => {
    const key = `${habitId}-${date}`;

    setExpandedCompletions((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
  };

  const handleInstallApp = async () => {
    const outcome = await triggerNativeInstall();

    if (outcome === 'accepted') {
      setShowInstallPrompt(false);
    }
  };

  const handleNotificationsEnabled = async () => {
    if (!user || !isNotificationGranted()) return;

    try {
      const { token, deviceId } = await initFCMForUser(
        user.uid,
        i18n,
        {
          ...state.notificationSettings,
          enabled: true,
          permissionStatus: 'granted',
        },
      );

      if (!token) return;

      if (deviceId) {
        dispatch({ type: 'setDeviceId', payload: deviceId });
      }
      localStorage.setItem('fcm_token', token);
    } catch (err) {
      console.error('FCM init failed:', err);
    }
  };

  const handleSaveSettings = () => {
    if ('Notification' in window) {
      const livePermission = getLiveNotificationPermission();

      const newSettings = {
        ...state.notificationSettings,
        permissionStatus: livePermission,
      };

      dispatch({
        type: 'updateNotificationSettings',
        payload: newSettings,
      });

      // Persist per-device notification settings if we have user and deviceId
      if (user && state.deviceId) {
        // Fire off async update (no await needed in UI thread)
        updateDeviceSettings(user.uid, state.deviceId, newSettings).catch((err) => {
          console.error('Failed to sync device settings:', err);
        });
      }
    }

    setSettingsOpen(false);
  };

  const completionFieldStyle = {
    width: '100%',
    padding: '0.95rem 1rem',
    borderRadius: '14px',
    border: '1px solid rgba(148, 163, 184, 0.4)',
    background: 'var(--input-bg)',
    color: 'var(--text-primary)',
  };

  const handleAddHabit = (name: string, color: string) => {
    dispatch({
      type: 'addHabit',
      payload: { name, color },
    });
  };

  /* ================= RENDER ================= */

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        i18n={i18n}
        openSettings={() => setSettingsOpen(true)}
      />

      <header>
        <p>{t('subtitle')}</p>
      </header>

      <AddHabitForm onAdd={handleAddHabit} t={t} />

      <InstallPrompt
        showInstallPrompt={showInstallPrompt}
        handleInstallApp={handleInstallApp}
        onDismiss={handleDismissInstall}
      />

      <SummaryCards
        activeHabitsLength={activeHabits.length}
        totalCompletedToday={totalCompletedToday}
        longestStreak={stats.longestStreak}
        totalCompletions={stats.totalCompletions}
      />

      <YearHeatmap
        yearSummary={yearSummary}
        activeHabitsLength={activeHabits.length}
        today={today}
        setSelectedDay={setSelectedDay}
        getDayBackground={getDayBackground}
      />

      <section className="card">
        {state.habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completions={state.completions}
            completionSet={completionSet}
            today={today}
            streak={getStreak(habit.id, completionSet)}
            stats={stats}
            t={t}
            handleMarkToday={handleMarkToday}
            handleOpenUndo={handleOpenUndo}
            setEditingId={setEditingId}
            setEditingName={setEditingName}
            dispatch={dispatch}
          />
        ))}
      </section>

      <SettingsModal
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        state={state}
        dispatch={dispatch}
        handleSaveSettings={handleSaveSettings}
        onNotificationsEnabled={handleNotificationsEnabled}
      />

      <DayDetailsModal
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedDayItems={selectedDayItems}
        habits={state.habits}
        expandedCompletions={expandedCompletions}
        toggleCompletionDetails={toggleCompletionDetails}
        theme={theme}
        t={t}
      />

      <UndoModal
        undoModal={undoModal}
        setUndoModal={setUndoModal}
        state={state}
        undoCompletions={undoCompletions}
        handleRemoveCompletion={handleRemoveCompletion}
      />

      <EditHabitModal
        editingId={editingId}
        editingName={editingName}
        setEditingId={setEditingId}
        setEditingName={setEditingName}
        t={t}
        onSave={() => {
          if (!editingId) return;

          dispatch({
            type: 'editHabit',
            payload: { id: editingId, name: editingName },
          });

          setEditingId(null);
        }}
      />

      <CompletionModal
        completionModal={completionModal}
        setCompletionModal={setCompletionModal}
        completionHours={completionHours}
        setCompletionHours={setCompletionHours}
        completionNote={completionNote}
        setCompletionNote={setCompletionNote}
        completionFieldStyle={completionFieldStyle}
        handleSaveCompletion={handleSaveCompletion}
        habits={state.habits}
        t={t}
      />
    </div>
  );
}

export default App;