'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { ServicesFaqForm } from './services-faq-form';
import { i18n, localeNames } from '@/i18n-config';

interface ServiceFaqRow {
    id: string;
    question: string;
    answer: string;
    locale: string;
    availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function ServicesFaqTable() {
    const { showToast, ToastComponent } = useToast();
    const [faqs, setFaqs] = useState<ServiceFaqRow[]>([]);
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
            const res = await fetch('/api/admin/services-faq?locale=en', {
                next: { revalidate: 0 },
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load service FAQs.', 'error');
                }
                setFaqs([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            const items: ServiceFaqRow[] = Array.isArray(data)
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
                            `/api/admin/services-faq?id=${encodeURIComponent(item.id)}&all=true`,
                            { next: { revalidate: 0 } }
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
        } catch (error) {
            showToast('Failed to load service FAQs. Please try again.', 'error');
            setFaqs([]);
            setCurrentPage(1);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadFaqs();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
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
        { key: 'answer', label: 'Answer', className: 'w-2/5' },
        { key: 'languages', label: 'Languages', className: 'w-48' },
        { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
    ];

    const handleDelete = async () => {
        if (!faqToDelete) return;

        try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/services-faq?id=${encodeURIComponent(faqToDelete)}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                const data = await res.json();
                showToast(data?.error || 'Failed to delete service FAQ.', 'error');
                return;
            }

            showToast('Service FAQ deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setFaqToDelete(null);
            await loadFaqs();
        } catch (error) {
            showToast('Failed to delete service FAQ.', 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleFormSave = async () => {
        await loadFaqs();
    };

    const handleNew = () => {
        setEditingFaqId(null);
        setIsFormOpen(true);
    };

    return (
        <>
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
                            New FAQ
                        </Button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="text-center py-12 text-gray-600">Loading...</div>
                ) : (
                    <>
                        <Table
                            columns={columns}
                            data={paginated}
                            emptyMessage={isLoading ? 'Loading service FAQs...' : 'No service FAQs available yet.'}
                            renderCell={(column, row) => {
                                if (column.key === 'question') {
                                    return <span className="font-medium text-gray-900">{row.question}</span>;
                                }
                                if (column.key === 'answer') {
                                    return <span className="line-clamp-2 text-gray-700">{row.answer}</span>;
                                }
                                if (column.key === 'languages') {
                                    const availableLocales = row.availableLocales || ['en'];
                                    const allLocales = i18n.locales;
                                    return (
                                        <div className="grid grid-cols-3 gap-1 w-48">
                                            {allLocales.map((loc) => {
                                                const isAvailable = availableLocales.includes(loc);
                                                return (
                                                    <div
                                                        key={loc}
                                                        className={`px-2 py-1 text-xs font-medium rounded text-center ${
                                                            isAvailable
                                                                ? 'bg-green-50 text-green-800'
                                                                : 'bg-gray-50 text-gray-400'
                                                        }`}
                                                        title={isAvailable ? `${localeNames[loc]} - Available` : `${localeNames[loc]} - Missing`}
                                                    >
                                                        {loc.toUpperCase()}
                                                    </div>
                                                );
                                            })}
                                        </div>
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
                                return row[column.key as keyof ServiceFaqRow] as string;
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
            </div>

            <Modal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingFaqId(null);
                    setFormToast(null);
                }}
                title={editingFaqId ? 'Edit Service FAQ' : 'New Service FAQ'}
                size="3xl"
            >
                <ServicesFaqForm
                    faqId={editingFaqId}
                    onClose={() => {
                        setIsFormOpen(false);
                        setEditingFaqId(null);
                        setFormToast(null);
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
                title="Delete Service FAQ"
                message="Are you sure you want to delete this service FAQ? This action cannot be undone."
            />

            {ToastComponent}
        </>
    );
}
