'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Button } from '@/components/ui/adminUi/button';
import { X, Plus, Languages, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { i18n, localeNames } from '@/i18n-config';

type FormState = {
  version: string;
  title?: string | null;
  description: string;
  features: string[];
};

interface ChangelogTranslation {
  locale: string;
  version: string;
  title?: string | null;
  description: string;
  features: string[];
  exists: boolean; // Whether this translation exists in the database
}

interface ChangelogFormProps {
  entryId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function ChangelogForm({
  entryId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: ChangelogFormProps) {
  const { showToast, ToastComponent } = useToast();

  useEffect(() => {
    onToastChange?.(ToastComponent);
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, ChangelogTranslation>>(() => {
    // Initialize all locales
    const initial: Record<string, ChangelogTranslation> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        version: '',
        title: null,
        description: '',
        features: [],
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(entryId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState('');

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentId(entryId || null);
  }, [entryId]);

  useEffect(() => {
    if (currentId) {
      loadAllTranslations();
    } else {
      // Reset all translations for new entry
      const reset: Record<string, ChangelogTranslation> = {};
      i18n.locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          version: '',
          title: null,
          description: '',
          features: [],
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
      setNewFeature('');
    }
  }, [currentId]);

  const loadAllTranslations = async () => {
    if (!currentId) {
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`/api/admin/changelog?id=${encodeURIComponent(currentId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load changelog translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      // Initialize all locales
      const loaded: Record<string, ChangelogTranslation> = {};
      const existingLocales: string[] = [];

      // Get shared version from English (version is shared across all locales)
      const english = existingTranslations.find((t: any) => t.locale === 'en');
      const sharedVersion = english ? String(english.version || '') : '';

      i18n.locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          loaded[loc] = {
            locale: loc,
            version: sharedVersion || String(existing.version || ''), // Always use shared version
            title: existing.title ? String(existing.title) : null,
            description: String(existing.description || ''),
            features: Array.isArray(existing.features) ? existing.features.map((f: any) => String(f)) : [],
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          // Use shared version from English
          loaded[loc] = {
            locale: loc,
            version: sharedVersion, // Always use shared version
            title: null,
            description: '',
            features: [],
            exists: false,
          };
        }
      });

      // Ensure all translations use the shared version
      if (sharedVersion) {
        Object.keys(loaded).forEach((loc) => {
          loaded[loc].version = sharedVersion;
        });
      }

      setTranslations(loaded);
      setSavedLocales(existingLocales);

      // Set active tab to first existing translation, or 'en' if none
      if (existingLocales.length > 0) {
        setActiveTab(existingLocales[0]);
      } else {
        setActiveTab('en');
      }
    } catch (error) {
      showToast('Failed to load changelog translations.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof ChangelogTranslation, value: any) => {
    setTranslations((prev) => {
      const updated = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      // If updating version, sync it to all locales (version is shared)
      if (field === 'version') {
        Object.keys(updated).forEach((loc) => {
          updated[loc].version = value as string;
        });
      }
      return updated;
    });
  };

  const addFeature = (locale: string) => {
    const trimmed = newFeature.trim();
    if (trimmed) {
      const current = translations[locale];
      if (!current.features.includes(trimmed)) {
        updateTranslation(locale, 'features', [...current.features, trimmed]);
        setNewFeature('');
      }
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
    if (!english || (!english.description && english.features.length === 0)) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslating(true);

      // Translate description
      if (english.description.trim()) {
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
        if (!descRes.ok) throw new Error(descData.error || 'Failed to translate description');
        updateTranslation(activeTab, 'description', descData.translatedText);
      }

      // Translate title if exists
      if (english.title && english.title.trim()) {
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
        if (!titleRes.ok) throw new Error(titleData.error || 'Failed to translate title');
        updateTranslation(activeTab, 'title', titleData.translatedText);
      }

      // Translate features
      if (english.features.length > 0) {
        const translatedFeatures: string[] = [];
        for (const feature of english.features) {
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
          } else {
            translatedFeatures.push(feature); // Fallback to original
          }
        }
        updateTranslation(activeTab, 'features', translatedFeatures);
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
    const trimmedVersion = current.version.trim();
    const trimmedDescription = current.description.trim();

    if (!trimmedVersion || !trimmedDescription) {
      const missingFields = [];
      if (!trimmedVersion) missingFields.push('Version');
      if (!trimmedDescription) missingFields.push('Description');
      showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
      return;
    }

    let allFeatures = [...current.features];
    const trimmedNewFeature = newFeature.trim();
    if (trimmedNewFeature && !allFeatures.includes(trimmedNewFeature)) {
      allFeatures.push(trimmedNewFeature);
      setNewFeature('');
    }

    try {
      setIsSaving(true);

      const idToUse = currentId || entryId;

      if (!idToUse) {
        // Creating new changelog - must create English first
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/changelog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            version: trimmedVersion,
            title: current.title || null,
            description: trimmedDescription,
            features: allFeatures.length > 0 ? allFeatures : null,
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save changelog entry');

        if (payload && payload.id) {
          setCurrentId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: {
              ...prev.en,
              exists: true,
            },
          }));
          setSavedLocales(['en']);
        }
        showToast('Changelog entry created successfully.', 'success');
        setIsSaving(false);
        // Refresh table immediately - database transaction is already committed
        if (onSave) {
          await onSave();
        }
        return;
      }

      // Updating or creating translation
      // Always use the English version for all locales (version is shared)
      const versionToUse = translations['en']?.version.trim() || trimmedVersion;

      const res = await fetch(`/api/admin/changelog?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          version: versionToUse, // Always use English version
          title: current.title || null,
          description: trimmedDescription,
          features: allFeatures.length > 0 ? allFeatures : null,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

      // Update the exists flag for this locale
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
      // Refresh table immediately - database transaction is already committed
      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save changelog entry.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || { version: '', title: null, description: '', features: [], exists: false };

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {i18n.locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.description || trans.features.length > 0);
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

      {/* Form for Active Tab */}
      <form
        id="changelog-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveCurrentTab();
        }}
        className="space-y-5"
      >
        {/* Auto Translate Button (only show for non-English tabs) */}
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

        <div className="space-y-1.5">
          <FieldLabel required>Version (Common for all languages)</FieldLabel>
          <Input
            value={current.version}
            onChange={(e) => {
              // Always update from English tab to sync to all locales
              if (activeTab === 'en') {
                updateTranslation('en', 'version', e.target.value);
              }
            }}
            placeholder="e.g., 3.0, 2.0, 1.0"
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
            readOnly={activeTab !== 'en'}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Title (Optional)</FieldLabel>
          <Input
            value={current.title || ''}
            onChange={(e) => updateTranslation(activeTab, 'title', e.target.value || null)}
            placeholder="Optional title for the version"
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>
            Description ({localeNames[activeTab as keyof typeof localeNames]})
          </FieldLabel>
          <Textarea
            value={current.description}
            onChange={(e) => updateTranslation(activeTab, 'description', e.target.value)}
            placeholder={`Enter changelog description in ${localeNames[activeTab as keyof typeof localeNames]}`}
            rows={4}
            disabled={isSaving || isLoading || isTranslating}
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

        {isLoading && <Loader />}

        {/* Save hint */}
        {activeTab !== 'en' && !currentId && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
            Please save the English version first before adding translations.
          </div>
        )}
      </form>
    </div>
  );
}
