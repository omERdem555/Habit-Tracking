import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './i18n/config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const SW_CLEANUP_FLAG = 'sw-cleanup-done';

if ('serviceWorker' in navigator && !localStorage.getItem(SW_CLEANUP_FLAG)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        localStorage.setItem(SW_CLEANUP_FLAG, '1');
      })
      .catch(() => {});
  });
}
