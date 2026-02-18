'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { Button } from '@/components/ui/adminUi/button';
import { useToast } from '@/components/ui/toast';
import { i18n, localeNames } from '@/i18n-config';
import { Languages, Loader2 } from 'lucide-react';
import { Loader } from '@/components/ui/adminUi/loader';


interface MetaFormData {
    title: string;
    description: string;
    keywords: string;
}

interface PageTitleFormData {
    title: string;
    pagePill: string;
    sectionSubtitle: string;
}

interface FeaturesMetaPageTitleFormProps {
    initialPage?: string;
    initialLocale?: string;
    featurePages?: Array<{ value: string; label: string }>;
    onClose?: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function FeaturesMetaPageTitleForm({
    initialPage,
    initialLocale = 'en',
    featurePages = [],
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: FeaturesMetaPageTitleFormProps) {
    const { showToast, ToastComponent } = useToast();
    const [formPage, setFormPage] = useState<string>(initialPage || '');
    const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
    const isEditing = !!initialPage;
    const [metaFormData, setMetaFormData] = useState<Record<string, MetaFormData>>(() => {
        const initial: Record<string, MetaFormData> = {};
        i18n.locales.forEach((loc) => {
            initial[loc] = {
                title: '',
                description: '',
                keywords: '',
            };
        });
        return initial;
    });
    const [pageTitleFormData, setPageTitleFormData] = useState<Record<string, PageTitleFormData>>(() => {
        const initial: Record<string, PageTitleFormData> = {};
        i18n.locales.forEach((loc) => {
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
    const [metaSavedLocales, setMetaSavedLocales] = useState<Set<string>>(new Set());
    const [pageTitleSavedLocales, setPageTitleSavedLocales] = useState<Set<string>>(new Set());

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
            loadAllData();
        }
    }, [formPage]);

    const loadAllData = async () => {
        if (!formPage) return;

        try {
            setIsLoading(true);

            // Load meta details for all locales
            const metaPromises = i18n.locales.map(locale =>
                fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, {
                    cache: 'no-store',
                }).then(res => res.ok ? res.json() : null)
            );

            // Load page titles for all locales
            const pageTitlePromises = i18n.locales.map(locale =>
                fetch(`/api/admin/page-titles?page=${encodeURIComponent(formPage)}&locale=${locale}`, {
                    cache: 'no-store',
                }).then(res => res.ok ? res.json() : null)
            );

            const [metaResults, pageTitleResults] = await Promise.all([
                Promise.all(metaPromises),
                Promise.all(pageTitlePromises)
            ]);

            const newMetaData: Record<string, MetaFormData> = {};
            const newPageTitleData: Record<string, PageTitleFormData> = {};
            const metaSaved = new Set<string>();
            const pageTitleSaved = new Set<string>();

            i18n.locales.forEach((locale, index) => {
                const metaResult = metaResults[index];
                const pageTitleResult = pageTitleResults[index];

                // Meta details
                if (metaResult && (metaResult.title || metaResult.description || metaResult.keywords)) {
                    newMetaData[locale] = {
                        title: String(metaResult.title || ''),
                        description: String(metaResult.description || ''),
                        keywords: String(metaResult.keywords || ''),
                    };
                    metaSaved.add(locale);
                } else {
                    newMetaData[locale] = {
                        title: '',
                        description: '',
                        keywords: '',
                    };
                }

                // Page titles
                if (pageTitleResult && (pageTitleResult.title || pageTitleResult.pagePill || pageTitleResult.sectionSubtitle)) {
                    newPageTitleData[locale] = {
                        title: String(pageTitleResult.title || ''),
                        pagePill: String(pageTitleResult.pagePill || ''),
                        sectionSubtitle: String(pageTitleResult.sectionSubtitle || ''),
                    };
                    pageTitleSaved.add(locale);
                } else {
                    newPageTitleData[locale] = {
                        title: '',
                        pagePill: '',
                        sectionSubtitle: '',
                    };
                }
            });

            setMetaFormData(newMetaData);
            setPageTitleFormData(newPageTitleData);
            setMetaSavedLocales(metaSaved);
            setPageTitleSavedLocales(pageTitleSaved);

            // Set active locale to initialLocale if provided, or first saved locale, or 'en'
            if (initialLocale && (metaSaved.has(initialLocale) || pageTitleSaved.has(initialLocale))) {
                setActiveLocale(initialLocale);
            } else if (metaSaved.size > 0) {
                setActiveLocale(Array.from(metaSaved)[0]);
            } else if (pageTitleSaved.size > 0) {
                setActiveLocale(Array.from(pageTitleSaved)[0]);
            } else {
                setActiveLocale(initialLocale || 'en');
            }
        } catch (error) {
            console.error('Error loading data:', error);
            showToast('Failed to load meta details and page titles.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const updateMetaField = (locale: string, field: keyof MetaFormData, value: string) => {
        setMetaFormData((prev) => ({
            ...prev,
            [locale]: {
                ...prev[locale],
                [field]: value,
            },
        }));
    };

    const updatePageTitleField = (locale: string, field: keyof PageTitleFormData, value: string) => {
        setPageTitleFormData((prev) => ({
            ...prev,
            [locale]: {
                ...prev[locale],
                [field]: value,
            },
        }));
    };

    const autoTranslate = async () => {
        if (activeLocale === 'en') {
            showToast('Cannot auto-translate English. Please select another language.', 'error');
            return;
        }

        const englishMeta = metaFormData['en'];
        const englishPageTitle = pageTitleFormData['en'];

        if ((!englishMeta.title.trim() && !englishMeta.description.trim()) &&
            (!englishPageTitle.title.trim() && !englishPageTitle.sectionSubtitle.trim())) {
            showToast('Please fill in the English version first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);
            let successCount = 0;
            let errorCount = 0;

            // Translate meta details
            if (englishMeta.title.trim()) {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: englishMeta.title,
                            sourceLocale: 'en',
                            targetLocale: activeLocale,
                        }),
                    });
                    const data = await res.json();
                    if (res.ok && data.translatedText) {
                        updateMetaField(activeLocale, 'title', data.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            if (englishMeta.description.trim()) {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: englishMeta.description,
                            sourceLocale: 'en',
                            targetLocale: activeLocale,
                        }),
                    });
                    const data = await res.json();
                    if (res.ok && data.translatedText) {
                        updateMetaField(activeLocale, 'description', data.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            if (englishMeta.keywords.trim()) {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: englishMeta.keywords,
                            sourceLocale: 'en',
                            targetLocale: activeLocale,
                        }),
                    });
                    const data = await res.json();
                    if (res.ok && data.translatedText) {
                        updateMetaField(activeLocale, 'keywords', data.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            // Translate page title fields
            if (englishPageTitle.title.trim()) {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: englishPageTitle.title,
                            sourceLocale: 'en',
                            targetLocale: activeLocale,
                        }),
                    });
                    const data = await res.json();
                    if (res.ok && data.translatedText) {
                        updatePageTitleField(activeLocale, 'title', data.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            if (englishPageTitle.sectionSubtitle.trim()) {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: englishPageTitle.sectionSubtitle,
                            sourceLocale: 'en',
                            targetLocale: activeLocale,
                        }),
                    });
                    const data = await res.json();
                    if (res.ok && data.translatedText) {
                        updatePageTitleField(activeLocale, 'sectionSubtitle', data.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            if (errorCount > 0 && successCount === 0) {
                showToast('Translation failed. The translation service may be unavailable. Please try again later or translate manually.', 'error');
            } else if (errorCount > 0) {
                showToast(`Partially translated. ${successCount} field(s) translated, ${errorCount} failed.`, 'warning');
            } else if (successCount > 0) {
                showToast(`Auto-translated ${successCount} field(s) successfully.`, 'success');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Translation failed.';
            showToast(`Translation error: ${errorMessage}. Please try again or translate manually.`, 'error');
        } finally {
            setIsTranslating(false);
        }
    };

    const handleSave = async () => {
        const currentMeta = metaFormData[activeLocale];
        const currentPageTitle = pageTitleFormData[activeLocale];

        try {
            setIsSaving(true);

            // Save meta details
            const metaRes = await fetch('/api/admin/meta-details', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    page: formPage,
                    locale: activeLocale,
                    title: currentMeta.title.trim() || null,
                    description: currentMeta.description.trim() || null,
                    keywords: currentMeta.keywords.trim() || null,
                }),
            });

            if (!metaRes.ok) {
                const data = await metaRes.json();
                throw new Error(data?.error || 'Failed to save meta details');
            }

            // Save page title
            const pageTitleRes = await fetch('/api/admin/page-titles', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    page: formPage,
                    locale: activeLocale,
                    title: currentPageTitle.title.trim() || null,
                    pagePill: currentPageTitle.pagePill.trim() || null,
                    sectionSubtitle: currentPageTitle.sectionSubtitle.trim() || null,
                }),
            });

            if (!pageTitleRes.ok) {
                const data = await pageTitleRes.json();
                throw new Error(data?.error || 'Failed to save page title');
            }

            // Update saved locales
            setMetaSavedLocales((prev) => new Set([...prev, activeLocale]));
            setPageTitleSavedLocales((prev) => new Set([...prev, activeLocale]));

            showToast('Saved successfully.', 'success');
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const currentMeta = metaFormData[activeLocale] || { title: '', description: '', keywords: '' };
    const currentPageTitle = pageTitleFormData[activeLocale] || { title: '', pagePill: '', sectionSubtitle: '' };
    const hasMetaContent = currentMeta.title.trim() || currentMeta.description.trim() || currentMeta.keywords.trim();
    const hasPageTitleContent = currentPageTitle.title.trim() || currentPageTitle.pagePill.trim() || currentPageTitle.sectionSubtitle.trim();
    const metaExists = metaSavedLocales.has(activeLocale);
    const pageTitleExists = pageTitleSavedLocales.has(activeLocale);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <form
            id="features-meta-page-title-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSave();
            }}
            className="space-y-6"
        >
            {/* Page Selection */}
            <div className="space-y-1.5">
                <FieldLabel required>Page</FieldLabel>
                <Select
                    options={featurePages}
                    value={formPage}
                    onValueChange={(value) => {
                        if (!isEditing) {
                            setFormPage(value);
                        }
                    }}
                    placeholder="Select a page"
                    required
                    disabled={isSaving || isLoading || isEditing}
                />
            </div>

            {/* Language Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex gap-2">
                    {i18n.locales.map((locale) => {
                        const isActive = activeLocale === locale;
                        const localeMeta = metaFormData[locale];
                        const localePageTitle = pageTitleFormData[locale];
                        const hasContent = (localeMeta.title?.trim() || localeMeta.description?.trim() || localeMeta.keywords?.trim()) ||
                            (localePageTitle.title?.trim() || localePageTitle.pagePill?.trim() || localePageTitle.sectionSubtitle?.trim());
                        const exists = metaSavedLocales.has(locale) || pageTitleSavedLocales.has(locale);

                        return (
                            <button
                                key={locale}
                                type="button"
                                onClick={() => setActiveLocale(locale)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                                        ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                        : hasContent
                                            ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50 dark:bg-green-900/10'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{localeNames[locale]}</span>
                                    {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                                </div>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Auto Translate Button */}
            {activeLocale !== 'en' && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={autoTranslate}
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

            {/* Meta Details Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Details</h3>

                <div className="space-y-4">
                    <div>
                        <FieldLabel htmlFor="meta-title">Meta Title</FieldLabel>
                        <Input
                            id="meta-title"
                            value={currentMeta.title}
                            onChange={(e) => updateMetaField(activeLocale, 'title', e.target.value)}
                            placeholder="Enter meta title"
                            disabled={isSaving || isLoading || isTranslating}
                        />
                    </div>

                    <div>
                        <FieldLabel htmlFor="meta-description">Meta Description</FieldLabel>
                        <Textarea
                            id="meta-description"
                            value={currentMeta.description}
                            onChange={(e) => updateMetaField(activeLocale, 'description', e.target.value)}
                            placeholder="Enter meta description"
                            rows={3}
                            disabled={isSaving || isLoading || isTranslating}
                        />
                    </div>

                    <div>
                        <FieldLabel htmlFor="meta-keywords">Meta Keywords</FieldLabel>
                        <Input
                            id="meta-keywords"
                            value={currentMeta.keywords}
                            onChange={(e) => updateMetaField(activeLocale, 'keywords', e.target.value)}
                            placeholder="Enter keywords (comma-separated)"
                            disabled={isSaving || isLoading || isTranslating}
                        />
                        <p className="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

            {/* Page Title Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Page Title</h3>

                <div className="space-y-4">
                    <div>
                        <FieldLabel htmlFor="page-title">Page Title</FieldLabel>
                        <Input
                            id="page-title"
                            value={currentPageTitle.title}
                            onChange={(e) => updatePageTitleField(activeLocale, 'title', e.target.value)}
                            placeholder="Enter page title"
                            disabled={isSaving || isLoading || isTranslating}
                        />
                    </div>

                    <div>
                        <FieldLabel htmlFor="page-pill">Page Pill</FieldLabel>
                        <Input
                            id="page-pill"
                            value={currentPageTitle.pagePill}
                            onChange={(e) => updatePageTitleField(activeLocale, 'pagePill', e.target.value)}
                            placeholder="Enter page pill"
                            disabled={isSaving || isLoading || isTranslating}
                        />
                    </div>

                    <div>
                        <FieldLabel htmlFor="section-subtitle">Section Subtitle</FieldLabel>
                        <Textarea
                            id="section-subtitle"
                            value={currentPageTitle.sectionSubtitle}
                            onChange={(e) => updatePageTitleField(activeLocale, 'sectionSubtitle', e.target.value)}
                            placeholder="Enter section subtitle"
                            rows={3}
                            disabled={isSaving || isLoading || isTranslating}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
