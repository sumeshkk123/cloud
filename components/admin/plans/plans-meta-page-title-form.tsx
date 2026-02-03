'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/adminUi/button';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { useToast } from '@/components/ui/toast';
import { i18n } from '@/i18n-config';
import { AdminLanguageTabs } from '@/components/admin/common/admin-language-tabs';

const PLAN_PAGE = 'mlm-plans';

interface FormData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  pageTitle: string;
  pagePill: string;
  sectionSubtitle: string;
}

interface PlansMetaPageTitleFormProps {
  onClose: () => void;
  onSave: () => void;
  onLoadingChange: (loading: boolean) => void;
  onSavingChange: (saving: boolean) => void;
}

export function PlansMetaPageTitleForm({
  onClose,
  onSave,
  onLoadingChange,
  onSavingChange,
}: PlansMetaPageTitleFormProps) {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, FormData>>({});
  const [isLoading, setIsLoading] = useState(true);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      pageTitle: '',
      pagePill: '',
      sectionSubtitle: '',
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (translations[activeTab]) {
      const data = translations[activeTab];
      setValue('metaTitle', data.metaTitle || '');
      setValue('metaDescription', data.metaDescription || '');
      setValue('metaKeywords', data.metaKeywords || '');
      setValue('pageTitle', data.pageTitle || '');
      setValue('pagePill', data.pagePill || '');
      setValue('sectionSubtitle', data.sectionSubtitle || '');
    }
  }, [activeTab, translations, setValue]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      onLoadingChange(true);
      
      const allTranslations: Record<string, FormData> = {};
      
      for (const locale of i18n.locales) {
        const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(PLAN_PAGE)}&locale=${locale}`, {
          cache: 'no-store',
        });
        const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(PLAN_PAGE)}&locale=${locale}`, {
          cache: 'no-store',
        });
        
        const metaData = metaRes.ok ? await metaRes.json() : [];
        const pageTitleData = pageTitleRes.ok ? await pageTitleRes.json() : [];
        
        const metaItem = Array.isArray(metaData) ? metaData.find((item: any) => item.page === PLAN_PAGE && item.locale === locale) : null;
        const pageTitleItem = Array.isArray(pageTitleData) ? pageTitleData.find((item: any) => item.page === PLAN_PAGE && item.locale === locale) : null;
        
        allTranslations[locale] = {
          metaTitle: metaItem?.title || '',
          metaDescription: metaItem?.description || '',
          metaKeywords: metaItem?.keywords || '',
          pageTitle: pageTitleItem?.title || '',
          pagePill: pageTitleItem?.pagePill || '',
          sectionSubtitle: pageTitleItem?.sectionSubtitle || '',
        };
      }
      
      setTranslations(allTranslations);
      
      // Set initial values for active tab
      if (allTranslations[activeTab]) {
        const data = allTranslations[activeTab];
        setValue('metaTitle', data.metaTitle);
        setValue('metaDescription', data.metaDescription);
        setValue('metaKeywords', data.metaKeywords);
        setValue('pageTitle', data.pageTitle);
        setValue('pagePill', data.pagePill);
        setValue('sectionSubtitle', data.sectionSubtitle);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      showToast('Failed to load data.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      onSavingChange(true);
      
      // Save meta details
      const metaRes = await fetch('/api/admin/meta-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: PLAN_PAGE,
          locale: activeTab,
          title: data.metaTitle,
          description: data.metaDescription,
          keywords: data.metaKeywords,
        }),
      });
      
      // Save page title
      const pageTitleRes = await fetch('/api/admin/page-titles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: PLAN_PAGE,
          locale: activeTab,
          title: data.pageTitle,
          pagePill: data.pagePill,
          sectionSubtitle: data.sectionSubtitle,
        }),
      });
      
      if (!metaRes.ok || !pageTitleRes.ok) {
        throw new Error('Failed to save');
      }
      
      // Update local translations
      setTranslations(prev => ({
        ...prev,
        [activeTab]: data,
      }));
      
      showToast('Saved successfully.', 'success');
      onSave();
    } catch (error) {
      console.error('Error saving:', error);
      showToast('Failed to save.', 'error');
    } finally {
      onSavingChange(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <form id="plans-meta-page-title-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <AdminLanguageTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        locales={i18n.locales}
      />

      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="metaTitle" required>
            Meta Title
          </FieldLabel>
          <Input
            id="metaTitle"
            {...register('metaTitle', { required: 'Meta title is required' })}
            placeholder="Enter meta title"
          />
          {errors.metaTitle && (
            <p className="mt-1 text-sm text-red-600">{errors.metaTitle.message}</p>
          )}
        </div>

        <div>
          <FieldLabel htmlFor="metaDescription" required>
            Meta Description
          </FieldLabel>
          <Textarea
            id="metaDescription"
            {...register('metaDescription', { required: 'Meta description is required' })}
            placeholder="Enter meta description"
            rows={3}
          />
          {errors.metaDescription && (
            <p className="mt-1 text-sm text-red-600">{errors.metaDescription.message}</p>
          )}
        </div>

        <div>
          <FieldLabel htmlFor="metaKeywords">
            Meta Keywords
          </FieldLabel>
          <Input
            id="metaKeywords"
            {...register('metaKeywords')}
            placeholder="Enter meta keywords (comma-separated)"
          />
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">Page Title Settings</h3>
          
          <div className="space-y-4">
            <div>
              <FieldLabel htmlFor="pageTitle" required>
                Page Title
              </FieldLabel>
              <Input
                id="pageTitle"
                {...register('pageTitle', { required: 'Page title is required' })}
                placeholder="Enter page title"
              />
              {errors.pageTitle && (
                <p className="mt-1 text-sm text-red-600">{errors.pageTitle.message}</p>
              )}
            </div>

            <div>
              <FieldLabel htmlFor="pagePill">
                Page Pill (Badge)
              </FieldLabel>
              <Input
                id="pagePill"
                {...register('pagePill')}
                placeholder="Enter page pill text"
              />
            </div>

            <div>
              <FieldLabel htmlFor="sectionSubtitle">
                Section Subtitle
              </FieldLabel>
              <Textarea
                id="sectionSubtitle"
                {...register('sectionSubtitle')}
                placeholder="Enter section subtitle"
                rows={2}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
