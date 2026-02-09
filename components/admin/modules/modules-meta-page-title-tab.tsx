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
import { MODULES_SUBPAGE_SLUGS, getModulesSubpageMeta } from '@/lib/modules-subpage-slugs';

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
  const [localesToDelete, setLocalesToDelete] = useState<string[]>([]);
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

      // Load data for all module pages (excluding main module page) — one row per page, English for display (like /admin/page-titles)
      for (const pageOption of modulePages) {
        const page = pageOption.value;

        if (page === MODULE_PAGE_PREFIX) continue;

        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(page)}&all=true`, {
          cache: 'no-store',
        });
        const metaData = metaRes.ok ? await metaRes.json() : [];

        const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(page)}`, {
          cache: 'no-store',
        });
        const pageTitleDataRaw = pageTitleRes.ok ? await pageTitleRes.json() : [];
        const pageTitleData = Array.isArray(pageTitleDataRaw)
          ? pageTitleDataRaw
          : pageTitleDataRaw?.page
            ? [pageTitleDataRaw]
            : [];

        const locales = new Set<string>();
        let metaEn: { title?: string; description?: string; keywords?: string } = {};
        let pageTitleEn: { title?: string; pagePill?: string; sectionSubtitle?: string } = {};

        if (Array.isArray(metaData)) {
          metaData.forEach((item: any) => {
            if (item.page !== page) return;
            const locale = item.locale || 'en';
            locales.add(locale);
            if (locale === 'en') {
              metaEn = { title: item.title || '', description: item.description || '', keywords: item.keywords || '' };
            }
          });
        }

        pageTitleData.forEach((item: any) => {
          if (!item || item.page !== page) return;
          const locale = item.locale || 'en';
          locales.add(locale);
          if (locale === 'en') {
            pageTitleEn = {
              title: item.title || '',
              pagePill: item.pagePill ?? '',
              sectionSubtitle: item.sectionSubtitle ?? '',
            };
          }
        });

        const singleRow: CombinedRow = {
          page,
          locale: 'en',
          metaTitle: metaEn.title ?? '',
          metaDescription: metaEn.description ?? '',
          metaKeywords: metaEn.keywords ?? '',
          pageTitle: pageTitleEn.title ?? '',
          pagePill: pageTitleEn.pagePill ?? '',
          sectionSubtitle: pageTitleEn.sectionSubtitle ?? '',
          availableLocales: Array.from(locales),
        };
        allData.push(singleRow);
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
      // Build select options from all 18 module sub-pages (page id = mlm-software-modules-<slug>)
      const allPages: Array<{ value: string; label: string }> = (MODULES_SUBPAGE_SLUGS as readonly string[]).map(
        (slug) => {
          const value = `${MODULE_PAGE_PREFIX}-${slug}`;
          const meta = getModulesSubpageMeta(slug);
          const label = meta?.fallbackTitle ?? slug.replace(/-/g, ' ');
          return { value, label };
        }
      );
      allPages.sort((a, b) => a.label.localeCompare(b.label));
      setModulePages(allPages);
    } catch (error) {
      console.error('Error loading module pages:', error);
      showToast('Failed to load module pages.', 'error');
    }
  };

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    showToast('Saved successfully.', 'success');
    // Keep modal open; user closes manually via Cancel or X (like other admin page modals)
  };

  const handleDelete = async () => {
    if (!pageToDelete) return;

    try {
      setIsDeleting(true);

      // Delete all page titles for this page (all locales) — same as /admin/page-titles
      await fetch(`/api/admin/page-titles?page=${encodeURIComponent(pageToDelete)}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      // Delete meta details for each locale (API is per locale)
      for (const locale of localesToDelete) {
        await fetch(
          `/api/admin/meta-details?page=${encodeURIComponent(pageToDelete)}&locale=${encodeURIComponent(locale)}`,
          { method: 'DELETE', credentials: 'include' }
        );
      }

      showToast('Deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setPageToDelete(null);
      setLocalesToDelete([]);
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error('Error deleting:', error);
      showToast('Failed to delete.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const columns = [
    { key: 'page', label: 'Page', className: 'text-black' },
    { key: 'metaTitle', label: 'Meta Title' },
    { key: 'metaDescription', label: 'Meta Description' },
    { key: 'pagePill', label: 'Page Pill' },
    { key: 'pageTitle', label: 'Page Title' },
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
              if (column.key === 'page') {
                const label = modulePages.find((p) => p.value === row.page)?.label ?? row.page;
                return <span className="font-medium text-gray-900">{label}</span>;
              }
              if (column.key === 'languages') {
                return <LanguageBadges availableLocales={row.availableLocales || []} layout="grid" />;
              }
              if (column.key === 'actions') {
                const actionMenu = (
                  <ActionMenu
                    onEdit={() => {
                      setEditingPage(row.page);
                      setEditingLocale('en');
                      setIsFormOpen(true);
                      setFormToast(null);
                    }}
                    onDelete={() => {
                      setPageToDelete(row.page);
                      setLocalesToDelete(row.availableLocales ?? ['en']);
                      setDeleteConfirmOpen(true);
                    }}
                  />
                );
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
          setLocalesToDelete([]);
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Meta Details & Page Title"
        message={`Are you sure you want to delete all translations for "${modulePages.find((p) => p.value === pageToDelete)?.label ?? pageToDelete}"? This will delete meta details and page titles for all languages. This action cannot be reversed.`}
      />
    </div>
  );
}
