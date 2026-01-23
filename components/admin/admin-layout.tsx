'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from './common/sidebar';
import { Header } from './common/header';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Initialize based on window width if available (client-side)
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true; // Default to open on server-side
  });
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize mobile state
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  // On mobile, start with sidebar in collapsed (icon-only) mode
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't redirect if we're on the login page
  const isLoginPage = pathname === '/admin/login' || pathname?.startsWith('/admin/login');

  useEffect(() => {
    // If authenticated and on login page, redirect to dashboard
    if (isLoginPage && status === 'authenticated' && session) {
      router.replace('/admin');
      return;
    }
    
    // If unauthenticated and not on login page, redirect to login
    if (!isLoginPage && status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, session, router, isLoginPage]);

  // Don't show layout on login page - just return children directly
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile Overlay - Only show when sidebar is expanded on mobile */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 min-w-0 overflow-hidden flex flex-col bg-gray-50 ${!isSidebarOpen ? 'ml-16 lg:ml-0' : ''
        }`}>
        {/* Header */}
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
