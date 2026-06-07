import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './styles.css';
import './i18n/config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root />
);

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        const checkForUpdates = () => registration.update().catch(() => {});

        checkForUpdates();

        document.addEventListener('visibilitychange', () => {
          if (!document.hidden) checkForUpdates();
        });

        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (refreshing) return;
          refreshing = true;
          window.location.reload();
        });
      })
      .catch((err) => {
        console.error('SW registration failed', err);
      });
  });
}
