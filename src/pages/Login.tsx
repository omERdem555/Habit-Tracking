import { useState } from 'react';
import {
  loginEmail,
  registerEmail,
  loginWithGoogle,
} from '../lib/firebase';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Email ve şifre giriniz. / Enter email and password.');
      return;
    }

    try {
      await loginEmail(email, password);
    } catch (err: any) {
      setError(err.message || 'Giriş başarısız. / Login failed.');
    }
  };

  const handleRegister = async () => {
    setError('');
    if (!email || !password) {
      setError('Email ve şifre giriniz. / Enter email and password.');
      return;
    }

    try {
      await registerEmail(email, password);
    } catch (err: any) {
      setError(err.message || 'Kayıt başarısız. / Register failed.');
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message || 'Google ile giriş başarısız. / Google sign-in failed.');
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