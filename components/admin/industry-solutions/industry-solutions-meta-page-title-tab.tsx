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

  const loadAllData = async () => {
    if (industrySolutionPages.length === 0) return;
    
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];
      
      // Load data for all industry solution pages (excluding main industry solutions page)
      for (const pageOption of industrySolutionPages) {
        const page = pageOption.value;
        
        // Skip the main industry solutions page - only show inner pages
        if (page === INDUSTRY_SOLUTION_PAGE_PREFIX) {
          continue;
        }
        
        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(page)}`, {
          cache: 'no-store',
        });
        const metaData = metaRes.ok ? await metaRes.json() : [];
        
        const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(page)}`, {
          cache: 'no-store',
        });
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
      console.error('Error loading data:', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadIndustrySolutionPages = async () => {
    try {
      const res = await fetch('/api/admin/industry-solutions?locale=en', {
        cache: 'no-store',
      });
      
      const allPages: Array<{ value: string; label: string }> = [];
      
      if (res.ok) {
        const solutions = await res.json();
        const dbPages = solutions.map((s: any) => ({
          value: `${INDUSTRY_SOLUTION_PAGE_PREFIX}/${s.id}`,
          label: s.title || s.id,
        }));
        
        allPages.push(...dbPages);
      }
      
      // Don't add main industry solutions page - only show inner pages
      // Sort alphabetically by label
      allPages.sort((a, b) => a.label.localeCompare(b.label));
      setIndustrySolutionPages(allPages);
    } catch (error) {
      console.error('Error loading industry solution pages:', error);
      showToast('Failed to load industry solution pages.', 'error');
    }
  };

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    await loadAllData();
  };

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

  const handleDelete = async () => {
    if (!pageToDelete) return;
    
    try {
      setIsDeleting(true);
      
      // Delete meta details
      await fetch(`/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
        method: 'DELETE',
      });
      
      // Delete page titles
      await fetch(`/api/admin/page-titles?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
        method: 'DELETE',
      });
      
      showToast('Deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setPageToDelete(null);
      setLocaleToDelete('en');
      await loadAllData();
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
    { key: 'pageTitle', label: 'Page Title', className: 'w-1/4' },
    { key: 'languages', label: 'Languages', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  const totalItems = tableData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return tableData.slice(start, start + ITEMS_PER_PAGE);
  }, [tableData, currentPage]);

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

      {/* Table */}
      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading meta details and page titles...' : 'No meta details or page titles yet. Click \'New\' to create.'}
        renderCell={(column, row) => {
          if (column.key === 'page') {
            // Extract just the slug part for display
            const pageSlug = row.page.replace(`${INDUSTRY_SOLUTION_PAGE_PREFIX}/`, '');
            return <span className="font-medium text-gray-900 dark:text-gray-100">{pageSlug}</span>;
          }
          if (column.key === 'metaTitle') {
            return <span className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{row.metaTitle || <span className="text-gray-400 italic">No title</span>}</span>;
          }
          if (column.key === 'pageTitle') {
            return <span className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{row.pageTitle || <span className="text-gray-400 italic">No title</span>}</span>;
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

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingPage(null);
          setEditingLocale('en');
          setFormToast(null);
        }}
        title={editingPage ? 'Edit Meta Details & Page Title' : 'New Meta Details & Page Title'}
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
              form="industry-solutions-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <IndustrySolutionsMetaPageTitleForm
          initialPage={editingPage || undefined}
          initialLocale={editingLocale}
          industrySolutionPages={industrySolutionPages}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPage(null);
            setEditingLocale('en');
          }}
          onSave={async () => {
            await handleFormSave();
          }}
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
        isDeleting={isDeleting}
        title="Delete Meta Details & Page Title"
        message={`Are you sure you want to delete meta details and page title for page "${pageToDelete}" (${localeToDelete})?`}
      />
    </div>
  );
}
