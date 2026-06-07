import { useTranslation } from 'react-i18next';
import type { AppState } from '../types';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface SettingsModalProps {
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  state: AppState;
  dispatch: React.Dispatch<any>;
  handleSaveSettings: () => void;
}

function SettingsModal({
  settingsOpen,
  setSettingsOpen,
  state,
  dispatch,
  handleSaveSettings,
}: SettingsModalProps) {
  const { t, i18n } = useTranslation();

  if (!settingsOpen) return null;

  const handleNotificationToggle = async (checked: boolean) => {
    if (!checked) {
      dispatch({
        type: 'updateNotificationSettings',
        payload: {
          ...state.notificationSettings,
          enabled: false,
          permissionStatus:
            'Notification' in window ? Notification.permission : 'denied',
        },
      });
      return;
    }

    if (!('Notification' in window)) {
      alert(
        i18n.language === 'tr'
          ? 'Bu cihaz bildirim desteklemiyor.'
          : 'Notifications are not supported on this device.',
      );
      return;
    }

    let permission = Notification.permission;

    if (permission !== 'granted') {
      permission = await Notification.requestPermission();
    }

    const enabled = permission === 'granted';

    dispatch({
      type: 'updateNotificationSettings',
      payload: {
        ...state.notificationSettings,
        enabled,
        permissionStatus: permission,
      },
    });

    if (!enabled && permission === 'denied') {
      alert(
        i18n.language === 'tr'
          ? 'Bildirim izni reddedildi. Tarayıcı veya telefon ayarlarından tekrar açabilirsiniz.'
          : 'Notification permission denied. You can enable it from your browser or phone settings.',
      );
    }
  };

  const handleSendTestNotification = async () => {
    if (!('Notification' in window)) {
      alert(
        i18n.language === 'tr'
          ? 'Bu cihaz bildirim desteklemiyor.'
          : 'Notifications are not supported on this device.',
      );
      return;
    }

    let permission = Notification.permission;

    if (permission !== 'granted') {
      permission = await Notification.requestPermission();
      dispatch({
        type: 'updateNotificationSettings',
        payload: {
          ...state.notificationSettings,
          permissionStatus: permission,
          enabled: permission === 'granted' && state.notificationSettings.enabled,
        },
      });
    }

    if (permission !== 'granted') {
      return;
    }

    const title =
      i18n.language === 'tr' ? 'Test Bildirimi' : 'Test Notification';
    const body =
      i18n.language === 'tr'
        ? 'Bildirim sistemi doğru çalışıyor.'
        : 'Your notification system is working correctly.';

    try {
      const registration = await navigator.serviceWorker.getRegistration();

      if (registration?.showNotification) {
        registration.showNotification(title, {
          body,
          icon: '/icon192.png',
          badge: '/icon192.png',
        });
      } else {
        new Notification(title, {
          body,
          icon: '/icon192.png',
        });
      }
    } catch (error) {
      console.error('Test notification failed', error);
      alert(
        i18n.language === 'tr'
          ? 'Test bildirimi gönderilemedi.'
          : 'Failed to send test notification.',
      );
    }
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
              checked={state.notificationSettings.enabled}
              onChange={(e) =>
                handleNotificationToggle(e.target.checked)
              }
            />

            <span>
              {i18n.language === 'tr'
                ? 'Bildirimleri Etkinleştir'
                : 'Enable Notifications'}
            </span>
          </label>

          <div
            style={{
              fontSize: 12,
              opacity: 0.7,
            }}
          >
            {Notification.permission === 'granted' &&
              (i18n.language === 'tr'
                ? 'Bildirim izni verildi'
                : 'Notification permission granted')}

            {Notification.permission === 'denied' &&
              (i18n.language === 'tr'
                ? 'Bildirim izni reddedildi'
                : 'Notification permission denied')}

            {Notification.permission === 'default' &&
              (i18n.language === 'tr'
                ? 'Bildirim izni bekleniyor'
                : 'Notification permission pending')}
          </div>

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