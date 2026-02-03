'use client';

import { IndustrySolutionsMetaPageTitleTab } from '@/components/admin/industry-solutions/industry-solutions-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function IndustrySolutionsMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Industry Solution Meta and Page Title"
        description="Manage meta details and page titles for industry solution pages."
      />

      {/* Content */}
      <IndustrySolutionsMetaPageTitleTab />
    </div>
  );
}
