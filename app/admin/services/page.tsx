'use client';

import { useState, useRef } from 'react';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { ServicesTable } from '@/components/admin/services/services-table';
import { ServicesFaqTable } from '@/components/admin/services/services-faq-table';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Button } from '@/components/ui/adminUi/button';
import { Plus } from 'lucide-react';

type TabType = 'services' | 'faq';

export default function AdminServicesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('services');
  const servicesTableRef = useRef<{ openNewForm: () => void }>(null);

  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_CREATE}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage services.
        </div>
      }
    >
      <div className="space-y-4">
        {/* Page Title */}
        <PageTitle
          title="Services"
          description="Manage services and FAQs displayed on the services page."
        />

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex items-center justify-between">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('services')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'services'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Services
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
            </div>
            {activeTab === 'services' && (
              <Button
                type="button"
                variant="primary"
                size="md"
                rounded="default"
                leftIcon={<Plus className="h-4 w-4" />}
                className="whitespace-nowrap"
                onClick={() => {
                  servicesTableRef.current?.openNewForm();
                }}
              >
                New Service
              </Button>
            )}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'services' && <ServicesTable ref={servicesTableRef} />}
          {activeTab === 'faq' && <ServicesFaqTable />}
        </div>
      </div>
    </PermissionGuard>
  );
}
