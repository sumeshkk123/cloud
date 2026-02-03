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
import { ContactFaqForm } from './contact-faq-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';

interface ContactFaqRow {
    id: string;
    question: string;
    answer: string;
    locale: string;
    availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function ContactFaqTable() {
    const { showToast, ToastComponent } = useToast();
    const [faqs, setFaqs] = useState<ContactFaqRow[]>([]);
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
            const res = await fetch('/api/admin/contact-faq?locale=en', {
                cache: 'no-store',
            });
            const data = await res.json();

            if (!res.ok) {
                if (res.status >= 500) {
                    showToast(data?.error || 'Unable to load contact FAQs.', 'error');
                }
                setFaqs([]);
                setCurrentPage(1);
                setIsLoading(false);
                return;
            }

            const items: ContactFaqRow[] = Array.isArray(data)
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
                            `/api/admin/contact-faq?id=${encodeURIComponent(item.id)}&all=true`,
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
        } catch (error) {
            showToast('Failed to load contact FAQs. Please try again.', 'error');
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
        { key: 'answer', label: 'Answer', className: 'w-2/5' },
        { key: 'languages', label: 'Languages', className: 'w-48' },
        { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
    ];

    const handleDelete = async () => {
        if (!faqToDelete) return;

        try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/contact-faq?id=${encodeURIComponent(faqToDelete)}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                const data = await res.json();
                showToast(data?.error || 'Failed to delete contact FAQ.', 'error');
                return;
            }

            showToast('Contact FAQ deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setFaqToDelete(null);
            await loadFaqs();
        } catch (error) {
            showToast('Failed to delete contact FAQ.', 'error');
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
                            emptyMessage={isLoading ? 'Loading contact FAQs...' : 'No contact FAQs available yet.'}
                            renderCell={(column, row) => {
                                if (column.key === 'question') {
                                    return <span className="font-medium text-gray-900 dark:text-white">{row.question}</span>;
                                }
                                if (column.key === 'languages') {
                                    const availableLocales = row.availableLocales || [row.locale];
                                    return <LanguageBadges availableLocales={availableLocales} />;
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
                                return row[column.key as keyof ContactFaqRow] as string;
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
                title={editingFaqId ? 'Edit Contact FAQ' : 'New Contact FAQ'}
                size="3xl"
            >
                <ContactFaqForm
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
                title="Delete Contact FAQ"
                message="Are you sure you want to delete this contact FAQ? This action cannot be undone."
            />

            {ToastComponent}
        </>
    );
}
