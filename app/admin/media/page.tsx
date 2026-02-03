import type { Metadata } from 'next';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { MediaManager } from '@/components/admin/media/media-manager';

export const metadata: Metadata = {
  title: 'Media Library - Cloud MLM Software',
  description: 'Manage and organize your media files.',
  openGraph: {
    title: 'Media Library - Cloud MLM Software',
    description: 'Manage and organize your media files.',
    type: 'website',
  },
};

export default function AdminMediaPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage media.
        </div>
      }
    >
      <MediaManager />
    </PermissionGuard>
  );
}
