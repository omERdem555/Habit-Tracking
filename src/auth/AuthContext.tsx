import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, getRedirectResult } from 'firebase/auth';
import { auth } from '../lib/firebase';

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    // Handle redirect sign-in results (required when using signInWithRedirect)
    // This ensures errors or additional info from the redirect flow are processed.
    getRedirectResult(auth).catch((err) => {
      // don't break auth flow; log for debugging
      // Common cause: unauthorized domain (needs to be added in Firebase console)
      // or user dismissed the provider UI.
      // We intentionally do not surface an alert here to avoid UI flashes on load.
      // The Login page can still show errors from explicit sign-in attempts.
      // eslint-disable-next-line no-console
      console.warn('getRedirectResult error:', err);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);