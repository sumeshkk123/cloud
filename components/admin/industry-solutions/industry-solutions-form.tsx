'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Languages, Loader2 } from 'lucide-react';
import { localeNames } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import { supportedLocales } from '@/config/site';

const locales = supportedLocales;

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

  useEffect(() => {
    onToastChange?.(ToastComponent);
  }, [ToastComponent, onToastChange]);
  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);
  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);
  useEffect(() => {
    setCurrentSolutionId(solutionId || null);
  }, [solutionId]);

  useEffect(() => {
    if (currentSolutionId) {
      const load = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/admin/industry-solutions?id=${encodeURIComponent(currentSolutionId)}&all=true`);
          if (!response.ok) {
            showToast('Failed to load industry solution translations.', 'error');
            return;
          }
          const data = await response.json();
          const existingTranslations = data?.translations || [];
          const loaded: Record<string, IndustrySolutionTranslation> = {};
          let sharedIcon = '';
          let sharedShowOnHomePage = false;
          const enVersion = existingTranslations.find((t: any) => t.locale === 'en');
          if (enVersion) {
            sharedIcon = String(enVersion.icon || '').trim();
            sharedShowOnHomePage = Boolean(enVersion.showOnHomePage ?? false);
          } else if (existingTranslations.length > 0) {
            sharedIcon = String(existingTranslations[0].icon || '').trim();
            sharedShowOnHomePage = Boolean(existingTranslations[0].showOnHomePage ?? false);
          }
          locales.forEach((loc) => {
            const existing = existingTranslations.find((t: any) => t.locale === loc);
            if (existing) {
              loaded[loc] = {
                locale: loc,
                title: String(existing.title || ''),
                description: String(existing.description || ''),
                icon: sharedIcon || String(existing.icon || ''),
                showOnHomePage: sharedShowOnHomePage,
                exists: true,
              };
            } else {
              loaded[loc] = {
                locale: loc,
                title: '',
                description: '',
                icon: sharedIcon,
                showOnHomePage: sharedShowOnHomePage,
                exists: false,
              };
            }
          });
          setTranslations(loaded);
          const firstExisting = locales.find((l) => loaded[l]?.exists);
          setActiveTab(firstExisting || 'en');
        } catch (error) {
          showToast('Failed to load industry solution translations.', 'error');
        } finally {
          setIsLoading(false);
        }
      };
      load();
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
      setActiveTab('en');
    }
  }, [currentSolutionId]);

  const updateTranslation = (locale: string, field: keyof IndustrySolutionTranslation, value: string | boolean) => {
    setTranslations((prev) => {
      const updated = { ...prev };
      updated[locale] = { ...prev[locale], [field]: value };
      if (field === 'icon' || field === 'showOnHomePage') {
        locales.forEach((loc) => {
          updated[loc] = { ...updated[loc], [field]: value };
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
    if (!english || (!english.title?.trim() && !english.description?.trim())) {
      showToast('Please fill in the English title and/or description first.', 'error');
      return;
    }
    try {
      setIsTranslating(true);
      let successCount = 0;
      let errorCount = 0;

      if (english.title?.trim()) {
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
        } catch {
          errorCount++;
        }
      }

      if (english.description?.trim()) {
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
        } catch {
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
    const current = translations[activeTab];
    const title = (current?.title || '').trim();
    const description = (current?.description || '').trim();
    const icon = (current?.icon || '').trim();
    const showOnHomePage = current?.showOnHomePage ?? false;
    const englishShowOnHomePage = translations['en']?.showOnHomePage ?? false;

    if (!title || !description || !icon) {
      showToast('Please fill in title, description, and icon.', 'error');
      return;
    }

    try {
      setIsSaving(true);
      const idToUse = currentSolutionId || 'new';
      const url = idToUse === 'new' ? '/api/admin/industry-solutions' : `/api/admin/industry-solutions?id=${encodeURIComponent(idToUse)}`;
      const res = await fetch(url, {
        method: idToUse === 'new' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          icon,
          showOnHomePage: activeTab === 'en' ? showOnHomePage : englishShowOnHomePage,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save industry solution');

      if (idToUse === 'new' && payload.id) {
        setCurrentSolutionId(payload.id);
      }
      setTranslations((prev) => ({
        ...prev,
        [activeTab]: { ...prev[activeTab], title, description, icon, showOnHomePage: prev['en']?.showOnHomePage ?? false, exists: true },
      }));
      showToast('Industry solution saved successfully.', 'success');
      onSave?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save industry solution.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || {
    locale: 'en',
    title: '',
    description: '',
    icon: '',
    showOnHomePage: false,
    exists: false,
  };

  if (isLoading && currentSolutionId) {
    return <Loader />;
  }

  return (
    <form
      id="industry-solutions-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="space-y-5"
    >
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.title?.trim() || trans.description?.trim() || trans.icon?.trim());
            const tabLabel = (localeNames as Record<string, string>)[locale] ?? locale;
            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                  isActive
                    ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : hasContent
                      ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50 dark:bg-green-900/10'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{tabLabel}</span>
                  {trans?.exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

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

      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="icon" required>Icon</FieldLabel>
          <IconPicker
            value={current.icon || ''}
            onChange={(icon) => i18n.locales.forEach((loc) => updateTranslation(loc, 'icon', icon))}
            disabled={isSaving || isLoading || activeTab !== 'en'}
            placeholder="Select an icon..."
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
          />
          {activeTab !== 'en' && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Icon is shared. Edit in English to change.</p>
          )}
        </div>
        <div>
          <FieldLabel htmlFor="title" required>Title</FieldLabel>
          <Input
            id="title"
            value={current.title}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
            placeholder="Enter industry solution title"
          />
        </div>
        <div>
          <FieldLabel htmlFor="description" required>Description</FieldLabel>
          <Textarea
            id="description"
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder="Enter industry solution description"
            rows={4}
          />
        </div>
        <div>
          <FieldLabel htmlFor="showOnHomePage">Show on Home Page</FieldLabel>
          <Toggle
            id="showOnHomePage"
            checked={current.showOnHomePage}
            onCheckedChange={(checked) => updateTranslation(activeTab, 'showOnHomePage', checked)}
            disabled={activeTab !== 'en'}
          />
          {activeTab !== 'en' && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Show on home is shared. Edit in English to change.</p>
          )}
        </div>
      </div>
    </form>
  );
}
