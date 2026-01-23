'use client';

import * as React from 'react';
import { Bell, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  source: string;
}

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [submissions, setSubmissions] = React.useState<ContactSubmission[]>([]);
  const [unreadCount, setUnreadCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Only show notification dropdown if user is authenticated
  const isAdmin = !!session?.user;

  // Get seen submission IDs from localStorage
  const getSeenSubmissionIds = React.useCallback((): string[] => {
    if (typeof window === 'undefined') return [];
    try {
      const seen = localStorage.getItem('seenSubmissions');
      return seen ? JSON.parse(seen) : [];
    } catch {
      return [];
    }
  }, []);

  // Fetch submissions
  const fetchSubmissions = React.useCallback(async () => {
    if (!isAdmin) return;
    
    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/contact');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          // Get the 5 most recent submissions for display
          const recent = data.slice(0, 5);
          setSubmissions(recent);
          
          // Calculate unread count - compare against all submissions, not just recent 5
          const seenIds = getSeenSubmissionIds();
          const unread = data.filter(sub => !seenIds.includes(sub.id));
          setUnreadCount(unread.length);
        }
      }
    } catch (error) {
      // Silent fail
    } finally {
      setIsLoading(false);
    }
  }, [isAdmin, getSeenSubmissionIds]);

  // Mark submission as seen
  const markAsSeen = (id: string) => {
    const seenIds = getSeenSubmissionIds();
    if (!seenIds.includes(id)) {
      const updated = [...seenIds, id];
      localStorage.setItem('seenSubmissions', JSON.stringify(updated));
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
  };

  // Mark all as seen
  const markAllAsSeen = () => {
    const seenIds = getSeenSubmissionIds();
    const currentIds = submissions.map(sub => sub.id);
    const newSeenIds = [...new Set([...seenIds, ...currentIds])];
    localStorage.setItem('seenSubmissions', JSON.stringify(newSeenIds));
    
    // Need to fetch all submissions to mark them all as seen
    fetch('/api/admin/contact')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const allIds = data.map(sub => sub.id);
          localStorage.setItem('seenSubmissions', JSON.stringify(allIds));
          setUnreadCount(0);
        }
      });
  };

  // Initial fetch and polling
  React.useEffect(() => {
    if (!isAdmin) return;
    
    // Initial fetch
    fetchSubmissions();
    
    // Poll every 30 seconds for new submissions
    const interval = setInterval(() => {
      fetchSubmissions();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [isAdmin, fetchSubmissions]);

  // Mark all current submissions as seen when dropdown is opened
  React.useEffect(() => {
    if (isOpen && submissions.length > 0) {
      // When dropdown opens, mark all displayed submissions as seen
      const seenIds = getSeenSubmissionIds();
      const currentIds = submissions.map(sub => sub.id);
      const newSeenIds = [...new Set([...seenIds, ...currentIds])];
      localStorage.setItem('seenSubmissions', JSON.stringify(newSeenIds));
      
      // Update unread count for displayed submissions
      const displayedUnread = submissions.filter(sub => !seenIds.includes(sub.id)).length;
      setUnreadCount(prev => Math.max(0, prev - displayedUnread));
    }
  }, [isOpen, submissions, getSeenSubmissionIds]);

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
    // Mark as seen and immediately update count
    const seenIds = getSeenSubmissionIds();
    if (!seenIds.includes(id)) {
      const updated = [...seenIds, id];
      localStorage.setItem('seenSubmissions', JSON.stringify(updated));
      // Immediately decrement the count
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
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

  const seenIds = getSeenSubmissionIds();

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
                  const isUnread = !seenIds.includes(submission.id);
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
