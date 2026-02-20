'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { useToast } from '@/components/ui/toast';
import { localeNames } from '@/i18n-config';
import { Loader } from '@/components/ui/adminUi/loader';
import { supportedLocales } from '@/config/site';

const locales = supportedLocales;

interface MetaFormData {
  title: string;
  description: string;
  keywords: string;
}

interface PlansMetaPageTitleFormProps {
  initialPage?: string;
  initialLocale?: string;
  planPages?: Array<{ value: string; label: string }>;
  onClose?: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function PlansMetaPageTitleForm({
  initialPage,
  initialLocale = 'en',
  planPages = [],
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: PlansMetaPageTitleFormProps) {
  const { showToast, ToastComponent } = useToast();
  const [formPage, setFormPage] = useState<string>(initialPage || '');
  const [activeLocale, setActiveLocale] = useState<string>(initialLocale);
  const isEditing = !!initialPage;
  const [metaFormData, setMetaFormData] = useState<Record<string, MetaFormData>>(() => {
    const initial: Record<string, MetaFormData> = {};
    locales.forEach((loc) => {
      initial[loc] = { title: '', description: '', keywords: '' };
    });
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [metaSavedLocales, setMetaSavedLocales] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    if (formPage) {
      loadAllData();
    }
  }, [formPage]);

  const loadAllData = async () => {
    if (!formPage) return;
    try {
      setIsLoading(true);
      const metaPromises = locales.map((locale) =>
        fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=${locale}`, {
          cache: 'no-store',
        }).then((res) => (res.ok ? res.json() : null))
      );
      const metaResults = await Promise.all(metaPromises);
      const newMetaData: Record<string, MetaFormData> = {};
      const metaSaved = new Set<string>();

      locales.forEach((locale, index) => {
        const metaResult = metaResults[index];
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
      console.error('Error loading data:', error);
      showToast('Failed to load meta details.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMetaField = (locale: string, field: keyof MetaFormData, value: string) => {
    setMetaFormData((prev) => ({
      ...prev,
      [locale]: { ...prev[locale], [field]: value },
    }));
  };

  const handleSave = async () => {
    if (!formPage) {
      showToast('Please select a page.', 'error');
      return;
    }
    try {
      setIsSaving(true);
      for (const locale of locales) {
        const meta = metaFormData[locale];
        const hasMeta = meta.title || meta.description || meta.keywords;
        if (hasMeta) {
          const metaRes = await fetch('/api/admin/meta-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              page: formPage,
              locale,
              title: meta.title,
              description: meta.description,
              keywords: meta.keywords,
            }),
          });
          if (metaRes.ok) {
            setMetaSavedLocales((prev) => new Set([...prev, locale]));
          }
        }
      }
      showToast('Saved successfully.', 'success');
      onSave?.();
    } catch (error) {
      console.error('Error saving:', error);
      showToast('Failed to save.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const currentMeta = metaFormData[activeLocale] || { title: '', description: '', keywords: '' };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form
      id="plans-meta-page-title-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="space-y-6"
    >
      <div className="space-y-1.5">
        <FieldLabel required>Page</FieldLabel>
        <Select
          options={planPages}
          value={formPage}
          onValueChange={(value) => {
            if (!isEditing) {
              setFormPage(value);
            }
          }}
          placeholder="Select a page"
          required
          disabled={isSaving || isLoading || isEditing}
        />
        {isEditing && (
          <p className="text-xs text-gray-500 mt-1">
            Editing: <span className="font-medium text-gray-700">{formPage}</span>
          </p>
        )}
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {locales.map((locale) => {
            const isActive = activeLocale === locale;
            const localeMeta = metaFormData[locale];
            const hasContent =
              localeMeta.title?.trim() || localeMeta.description?.trim() || localeMeta.keywords?.trim();
            const exists = metaSavedLocales.has(locale);
            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveLocale(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : hasContent
                      ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50 dark:bg-green-900/10'
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

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Details</h3>
        <div className="space-y-4">
          <div>
            <FieldLabel htmlFor="meta-title">Meta Title</FieldLabel>
            <Input
              id="meta-title"
              value={currentMeta.title}
              onChange={(e) => updateMetaField(activeLocale, 'title', e.target.value)}
              placeholder="Enter meta title"
              disabled={isSaving || isLoading}
            />
          </div>
          <div>
            <FieldLabel htmlFor="meta-description">Meta Description</FieldLabel>
            <Textarea
              id="meta-description"
              value={currentMeta.description}
              onChange={(e) => updateMetaField(activeLocale, 'description', e.target.value)}
              placeholder="Enter meta description"
              rows={3}
              disabled={isSaving || isLoading}
            />
          </div>
          <div>
            <FieldLabel htmlFor="meta-keywords">Meta Keywords</FieldLabel>
            <Input
              id="meta-keywords"
              value={currentMeta.keywords}
              onChange={(e) => updateMetaField(activeLocale, 'keywords', e.target.value)}
              placeholder="Enter keywords (comma-separated)"
              disabled={isSaving || isLoading}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
