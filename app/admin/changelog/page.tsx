import type { Metadata } from 'next';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { ChangelogTable } from '@/components/admin/changelog/changelog-table';

export const metadata: Metadata = {
  title: 'Changelog Admin - Cloud MLM',
  description: 'View and manage changelog entries shown on the website.',
  openGraph: {
    title: 'Changelog Admin - Cloud MLM',
    description: 'View and manage changelog entries shown on the website.',
    type: 'website',
  },
};

export default function AdminChangelogPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage changelog entries.
        </div>
      }
    >
      <ChangelogTable />
    </PermissionGuard>
  );
}
