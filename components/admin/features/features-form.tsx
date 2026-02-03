'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { Button } from '@/components/ui/adminUi/button';
import { Select } from '@/components/ui/adminUi/select';
import { localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Languages, Loader2, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

// Predefined feature categories - can be replaced with database categories later
const FEATURE_CATEGORIES = [
    { value: 'Compensation', label: 'Compensation' },
    { value: 'AI', label: 'AI' },
    { value: 'Core', label: 'Core' },
    { value: 'Performance', label: 'Performance' },
    { value: 'Security', label: 'Security' },
    { value: 'Commerce', label: 'Commerce' },
    { value: 'Integrations', label: 'Integrations' },
    { value: 'Enablement', label: 'Enablement' },
    { value: 'Unique', label: 'Unique' },
];

interface FeatureTranslation {
    locale: string;
    title: string;
    description: string;
    icon: string;
    category: string;
    showOnHomePage: boolean;
    features: string[];
    exists: boolean;
}

interface FeaturesFormProps {
    featureId?: string | null;
    onClose: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
    onSaveRequest?: () => void; // Callback to trigger save from parent
}

export function FeaturesForm({
    featureId,
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
    onSaveRequest,
}: FeaturesFormProps) {
    const { showToast, ToastComponent } = useToast();

    React.useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, FeatureTranslation>>(() => {
        const initial: Record<string, FeatureTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                title: '',
                description: '',
                icon: '',
                category: '',
                showOnHomePage: false,
                features: [],
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentFeatureId, setCurrentFeatureId] = useState<string | null>(featureId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);
    const [newFeature, setNewFeature] = useState('');

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentFeatureId(featureId || null);
    }, [featureId]);

    useEffect(() => {
        if (currentFeatureId) {
            loadAllTranslations();
        } else {
            setIsLoading(false);
            onLoadingChange?.(false);
            const reset: Record<string, FeatureTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    title: '',
                    description: '',
                    icon: '',
                    category: '',
                    showOnHomePage: false,
                    features: [],
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
        }
    }, [currentFeatureId]);

    const loadAllTranslations = async () => {
        if (!currentFeatureId) return;

        try {
            setIsLoading(true);
            onLoadingChange?.(true);

            const response = await fetch(`/api/admin/features?id=${encodeURIComponent(currentFeatureId)}&all=true`);

            if (!response.ok) {
                showToast('Failed to load feature translations.', 'error');
                setIsLoading(false);
                onLoadingChange?.(false);
                return;
            }

            const data = await response.json();
            const existingTranslations = data?.translations || [];

            let sharedIcon = '';
            let sharedCategory = '';
            let sharedShowOnHomePage = false;
            
            const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
            if (englishVersion) {
                sharedIcon = String(englishVersion.icon || '');
                sharedCategory = String(englishVersion.category || '');
                sharedShowOnHomePage = Boolean(englishVersion.showOnHomePage || false);
            } else if (existingTranslations.length > 0) {
                sharedIcon = String(existingTranslations[0].icon || '');
                sharedCategory = String(existingTranslations[0].category || '');
                sharedShowOnHomePage = Boolean(existingTranslations[0].showOnHomePage || false);
            }

            const loaded: Record<string, FeatureTranslation> = {};
            const existingLocales: string[] = [];

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        title: String(existing.title || ''),
                        description: String(existing.description || ''),
                        icon: String(existing.icon || sharedIcon || ''),
                        category: String(existing.category || sharedCategory || ''),
                        showOnHomePage: Boolean(sharedShowOnHomePage !== undefined ? sharedShowOnHomePage : (existing.showOnHomePage || false)),
                        features: Array.isArray(existing.features) ? existing.features.map((f: any) => String(f)) : [],
                        exists: true,
                    };
                    existingLocales.push(loc);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        title: '',
                        description: '',
                        icon: String(sharedIcon || ''),
                        category: String(sharedCategory || ''),
                        showOnHomePage: Boolean(sharedShowOnHomePage || false),
                        features: [],
                        exists: false,
                    };
                }
            });

            if (sharedShowOnHomePage !== undefined) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].showOnHomePage = sharedShowOnHomePage;
                });
            }

            // Sync category across all locales (category is shared)
            if (sharedCategory) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].category = sharedCategory;
                });
            }

            setTranslations(loaded);
            setSavedLocales(existingLocales);

            if (existingLocales.length > 0) {
                setActiveTab(existingLocales[0]);
            } else {
                setActiveTab('en');
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            showToast('Failed to load feature translations.', 'error');
        } finally {
            setIsLoading(false);
            onLoadingChange?.(false);
        }
    };

    const updateTranslation = (locale: string, field: keyof FeatureTranslation, value: string | boolean | string[]) => {
        setTranslations((prev) => {
            const updated = {
                ...prev,
                [locale]: {
                    ...prev[locale],
                    [field]: value,
                },
            };
            if (field === 'icon' || field === 'category' || field === 'showOnHomePage') {
                Object.keys(updated).forEach((loc) => {
                    if (field === 'icon') {
                        updated[loc].icon = value as string;
                    } else if (field === 'category') {
                        updated[loc].category = value as string;
                    } else if (field === 'showOnHomePage') {
                        updated[loc].showOnHomePage = value as boolean;
                    }
                });
            }
            return updated;
        });
    };

    const addFeature = (locale: string) => {
        const trimmed = newFeature.trim();
        if (trimmed) {
            const current = translations[locale];
            const currentFeatures = current?.features || [];
            if (!currentFeatures.includes(trimmed)) {
                updateTranslation(locale, 'features', [...currentFeatures, trimmed]);
                setNewFeature('');
            }
        }
    };

    const removeFeature = (locale: string, index: number) => {
        const current = translations[locale];
        const currentFeatures = current?.features || [];
        updateTranslation(locale, 'features', currentFeatures.filter((_, i) => i !== index));
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

            // Translate features
            if (english.features && english.features.length > 0) {
                const translatedFeatures: string[] = [];
                for (const feature of english.features) {
                    try {
                        const featureRes = await fetch('/api/translate', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                text: feature,
                                sourceLocale: 'en',
                                targetLocale: activeTab,
                            }),
                        });
                        const featureData = await featureRes.json();
                        if (featureRes.ok && featureData.translatedText) {
                            translatedFeatures.push(featureData.translatedText);
                            successCount++;
                        } else {
                            translatedFeatures.push(feature); // Fallback to original
                            errorCount++;
                        }
                    } catch (error) {
                        translatedFeatures.push(feature); // Fallback to original
                        errorCount++;
                    }
                }
                updateTranslation(activeTab, 'features', translatedFeatures);
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
        const trimmedIcon = current.icon.trim();
        // Always use English category (category is shared across all locales)
        const englishCategory = translations['en']?.category || current.category;
        const trimmedCategory = englishCategory.trim();

        if (!trimmedTitle || !trimmedDescription || !trimmedIcon || !trimmedCategory) {
            const missingFields = [];
            if (!trimmedTitle) missingFields.push('Title');
            if (!trimmedDescription) missingFields.push('Description');
            if (!trimmedIcon) missingFields.push('Icon');
            if (!trimmedCategory) missingFields.push('Category');
            showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        try {
            setIsSaving(true);
            onSavingChange?.(true);

            const idToUse = currentFeatureId || 'new';
            const url = idToUse === 'new' 
                ? '/api/admin/features'
                : `/api/admin/features?id=${encodeURIComponent(idToUse)}`;

            let allFeatures = [...(current.features || [])];
            const trimmedNewFeature = newFeature.trim();
            if (trimmedNewFeature && !allFeatures.includes(trimmedNewFeature)) {
                allFeatures.push(trimmedNewFeature);
                setNewFeature('');
            }

            const res = await fetch(url, {
                method: idToUse === 'new' ? 'POST' : 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: trimmedTitle,
                    description: trimmedDescription,
                    icon: trimmedIcon,
                    category: trimmedCategory, // Always use English category
                    showOnHomePage: current.showOnHomePage,
                    locale: activeTab,
                    features: allFeatures.length > 0 ? allFeatures : null,
                }),
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to save feature');

            if (idToUse === 'new' && payload.id) {
                setCurrentFeatureId(payload.id);
            }

            setTranslations((prev) => {
                const updated = {
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        title: trimmedTitle,
                        description: trimmedDescription,
                        icon: trimmedIcon,
                        category: trimmedCategory,
                        showOnHomePage: current.showOnHomePage,
                        features: allFeatures,
                        exists: true,
                    },
                };
                return updated;
            });

            if (!savedLocales.includes(activeTab)) {
                setSavedLocales([...savedLocales, activeTab]);
            }

            showToast('Feature saved successfully.', 'success');
            setIsSaving(false);
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save feature.';
            showToast(message, 'error');
            setIsSaving(false);
        } finally {
            onSavingChange?.(false);
        }
    };

    const current = translations[activeTab] || {
        locale: 'en',
        title: '',
        description: '',
        icon: '',
        category: '',
        showOnHomePage: false,
        features: [],
        exists: false,
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <form 
            id="features-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleSaveCurrentTab();
            }}
            className="space-y-5"
            data-features-form
        >
            {/* Language Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.title?.trim() || trans.description?.trim() || trans.icon?.trim());
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
                        value={current.icon}
                        onChange={(iconName) => updateTranslation(activeTab, 'icon', iconName)}
                        placeholder="Select an icon..."
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="category" required>
                        Category (Common for all languages)
                    </FieldLabel>
                    <Select
                        id="category"
                        name="category"
                        value={current.category || ''}
                        onValueChange={(value) => updateTranslation(activeTab, 'category', value)}
                        options={FEATURE_CATEGORIES}
                        placeholder="Select a category"
                        required
                        disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
                        className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
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
                        placeholder="Enter feature title"
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
                        placeholder="Enter feature description"
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

                <div className="space-y-1.5">
                    <FieldLabel>Features</FieldLabel>
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <Input
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                                placeholder="Enter a feature"
                                disabled={isSaving || isLoading || isTranslating}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addFeature(activeTab);
                                    }
                                }}
                            />
                            <Button
                                type="button"
                                onClick={() => addFeature(activeTab)}
                                disabled={isSaving || isLoading || isTranslating || !newFeature.trim()}
                                variant="secondary"
                                leftIcon={<Plus className="h-4 w-4" />}
                            >
                                Add
                            </Button>
                        </div>
                        {(current.features || []).length > 0 && (
                            <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                                {(current.features || []).map((feature, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        {feature}
                                        <button
                                            type="button"
                                            onClick={() => removeFeature(activeTab, index)}
                                            disabled={isSaving || isLoading || isTranslating}
                                            className={cn(
                                                "text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors",
                                                (isSaving || isLoading || isTranslating) && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}
