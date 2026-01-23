'use client';

import { useState } from 'react';
import { ContactTable } from './contact-table';
import { FaqTable } from '@/components/admin/faq/faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { cn } from '@/lib/utils';

type ContactTab = 'address' | 'faq';

export function ContactAdminTabs() {
  const [activeTab, setActiveTab] = useState<ContactTab>('address');

  const tabs = [
    { id: 'address' as ContactTab, label: 'Address' },
    { id: 'faq' as ContactTab, label: 'FAQ' },
  ];

  return (
    <div className="space-y-4">
      <PageTitle 
        title="Contact" 
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tab-panel-${tab.id}`}
                className={cn(
                  "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                  isActive
                    ? "border-primary-500 text-primary-600 dark:text-primary-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'address' && (
          <div id="tab-panel-address" role="tabpanel" aria-labelledby="tab-address">
            <ContactTable />
          </div>
        )}
        {activeTab === 'faq' && (
          <div id="tab-panel-faq" role="tabpanel" aria-labelledby="tab-faq">
            <FaqTable />
          </div>
        )}
      </div>
    </div>
  );
}
