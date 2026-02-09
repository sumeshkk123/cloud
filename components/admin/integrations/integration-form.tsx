'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { Button } from '@/components/ui/adminUi/button';
import { i18n, localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Languages, Loader2 } from 'lucide-react';

interface IntegrationTranslation {
  locale: string;
  icon: string;
  title: string;
  description: string;
  exists: boolean;
}

interface IntegrationFormProps {
  integrationId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function IntegrationForm({
  integrationId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: IntegrationFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, IntegrationTranslation>>(() => {
    const initial: Record<string, IntegrationTranslation> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        icon: '',
        title: '',
        description: '',
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentIntegrationId, setCurrentIntegrationId] = useState<string | null>(integrationId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentIntegrationId(integrationId || null);
  }, [integrationId]);

  useEffect(() => {
    if (currentIntegrationId) {
      loadAllTranslations();
    } else {
      const reset: Record<string, IntegrationTranslation> = {};
      i18n.locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          icon: '',
          title: '',
          description: '',
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadAllTranslations depends on currentIntegrationId; run when it changes
  }, [currentIntegrationId]);

  const loadAllTranslations = async (preserveActiveTab: boolean = false) => {
    if (!currentIntegrationId) {
      return;
    }

    const currentActiveTab = preserveActiveTab ? activeTab : null;

    try {
      setIsLoading(true);

      const response = await fetch(`/api/admin/integrations?id=${encodeURIComponent(currentIntegrationId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load integration translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, IntegrationTranslation> = {};
      const existingLocales: string[] = [];
      let sharedIcon = '';

      const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
      if (englishVersion) {
        sharedIcon = englishVersion.icon || '';
      }

      i18n.locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          loaded[loc] = {
            locale: loc,
            icon: sharedIcon || String(existing.icon || ''),
            title: String(existing.title || ''),
            description: String(existing.description || ''),
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            locale: loc,
            icon: sharedIcon || '',
            title: '',
            description: '',
            exists: false,
          };
        }
      });

      // Ensure all locales use the shared icon
      if (sharedIcon) {
        Object.keys(loaded).forEach((loc) => {
          loaded[loc].icon = sharedIcon;
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
      showToast('Failed to load integration translations.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateTranslation = (locale: string, field: 'icon' | 'title' | 'description', value: string) => {
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

    if (!trimmedTitle || !trimmedDescription) {
      const missingFields = [];
      if (!trimmedTitle) missingFields.push('Title');
      if (!trimmedDescription) missingFields.push('Description');
      showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
      return;
    }

    try {
      setIsSaving(true);

      const idToUse = currentIntegrationId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/integrations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            icon: current.icon || null,
            title: trimmedTitle,
            description: trimmedDescription,
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save integration');

        if (payload && payload.id) {
          setCurrentIntegrationId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: {
              ...prev.en,
              icon: current.icon,
              title: trimmedTitle,
              description: trimmedDescription,
              exists: true,
            },
          }));
          setSavedLocales(['en']);
        }
        showToast('Integration created successfully.', 'success');
        setIsSaving(false);
        if (onSave) {
          await onSave();
        }
        return;
      }

      const res = await fetch(`/api/admin/integrations?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          icon: current.icon || null,
          title: trimmedTitle,
          description: trimmedDescription,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

      setTranslations((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          icon: current.icon,
          title: trimmedTitle,
          description: trimmedDescription,
          exists: true,
        },
      }));

      if (!savedLocales.includes(activeTab)) {
        setSavedLocales([...savedLocales, activeTab]);
      }

      showToast('Translation saved successfully.', 'success');
      setIsSaving(false);
      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save integration.';
      showToast(message, 'error');
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || { icon: '', title: '', description: '', exists: false };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-2">
          {i18n.locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.title?.trim() || trans.description?.trim() || trans.icon?.trim());
            const exists = trans?.exists || false;

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
                  <span>{localeNames[locale as keyof typeof localeNames] ?? locale}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Auto Translate Button */}
      {activeTab !== 'en' && (translations['en']?.title?.trim() || translations['en']?.description?.trim()) && (
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
          <FieldLabel htmlFor="icon">
            Icon (Common for all languages)
          </FieldLabel>
          <IconPicker
            value={current.icon}
            onChange={(iconName) => {
              Object.keys(translations).forEach((loc) => {
                updateTranslation(loc, 'icon', iconName);
              });
            }}
            placeholder="Select an icon..."
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
          />
          {activeTab !== 'en' && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Icon can only be edited in English tab
            </p>
          )}
        </div>

        <div>
          <FieldLabel htmlFor="title" required>
            Title
          </FieldLabel>
          <Input
            id="title"
            key={`title-${activeTab}`}
            value={current.title}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
            placeholder={`Enter integration title in ${localeNames[activeTab as keyof typeof localeNames]}`}
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div>
          <FieldLabel htmlFor="description" required>
            Description
          </FieldLabel>
          <Textarea
            id="description"
            key={`description-${activeTab}`}
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder={`Enter integration description in ${localeNames[activeTab as keyof typeof localeNames]}`}
            rows={4}
            disabled={isSaving || isLoading || isTranslating}
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
