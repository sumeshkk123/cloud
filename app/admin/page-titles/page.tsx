'use client';

import { PageTitle } from '@/components/ui/adminUi/page-title';
import { PageTitlesTable } from '@/components/admin/page-titles/page-titles-table';

export default function AdminPageTitlesPage() {
  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="Page Titles"
        description="Manage page titles, badges, and subtitles for key pages on the website."
      />

      {/* Page Titles Table */}
      <PageTitlesTable />
    </div>
  );
}
