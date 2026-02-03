import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { AICopilotTable } from '@/components/admin/ai-copilot/ai-copilot-table';

export default function AdminAICopilotPage() {
  return (
    <PermissionGuard requiredPermission={Permission.CONTENT_EDIT}>
      <div>
        <AICopilotTable />
      </div>
    </PermissionGuard>
  );
}
