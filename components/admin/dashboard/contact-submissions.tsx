'use client';

import Link from 'next/link';
import { Eye } from 'lucide-react';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { ContactSubmissionsTable } from '@/components/admin/contact-submissions/submissions-table';

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    country: string | null;
    message: string;
    source: string;
    sourceSite: string | null;
    notes: string | null;
    locale: string;
    createdAt: string;
}

interface DashboardContactSubmissionsProps {
    submissions: ContactSubmission[];
    onUpdate?: () => void;
}

export function DashboardContactSubmissions({ submissions, onUpdate }: DashboardContactSubmissionsProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const limitedSubmissions = submissions.slice(0, 10).map((submission, index) => ({
    ...submission,
    no: index + 1,
    date: formatDate(submission.createdAt),
  }));

  return (
    <PermissionGuard
      requiredPermission={Permission.CONTACT_VIEW}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
          <p className="text-gray-600 dark:text-gray-400">You don&apos;t have permission to view contact submissions.</p>
        </div>
      }
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Submissions</h2>
            <Link
              href="/admin/contact-submissions"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Eye className="h-4 w-4" />
              View All
            </Link>
          </div>
        </div>
        <div className="p-6">
          <ContactSubmissionsTable
            submissions={limitedSubmissions}
            onUpdate={onUpdate}
            emptyMessage="No contact submissions yet."
            className="border-0 shadow-none rounded-none"
          />
        </div>
      </div>
    </PermissionGuard>
  );
}
