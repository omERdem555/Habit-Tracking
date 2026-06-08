import { useTranslation } from 'react-i18next';
import type { AppState } from '../types';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import {
  getLiveNotificationPermission,
  isNotificationGranted,
  requestNotificationPermission,
} from '../lib/notifications';
import { ensureServiceWorkerReady } from '../lib/serviceWorker';

interface SettingsModalProps {
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  state: AppState;
  dispatch: React.Dispatch<any>;
  handleSaveSettings: () => void;
  onNotificationsEnabled: () => Promise<void>;
}

function SettingsModal({
  settingsOpen,
  setSettingsOpen,
  state,
  dispatch,
  handleSaveSettings,
  onNotificationsEnabled,
}: SettingsModalProps) {
  const { t, i18n } = useTranslation();

  if (!settingsOpen) return null;

  const notificationsActive =
    state.notificationSettings.enabled && isNotificationGranted();

  const handleNotificationClick = () => {
    if (notificationsActive) {
      dispatch({
        type: 'updateNotificationSettings',
        payload: {
          ...state.notificationSettings,
          enabled: false,
          permissionStatus: getLiveNotificationPermission(),
        },
      });
      return;
    }

    if (!('Notification' in window)) return;

    requestNotificationPermission().then(async (permission) => {
      const granted = permission === 'granted';

      dispatch({
        type: 'updateNotificationSettings',
        payload: {
          ...state.notificationSettings,
          enabled: granted,
          permissionStatus: permission,
        },
      });

      if (granted) {
        await onNotificationsEnabled();
      }
    });
  };

  const handleSendTestNotification = () => {
    if (!('Notification' in window)) return;

    console.info('[TEST NOTIF] click');

    requestNotificationPermission().then(async (permission) => {
      const granted = permission === 'granted';

      console.info('[TEST NOTIF] permission result', { permission, granted });

      dispatch({
        type: 'updateNotificationSettings',
        payload: {
          ...state.notificationSettings,
          permissionStatus: permission,
          enabled: granted && state.notificationSettings.enabled,
        },
      });

      if (!granted) return;

      const title =
        i18n.language === 'tr' ? 'Test Bildirimi' : 'Test Notification';
      const body =
        i18n.language === 'tr'
          ? 'Bildirim sistemi doğru çalışıyor.'
          : 'Your notification system is working correctly.';

      try {
        const registration = await ensureServiceWorkerReady();
        console.info('[TEST NOTIF] sw ready', {
          scope: registration?.scope ?? null,
          activeScript: registration?.active?.scriptURL ?? null,
        });

        try {
          new Notification(title, {
            body,
            icon: '/icon192.png',
          });
          console.info('[TEST NOTIF] shown via Notification constructor');
        } catch (error) {
          console.warn(
            '[TEST NOTIF] Notification constructor failed, falling back to SW showNotification',
            error,
          );

          if (registration?.showNotification) {
            await registration.showNotification(title, {
              body,
              icon: '/icon192.png',
              badge: '/icon192.png',
            });
            console.info('[TEST NOTIF] shown via service worker registration');
          } else {
            throw new Error('No notification display method available.');
          }
        }
      } catch (error) {
        console.error('Test notification failed', error);
      }
    });
  };

  return (
    <div className="modal-backdrop" onClick={() => setSettingsOpen(false)}>
      <div
        className="modal settings-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>
            {i18n.language === 'tr'
              ? 'Bildirim Ayarları'
              : 'Notification Settings'}
          </h3>

          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setSettingsOpen(false)}
          >
            {t('close')}
          </button>
        </div>

        <div className="settings-grid">
          <label className="settings-toggle">
            <input
              type="checkbox"
              checked={notificationsActive}
              onClick={(e) => {
                e.preventDefault();
                handleNotificationClick();
              }}
              readOnly
            />

            <span>
              {i18n.language === 'tr'
                ? 'Bildirimleri Etkinleştir'
                : 'Enable Notifications'}
            </span>
          </label>

          <div className="settings-field">
            <span className="settings-label">
              {i18n.language === 'tr'
                ? 'Hatırlatma Aralığı (Saat)'
                : 'Reminder Interval (Hours)'}
            </span>

            <select
              value={state.notificationSettings.intervalHours}
              onChange={(e) =>
                dispatch({
                  type: 'updateNotificationSettings',
                  payload: {
                    ...state.notificationSettings,
                    intervalHours: Number(e.target.value),
                  },
                })
              }
            >
              {[1, 2, 3, 4, 6, 8, 12].map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-field">
            <span className="settings-label">
              {i18n.language === 'tr'
                ? 'Başlangıç Saati'
                : 'Start Hour'}
            </span>

            <input
              type="number"
              min={0}
              max={23}
              value={state.notificationSettings.startHour}
              onChange={(e) =>
                dispatch({
                  type: 'updateNotificationSettings',
                  payload: {
                    ...state.notificationSettings,
                    startHour: Number(e.target.value),
                  },
                })
              }
            />
          </div>

          <div className="settings-field">
            <span className="settings-label">
              {i18n.language === 'tr'
                ? 'Bitiş Saati'
                : 'End Hour'}
            </span>

            <input
              type="number"
              min={0}
              max={23}
              value={state.notificationSettings.endHour}
              onChange={(e) =>
                dispatch({
                  type: 'updateNotificationSettings',
                  payload: {
                    ...state.notificationSettings,
                    endHour: Number(e.target.value),
                  },
                })
              }
            />
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <button
              type="button"
              className="settings-save-btn"
              onClick={handleSaveSettings}
            >
              {t('save')}
            </button>
            <button
              type="button"
              className="settings-save-btn"
              onClick={handleSendTestNotification}
            >
              {i18n.language === 'tr'
                ? 'Test Bildirimi Gönder'
                : 'Send Test Notification'}
            </button>
            <button
              type="button"
              className="settings-logout-btn"
              onClick={async () => {
                try {
                  await signOut(auth);
                  setSettingsOpen(false);
                } catch (error) {
                  console.error('Logout failed', error);
                  alert(
                    i18n.language === 'tr'
                      ? 'Çıkış yapılamadı. Lütfen tekrar deneyin.'
                      : 'Logout failed. Please try again.',
                  );
                }
              }}
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
