'use client';

import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Button } from '@/components/ui/adminUi/button';
import { ImageUpload } from '@/components/ui/adminUi/image-upload';
import { X, Plus, Languages, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supportedLocales } from '@/config/site';

const locales = supportedLocales;

type FormState = {
  title: string;
  description: string;
  icon: string;
  image: string;
  keyBenefits: string[];
  showOnHomePage: boolean;
};

interface ServiceTranslation {
  locale: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  keyBenefits: string[];
  showOnHomePage: boolean;
  exists: boolean;
}

interface ServicesFormProps {
  serviceId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function ServicesForm({
  serviceId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: ServicesFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, ServiceTranslation>>(() => {
    const initial: Record<string, ServiceTranslation> = {};
    locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        title: '',
        description: '',
        icon: '',
        image: '',
        keyBenefits: [],
        showOnHomePage: false,
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(serviceId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const preserveTabRef = React.useRef<string | null>(null);
  const [newKeyBenefit, setNewKeyBenefit] = useState<Record<string, string>>({});

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    const newId = serviceId || null;
    if (newId !== currentServiceId) {
      setCurrentServiceId(newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync serviceId to currentServiceId
  }, [serviceId]);

  useEffect(() => {
    if (currentServiceId) {
      const tabToPreserve = preserveTabRef.current;
      preserveTabRef.current = null;
      if (tabToPreserve) {
        loadAllTranslations(true, tabToPreserve);
      } else {
        loadAllTranslations(false);
      }
    } else {
      const reset: Record<string, ServiceTranslation> = {};
      locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          title: '',
          description: '',
          icon: '',
          image: '',
          keyBenefits: [],
          serviceHighlights: [],
          showOnHomePage: false,
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
      setNewKeyBenefit({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllTranslations loads when currentServiceId changes
  }, [currentServiceId]);

  const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
    if (!currentServiceId) return;

    const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

    try {
      setIsLoading(true);
      onLoadingChange?.(true);

      const response = await fetch(`/api/admin/services?id=${encodeURIComponent(currentServiceId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load service translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, ServiceTranslation> = {};
      const existingLocales: string[] = [];
      let sharedIcon = '';
      let sharedImage = '';
      let sharedShowOnHomePage = false;

      const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
      if (englishVersion) {
        sharedIcon = englishVersion.icon || '';
        sharedImage = englishVersion.image || '';
        sharedShowOnHomePage = englishVersion.showOnHomePage ?? false;
      }

      locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          loaded[loc] = {
            locale: loc,
            title: String(existing.title || ''),
            description: String(existing.description || ''),
            icon: sharedIcon || existing.icon || '',
            image: sharedImage || existing.image || '',
            keyBenefits: Array.isArray(existing.keyBenefits) ? existing.keyBenefits.map((f: any) => String(f)) : [],
            showOnHomePage: sharedShowOnHomePage,
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            locale: loc,
            title: '',
            description: '',
            icon: sharedIcon || '',
            image: sharedImage || '',
            keyBenefits: [],
            showOnHomePage: sharedShowOnHomePage,
            exists: false,
          };
        }
      });

      if (sharedIcon || sharedImage || sharedShowOnHomePage !== false) {
        Object.keys(loaded).forEach((loc) => {
          loaded[loc].icon = sharedIcon || loaded[loc].icon || '';
          loaded[loc].image = sharedImage || loaded[loc].image || '';
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
    } catch (error) {
      showToast('Failed to load service translations.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof FormState, value: string | boolean | string[]) => {
    setTranslations((prev) => {
      const updated: Record<string, ServiceTranslation> = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      if (field === 'icon' || field === 'image' || field === 'showOnHomePage') {
        Object.keys(updated).forEach((loc) => {
          if (field === 'icon') {
            updated[loc].icon = value as string;
          } else if (field === 'image') {
            updated[loc].image = value as string;
          } else if (field === 'showOnHomePage') {
            updated[loc].showOnHomePage = value as boolean;
          }
        });
      }
      return updated;
    });
  };

  const addKeyBenefit = (locale: string) => {
    const benefit = newKeyBenefit[locale]?.trim() || '';
    if (benefit) {
      setTranslations((prev) => {
        const current = prev[locale];
        if (!current || !current.keyBenefits) {
          return prev;
        }
        if (!current.keyBenefits.includes(benefit)) {
          return {
            ...prev,
            [locale]: {
              ...current,
              keyBenefits: [...current.keyBenefits, benefit],
            },
          };
        }
        return prev;
      });
      // Clear the input field after adding - use functional update to ensure state is current
      setNewKeyBenefit((prevBenefit) => {
        const updated = { ...prevBenefit };
        updated[locale] = '';
        return updated;
      });
    }
  };

  const removeKeyBenefit = (locale: string, index: number) => {
    const current = translations[locale];
    updateTranslation(locale, 'keyBenefits', current.keyBenefits.filter((_, i) => i !== index));
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

      // Translate title
      if (english.title.trim()) {
        try {
          const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.title,
              sourceLocale: 'en',
              targetLocale: activeTab,
            }),
          });
          const data = await res.json();
          if (res.ok && data.translatedText) {
            updateTranslation(activeTab, 'title', data.translatedText);
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }
      }

      // Translate description
      if (english.description.trim()) {
        try {
          const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.description,
              sourceLocale: 'en',
              targetLocale: activeTab,
            }),
          });
          const data = await res.json();
          if (res.ok && data.translatedText) {
            updateTranslation(activeTab, 'description', data.translatedText);
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }
      }

      // Translate key benefits
      if (english.keyBenefits.length > 0) {
        const translatedBenefits: string[] = [];
        for (const benefit of english.keyBenefits) {
          try {
            const res = await fetch('/api/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: benefit,
                sourceLocale: 'en',
                targetLocale: activeTab,
              }),
            });
            const data = await res.json();
            if (res.ok && data.translatedText) {
              translatedBenefits.push(data.translatedText);
              successCount++;
            } else {
              translatedBenefits.push(benefit);
              errorCount++;
            }
          } catch (error) {
            translatedBenefits.push(benefit);
            errorCount++;
          }
        }
        if (translatedBenefits.length > 0) {
          updateTranslation(activeTab, 'keyBenefits', translatedBenefits);
        }
      }

      if (errorCount > 0 && successCount === 0) {
        showToast('Translation failed. Please try again later or translate manually.', 'error');
      } else if (errorCount > 0) {
        showToast(`Partially translated. ${successCount} item(s) translated, ${errorCount} failed.`, 'warning');
      } else if (successCount > 0) {
        showToast(`Auto-translated ${successCount} item(s) successfully.`, 'success');
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

    // Automatically add any text in the input field to key benefits
    let finalKeyBenefits = [...(current.keyBenefits || [])];
    const newBenefit = newKeyBenefit[activeTab]?.trim();
    if (newBenefit && !finalKeyBenefits.includes(newBenefit)) {
      finalKeyBenefits.push(newBenefit);
      updateTranslation(activeTab, 'keyBenefits', finalKeyBenefits);
      setNewKeyBenefit({ ...newKeyBenefit, [activeTab]: '' });
    }

    const updatedCurrent = {
      ...current,
      keyBenefits: finalKeyBenefits,
    };

    const trimmedImage = (updatedCurrent.image || '').trim();
    if (!trimmedTitle || !trimmedDescription || !trimmedIcon || !trimmedImage ||
      !updatedCurrent.keyBenefits || updatedCurrent.keyBenefits.length === 0) {
      const missingFields = [];
      if (!trimmedTitle) missingFields.push('Title');
      if (!trimmedDescription) missingFields.push('Description');
      if (!trimmedIcon) missingFields.push('Icon');
      if (!trimmedImage) missingFields.push('Image');
      if (!updatedCurrent.keyBenefits || updatedCurrent.keyBenefits.length === 0) missingFields.push('Key Benefits');
      showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
      return;
    }

    try {
      setIsSaving(true);
      const idToUse = currentServiceId || serviceId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: trimmedTitle,
            description: trimmedDescription,
            icon: trimmedIcon,
            image: trimmedImage || null,
            keyBenefits: updatedCurrent.keyBenefits,
            showOnHomePage: updatedCurrent.showOnHomePage,
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save service');

        if (payload?.id) {
          setCurrentServiceId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: { ...prev.en, exists: true },
          }));
          setSavedLocales(['en']);
        }
        showToast('Service created successfully.', 'success');
        setIsSaving(false);
        if (onSave) {
          await onSave();
        }
        return;
      }

      const res = await fetch(`/api/admin/services?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: trimmedTitle,
          description: trimmedDescription,
          icon: trimmedIcon,
          image: trimmedImage || null,
          keyBenefits: updatedCurrent.keyBenefits,
          showOnHomePage: updatedCurrent.showOnHomePage,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

      setTranslations((prev) => ({
        ...prev,
        [activeTab]: { ...prev[activeTab], exists: true },
      }));

      if (!savedLocales.includes(activeTab)) {
        setSavedLocales([...savedLocales, activeTab]);
      }

      const tabToKeep = activeTab;
      preserveTabRef.current = tabToKeep;
      await loadAllTranslations(true, tabToKeep);

      showToast('Translation saved successfully.', 'success');
      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save service.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || {
    title: '',
    description: '',
    icon: '',
    image: '',
    keyBenefits: [],
    showOnHomePage: false,
    exists: false,
  };

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.title || trans.description);
            const exists = trans?.exists || false;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${isActive
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  } ${hasContent && !isActive ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span>{localeNames[locale as keyof typeof localeNames] ?? locale}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                  {hasContent && !exists && (
                    <span className="w-2 h-2 bg-yellow-500 rounded-full" title="Unsaved changes" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Auto Translate Button */}
      {activeTab !== 'en' && translations['en']?.description && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => autoTranslate()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10"
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
        id="services-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveCurrentTab();
        }}
        className="space-y-5"
      >
        {/* Icon - Common for all languages */}
        <div className="space-y-1.5">
          <FieldLabel required>Icon (Common for all languages)</FieldLabel>
          <IconPicker
            value={current.icon}
            onChange={(iconName) => {
              Object.keys(translations).forEach((loc) => {
                updateTranslation(loc, 'icon', iconName);
              });
            }}
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            placeholder="Select an icon..."
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
          />
        </div>

        {/* Image Upload - Common for all languages */}
        <div className="space-y-1.5">
          <FieldLabel required>Image (Common for all languages)</FieldLabel>
          {activeTab !== 'en' ? (
            <div className="relative">
              <ImageUpload
                value={current.image}
                onChange={() => { }} // Prevent changes when not on English tab
                disabled={true}
                folder="services"
                label=""
              />
              <div className="absolute inset-0 bg-gray-50/80 dark:bg-gray-900/80 rounded-md flex items-center justify-center pointer-events-none">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Image can only be edited in English tab
                </span>
              </div>
            </div>
          ) : (
            <ImageUpload
              value={current.image}
              onChange={(url) => {
                Object.keys(translations).forEach((loc) => {
                  updateTranslation(loc, 'image', url);
                });
              }}
              disabled={isSaving || isLoading || isTranslating}
              folder="services"
              label=""
            />
          )}
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Title ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.title}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
            placeholder="Enter service title"
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Description ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Textarea
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder="Enter service description"
            rows={4}
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        {/* Key Benefits */}
        <div className="space-y-1.5">
          <FieldLabel required>Key Benefits ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={newKeyBenefit[activeTab] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewKeyBenefit((prev) => {
                    const updated = { ...prev };
                    updated[activeTab] = value;
                    return updated;
                  });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addKeyBenefit(activeTab);
                  }
                }}
                placeholder="Add a key benefit..."
                disabled={isSaving || isLoading || isTranslating}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => addKeyBenefit(activeTab)}
                disabled={isSaving || isLoading || isTranslating || !newKeyBenefit[activeTab]?.trim()}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
            {current.keyBenefits.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {current.keyBenefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    {benefit}
                    <button
                      type="button"
                      onClick={() => removeKeyBenefit(activeTab, index)}
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

        {/* Show on Home Page - Common for all languages */}
        <div className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-800">
          <Toggle
            checked={current.showOnHomePage}
            onChange={(checked) => {
              Object.keys(translations).forEach((loc) => {
                updateTranslation(loc, 'showOnHomePage', checked);
              });
            }}
            label="Show on Home Page (Common for all languages)"
            description={activeTab === 'en'
              ? "Enable this to display this service on the home page services section."
              : ""}
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
          />
        </div>

        {isLoading && <Loader />}

        {activeTab !== 'en' && !currentServiceId && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
            Please save the English version first before adding translations.
          </div>
        )}
      </form>
    </div>
  );
}
