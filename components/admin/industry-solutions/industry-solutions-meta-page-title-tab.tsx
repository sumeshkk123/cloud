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
import { IndustrySolutionsMetaPageTitleForm } from './industry-solutions-meta-page-title-form';



interface CombinedRow {
  page: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const INDUSTRY_SOLUTION_PAGE_PREFIX = 'industry-solutions';
const ITEMS_PER_PAGE = 20;

export function IndustrySolutionsMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [industrySolutionPages, setIndustrySolutionPages] = useState<Array<{ value: string; label: string }>>([]);
  const [tableData, setTableData] = useState<CombinedRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [localeToDelete, setLocaleToDelete] = useState<string>('en');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadIndustrySolutionPages();
  }, []);

  useEffect(() => {
    if (industrySolutionPages.length > 0) {
      loadAllData();
    }
  }, [industrySolutionPages.length]);

  useEffect(() => {
    loadAllData();
  }, [refreshKey]);

  const loadIndustrySolutionPages = async () => {
    try {
      const res = await fetch('/api/admin/industry-solutions?locale=en', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok || !Array.isArray(data)) {
        setIndustrySolutionPages([]);
        return;
      }
      const allPages = data.map((s: any) => ({
        value: `${INDUSTRY_SOLUTION_PAGE_PREFIX}/${s.slug || ''}`,
        label: String(s.slug || s.id),
      }));
      setIndustrySolutionPages(allPages);
    } catch (error) {
      setIndustrySolutionPages([]);
      showToast('Failed to load industry solution pages.', 'error');
    }
  };

  const loadAllData = async () => {
    if (industrySolutionPages.length === 0) return;
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];
      for (const pageOption of industrySolutionPages) {
        const page = pageOption.value;
        if (page === INDUSTRY_SOLUTION_PAGE_PREFIX) continue;

        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(page)}`, { cache: 'no-store' });
        const metaData = metaRes.ok ? await metaRes.json() : [];

        const locales = new Set<string>();
        let metaEn: { title?: string; description?: string; keywords?: string } = {};

        if (Array.isArray(metaData)) {
          metaData.forEach((item: any) => {
            if (item.page === page) {
              const locale = item.locale || 'en';
              locales.add(locale);
              if (locale === 'en') {
                metaEn = { title: item.title || '', description: item.description || '', keywords: item.keywords || '' };
              }
            }
          });
        }

        const allLocales = Array.from(locales);
        if (allLocales.length > 0) {
          allData.push({
            page,
            locale: 'en',
            metaTitle: metaEn.title ?? '',
            metaDescription: metaEn.description ?? '',
            metaKeywords: metaEn.keywords ?? '',
            availableLocales: allLocales,
          });
        }
      }
      setTableData(allData);
    } catch (error) {
      console.error('Error loading data:', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;

    try {
      setIsDeleting(true);

      const [metaRes, pageTitleRes] = await Promise.all([
        fetch(`/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
          method: 'DELETE',
        }),
        fetch(`/api/admin/page-titles?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
          method: 'DELETE',
        }),
      ]);

      if (!metaRes.ok || !pageTitleRes.ok) {
        throw new Error('Delete request failed');
      }

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

  const totalItems = tableData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return tableData.slice(start, start + ITEMS_PER_PAGE);
  }, [tableData, currentPage]);

  const columns = [
    { key: 'page', label: 'Page', className: 'w-48' },
    { key: 'metaTitle', label: 'Meta Title', className: 'w-40' },
    { key: 'metaDescription', label: 'Meta Description', className: 'w-64' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="primary"
          leftIcon={<Plus className="h-4 w-4" />}
          onClick={() => {
            setEditingPage(null);
            setIsFormOpen(true);
          }}
        >
          Add Meta Details
        </Button>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={industrySolutionPages.length === 0 ? 'No industry solution pages. Add solutions first.' : 'No meta/page title data.'}
        renderCell={(column, row) => {
          if (column.key === 'page') {
            const pageSlug = row.page.replace(`${INDUSTRY_SOLUTION_PAGE_PREFIX}/`, '');
            const label = industrySolutionPages.find((p) => p.value === row.page)?.label ?? pageSlug;
            return <span className="font-medium text-gray-900 dark:text-gray-100">{label}</span>;
          }
          if (column.key === 'metaTitle') return <span className="line-clamp-2 text-sm">{row.metaTitle || '-'}</span>;
          if (column.key === 'metaDescription') return <span className="line-clamp-2 text-sm">{row.metaDescription || '—'}</span>;
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingPage(row.page);
                  setIsFormOpen(true);
                }}
                onDelete={() => {
                  setPageToDelete(row.page);
                  // Default to English locale for UI, but handle all in DeleteConfirmModal if needed
                  setLocaleToDelete('en');
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
          setFormToast(null);
        }}
        title={editingPage ? 'Edit Meta Details' : 'Add Meta Details'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setIsFormOpen(false)} disabled={isFormSaving}>
              Cancel
            </Button>
            <Button type="submit" form="industry-solutions-meta-page-title-form" variant="primary" disabled={isFormSaving || isFormLoading}>
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <IndustrySolutionsMetaPageTitleForm
          initialPage={editingPage || undefined}
          industrySolutionPages={industrySolutionPages}
          onClose={() => setIsFormOpen(false)}
          onSave={() => {
            setRefreshKey((k) => k + 1);
          }}
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
          setPageToDelete(null);
          setLocaleToDelete('en');
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Meta & Page Title"
        message={`Are you sure you want to delete meta details and page title for page "${pageToDelete}" (${localeToDelete})?`}
      />

      {ToastComponent}
    </div>
  );
}

