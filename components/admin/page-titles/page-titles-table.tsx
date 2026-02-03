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
import { PageTitleForm } from './page-title-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { pageDisplayNames } from '@/components/admin/common/page-options';

interface PageTitleRow {
    page: string;
    title: string;
    locale: string;
    pagePill?: string | null;
    sectionSubtitle?: string | null;
    availableLocales?: string[];
    updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

export function PageTitlesTable() {
    const { showToast, ToastComponent } = useToast();
    const [pageTitles, setPageTitles] = useState<PageTitleRow[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingPageTitle, setEditingPageTitle] = useState<{ page: string; locale: string } | null>(null);
    const [formToast, setFormToast] = useState<React.ReactNode>(null);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [isFormSaving, setIsFormSaving] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [pageToDelete, setPageToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadPageTitles = async () => {
        try {
            setIsLoading(true);
            // Fetch all page titles (all locales) to show available translations
            const res = await fetch('/api/admin/page-titles', {
                cache: 'no-store',
                credentials: 'include',
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load page titles.', 'error');
                }
                setPageTitles([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            if (!data || !Array.isArray(data)) {
                setPageTitles([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            // Optimized: Process data more efficiently
            const pageMap = new Map<string, PageTitleRow>();
            const pageUpdatedAtMap = new Map<string, number>();

            // Single pass through data
            for (const item of data) {
                const pageKey = String(item.page || '');
                if (!pageKey) continue;

                // Track latest updatedAt timestamp (use number for faster comparison)
                if (item.updatedAt) {
                    const itemTime = new Date(item.updatedAt).getTime();
                    const currentLatest = pageUpdatedAtMap.get(pageKey) || 0;
                    if (itemTime > currentLatest) {
                        pageUpdatedAtMap.set(pageKey, itemTime);
                    }
                }

                let pageTitle = pageMap.get(pageKey);
                if (!pageTitle) {
                    pageTitle = {
                        page: pageKey,
                        title: '',
                        locale: 'en',
                        pagePill: null,
                        sectionSubtitle: null,
                        availableLocales: [],
                        updatedAt: undefined,
                    };
                    pageMap.set(pageKey, pageTitle);
                }

                // Add locale to available locales
                if (item.locale) {
                    const locales = pageTitle.availableLocales ?? [];
                    if (!locales.includes(item.locale)) {
                        locales.push(item.locale);
                        pageTitle.availableLocales = locales;
                    }
                }

                // Use English version for display if available
                if (item.locale === 'en') {
                    pageTitle.title = item.title || '';
                    pageTitle.pagePill = item.pagePill || null;
                    pageTitle.sectionSubtitle = item.sectionSubtitle || null;
                }
            }

            // Convert to array and sort (optimized)
            const items: PageTitleRow[] = Array.from(pageMap.values());
            for (const item of items) {
                const timestamp = pageUpdatedAtMap.get(item.page);
                if (timestamp) {
                    item.updatedAt = new Date(timestamp);
                }
            }

            // Sort by updatedAt (descending - most recent first)
            items.sort((a, b) => {
                const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
                const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
                return bTime - aTime;
            });

            setPageTitles(items);
        } catch (error) {
            showToast('Failed to load page titles. Please try again.', 'error');
            setPageTitles([]);
            setCurrentPage(1);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPageTitles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Optimized: Direct use of pageTitles, no unnecessary filtering
    const totalItems = pageTitles.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
    const paginated = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return pageTitles.slice(start, start + ITEMS_PER_PAGE);
    }, [pageTitles, currentPage]);

    const columns = [
        { key: 'page', label: 'Page', className: 'w-48' },
        { key: 'title', label: 'Title', className: 'w-2/5' },
        { key: 'pagePill', label: 'Badge', className: 'w-32' },
        { key: 'sectionSubtitle', label: 'Subtitle', className: 'w-2/5' },
        { key: 'languages', label: 'Languages', className: 'w-48' },
        { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
    ];

    const localeNames: Record<string, string> = {
        en: 'EN',
        es: 'ES',
        it: 'IT',
        de: 'DE',
        pt: 'PT',
        zh: 'ZH',
    };

    const handleCreate = () => {
        setEditingPageTitle(null);
        setIsFormOpen(true);
    };

    const handleEdit = (page: string, locale: string = 'en') => {
        setEditingPageTitle({ page, locale });
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
                        New Page Title
                    </Button>
                </div>
            </div>

            <Table
                columns={columns}
                data={paginated}
                isLoading={isLoading}
                emptyMessage="No page titles yet. Create your first page title!"
                renderCell={(column, row) => {
                    if (!row) return <span className="text-gray-400">-</span>;

                    if (column.key === 'page') {
                        return (
                            <span className="font-medium text-gray-900">
                                {pageDisplayNames[row.page] || row.page || '-'}
                            </span>
                        );
                    }
                    if (column.key === 'title') {
                        return <span className="font-medium text-gray-900 line-clamp-2">{row.title || '-'}</span>;
                    }
                    if (column.key === 'pagePill') {
                        return (
                            <span className="text-sm text-gray-600 line-clamp-1">
                                {row.pagePill || <span className="text-gray-400 italic">No badge</span>}
                            </span>
                        );
                    }
                    if (column.key === 'sectionSubtitle') {
                        return (
                            <span className="text-sm text-gray-600 line-clamp-2">
                                {row.sectionSubtitle || <span className="text-gray-400 italic">No subtitle</span>}
                            </span>
                        );
                    }
                    if (column.key === 'languages') {
                        const locales = row.availableLocales || ['en'];
                        return (
                            <LanguageBadges
                                availableLocales={locales}
                                allLocales={['en', 'es', 'it', 'de', 'pt', 'zh']}
                                layout="grid"
                            />
                        );
                    }
                    if (column.key === 'actions') {
                        if (!row.page) return <span className="text-gray-400">-</span>;
                        const actionMenu = (
                            <ActionMenu
                                onEdit={() => handleEdit(row.page, 'en')}
                                onDelete={() => {
                                    setPageToDelete(row.page);
                                    setDeleteConfirmOpen(true);
                                }}
                            />
                        );
                        return actionMenu || <span className="text-gray-400">-</span>;
                    }
                    const value = row[column.key as keyof PageTitleRow];
                    return value ? String(value) : '-';
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
                    setEditingPageTitle(null);
                    setFormToast(null);
                }}
                title={editingPageTitle ? 'Edit Page Title' : 'Add Page Title'}
                size="4xl"
                isLoading={isFormLoading}
                footer={
                    <div className="flex justify-end items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => {
                                setIsFormOpen(false);
                                setEditingPageTitle(null);
                                setFormToast(null);
                            }}
                            disabled={isFormSaving}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="page-title-form"
                            variant="primary"
                            disabled={isFormSaving || isFormLoading}
                        >
                            {isFormSaving ? 'Saving...' : 'Save Page Title'}
                        </Button>
                    </div>
                }
            >
                <PageTitleForm
                    page={editingPageTitle?.page}
                    locale={editingPageTitle?.locale || 'en'}
                    onClose={() => {
                        setIsFormOpen(false);
                        setEditingPageTitle(null);
                        setFormToast(null);
                    }}
                    onSave={async () => {
                        await loadPageTitles();
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
                    setPageToDelete(null);
                }}
                onConfirm={async () => {
                    if (!pageToDelete) return;
                    try {
                        setIsDeleting(true);
                        const res = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(pageToDelete)}`, {
                            method: 'DELETE',
                            cache: 'no-store',
                        });
                        const payload = await res.json();
                        if (!res.ok) throw new Error(payload?.error || 'Failed to delete page title');
                        showToast('Page title deleted successfully.', 'success');
                        setDeleteConfirmOpen(false);
                        setPageToDelete(null);
                        await loadPageTitles();
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Unable to delete page title.';
                        showToast(message, 'error');
                    } finally {
                        setIsDeleting(false);
                    }
                }}
                title="Delete Page Title"
                message={`Are you sure you want to delete all translations for "${pageDisplayNames[pageToDelete || ''] || pageToDelete}"? This will delete all language translations for this page. This action cannot be reversed.`}
                isLoading={isDeleting}
            />

            {ToastComponent}
            {formToast}
        </div>
    );
}
