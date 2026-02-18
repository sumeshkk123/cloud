'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { useToast } from '@/components/ui/toast';
import { localeNames } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import { Loader } from '@/components/ui/adminUi/loader';

import { Languages, Loader2 } from 'lucide-react';

interface MetaFormData {
  title: string;
  description: string;
  keywords: string;
}


interface IndustrySolutionsMetaPageTitleFormProps {
  initialPage?: string;
  initialLocale?: string;
  industrySolutionPages?: Array<{ value: string; label: string }>;
  onClose?: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function IndustrySolutionsMetaPageTitleForm({
  initialPage,
  initialLocale = 'en',
  industrySolutionPages = [],
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: IndustrySolutionsMetaPageTitleFormProps) {
  const { showToast, ToastComponent } = useToast();
  const [formPage, setFormPage] = useState<string>(initialPage || '');
  const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
  const isEditing = !!initialPage;
  const [metaFormData, setMetaFormData] = useState<Record<string, MetaFormData>>(() => {
    const initial: Record<string, MetaFormData> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = { title: '', description: '', keywords: '' };
    });
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [metaSavedLocales, setMetaSavedLocales] = useState<Set<string>>(new Set());

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
    if (initialPage) setFormPage(initialPage);
    if (initialLocale) setActiveLocale(initialLocale);
  }, [initialPage, initialLocale]);
  useEffect(() => {
    if (formPage) loadAllData();
  }, [formPage]);

  const loadAllData = async () => {
    if (!formPage) return;
    try {
      setIsLoading(true);

      // Fetch from both page_titles and meta_details tables
      const pageTitlePromises = i18n.locales.map((locale) =>
        fetch(`/api/admin/page-titles?page=${encodeURIComponent(formPage)}&locale=${locale}`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null))
      );
      const metaPromises = i18n.locales.map((locale) =>
        fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null))
      );

      const [pageTitleResults, metaResults] = await Promise.all([
        Promise.all(pageTitlePromises),
        Promise.all(metaPromises)
      ]);
      const newMetaData: Record<string, MetaFormData> = {};
      const metaSaved = new Set<string>();

      i18n.locales.forEach((locale, index) => {
        const pageTitleResult = pageTitleResults[index];
        const metaResult = metaResults[index];

        // Merge data from both sources
        const title = pageTitleResult?.title || metaResult?.title || '';
        const description = pageTitleResult?.sectionSubtitle || metaResult?.description || '';
        const keywords = metaResult?.keywords || '';

        if (title || description || keywords) {
          newMetaData[locale] = {
            title: String(title),
            description: String(description),
            keywords: String(keywords),
          };
          metaSaved.add(locale);
        } else {
          newMetaData[locale] = { title: '', description: '', keywords: '' };
        }
      });
      setMetaFormData(newMetaData);
      setMetaSavedLocales(metaSaved);
      if (initialLocale && metaSaved.has(initialLocale)) {
        setActiveLocale(initialLocale);
      } else if (metaSaved.size > 0) {
        setActiveLocale(Array.from(metaSaved)[0]);
      } else {
        setActiveLocale(initialLocale || 'en');
      }
    } catch (error) {
      showToast('Failed to load meta details.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMetaField = (locale: string, field: keyof MetaFormData, value: string) => {
    setMetaFormData((prev) => ({ ...prev, [locale]: { ...prev[locale], [field]: value } }));
  };

  const autoTranslate = async () => {
    if (activeLocale === 'en') {
      showToast('English is the source language.', 'info');
      return;
    }

    const englishMeta = metaFormData['en'];

    if (!englishMeta.title && !englishMeta.description && !englishMeta.keywords) {
      showToast('Please fill in English content first.', 'warning');
      return;
    }

    try {
      setIsTranslating(true);

      const translateText = async (text: string): Promise<string> => {
        if (!text.trim()) return '';
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetLocale: activeLocale, sourceLocale: 'en' }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || data.message || 'Translation failed');
        return data.translatedText ?? text;
      };

      const [translatedMetaTitle, translatedMetaDesc, translatedKeywords] = await Promise.all([
        translateText(englishMeta.title),
        translateText(englishMeta.description),
        translateText(englishMeta.keywords),
      ]);

      updateMetaField(activeLocale, 'title', translatedMetaTitle);
      updateMetaField(activeLocale, 'description', translatedMetaDesc);
      updateMetaField(activeLocale, 'keywords', translatedKeywords);

      showToast('Translation completed.', 'success');
    } catch (error) {
      console.error('Translation error:', error);
      const msg = error instanceof Error ? error.message : 'Translation failed. Please translate manually.';
      showToast(msg, 'error');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSave = async () => {
    const currentMeta = metaFormData[activeLocale];
    try {
      setIsSaving(true);

      // Save to page_titles table (for hero section title/subtitle)
      const pageTitleRes = await fetch('/api/admin/page-titles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: formPage,
          locale: activeLocale,
          title: currentMeta.title.trim() || null,
          sectionSubtitle: currentMeta.description.trim() || null,
        }),
      });

      if (!pageTitleRes.ok) {
        const data = await pageTitleRes.json();
        throw new Error(data?.error || 'Failed to save page title');
      }

      // Also save to meta_details table (for SEO keywords)
      const metaRes = await fetch('/api/admin/meta-details', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: formPage,
          locale: activeLocale,
          title: currentMeta.title.trim() || null,
          description: currentMeta.description.trim() || null,
          keywords: currentMeta.keywords.trim() || null,
        }),
      });

      if (!metaRes.ok) {
        console.warn('Failed to save to meta_details, but page_titles saved successfully');
      }

      setMetaSavedLocales((prev) => new Set([...prev, activeLocale]));
      showToast('Saved successfully.', 'success');
      await onSave?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const currentMeta = metaFormData[activeLocale] || { title: '', description: '', keywords: '' };

  if (isLoading) return <Loader />;

  return (
    <form
      id="industry-solutions-meta-page-title-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="space-y-6"
    >
      <div className="space-y-1.5">
        <FieldLabel required>Page</FieldLabel>
        <Select
          options={industrySolutionPages}
          value={formPage}
          onValueChange={(value) => {
            if (!isEditing) setFormPage(value);
          }}
          placeholder="Select a page"
          required
          disabled={isSaving || isLoading || isEditing}
        />
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {i18n.locales.map((locale) => {
            const isActive = activeLocale === locale;
            const localeMeta = metaFormData[locale];
            const hasContent =
              (localeMeta?.title?.trim() || localeMeta?.description?.trim() || localeMeta?.keywords?.trim());
            const exists = metaSavedLocales.has(locale);
            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveLocale(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20' : hasContent ? 'border-transparent text-gray-500 hover:text-gray-700 bg-green-50 dark:bg-green-900/10' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span>{(localeNames as Record<string, string>)[locale] ?? locale}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {activeLocale !== 'en' && (
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
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Details</h3>
        <div>
          <FieldLabel htmlFor="meta-title">Meta Title</FieldLabel>
          <Input id="meta-title" value={currentMeta.title} onChange={(e) => updateMetaField(activeLocale, 'title', e.target.value)} placeholder="Meta title" disabled={isSaving || isLoading || isTranslating} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-description">Meta Description</FieldLabel>
          <Textarea id="meta-description" value={currentMeta.description} onChange={(e) => updateMetaField(activeLocale, 'description', e.target.value)} placeholder="Meta description" rows={3} disabled={isSaving || isLoading || isTranslating} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-keywords">Meta Keywords</FieldLabel>
          <Input id="meta-keywords" value={currentMeta.keywords} onChange={(e) => updateMetaField(activeLocale, 'keywords', e.target.value)} placeholder="Keywords (comma-separated)" disabled={isSaving || isLoading || isTranslating} />
        </div>
      </div>

    </form>
  );
}
