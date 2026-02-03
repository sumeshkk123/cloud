'use client';

import { ServicesMetaPageTitleTab } from '@/components/admin/services/services-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function ServicesMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Service Meta and Page Title"
        description="Manage meta details and page titles for service pages."
      />

      {/* Content */}
      <ServicesMetaPageTitleTab />
    </div>
  );
}
