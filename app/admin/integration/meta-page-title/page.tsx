'use client';

import { IntegrationsMetaPageTitleTab } from '@/components/admin/integrations/integrations-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function IntegrationsMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Integration Meta and Page Title"
        description="Manage meta details and page titles for integration pages."
      />

      {/* Content */}
      <IntegrationsMetaPageTitleTab />
    </div>
  );
}
