'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { localeNames } from '@/i18n-config';
import { Languages, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { supportedLocales } from '@/config/site';

const locales = supportedLocales;

interface StoryTranslation {
    locale: string;
    title: string;
    content: string;
    count: string;
    screenshot: string;
    exists: boolean;
}

interface StoriesFormProps {
    storyId?: string | null;
    onClose: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function StoriesForm({
    storyId,
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: StoriesFormProps) {
    const { showToast, ToastComponent } = useToast();

    React.useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, StoryTranslation>>(() => {
        const initial: Record<string, StoryTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                title: '',
                content: '',
                count: '',
                screenshot: '',
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentStoryId, setCurrentStoryId] = useState<string | null>(storyId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);
    const preserveTabRef = React.useRef<string | null>(null);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentStoryId(storyId || null);
    }, [storyId]);

    useEffect(() => {
        if (currentStoryId) {
            const tabToPreserve = preserveTabRef.current;
            preserveTabRef.current = null;
            if (tabToPreserve) {
                loadAllTranslations(true, tabToPreserve);
            } else {
                loadAllTranslations(false);
            }
        } else {
            const reset: Record<string, StoryTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    title: '',
                    content: '',
                    count: '',
                    screenshot: '',
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllTranslations loads when currentStoryId changes
    }, [currentStoryId, storyId]);

    const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
        if (!currentStoryId) {
            return;
        }

        const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

        try {
            setIsLoading(true);
            onLoadingChange?.(true);

            const response = await fetch(`/api/admin/stories?id=${encodeURIComponent(currentStoryId)}&all=true`);

            if (!response.ok) {
                showToast('Failed to load story translations.', 'error');
                return;
            }

            const data = await response.json();
            const existingTranslations = data?.translations || [];

            const loaded: Record<string, StoryTranslation> = {};
            const existingLocales: string[] = [];
            let sharedScreenshot = '';

            const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
            if (englishVersion?.screenshot) {
                sharedScreenshot = englishVersion.screenshot;
            }

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        title: String(existing.title || ''),
                        content: String(existing.content || ''),
                        count: String(existing.count || ''),
                        screenshot: sharedScreenshot || existing.screenshot || '',
                        exists: true,
                    };
                    existingLocales.push(loc);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        title: '',
                        content: '',
                        count: '',
                        screenshot: sharedScreenshot || '',
                        exists: false,
                    };
                }
            });

            if (sharedScreenshot) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].screenshot = sharedScreenshot;
                });
            }

            // Title is now translatable, so we don't sync it across languages

            const englishCount = loaded['en']?.count || '';
            if (englishCount) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].count = englishCount;
                });
            }

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
            showToast('Failed to load story translations.', 'error');
        } finally {
            setIsLoading(false);
            onLoadingChange?.(false);
        }
    };

    const updateTranslation = (locale: string, field: 'title' | 'content' | 'count', value: string) => {
        setTranslations((prev) => {
            const updated = {
                ...prev,
                [locale]: {
                    ...prev[locale],
                    [field]: value,
                },
            };
            // Title is now translatable, so we don't sync it across languages
            if (field === 'count' && locale === 'en') {
                Object.keys(updated).forEach((loc) => {
                    updated[loc].count = value;
                });
            }
            return updated;
        });
    };

    const autoTranslate = async () => {
        if (activeTab === 'en') {
            showToast('Cannot auto-translate English. Please select another language.', 'error');
            return;
        }

        const english = translations['en'];
        if (!english || !english.content?.trim() || !english.title?.trim()) {
            showToast('Please fill in the English version first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);
            let successCount = 0;
            let errorCount = 0;

            // Translate title
            if (english.title.trim()) {
                try {
                    const titleRes = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: english.title,
                            sourceLocale: 'en',
                            targetLocale: activeTab,
                        }),
                    });
                    const titleData = await titleRes.json();
                    if (titleRes.ok && titleData.translatedText) {
                        updateTranslation(activeTab, 'title', titleData.translatedText);
                        successCount++;
                    } else {
                        errorCount++;
                    }
                } catch (error) {
                    errorCount++;
                }
            }

            if (english.content.trim()) {
                try {
                    const contentRes = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: english.content,
                            sourceLocale: 'en',
                            targetLocale: activeTab,
                        }),
                    });
                    const contentData = await contentRes.json();
                    if (contentRes.ok && contentData.translatedText) {
                        updateTranslation(activeTab, 'content', contentData.translatedText);
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

    const handleSaveCurrentTab = async () => {
        const current = translations[activeTab];
        const trimmedTitle = current.title.trim();
        const trimmedContent = current.content.trim();
        const trimmedCount = current.count.trim();

        if (!trimmedTitle || !trimmedContent) {
            const missingFields = [];
            if (!trimmedTitle) missingFields.push('Title');
            if (!trimmedContent) missingFields.push('Content');
            showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        try {
            setIsSaving(true);

            const idToUse = currentStoryId || storyId;

            if (!idToUse) {
                if (activeTab !== 'en') {
                    showToast('Please create the English version first.', 'error');
                    setIsSaving(false);
                    return;
                }

                const res = await fetch('/api/admin/stories', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: trimmedTitle,
                        content: trimmedContent,
                        count: trimmedCount || null,
                        screenshot: null,
                        locale: 'en',
                    }),
                });
                const payload = await res.json();
                if (!res.ok) throw new Error(payload?.error || 'Failed to save story');

                if (payload && payload.id) {
                    setCurrentStoryId(payload.id);
                    setTranslations((prev) => ({
                        ...prev,
                        en: {
                            ...prev.en,
                            exists: true,
                        },
                    }));
                    setSavedLocales(['en']);
                }
                showToast('Story created successfully.', 'success');
                setIsSaving(false);
                await new Promise(resolve => setTimeout(resolve, 100));
                if (onSave) {
                    await onSave();
                }
                return;
            }

            const res = await fetch(`/api/admin/stories?id=${encodeURIComponent(idToUse)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: trimmedTitle,
                    content: trimmedContent,
                    count: trimmedCount || null,
                    screenshot: null,
                    locale: activeTab,
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

            const tabToKeep = activeTab;
            preserveTabRef.current = tabToKeep;
            await loadAllTranslations(true, tabToKeep);

            showToast('Translation saved successfully.', 'success');
            setIsSaving(false);
            await new Promise(resolve => setTimeout(resolve, 100));
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save story.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const current = translations[activeTab] || { title: '', content: '', count: '', screenshot: '', exists: false };

    // Remove screenshot field from form - no longer needed

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="space-y-5">
            {/* Language Tabs */}
            <div className="border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.title || trans.content);
                        const exists = trans?.exists || false;
                        const tabLabel = localeNames[locale as keyof typeof localeNames] ?? locale;

                        return (
                            <button
                                key={locale}
                                type="button"
                                onClick={() => setActiveTab(locale)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                                    : hasContent
                                        ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{tabLabel}</span>
                                    {exists && (
                                        <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Auto Translate Button */}
            {activeTab !== 'en' && translations['en'] && translations['en'].title?.trim() && translations['en'].content?.trim() && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => autoTranslate()}
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

            {/* Form */}
            <form
                id="stories-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveCurrentTab();
                }}
                className="space-y-5"
            >
                <div className="space-y-1.5">
                    <FieldLabel required>
                        Title ({localeNames[activeTab as keyof typeof localeNames]})
                    </FieldLabel>
                    <Input
                        value={current.title}
                        onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
                        placeholder="Enter story title"
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel>
                        Count ({localeNames[activeTab as keyof typeof localeNames]})
                        {activeTab !== 'en' && (
                            <span className="text-xs text-gray-500 ml-1">(same as English)</span>
                        )}
                    </FieldLabel>
                    <Input
                        value={activeTab === 'en' ? current.count : (translations['en']?.count || current.count)}
                        onChange={(e) => {
                            if (activeTab === 'en') {
                                updateTranslation(activeTab, 'count', e.target.value);
                            } else {
                                updateTranslation('en', 'count', e.target.value);
                            }
                        }}
                        placeholder="e.g., 500+, 4.8/5, 45"
                        disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
                        className={activeTab !== 'en' ? 'bg-gray-50 cursor-not-allowed' : ''}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>Content ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
                    <Textarea
                        value={current.content}
                        onChange={(e) => updateTranslation(activeTab, 'content', e.target.value)}
                        placeholder="Write the story content"
                        rows={5}
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                {activeTab !== 'en' && !currentStoryId && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                        Please save the English version first before adding translations.
                    </div>
                )}
            </form>
        </div>
    );
}
