'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { DemoFaqForm } from './demo-faq-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

interface DemoFaqRow {
    id: string;
    question: string;
    answer: string;
    locale: string;
    availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function DemoFaqTable() {
    const { showToast, ToastComponent } = useToast();
    const [faqs, setFaqs] = useState<DemoFaqRow[]>([]);
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
    const hasLoadedRef = useRef(false);

    const loadFaqs = async (showLoading = true) => {
        try {
            // Only show loading skeleton on initial load
            if (showLoading && !hasLoadedRef.current) {
                setIsLoading(true);
            }
            const res = await fetch('/api/admin/demo-faq?locale=en', {
                cache: 'no-store',
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load demo FAQs.', 'error');
                }
                setFaqs([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            const items: DemoFaqRow[] = Array.isArray(data)
                ? data.map((item: any) => ({
                    id: String(item.id),
                    question: String(item.question || ''),
                    answer: String(item.answer || ''),
                    locale: String(item.locale || 'en'),
                }))
                : [];

            // Fetch available locales for each FAQ
            const itemsWithLocales = await Promise.all(
                items.map(async (item) => {
                    try {
                        const translationsRes = await fetch(
                            `/api/admin/demo-faq?id=${encodeURIComponent(item.id)}&all=true`,
                            { cache: 'no-store' }
                        );
                        if (translationsRes.ok) {
                            const translationsData = await translationsRes.json();
                            const locales = translationsData?.translations?.map((t: any) => t.locale) || [item.locale];
                            return { ...item, availableLocales: locales };
                        }
                    } catch (error) {
                        // Ignore errors
                    }
                    return { ...item, availableLocales: [item.locale] };
                })
            );

            setFaqs(itemsWithLocales);
            setCurrentPage(1);
            hasLoadedRef.current = true;
        } catch (error) {
            showToast('Failed to load demo FAQs. Please try again.', 'error');
            setFaqs([]);
            setCurrentPage(1);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Only load on initial mount
        if (!hasLoadedRef.current) {
            loadFaqs(true);
        }
    }, []);

    const totalItems = faqs.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
    const paginated = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return faqs.slice(start, start + ITEMS_PER_PAGE);
    }, [faqs, currentPage]);

    const columns = [
        { key: 'question', label: 'Question', className: 'w-2/5' },
        { key: 'answer', label: 'Answer', className: 'w-2/5' },
        { key: 'languages', label: 'Languages', className: 'w-48' },
        { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
    ];

    const handleDelete = async () => {
        if (!faqToDelete) return;

        try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/demo-faq?id=${encodeURIComponent(faqToDelete)}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                const data = await res.json();
                showToast(data?.error || 'Failed to delete FAQ.', 'error');
                return;
            }

            showToast('FAQ deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setFaqToDelete(null);
            loadFaqs();
        } catch (error) {
            showToast('Failed to delete FAQ.', 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleFormSave = async () => {
        await loadFaqs();
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
                        onClick={() => {
                            setIsFormLoading(false);
                            setEditingFaqId(null);
                            setIsFormOpen(true);
                        }}
                    >
                        New FAQ
                    </Button>
                </div>
            </div>

            <Table
                columns={columns}
                data={paginated}
                isLoading={isLoading}
                emptyMessage={isLoading ? 'Loading FAQs...' : 'No FAQs available yet.'}
                renderCell={(column, row) => {
                    if (column.key === 'question') {
                        return <span className="font-medium text-gray-900">{row.question}</span>;
                    }
                    if (column.key === 'answer') {
                        return <span className="line-clamp-2 text-gray-700">{row.answer}</span>;
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
                    return row[column.key as keyof DemoFaqRow] as string;
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
                    setIsFormLoading(false);
                }}
                title={editingFaqId ? 'Edit FAQ' : 'New FAQ'}
                size="3xl"
            >
                <DemoFaqForm
                    faqId={editingFaqId}
                    onClose={() => {
                        setIsFormOpen(false);
                        setEditingFaqId(null);
                        setIsFormLoading(false);
                    }}
                    onSave={handleFormSave}
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
                    setFaqToDelete(null);
                }}
                onConfirm={handleDelete}
                isLoading={isDeleting}
                title="Delete FAQ"
                message="Are you sure you want to delete this FAQ? This action cannot be undone."
            />

            {ToastComponent}
        </div>
    );
}
