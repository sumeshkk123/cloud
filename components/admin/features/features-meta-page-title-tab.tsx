'use client';

import { useState, useEffect, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Modal } from '@/components/ui/adminUi/modal';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { Select } from '@/components/ui/adminUi/select';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { useToast } from '@/components/ui/toast';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { FeaturesMetaPageTitleForm } from './features-meta-page-title-form';
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

const FEATURE_PAGE_PREFIX = 'mlm-software-feature';
const ITEMS_PER_PAGE = 20;

export function FeaturesMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [featurePages, setFeaturePages] = useState<Array<{ value: string; label: string }>>([]);
  const [tableData, setTableData] = useState<CombinedRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [editingLocale, setEditingLocale] = useState<string>('en');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState<string | null>(null);
  const [localeToDelete, setLocaleToDelete] = useState<string>('en');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadFeaturePages();
  }, []);

  useEffect(() => {
    if (featurePages.length > 0) {
      loadAllData();
    }
  }, [featurePages.length]);

  useEffect(() => {
    loadAllData();
  }, [refreshKey]);

  const loadAllData = async () => {
    if (featurePages.length === 0) return;
    
    try {
      setIsLoading(true);
      const allData: CombinedRow[] = [];
      
      // Load data for all feature pages
      for (const pageOption of featurePages) {
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

  // Static feature pages - all feature pages that exist
  const STATIC_FEATURE_PAGES = [
    { value: 'mlm-software-feature/ai-features', label: 'AI Features' },
    { value: 'mlm-software-feature/ai-commission-forecasting', label: 'AI Commission Forecasting' },
    { value: 'mlm-software-feature/ai-smart-recruiter', label: 'AI Smart Recruiter' },
    { value: 'mlm-software-feature/highly-extensible', label: 'Highly Extensible' },
    { value: 'mlm-software-feature/in-built-e-wallet', label: 'In-built E-Wallet' },
    { value: 'mlm-software-feature/multilingual-translational-system', label: 'Multilingual Translational System' },
    { value: 'mlm-software-feature/multi-currency-system', label: 'Multi Currency System' },
    { value: 'mlm-software-feature/great-support', label: 'Great Support' },
    { value: 'mlm-software-feature/easy-navigation', label: 'Easy Navigation' },
    { value: 'mlm-software-feature/support-ticket-system-module', label: 'Support Ticket System Module' },
    { value: 'mlm-software-feature/sms-integration-internationalnational', label: 'SMS Integration (International/National)' },
    { value: 'mlm-software-feature/white-label-mlm-software', label: 'White Label MLM Software' },
    { value: 'mlm-software-feature/clean-interface-and-easy-to-use', label: 'Clean Interface and Easy to Use' },
    { value: 'mlm-software-feature/mobile-friendly-super-responsive-in-all-devices', label: 'Mobile Friendly & Super Responsive' },
    { value: 'mlm-software-feature/improved-page-speed', label: 'Improved Page Speed' },
    { value: 'mlm-software-feature/dynamic-compression-system', label: 'Dynamic Compression System' },
    { value: 'mlm-software-feature/minified-source-minified-resources', label: 'Minified Source, Minified Resources' },
    { value: 'mlm-software-feature/backend-caching-technology', label: 'Backend Caching Technology' },
    { value: 'mlm-software-feature/optimized-to-use-in-all-devices', label: 'Optimized to Use in All Devices' },
    { value: 'mlm-software-feature/web-based-mlm-software', label: 'Web Based MLM Software' },
    { value: 'mlm-software-feature/flexible-integration-with-various-platforms', label: 'Flexible Integration with Various Platforms' },
    { value: 'mlm-software-feature/powerfully-responsive', label: 'Powerfully Responsive' },
    { value: 'mlm-software-feature/secure-mlm-software', label: 'Secure MLM Software' },
    { value: 'mlm-software-feature/powered-by-best-secure-php-framework-laravel', label: 'Powered by Best Secure PHP Framework (Laravel)' },
    { value: 'mlm-software-feature/secure-authentication-system', label: 'Secure Authentication System' },
    { value: 'mlm-software-feature/strong-backup-system', label: 'Strong Backup System' },
    { value: 'mlm-software-feature/payment-gateway', label: 'Payment Gateway' },
    { value: 'mlm-software-feature/self-hosted-mlm-software-system', label: 'Self-hosted MLM Software System' },
    { value: 'mlm-software-feature/replicating-website', label: 'Replicating Website' },
    { value: 'mlm-software-feature/lcp-pages-management', label: 'LCP Pages Management' },
    { value: 'mlm-software-feature/open-cart-word-press-and-drupal-integration-with-api', label: 'OpenCart, WordPress and Drupal Integration with API' },
    { value: 'mlm-software-feature/magento-integration-with-api', label: 'Magento Integration with API' },
    { value: 'mlm-software-feature/advanced-reporting-system', label: 'Advanced Reporting System' },
    { value: 'mlm-software-feature/payment-processing-system-automatic-manual', label: 'Payment Processing System (Automatic/Manual)' },
    { value: 'mlm-software-feature/privileged-user-system', label: 'Privileged User System' },
    { value: 'mlm-software-feature/auto-responder-system', label: 'Auto Responder System' },
    { value: 'mlm-software-feature/theme-changing-options', label: 'Theme Changing Options' },
    { value: 'mlm-software-feature/powerful-e-mail-system', label: 'Powerful E-mail System' },
    { value: 'mlm-software-feature/web-designing', label: 'Web Designing' },
    { value: 'mlm-software-feature/e-voucher-generator', label: 'E-Voucher Generator' },
  ];

  const loadFeaturePages = async () => {
    try {
      const res = await fetch('/api/admin/features?locale=en', {
        cache: 'no-store',
      });
      
      const allPages = [...STATIC_FEATURE_PAGES];
      
      if (res.ok) {
        const features = await res.json();
        const dbPages = features
          .filter((f: any) => f.hasDetailPage && f.slug)
          .map((f: any) => ({
            value: `${FEATURE_PAGE_PREFIX}/${f.slug}`,
            label: f.title || f.slug,
          }));
        
        // Merge database pages with static pages, avoiding duplicates
        const existingValues = new Set(allPages.map(p => p.value));
        dbPages.forEach((page: { value: string; label: string }) => {
          if (!existingValues.has(page.value)) {
            allPages.push(page);
          }
        });
      }
      
      // Sort alphabetically by label
      allPages.sort((a, b) => a.label.localeCompare(b.label));
      setFeaturePages(allPages);
    } catch (error) {
      console.error('Error loading feature pages:', error);
      // Still set static pages even if API fails
      setFeaturePages(STATIC_FEATURE_PAGES.sort((a, b) => a.label.localeCompare(b.label)));
      showToast('Failed to load feature pages from database. Showing static pages only.', 'warning');
    }
  };


  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    await loadAllData();
  };

  const handleNew = () => {
    setEditingPage(null);
    setEditingLocale('en');
    setSelectedPage('');
    setIsFormOpen(true);
  };

  const handleEdit = (page: string, locale: string) => {
    setEditingPage(page);
    setEditingLocale(locale);
    setIsFormOpen(true);
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;

    try {
      setIsDeleting(true);

      // Delete meta details
      const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
        method: 'DELETE',
      });

      // Delete page title
      const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(pageToDelete)}&locale=${localeToDelete}`, {
        method: 'DELETE',
      });

      if (!metaRes.ok && !pageTitleRes.ok) {
        const metaData = await metaRes.json().catch(() => ({}));
        const pageTitleData = await pageTitleRes.json().catch(() => ({}));
        throw new Error(metaData?.error || pageTitleData?.error || 'Failed to delete');
      }

      showToast('Deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setPageToDelete(null);
      setLocaleToDelete('en');
      await loadAllData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to delete.';
      showToast(message, 'error');
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
    { key: 'page', label: 'Page', className: 'w-1/4' },
    { key: 'metaTitle', label: 'Meta Title', className: 'w-1/4' },
    { key: 'pageTitle', label: 'Page Title', className: 'w-1/4' },
    { key: 'languages', label: 'Languages', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
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
            onClick={handleNew}
          >
            New
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading meta details and page titles...' : 'No meta details or page titles yet. Click \'New\' to create.'}
        renderCell={(column, row) => {
          if (column.key === 'page') {
            // Extract just the slug part for display
            const pageSlug = row.page.replace(`${FEATURE_PAGE_PREFIX}/`, '');
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
              form="features-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <FeaturesMetaPageTitleForm
          initialPage={editingPage || selectedPage}
          initialLocale={editingLocale}
          featurePages={featurePages}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPage(null);
            setEditingLocale('en');
          }}
          onSave={async () => {
            await handleFormSave();
            setIsFormOpen(false);
            setEditingPage(null);
            setEditingLocale('en');
          }}
          onToastChange={setFormToast}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
        {formToast}
      </Modal>

      {/* Delete Confirmation Modal */}
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
        message={`Are you sure you want to delete the meta details and page title for ${pageToDelete} (${localeToDelete.toUpperCase()})? This action cannot be undone.`}
      />

      {ToastComponent}
    </div>
  );
}
