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
import { Languages, Loader2 } from 'lucide-react';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

type FormState = {
  title: string;
  description: string;
  icon: string;
  showOnHomePage: boolean;
};

interface IndustrySolutionTranslation {
  locale: string;
  title: string;
  description: string;
  icon: string;
  showOnHomePage: boolean;
  exists: boolean;
}

interface IndustrySolutionsFormProps {
  solutionId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function IndustrySolutionsForm({
  solutionId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: IndustrySolutionsFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, IndustrySolutionTranslation>>(() => {
    const initial: Record<string, IndustrySolutionTranslation> = {};
    locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        title: '',
        description: '',
        icon: '',
        showOnHomePage: false,
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentSolutionId, setCurrentSolutionId] = useState<string | null>(solutionId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const preserveTabRef = React.useRef<string | null>(null);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    const newId = solutionId || null;
    if (newId !== currentSolutionId) {
      setCurrentSolutionId(newId);
    }
  }, [solutionId]);

  useEffect(() => {
    if (currentSolutionId) {
      const tabToPreserve = preserveTabRef.current;
      preserveTabRef.current = null;
      if (tabToPreserve) {
        loadAllTranslations(true, tabToPreserve);
      } else {
        loadAllTranslations(false);
      }
    } else {
      const reset: Record<string, IndustrySolutionTranslation> = {};
      locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          title: '',
          description: '',
          icon: '',
          showOnHomePage: false,
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
    }
  }, [currentSolutionId]);

  const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
    if (!currentSolutionId) {
      return;
    }

    const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

    try {
      setIsLoading(true);
      onLoadingChange?.(true);

      const response = await fetch(`/api/admin/industry-solutions?id=${encodeURIComponent(currentSolutionId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load industry solution translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, IndustrySolutionTranslation> = {};
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
            title: String(existing.title || ''),
            description: String(existing.description || ''),
            icon: sharedIcon || existing.icon || '',
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
            showOnHomePage: sharedShowOnHomePage,
            exists: false,
          };
        }
      });

      if (sharedIcon || sharedShowOnHomePage !== false) {
        Object.keys(loaded).forEach((loc) => {
          loaded[loc].icon = sharedIcon || loaded[loc].icon || '';
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
      showToast('Failed to load industry solution translations.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof FormState, value: string | boolean) => {
    setTranslations((prev) => {
      const updated = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      if (field === 'icon' || field === 'showOnHomePage') {
        Object.keys(updated).forEach((loc) => {
          if (field === 'icon') {
            updated[loc].icon = value as string;
          } else if (field === 'showOnHomePage') {
            updated[loc].showOnHomePage = value as boolean;
          }
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
        showToast(
          `Translation failed. ${errorCount > 1 ? 'All translations failed.' : 'The translation service may be unavailable or rate-limited. Please try again later or translate manually.'}`,
          'error'
        );
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

      const idToUse = currentSolutionId || solutionId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/industry-solutions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: trimmedTitle,
            description: trimmedDescription,
            icon: trimmedIcon,
            showOnHomePage: current.showOnHomePage,
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save industry solution');

        if (payload && payload.id) {
          setCurrentSolutionId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: {
              ...prev.en,
              exists: true,
            },
          }));
          setSavedLocales(['en']);
        }
        showToast('Industry solution created successfully.', 'success');
        setIsSaving(false);
        if (onSave) {
          await onSave();
        }
        return;
      }

      const res = await fetch(`/api/admin/industry-solutions?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: trimmedTitle,
          description: trimmedDescription,
          icon: trimmedIcon,
          showOnHomePage: current.showOnHomePage,
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

      showToast(`Translation saved successfully.`, 'success');
      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save industry solution.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || { title: '', description: '', icon: '', showOnHomePage: false, exists: false };

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
                  } ${hasContent ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span>{localeNames[locale as keyof typeof localeNames]}</span>
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
        id="industry-solutions-form"
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

        <div className="space-y-1.5">
          <FieldLabel required>Title ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.title}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
            placeholder="Enter industry solution title"
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Description ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Textarea
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder="Enter industry solution description"
            rows={5}
            disabled={isSaving || isLoading || isTranslating}
          />
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
              ? "Enable this to display this industry solution on the home page industry solutions section."
              : ""}
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
          />
        </div>

        {isLoading && <Loader />}

        {activeTab !== 'en' && !currentSolutionId && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
            Please save the English version first before adding translations.
          </div>
        )}
      </form>
    </div>
  );
}
