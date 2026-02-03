'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X, ArrowLeft, Languages, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Button } from '@/components/ui/adminUi/button';
import { ImageUpload } from '@/components/ui/adminUi/image-upload';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { localeNames } from '@/i18n-config';

const LOCALES = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

type LocaleData = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
};

const emptyLocaleData = (): LocaleData => ({
  slug: '',
  title: '',
  description: '',
  content: '',
  image: '',
  author: '',
  metaTitle: '',
  metaDescription: '',
  metaKeywords: '',
});

interface BlogFormProps {
  postId?: string | null;
  initialLocale?: string;
  onClose?: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function BlogForm({
  postId,
  initialLocale = 'en',
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: BlogFormProps) {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [activeLocale, setActiveLocale] = useState(initialLocale);
  const [formData, setFormData] = useState<Record<string, LocaleData>>(() => {
    const o: Record<string, LocaleData> = {};
    LOCALES.forEach((loc) => {
      o[loc] = emptyLocaleData();
    });
    return o;
  });
  const [htmlBlocks, setHtmlBlocks] = useState<Record<string, string[]>>(() => {
    const o: Record<string, string[]> = {};
    LOCALES.forEach((loc) => {
      o[loc] = [''];
    });
    return o;
  });
  const [isLoading, setIsLoading] = useState(!!postId);
  const [isSaving, setIsSaving] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const prevTitleForSlugRef = useRef<Record<string, string>>({});

  useEffect(() => {
    if (onToastChange) onToastChange(ToastComponent);
  }, [ToastComponent, onToastChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    if (postId) {
      loadPost();
    }
  }, [postId]);

  const loadPost = async () => {
    if (!postId) return;
    try {
      setIsLoading(true);
      const res = await fetch(`/api/admin/blog?id=${encodeURIComponent(postId)}`, { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok || !Array.isArray(data)) {
        setFormData((prev) => prev);
        return;
      }
      const next: Record<string, LocaleData> = {};
      LOCALES.forEach((loc) => {
        next[loc] = emptyLocaleData();
      });
      data.forEach((item: any) => {
        const loc = item.locale || 'en';
        if (LOCALES.includes(loc as any)) {
          next[loc] = {
            slug: item.slug || '',
            title: item.title || '',
            description: item.description || '',
            content: item.content || '',
            image: item.image || '',
            author: item.author || '',
            metaTitle: item.metaTitle || '',
            metaDescription: item.metaDescription || '',
            metaKeywords: item.metaKeywords || '',
          };
        }
      });
      setFormData(next);
      const blocks: Record<string, string[]> = {};
      LOCALES.forEach((loc) => {
        blocks[loc] = [''];
      });
      data.forEach((item: any) => {
        const loc = item.locale || 'en';
        if (LOCALES.includes(loc as any) && item.content) {
          try {
            const parsed = JSON.parse(item.content);
            if (Array.isArray(parsed) && parsed.length > 0) {
              blocks[loc] = parsed;
            } else if (typeof parsed === 'string') {
              blocks[loc] = [parsed];
            }
          } catch {
            blocks[loc] = [item.content];
          }
        }
      });
      setHtmlBlocks(blocks);
    } catch (error) {
      console.error('Error loading blog post:', error);
      showToast('Failed to load blog post.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  /** Normalize slug for storage: spaces and invalid chars to single hyphen (e.g. "test1 2" → "test1-2") */
  const normalizeSlug = (slug: string): string => {
    return slug
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\u00C0-\u017F-]+/gi, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '') || '';
  };

  const buildPayload = (published: boolean) => {
    const current = formData[activeLocale];
    if (!current) return null;
    const blocks = htmlBlocks[activeLocale] || [''];
    const filteredBlocks = blocks.filter((b) => b.trim() !== '');
    const contentStr = filteredBlocks.length > 0 ? JSON.stringify(filteredBlocks) : JSON.stringify(['']);
    const english = formData['en'];
    return {
      slug: normalizeSlug(current.slug?.trim() ?? ''),
      title: current.title.trim(),
      description: current.description.trim(),
      content: contentStr,
      image: (english?.image?.trim() || current.image?.trim() || null) as string | null,
      author: (english?.author?.trim() || current.author?.trim()) || null,
      published,
      metaTitle: current.metaTitle?.trim() || null,
      metaDescription: current.metaDescription?.trim() || null,
      metaKeywords: current.metaKeywords?.trim() || null,
    };
  };

  const validateCurrentLocale = (): boolean => {
    const current = formData[activeLocale];
    if (!current) return false;
    if (!current.slug?.trim()) {
      showToast('Slug is required.', 'error');
      return false;
    }
    if (!current.title?.trim()) {
      showToast('Title is required.', 'error');
      return false;
    }
    if (!current.description?.trim()) {
      showToast('Description is required.', 'error');
      return false;
    }
    const englishImage = formData['en']?.image?.trim();
    if (!englishImage) {
      showToast('Featured Image (Common for all languages) is required.', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentLocale()) return;
    const payload = buildPayload(false);
    if (!payload) return;

    try {
      setIsSaving(true);
      if (postId) {
        const res = await fetch('/api/admin/blog', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: postId, locale: activeLocale, ...payload }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to save');
        showToast('Blog post saved successfully.', 'success');
      } else {
        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale: activeLocale, ...payload }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to create');
        showToast('Blog post created successfully.', 'success');
        if (data?.id) {
          router.replace(`/admin/blog/${data.id}`);
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveAndPublish = async () => {
    if (!validateCurrentLocale()) return;
    const payload = buildPayload(true);
    if (!payload) return;

    try {
      setIsSaving(true);
      if (postId) {
        const res = await fetch('/api/admin/blog', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: postId, locale: activeLocale, ...payload }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to save');
        showToast('Blog post saved and published.', 'success');
        onSave?.();
      } else {
        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale: activeLocale, ...payload }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to create');
        showToast('Blog post created and published.', 'success');
        onSave?.();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = <K extends keyof LocaleData>(field: K, value: LocaleData[K]) => {
    setFormData((prev) => ({
      ...prev,
      [activeLocale]: {
        ...prev[activeLocale],
        [field]: value,
      },
    }));
  };

  const addHtmlBlock = () => {
    setHtmlBlocks((prev) => {
      const current = prev[activeLocale] || [''];
      return { ...prev, [activeLocale]: [...current, ''] };
    });
  };

  const removeHtmlBlock = (index: number) => {
    setHtmlBlocks((prev) => {
      const current = prev[activeLocale] || [''];
      if (current.length <= 1) return prev;
      return { ...prev, [activeLocale]: current.filter((_, i) => i !== index) };
    });
  };

  const updateHtmlBlock = (index: number, value: string) => {
    setHtmlBlocks((prev) => {
      const current = [...(prev[activeLocale] || [''])];
      current[index] = value;
      return { ...prev, [activeLocale]: current };
    });
  };

  const slugFromTranslation = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\u00C0-\u017F-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const autoTranslate = async () => {
    if (activeLocale === 'en') {
      showToast('Cannot auto-translate English. Please select another language.', 'error');
      return;
    }
    const english = formData['en'] || emptyLocaleData();
    const hasEnglish = english.title?.trim() || english.description?.trim() || english.slug?.trim();
    if (!hasEnglish) {
      showToast('Please fill in the English title, description and/or slug first.', 'error');
      return;
    }
    try {
      setIsTranslating(true);
      let successCount = 0;
      if (english.title?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.title.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) {
          updateField('title', data.translatedText);
          successCount++;
        }
      }
      if (english.slug?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.slug.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) {
          const slugValue = slugFromTranslation(data.translatedText);
          updateField('slug', slugValue);
          successCount++;
        }
      }
      if (english.description?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.description.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) {
          updateField('description', data.translatedText);
          successCount++;
        }
      }
      if (english.metaTitle?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.metaTitle.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) updateField('metaTitle', data.translatedText);
      }
      if (english.metaDescription?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.metaDescription.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) updateField('metaDescription', data.translatedText);
      }
      if (english.metaKeywords?.trim()) {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: english.metaKeywords.trim(), sourceLocale: 'en', targetLocale: activeLocale }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) updateField('metaKeywords', data.translatedText);
      }
      if (successCount > 0) {
        showToast(`Auto-translated ${successCount} field(s) to ${localeNames[activeLocale as keyof typeof localeNames]}.`, 'success');
      } else {
        showToast('No translatable fields filled in English, or translation failed.', 'error');
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Translation failed.';
      const isLimitError = /quota|limit|exceeded|403|429/i.test(msg);
      showToast(
        isLimitError
          ? "Today's translation limit is exceeded. Please try again tomorrow or add DeepL/Google API key for higher limits."
          : msg,
        'error',
        isLimitError ? 6000 : 3000
      );
    } finally {
      setIsTranslating(false);
    }
  };

  const current = formData[activeLocale] || emptyLocaleData();
  const currentBlocks = htmlBlocks[activeLocale] || [''];

  if (isLoading) {
    return (
      <>
        <Loader />
        {ToastComponent}
      </>
    );
  }

  const formDisabled = isSaving || isTranslating;

  return (
    <>
      <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
        {/* Overlay to prevent editing while saving */}
        {isSaving && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-[1px]"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/30 px-4 py-3 text-primary-700 dark:text-primary-300">
              <Loader2 className="h-5 w-5 animate-spin shrink-0" />
              <span className="font-medium">Saving...</span>
            </div>
          </div>
        )}

        {/* Locale tabs - match page-titles/contact (primary, rounded-t-lg, size) */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap gap-2">
            {LOCALES.map((loc) => {
              const isActive = activeLocale === loc;
              const localeData = formData[loc] || emptyLocaleData();
              const hasContent = !!(localeData.title?.trim() || localeData.description?.trim() || localeData.slug?.trim());
              return (
                <button
                  key={loc}
                  type="button"
                  disabled={formDisabled}
                  onClick={() => setActiveLocale(loc)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                    isActive
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-500'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  } ${hasContent && !isActive ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
                >
                  {localeNames[loc as keyof typeof localeNames] || loc}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Auto Translate - visible for non-English tabs; disabled when no English content */}
        {activeLocale !== 'en' && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={autoTranslate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={formDisabled || !(formData['en']?.title?.trim() || formData['en']?.description?.trim())}
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
          <FieldLabel required>Title ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.title}
            onChange={(e) => {
              const value = e.target.value;
              updateField('title', value);
              const suggestedSlug = slugFromTranslation(value);
              const prevTitle = prevTitleForSlugRef.current[activeLocale] ?? '';
              const prevSuggested = slugFromTranslation(prevTitle);
              const currentSlug = (current.slug ?? '').trim();
              const slugIsAuto = !currentSlug || currentSlug === prevSuggested;
              if (slugIsAuto) {
                updateField('slug', suggestedSlug);
              }
              prevTitleForSlugRef.current[activeLocale] = value;
            }}
            placeholder="Enter blog post title"
            disabled={formDisabled}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Slug ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
          <Input
            value={current.slug}
            onChange={(e) => updateField('slug', e.target.value)}
            onBlur={(e) => {
              const normalized = normalizeSlug(e.target.value);
              if (normalized !== (current.slug ?? '').trim()) updateField('slug', normalized);
            }}
            placeholder="blog-post-slug (auto-filled from title, editable)"
            disabled={formDisabled}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Description ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
          <Textarea
            value={current.description}
            onChange={(e) => updateField('description', e.target.value)}
            placeholder="Brief description of the blog post"
            rows={3}
            disabled={formDisabled}
          />
        </div>

        {activeLocale === 'en' && (
          <div className="space-y-1.5">
            <FieldLabel required>
              Featured Image (Common for all languages)
            </FieldLabel>
            <ImageUpload
              value={current.image || ''}
              onChange={(url) => updateField('image', url)}
              label=""
              disabled={formDisabled}
            />
          </div>
        )}

        <div>
          <div className="flex items-center justify-end mb-2">
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={addHtmlBlock}
              disabled={formDisabled}
              leftIcon={<Plus className="h-4 w-4" />}
            >
              Add New Section
            </Button>
          </div>
          <div className="space-y-4">
            {currentBlocks.map((block, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <FieldLabel>Section {index + 1}</FieldLabel>
                  {currentBlocks.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      onClick={() => removeHtmlBlock(index)}
                      disabled={formDisabled}
                      leftIcon={<X className="h-4 w-4" />}
                    >
                      Remove
                    </Button>
                  )}
                </div>
                <Textarea
                  value={block}
                  onChange={(e) => updateHtmlBlock(index, e.target.value)}
                  rows={8}
                  placeholder="Enter HTML code here..."
                  className="font-mono text-sm w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  disabled={formDisabled}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Author (Common for all languages)</FieldLabel>
          <Input
            value={activeLocale === 'en' ? current.author : (formData['en']?.author ?? current.author)}
            onChange={(e) => updateField('author', e.target.value)}
            placeholder="Author name"
            readOnly={activeLocale !== 'en'}
            disabled={activeLocale !== 'en' || formDisabled}
            className={activeLocale !== 'en' ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-800 opacity-90' : undefined}
          />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Meta Details</h3>
          <div className="space-y-1.5">
            <FieldLabel>Meta Title ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
            <Input
              value={current.metaTitle}
              onChange={(e) => updateField('metaTitle', e.target.value)}
              placeholder="Meta title for SEO"
              disabled={formDisabled}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel>Meta Description ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
            <Textarea
              value={current.metaDescription}
              onChange={(e) => updateField('metaDescription', e.target.value)}
              placeholder="Meta description for SEO (150-160 characters)"
              rows={3}
              disabled={formDisabled}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel>Meta Keywords ({localeNames[activeLocale as keyof typeof localeNames]})</FieldLabel>
            <Input
              value={current.metaKeywords}
              onChange={(e) => updateField('metaKeywords', e.target.value)}
              placeholder="Comma-separated keywords"
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="button"
            variant="ghost"
            onClick={() => onClose?.() ?? router.push('/admin/blog')}
            disabled={formDisabled}
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Go Back
          </Button>
          <Button
            type="submit"
            variant="secondary"
            disabled={formDisabled}
          >
            {isSaving ? 'Saving...' : postId ? 'Save' : 'Save as Draft'}
          </Button>
          <Button
            type="button"
            variant="primary"
            disabled={formDisabled}
            onClick={handleSaveAndPublish}
          >
            Save and Publish
          </Button>
        </div>
      </div>
    </form>
      {ToastComponent}
    </>
  );
}
