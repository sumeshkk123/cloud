'use client';

import { IndustrySolutionsMetaPageTitleTab } from '@/components/admin/industry-solutions/industry-solutions-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function IndustrySolutionsMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Industry Solution Meta Details"
        description="Manage meta details for industry solution pages."
      />
      <IndustrySolutionsMetaPageTitleTab />
    </div>
  );
}
