"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  isDark: boolean;
  status: "loading" | "ready";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  clearStoredTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "cloudmlm-theme";
const COLOR_SCHEME_KEY = "color-scheme" as const;

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.setProperty(COLOR_SCHEME_KEY, theme);
}

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

function storeTheme(theme: Theme) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, theme);
}

function removeStoredTheme() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [status, setStatus] = useState<"loading" | "ready">("loading");
  const mediaQueryRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = readStoredTheme();
    const systemTheme = getSystemTheme();
    const initialTheme = stored ?? systemTheme;

    applyTheme(initialTheme);
    setThemeState(initialTheme);
    setStatus("ready");

    mediaQueryRef.current = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (event: MediaQueryListEvent) => {
      const currentStored = readStoredTheme();
      if (currentStored) {
        return;
      }
      const nextTheme: Theme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
      setThemeState(nextTheme);
    };

    mediaQueryRef.current.addEventListener("change", handleSystemChange);

    return () => {
      mediaQueryRef.current?.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
    storeTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const clearThemePreference = useCallback(() => {
    removeStoredTheme();
    const systemTheme = getSystemTheme();
    applyTheme(systemTheme);
    setThemeState(systemTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDark: theme === "dark",
      status,
      setTheme,
      toggleTheme,
      clearStoredTheme: clearThemePreference
    }),
    [theme, status, setTheme, toggleTheme, clearThemePreference]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
