'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect } from 'react';

export function AdminProviders({ children }: { children: React.ReactNode }) {
  // Force light theme for admin
  useEffect(() => {
    // Remove dark class and ensure light theme
    document.documentElement.classList.remove('dark');
    // Set theme attribute to light
    document.documentElement.setAttribute('data-theme', 'light');
    // Also set class for Tailwind
    document.documentElement.className = document.documentElement.className.replace('dark', '');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
