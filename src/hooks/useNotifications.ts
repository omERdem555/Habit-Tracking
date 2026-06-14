import { useEffect, useRef } from 'react';
import type { AppState, Habit } from '../types';
import { localDateString } from '../lib/date';
import { buildReminderMessages } from '../lib/notificationMessages';

type Params = {
  enabled: boolean;
  settings: AppState['notificationSettings'];
  habits: Habit[];
  completions: { habitId: string; date: string }[];
  language: string;
  isStandalone: boolean;
};

const META_KEY = 'habit-tracker-meta';

const readMeta = () => {
  try {
    const raw = localStorage.getItem(META_KEY);
    return raw ? JSON.parse(raw) : { lastNotified: 0 };
  } catch {
    return { lastNotified: 0 };
  }
};

const writeMeta = (meta: { lastNotified: number }) => {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(meta));
  } catch {}
};

export default function useNotifications({
  enabled,
  settings,
  habits,
  completions,
  language,
}: Params) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!('Notification' in window)) return;

    if (!enabled) return;
    if (Notification.permission !== 'granted') return;

    const getMissingToday = () => {
      const today = localDateString();

      const doneSet = new Set(
        completions
          .filter((c) => c.date.slice(0, 10) === today)
          .map((c) => c.habitId),
      );

      return habits.filter((h) => h.active && !doneSet.has(h.id));
    };

    const getMissedYesterday = () => {
      const y = new Date();
      y.setDate(y.getDate() - 1);
      const yd = y.toISOString().slice(0, 10);

      const doneSet = new Set(
        completions
          .filter((c) => c.date.slice(0, 10) === yd)
          .map((c) => c.habitId),
      );

      return habits.filter((h) => h.active && !doneSet.has(h.id));
    };

    const tick = async () => {
      const hour = new Date().getHours();

      if (hour < settings.startHour || hour > settings.endHour) return;

      const meta = readMeta();
      const now = Date.now();

      // 10-minute buffer to avoid interval skipping/drifting due to small tick delays
      const buffer = 10 * 60 * 1000;
      const interval = settings.intervalHours * 60 * 60 * 1000 - buffer;
      if (now - meta.lastNotified < interval) return;

      const missedYesterday = getMissedYesterday();
      const missing = getMissingToday();
      const bodies = buildReminderMessages(language, missing, missedYesterday);

      if (bodies.length === 0) return;

      try {
        const reg = await navigator.serviceWorker.getRegistration();

        for (const body of bodies) {
          const title = language === 'tr' ? 'Hatırlatma' : 'Reminder';
          const isYesterday = body.includes('Dün') || body.includes('Yesterday');
          const tag = isYesterday ? 'reminder-yesterday' : 'reminder-today';

          const payload = {
            body,
            icon: '/icon512.png',
            badge: '/icon192.png',
            tag,
            data: {
              type: 'reminder',
            },
          };

          if (reg?.showNotification) {
            reg.showNotification(title, payload);
          } else {
            new Notification(title, { body, tag, icon: '/icon192.png' });
          }
        }

        writeMeta({ lastNotified: now });
      } catch {}
    };

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(tick, 15 * 60 * 1000);
    tick();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enabled, settings, habits, completions, language]);
}
