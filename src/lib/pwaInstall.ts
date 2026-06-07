type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const listeners = new Set<(event: BeforeInstallPromptEvent) => void>();

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    listeners.forEach((listener) => listener(deferredPrompt!));
  });
}

export function getDeferredInstallPrompt(): BeforeInstallPromptEvent | null {
  return deferredPrompt;
}

export function onInstallPromptAvailable(
  listener: (event: BeforeInstallPromptEvent) => void,
): () => void {
  if (deferredPrompt) listener(deferredPrompt);
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function waitForInstallPrompt(
  timeoutMs = 5000,
): Promise<BeforeInstallPromptEvent | null> {
  if (deferredPrompt) return Promise.resolve(deferredPrompt);

  return new Promise((resolve) => {
    let settled = false;

    const finish = (event: BeforeInstallPromptEvent | null) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      unsubscribe();
      resolve(event);
    };

    const timeout = window.setTimeout(
      () => finish(deferredPrompt),
      timeoutMs,
    );

    const unsubscribe = onInstallPromptAvailable((event) => {
      finish(event);
    });
  });
}

export function isStandaloneMode(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true
  );
}

export async function triggerNativeInstall(): Promise<'accepted' | 'dismissed' | 'unavailable'> {
  const promptEvent = deferredPrompt ?? (await waitForInstallPrompt(5000));

  if (!promptEvent) return 'unavailable';

  await promptEvent.prompt();
  const choice = await promptEvent.userChoice;

  deferredPrompt = null;

  return choice.outcome;
}
