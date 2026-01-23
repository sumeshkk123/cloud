'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronLeft, User, ChevronDown, LogOut } from 'lucide-react';
import { NotificationDropdown } from '@/components/layout/notification-dropdown';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  const { data: session } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
      {/* Left side - Collapse button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          ) : (
            <Menu className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Right side - Welcome text, Notifications and Profile */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <p className="text-sm text-gray-600">
            Welcome <span className="font-semibold text-gray-900">{session?.user?.name || 'Admin'}</span>
          </p>
        </div>
        {/* Notification Dropdown */}
        <NotificationDropdown />

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
            }}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Profile"
          >
            {(session?.user as any)?.image ? (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={(session?.user as any)?.image || ''}
                  alt={session?.user?.name || 'User'}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {session?.user?.name?.charAt(0).toUpperCase() || 'A'}
                </span>
              </div>
            )}
            <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProfileOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">{session?.user?.name || 'Admin'}</p>
                  <p className="text-xs text-gray-500">{session?.user?.email}</p>
                </div>
                <Link
                  href="/admin/settings"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    signOut({ callbackUrl: '/admin/login', redirect: true });
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors text-left"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
