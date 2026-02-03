'use client';

import { useState } from 'react';
import { DemoFaqTable } from '@/components/admin/demos/demo-faq-table';
import { DemoTable } from '@/components/admin/demos/demo-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';

type TabType = 'demos' | 'faq';

export default function AdminDemosPage() {
  const [activeTab, setActiveTab] = useState<TabType>('demos');

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="MLM Demos"
        description="Manage demos and FAQs displayed on the demo page."
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('demos')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'demos'
              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
          >
            Demos
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'faq'
              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
          >
            FAQ
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <div className={activeTab === 'demos' ? 'block' : 'hidden'}>
          <DemoTable />
        </div>
        <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
          <DemoFaqTable />
        </div>
      </div>
    </div>
  );
}
