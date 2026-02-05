'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useToast } from '@/components/ui/toast';
import { Table } from '@/components/ui/adminUi/table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Button } from '@/components/ui/adminUi/button';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { UserRole } from '@/lib/permissions';
import { usePermissions } from '@/lib/hooks/use-permissions';
import { ArrowLeft, User } from 'lucide-react';

const ITEMS_PER_PAGE = 20;

interface UserActivity {
  id: string;
  userId: string;
  action: string;
  description: string;
  metadata: any;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
  userName?: string;
  userEmail?: string;
}

export function UserActivitiesSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const { isAdmin } = usePermissions();
  const { showToast, ToastComponent } = useToast();
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterUserId, setFilterUserId] = useState<string | null>(
    () => searchParams?.get('userId') ?? null
  );

  const userRole = (session?.user as any)?.role || 'user';
  const currentUserId = (session?.user as any)?.id;

  useEffect(() => {
    fetchActivities();
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetchActivities loads when filterUserId changes
  }, [filterUserId]);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      const url = filterUserId
        ? `/api/admin/user-activities?userId=${filterUserId}`
        : '/api/admin/user-activities';

      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        setActivities(Array.isArray(data) ? data : []);
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        showToast(errorData.error || 'Failed to load activities', 'error');
        setActivities([]);
      }
    } catch (error) {
      showToast('Failed to load activities', 'error');
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'no', label: 'No.', className: 'w-16' },
    { key: 'user', label: 'User' },
    { key: 'action', label: 'Action' },
    { key: 'description', label: 'Description' },
    { key: 'ipAddress', label: 'IP Address' },
    { key: 'createdAt', label: 'Date & Time' },
  ];

  const totalItems = activities.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedActivities = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return activities.slice(start, start + ITEMS_PER_PAGE);
  }, [activities, currentPage]);

  if (loading) {
    return (
      <div className="text-center text-gray-600 p-6">
        Loading activities...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PageTitle
        title={filterUserId ? 'User Activities' : 'All User Activities'}
        description={
          filterUserId
            ? 'View activities for this user'
            : isAdmin
            ? 'View all user activities across the system'
            : 'View your activity log'
        }
      >
        {filterUserId && (
          <Button
            type="button"
            variant="ghost"
            size="md"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
            onClick={() => {
              setFilterUserId(null);
              router.push('/admin/settings/user-activities');
            }}
          >
            View All Activities
          </Button>
        )}
      </PageTitle>

      <Table
        columns={columns}
        data={paginatedActivities}
        isLoading={loading}
        emptyMessage="No activities found."
        renderCell={(column, row, index) => {
            const activity = row as UserActivity;
            if (column.key === 'no') {
              const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
              return <span className="text-gray-600">{startIndex + index + 1}</span>;
            }
            if (column.key === 'user') {
              return (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium text-gray-900">
                    {activity.userName || activity.userId}
                  </span>
                  {activity.userEmail && (
                    <span className="text-sm text-gray-500">
                      ({activity.userEmail})
                    </span>
                  )}
                </div>
              );
            }
            if (column.key === 'action') {
              return (
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {activity.action}
                </span>
              );
            }
            if (column.key === 'description') {
              const maxLength = 150;
              const isLong = activity.description.length > maxLength;
              const truncated = isLong 
                ? activity.description.substring(0, maxLength) + '...'
                : activity.description;
              
              return (
                <span 
                  className="text-gray-700"
                  title={isLong ? activity.description : undefined}
                >
                  {truncated}
                </span>
              );
            }
            if (column.key === 'ipAddress') {
              return (
                <span className="text-gray-600">
                  {activity.ipAddress || '-'}
                </span>
              );
            }
            if (column.key === 'createdAt') {
              return (
                <span className="text-gray-600">
                  {new Date(activity.createdAt).toLocaleString()}
                </span>
              );
            }
            return row[column.key as keyof typeof row];
          }}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      )}

      {ToastComponent}
    </div>
  );
}
