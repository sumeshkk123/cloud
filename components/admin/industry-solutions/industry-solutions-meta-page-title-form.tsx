'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Select } from '@/components/ui/adminUi/select';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';

interface MetaFormData {
  title: string;
  description: string;
  keywords: string;
}


interface IndustrySolutionsMetaPageTitleFormProps {
  initialPage?: string;
  industrySolutionPages?: Array<{ value: string; label: string }>;
  onClose?: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function IndustrySolutionsMetaPageTitleForm({
  initialPage,
  industrySolutionPages = [],
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: IndustrySolutionsMetaPageTitleFormProps) {
  const { showToast, ToastComponent } = useToast();
  const [formPage, setFormPage] = useState<string>(initialPage || '');
  const isEditing = !!initialPage;
  const [metaFormData, setMetaFormData] = useState<MetaFormData>({ title: '', description: '', keywords: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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
  }, [initialPage]);
  useEffect(() => {
    if (formPage) loadAllData();
  }, [formPage]);

  const loadAllData = async () => {
    if (!formPage) return;
    try {
      setIsLoading(true);

      const [pageTitleResult, metaResult] = await Promise.all([
        fetch(`/api/admin/page-titles?page=${encodeURIComponent(formPage)}&locale=en`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null)),
        fetch(`/api/admin/meta-details?page=${encodeURIComponent(formPage)}&locale=en`, { cache: 'no-store' }).then((res) => (res.ok ? res.json() : null)),
      ]);

      setMetaFormData({
        title: String(pageTitleResult?.title || metaResult?.title || ''),
        description: String(pageTitleResult?.sectionSubtitle || metaResult?.description || ''),
        keywords: String(metaResult?.keywords || ''),
      });
    } catch (error) {
      showToast('Failed to load meta details.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateMetaField = (field: keyof MetaFormData, value: string) => {
    setMetaFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const currentMeta = metaFormData;
    try {
      setIsSaving(true);

      // Save to page_titles table (for hero section title/subtitle)
      const pageTitleRes = await fetch('/api/admin/page-titles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: formPage,
          locale: 'en',
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
          locale: 'en',
          title: currentMeta.title.trim() || null,
          description: currentMeta.description.trim() || null,
          keywords: currentMeta.keywords.trim() || null,
        }),
      });

      if (!metaRes.ok) {
        console.warn('Failed to save to meta_details, but page_titles saved successfully');
      }

      showToast('Saved successfully.', 'success');
      await onSave?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const currentMeta = metaFormData;

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

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Meta Details</h3>
        <div>
          <FieldLabel htmlFor="meta-title">Meta Title</FieldLabel>
          <Input id="meta-title" value={currentMeta.title} onChange={(e) => updateMetaField('title', e.target.value)} placeholder="Meta title" disabled={isSaving || isLoading} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-description">Meta Description</FieldLabel>
          <Textarea id="meta-description" value={currentMeta.description} onChange={(e) => updateMetaField('description', e.target.value)} placeholder="Meta description" rows={3} disabled={isSaving || isLoading} />
        </div>
        <div>
          <FieldLabel htmlFor="meta-keywords">Meta Keywords</FieldLabel>
          <Input id="meta-keywords" value={currentMeta.keywords} onChange={(e) => updateMetaField('keywords', e.target.value)} placeholder="Keywords (comma-separated)" disabled={isSaving || isLoading} />
        </div>
      </div>

    </form>
  );
}
