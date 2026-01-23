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
import { Languages, Loader2 } from 'lucide-react';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

interface FaqFormState {
    question: string;
    answer: string;
}

interface FaqTranslation {
    locale: string;
    question: string;
    answer: string;
    exists: boolean;
}

interface FaqFormProps {
    faqId?: string | null;
    onClose?: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function FaqForm({ faqId, onClose, onSave, onToastChange, onLoadingChange, onSavingChange }: FaqFormProps) {
    const { showToast, ToastComponent } = useToast();

    useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, FaqTranslation>>(() => {
        const initial: Record<string, FaqTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                question: '',
                answer: '',
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentFaqId, setCurrentFaqId] = useState<string | null>(faqId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);
    const [categoryId, setCategoryId] = useState<string>('');
    const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
    const [loadingCategories, setLoadingCategories] = useState(false);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentFaqId(faqId || null);
    }, [faqId]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoadingCategories(true);
            const response = await fetch('/api/admin/faq-categories?locale=en');
            if (response.ok) {
                const data = await response.json();
                setCategories(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Failed to load categories:', error);
        } finally {
            setLoadingCategories(false);
        }
    };

    // Ensure categoryId is preserved when categories are loaded
    useEffect(() => {
        // If we have a categoryId but it's not in the categories list, keep it anyway
        // (might be a deleted category, but we still want to show it was selected)
        if (categoryId && categories.length > 0) {
            const categoryExists = categories.some(cat => cat.id === categoryId);
            if (!categoryExists) {
                // Category might have been deleted, but we'll keep the ID for now
                // The user will need to select a new category
            }
        }
    }, [categoryId, categories]);

    useEffect(() => {
        if (currentFaqId) {
            loadAllTranslations();
        } else {
            const reset: Record<string, FaqTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    question: loc === 'en' ? '' : '',
                    answer: loc === 'en' ? '' : '',
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
            setCategoryId(''); // Reset category when creating new FAQ
        }
    }, [currentFaqId]);

    const loadAllTranslations = async (preserveActiveTab: boolean = false) => {
        if (!currentFaqId) {
            return;
        }

        const currentActiveTab = preserveActiveTab ? activeTab : null;

        try {
            setIsLoading(true);

            const response = await fetch(`/api/admin/faq?id=${encodeURIComponent(currentFaqId)}&all=true`);

            if (!response.ok) {
                showToast('Failed to load FAQ translations.', 'error');
                return;
            }

            const data = await response.json();
            const existingTranslations = data?.translations || [];

            // Get categoryId from English translation (or first available)
            const englishTranslation = existingTranslations.find((t: any) => t.locale === 'en') || existingTranslations[0];
            if (englishTranslation?.categoryId) {
                setCategoryId(String(englishTranslation.categoryId));
            } else {
                // If no categoryId found, reset to empty string
                setCategoryId('');
            }

            const loaded: Record<string, FaqTranslation> = {};
            const existingLocales: string[] = [];

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        question: String(existing.question || ''),
                        answer: String(existing.answer || ''),
                        exists: true,
                    };
                    existingLocales.push(loc);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        question: '',
                        answer: '',
                        exists: false,
                    };
                }
            });

            setTranslations(loaded);
            setSavedLocales(existingLocales);

            if (preserveActiveTab && currentActiveTab) {
                setActiveTab(currentActiveTab);
            } else {
                if (existingLocales.length > 0) {
                    setActiveTab(existingLocales[0]);
                } else {
                    setActiveTab('en');
                }
            }
        } catch (error) {
            showToast('Failed to load FAQ translations.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const updateTranslation = (locale: string, field: 'question' | 'answer', value: string) => {
        setTranslations((prev) => ({
            ...prev,
            [locale]: {
                ...prev[locale],
                [field]: value,
            },
        }));
    };

    const autoTranslate = async () => {
        if (activeTab === 'en') {
            showToast('Cannot auto-translate English. Please select another language.', 'error');
            return;
        }

        const english = translations['en'];
        if (!english || (!english.question?.trim() && !english.answer?.trim())) {
            showToast('Please fill in the English question and/or answer first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);

            if (!english.question?.trim()) {
                showToast('English question is required for auto-translation.', 'error');
                setIsTranslating(false);
                return;
            }

            // Translate question
            const questionRes = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: english.question,
                    sourceLocale: 'en',
                    targetLocale: activeTab,
                }),
            });

            // Check if response is JSON
            const questionContentType = questionRes.headers.get('content-type');
            if (!questionContentType || !questionContentType.includes('application/json')) {
                const text = await questionRes.text();
                throw new Error(`Translation API returned non-JSON response. Please restart your dev server to load the translate API route.`);
            }

            const questionData = await questionRes.json();
            if (!questionRes.ok) throw new Error(questionData.error || questionData.message || 'Failed to translate question');
            updateTranslation(activeTab, 'question', questionData.translatedText);

            // Translate answer if it exists
            if (english.answer.trim()) {
                const answerRes = await fetch('/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        text: english.answer,
                        sourceLocale: 'en',
                        targetLocale: activeTab,
                    }),
                });

                // Check if response is JSON
                const answerContentType = answerRes.headers.get('content-type');
                if (!answerContentType || !answerContentType.includes('application/json')) {
                    const text = await answerRes.text();
                    throw new Error(`Translation API returned non-JSON response. Please restart your dev server to load the translate API route.`);
                }

                const answerData = await answerRes.json();
                if (!answerRes.ok) throw new Error(answerData.error || answerData.message || 'Failed to translate answer');
                updateTranslation(activeTab, 'answer', answerData.translatedText);
            }

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
        if (!current.question.trim() || !current.answer.trim()) {
            showToast('Question and answer are required for the current language.', 'error');
            return;
        }

        // Category is mandatory for English version (new FAQ)
        if (activeTab === 'en' && !currentFaqId && !categoryId) {
            showToast('Please select a category.', 'error');
            return;
        }

        try {
            setIsSaving(true);

            const idToUse = currentFaqId;

            if (!idToUse) {
                if (activeTab !== 'en') {
                    showToast('Please create the English version first.', 'error');
                    setIsSaving(false);
                    return;
                }

                const res = await fetch('/api/admin/faq', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        question: current.question,
                        answer: current.answer,
                        locale: 'en',
                        categoryId: categoryId,
                    }),
                });
                const payload = await res.json();
                if (!res.ok) throw new Error(payload?.error || 'Failed to save FAQ');

                if (payload && payload.id) {
                    setCurrentFaqId(payload.id);
                    setTranslations((prev) => ({
                        ...prev,
                        en: {
                            ...prev.en,
                            exists: true,
                        },
                    }));
                    setSavedLocales(['en']);
                }
                showToast('FAQ created successfully.', 'success');
                setIsSaving(false);
                if (onSave) {
                    await onSave();
                }
                return;
            }

            // For English tab, always use the selected categoryId (can update existing FAQ's category)
            // For other languages, use the categoryId from English version
            const categoryIdToUse = activeTab === 'en' ? categoryId : categoryId;

            const res = await fetch(`/api/admin/faq?id=${encodeURIComponent(idToUse)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: current.question,
                    answer: current.answer,
                    locale: activeTab,
                    ...(activeTab === 'en' && categoryId ? { categoryId } : {}),
                }),
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

            setTranslations((prev) => ({
                ...prev,
                [activeTab]: {
                    ...prev[activeTab],
                    exists: true,
                },
            }));

            if (!savedLocales.includes(activeTab)) {
                setSavedLocales([...savedLocales, activeTab]);
            }

            showToast(`Translation saved successfully.`, 'success');
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save translation.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const current = translations[activeTab] || { question: '', answer: '', exists: false };

    return (
        <div className="space-y-5">
            <div className="border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.question || trans.answer);
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

            <form
                id="faq-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveCurrentTab();
                }}
                className="space-y-5"
            >
                {/* Auto Translate Button (only show for non-English tabs when English content exists) */}
                {activeTab !== 'en' && (translations['en']?.question?.trim() || translations['en']?.answer?.trim()) && (
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

                {activeTab === 'en' && (
                    <div className="space-y-1.5">
                        <FieldLabel htmlFor="category" required>
                            Category
                        </FieldLabel>
                        <Select
                            id="category"
                            name="category"
                            value={categoryId || ''}
                            onValueChange={(value) => setCategoryId(value)}
                            options={categories.map((cat) => ({
                                value: cat.id,
                                label: cat.name,
                            }))}
                            placeholder={loadingCategories ? 'Loading categories...' : 'Select a category'}
                            required
                            disabled={isSaving || isLoading || isTranslating || loadingCategories}
                        />
                    </div>
                )}

                <div className="space-y-1.5">
                    <FieldLabel required>
                        Question ({localeNames[activeTab as keyof typeof localeNames]})
                    </FieldLabel>
                    <Input
                        value={current.question}
                        onChange={(e) => updateTranslation(activeTab, 'question', e.target.value)}
                        placeholder={`Enter the FAQ question in ${localeNames[activeTab as keyof typeof localeNames]}`}
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>
                        Answer ({localeNames[activeTab as keyof typeof localeNames]})
                    </FieldLabel>
                    <Textarea
                        value={current.answer}
                        onChange={(e) => updateTranslation(activeTab, 'answer', e.target.value)}
                        placeholder={`Provide a clear, concise answer in ${localeNames[activeTab as keyof typeof localeNames]}`}
                        rows={5}
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                {isLoading && <Loader />}

                {activeTab !== 'en' && !currentFaqId && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-800">
                        Please save the English version first before adding translations.
                    </div>
                )}
            </form>
        </div>
    );
}
