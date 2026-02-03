'use client';

import { useState } from 'react';
import { FeaturesTable } from '@/components/admin/features/features-table';
import { FeaturesFaqTable } from '@/components/admin/features/features-faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';

type TabType = 'features' | 'faq';

export default function AdminFeaturesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('features');

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="MLM Features"
        description="Manage features and FAQs displayed on the features page."
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('features')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'features'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Feature
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
      </div>

      {/* Tab Content - Keep both components mounted but hidden */}
      <div className="mt-6">
        <div className={activeTab === 'features' ? 'block' : 'hidden'}>
          <FeaturesTable />
        </div>
        <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
          <FeaturesFaqTable />
        </div>
      </div>
    </div>
  );
}
