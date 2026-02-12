'use client';

import Link from 'next/link';
import { Eye, Plus, Pencil } from 'lucide-react';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export interface DashboardBlogPost {
  id: string;
  title?: string;
  slug?: string;
  published?: boolean;
  date?: string;
  locale?: string;
  updatedAt?: string;
}

interface BlogPostsProps {
  posts?: DashboardBlogPost[];
}

const MAX_RECENT = 10;

const DEFAULT_LOCALE = 'en';

function normalizePosts(
  posts: DashboardBlogPost[],
): Array<{ id: string; title: string; date: string; published: boolean; slug: string }> {
  const idMap = new Map<
    string,
    { id: string; title: string; date: string; published: boolean; slug: string }
  >();
  for (const item of posts) {
    const id = String(item.id || '');
    if (!id) continue;
    const existing = idMap.get(id);
    const title = item.title || '(Untitled)';
    const date = item.date || item.updatedAt || '';
    const published = Boolean(item.published);
    const slug = String(item.slug || id).trim() || id;
    if (!existing || item.locale === DEFAULT_LOCALE || !existing.title) {
      idMap.set(id, {
        id,
        title,
        date,
        published,
        slug,
      });
    }
  }
  return Array.from(idMap.values()).sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
}

export function BlogPosts({ posts = [] }: BlogPostsProps) {
  const normalized = normalizePosts(posts);
  const recent = normalized.slice(0, MAX_RECENT);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
      <PageTitle variant="table" title="Blog Posts">
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-primary-700 transition"
          >
            <Plus className="h-4 w-4" />
            Add Blog Post
          </Link>
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            View All
          </Link>
          <Link
            href={`/${DEFAULT_LOCALE}/blogs`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <Eye className="h-4 w-4" />
            View on site (/blogs)
          </Link>
        </div>
      </PageTitle>
      <div className="p-6">
        {recent.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            No blog posts yet.{' '}
            <Link href="/admin/blog/new" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              Create your first post
            </Link>
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400">
                  <th className="pb-3 font-medium">Title</th>
                  <th className="pb-3 font-medium w-28">Date</th>
                  <th className="pb-3 font-medium w-24">Status</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-3 text-gray-900 dark:text-white font-medium">
                      <Link href={`/admin/blog/${post.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{formatDate(post.date)}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                          post.published
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center gap-3">
                        {post.published && (
                          <Link
                            href={`/${DEFAULT_LOCALE}/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            View
                          </Link>
                        )}
                        <Link
                          href={`/admin/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </Link>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
