'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { BlogTable } from '@/components/admin/blog/blog-table';
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
  const [contentStats, setContentStats] = useState({ totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 });
  const [blogStats, setBlogStats] = useState({ totalPosts: 0, publishedPosts: 0, draftPosts: 0, last30DaysPosts: 0 });
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
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
          return errorData.totalServices !== undefined ? errorData : { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 };
        }
        try {
          const data = await res.json();
          return data;
        } catch (e) {
          return { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 };
        }
      }).catch((err) => {
        return { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 };
      }),
      // Same blog_posts table as public /blogs (lib/api/blog)
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
        setContentStats(statsData || { totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 });

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
        setBlogPosts(posts);

        setLoading(false);
      })
      .catch(() => {
        setContentStats({ totalServices: 0, totalModules: 0, totalPlans: 0, totalFeatures: 0, totalDemos: 0 });
        setBlogStats({ totalPosts: 0, publishedPosts: 0, draftPosts: 0, last30DaysPosts: 0 });
        setBlogPosts([]);
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

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
              <PageTitle variant="table" title="Blog Posts">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href="/admin/blog/new"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-primary-700 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Add Blog Post
                  </Link>
                  <Link
                    href="/admin/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    View All
                  </Link>
                </div>
              </PageTitle>
              <div className="p-6">
                <BlogTable
                  initialData={blogPosts}
                  limit={10}
                  hideToolbar
                  compactActions
                  embedded
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
              <PageTitle variant="table" title="Demos">
                <Link
                  href="/admin/demos"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  View All
                </Link>
              </PageTitle>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage MLM plan demos and demo FAQs. Total demos: <span className="font-semibold text-gray-900 dark:text-white">{contentStats.totalDemos ?? 0}</span>.
                </p>
              </div>
            </div>
          </PermissionGuard>
        )}
      </div>
    </PermissionGuard>
  );
}
