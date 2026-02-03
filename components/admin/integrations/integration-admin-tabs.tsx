'use client';

import { useState } from 'react';
import { IntegrationTable } from './integration-table';
import { ConnectorsTable } from './connectors-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { cn } from '@/lib/utils';

type IntegrationTab = 'integration' | 'connectors';

export function IntegrationAdminTabs() {
  const [activeTab, setActiveTab] = useState<IntegrationTab>('integration');

  const tabs = [
    { id: 'integration' as IntegrationTab, label: 'Integration' },
    { id: 'connectors' as IntegrationTab, label: 'Connectors' },
  ];

  return (
    <div className="space-y-4">
      <PageTitle 
        title="Integration"
        description="Manage integrations with icon, title, description, and connectors."
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
        {activeTab === 'integration' && (
          <div id="tab-panel-integration" role="tabpanel" aria-labelledby="tab-integration">
            <IntegrationTable />
          </div>
        )}
        {activeTab === 'connectors' && (
          <div id="tab-panel-connectors" role="tabpanel" aria-labelledby="tab-connectors">
            <ConnectorsTable />
          </div>
        )}
      </div>
    </div>
  );
}
