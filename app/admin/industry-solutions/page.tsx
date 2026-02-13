'use client';

import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { IndustrySolutionsTable } from '@/components/admin/industry-solutions/industry-solutions-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function AdminIndustrySolutionsPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_CREATE}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage industry solutions.
        </div>
      }
    >
      <div className="space-y-4">
        <PageTitle
          title="Industry Solutions"
          description="Manage industry solutions displayed on the website."
        />
        <IndustrySolutionsTable />
      </div>
    </PermissionGuard>
  );
}
