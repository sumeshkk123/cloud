'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { MetaDetailsForm } from './meta-details-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { pageDisplayNames } from '@/components/admin/common/page-options';
import { supportedLocales } from '@/config/site';

interface MetaDetailsRow {
    page: string;
    title: string;
    description: string;
    keywords: string;
    locale: string;
    availableLocales?: string[];
    updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

/** Section subpages (inner pages) are managed in their own admin (modules, services, plans, industry-solutions, features meta-page-title). Exclude only those; show main pages (e.g. MLM Plans (main), MLM Software Modules (main)) in Meta Details. */
function isSectionManagedSubpage(page: string): boolean {
  if (!page) return false;
  // Plan inner pages: mlm-plan/slug (exclude). Main: mlm-plans (include).
  if (page.startsWith('mlm-plan/')) return true;
  // Module subpages: mlm-software-modules-* or mlm-software-modules/* (exclude). Main: mlm-software-modules (include).
  if (page !== 'mlm-software-modules' && page.startsWith('mlm-software-modules')) return true;
  // Service subpages: services/* (exclude). Main: services (include).
  if (page.startsWith('services/')) return true;
  // Industry solution subpages: industry-solutions/* (exclude). Main: industry-solutions (include).
  if (page.startsWith('industry-solutions/')) return true;
  // Feature pages: mlm-software-feature/* (exclude; no single "main" key).
  if (page.startsWith('mlm-software-feature/')) return true;
  return false;
}

export function MetaDetailsTable() {
    const { showToast, ToastComponent } = useToast();
    const [metaDetails, setMetaDetails] = useState<MetaDetailsRow[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingMetaDetail, setEditingMetaDetail] = useState<{ page: string; locale: string } | null>(null);
    const [formToast, setFormToast] = useState<React.ReactNode>(null);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [isFormSaving, setIsFormSaving] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [metaToDelete, setMetaToDelete] = useState<{ page: string; locale?: string } | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadMetaDetails = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/admin/meta-details', {
                cache: 'no-store',
                credentials: 'include',
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load meta details.', 'error');
                }
                setMetaDetails([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            if (!data || !Array.isArray(data)) {
                setMetaDetails([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            // Exclude only section subpages; show main pages (mlm-plans, mlm-software-modules, services, industry-solutions) here
            const filteredData = data.filter((item: { page?: string }) => !isSectionManagedSubpage(String(item.page || '')));

            // Optimized: Process data more efficiently
            const pageMap = new Map<string, MetaDetailsRow>();
            const pageCreatedAtMap = new Map<string, number>();

            // Single pass through data
            for (const item of filteredData) {
                const pageKey = String(item.page || '');
                if (!pageKey) continue;

                // Track earliest createdAt per page (when the page was first added) for stable sort
                if (item.createdAt) {
                    const itemTime = new Date(item.createdAt).getTime();
                    const currentEarliest = pageCreatedAtMap.get(pageKey);
                    if (currentEarliest === undefined || itemTime < currentEarliest) {
                        pageCreatedAtMap.set(pageKey, itemTime);
                    }
                }

                let metaDetail = pageMap.get(pageKey);
                if (!metaDetail) {
                    metaDetail = {
                        page: pageKey,
                        title: '',
                        description: '',
                        keywords: '',
                        locale: 'en',
                        availableLocales: [],
                        updatedAt: undefined,
                    };
                    pageMap.set(pageKey, metaDetail);
                }

                // Add locale to available locales
                if (item.locale) {
                    const locales = metaDetail.availableLocales ?? [];
                    if (!locales.includes(item.locale)) {
                        locales.push(item.locale);
                        metaDetail.availableLocales = locales;
                    }
                }

                // Use English version for display if available
                if (item.locale === 'en') {
                    metaDetail.title = item.title || '';
                    metaDetail.description = item.description || '';
                    metaDetail.keywords = item.keywords || '';
                }
            }

            // Convert to array and sort by createdAt (newest-created first; edits don't change position)
            const items: MetaDetailsRow[] = Array.from(pageMap.values());
            items.sort((a, b) => {
                const aTime = pageCreatedAtMap.get(a.page) ?? 0;
                const bTime = pageCreatedAtMap.get(b.page) ?? 0;
                return bTime - aTime;
            });

            setMetaDetails(items);
        } catch (error) {
            showToast('Failed to load meta details. Please try again.', 'error');
            setMetaDetails([]);
            setCurrentPage(1);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadMetaDetails();
    }, []);

    // Optimized: Direct use of metaDetails, no unnecessary filtering
    const totalItems = metaDetails.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
    const paginated = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return metaDetails.slice(start, start + ITEMS_PER_PAGE);
    }, [metaDetails, currentPage]);

    const columns = [
        { key: 'page', label: 'Page', className: 'w-48' },
        { key: 'title', label: 'Title', className: 'w-1/4' },
        { key: 'description', label: 'Description', className: 'w-1/3' },
        { key: 'keywords', label: 'Keywords', className: 'w-32' },
        { key: 'languages', label: 'Languages', className: 'w-48' },
        { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
    ];

    const handleCreate = () => {
        setEditingMetaDetail(null);
        setIsFormOpen(true);
    };

    const handleEdit = (page: string, locale: string = 'en') => {
        setEditingMetaDetail({ page, locale });
        setIsFormOpen(true);
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
                        onClick={handleCreate}
                    >
                        New Meta Detail
                    </Button>
                </div>
            </div>

            <Table
                columns={columns}
                data={paginated}
                isLoading={isLoading}
                emptyMessage="No meta details yet. Create your first meta detail!"
                renderCell={(column, row) => {
                    if (column.key === 'page') {
                        return (
                            <span className="font-medium text-gray-900">
                                {pageDisplayNames[row.page] || row.page}
                            </span>
                        );
                    }
                    if (column.key === 'title') {
                        return <span className="font-medium text-gray-900 line-clamp-2">{row.title}</span>;
                    }
                    if (column.key === 'description') {
                        return (
                            <span className="text-sm text-gray-600 line-clamp-2">
                                {row.description || <span className="text-gray-400 italic">No description</span>}
                            </span>
                        );
                    }
                    if (column.key === 'keywords') {
                        return (
                            <span className="text-sm text-gray-600 line-clamp-1">
                                {row.keywords || <span className="text-gray-400 italic">No keywords</span>}
                            </span>
                        );
                    }
                    if (column.key === 'languages') {
                        const locales = row.availableLocales || ['en'];
                        return (
                            <LanguageBadges
                                availableLocales={locales}
                                allLocales={[...supportedLocales]}
                                layout="grid"
                            />
                        );
                    }
                    if (column.key === 'actions') {
                        return (
                            <ActionMenu
                                onEdit={() => handleEdit(row.page, 'en')}
                                onDelete={() => {
                                    setMetaToDelete({ page: row.page });
                                    setDeleteConfirmOpen(true);
                                }}
                            />
                        );
                    }
                    return row[column.key as keyof MetaDetailsRow] as string;
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
                    setEditingMetaDetail(null);
                    setFormToast(null);
                }}
                title={editingMetaDetail ? 'Edit Meta Detail' : 'Add Meta Detail'}
                size="4xl"
                isLoading={isFormLoading}
                footer={
                    <div className="flex justify-end items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => {
                                setIsFormOpen(false);
                                setEditingMetaDetail(null);
                                setFormToast(null);
                            }}
                            disabled={isFormSaving}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="meta-details-form"
                            variant="primary"
                            disabled={isFormSaving || isFormLoading}
                        >
                            {isFormSaving ? 'Saving...' : 'Save Meta Detail'}
                        </Button>
                    </div>
                }
            >
                <MetaDetailsForm
                    page={editingMetaDetail?.page}
                    locale={editingMetaDetail?.locale || 'en'}
                    onClose={() => {
                        setIsFormOpen(false);
                        setEditingMetaDetail(null);
                        setFormToast(null);
                    }}
                    onSave={async () => {
                        await loadMetaDetails();
                    }}
                    onToastChange={(toast) => {
                        setFormToast(toast || null);
                    }}
                    onLoadingChange={setIsFormLoading}
                    onSavingChange={setIsFormSaving}
                />
            </Modal>

            <DeleteConfirmModal
                isOpen={deleteConfirmOpen}
                onClose={() => {
                    setDeleteConfirmOpen(false);
                    setMetaToDelete(null);
                }}
                onConfirm={async () => {
                    if (!metaToDelete) return;
                    try {
                        setIsDeleting(true);
                        const query = metaToDelete.locale
                            ? `page=${encodeURIComponent(metaToDelete.page)}&locale=${encodeURIComponent(metaToDelete.locale)}`
                            : `page=${encodeURIComponent(metaToDelete.page)}`;
                        const res = await fetch(`/api/admin/meta-details?${query}`, {
                            method: 'DELETE',
                            cache: 'no-store',
                        });
                        const payload = await res.json();
                        if (!res.ok) throw new Error(payload?.error || 'Failed to delete meta detail');
                        showToast('Meta detail deleted successfully.', 'success');
                        setDeleteConfirmOpen(false);
                        setMetaToDelete(null);
                        await loadMetaDetails();
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Unable to delete meta detail.';
                        showToast(message, 'error');
                    } finally {
                        setIsDeleting(false);
                    }
                }}
                title="Delete Meta Detail"
                message={`Are you sure you want to delete all meta details for "${pageDisplayNames[metaToDelete?.page || ''] || metaToDelete?.page}"? This will delete all language translations for this page. This action cannot be reversed.`}
                isLoading={isDeleting}
            />

            {ToastComponent}
            {formToast}
        </div>
    );
}
