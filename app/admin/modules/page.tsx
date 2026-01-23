'use client';

import { useState } from 'react';
import { ModulesTable } from '@/components/admin/modules/modules-table';
import { ModulesFaqTable } from '@/components/admin/modules/modules-faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';

type TabType = 'modules' | 'faq';

export default function AdminModulesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('modules');

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <PageTitle
        title="MLM Modules"
        description="Manage modules and FAQs displayed on the modules page."
      />

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('modules')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'modules'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Modules
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'faq'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            FAQ
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'modules' && <ModulesTable />}
        {activeTab === 'faq' && <ModulesFaqTable />}
      </div>
    </div>
  );
}
