'use client';

import { useState, useEffect, useCallback } from 'react';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { AllSubmissions } from '@/components/admin/contact-submissions/submissions-table';
import type { ContactSubmission } from '@/components/admin/dashboard/contact-submissions';
import { TableSkeleton } from '@/components/ui/adminUi/table-skeleton';

export default function AdminContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/contact', {
        credentials: 'include',
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' },
      });
      const data = res.ok ? await res.json() : [];
      const list = Array.isArray(data) ? data : [];
      // Normalize: ensure each submission has sourceSite (for older records or API variance)
      setSubmissions(
        list.map((s: Record<string, unknown>) => ({
          ...s,
          sourceSite: s.sourceSite ?? s.source_site ?? null,
        })) as ContactSubmission[]
      );
    } catch {
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  // Auto-refresh every 15 seconds so new enquiries show without manual refresh
  useEffect(() => {
    const interval = setInterval(fetchSubmissions, 15000);
    return () => clearInterval(interval);
  }, [fetchSubmissions]);

  return (
    <PermissionGuard
      requiredPermission={Permission.CONTACT_VIEW}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 text-center text-gray-600 dark:text-gray-400">
          You don&apos;t have permission to view contact submissions.
        </div>
      }
    >
      {loading ? (
        <div className="space-y-4">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <TableSkeleton rows={10} columns={8} />
        </div>
      ) : (
        <AllSubmissions submissions={submissions} onUpdate={fetchSubmissions} />
      )}
    </PermissionGuard>
  );
}
