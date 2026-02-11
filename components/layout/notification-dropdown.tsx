'use client';

import * as React from 'react';
import { Bell, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const CONTACT_SUBMISSIONS_LAST_VISITED_KEY = 'contactSubmissionsLastVisitedAt';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  source: string;
}

function getLastVisitedAt(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(CONTACT_SUBMISSIONS_LAST_VISITED_KEY);
  } catch {
    return null;
  }
}

function setLastVisitedAt(isoString: string) {
  try {
    localStorage.setItem(CONTACT_SUBMISSIONS_LAST_VISITED_KEY, isoString);
  } catch {
    // ignore
  }
}

/** Submissions created after this timestamp count as "new" for the badge. */
function countNewSubmissions(submissions: ContactSubmission[], lastVisitedAt: string | null): number {
  if (!lastVisitedAt) return submissions.length;
  const cutoff = new Date(lastVisitedAt).getTime();
  return submissions.filter((sub) => new Date(sub.createdAt).getTime() > cutoff).length;
}

function isNewSubmission(sub: ContactSubmission, lastVisitedAt: string | null): boolean {
  if (!lastVisitedAt) return true;
  return new Date(sub.createdAt).getTime() > new Date(lastVisitedAt).getTime();
}

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submissions, setSubmissions] = React.useState<ContactSubmission[]>([]);
  const [unreadCount, setUnreadCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const isAdmin = !!session?.user;

  const fetchSubmissions = React.useCallback(async () => {
    if (!isAdmin) return;

    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/contact');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          const recent = data.slice(0, 5);
          setSubmissions(recent);
          const lastVisited = getLastVisitedAt();
          const count = countNewSubmissions(data, lastVisited);
          setUnreadCount(count);
        }
      }
    } catch {
      // Silent fail
    } finally {
      setIsLoading(false);
    }
  }, [isAdmin]);

  // When user is on contact-submissions page, set last visited to now so count becomes 0 and only future enquiries count as new
  React.useEffect(() => {
    if (!isAdmin || typeof window === 'undefined') return;
    if (pathname === '/admin/contact-submissions') {
      const now = new Date().toISOString();
      setLastVisitedAt(now);
      setUnreadCount(0);
    }
  }, [isAdmin, pathname]);

  const markAllAsSeen = () => {
    const now = new Date().toISOString();
    setLastVisitedAt(now);
    setUnreadCount(0);
  };

  React.useEffect(() => {
    if (!isAdmin) return;
    fetchSubmissions();
    const interval = setInterval(fetchSubmissions, 30000);
    return () => clearInterval(interval);
  }, [isAdmin, fetchSubmissions]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Don't show if not admin
  if (!isAdmin) {
    return null;
  }

  const handleSubmissionClick = (id: string) => {
    setIsOpen(false);
    router.push('/admin/contact-submissions');
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const getSourceLabel = (source: string) => {
    const labels: Record<string, string> = {
      contact: 'Contact',
      pricing: 'Pricing',
      demo: 'Demo',
    };
    return labels[source] || source;
  };

  const getSourceBadgeClasses = (source: string): string => {
    const s = source || 'contact';
    const baseClasses = 'px-1.5 py-0.5 rounded text-xs';
    
    switch (s) {
      case 'contact':
        return `${baseClasses} bg-blue-100 text-blue-700`;
      case 'pricing':
        return `${baseClasses} bg-green-100 text-green-700`;
      case 'demo':
        return `${baseClasses} bg-purple-100 text-purple-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const lastVisitedAt = typeof window !== 'undefined' ? getLastVisitedAt() : null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold text-white bg-red-500 rounded-full">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 text-xs font-normal text-gray-500">
                  ({unreadCount} new)
                </span>
              )}
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsSeen}
                className="text-xs text-primary-600 hover:text-primary-700"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-sm text-gray-500">
                Loading...
              </div>
            ) : submissions.length === 0 ? (
              <div className="p-4 text-center text-sm text-gray-500">
                No new submissions
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {submissions.map((submission) => {
                  const isUnread = isNewSubmission(submission, lastVisitedAt);
                  return (
                    <button
                      key={submission.id}
                      onClick={() => handleSubmissionClick(submission.id)}
                      className={cn(
                        "w-full p-4 text-left hover:bg-gray-50 transition-colors",
                        isUnread && "bg-primary-50/50"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                          isUnread 
                            ? "bg-primary-100" 
                            : "bg-gray-100"
                        )}>
                          <Mail className={cn(
                            "h-5 w-5",
                            isUnread 
                              ? "text-primary-600" 
                              : "text-gray-500"
                          )} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <p className={cn(
                              "text-sm font-medium truncate",
                              isUnread 
                                ? "text-gray-900" 
                                : "text-gray-600"
                            )}>
                              {submission.name}
                            </p>
                            {isUnread && (
                              <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span className={getSourceBadgeClasses(submission.source || 'contact')}>
                              {getSourceLabel(submission.source || 'contact')}
                            </span>
                            <Clock className="h-3 w-3" />
                            <span>{formatTimeAgo(submission.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {submissions.length > 0 && (
            <div className="p-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/admin/contact-submissions');
                }}
                className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                View all submissions
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
