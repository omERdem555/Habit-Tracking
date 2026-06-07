import type { Habit } from '../types';

export const buildReminderMessage = (
  language: string,
  missing: Habit[],
  missedYesterday: Habit[],
) => {
  const names = (arr: Habit[]) => arr.slice(0, 3).map((h) => h.name).join(', ');

  const parts: string[] = [];

  if (missedYesterday.length > 0) {
    parts.push(
      language === 'tr'
        ? `Dün dünde kaldı. Bugün yeniden başla: ${names(missedYesterday)}`
        : `Yesterday is gone. Restart today: ${names(missedYesterday)};`,
    );
  }

  if (missing.length > 0) {
    parts.push(
      language === 'tr'
        ? `Bugün şu görevleri tamamlamak ister misin: ${names(missing)}`
        : ` Do you want to complete: ${names(missing)}?`,
    );
  }

  if (parts.length === 0) {
    return language === 'tr'
      ? 'Bugün için bekleyen görev yok.'
      : 'No pending habits for today.';
  }

  return parts.join(' | ');
};
