'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { Button } from '@/components/ui/adminUi/button';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { localeNames } from '@/i18n-config';
import { supportedLocales } from '@/config/site';
import { Languages, Loader2 } from 'lucide-react';
import { pageOptions } from '@/components/admin/common/page-options';

const locales = supportedLocales;

interface PageTitleFormProps {
    page?: string | null;
    locale?: string;
    onClose?: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function PageTitleForm({
    page: initialPage,
    locale: initialLocale = 'en',
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: PageTitleFormProps) {
    const { showToast, ToastComponent } = useToast();
    const [formPage, setFormPage] = useState<string>(initialPage || '');
    const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
    const [formData, setFormData] = useState<Record<string, { title: string; pagePill: string; sectionSubtitle: string }>>(() => {
        const initial: Record<string, { title: string; pagePill: string; sectionSubtitle: string }> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                title: '',
                pagePill: '',
                sectionSubtitle: '',
            };
        });
        return initial;
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [savedLocales, setSavedLocales] = useState<Set<string>>(new Set());

    // Sync formPage with initialPage when editing (initialPage is provided)
    useEffect(() => {
        if (initialPage) {
            setFormPage(initialPage);
        }
    }, [initialPage]);

    useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        if (formPage) {
            loadAllTranslations();
        }
    }, [formPage]);

    const loadAllTranslations = async () => {
        if (!formPage) return;

        try {
            setIsLoading(true);
            // Load all locales for the selected page
            const promises = locales.map(locale =>
                fetch(`/api/admin/page-titles?page=${encodeURIComponent(formPage)}&locale=${encodeURIComponent(locale)}`, {
                    cache: 'no-store',
                })
            );

            const responses = await Promise.all(promises);
            const loadedData: Record<string, { title: string; pagePill: string; sectionSubtitle: string }> = {};

            await Promise.all(
                responses.map(async (res, index) => {
                    const locale = locales[index];
                    if (res.ok) {
                        const data = await res.json();
                        if (data) {
                            loadedData[locale] = {
                                title: data.title || '',
                                pagePill: data.pagePill || '',
                                sectionSubtitle: data.sectionSubtitle || '',
                            };
                        }
                    }
                })
            );

            const saved = new Set<string>();
            setFormData((prev) => {
                const updated = { ...prev };
                locales.forEach((loc) => {
                    if (loadedData[loc]) {
                        updated[loc] = loadedData[loc];
                        // Check if this locale has saved data
                        if (loadedData[loc].title?.trim() || loadedData[loc].pagePill?.trim() || loadedData[loc].sectionSubtitle?.trim()) {
                            saved.add(loc);
                        }
                    } else {
                        updated[loc] = {
                            title: '',
                            pagePill: '',
                            sectionSubtitle: '',
                        };
                    }
                });
                return updated;
            });
            setSavedLocales(saved);
        } catch (error) {
            console.error('Error loading page titles:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formPage.trim()) {
            showToast('Please select a page.', 'error');
            return;
        }

        const currentData = formData[activeLocale];
        if (!currentData?.pagePill?.trim()) {
            showToast('Badge / Page Pill is required.', 'error');
            return;
        }
        if (!currentData?.title?.trim()) {
            showToast('Title is required.', 'error');
            return;
        }
        if (!currentData?.sectionSubtitle?.trim()) {
            showToast('Section Subtitle is required.', 'error');
            return;
        }

        try {
            setIsSaving(true);
            const res = await fetch('/api/admin/page-titles', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    page: formPage,
                    locale: activeLocale,
                    title: currentData.title.trim(),
                    pagePill: currentData.pagePill?.trim() || undefined,
                    sectionSubtitle: currentData.sectionSubtitle?.trim() || undefined,
                }),
            });

            const payload = await res.json();
            if (!res.ok) {
                throw new Error(payload?.error || 'Failed to save page title');
            }

            showToast('Page title saved successfully.', 'success');
            // Mark this locale as saved
            setSavedLocales(prev => new Set(prev).add(activeLocale));
            onSave?.();
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save page title.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const updateField = (field: 'title' | 'pagePill' | 'sectionSubtitle', value: string) => {
        setFormData((prev) => ({
            ...prev,
            [activeLocale]: {
                ...prev[activeLocale],
                [field]: value,
            },
        }));
    };

    const autoTranslate = async (field: 'title' | 'pagePill' | 'sectionSubtitle', showToastMessage: boolean = true): Promise<boolean> => {
        if (activeLocale === 'en') {
            if (showToastMessage) {
                showToast('Cannot auto-translate English. Please select another language.', 'error');
            }
            return false;
        }

        const english = formData['en'];
        const englishValue = english?.[field]?.trim();

        if (!englishValue) {
            if (showToastMessage) {
                showToast(`Please fill in the English ${field} first.`, 'error');
            }
            return false;
        }

        try {
            const res = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: englishValue,
                    sourceLocale: 'en',
                    targetLocale: activeLocale,
                }),
            });

            // Check if response is JSON
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await res.text();
                throw new Error(`Translation API returned non-JSON response. Please restart your dev server to load the translate API route.`);
            }

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || data.message || `Failed to translate ${field}`);

            updateField(field, data.translatedText);
            if (showToastMessage) {
                showToast(`Auto-translated ${field} to ${localeNames[activeLocale as keyof typeof localeNames]}.`, 'success');
            }
            return true;
        } catch (error) {
            if (showToastMessage) {
                const message = error instanceof Error ? error.message : `Failed to auto-translate ${field}.`;
                showToast(message, 'error');
            }
            return false;
        }
    };

    const autoTranslateAll = async () => {
        if (activeLocale === 'en') {
            showToast('Cannot auto-translate English. Please select another language.', 'error');
            return;
        }

        const english = formData['en'];
        const fieldsToTranslate: Array<'title' | 'pagePill' | 'sectionSubtitle'> = [];
        if (english.title?.trim()) fieldsToTranslate.push('title');
        if (english.pagePill?.trim()) fieldsToTranslate.push('pagePill');
        if (english.sectionSubtitle?.trim()) fieldsToTranslate.push('sectionSubtitle');

        if (fieldsToTranslate.length === 0) {
            showToast('Please fill in English content first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);
            let successCount = 0;

            for (const field of fieldsToTranslate) {
                const success = await autoTranslate(field, false);
                if (success) successCount++;
            }

            if (successCount === fieldsToTranslate.length) {
                showToast(`Auto-translated all fields to ${localeNames[activeLocale as keyof typeof localeNames]}.`, 'success');
            } else if (successCount > 0) {
                showToast(`Auto-translated ${successCount} of ${fieldsToTranslate.length} fields.`, 'success');
            } else {
                showToast('Failed to auto-translate. Please try again.', 'error');
            }
        } catch (error) {
            showToast('Failed to auto-translate. Please try again.', 'error');
        } finally {
            setIsTranslating(false);
        }
    };

    const currentData = formData[activeLocale] || { title: '', pagePill: '', sectionSubtitle: '' };
    const englishData = formData['en'] || { title: '', pagePill: '', sectionSubtitle: '' };

    if (isLoading) {
        return <Loader />;
    }

    // Determine if we're editing an existing page (initialPage is provided)
    const isEditing = !!initialPage;
    const currentPageOption = pageOptions.find(opt => opt.value === formPage);
    const pageLabel = currentPageOption?.label || formPage;

    return (
        <form id="page-title-form" onSubmit={handleSave} className="space-y-6">
            {/* Page Selection */}
            <div className="space-y-1.5">
                <FieldLabel required>Page</FieldLabel>
                <Select
                    options={pageOptions}
                    value={formPage}
                    onValueChange={(value) => {
                        // Only allow changing page if not editing
                        if (!isEditing) {
                            setFormPage(value);
                        }
                    }}
                    placeholder="Select a page"
                    required
                    disabled={isSaving || isLoading || isEditing}
                />
                {isEditing && (
                    <p className="text-xs text-gray-500 mt-1">
                        Editing translations for: <span className="font-medium text-gray-700">{pageLabel}</span>
                    </p>
                )}
            </div>

            {/* Locale Tabs - match contact/form styling (primary, rounded-t-lg, dark mode) */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex flex-wrap gap-2">
                    {locales.map((loc) => {
                        const hasData = savedLocales.has(loc);
                        const isActive = activeLocale === loc;
                        const localeData = formData[loc] || { title: '', pagePill: '', sectionSubtitle: '' };
                        const hasContent = hasData || localeData.title?.trim() || localeData.pagePill?.trim() || localeData.sectionSubtitle?.trim();

                        return (
                            <button
                                key={loc}
                                type="button"
                                onClick={() => setActiveLocale(loc)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                                    isActive
                                        ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-500'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                } ${hasContent && !isActive ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{localeNames[loc as keyof typeof localeNames] ?? loc}</span>
                                    {hasContent && (
                                        <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Auto Translate Button - always visible for non-English tabs; disabled when no English content */}
            {activeLocale !== 'en' && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={autoTranslateAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isTranslating || isSaving || isLoading || !(englishData.title?.trim() || englishData.pagePill?.trim() || englishData.sectionSubtitle?.trim())}
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

            {/* Form Fields */}
            <div className="space-y-6">
                <div className="space-y-1.5">
                    <FieldLabel required>Badge / Page Pill</FieldLabel>
                    <Input
                        value={currentData.pagePill}
                        onChange={(e) => updateField('pagePill', e.target.value)}
                        placeholder="Enter badge text"
                        required
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>Title</FieldLabel>
                    <Input
                        value={currentData.title}
                        onChange={(e) => updateField('title', e.target.value)}
                        placeholder="Enter page title"
                        required
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>Section Subtitle</FieldLabel>
                    <Textarea
                        value={currentData.sectionSubtitle}
                        onChange={(e) => updateField('sectionSubtitle', e.target.value)}
                        placeholder="Enter section subtitle"
                        rows={3}
                        required
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>
            </div>
        </form>
    );
}
