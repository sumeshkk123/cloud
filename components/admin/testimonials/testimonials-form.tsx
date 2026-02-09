'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { ImageUpload } from '@/components/ui/adminUi/image-upload';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { localeNames } from '@/i18n-config';
import { supportedLocales } from '@/config/site';
import { Languages, Loader2 } from 'lucide-react';

const locales = supportedLocales;

interface TestimonialTranslation {
    locale: string;
    name: string;
    slug: string;
    role: string;
    content: string;
    image: string;
    exists: boolean;
}

interface TestimonialsFormProps {
    testimonialId?: string | null;
    onClose: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function TestimonialsForm({
    testimonialId,
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: TestimonialsFormProps) {
    const { showToast, ToastComponent } = useToast();

    React.useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, TestimonialTranslation>>(() => {
        const initial: Record<string, TestimonialTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                name: '',
                slug: '',
                role: '',
                content: '',
                image: '',
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);
    const [currentTestimonialId, setCurrentTestimonialId] = useState<string | null>(testimonialId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);
    const preserveTabRef = React.useRef<string | null>(null);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentTestimonialId(testimonialId || null);
    }, [testimonialId]);

    useEffect(() => {
        if (currentTestimonialId) {
            const tabToPreserve = preserveTabRef.current;
            preserveTabRef.current = null;
            if (tabToPreserve) {
                loadAllTranslations(true, tabToPreserve);
            } else {
                loadAllTranslations(false);
            }
        } else {
            const reset: Record<string, TestimonialTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    name: '',
                    slug: '',
                    role: '',
                    content: '',
                    image: '',
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllTranslations loads when currentTestimonialId changes
    }, [currentTestimonialId, testimonialId]);

    const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
        if (!currentTestimonialId) {
            return;
        }

        const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

        try {
            setIsLoading(true);
            onLoadingChange?.(true);

            const response = await fetch(`/api/admin/testimonials?id=${encodeURIComponent(currentTestimonialId)}&all=true`);

            if (!response.ok) {
                showToast('Failed to load testimonial translations.', 'error');
                return;
            }

            const data = await response.json();
            const existingTranslations = data?.translations || [];

            const loaded: Record<string, TestimonialTranslation> = {};
            const existingLocales: string[] = [];
            let sharedImage = '';

            const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
            if (englishVersion?.image) {
                sharedImage = englishVersion.image;
            }

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        name: String(existing.name || ''),
                        slug: String((existing as any).slug || ''),
                        role: String(existing.role || ''),
                        content: String(existing.content || ''),
                        image: sharedImage || existing.image || '',
                        exists: true,
                    };
                    existingLocales.push(loc);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        name: '',
                        slug: '',
                        role: '',
                        content: '',
                        image: sharedImage || '',
                        exists: false,
                    };
                }
            });

            if (sharedImage) {
                Object.keys(loaded).forEach((loc) => {
                    loaded[loc].image = sharedImage;
                });
            }

            const englishName = loaded['en']?.name || '';
            const englishSlug = loaded['en']?.slug ?? '';
            if (englishName || englishSlug) {
                Object.keys(loaded).forEach((loc) => {
                    if (englishName) loaded[loc].name = englishName;
                    if (englishSlug) loaded[loc].slug = englishSlug;
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
            showToast('Failed to load testimonial translations.', 'error');
        } finally {
            setIsLoading(false);
            onLoadingChange?.(false);
        }
    };

    const updateTranslation = (locale: string, field: 'name' | 'slug' | 'role' | 'content' | 'image', value: string) => {
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
                    updated[loc].image = value;
                });
            }
            if (field === 'name' && locale === 'en') {
                Object.keys(updated).forEach((loc) => {
                    updated[loc].name = value;
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
        if (!english || !english.content.trim() || !english.name.trim()) {
            showToast('Please fill in the English version first.', 'error');
            return;
        }

        try {
            setIsTranslating(true);
            let successCount = 0;
            let errorCount = 0;

            if (english.role.trim()) {
                try {
                    const roleRes = await fetch('/api/translate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: english.role,
                            sourceLocale: 'en',
                            targetLocale: activeTab,
                        }),
                    });
                    const roleData = await roleRes.json();
                    if (roleRes.ok && roleData.translatedText) {
                        updateTranslation(activeTab, 'role', roleData.translatedText);
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
        const trimmedName = current.name.trim();
        const trimmedRole = current.role.trim();
        const trimmedContent = current.content.trim();
        const trimmedImage = current.image.trim();

        if (!trimmedName || !trimmedRole || !trimmedContent || !trimmedImage) {
            const missingFields = [];
            if (!trimmedName) missingFields.push('Name');
            if (!trimmedRole) missingFields.push('Role');
            if (!trimmedContent) missingFields.push('Testimonial');
            if (!trimmedImage) missingFields.push('Image');
            showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        try {
            setIsSaving(true);

            const idToUse = currentTestimonialId || testimonialId;

            if (!idToUse) {
                if (activeTab !== 'en') {
                    showToast('Please create the English version first.', 'error');
                    setIsSaving(false);
                    return;
                }

                const res = await fetch('/api/admin/testimonials', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: trimmedName,
                        slug: (translations['en']?.slug || '').trim() || undefined,
                        role: trimmedRole,
                        content: trimmedContent,
                        image: trimmedImage,
                        locale: 'en',
                    }),
                });
                const payload = await res.json();
                if (!res.ok) throw new Error(payload?.error || 'Failed to save testimonial');

                if (payload && payload.id) {
                    setCurrentTestimonialId(payload.id);
                    setTranslations((prev) => ({
                        ...prev,
                        en: {
                            ...prev.en,
                            exists: true,
                        },
                    }));
                    setSavedLocales(['en']);
                }
                showToast('Testimonial created successfully.', 'success');
                setIsSaving(false);
                await new Promise(resolve => setTimeout(resolve, 100));
                if (onSave) {
                    await onSave();
                }
                return;
            }

            const res = await fetch(`/api/admin/testimonials?id=${encodeURIComponent(idToUse)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: trimmedName,
                    slug: (translations['en']?.slug || '').trim() || undefined,
                    role: trimmedRole,
                    content: trimmedContent,
                    image: trimmedImage,
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
            const message = error instanceof Error ? error.message : 'Unable to save testimonial.';
            showToast(message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const current = translations[activeTab] || { name: '', slug: '', role: '', content: '', image: '', exists: false };

    return (
        <div className="space-y-5">
            {/* Language Tabs */}
            <div className="border-b border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.name || trans.content);
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
            {activeTab !== 'en' && translations['en']?.content && (
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => autoTranslate()}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition-colors border border-primary-200 bg-primary-50/50"
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

            {/* Form */}
            <form
                id="testimonials-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveCurrentTab();
                }}
                className="space-y-5"
            >
                <div className="space-y-1.5">
                    <FieldLabel required>
                        Name ({localeNames[activeTab as keyof typeof localeNames]})
                        {activeTab !== 'en' && (
                            <span className="text-xs text-gray-500 ml-1">(same as English)</span>
                        )}
                    </FieldLabel>
                    <Input
                        value={activeTab === 'en' ? current.name : (translations['en']?.name || current.name)}
                        onChange={(e) => {
                            if (activeTab === 'en') {
                                updateTranslation(activeTab, 'name', e.target.value);
                            } else {
                                updateTranslation('en', 'name', e.target.value);
                            }
                        }}
                        placeholder="Enter full name"
                        disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
                        className={activeTab !== 'en' ? 'bg-gray-50 cursor-not-allowed' : ''}
                    />
                </div>

                {activeTab === 'en' && (
                    <div className="space-y-1.5">
                        <FieldLabel>URL slug</FieldLabel>
                        <Input
                            value={current.slug || ''}
                            onChange={(e) => updateTranslation('en', 'slug', e.target.value)}
                            placeholder="e.g. giovanni-p (auto from name if empty)"
                            disabled={isSaving || isLoading || isTranslating}
                        />
                        <p className="text-xs text-gray-500">Used in /testimonials/[slug]. Leave empty to auto-generate from name.</p>
                    </div>
                )}

                <div className="space-y-1.5">
                    <FieldLabel required>Role ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
                    <Input
                        value={current.role}
                        onChange={(e) => updateTranslation(activeTab, 'role', e.target.value)}
                        placeholder="e.g., Founder"
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>Testimonial ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
                    <Textarea
                        value={current.content}
                        onChange={(e) => updateTranslation(activeTab, 'content', e.target.value)}
                        placeholder="Write the testimonial"
                        rows={5}
                        disabled={isSaving || isLoading || isTranslating}
                    />
                </div>

                <div className="space-y-1.5">
                    <FieldLabel required>Profile Image (Common for all languages)</FieldLabel>
                    <div className="max-w-[340px] relative">
                        {activeTab !== 'en' ? (
                            <>
                                <ImageUpload
                                    key={`image-${current.image || 'empty'}`}
                                    value={current.image}
                                    onChange={() => { }} // Prevent changes when not on English tab
                                    label=""
                                    disabled={true}
                                />
                                <div className="absolute inset-0 bg-gray-50/80 dark:bg-gray-900/80 rounded-md flex items-center justify-center pointer-events-none">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        Image can only be edited in English tab
                                    </span>
                                </div>
                            </>
                        ) : (
                            <ImageUpload
                                key={`image-${current.image || 'empty'}`}
                                value={current.image}
                                onChange={(url) => {
                                    Object.keys(translations).forEach((loc) => {
                                        updateTranslation(loc, 'image', url);
                                    });
                                }}
                                label=""
                                disabled={isSaving || isLoading || isTranslating}
                            />
                        )}
                    </div>
                    {current.image && (
                        <div className="text-xs text-gray-500 mt-1">
                            Image URL: {current.image}
                        </div>
                    )}
                </div>

                {isLoading && <Loader />}

                {activeTab !== 'en' && !currentTestimonialId && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                        Please save the English version first before adding translations.
                    </div>
                )}
            </form>
        </div>
    );
}
