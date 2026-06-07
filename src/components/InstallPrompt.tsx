import { useTranslation } from 'react-i18next';

interface InstallPromptProps {
  showInstallPrompt: boolean;
  handleInstallApp: () => void;
  onDismiss: () => void;
}

function InstallPrompt({
  showInstallPrompt,
  handleInstallApp,
  onDismiss,
}: InstallPromptProps) {
  const { i18n } = useTranslation();

  if (!showInstallPrompt) return null;

  return (
    <section className="card" style={{ marginBottom: '1rem' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
        }}
      >
        <div style={{ width: '100%' }}>
          <strong
            style={{
              display: 'block',
              marginBottom: '0.35rem',
              lineHeight: '1.5',
              color: 'var(--text-primary)',
            }}
          >
            {i18n.language === 'tr'
              ? 'Uygulamayı yüklemek ister misiniz?'
              : 'Would you like to install the app?'}
          </strong>
          <span
            style={{
              display: 'block',
              fontSize: '0.9rem',
              opacity: 0.8,
              lineHeight: 1.5,
            }}
          >
            {i18n.language === 'tr'
              ? 'Bildirimler ve çevrimdışı kullanım için önerilir.'
              : 'Recommended for reminders and offline use.'}
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            width: '100%',
          }}
        >
          <button
            type="button"
            onClick={handleInstallApp}
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              borderRadius: '14px',
              border: '1px solid var(--button-border)',
              background: 'var(--button-bg)',
              color: 'var(--button-text)',
            }}
          >
            {i18n.language === 'tr' ? 'Yükle' : 'Install'}
          </button>

          <button
            type="button"
            onClick={onDismiss}
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              borderRadius: '14px',
              border: '1px solid var(--button-border)',
              background: 'var(--button-bg)',
              color: 'var(--button-text)',
            }}
          >
            {i18n.language === 'tr' ? 'Hayır' : 'Not now'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default InstallPrompt;
