'use client';

import { usePathname } from 'next/navigation';
import { AdminLayout } from '@/components/admin/admin-layout';
import { AdminProviders } from '@/components/admin/providers';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// Component to handle login page redirect (must be inside SessionProvider)
function LoginPageRedirect({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoginPage = pathname === '/admin/login' || pathname?.startsWith('/admin/login');

  // Prevent authenticated users from accessing login page
  useEffect(() => {
    if (isLoginPage && status === 'authenticated' && session) {
      // Use replace to remove login from history
      router.replace('/admin');
    }
  }, [isLoginPage, status, session, router]);

  // Show loading while checking session on login page
  if (isLoginPage && status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render login page if authenticated
  if (isLoginPage && status === 'authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login' || pathname?.startsWith('/admin/login');

  // Force light theme and English language for admin
  useEffect(() => {
    // Force light theme
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    // Ensure lang is English
    document.documentElement.lang = 'en';
  }, []);

  // For login page, provide SessionProvider and redirect handler
  if (isLoginPage) {
    return (
      <AdminProviders>
        <LoginPageRedirect>{children}</LoginPageRedirect>
      </AdminProviders>
    );
  }

  // For other admin pages, provide both SessionProvider and AdminLayout
  return (
    <AdminProviders>
      <AdminLayout>{children}</AdminLayout>
    </AdminProviders>
  );
}
