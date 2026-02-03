'use client';

import { FeaturesMetaPageTitleTab } from '@/components/admin/features/features-meta-page-title-tab';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function AdminFeaturesMetaPageTitlePage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Feature Meta and Page Title"
        description="Manage meta details and page titles for feature pages."
      />

      {/* Content */}
      <FeaturesMetaPageTitleTab />
    </div>
  );
}
