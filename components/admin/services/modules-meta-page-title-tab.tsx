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
import { ServicesMetaPageTitleForm } from './services-meta-page-title-form';

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

const SERVICE_PAGE_PREFIX = 'services';
const ITEMS_PER_PAGE = 20;

// Static service pages
const STATIC_SERVICE_PAGES = [
  { value: 'services/comp-plan-audit', label: 'Compensation Plan Audit' },
  { value: 'services/e-commerce-integration', label: 'E-commerce Integration' },
  { value: 'services/magento-development', label: 'Magento Development' },
  { value: 'services/mlm-software-development', label: 'MLM Software Development' },
  { value: 'services/opencart-development', label: 'OpenCart Development' },
  { value: 'services/shopify-integration-in-cloud-mlm-software', label: 'Shopify Integration' },
  { value: 'services/web-development', label: 'Web Development' },
  { value: 'services/website-designing', label: 'Website Designing' },
  { value: 'services/woocommerce-integration-with-cloud-mlm-software', label: 'WooCommerce Integration' },
];

export function ServicesMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [servicePages, setServicePages] = useState<Array<{ value: string; label: string }>>([]);
  const [tableData, setTableData] = useState<CombinedRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [editingLocale, setEditingLocale] = useState<string>('en');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [localeToDelete, setLocaleToDelete] = useState<string>('en');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadServicePages();
  }, []);

  useEffect(() => {
    if (servicePages.length > 0) {
      loadAllData();
    }
  }, [servicePages.length]);

  useEffect(() => {
    loadAllData();
  }, [refreshKey]);

  const loadAllData = async () => {
    if (servicePages.length === 0) return;
    
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];
      
      // Load data for all service pages
      for (const pageOption of servicePages) {
        const page = pageOption.value;
        
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

  const loadServicePages = async () => {
    try {
      const allPages = [...STATIC_SERVICE_PAGES];
      
      // Add main services page
      allPages.push({ value: SERVICE_PAGE_PREFIX, label: 'Services' });
      
      // Sort alphabetically by label
      allPages.sort((a, b) => a.label.localeCompare(b.label));
      setServicePages(allPages);
    } catch (error) {
      console.error('Error loading service pages:', error);
      showToast('Failed to load service pages.', 'error');
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
    <div className="space-y-6">
      {ToastComponent}
      {formToast}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Service Meta Details & Page Titles</h2>
        <Button
          variant="primary"
          onClick={() => {
            setIsFormOpen(true);
            setEditingPage(null);
            setEditingLocale('en');
            setFormToast(null);
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </div>

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
                return (
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
              form="services-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <ServicesMetaPageTitleForm
          initialPage={editingPage || undefined}
          initialLocale={editingLocale}
          servicePages={servicePages}
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
