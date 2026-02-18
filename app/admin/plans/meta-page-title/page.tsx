'use client';

import { PlansMetaPageTitleTab } from '@/components/admin/plans/plans-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function AdminPlansMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Plan Meta Details"
        description="Manage meta details and page titles for the MLM plans page."
      />

      {/* Content */}
      <PlansMetaPageTitleTab />
    </div>
  );
}
