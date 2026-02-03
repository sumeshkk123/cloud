'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { StoriesForm } from './stories-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';

interface StoryRow {
  id: string;
  title: string;
  content: string;
  count?: string;
  screenshot?: string;
  locale: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

export function StoriesTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<StoryRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const loadItems = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/admin/stories?locale=en', {
        next: { revalidate: 0 },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load stories.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: StoryRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
            id: String(item.id),
            title: String(item.title || ''),
            content: String(item.content || ''),
            count: item.count ? String(item.count) : undefined,
            locale: String(item.locale || 'en'),
            updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
          }))
        : [];

      // Fetch available locales for each story (linked by name)
      const itemsWithLocales = await Promise.all(
        mapped.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/stories?id=${encodeURIComponent(item.id)}&all=true`,
              { next: { revalidate: 0 } }
            );
            if (translationsRes.ok) {
              const translationsData = await translationsRes.json();
              const locales = translationsData?.translations?.map((t: any) => t.locale) || [item.locale];
              return { ...item, availableLocales: locales };
            }
          } catch (error) {
            // Silent fail
          }
          return { ...item, availableLocales: [item.locale] };
        })
      );

      setItems(itemsWithLocales);
      setCurrentPage(1);
    } catch (error) {
      setItems([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, [refreshKey]);

  // Optimized: Direct use of items, no unnecessary filtering
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const columns = [
    { key: 'title', label: 'Title', className: 'w-1/5' },
    { key: 'count', label: 'Count', className: 'w-1/5' },
    { key: 'content', label: 'Content', className: 'w-1/3' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full md:-mt-16 md:mb-8 md:justify-end">
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={() => {
              setEditingId(null);
              setIsFormOpen(true);
            }}
          >
            New Story
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading stories...' : 'No stories available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'title') {
            return <span className="font-medium text-gray-900">{row.title}</span>;
          }
          if (column.key === 'count') {
            return <span className="text-gray-700">{row.count || '—'}</span>;
          }
          if (column.key === 'content') {
            return <span className="line-clamp-2 text-gray-700">{row.content}</span>;
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            return (
              <LanguageBadges
                availableLocales={locales}
                allLocales={['en', 'es', 'it', 'de', 'pt', 'zh']}
                layout="grid"
              />
            );
          }
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingId(row.id);
                  setIsFormOpen(true);
                }}
                onDelete={() => {
                  setDeleteId(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof StoryRow] as string;
        }}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingId(null);
          setFormToast(null);
        }}
        title={editingId ? 'Edit Story' : 'Add Story'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingId(null);
                setFormToast(null);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="stories-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : editingId ? 'Update Story' : 'Save Story'}
            </Button>
          </div>
        }
      >
        <StoriesForm
          key={editingId || 'new'}
          storyId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setFormToast(null);
          }}
          onSave={async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
            await loadItems(true);
            setRefreshKey(prev => prev + 1);
          }}
          onToastChange={(toast) => setFormToast(toast || null)}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setDeleteId(null);
        }}
        onConfirm={async () => {
          if (!deleteId) return;
          try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/stories?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete story');
            showToast('Story deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setDeleteId(null);
            loadItems();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete story.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Story"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
}
