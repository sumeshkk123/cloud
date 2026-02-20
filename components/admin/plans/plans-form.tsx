'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Button } from '@/components/ui/adminUi/button';
import { X, Plus, Loader2, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

import { supportedLocales } from '@/config/site';
const locales = supportedLocales;

type FormState = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  showOnHomePage: boolean;
};

interface PlanTranslation extends FormState {
  locale: string;
  exists: boolean;
}

interface PlansFormProps {
  planId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

const emptyTranslation = (locale: string, overrides: Partial<PlanTranslation> = {}): PlanTranslation => ({
  locale,
  slug: '',
  title: '',
  subtitle: '',
  description: '',
  icon: '',
  features: [],
  showOnHomePage: false,
  exists: false,
  ...overrides,
});

export function PlansForm({
  planId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: PlansFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, PlanTranslation>>(() => {
    const initial: Record<string, PlanTranslation> = {};
    locales.forEach((loc) => {
      initial[loc] = emptyTranslation(loc);
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isTranslatingAll, setIsTranslatingAll] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState<string | null>(planId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const preserveTabRef = React.useRef<string | null>(null);
  const [newFeature, setNewFeature] = useState<Record<string, string>>({});

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    const newId = planId || null;
    if (newId !== currentPlanId) {
      setCurrentPlanId(newId);
    }
  }, [planId]);

  useEffect(() => {
    if (currentPlanId) {
      const tabToPreserve = preserveTabRef.current;
      preserveTabRef.current = null;
      if (tabToPreserve) {
        loadAllTranslations(true, tabToPreserve);
      } else {
        loadAllTranslations(false);
      }
    } else {
      const reset: Record<string, PlanTranslation> = {};
      locales.forEach((loc) => {
        reset[loc] = emptyTranslation(loc);
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
      setNewFeature({});
    }
  }, [currentPlanId]);

  const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
    if (!currentPlanId) return;

    const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

    try {
      setIsLoading(true);
      onLoadingChange?.(true);

      const response = await fetch(`/api/admin/plans?id=${encodeURIComponent(currentPlanId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load plan translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, PlanTranslation> = {};
      const existingLocales: string[] = [];
      let sharedIcon = '';
      let sharedShowOnHomePage = false;

      const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
      if (englishVersion) {
        sharedIcon = englishVersion.icon || '';
        sharedShowOnHomePage = englishVersion.showOnHomePage ?? false;
      }

      locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          loaded[loc] = {
            locale: loc,
            slug: String(existing.slug || ''),
            title: String(existing.title || ''),
            subtitle: String(existing.subtitle || ''),
            description: String(existing.description || ''),
            icon: sharedIcon || existing.icon || '',
            features: Array.isArray(existing.features) ? existing.features.map((f: any) => String(f)) : [],
            showOnHomePage: sharedShowOnHomePage,
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            ...emptyTranslation(loc),
            icon: sharedIcon,
            showOnHomePage: sharedShowOnHomePage,
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
      showToast('Failed to load plan translations.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof FormState, value: string | boolean | string[]) => {
    setTranslations((prev) => {
      const updated: Record<string, PlanTranslation> = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      if (field === 'icon' || field === 'showOnHomePage') {
        Object.keys(updated).forEach((loc) => {
          if (field === 'icon') updated[loc].icon = value as string;
          else updated[loc].showOnHomePage = value as boolean;
        });
      }
      return updated;
    });
  };

  const addFeature = (locale: string) => {
    const feature = newFeature[locale]?.trim() || '';
    if (feature) {
      setTranslations((prev) => {
        const current = prev[locale];
        if (!current || current.features.includes(feature)) return prev;
        return {
          ...prev,
          [locale]: {
            ...current,
            features: [...current.features, feature],
          },
        };
      });
      setNewFeature((prev) => ({ ...prev, [locale]: '' }));
    }
  };

  const removeFeature = (locale: string, index: number) => {
    const current = translations[locale];
    updateTranslation(locale, 'features', current.features.filter((_, i) => i !== index));
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

      // Translate subtitle
      if (english.subtitle?.trim()) {
        try {
          const subtitleRes = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.subtitle,
              sourceLocale: 'en',
              targetLocale: activeTab,
            }),
          });
          const subtitleData = await subtitleRes.json();
          if (subtitleRes.ok && subtitleData.translatedText) {
            updateTranslation(activeTab, 'subtitle', subtitleData.translatedText);
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
          const descriptionRes = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.description,
              sourceLocale: 'en',
              targetLocale: activeTab,
            }),
          });
          const descriptionData = await descriptionRes.json();
          if (descriptionRes.ok && descriptionData.translatedText) {
            updateTranslation(activeTab, 'description', descriptionData.translatedText);
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

  const translateToAllLanguages = async () => {
    const english = translations['en'];
    if (!english || !english.title.trim() || !english.description.trim()) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslatingAll(true);
      let successCount = 0;
      let errorCount = 0;

      for (const locale of locales) {
        if (locale === 'en') continue;

        try {
          // Translate title
          const titleRes = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.title,
              sourceLocale: 'en',
              targetLocale: locale,
            }),
          });
          const titleData = await titleRes.json();
          const translatedTitle = titleRes.ok && titleData.translatedText ? titleData.translatedText : '';

          // Translate subtitle
          let translatedSubtitle = '';
          if (english.subtitle?.trim()) {
            const subtitleRes = await fetch('/api/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: english.subtitle,
                sourceLocale: 'en',
                targetLocale: locale,
              }),
            });
            const subtitleData = await subtitleRes.json();
            translatedSubtitle = subtitleRes.ok && subtitleData.translatedText ? subtitleData.translatedText : '';
          }

          // Translate description
          const descriptionRes = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.description,
              sourceLocale: 'en',
              targetLocale: locale,
            }),
          });
          const descriptionData = await descriptionRes.json();
          const translatedDescription = descriptionRes.ok && descriptionData.translatedText ? descriptionData.translatedText : '';

          if (translatedTitle && translatedDescription) {
            updateTranslation(locale, 'title', translatedTitle);
            if (translatedSubtitle) {
              updateTranslation(locale, 'subtitle', translatedSubtitle);
            }
            updateTranslation(locale, 'description', translatedDescription);
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
        showToast(`Partially translated. ${successCount} language(s) translated, ${errorCount} failed.`, 'warning');
      } else if (successCount > 0) {
        showToast(`Auto-translated to ${successCount} language(s) successfully.`, 'success');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Translation failed.';
      showToast(`Translation error: ${errorMessage}. Please try again or translate manually.`, 'error');
    } finally {
      setIsTranslatingAll(false);
    }
  };

  const handleSaveCurrentTab = async () => {
    const current = translations[activeTab];
    const trimmedTitle = current.title.trim();
    const trimmedDescription = current.description.trim();
    const trimmedIcon = current.icon.trim();

    let finalFeatures = [...(current.features || [])];
    const newFeatureText = newFeature[activeTab]?.trim();
    if (newFeatureText && !finalFeatures.includes(newFeatureText)) {
      finalFeatures.push(newFeatureText);
      updateTranslation(activeTab, 'features', finalFeatures);
      setNewFeature((prev) => ({ ...prev, [activeTab]: '' }));
    }
    const updatedCurrent = { ...current, features: finalFeatures };

    if (!trimmedTitle || !trimmedDescription) {
      showToast('Please fill in Title and Description.', 'error');
      return;
    }

    if (activeTab === 'en' && !trimmedIcon) {
      showToast('Please select an Icon for the English version.', 'error');
      return;
    }

    try {
      setIsSaving(true);
      const idToUse = currentPlanId || planId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/plans', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug: updatedCurrent.slug?.trim() || null,
            title: trimmedTitle,
            subtitle: updatedCurrent.subtitle?.trim() || null,
            description: trimmedDescription,
            icon: trimmedIcon,
            locale: 'en',
            showOnHomePage: updatedCurrent.showOnHomePage,
            features: updatedCurrent.features?.length ? updatedCurrent.features : null,
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save plan');

        if (payload?.id) {
          setCurrentPlanId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: { ...prev.en, exists: true },
          }));
          setSavedLocales(['en']);
        }
        showToast('Plan created successfully.', 'success');
        if (onSave) await onSave();
        setIsSaving(false);
        return;
      }

      const res = await fetch(`/api/admin/plans?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: updatedCurrent.slug?.trim() || null,
          title: trimmedTitle,
          subtitle: updatedCurrent.subtitle?.trim() || null,
          description: trimmedDescription,
          icon: updatedCurrent.icon?.trim() || null,
          locale: activeTab,
          showOnHomePage: updatedCurrent.showOnHomePage,
          features: updatedCurrent.features?.length ? updatedCurrent.features : null,
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
      if (onSave) await onSave();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save plan.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || emptyTranslation(activeTab);

  return (
    <div className="space-y-5">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.title || trans.description);
            const exists = trans?.exists || false;
            const tabLabel = localeNames[locale as keyof typeof localeNames] ?? locale;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors',
                  isActive
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                  hasContent && !isActive && 'bg-green-50 dark:bg-green-900/10'
                )}
              >
                <div className="flex items-center gap-2">
                  <span>{tabLabel}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                  {hasContent && !exists && (
                    <span className="w-2 h-2 bg-yellow-500 rounded-full" title="Unsaved changes" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Auto Translate Button */}
      {activeTab !== 'en' && translations['en']?.title && translations['en']?.description && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={autoTranslate}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTranslating || !translations['en']?.title.trim() || !translations['en']?.description.trim()}
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

      <form
        id="plans-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveCurrentTab();
        }}
        className="space-y-5"
      >
        <div className="space-y-1.5">
          <FieldLabel>Slug ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.slug}
            onChange={(e) => updateTranslation(activeTab, 'slug', e.target.value)}
            placeholder="custom-plan-slug"
            disabled={isSaving || isLoading}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required={activeTab === 'en'}>Icon {activeTab === 'en' ? '(Common for all languages)' : ''}</FieldLabel>
          <IconPicker
            value={current.icon}
            onChange={(iconName) => {
              locales.forEach((loc) => updateTranslation(loc, 'icon', iconName));
            }}
            disabled={isSaving || isLoading || activeTab !== 'en'}
            placeholder="Select an icon..."
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Title ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.title}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
            placeholder="Plan title"
            disabled={isSaving || isLoading}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Subtitle ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.subtitle}
            onChange={(e) => updateTranslation(activeTab, 'subtitle', e.target.value)}
            placeholder="Short subtitle"
            disabled={isSaving || isLoading}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Description ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Textarea
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder="Plan description"
            rows={4}
            disabled={isSaving || isLoading}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Features ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={newFeature[activeTab] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewFeature((prev) => ({ ...prev, [activeTab]: value }));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addFeature(activeTab);
                  }
                }}
                placeholder="Add a feature..."
                disabled={isSaving || isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => addFeature(activeTab)}
                disabled={isSaving || isLoading || !newFeature[activeTab]?.trim()}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
            {current.features.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {current.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeFeature(activeTab, index)}
                      disabled={isSaving || isLoading}
                      className={cn(
                        'text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors',
                        (isSaving || isLoading) && 'opacity-50 cursor-not-allowed'
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

        <div className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-800">
          <Toggle
            checked={current.showOnHomePage}
            onChange={(checked) => {
              locales.forEach((loc) => updateTranslation(loc, 'showOnHomePage', checked));
            }}
            label="Show on Home Page (Common for all languages)"
            description={
              activeTab === 'en'
                ? 'Enable to display this plan on the home page.'
                : ''
            }
            disabled={(isSaving || isLoading) || activeTab !== 'en'}
          />
        </div>

        {isLoading && <Loader />}

        {activeTab !== 'en' && !currentPlanId && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
            Please save the English version first before adding translations.
          </div>
        )}
      </form>
    </div>
  );
}
