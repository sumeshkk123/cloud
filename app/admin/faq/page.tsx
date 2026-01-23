'use client';

import { useState } from 'react';
import { FaqCategoriesTab } from '@/components/admin/faq/faq-categories-tab';
import { FaqTable } from '@/components/admin/faq/faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';

type TabType = 'faqs' | 'categories';

export default function AdminFaqPage() {
  const [activeTab, setActiveTab] = useState<TabType>('faqs');

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="FAQs"
        description="Manage frequently asked questions shown on the website."
      />

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'faqs'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'categories'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Categories
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'faqs' && <FaqTable />}
        {activeTab === 'categories' && <FaqCategoriesTab />}
      </div>
    </div>
  );
}
