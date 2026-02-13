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

interface MetaFormData {
  title: string;
  description: string;
  keywords: string;
}

interface PageTitleFormData {
  title: string;
  pagePill: string;
  sectionSubtitle: string;
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
  const [pageTitleFormData, setPageTitleFormData] = useState<Record<string, PageTitleFormData>>(() => {
    const initial: Record<string, PageTitleFormData> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = { title: '', pagePill: '', sectionSubtitle: '' };
    });
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [metaSavedLocales, setMetaSavedLocales] = useState<Set<string>>(new Set());
  const [pageTitleSavedLocales, setPageTitleSavedLocales] = useState<Set<string>>(new Set());

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
      const metaPromises = i18n.locales.map((locale) =>
        fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null))
      );
      const pageTitlePromises = i18n.locales.map((locale) =>
        fetch(`/api/admin/page-titles?page=${encodeURIComponent(formPage)}&locale=${locale}`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null))
      );
      const [metaResults, pageTitleResults] = await Promise.all([Promise.all(metaPromises), Promise.all(pageTitlePromises)]);
      const newMetaData: Record<string, MetaFormData> = {};
      const newPageTitleData: Record<string, PageTitleFormData> = {};
      const metaSaved = new Set<string>();
      const pageTitleSaved = new Set<string>();
      i18n.locales.forEach((locale, index) => {
        const metaResult = metaResults[index];
        const pageTitleResult = pageTitleResults[index];
        if (metaResult && (metaResult.title || metaResult.description || metaResult.keywords)) {
          newMetaData[locale] = {
            title: String(metaResult.title || ''),
            description: String(metaResult.description || ''),
            keywords: String(metaResult.keywords || ''),
          };
          metaSaved.add(locale);
        } else {
          newMetaData[locale] = { title: '', description: '', keywords: '' };
        }
        if (pageTitleResult && (pageTitleResult.title || pageTitleResult.pagePill || pageTitleResult.sectionSubtitle)) {
          newPageTitleData[locale] = {
            title: String(pageTitleResult.title || ''),
            pagePill: String(pageTitleResult.pagePill || ''),
            sectionSubtitle: String(pageTitleResult.sectionSubtitle || ''),
          };
          pageTitleSaved.add(locale);
        } else {
          newPageTitleData[locale] = { title: '', pagePill: '', sectionSubtitle: '' };
        }
      });
      setMetaFormData(newMetaData);
      setPageTitleFormData(newPageTitleData);
      setMetaSavedLocales(metaSaved);
      setPageTitleSavedLocales(pageTitleSaved);
      if (initialLocale && (metaSaved.has(initialLocale) || pageTitleSaved.has(initialLocale))) {
        setActiveLocale(initialLocale);
      } else if (metaSaved.size > 0) {
        setActiveLocale(Array.from(metaSaved)[0]);
      } else {
        setActiveLocale(initialLocale || 'en');
      }
    } catch (error) {
      showToast('Failed to load meta details and page titles.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMetaField = (locale: string, field: keyof MetaFormData, value: string) => {
    setMetaFormData((prev) => ({ ...prev, [locale]: { ...prev[locale], [field]: value } }));
  };
  const updatePageTitleField = (locale: string, field: keyof PageTitleFormData, value: string) => {
    setPageTitleFormData((prev) => ({ ...prev, [locale]: { ...prev[locale], [field]: value } }));
  };

  const handleSave = async () => {
    const currentMeta = metaFormData[activeLocale];
    const currentPageTitle = pageTitleFormData[activeLocale];
    try {
      setIsSaving(true);
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
        const data = await metaRes.json();
        throw new Error(data?.error || 'Failed to save meta details');
      }
      const pageTitleRes = await fetch('/api/admin/page-titles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: formPage,
          locale: activeLocale,
          title: currentPageTitle.title.trim() || null,
          pagePill: currentPageTitle.pagePill.trim() || null,
          sectionSubtitle: currentPageTitle.sectionSubtitle.trim() || null,
        }),
      });
      if (!pageTitleRes.ok) {
        const data = await pageTitleRes.json();
        throw new Error(data?.error || 'Failed to save page title');
      }
      setMetaSavedLocales((prev) => new Set([...prev, activeLocale]));
      setPageTitleSavedLocales((prev) => new Set([...prev, activeLocale]));
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
  const currentPageTitle = pageTitleFormData[activeLocale] || { title: '', pagePill: '', sectionSubtitle: '' };

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
        {isEditing && (
          <p className="text-xs text-gray-500 mt-1">
            Editing: <span className="font-medium text-gray-700 dark:text-gray-300">{formPage}</span>
          </p>
        )}
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {i18n.locales.map((locale) => {
            const isActive = activeLocale === locale;
            const localeMeta = metaFormData[locale];
            const localePageTitle = pageTitleFormData[locale];
            const hasContent =
              (localeMeta?.title?.trim() || localeMeta?.description?.trim() || localeMeta?.keywords?.trim()) ||
              (localePageTitle?.title?.trim() || localePageTitle?.pagePill?.trim() || localePageTitle?.sectionSubtitle?.trim());
            const exists = metaSavedLocales.has(locale) || pageTitleSavedLocales.has(locale);
            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveLocale(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                  isActive ? 'border-primary-500 text-primary-600 bg-primary-50 dark:bg-primary-900/20' : hasContent ? 'border-transparent text-gray-500 hover:text-gray-700 bg-green-50 dark:bg-green-900/10' : 'border-transparent text-gray-500 hover:text-gray-700'
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

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Details</h3>
        <div>
          <FieldLabel htmlFor="meta-title">Meta Title</FieldLabel>
          <Input id="meta-title" value={currentMeta.title} onChange={(e) => updateMetaField(activeLocale, 'title', e.target.value)} placeholder="Meta title" disabled={isSaving} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-description">Meta Description</FieldLabel>
          <Textarea id="meta-description" value={currentMeta.description} onChange={(e) => updateMetaField(activeLocale, 'description', e.target.value)} placeholder="Meta description" rows={3} disabled={isSaving} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-keywords">Meta Keywords</FieldLabel>
          <Input id="meta-keywords" value={currentMeta.keywords} onChange={(e) => updateMetaField(activeLocale, 'keywords', e.target.value)} placeholder="Keywords (comma-separated)" disabled={isSaving} />
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Page Title</h3>
        <div className="space-y-4">
          <div>
            <FieldLabel htmlFor="page-title">Page Title</FieldLabel>
            <Input id="page-title" value={currentPageTitle.title} onChange={(e) => updatePageTitleField(activeLocale, 'title', e.target.value)} placeholder="Page title" disabled={isSaving} />
          </div>
          <div>
            <FieldLabel htmlFor="page-pill">Page Pill / Badge</FieldLabel>
            <Input id="page-pill" value={currentPageTitle.pagePill} onChange={(e) => updatePageTitleField(activeLocale, 'pagePill', e.target.value)} placeholder="Badge text" disabled={isSaving} />
          </div>
          <div>
            <FieldLabel htmlFor="section-subtitle">Section Subtitle</FieldLabel>
            <Textarea id="section-subtitle" value={currentPageTitle.sectionSubtitle} onChange={(e) => updatePageTitleField(activeLocale, 'sectionSubtitle', e.target.value)} placeholder="Section subtitle" rows={2} disabled={isSaving} />
          </div>
        </div>
      </div>
    </form>
  );
}
