'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { Button } from '@/components/ui/adminUi/button';
import { localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Languages, Loader2 } from 'lucide-react';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

interface ModuleTranslation {
    locale: string;
    title: string;
    description: string;
    image: string;
    showOnHomePage: boolean;
    exists: boolean;
}

interface ModulesFormProps {
    moduleId?: string | null;
    onClose: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function ModulesForm({
    moduleId,
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: ModulesFormProps) {
    const { showToast, ToastComponent } = useToast();

    React.useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, ModuleTranslation>>(() => {
        const initial: Record<string, ModuleTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                title: '',
                description: '',
                image: '',
                showOnHomePage: false,
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentModuleId, setCurrentModuleId] = useState<string | null>(moduleId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);
    const preserveTabRef = React.useRef<string | null>(null);

    // Reset loading state on unmount
    React.useEffect(() => {
        return () => {
            setIsLoading(false);
            onLoadingChange?.(false);
        };
    }, [onLoadingChange]);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentModuleId(moduleId || null);
    }, [moduleId]);

    useEffect(() => {
        if (currentModuleId) {
            // Reset loading state first, then load
            setIsLoading(false);
            onLoadingChange?.(false);
            // Small delay to ensure state is reset before starting new load
            const timer = setTimeout(() => {
                loadAllTranslations();
            }, 0);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
            onLoadingChange?.(false);
            const reset: Record<string, ModuleTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    title: '',
                    description: '',
                    image: '',
                    showOnHomePage: false,
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentModuleId]);

    const loadAllTranslations = async (preserveActiveTab: boolean = false) => {
        if (!currentModuleId) {
            setIsLoading(false);
            return;
        }

        const currentActiveTab = preserveActiveTab ? activeTab : null;

        try {
            setIsLoading(true);
            onLoadingChange?.(true);
            console.log('Starting to load module:', currentModuleId);

            const response = await fetch(`/api/admin/modules?id=${encodeURIComponent(currentModuleId)}&all=true`);

            console.log('API response status:', response.status, response.ok);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API error response:', errorText);
                showToast('Failed to load module translations.', 'error');
                setIsLoading(false);
                onLoadingChange?.(false);
                return;
            }

            const data = await response.json();
            console.log('Raw API data:', data);
            
            const existingTranslations = data?.translations || [];
            console.log('Existing translations from API:', existingTranslations);

            // Get shared icon from English version if available
            let sharedImage = '';
            let sharedShowOnHomePage = false;
            
            const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
            if (englishVersion) {
                sharedImage = String(englishVersion.image || '');
                sharedShowOnHomePage = Boolean(englishVersion.showOnHomePage || false);
                console.log('English version found:', englishVersion);
            } else if (existingTranslations.length > 0) {
                sharedImage = String(existingTranslations[0].image || '');
                sharedShowOnHomePage = Boolean(existingTranslations[0].showOnHomePage || false);
                console.log('Using first translation as fallback:', existingTranslations[0]);
            }

            const loaded: Record<string, ModuleTranslation> = {};
            const existingLocales: string[] = [];

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        title: String(existing.title || ''),
                        description: String(existing.description || ''),
                        image: String(existing.image || sharedImage || ''),
                        showOnHomePage: Boolean(sharedShowOnHomePage !== undefined ? sharedShowOnHomePage : (existing.showOnHomePage || false)),
                        exists: true,
                    };
                    existingLocales.push(loc);
                    console.log(`Loaded translation for ${loc}:`, loaded[loc]);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        title: '',
                        description: '',
                        image: String(sharedImage || ''),
                        showOnHomePage: Boolean(sharedShowOnHomePage || false),
                        exists: false,
                    };
                }
            });
            
            console.log('All loaded translations:', loaded);

            // Ensure all translations have the same showOnHomePage (from English)
            if (sharedShowOnHomePage !== undefined) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].showOnHomePage = sharedShowOnHomePage;
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
            
            console.log('Form data loaded successfully:', {
                loaded,
                activeTab: preserveActiveTab && currentActiveTab ? currentActiveTab : (existingLocales.length > 0 ? existingLocales[0] : 'en'),
                currentTranslation: loaded[preserveActiveTab && currentActiveTab ? currentActiveTab : (existingLocales.length > 0 ? existingLocales[0] : 'en')]
            });
        } catch (error) {
            console.error('Error loading translations:', error);
            showToast('Failed to load module translations.', 'error');
        } finally {
            console.log('Resetting loading state in finally block');
            setIsLoading(false);
            onLoadingChange?.(false);
        }
    };

    const updateTranslation = (locale: string, field: 'title' | 'description' | 'image' | 'showOnHomePage', value: string | boolean) => {
        setTranslations((prev) => {
            const updated = {
                ...prev,
                [locale]: {
                    ...prev[locale],
                    [field]: value,
                },
            };
            if (field === 'image') {
                Object.keys(updated).forEach((loc) => {
                    updated[loc].image = value as string;
                });
            }
            if (field === 'showOnHomePage') {
                Object.keys(updated).forEach((loc) => {
                    updated[loc].showOnHomePage = value as boolean;
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
        if (!english || !english.title.trim() || !english.description.trim()) {
            showToast('Please fill in the English version first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);
            let successCount = 0;
            let errorCount = 0;

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

            if (english.description.trim()) {
                try {
                    const descRes = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: english.description,
                            sourceLocale: 'en',
                            targetLocale: activeTab,
                        }),
                    });
                    const descData = await descRes.json();
                    if (descRes.ok && descData.translatedText) {
                        updateTranslation(activeTab, 'description', descData.translatedText);
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
        const trimmedDescription = current.description.trim();
        const trimmedIcon = current.image.trim();

        if (!trimmedTitle || !trimmedDescription || !trimmedIcon) {
            const missingFields = [];
            if (!trimmedTitle) missingFields.push('Title');
            if (!trimmedDescription) missingFields.push('Description');
            if (!trimmedIcon) missingFields.push('Icon');
            showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        try {
            setIsSaving(true);

            const idToUse = currentModuleId || moduleId;

            if (!idToUse) {
                if (activeTab !== 'en') {
                    showToast('Please create the English version first.', 'error');
                    setIsSaving(false);
                    return;
                }

                const res = await fetch('/api/admin/modules', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: trimmedTitle,
                        description: trimmedDescription,
                        image: trimmedIcon,
                        showOnHomePage: current.showOnHomePage,
                        locale: 'en',
                    }),
                });
                const payload = await res.json();
                if (!res.ok) throw new Error(payload?.error || 'Failed to save module');

                if (payload && payload.id) {
                    setCurrentModuleId(payload.id);
                    setTranslations((prev) => ({
                        ...prev,
                        en: {
                            ...prev.en,
                            title: trimmedTitle,
                            description: trimmedDescription,
                            image: trimmedIcon,
                            showOnHomePage: current.showOnHomePage,
                            exists: true,
                        },
                    }));
                    setSavedLocales(['en']);
                }
                showToast('Module created successfully.', 'success');
                setIsSaving(false);
                if (onSave) {
                    await onSave();
                }
                return;
            }

            const res = await fetch(`/api/admin/modules?id=${encodeURIComponent(idToUse)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: trimmedTitle,
                    description: trimmedDescription,
                    image: trimmedIcon,
                    showOnHomePage: current.showOnHomePage,
                    locale: activeTab,
                }),
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

            // Update state with saved values - this ensures they show in the form immediately
            setTranslations((prev) => {
                const updated = {
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        title: trimmedTitle,
                        description: trimmedDescription,
                        image: trimmedIcon,
                        showOnHomePage: current.showOnHomePage,
                        exists: true,
                    },
                };
                console.log('After save - updated translations:', updated);
                console.log('Active tab:', activeTab, 'Current translation:', updated[activeTab]);
                return updated;
            });

            if (!savedLocales.includes(activeTab)) {
                setSavedLocales([...savedLocales, activeTab]);
            }

            showToast('Translation saved successfully.', 'success');
            setIsSaving(false);
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save module.';
            showToast(message, 'error');
            setIsSaving(false);
        }
    };

    const current = translations[activeTab] || {
        locale: 'en',
        title: '',
        description: '',
        image: '',
        showOnHomePage: false,
        exists: false,
    };
    
    // Debug: Log current translation being displayed
    React.useEffect(() => {
        console.log('Current translation for active tab:', {
            activeTab,
            current,
            allTranslations: translations
        });
    }, [activeTab, current, translations]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="space-y-5">
            {/* Language Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.title?.trim() || trans.description?.trim() || trans.image?.trim());
                        const exists = trans?.exists || false;

                        return (
                            <button
                                key={locale}
                                type="button"
                                onClick={() => setActiveTab(locale)}
                                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                                    isActive
                                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                                        : hasContent
                                            ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50'
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
            {activeTab !== 'en' && (
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

            {/* Form Fields */}
            <div className="space-y-4">
                <div>
                    <FieldLabel htmlFor="icon" required>
                        Icon
                    </FieldLabel>
                    <IconPicker
                        value={current.image}
                        onChange={(iconName) => updateTranslation(activeTab, 'image', iconName)}
                        placeholder="Select an icon..."
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="title" required>
                        Title
                    </FieldLabel>
                    <Input
                        id="title"
                        value={current.title}
                        onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
                        placeholder="Enter module title"
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="description" required>
                        Description
                    </FieldLabel>
                    <Textarea
                        id="description"
                        value={current.description}
                        onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
                        placeholder="Enter module description"
                        rows={4}
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="showOnHomePage">
                        Show on Home Page
                    </FieldLabel>
                    <Toggle
                        id="showOnHomePage"
                        checked={current.showOnHomePage}
                        onCheckedChange={(checked) => updateTranslation(activeTab, 'showOnHomePage', checked)}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    disabled={isSaving}
                >
                    Cancel
                </Button>
                <Button
                    type="button"
                    variant="primary"
                    onClick={handleSaveCurrentTab}
                    disabled={isSaving}
                >
                    {isSaving ? 'Saving...' : 'Save'}
                </Button>
            </div>
        </div>
    );
}
