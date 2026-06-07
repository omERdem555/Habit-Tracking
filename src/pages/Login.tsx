import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  loginEmail,
  registerEmail,
  loginWithGoogle,
} from '../lib/firebase';
import { getFirebaseErrorMessage } from '../lib/firebaseErrors';

export const LoginPage = () => {
  const { i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError(
        i18n.language === 'tr'
          ? 'Email ve şifre giriniz.'
          : 'Enter email and password.',
      );
      return;
    }

    try {
      await loginEmail(email, password);
    } catch (err: any) {
      const translatedError = getFirebaseErrorMessage(
        err,
        i18n.language === 'tr' ? 'tr' : 'en',
      );
      setError(translatedError);
    }
  };

  const handleRegister = async () => {
    setError('');
    if (!email || !password) {
      setError(
        i18n.language === 'tr'
          ? 'Email ve şifre giriniz.'
          : 'Enter email and password.',
      );
      return;
    }

    try {
      await registerEmail(email, password);
    } catch (err: any) {
      const translatedError = getFirebaseErrorMessage(
        err,
        i18n.language === 'tr' ? 'tr' : 'en',
      );
      setError(translatedError);
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err: any) {
      const translatedError = getFirebaseErrorMessage(
        err,
        i18n.language === 'tr' ? 'tr' : 'en',
      );
      setError(translatedError);
    }
  };

  return (
    <div className="login-page">
      <div className="card login-card">
        <div className="login-header">
          <h1>Habit Tracker</h1>
          <p>Track habits, get reminders, and stay consistent.</p>
        </div>

        <div className="login-form">
          <label>
            Email
            <input
              className="login-input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error ? <div className="login-error">{error}</div> : null}

          <div className="login-actions">
            <button type="button" className="login-button primary" onClick={handleLogin}>
              Login
            </button>
            <button type="button" className="login-button secondary" onClick={handleRegister}>
              Register
            </button>
          </div>

          <div className="login-divider">or continue with</div>

          <button type="button" className="login-button oauth" onClick={handleGoogle}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};