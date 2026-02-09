'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { useToast } from '@/components/ui/toast';
import { localeNames } from '@/i18n-config';
import { Languages, Loader2 } from 'lucide-react';
import { Loader } from '@/components/ui/adminUi/loader';

import { supportedLocales } from '@/config/site';
const locales = supportedLocales;

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

interface ServicesMetaPageTitleFormProps {
    initialPage?: string;
    initialLocale?: string;
    servicePages?: Array<{ value: string; label: string }>;
    onClose?: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function ServicesMetaPageTitleForm({
    initialPage,
    initialLocale = 'en',
    servicePages = [],
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: ServicesMetaPageTitleFormProps) {
    const { showToast, ToastComponent } = useToast();
    const [formPage, setFormPage] = useState<string>(initialPage || '');
    const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
    const isEditing = !!initialPage;
    const [metaFormData, setMetaFormData] = useState<Record<string, MetaFormData>>(() => {
        const initial: Record<string, MetaFormData> = {};
        locales.forEach((loc) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllData runs when formPage changes
    }, [formPage]);

    const loadAllData = async () => {
        if (!formPage) return;
        
        try {
            setIsLoading(true);
            
            const metaPromises = locales.map(locale =>
                fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, {
                    cache: 'no-store',
                }).then(res => res.ok ? res.json() : null)
            );

            const pageTitlePromises = locales.map(locale =>
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

            locales.forEach((locale, index) => {
                const metaResult = metaResults[index];
                const pageTitleResult = pageTitleResults[index];

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
            showToast('English is the source language.', 'info');
            return;
        }

        const englishMeta = metaFormData['en'];
        const englishPageTitle = pageTitleFormData['en'];

        if (!englishMeta.title && !englishMeta.description && !englishPageTitle.title) {
            showToast('Please fill in English content first.', 'warning');
            return;
        }

        try {
            setIsTranslating(true);

            const translateText = async (text: string): Promise<string> => {
                if (!text.trim()) return '';
                const response = await fetch('https://api.mymemory.translated.net/get', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const params = new URLSearchParams({
                    q: text,
                    langpair: `en|${activeLocale}`,
                });
                const res = await fetch(`https://api.mymemory.translated.net/get?${params}`);
                const data = await res.json();
                return data.responseData?.translatedText || text;
            };

            const [translatedMetaTitle, translatedMetaDesc, translatedKeywords, translatedPageTitle, translatedPill, translatedSubtitle] = await Promise.all([
                translateText(englishMeta.title),
                translateText(englishMeta.description),
                translateText(englishMeta.keywords),
                translateText(englishPageTitle.title),
                translateText(englishPageTitle.pagePill),
                translateText(englishPageTitle.sectionSubtitle),
            ]);

            updateMetaField(activeLocale, 'title', translatedMetaTitle);
            updateMetaField(activeLocale, 'description', translatedMetaDesc);
            updateMetaField(activeLocale, 'keywords', translatedKeywords);
            updatePageTitleField(activeLocale, 'title', translatedPageTitle);
            updatePageTitleField(activeLocale, 'pagePill', translatedPill);
            updatePageTitleField(activeLocale, 'sectionSubtitle', translatedSubtitle);

            showToast('Translation completed.', 'success');
        } catch (error) {
            console.error('Translation error:', error);
            showToast('Translation failed. Please translate manually.', 'error');
        } finally {
            setIsTranslating(false);
        }
    };

    const handleSave = async () => {
        if (!formPage) {
            showToast('Please select a page.', 'error');
            return;
        }

        try {
            setIsSaving(true);

            for (const locale of locales) {
                const meta = metaFormData[locale];
                const pageTitle = pageTitleFormData[locale];

                const hasMeta = meta.title || meta.description || meta.keywords;
                const hasPageTitle = pageTitle.title || pageTitle.pagePill || pageTitle.sectionSubtitle;

                if (hasMeta) {
                    const metaRes = await fetch('/api/admin/meta-details', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            page: formPage,
                            locale,
                            title: meta.title,
                            description: meta.description,
                            keywords: meta.keywords,
                        }),
                    });

                    if (metaRes.ok) {
                        setMetaSavedLocales((prev) => new Set([...prev, locale]));
                    }
                }

                if (hasPageTitle) {
                    const pageTitleRes = await fetch('/api/admin/page-titles', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            page: formPage,
                            locale,
                            title: pageTitle.title,
                            pagePill: pageTitle.pagePill,
                            sectionSubtitle: pageTitle.sectionSubtitle,
                        }),
                    });

                    if (pageTitleRes.ok) {
                        setPageTitleSavedLocales((prev) => new Set([...prev, locale]));
                    }
                }
            }

            showToast('Saved successfully.', 'success');
            onSave?.();
        } catch (error) {
            console.error('Error saving:', error);
            showToast('Failed to save.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const currentMeta = metaFormData[activeLocale] || { title: '', description: '', keywords: '' };
    const currentPageTitle = pageTitleFormData[activeLocale] || { title: '', pagePill: '', sectionSubtitle: '' };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <form
            id="services-meta-page-title-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSave();
            }}
            className="space-y-6"
        >
            <div className="space-y-1.5">
                <FieldLabel required>Page</FieldLabel>
                <Select
                    options={servicePages}
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
                {isEditing && (
                    <p className="text-xs text-gray-500 mt-1">
                        Editing translations for: <span className="font-medium text-gray-700">{formPage}</span>
                    </p>
                )}
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex gap-2">
                    {locales.map((locale) => {
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
                                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                                    isActive
                                        ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                        : hasContent
                                            ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50 dark:bg-green-900/10'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{localeNames[locale as keyof typeof localeNames] ?? locale}</span>
                                    {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                                </div>
                            </button>
                        );
                    })}
                </nav>
            </div>

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

            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

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
