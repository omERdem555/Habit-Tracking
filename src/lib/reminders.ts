export type Habit = {
  id: string;
  name: string;
  active: boolean;
};

export type Completion = {
  habitId: string;
  date: string;
};

export type NotificationSettings = {
  enabled: boolean;
  intervalHours: number;
  startHour: number;
  endHour: number;
};

export type UserAppState = {
  habits: Habit[];
  completions: Completion[];
  notificationSettings: NotificationSettings;
};

export function getLocalHour(timezone: string, now = new Date()): number {
  const hour = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    hour12: false,
  }).format(now);

  return parseInt(hour, 10);
}

export function getLocalDateString(timezone: string, now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

export function getYesterdayLocalDate(timezone: string, now = new Date()): string {
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  return getLocalDateString(timezone, yesterday);
}

export function isWithinNotificationWindow(
  settings: NotificationSettings,
  timezone: string,
  now = new Date(),
): boolean {
  const hour = getLocalHour(timezone, now);
  return hour >= settings.startHour && hour <= settings.endHour;
}

type LastNotifiedValue =
  | number
  | { toMillis?: () => number }
  | null
  | undefined;

export function intervalElapsed(
  lastNotified: LastNotifiedValue,
  intervalHours: number,
  now = new Date(),
): boolean {
  if (!lastNotified) return true;

  const lastMs =
    typeof lastNotified === 'number'
      ? lastNotified
      : typeof lastNotified.toMillis === 'function'
        ? lastNotified.toMillis()
        : 0;

  const intervalMs = intervalHours * 60 * 60 * 1000;
  return now.getTime() - lastMs >= intervalMs;
}

export function getMissingToday(
  habits: Habit[],
  completions: Completion[],
  timezone: string,
  now = new Date(),
): Habit[] {
  const today = getLocalDateString(timezone, now);

  const doneSet = new Set(
    completions
      .filter((c) => c.date.slice(0, 10) === today)
      .map((c) => c.habitId),
  );

  return habits.filter((h) => h.active && !doneSet.has(h.id));
}

export function getMissedYesterday(
  habits: Habit[],
  completions: Completion[],
  timezone: string,
  now = new Date(),
): Habit[] {
  const yesterday = getYesterdayLocalDate(timezone, now);

  const doneSet = new Set(
    completions
      .filter((c) => c.date.slice(0, 10) === yesterday)
      .map((c) => c.habitId),
  );

  return habits.filter((h) => h.active && !doneSet.has(h.id));
}

export function buildReminderMessage(
  language: string,
  missing: Habit[],
  missedYesterday: Habit[],
): string {
  const names = (arr: Habit[]) => arr.slice(0, 3).map((h) => h.name).join(', ');

  const parts: string[] = [];

  if (missedYesterday.length > 0) {
    parts.push(
      language === 'tr'
        ? `Dün kaçırdıkların: ${names(missedYesterday)}`
        : `Missed yesterday: ${names(missedYesterday)}`,
    );
  }

  if (missing.length > 0) {
    parts.push(
      language === 'tr'
        ? `Bugün tamamlayabileceklerin: ${names(missing)}`
        : `Missing today: ${names(missing)}`,
    );
  }

  if (parts.length === 0) {
    return language === 'tr'
      ? 'Bugün için bekleyen görev yok.'
      : 'No pending habits for today.';
  }

  return parts.join(' | ');
}
