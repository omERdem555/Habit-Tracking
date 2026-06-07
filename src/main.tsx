import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './styles.css';
import './i18n/config';
import { registerServiceWorker } from './lib/serviceWorker';
import './lib/pwaInstall';

registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Root />
);
