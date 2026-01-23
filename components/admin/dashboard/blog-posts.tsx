'use client';

import Link from 'next/link';
import { Eye } from 'lucide-react';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export function BlogPosts() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <PageTitle
        variant="table"
        title="Blog Posts"
      >
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-primary-700 transition"
        >
          <Eye className="h-4 w-4" />
          View All
        </Link>
      </PageTitle>
      <div className="p-6">
        <p className="text-gray-600 text-center py-8">No blog posts yet. Create your first post!</p>
      </div>
    </div>
  );
}
