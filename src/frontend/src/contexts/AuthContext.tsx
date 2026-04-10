import {
  type StoredUser,
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from "@/lib/auth";
import type { UserRole } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextValue {
  user: StoredUser | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginAsRole: (userData: StoredUser) => void;
  logout: () => void;
  principal: string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { identity, loginStatus, clear } = useInternetIdentity();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = getStoredUser();
    if (stored) {
      setUser(stored);
    }
    setIsLoading(false);
  }, []);

  const loginAsRole = useCallback((userData: StoredUser) => {
    setStoredUser(userData);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    clearStoredUser();
    setUser(null);
    clear();
  }, [clear]);

  const principal = useMemo(() => {
    if (identity && loginStatus === "success") {
      return identity.getPrincipal().toText();
    }
    return null;
  }, [identity, loginStatus]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      role: user?.role ?? null,
      isAuthenticated: !!user,
      isLoading,
      loginAsRole,
      logout,
      principal,
    }),
    [user, isLoading, loginAsRole, logout, principal],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}
