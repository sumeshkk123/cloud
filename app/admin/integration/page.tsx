import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { IntegrationAdminTabs } from '@/components/admin/integrations/integration-admin-tabs';

export default function AdminIntegrationPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="p-6">
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      }
    >
      <IntegrationAdminTabs />
    </PermissionGuard>
  );
}
