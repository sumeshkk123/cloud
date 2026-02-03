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
import { ModulesMetaPageTitleForm } from './modules-meta-page-title-form';
import { PageTitle } from '@/components/ui/adminUi/page-title';

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

const MODULE_PAGE_PREFIX = 'mlm-software-modules';
const ITEMS_PER_PAGE = 20;

export function ModulesMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modulePages, setModulePages] = useState<Array<{ value: string; label: string }>>([]);
  const [tableData, setTableData] = useState<CombinedRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [editingLocale, setEditingLocale] = useState<string>('en');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [localeToDelete, setLocaleToDelete] = useState<string>('en');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadModulePages();
  }, []);

  useEffect(() => {
    if (modulePages.length > 0) {
      loadAllData();
    }
  }, [modulePages.length]);

  useEffect(() => {
    loadAllData();
  }, [refreshKey]);

  const loadAllData = async () => {
    if (modulePages.length === 0) return;
    
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];
      
      // Load data for all module pages (excluding main module page)
      for (const pageOption of modulePages) {
        const page = pageOption.value;
        
        // Skip the main module page - only show inner pages
        if (page === MODULE_PAGE_PREFIX) {
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

  const loadModulePages = async () => {
    try {
      const res = await fetch('/api/admin/modules?locale=en', {
        cache: 'no-store',
      });
      
      const allPages: Array<{ value: string; label: string }> = [];
      
      if (res.ok) {
        const modules = await res.json();
        const dbPages = modules
          .filter((m: any) => m.hasDetailPage && m.slug)
          .map((m: any) => ({
            value: `${MODULE_PAGE_PREFIX}/${m.slug}`,
            label: m.title || m.slug,
          }));
        
        allPages.push(...dbPages);
      }
      
      // Don't add main module page - only show inner pages
      // Sort alphabetically by label
      allPages.sort((a, b) => a.label.localeCompare(b.label));
      setModulePages(allPages);
    } catch (error) {
      console.error('Error loading module pages:', error);
      showToast('Failed to load module pages.', 'error');
    }
  };

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    setIsFormOpen(false);
    setEditingPage(null);
    setEditingLocale('en');
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
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error('Error deleting:', error);
      showToast('Failed to delete.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const columns = [
    { key: 'page', label: 'Page' },
    { key: 'locale', label: 'Locale' },
    { key: 'metaTitle', label: 'Meta Title' },
    { key: 'metaDescription', label: 'Meta Description' },
    { key: 'metaKeywords', label: 'Meta Keywords' },
    { key: 'divider', label: '' },
    { key: 'pageTitle', label: 'Page Title' },
    { key: 'pagePill', label: 'Page Pill' },
    { key: 'sectionSubtitle', label: 'Section Subtitle' },
    { key: 'languages', label: 'Languages' },
    { key: 'actions', label: 'Actions' },
  ];

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return tableData.slice(start, start + ITEMS_PER_PAGE);
  }, [tableData, currentPage]);

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const totalItems = tableData.length;

  return (
    <div className="space-y-4">
      <PageTitle 
        title="Module Meta and Page Title" 
        description="Manage module meta details and page titles across all languages"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={() => {
              setIsFormOpen(true);
              setEditingPage(null);
              setEditingLocale('en');
              setFormToast(null);
            }}
          >
            New Module Meta
          </Button>
        </div>
      </PageTitle>

      {ToastComponent}
      {formToast}

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          <Table
            columns={columns}
            data={paginatedData}
            renderCell={(column, row) => {
              if (column.key === 'divider') {
                return <div className="w-px bg-gray-200" />;
              }
              if (column.key === 'languages') {
                return <LanguageBadges availableLocales={row.availableLocales || []} />;
              }
              if (column.key === 'actions') {
                const actionMenu = (
                  <ActionMenu
                    onEdit={() => {
                      setEditingPage(row.page);
                      setEditingLocale(row.locale);
                      setIsFormOpen(true);
                      setFormToast(null);
                    }}
                    onDelete={() => {
                      setPageToDelete(row.page);
                      setLocaleToDelete(row.locale);
                      setDeleteConfirmOpen(true);
                    }}
                  />
                );
                // ActionMenu can return null if no items, but we always provide onEdit and onDelete
                return actionMenu ?? <div />;
              }
              const value = row[column.key as keyof CombinedRow];
              return value != null ? String(value) : '';
            }}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        </>
      )}

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
        footer={
          <div className="flex justify-end gap-3">
            <Button
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
              form="modules-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <ModulesMetaPageTitleForm
          initialPage={editingPage || undefined}
          initialLocale={editingLocale}
          modulePages={modulePages}
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
        isLoading={isDeleting}
        title="Delete Meta Details & Page Title"
        message={`Are you sure you want to delete meta details and page title for page "${pageToDelete}" (${localeToDelete})?`}
      />
    </div>
  );
}
