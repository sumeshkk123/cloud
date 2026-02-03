'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Button } from '@/components/ui/adminUi/button';
import { Languages, Loader2 } from 'lucide-react';
import { i18n, localeNames } from '@/i18n-config';

type FormState = {
  icon: string;
  title: string;
  content: string;
};

interface AICopilotTranslation {
  locale: string;
  icon: string;
  title: string;
  content: string;
  exists: boolean;
}

interface AICopilotFormProps {
  copilotId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function AICopilotForm({
  copilotId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: AICopilotFormProps) {
  const { showToast, ToastComponent } = useToast();

  useEffect(() => {
    onToastChange?.(ToastComponent);
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, AICopilotTranslation>>(() => {
    const initial: Record<string, AICopilotTranslation> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        icon: '',
        title: '',
        content: '',
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(copilotId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentId(copilotId || null);
  }, [copilotId]);

  useEffect(() => {
    if (currentId) {
      loadAllTranslations();
    } else {
      const reset: Record<string, AICopilotTranslation> = {};
      i18n.locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          icon: '',
          title: '',
          content: '',
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
    }
  }, [currentId]);

  const loadAllTranslations = async () => {
    if (!currentId) return;

    try {
      setIsLoading(true);
      onLoadingChange?.(true);

      const response = await fetch(`/api/admin/ai-copilot?id=${encodeURIComponent(currentId)}&all=true`);
      if (!response.ok) {
        throw new Error('Failed to load translations');
      }

      const data = await response.json();
      const loadedTranslations = data.translations || [];

      const loaded: Record<string, AICopilotTranslation> = {};
      const existingLocales: string[] = [];

      i18n.locales.forEach((loc) => {
        const translation = loadedTranslations.find((t: any) => t.locale === loc);
        if (translation) {
          loaded[loc] = {
            locale: loc,
            icon: translation.icon || '',
            title: translation.title || '',
            content: translation.content || '',
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            locale: loc,
            icon: '',
            title: '',
            content: '',
            exists: false,
          };
        }
      });

      // Sync icon across all locales from English
      const englishTranslation = loadedTranslations.find((t: any) => t.locale === 'en');
      const sharedIcon = englishTranslation?.icon || '';
      if (sharedIcon) {
        Object.keys(loaded).forEach((loc) => {
          loaded[loc].icon = sharedIcon;
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
      showToast('Failed to load AI Copilot translations.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof FormState, value: string) => {
    setTranslations((prev) => {
      const updated: Record<string, AICopilotTranslation> = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      // Sync icon across all locales
      if (field === 'icon') {
        Object.keys(updated).forEach((loc) => {
          updated[loc].icon = value;
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
    if (!english || (!english.title && !english.content)) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslating(true);

      // Translate title
      if (english.title.trim()) {
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

      // Translate content
      if (english.content.trim()) {
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
        if (!contentRes.ok) throw new Error(contentData.error || 'Failed to translate content');
        updateTranslation(activeTab, 'content', contentData.translatedText);
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
    if (!current) return;

    if (activeTab === 'en' && !current.icon.trim()) {
      showToast('Icon is required for English version.', 'error');
      return;
    }

    if (!current.title.trim() || !current.content.trim()) {
      showToast('Title and content are required.', 'error');
      return;
    }

    try {
      setIsSaving(true);

      const url = currentId
        ? `/api/admin/ai-copilot?id=${encodeURIComponent(currentId)}`
        : '/api/admin/ai-copilot';

      const method = current.exists ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          icon: current.icon || null,
          title: current.title,
          content: current.content,
          locale: activeTab,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save');
      }

      const saved = await response.json();

      if (!currentId) {
        setCurrentId(saved.id);
      }

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

      showToast('AI Copilot saved successfully.', 'success');
      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save AI Copilot.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const current = translations[activeTab] || { icon: '', title: '', content: '', exists: false };

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {i18n.locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.title || trans.content);
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
        id="ai-copilot-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveCurrentTab();
        }}
        className="space-y-5"
      >
        {/* Auto Translate Button (only show for non-English tabs) */}
        {activeTab !== 'en' && translations['en']?.title && (
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

        {/* Icon - Common for all languages (only editable in English tab) */}
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
            placeholder="Enter AI Copilot title"
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Content ({localeNames[activeTab as keyof typeof localeNames]})</FieldLabel>
          <Textarea
            value={current.content}
            onChange={(e) => updateTranslation(activeTab, 'content', e.target.value)}
            placeholder="Enter AI Copilot content"
            rows={8}
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

      </form>
    </div>
  );
}
