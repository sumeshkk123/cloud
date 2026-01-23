'use client';

import { PageTitle } from '@/components/ui/adminUi/page-title';
import { MetaDetailsTable } from '@/components/admin/meta-details/meta-details-table';

export default function AdminMetaDetailsPage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Meta Details"
        description="Manage meta tags (title, description, keywords) for key pages on the website."
      />

      {/* Meta Details Table */}
      <MetaDetailsTable />
    </div>
  );
}
