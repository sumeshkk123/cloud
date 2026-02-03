'use client';

import { TestimonialsAdminTabs } from '@/components/admin/testimonials/testimonials-admin-tabs';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';

export default function AdminTestimonialsPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="p-8 text-center">
          <p className="text-gray-500">You don't have permission to access this page.</p>
        </div>
      }
    >
      <TestimonialsAdminTabs />
    </PermissionGuard>
  );
}
