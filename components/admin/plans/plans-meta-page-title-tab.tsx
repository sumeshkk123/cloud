'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/adminUi/button';
import { Modal } from '@/components/ui/adminUi/modal';
import { useToast } from '@/components/ui/toast';
import { PlansMetaPageTitleForm } from './plans-meta-page-title-form';
import { i18n } from '@/i18n-config';

const PLAN_PAGE = 'mlm-plans';

export function PlansMetaPageTitleTab() {
  const { showToast, ToastComponent } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Auto-open form on mount if no data exists
    checkAndOpenForm();
  }, []);

  const checkAndOpenForm = async () => {
    try {
      const metaRes = await fetch(`/api/admin/meta-details?page=${encodeURIComponent(PLAN_PAGE)}&locale=en`, {
        cache: 'no-store',
      });
      const pageTitleRes = await fetch(`/api/admin/page-titles?page=${encodeURIComponent(PLAN_PAGE)}&locale=en`, {
        cache: 'no-store',
      });
      
      const metaData = metaRes.ok ? await metaRes.json() : [];
      const pageTitleData = pageTitleRes.ok ? await pageTitleRes.json() : [];
      
      // If no data exists, open form
      if ((!metaData || metaData.length === 0) && (!pageTitleData || pageTitleData.length === 0)) {
        setIsFormOpen(true);
      }
    } catch (error) {
      console.error('Error checking data:', error);
    }
  };

  const handleFormSave = async () => {
    setRefreshKey((prev) => prev + 1);
    setIsFormOpen(false);
    showToast('Saved successfully.', 'success');
  };

  return (
    <div className="space-y-4">
      {ToastComponent}

      <div className="flex justify-end">
        <Button
          type="button"
          variant="primary"
          size="md"
          rounded="default"
          onClick={() => setIsFormOpen(true)}
        >
          Edit Meta & Page Title
        </Button>
      </div>

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Edit Meta Details & Page Title"
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsFormOpen(false)}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="plans-meta-page-title-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <PlansMetaPageTitleForm
          onClose={() => setIsFormOpen(false)}
          onSave={handleFormSave}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
      </Modal>
    </div>
  );
}
