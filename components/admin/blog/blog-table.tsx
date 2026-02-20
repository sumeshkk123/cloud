'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Plus, X, Send, Eye, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { toAbsoluteUrl } from '@/lib/media';

export interface BlogRow {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  date: string;
  locale: string;
  availableLocales: string[];
  image?: string | null;
  updatedAt?: Date | string;
  translationGroupId?: string;
}

const ITEMS_PER_PAGE = 20;
import { supportedLocales } from '@/config/site';
const LOCALES = supportedLocales;
const DEFAULT_LOCALE = 'en';

/** Normalize raw API response (per-locale rows) into one row per post (BlogRow[]). */
function normalizeApiPosts(data: any[]): BlogRow[] {
  const idMap = new Map<string, BlogRow>();
  for (const item of data) {
    // Use translation_group_id for grouping, fallback to id
    const groupId = String(item.translationGroupId || item.id || '');
    if (!groupId) continue;

    let row = idMap.get(groupId);
    if (!row) {
      row = {
        id: groupId, // Use translation group ID as the main ID for grouping
        title: '',
        slug: item.slug || '',
        published: Boolean(item.published),
        date: item.date ? new Date(item.date).toISOString().slice(0, 10) : '',
        locale: item.locale || 'en',
        availableLocales: [],
        image: item.image ?? undefined,
        updatedAt: item.updatedAt,
        translationGroupId: item.translationGroupId || undefined,
      };
      idMap.set(groupId, row);
    }

    if (item.locale && !row.availableLocales.includes(item.locale)) {
      row.availableLocales.push(item.locale);
    }
    if (item.locale === 'en' || !row.title) {
      row.title = item.title || '';
      row.slug = item.slug || row.slug;
      row.published = Boolean(item.published);
      row.date = item.date ? new Date(item.date).toISOString().slice(0, 10) : row.date;
    }
    if (item.image != null && item.image !== '') {
      row.image = item.image;
    }
    if (item.updatedAt && (!row.updatedAt || new Date(item.updatedAt) > new Date(row.updatedAt as string))) {
      row.updatedAt = item.updatedAt;
    }
  }

  return Array.from(idMap.values()).sort((a, b) => {
    const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
    const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
    return bTime - aTime;
  });
}

interface BlogTableProps {
  /** When provided, use this data instead of fetching (e.g. dashboard passing shared data). */
  initialData?: any[];
  /** When set, show only this many rows and hide pagination (e.g. dashboard limit 10). */
  limit?: number;
  /** When true, hide the toolbar (Draft filter + Add button). Used when embedded in dashboard. */
  hideToolbar?: boolean;
  /** When true, use minimal actions (View + Edit only, no Delete/Publish). Used when embedded in dashboard. */
  compactActions?: boolean;
  /** When true, table has no inner card styling (transparent). For use inside another card. */
  embedded?: boolean;
}

export function BlogTable({
  initialData,
  limit,
  hideToolbar = false,
  compactActions = false,
  embedded = false,
}: BlogTableProps = {}) {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [showDraftOnly, setShowDraftOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogRow | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [publishingId, setPublishingId] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      // Use grouped=true to get one row per translation group
      const res = await fetch('/api/admin/blog?grouped=true', { cache: 'no-store', credentials: 'include' });
      const data = await res.json();

      if (!res.ok) {
        showToast(data?.error || 'Unable to load blog posts.', 'error');
        setPosts([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      if (!data || !Array.isArray(data)) {
        setPosts([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      // Transform grouped data to BlogRow format
      const groupedPosts = data.map((item: any) => ({
        id: item.id,
        title: item.title || '',
        slug: item.slug || '',
        published: Boolean(item.published),
        date: item.date ? new Date(item.date).toISOString().slice(0, 10) : '',
        locale: item.locale || 'en',
        availableLocales: item.translations?.map((t: any) => t.locale) || [item.locale],
        image: item.image ?? undefined,
        updatedAt: item.updatedAt,
        translationGroupId: item.translationGroupId || undefined,
      }));

      setPosts(groupedPosts.sort((a: BlogRow, b: BlogRow) => {
        const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        return bTime - aTime;
      }));
    } catch (error) {
      showToast('Failed to load blog posts. Please try again.', 'error');
      setPosts([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialData != null && Array.isArray(initialData)) {
      setPosts(normalizeApiPosts(initialData));
      setIsLoading(false);
      return;
    }
    loadPosts();
  }, [initialData]);

  const filtered = useMemo(() => {
    if (showDraftOnly) return posts.filter((p) => !p.published);
    return posts;
  }, [posts, showDraftOnly]);

  const totalItems = filtered.length;
  const pageSize = limit ?? ITEMS_PER_PAGE;
  const totalPages = limit ? 1 : Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    if (limit) return filtered.slice(0, limit);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage, limit]);

  const handlePublish = async (row: BlogRow) => {
    const locales = row.availableLocales?.length ? row.availableLocales : ['en'];
    try {
      setPublishingId(row.id);
      for (const locale of locales) {
        const res = await fetch('/api/admin/blog', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: row.id, locale, published: true }),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.error || 'Failed to publish');
        }
      }
      showToast('Blog post published successfully.', 'success');
      await loadPosts();
      try {
        await fetch('/api/admin/revalidate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tags: ['blog', 'blog-en', 'blog-es', 'blog-it', 'blog-de', 'blog-pt', 'blog-zh'] }),
        });
      } catch {
        // non-blocking; cache will revalidate on next TTL
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to publish post.';
      showToast(message, 'error');
    } finally {
      setPublishingId(null);
    }
  };

  /** Normalize slug for display: spaces and multiple separators to single hyphen */
  const displaySlug = (slug: string | null | undefined) => {
    if (!slug || typeof slug !== 'string') return '-';
    return slug
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '') || '-';
  };

  const columns = [
    { key: 'no', label: 'No.', className: 'w-14 text-right' },
    { key: 'image', label: 'Image', className: 'w-20' },
    { key: 'title', label: 'Title', className: 'w-2/5' },
    { key: 'slug', label: 'Slug', className: 'w-32' },
    { key: 'date', label: 'Date', className: 'w-28' },
    { key: 'languages', label: 'Languages', className: 'w-40' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  return (
    <div className="space-y-4">
      {!hideToolbar && (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full md:-mt-16 md:mb-8 md:justify-end">
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant={showDraftOnly ? 'primary' : 'ghost'}
              size="md"
              rounded="default"
              className="whitespace-nowrap px-4"
              rightIcon={showDraftOnly ? <X className="h-4 w-4" /> : undefined}
              onClick={() => {
                setShowDraftOnly((prev) => !prev);
                setCurrentPage(1);
              }}
            >
              Draft
            </Button>
            <Button
              type="button"
              variant="primary"
              size="md"
              rounded="default"
              leftIcon={<Plus className="h-4 w-4" />}
              className="whitespace-nowrap"
              onClick={() => router.push('/admin/blog/new')}
            >
              Add Blog Post
            </Button>
          </div>
        </div>
      )}

      <Table
        className={embedded ? 'bg-transparent shadow-none p-0 dark:bg-transparent' : ''}
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage="No blog posts yet. Create your first post!"
        renderCell={(column, row, rowIndex) => {
          if (!row) return <span className="text-gray-400">-</span>;

          const rowNo = (currentPage - 1) * ITEMS_PER_PAGE + rowIndex + 1;
          if (column.key === 'no') {
            return <span className="text-sm text-gray-600 tabular-nums">{rowNo}</span>;
          }
          if (column.key === 'image') {
            const src = row.image ? (toAbsoluteUrl(row.image) || row.image) : null;
            return (
              <div className="flex items-center justify-center w-14 h-10 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                {src ? (
                  /* eslint-disable-next-line @next/next/no-img-element -- dynamic admin image URLs from backend */
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.no-img')) {
                        const fallback = document.createElement('span');
                        fallback.className = 'no-img text-gray-400 dark:text-gray-500 text-xs';
                        fallback.textContent = 'No image';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 text-xs">No image</span>
                )}
              </div>
            );
          }
          if (column.key === 'title') {
            return (
              <span className="font-medium text-gray-900 line-clamp-2">
                {row.title || <span className="text-gray-400 italic">No title</span>}
              </span>
            );
          }
          if (column.key === 'slug') {
            return <span className="text-sm text-gray-600 font-mono truncate block max-w-[140px]">{displaySlug(row.slug)}</span>;
          }
          if (column.key === 'date') {
            return <span className="text-sm text-gray-600">{row.date || '-'}</span>;
          }
          if (column.key === 'languages') {
            const hasTranslations = row.availableLocales && row.availableLocales.length > 1;
            return (
              <div className={hasTranslations ? 'bg-green-50 dark:bg-green-900/20 rounded p-1' : ''}>
                <LanguageBadges
                  availableLocales={row.availableLocales?.length ? row.availableLocales : ['en']}
                  allLocales={[...LOCALES]}
                  layout="grid"
                />
              </div>
            );
          }
          if (column.key === 'actions') {
            if (compactActions) {
              return (
                <span className="inline-flex items-center gap-3">
                  {row.published && (
                    <Link
                      href={`/${DEFAULT_LOCALE}/blog/${displaySlug(row.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Link>
                  )}
                  <Link
                    href={`/admin/blog/${row.id}`}
                    className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </Link>
                </span>
              );
            }
            const isPublishing = publishingId === row.id;
            const customActions = !row.published
              ? [
                  {
                    label: isPublishing ? 'Publishing…' : 'Publish',
                    icon: <Send className="h-4 w-4" />,
                    onClick: () => handlePublish(row),
                    variant: 'default' as const,
                  },
                ]
              : [];
            return (
              <ActionMenu
                onEdit={() => router.push(`/admin/blog/${row.id}`)}
                onDelete={() => {
                  setPostToDelete(row);
                  setDeleteConfirmOpen(true);
                }}
                customActions={customActions}
                disabled={isPublishing}
              />
            );
          }
          const value = row[column.key as keyof BlogRow];
          return value != null ? String(value) : '-';
        }}
      />

      {!limit && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      )}

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setPostToDelete(null);
        }}
        onConfirm={async () => {
          if (!postToDelete) return;
          try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/blog?id=${encodeURIComponent(postToDelete.id)}`, {
              method: 'DELETE',
              cache: 'no-store',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete post');
            showToast('Blog post deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setPostToDelete(null);
            await loadPosts();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete post.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Blog Post"
        message={`Are you sure you want to delete "${postToDelete?.title || postToDelete?.id}"? This will remove all language versions. This action cannot be reversed.`}
        isLoading={isDeleting}
      />

      {ToastComponent}
    </div>
  );
}
