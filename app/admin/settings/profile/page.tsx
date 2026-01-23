'use client';

import { ProfileSection } from '@/components/admin/settings/profile-section';
import { PageTitle } from '@/components/ui/adminUi/page-title';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Profile Settings"
        description="Manage your profile and password"
      />
      <ProfileSection />
    </div>
  );
}
