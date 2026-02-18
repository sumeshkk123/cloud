'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { Button } from '@/components/ui/adminUi/button';
import { useToast } from '@/components/ui/toast';
import { localeNames } from '@/i18n-config';
import { supportedLocales } from '@/config/site';
import { Languages, Loader2 } from 'lucide-react';
import { pageOptions } from '@/components/admin/common/page-options';

const locales = supportedLocales;

interface MetaDetailsFormProps {
    page?: string | null;
    locale?: string;
    onClose?: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function MetaDetailsForm({
    page: initialPage,
    locale: initialLocale = 'en',
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: MetaDetailsFormProps) {
    const { showToast, ToastComponent } = useToast();
    const [formPage, setFormPage] = useState<string>(initialPage || '');
    const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
    const [formData, setFormData] = useState<Record<string, { title: string; description: string; keywords: string }>>(() => {
        const initial: Record<string, { title: string; description: string; keywords: string }> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                title: '',
                description: '',
                keywords: '',
            };
        });
        return initial;
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [savedLocales, setSavedLocales] = useState<Set<string>>(new Set());

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formPage]);

    const loadAllTranslations = async () => {
        if (!formPage) return;

        try {
            setIsLoading(true);
            const promises = locales.map(locale =>
                fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, {
                    cache: 'no-store',
                }).then(res => res.ok ? res.json() : null)
            );

            const results = await Promise.all(promises);
            const newFormData: Record<string, { title: string; description: string; keywords: string }> = {};

            const saved = new Set<string>();
            locales.forEach((locale, index) => {
                const result = results[index];
                if (result && (result.title || result.description || result.keywords)) {
                    saved.add(locale);
                }
                newFormData[locale] = {
                    title: result?.title || '',
                    description: result?.description || '',
                    keywords: result?.keywords || '',
                };
            });

            setFormData(newFormData);
            setSavedLocales(saved);
        } catch (error) {
            showToast('Failed to load meta details.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formPage.trim()) {
            showToast('Please select a page.', 'error');
            return;
        }

        if (!currentData.title?.trim()) {
            showToast('Title is required.', 'error');
            return;
        }
        if (!currentData.description?.trim()) {
            showToast('Description is required.', 'error');
            return;
        }
        if (!currentData.keywords?.trim()) {
            showToast('Keywords are required.', 'error');
            return;
        }

        try {
            setIsSaving(true);
            const res = await fetch('/api/admin/meta-details', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    page: formPage,
                    locale: activeLocale,
                    title: currentData.title.trim(),
                    description: currentData.description.trim(),
                    keywords: currentData.keywords.trim(),
                }),
            });

            const payload = await res.json();
            if (!res.ok) {
                throw new Error(payload?.error || 'Failed to save meta detail');
            }

            showToast('Meta detail saved successfully.', 'success');
            // Mark this locale as saved
            setSavedLocales(prev => new Set(prev).add(activeLocale));
            onSave?.();
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save meta detail.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const updateField = (field: 'title' | 'description' | 'keywords', value: string) => {
        setFormData((prev) => ({
            ...prev,
            [activeLocale]: {
                title: prev[activeLocale]?.title ?? '',
                description: prev[activeLocale]?.description ?? '',
                keywords: prev[activeLocale]?.keywords ?? '',
                [field]: value,
            },
        }));
    };

    const autoTranslate = async (field: 'title' | 'description' | 'keywords', showToastMessage: boolean = true): Promise<boolean> => {
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
        const fieldsToTranslate: Array<'title' | 'description' | 'keywords'> = [];
        if (english.title?.trim()) fieldsToTranslate.push('title');
        if (english.description?.trim()) fieldsToTranslate.push('description');
        if (english.keywords?.trim()) fieldsToTranslate.push('keywords');

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

    const currentData = formData[activeLocale] || { title: '', description: '', keywords: '' };
    const englishData = formData['en'] || { title: '', description: '', keywords: '' };
    const isEditing = !!initialPage;
    const currentPageOption = pageOptions.find(opt => opt.value === formPage);
    const pageLabel = currentPageOption?.label || formPage;

    return (
        <form id="meta-details-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
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
                </div>

                {/* Locale Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="flex gap-2">
                        {locales.map((loc) => {
                            const hasData = savedLocales.has(loc);
                            const isActive = activeLocale === loc;
                            const currentData = formData[loc] || { title: '', description: '', keywords: '' };
                            const hasContent = hasData || currentData.title?.trim() || currentData.description?.trim() || currentData.keywords?.trim();

                            return (
                                <button
                                    key={loc}
                                    type="button"
                                    onClick={() => setActiveLocale(loc)}
                                    className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                                        : hasContent
                                            ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
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

                {/* Auto Translate Button (only show for non-English tabs when English content exists) */}
                {activeLocale !== 'en' && (formData['en']?.title?.trim() || formData['en']?.description?.trim() || formData['en']?.keywords?.trim()) && (
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={autoTranslateAll}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isTranslating || isSaving || isLoading}
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

                {/* Title */}
                <div className="space-y-1.5">
                    <FieldLabel required>Title</FieldLabel>
                    <Input
                        value={formData[activeLocale]?.title ?? ''}
                        onChange={(e) => updateField('title', e.target.value)}
                        placeholder="Enter meta title"
                        disabled={isLoading || isSaving || isTranslating}
                        required
                    />
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                    <FieldLabel required>Description</FieldLabel>
                    <Textarea
                        value={formData[activeLocale]?.description ?? ''}
                        onChange={(e) => updateField('description', e.target.value)}
                        placeholder="Enter meta description"
                        rows={4}
                        disabled={isLoading || isSaving || isTranslating}
                        required
                    />
                </div>

                {/* Keywords */}
                <div className="space-y-1.5">
                    <FieldLabel required>Keywords</FieldLabel>
                    <Input
                        value={formData[activeLocale]?.keywords ?? ''}
                        onChange={(e) => updateField('keywords', e.target.value)}
                        placeholder="keyword1, keyword2, keyword3"
                        disabled={isLoading || isSaving || isTranslating}
                        required
                    />
                    <p className="text-xs text-gray-500">Separate keywords with commas</p>
                </div>
            </div>
        </form>
    );
}
