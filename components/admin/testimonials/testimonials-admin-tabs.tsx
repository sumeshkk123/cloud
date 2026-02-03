'use client';

import { useState } from 'react';
import { TestimonialsTable } from './testimonials-table';
import { StoriesTable } from './stories-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { cn } from '@/lib/utils';

type TestimonialsTab = 'testimonials' | 'stories';

export function TestimonialsAdminTabs() {
  const [activeTab, setActiveTab] = useState<TestimonialsTab>('testimonials');

  const tabs = [
    { id: 'testimonials' as TestimonialsTab, label: 'Testimonials' },
    { id: 'stories' as TestimonialsTab, label: 'Stories' },
  ];

  return (
    <div className="space-y-4">
      <PageTitle
        title="Testimonials"
        description="Manage testimonials and success stories displayed on the website."
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
        {activeTab === 'testimonials' && (
          <div id="tab-panel-testimonials" role="tabpanel" aria-labelledby="tab-testimonials">
            <TestimonialsTable />
          </div>
        )}
        {activeTab === 'stories' && (
          <div id="tab-panel-stories" role="tabpanel" aria-labelledby="tab-stories">
            <StoriesTable />
          </div>
        )}
      </div>
    </div>
  );
}
