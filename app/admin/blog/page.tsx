'use client';

import { PageTitle } from '@/components/ui/adminUi/page-title';
import { BlogTable } from '@/components/admin/blog/blog-table';

export default function AdminBlogPage() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Blog"
        description="Manage blog posts, titles, content, and translations for all locales."
      />
      <BlogTable />
    </div>
  );
}
