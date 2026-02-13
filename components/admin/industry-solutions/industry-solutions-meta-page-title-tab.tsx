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
import { IndustrySolutionsMetaPageTitleForm } from './industry-solutions-meta-page-title-form';
import { i18n } from '@/i18n-config';

function slugFromTitle(title: string): string {
  return (title || '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

interface CombinedRow {
  page: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  pageTitle: string;
  pagePill: string;
  sectionSubtitle: string;
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
  const [editingLocale, setEditingLocale] = useState<string>('en');
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
        value: `${INDUSTRY_SOLUTION_PAGE_PREFIX}/${slugFromTitle(s.title || '')}`,
        label: String(s.title || s.id),
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
        const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(page)}`, { cache: 'no-store' });
        const pageTitleData = pageTitleRes.ok ? await pageTitleRes.json() : [];
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
                  pageTitle: '',
                  pagePill: '',
                  sectionSubtitle: '',
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
        if (Array.isArray(pageTitleData)) {
          pageTitleData.forEach((item: any) => {
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
                  pageTitle: '',
                  pagePill: '',
                  sectionSubtitle: '',
                  availableLocales: [],
                });
              }
              const row = combinedMap.get(locale)!;
              row.pageTitle = item.title || '';
              row.pagePill = item.pagePill || '';
              row.sectionSubtitle = item.sectionSubtitle || '';
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
      setTableData([]);
    } finally {
      setIsLoading(false);
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
    { key: 'locale', label: 'Locale', className: 'w-24' },
    { key: 'pageTitle', label: 'Page Title', className: 'w-40' },
    { key: 'metaTitle', label: 'Meta Title', className: 'w-40' },
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
            setEditingLocale('en');
            setIsFormOpen(true);
          }}
        >
          Add Meta & Page Title
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
            return <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{pageSlug || row.page}</span>;
          }
          if (column.key === 'locale') {
            return (
              <LanguageBadges
                availableLocales={row.availableLocales || [row.locale]}
                allLocales={[...i18n.locales]}
                layout="badge"
              />
            );
          }
          if (column.key === 'pageTitle') return <span className="line-clamp-2 text-sm">{row.pageTitle || '—'}</span>;
          if (column.key === 'metaTitle') return <span className="line-clamp-2 text-sm">{row.metaTitle || '—'}</span>;
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingPage(row.page);
                  setEditingLocale(row.locale);
                  setIsFormOpen(true);
                }}
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
          setFormToast(null);
        }}
        title={editingPage ? 'Edit Meta & Page Title' : 'Add Meta & Page Title'}
        size="3xl"
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
          initialLocale={editingLocale}
          industrySolutionPages={industrySolutionPages}
          onClose={() => setIsFormOpen(false)}
          onSave={() => {
            setRefreshKey((k) => k + 1);
            setIsFormOpen(false);
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
        }}
        onConfirm={async () => {
          if (!pageToDelete) return;
          setDeleteConfirmOpen(false);
          setPageToDelete(null);
          setRefreshKey((k) => k + 1);
        }}
        isLoading={isDeleting}
        title="Delete Meta & Page Title"
        message="Deleting is done from Meta Details and Page Titles admin. This only closes the dialog."
      />

      {ToastComponent}
    </div>
  );
}
