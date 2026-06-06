import { useState } from 'react';
import {
  loginEmail,
  registerEmail,
  loginWithGoogle,
} from '../lib/firebase';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await loginEmail(email, password);
  };

  const handleRegister = async () => {
    await registerEmail(email, password);
  };

  const handleGoogle = async () => {
    await loginWithGoogle();
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

          <div className="login-actions">
            <button className="login-button primary" onClick={handleLogin}>
              Login
            </button>
            <button className="login-button secondary" onClick={handleRegister}>
              Register
            </button>
          </div>

          <div className="login-divider">or continue with</div>

          <button className="login-button oauth" onClick={handleGoogle}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};