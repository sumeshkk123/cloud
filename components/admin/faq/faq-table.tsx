'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { FaqForm } from '@/components/admin/faq/faq-form';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { LanguageBadges } from '@/components/admin/common/language-badges';

interface FaqRow {
    id: string;
    question: string;
    answer: string;
    locale: string;
    categoryId?: string | null;
    categoryName?: string | null;
    availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function FaqTable() {
    const { showToast, ToastComponent } = useToast();
    const [faqs, setFaqs] = useState<FaqRow[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingFaqId, setEditingFaqId] = useState<string | null>(null);
    const [formToast, setFormToast] = useState<React.ReactNode>(null);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [isFormSaving, setIsFormSaving] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [faqToDelete, setFaqToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadFaqs = async () => {
        try {
            setIsLoading(true);
            const timestamp = Date.now();
            const res = await fetch(`/api/faq?locale=en&_t=${timestamp}`, {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache',
                },
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load FAQs.', 'error');
                }
                setFaqs([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            if (!data || !data.items || !Array.isArray(data.items)) {
                setFaqs([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            const uniqueFaqsMap = new Map<string, any>();
            data.items.forEach((item: any) => {
                const id = String(item.id || '');
                if (id && !uniqueFaqsMap.has(id)) {
                    uniqueFaqsMap.set(id, item);
                }
            });

            const items: FaqRow[] = Array.from(uniqueFaqsMap.values()).map((item: any) => ({
                id: String(item.id),
                question: String(item.question || ''),
                answer: String(item.answer || ''),
                locale: String(item.locale || 'en'),
                categoryId: item.categoryId || null,
            }));

            // Fetch categories to get category names
            let categoriesMap = new Map<string, string>();
            try {
                const categoriesRes = await fetch(`/api/admin/faq-categories?locale=en&_t=${timestamp}`, {
                    cache: 'no-store'
                });
                if (categoriesRes.ok) {
                    const categoriesData = await categoriesRes.json();
                    if (Array.isArray(categoriesData)) {
                        categoriesData.forEach((cat: any) => {
                            if (cat.id) {
                                categoriesMap.set(cat.id, cat.name || '');
                            }
                        });
                    }
                }
            } catch (error) {
                // Ignore errors
            }

            const itemsWithLocales = await Promise.all(
                items.map(async (item) => {
                    try {
                        const translationsRes = await fetch(
                            `/api/admin/faq?id=${encodeURIComponent(item.id)}&all=true&_t=${timestamp}`,
                            { cache: 'no-store' }
                        );
                        if (translationsRes.ok) {
                            const translationsData = await translationsRes.json();
                            const locales = translationsData?.translations?.map((t: any) => t.locale) || [item.locale];
                            const categoryName = item.categoryId ? categoriesMap.get(item.categoryId) || null : null;
                            return { ...item, availableLocales: locales, categoryName };
                        }
                    } catch (error) {
                        // Ignore errors
                    }
                    const categoryName = item.categoryId ? categoriesMap.get(item.categoryId) || null : null;
                    return { ...item, availableLocales: [item.locale], categoryName };
                })
            );

            setFaqs(itemsWithLocales);
            setCurrentPage(1);
        } catch (error) {
            showToast('Failed to load FAQs. Please try again.', 'error');
            setFaqs([]);
            setCurrentPage(1);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadFaqs();
    }, []);

    const filtered = useMemo(() => faqs, [faqs]);

    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
    const paginated = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, currentPage]);

    const columns = [
        { key: 'question', label: 'Question', className: 'w-2/5' },
        { key: 'category', label: 'Category', className: 'w-32' },
        { key: 'answer', label: 'Answer', className: 'w-2/5' },
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
        setEditingFaqId(null);
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
                        New FAQ
                    </Button>
                </div>
            </div>

            <Table
                columns={columns}
                data={paginated}
                isLoading={isLoading}
                emptyMessage="No FAQs yet. Create your first FAQ!"
                renderCell={(column, row) => {
                    if (column.key === 'question') {
                        return <span className="font-medium text-gray-900">{row.question}</span>;
                    }
                    if (column.key === 'category') {
                        return (
                            <span className="text-sm text-gray-600">
                                {row.categoryName || <span className="text-gray-400 italic">No category</span>}
                            </span>
                        );
                    }
                    if (column.key === 'answer') {
                        return <span className="line-clamp-2 text-gray-600">{row.answer}</span>;
                    }
                    if (column.key === 'languages') {
                        const locales = row.availableLocales || [row.locale];
                        return (
                            <LanguageBadges
                                availableLocales={locales}
                                allLocales={['en', 'es', 'it', 'de', 'pt', 'zh']}
                                layout="grid"
                            />
                        );
                    }
                    if (column.key === 'actions') {
                        return (
                            <ActionMenu
                                onEdit={() => {
                                    setEditingFaqId(row.id);
                                    setIsFormOpen(true);
                                }}
                                onDelete={() => {
                                    setFaqToDelete(row.id);
                                    setDeleteConfirmOpen(true);
                                }}
                            />
                        );
                    }
                    return row[column.key];
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
                    setEditingFaqId(null);
                    setFormToast(null);
                }}
                title={editingFaqId ? 'Edit FAQ' : 'Add FAQ'}
                size="4xl"
                isLoading={isFormLoading}
                footer={
                    <div className="flex justify-end items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => {
                                setIsFormOpen(false);
                                setEditingFaqId(null);
                                setFormToast(null);
                            }}
                            disabled={isFormSaving}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="faq-form"
                            variant="primary"
                            disabled={isFormSaving || isFormLoading}
                        >
                            {isFormSaving ? 'Saving...' : 'Save Translation'}
                        </Button>
                    </div>
                }
            >
                <FaqForm
                    faqId={editingFaqId}
                    onClose={() => {
                        setIsFormOpen(false);
                        setEditingFaqId(null);
                        setFormToast(null);
                    }}
                    onSave={async () => {
                        await loadFaqs();
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
                    setFaqToDelete(null);
                }}
                onConfirm={async () => {
                    if (!faqToDelete) return;
                    try {
                        setIsDeleting(true);
                        const res = await fetch(`/api/admin/faq?id=${encodeURIComponent(faqToDelete)}`, {
                            method: 'DELETE',
                            cache: 'no-store',
                        });
                        const payload = await res.json();
                        if (!res.ok) throw new Error(payload?.error || 'Failed to delete FAQ');
                        showToast('FAQ deleted successfully.', 'success');
                        setDeleteConfirmOpen(false);
                        setFaqToDelete(null);
                        loadFaqs();
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Unable to delete FAQ.';
                        showToast(message, 'error');
                    } finally {
                        setIsDeleting(false);
                    }
                }}
                title="Delete FAQ"
                message="Are you sure that you want to continue? This action cannot be reversed."
                isLoading={isDeleting}
            />

            {ToastComponent}
            {formToast}
        </div>
    );
}
