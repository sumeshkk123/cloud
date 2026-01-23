import type { Metadata } from 'next';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { ContactAdminTabs } from '@/components/admin/contact/contact-admin-tabs';

export const metadata: Metadata = {
  title: 'Contact Admin - Cloud MLM Software',
  description: 'View and manage contact addresses and FAQs for the website.',
  openGraph: {
    title: 'Contact Admin - Cloud MLM Software',
    description: 'View and manage contact addresses and FAQs for the website.',
    type: 'website',
  },
};

export default function AdminContactPage() {
  return (
    <PermissionGuard
      requiredPermission={Permission.CONTENT_EDIT}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to manage contact addresses.
        </div>
      }
    >
      <ContactAdminTabs />
    </PermissionGuard>
  );
}
