'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/toast';
import { Table } from '@/components/ui/adminUi/table';
import { Button } from '@/components/ui/adminUi/button';
import { Modal } from '@/components/ui/adminUi/modal';
import { Input } from '@/components/ui/adminUi/input';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { Plus, Languages, Loader2 } from 'lucide-react';
import { localeNames } from '@/i18n-config';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

interface FaqCategory {
    id: string;
    name: string;
    icon?: string | null;
    locale: string;
    createdAt: string;
    updatedAt: string;
    availableLocales?: string[];
}

interface CategoryTranslation {
    locale: string;
    name: string;
    icon?: string;
    exists: boolean;
}

export function FaqCategoriesTab() {
    const { showToast, ToastComponent } = useToast();
    const [categories, setCategories] = useState<FaqCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, CategoryTranslation>>(() => {
        const initial: Record<string, CategoryTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                name: '',
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(null);
    const [categoryIcon, setCategoryIcon] = useState<string>(''); // Icon is shared across all locales

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (editingCategoryId) {
            loadAllTranslations();
        } else {
            const reset: Record<string, CategoryTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    name: '',
                    icon: '',
                    exists: false,
                };
            });
            setTranslations(reset);
            setCategoryIcon('');
            setActiveTab('en');
            setCurrentCategoryId(null);
        }
    }, [editingCategoryId]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/admin/faq-categories?locale=en');
            if (response.ok) {
                const data = await response.json();
                // Fetch all translations for each category to show available languages
                const categoriesWithLocales = await Promise.all(
                    (data as FaqCategory[]).map(async (category) => {
                        try {
                            const translationsRes = await fetch(
                                `/api/admin/faq-categories?id=${encodeURIComponent(category.id)}`
                            );
                            if (translationsRes.ok) {
                                const translations = await translationsRes.json();
                                const availableLocales = translations?.map((t: any) => t.locale) || [category.locale];
                                return { ...category, availableLocales };
                            }
                        } catch (error) {
                            // Ignore errors for individual category translations
                        }
                        return { ...category, availableLocales: [category.locale] };
                    })
                );
                setCategories(categoriesWithLocales);
            } else {
                showToast('Failed to load categories', 'error');
            }
        } catch (error) {
            showToast('Failed to load categories', 'error');
        } finally {
            setLoading(false);
        }
    };

    const loadAllTranslations = async () => {
        if (!editingCategoryId) return;

        try {
            const response = await fetch(`/api/admin/faq-categories?id=${editingCategoryId}`);
            if (response.ok) {
                const allTranslations: FaqCategory[] = await response.json();
                const translationMap: Record<string, CategoryTranslation> = {};

                locales.forEach((loc) => {
                    const translation = allTranslations.find((t) => t.locale === loc);
                    translationMap[loc] = {
                        locale: loc,
                        name: translation?.name || '',
                        icon: translation?.icon || '',
                        exists: !!translation,
                    };
                });

                // Set icon from English translation (icon is shared across all locales)
                const englishTranslation = allTranslations.find((t) => t.locale === 'en') || allTranslations[0];
                setCategoryIcon(englishTranslation?.icon || '');

                setTranslations(translationMap);
                setCurrentCategoryId(editingCategoryId);

                // Set active tab to first available translation or English
                const firstAvailable = allTranslations.find((t) => t.locale === 'en') || allTranslations[0];
                if (firstAvailable) {
                    setActiveTab(firstAvailable.locale);
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    const handleCreate = () => {
        setEditingCategoryId(null);
        setCurrentCategoryId(null);
        setCategoryIcon('');
        const reset: Record<string, CategoryTranslation> = {};
        locales.forEach((loc) => {
            reset[loc] = {
                locale: loc,
                name: '',
                icon: '',
                exists: false,
            };
        });
        setTranslations(reset);
        setActiveTab('en');
        setIsFormOpen(true);
    };

    const handleEdit = (category: FaqCategory) => {
        setEditingCategoryId(category.id);
        setIsFormOpen(true);
    };

    const autoTranslate = async () => {
        if (activeTab === 'en') {
            showToast('Cannot auto-translate English. Please select another language.', 'error');
            return;
        }

        const english = translations['en'];
        if (!english || !english.name) {
            showToast('Please fill in the English version first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);

            if (!english.name.trim()) {
                showToast('English category name is empty.', 'error');
                setIsTranslating(false);
                return;
            }

            // Translate category name
            const response = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: english.name,
                    sourceLocale: 'en',
                    targetLocale: activeTab,
                }),
            });

            // Check if response is JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                throw new Error(`Translation API returned non-JSON response. Please restart your dev server to load the translate API route.`);
            }

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || data.message || 'Failed to translate category name');

            setTranslations((prev) => ({
                ...prev,
                [activeTab]: {
                    ...prev[activeTab],
                    name: data.translatedText,
                },
            }));

            showToast(`Auto-translated to ${localeNames[activeTab as keyof typeof localeNames]}.`, 'success');
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to auto-translate.';
            showToast(message, 'error');
        } finally {
            setIsTranslating(false);
        }
    };

    const handleSaveCurrentTab = async () => {
        const current = translations[activeTab];
        if (!current.name.trim()) {
            showToast('Category name is required', 'error');
            return;
        }

        setIsSaving(true);
        try {
            // If we have a currentCategoryId, we're editing an existing category (adding/updating translations)
            // Always use PUT in this case, regardless of whether the current translation exists
            // Only use POST when creating a completely new category (no currentCategoryId)
            const isEditing = !!currentCategoryId;
            const categoryId = currentCategoryId || `cat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            const response = await fetch(
                isEditing
                    ? `/api/admin/faq-categories/${currentCategoryId}`
                    : `/api/admin/faq-categories`,
                {
                    method: isEditing ? 'PUT' : 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: categoryId,
                        name: current.name,
                        locale: activeTab,
                        icon: categoryIcon || undefined, // Only send icon when creating/updating English version
                    }),
                }
            );

            if (response.ok) {
                const saved = await response.json();
                setCurrentCategoryId(saved.id);

                // Update translation state
                setTranslations((prev) => ({
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        exists: true,
                        name: saved.name,
                        icon: saved.icon || '',
                    },
                }));

                // Update icon if it was saved (icon is shared across locales)
                if (saved.icon !== undefined) {
                    setCategoryIcon(saved.icon || '');
                }

                showToast('Category saved successfully', 'success');
                fetchCategories();
            } else {
                const error = await response.json();
                showToast(error.error || 'Failed to save category', 'error');
            }
        } catch (error) {
            showToast('Failed to save category', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSaveCurrentTab();
    };

    const current = translations[activeTab] || { locale: activeTab, name: '', exists: false };

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
                        New Category
                    </Button>
                </div>
            </div>

            <Table
                columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'locale', label: 'Languages' },
                    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
                ]}
                data={categories}
                isLoading={loading}
                emptyMessage="No categories found. Create your first category!"
                renderCell={(column, row: FaqCategory) => {
                    if (column.key === 'name') {
                        return <span className="font-medium text-gray-900">{row.name}</span>;
                    }
                    if (column.key === 'locale') {
                        const availableLocales = row.availableLocales || [row.locale];
                        const allLocales: Array<'en' | 'es' | 'it' | 'de' | 'pt' | 'zh'> = ['en', 'es', 'it', 'de', 'pt', 'zh'];
                        const localeCodes: Record<'en' | 'es' | 'it' | 'de' | 'pt' | 'zh', string> = {
                            en: 'EN',
                            es: 'ES',
                            it: 'IT',
                            de: 'DE',
                            pt: 'PT',
                            zh: 'ZH',
                        };
                        return (
                            <div className="flex flex-wrap gap-1">
                                {allLocales.map((loc) => {
                                    const exists = availableLocales.includes(loc);
                                    return (
                                        <span
                                            key={loc}
                                            className={`px-2 py-1 text-xs font-medium rounded-md ${exists
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-400'
                                                }`}
                                            title={exists ? `${localeNames[loc]} - Available` : `${localeNames[loc]} - Missing`}
                                        >
                                            {localeCodes[loc] || loc.toUpperCase()}
                                        </span>
                                    );
                                })}
                            </div>
                        );
                    }
                    if (column.key === 'actions') {
                        return (
                            <ActionMenu
                                onEdit={() => handleEdit(row)}
                                onDelete={() => {
                                    setCategoryToDelete(row.id);
                                    setDeleteConfirmOpen(true);
                                }}
                            />
                        );
                    }
                    return row[column.key as keyof typeof row];
                }}
            />

            <Modal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingCategoryId(null);
                    setCurrentCategoryId(null);
                }}
                title={editingCategoryId ? 'Edit Category' : 'Create Category'}
                size="3xl"
                footer={
                    <div className="flex justify-end items-center gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => {
                                setIsFormOpen(false);
                                setEditingCategoryId(null);
                                setCurrentCategoryId(null);
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            form="category-form"
                            variant="primary"
                            isLoading={isSaving}
                        >
                            {current.exists ? 'Update Translation' : 'Save Translation'}
                        </Button>
                    </div>
                }
            >
                <div className="space-y-5">
                    {/* Language Tabs */}
                    <div className="border-b border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {locales.map((locale) => {
                                const trans = translations[locale];
                                const isActive = activeTab === locale;
                                const hasContent = trans && trans.name;
                                const exists = trans?.exists || false;

                                return (
                                    <button
                                        key={locale}
                                        type="button"
                                        onClick={() => setActiveTab(locale)}
                                        className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                                            ? 'border-primary-500 text-primary-600 bg-primary-50'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } ${hasContent ? 'bg-green-50' : ''}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span>{localeNames[locale]}</span>
                                            {exists && (
                                                <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />
                                            )}
                                            {hasContent && !exists && (
                                                <span className="w-2 h-2 bg-yellow-500 rounded-full" title="Unsaved changes" />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Auto Translate Button (only show for non-English tabs) */}
                    {activeTab !== 'en' && translations['en']?.name && (
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => autoTranslate()}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-md transition-colors border border-primary-200 bg-primary-50/50"
                                disabled={isTranslating}
                            >
                                {isTranslating ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Translating...
                                    </>
                                ) : (
                                    <>
                                        <Languages className="h-4 w-4" />
                                        Auto Translate
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    <form id="category-form" onSubmit={handleSubmit} className="space-y-4">
                        {/* Icon Picker - Only show on English tab (icon is shared across all locales) */}
                        {activeTab === 'en' && (
                            <div className="space-y-1.5">
                                <FieldLabel htmlFor="icon">
                                    Icon (Common for all languages)
                                </FieldLabel>
                                <IconPicker
                                    value={categoryIcon}
                                    onChange={(iconValue) => setCategoryIcon(iconValue)}
                                    placeholder="Select an icon (optional)..."
                                    disabled={isSaving || isTranslating}
                                />
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <FieldLabel htmlFor="name" required>
                                Category Name ({localeNames[activeTab as keyof typeof localeNames]})
                            </FieldLabel>
                            <Input
                                id="name"
                                type="text"
                                value={current.name}
                                onChange={(e) => {
                                    setTranslations((prev) => ({
                                        ...prev,
                                        [activeTab]: {
                                            ...prev[activeTab],
                                            name: e.target.value,
                                        },
                                    }));
                                }}
                                placeholder={`Enter category name in ${localeNames[activeTab as keyof typeof localeNames]}`}
                                required
                                disabled={isSaving || isTranslating}
                            />
                        </div>

                        {activeTab !== 'en' && !currentCategoryId && (
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-800">
                                Please save the English version first before adding translations.
                            </div>
                        )}
                    </form>
                </div>
            </Modal>

            <DeleteConfirmModal
                isOpen={deleteConfirmOpen}
                onClose={() => {
                    setDeleteConfirmOpen(false);
                    setCategoryToDelete(null);
                }}
                onConfirm={async () => {
                    if (!categoryToDelete) return;
                    try {
                        setIsDeleting(true);
                        const response = await fetch(`/api/admin/faq-categories/${categoryToDelete}?deleteAll=true`, {
                            method: 'DELETE',
                        });
                        if (!response.ok) {
                            const error = await response.json();
                            throw new Error(error.error || 'Failed to delete category');
                        }
                        showToast('Category deleted successfully', 'success');
                        setDeleteConfirmOpen(false);
                        setCategoryToDelete(null);
                        fetchCategories();
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Unable to delete category.';
                        showToast(message, 'error');
                    } finally {
                        setIsDeleting(false);
                    }
                }}
                title="Delete Category"
                message="Are you sure that you want to continue? This will delete all translations of this category. This action cannot be reversed."
                isLoading={isDeleting}
            />

            {ToastComponent}
        </div>
    );
}
