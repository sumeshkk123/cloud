'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Plus, Package } from 'lucide-react';
import { resolveIcon } from '@/components/frontend/home/utils';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { ModulesForm } from './modules-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

interface ModuleRow {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  image?: string;
  hasDetailPage: boolean;
  showOnHomePage: boolean;
  locale: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

export function ModulesTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<ModuleRow[]>([]);
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
  const hasLoadedRef = useRef(false);

  const loadItems = async () => {
    try {
      if (!hasLoadedRef.current) setIsLoading(true);
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/modules?locale=en&withTranslations=true&_t=${timestamp}`, {
        cache: 'no-store',
        credentials: 'include',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
        },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load modules.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }

      // withTranslations=true returns each module with availableLocales - no extra requests
      const mapped: ModuleRow[] = Array.isArray(data)
        ? data.map((item: any) => {
          // Normalize icon format: if it doesn't have a prefix, assume it's lucide
          const iconValue = item.image ? String(item.image).trim() : '';
          const normalizedIcon = iconValue && !iconValue.includes(':') ? `lucide:${iconValue}` : iconValue;

          return {
            id: String(item.id),
            slug: item.slug ? String(item.slug) : null,
            title: String(item.title || ''),
            description: String(item.description || ''),
            image: normalizedIcon || undefined,
            hasDetailPage: Boolean(item.hasDetailPage ?? false),
            showOnHomePage: Boolean(item.showOnHomePage ?? false),
            locale: String(item.locale || 'en'),
            updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
            availableLocales: Array.isArray(item.availableLocales) ? item.availableLocales : [item.locale || 'en'],
          };
        })
        : [];

      setItems(mapped);
      setCurrentPage(1);
      hasLoadedRef.current = true;
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

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const hasAnyDetailPage = useMemo(() => {
    return items.some((item) => item.hasDetailPage);
  }, [items]);

  const getIconComponent = (iconValue?: string | null) => {
    return resolveIcon(iconValue || null, Package);
  };

  const columns = useMemo(() => {
    const baseColumns = [
      { key: 'icon', label: 'Icon', className: 'w-24' },
      { key: 'title', label: 'Title', className: 'w-1/4' },
    ];

    if (hasAnyDetailPage) {
      baseColumns.push({ key: 'slug', label: 'Slug', className: 'w-1/6' });
    }

    baseColumns.push(
      { key: 'description', label: 'Description', className: 'w-2/4' },
      { key: 'languages', label: 'Languages', className: 'w-48' },
      { key: 'showOnHomePage', label: 'Status', className: 'w-24' },
      { key: 'actions', label: 'Actions', className: 'w-20 text-right' }
    );

    return baseColumns;
  }, [hasAnyDetailPage]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/modules?id=${encodeURIComponent(deleteId)}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        showToast(data?.error || 'Failed to delete module.', 'error');
        return;
      }

      showToast('Module deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDeleteId(null);
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      showToast('Failed to delete module.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormSave = async () => {
    hasLoadedRef.current = false; // Reset loaded flag to force reload
    await loadItems();
    setCurrentPage(1); // Reset to first page
  };

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
              setIsFormLoading(false);
              setEditingId(null);
              setIsFormOpen(true);
            }}
          >
            New Module
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading modules...' : 'No modules available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'icon') {
            const IconComponent = getIconComponent(row.image);
            return (
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                <IconComponent className="h-4 w-4 text-gray-900 dark:text-gray-100" />
              </div>
            );
          }
          if (column.key === 'title') {
            return <span className="font-medium text-gray-900">{row.title}</span>;
          }
          if (column.key === 'slug') {
            if (!row.hasDetailPage) {
              return <span className="text-gray-400 text-sm">—</span>;
            }
            return <span className="font-mono text-sm text-gray-600">{row.slug || '—'}</span>;
          }
          if (column.key === 'description') {
            return <span className="line-clamp-2 text-gray-700">{row.description}</span>;
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            return (
              <LanguageBadges
                availableLocales={locales}
                allLocales={[...i18n.locales]}
                layout="grid"
              />
            );
          }
          if (column.key === 'showOnHomePage') {
            return (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.showOnHomePage
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {row.showOnHomePage ? 'On Home' : 'Hidden'}
              </span>
            );
          }
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingId(row.id);
                  setIsFormOpen(true);
                  // Don't set loading here - let the form manage it
                }}
                onDelete={() => {
                  setDeleteId(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof ModuleRow] as string;
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
          setIsFormLoading(false);
        }}
        title={editingId ? 'Edit Module' : 'New Module'}
        size="4xl"
      >
        <ModulesForm
          moduleId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setIsFormLoading(false);
          }}
          onSave={handleFormSave}
          onToastChange={setFormToast}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
        {formToast}
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Module"
        message="Are you sure you want to delete this module? This action cannot be undone."
      />

      {ToastComponent}
    </div>
  );
}
