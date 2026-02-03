'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Plus } from 'lucide-react';
import { PlansTable } from '@/components/admin/plans/plans-table';
import { PlansFaqTable } from '@/components/admin/plans/plans-faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Button } from '@/components/ui/adminUi/button';

type TabType = 'plans' | 'faq';

export default function AdminPlansPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('plans');
  const [triggerNewPlan, setTriggerNewPlan] = useState(false);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'faq') {
      setActiveTab('faq');
    } else {
      setActiveTab('plans');
    }
  }, [searchParams]);

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="MLM Plans"
        description="Manage MLM plans and FAQs displayed on the plans page."
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'plans'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              MLM Plans
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'faq'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              FAQ
            </button>
          </nav>
          {activeTab === 'plans' && (
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="primary"
                size="md"
                rounded="default"
                leftIcon={<Plus className="h-4 w-4" />}
                className="whitespace-nowrap"
                onClick={() => setTriggerNewPlan(true)}
              >
                New Plan
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'plans' && (
          <PlansTable
            triggerNewPlan={triggerNewPlan}
            onFormStateChange={(isOpen) => {
              if (!isOpen) setTriggerNewPlan(false);
            }}
          />
        )}
        {activeTab === 'faq' && <PlansFaqTable />}
      </div>
    </div>
  );
}
