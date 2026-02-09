'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { ChangelogForm } from './changelog-form';
import { i18n, localeNames } from '@/i18n-config';

interface ChangelogRow {
  id: string;
  version: string;
  title?: string | null;
  description: string;
  locale: string;
  order: number;
  availableLocales?: string[]; // Languages available for this version
}

const ITEMS_PER_PAGE = 20;

export function ChangelogTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<ChangelogRow[]>([]);
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

  const loadItems = async () => {
    try {
      setIsLoading(true);
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/changelog?locale=en&_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load changelog entries.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: ChangelogRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
          id: String(item.id),
          version: String(item.version),
          title: item.title ? String(item.title) : null,
          description: String(item.description || ''),
          locale: String(item.locale || 'en'),
          order: Number(item.order ?? 0),
        }))
        : [];

      // Fetch available locales for each changelog entry (by version)
      const itemsWithLocales = await Promise.all(
        mapped.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/changelog?id=${encodeURIComponent(item.id)}&all=true&_t=${timestamp}`,
              { cache: 'no-store' }
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
  }, []);

  const filtered = useMemo(() => {
    return items;
  }, [items]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const columns = [
    { key: 'version', label: 'Version', className: 'w-32' },
    { key: 'description', label: 'Description', className: 'w-2/4' },
    { key: 'languages', label: 'Languages', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

  const localeDisplayNames: Record<string, string> = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    it: 'IT',
    de: 'DE',
    pt: 'PT',
    zh: 'ZH',
  };

  return (
    <div className="space-y-4">
      <PageTitle title="Changelog" description="Manage changelog entries displayed on the website.">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
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
            New Entry
          </Button>
        </div>
      </PageTitle>

      <Table
        columns={columns}
        data={paginated}
        emptyMessage={isLoading ? 'Loading changelog entries...' : 'No changelog entries available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'version') {
            return <span className="font-medium text-gray-900 dark:text-white">{row.version}</span>;
          }
          if (column.key === 'description') {
            return <span className="line-clamp-2 text-gray-700 dark:text-gray-300">{row.description}</span>;
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            const allLocales = i18n.locales;
            return (
              <div className="flex flex-wrap gap-1">
                {allLocales.map((loc) => {
                  const exists = locales.includes(loc);
                  return (
                    <span
                      key={loc}
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        exists
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
                      }`}
                      title={exists ? `${localeDisplayNames[loc] ?? loc.toUpperCase()} - Available` : `${localeDisplayNames[loc] ?? loc.toUpperCase()} - Missing`}
                    >
                      {localeDisplayNames[loc] ?? loc.toUpperCase()}
                    </span>
                  );
                })}
              </div>
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
          return row[column.key as keyof ChangelogRow];
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
        title={editingId ? 'Edit Changelog Entry' : 'Add Changelog Entry'}
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
              form="changelog-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save Translation'}
            </Button>
          </div>
        }
      >
        <ChangelogForm
          entryId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setFormToast(null);
          }}
          onSave={async () => {
            await loadItems();
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
            const res = await fetch(`/api/admin/changelog?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
              cache: 'no-store',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete changelog entry');
            showToast('Changelog entry deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setDeleteId(null);
            loadItems();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete changelog entry.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Changelog Entry"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
}
