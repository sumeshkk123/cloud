import type { Metadata } from 'next';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { IndustrySolutionsTable } from '@/components/admin/industry-solutions/industry-solutions-table';

export const metadata: Metadata = {
  title: 'Industry Solutions Admin - Cloud MLM Software',
  description: 'View and manage industry solutions shown on the website.',
  openGraph: {
    title: 'Industry Solutions Admin - Cloud MLM Software',
    description: 'View and manage industry solutions shown on the website.',
    type: 'website',
  },
};

export default function AdminIndustrySolutionsPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage industry solutions.
        </div>
      }
    >
      <IndustrySolutionsTable />
    </PermissionGuard>
  );
}
