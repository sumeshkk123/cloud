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
import { i18n } from '@/i18n-config';
import {
  TOP_LEVEL_SERVICE_SLUGS,
  ALL_SERVICES_SUBPAGE_SLUGS,
  getServicePageKey,
} from '@/lib/services-subpage-slugs';

interface CombinedRow {
  page: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const SERVICE_PAGE_PREFIX = 'services';
const ITEMS_PER_PAGE = 20;

/** Human-readable labels for service page slugs (for select field). */
const SERVICE_SLUG_LABELS: Record<string, string> = {
  'bitcoin-cryptocurrency-mlm-software': 'Bitcoin & Cryptocurrency MLM Software',
  'cryptocurrency-mlm-software': 'Cryptocurrency MLM Software',
  'mlm-consulting': 'MLM Consulting',
  'mlm-migration': 'MLM Migration',
  'mlm-software-development': 'MLM Software Development',
  'compensation-plan-audit': 'Compensation Plan Audit',
  'comp-plan-audit': 'Compensation Plan Audit',
  'e-commerce-integration': 'E-commerce Integration',
  'magento-development': 'Magento Development',
  'opencart-development': 'OpenCart Development',
  'shopify-integration-in-cloud-mlm-software': 'Shopify Integration',
  'web-development': 'Web Development',
  'website-designing': 'Website Designing',
  'woocommerce-integration-with-cloud-mlm-software': 'WooCommerce Integration',
};

/** Legacy page keys (no "services/" prefix) that may exist in meta_details. */
const LEGACY_SERVICE_PAGE_VALUES = [
  'cryptocurrency-mlm-software',
  'mlm-consulting',
  'mlm-migration',
  'services/comp-plan-audit',
] as const;

/** Build all service page options for the select (services + every service subpage + legacy keys). */
function buildAllServicePageOptions(): Array<{ value: string; label: string }> {
  const options: Array<{ value: string; label: string }> = [
    { value: SERVICE_PAGE_PREFIX, label: 'Services (main)' },
  ];
  const seen = new Set<string>();

  const add = (slug: string, valueOverride?: string) => {
    const value = valueOverride ?? getServicePageKey(slug);
    if (seen.has(value)) return;
    seen.add(value);
    const label = SERVICE_SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    options.push({ value, label });
  };

  TOP_LEVEL_SERVICE_SLUGS.forEach((s) => add(s));
  ALL_SERVICES_SUBPAGE_SLUGS.forEach((s) => add(s));
  LEGACY_SERVICE_PAGE_VALUES.forEach((value) => {
    const slug = value.replace(/^services\//, '');
    if (!seen.has(value)) {
      seen.add(value);
      const label = SERVICE_SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      options.push({ value, label });
    }
  });
  options.sort((a, b) => a.label.localeCompare(b.label));
  return options;
}

const ALL_SERVICE_PAGE_OPTIONS = buildAllServicePageOptions();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  useEffect(() => {
    if (servicePages.length > 0) {
      loadAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllData runs when servicePages changes
  }, [servicePages.length]);

  useEffect(() => {
    loadAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllData runs when refreshKey changes
  }, [refreshKey]);

  const loadAllData = async () => {
    if (servicePages.length === 0) return;

    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];

      // Load data for all service pages (including main services page)
      for (const pageOption of servicePages) {
        const page = pageOption.value;

        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(page)}`, {
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
        const enRow = combinedMap.get('en');
        const rowToDisplay = enRow || combinedMap.get(allLocales[0]);

        if (rowToDisplay) {
          rowToDisplay.availableLocales = allLocales;
          allData.push(rowToDisplay);
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

  const loadServicePages = async () => {
    try {
      setServicePages(ALL_SERVICE_PAGE_OPTIONS);
    } catch (error) {
      console.error('Error loading service pages:', error);
      showToast('Failed to load service pages.', 'error');
    }
  };

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    await loadAllData();
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;

    try {
      setIsDeleting(true);

      await fetch(`/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
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
        emptyMessage={isLoading ? 'Loading meta details...' : 'No meta details yet. Click \'New\' to create.'}
        renderCell={(column, row) => {
          if (column.key === 'page') {
            // Extract just the slug part for display
            const pageSlug = row.page.replace(`${SERVICE_PAGE_PREFIX}/`, '');
            return <span className="font-medium text-gray-900 dark:text-gray-100">{pageSlug}</span>;
          }
          if (column.key === 'metaTitle') {
            return <span className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">{row.metaTitle || <span className="text-gray-400 italic">No title</span>}</span>;
          }
          if (column.key === 'metaDescription') {
            return <span className="text-gray-700 dark:text-gray-300 line-clamp-2">{row.metaDescription || <span className="text-gray-400 italic">—</span>}</span>;
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
        title="Delete Meta Details"
        message={`Are you sure you want to delete meta details for page "${pageToDelete}" (${localeToDelete})?`}
      />
    </div>
  );
}
