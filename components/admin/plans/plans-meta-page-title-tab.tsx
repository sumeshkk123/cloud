'use client';

import { useState, useEffect, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Modal } from '@/components/ui/adminUi/modal';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { useToast } from '@/components/ui/toast';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { PlansMetaPageTitleForm } from './plans-meta-page-title-form';
import { i18n } from '@/i18n-config';
import { ALL_MLM_PLAN_SUBPAGE_SLUGS } from '@/lib/mlm-plan-subpage-slugs';

interface CombinedRow {
  page: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const PLAN_PAGE_PREFIX = 'mlm-plan';
const ITEMS_PER_PAGE = 20;

function slugToLabel(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Build page options: plan inner pages only (app/[lang]/mlm-plan/[slug]). Main MLM Plans page is managed in /admin/meta-details. */
function buildPlanPageOptions(): Array<{ value: string; label: string }> {
  const options: Array<{ value: string; label: string }> = [];
  for (const slug of ALL_MLM_PLAN_SUBPAGE_SLUGS) {
    options.push({
      value: `${PLAN_PAGE_PREFIX}/${slug}`,
      label: slugToLabel(slug),
    });
  }
  options.sort((a, b) => a.label.localeCompare(b.label));
  return options;
}

const ALL_PLAN_PAGE_OPTIONS = buildPlanPageOptions();

export function PlansMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<CombinedRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [editingLocale, setEditingLocale] = useState<string>('en');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [localeToDelete, setLocaleToDelete] = useState<string>('en');
  const [isDeleting, setIsDeleting] = useState(false);

  const loadAllData = async () => {
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];

      for (const pageOption of ALL_PLAN_PAGE_OPTIONS) {
        const page = pageOption.value;
        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(page)}&all=true`, {
          cache: 'no-store',
        });
        const metaData = metaRes.ok ? await metaRes.json() : [];

        const combinedMap = new Map<string, CombinedRow>();
        const locales = new Set<string>();

        if (Array.isArray(metaData)) {
          metaData.forEach((item: any) => {
            if (item.page === page) {
              const locale = item.locale || 'en';
              locales.add(locale);
              if (!combinedMap.has(locale)) {
                combinedMap.set(locale, {
                  page,
                  locale,
                  metaTitle: '',
                  metaDescription: '',
                  metaKeywords: '',
                  availableLocales: [],
                });
              }
              const row = combinedMap.get(locale)!;
              row.metaTitle = item.title || '';
              row.metaDescription = item.description || '';
              row.metaKeywords = item.keywords || '';
            }
          });
        }

        const allLocales = Array.from(locales);
        combinedMap.forEach((row) => {
          row.availableLocales = allLocales;
          allData.push(row);
        });
      }

      setTableData(allData);
    } catch (error) {
      console.error('Error loading data:', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, [refreshKey]);

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    await loadAllData();
    showToast('Saved successfully.', 'success');
    // Keep modal open; user closes manually via Cancel or X (match modules/services meta-page-title)
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;
    try {
      setIsDeleting(true);
      await fetch(
        `/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${encodeURIComponent(localeToDelete)}`,
        { method: 'DELETE' }
      );
      showToast('Deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setPageToDelete(null);
      setLocaleToDelete('en');
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error('Error deleting:', error);
      showToast('Failed to delete.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const columns = [
    { key: 'page', label: 'Page', className: 'w-1/4' },
    { key: 'metaTitle', label: 'Meta Title', className: 'w-1/4' },
    { key: 'metaDescription', label: 'Meta Description', className: 'w-1/4' },
    { key: 'languages', label: 'Languages', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  const totalItems = tableData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return tableData.slice(start, start + ITEMS_PER_PAGE);
  }, [tableData, currentPage]);

  const handleNew = () => {
    setEditingPage(null);
    setEditingLocale('en');
    setIsFormOpen(true);
    setFormToast(null);
  };

  const handleEdit = (page: string, locale: string) => {
    setEditingPage(page);
    setEditingLocale(locale);
    setIsFormOpen(true);
    setFormToast(null);
  };

  const getPageDisplayLabel = (page: string) => {
    if (page.startsWith(`${PLAN_PAGE_PREFIX}/`)) {
      return slugToLabel(page.replace(`${PLAN_PAGE_PREFIX}/`, ''));
    }
    return page;
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
            onClick={handleNew}
          >
            New
          </Button>
        </div>
      </div>

      {ToastComponent}
      {formToast}

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading meta details...' : 'No meta details yet. Click \'New\' to create.'}
        renderCell={(column, row) => {
          if (column.key === 'page') {
            return (
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {getPageDisplayLabel(row.page)}
              </span>
            );
          }
          if (column.key === 'metaTitle') {
            return (
              <span className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                {row.metaTitle || <span className="text-gray-400 italic">No title</span>}
              </span>
            );
          }
          if (column.key === 'metaDescription') {
            return (
              <span className="text-gray-700 dark:text-gray-300 line-clamp-2">
                {row.metaDescription || <span className="text-gray-400 italic">—</span>}
              </span>
            );
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
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => handleEdit(row.page, row.locale)}
                onDelete={() => {
                  setPageToDelete(row.page);
                  setLocaleToDelete(row.locale);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof CombinedRow] as string;
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
          setEditingPage(null);
          setEditingLocale('en');
          setFormToast(null);
        }}
        title={editingPage ? 'Edit Meta Details' : 'New Meta Details'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingPage(null);
                setEditingLocale('en');
                setFormToast(null);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="plans-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <PlansMetaPageTitleForm
          initialPage={editingPage || undefined}
          initialLocale={editingLocale}
          planPages={ALL_PLAN_PAGE_OPTIONS}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPage(null);
            setEditingLocale('en');
          }}
          onSave={handleFormSave}
          onToastChange={setFormToast}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setPageToDelete(null);
          setLocaleToDelete('en');
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Meta Details"
        message={`Are you sure you want to delete meta details for "${pageToDelete}" (${localeToDelete})?`}
      />
    </div>
  );
}
