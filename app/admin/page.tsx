'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { BlogPosts } from '@/components/admin/dashboard/blog-posts';
import { StatsCards } from '@/components/admin/dashboard/stats-cards';
import { BlogStats } from '@/components/admin/dashboard/blog-stats';
import { DashboardContactSubmissions } from '@/components/admin/dashboard/contact-submissions';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Permission, UserRole } from '@/lib/permissions';
import { useSession } from 'next-auth/react';
import type { ContactSubmission } from '@/components/admin/dashboard/contact-submissions';

export default function AdminPage() {
  const { data: session } = useSession();
  const [contentStats, setContentStats] = useState({ totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 });
  const [blogStats, setBlogStats] = useState({ totalPosts: 0, publishedPosts: 0, draftPosts: 0, last30DaysPosts: 0 });
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const userRole = (session?.user as any)?.role || 'user';
  const isAdmin = userRole === UserRole.ADMIN;
  const isBusinessDeveloper = userRole === UserRole.BUSINESS_DEVELOPER;
  const isUser = userRole === UserRole.USER;

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/contact', { credentials: 'include' });
      const data = res.ok ? await res.json() : [];
      setSubmissions(Array.isArray(data) ? data : []);
    } catch {
      setSubmissions([]);
    }
  }, []);

  const stats = useMemo(() => {
    const contactCount = submissions.filter(s => s.source === 'contact').length;
    const pricingCount = submissions.filter(s => s.source === 'pricing').length;
    const demoCount = submissions.filter(s => s.source?.startsWith('demo-') || s.source === 'demo').length;
    
    return {
      totalEnquiries: submissions.length,
      contactCount,
      pricingCount,
      demoCount,
    };
  }, [submissions]);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/stats').then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          return errorData.totalServices !== undefined ? errorData : { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 };
        }
        try {
          const data = await res.json();
          return data;
        } catch (e) {
          return { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 };
        }
      }).catch((err) => {
        return { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 };
      }),
      fetch('/api/admin/blog').then(async (res) => {
        if (!res.ok) {
          return [];
        }
        try {
          return await res.json();
        } catch (e) {
          return [];
        }
      }).catch(() => {
        return [];
      }),
      fetchSubmissions(),
    ])
      .then(([statsData, blogPostsData]) => {
        setContentStats(statsData || { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 });

        // Calculate blog stats
        const posts = Array.isArray(blogPostsData) ? blogPostsData : [];
        const totalPosts = posts.length;
        const publishedPosts = posts.filter((p: any) => p.published === true).length;
        const draftPosts = posts.filter((p: any) => p.published === false).length;

        // Calculate last 30 days posts
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const last30DaysPosts = posts.filter((p: any) => {
          const postDate = new Date(p.createdAt || p.date || 0);
          return postDate >= thirtyDaysAgo;
        }).length;

        setBlogStats({
          totalPosts,
          publishedPosts,
          draftPosts,
          last30DaysPosts,
        });

        setLoading(false);
      })
      .catch(() => {
        setContentStats({ totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0 });
        setBlogStats({ totalPosts: 0, publishedPosts: 0, draftPosts: 0, last30DaysPosts: 0 });
        setLoading(false);
      });
  }, [fetchSubmissions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <PermissionGuard
      requiredPermission={Permission.DASHBOARD_VIEW}
      fallback={
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-center text-gray-600">
            You don&apos;t have permission to view the dashboard.
          </div>
        </div>
      }
    >
      <div className="space-y-5">
        <PageTitle
          title="Dashboard"
          description="Plan, monitor, and manage your content effortlessly."
        />

        {/* Stats Cards - Only for Admin and Business Developers */}
        {(isAdmin || isBusinessDeveloper) && (
          <StatsCards stats={stats} />
        )}

        {/* Contact Submissions Table - Only for Admin and Business Developers */}
        {(isAdmin || isBusinessDeveloper) && (
          <DashboardContactSubmissions submissions={submissions} onUpdate={fetchSubmissions} />
        )}

        {/* Content sections - Only for Admin and Users (not Business Developers) */}
        {(isAdmin || isUser) && (
          <PermissionGuard requiredPermission={Permission.CONTENT_VIEW}>
            <BlogStats
              blogStats={blogStats}
              contentStats={contentStats}
            />

            <BlogPosts />
          </PermissionGuard>
        )}
      </div>
    </PermissionGuard>
  );
}
