'use client';

import Link from 'next/link';
import { Eye } from 'lucide-react';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    country: string | null;
    message: string;
    source: string;
    notes: string | null;
    locale: string;
    createdAt: string;
}

interface ContactSubmissionsProps {
    submissions: ContactSubmission[];
    onDelete?: (id: string) => void;
    onUpdate?: () => void;
}

export function ContactSubmissions({ submissions, onDelete, onUpdate }: ContactSubmissionsProps) {
    return (
        <PermissionGuard
            requiredPermission={Permission.CONTACT_VIEW}
            fallback={
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <p className="text-gray-600">You don&apos;t have permission to view contact submissions.</p>
                </div>
            }
        >
            <div className="bg-white rounded-xl shadow-sm">
                <PageTitle
                    variant="table"
                    title="Contact Submissions"
                >
                    <Link
                        href="/admin/contact-submissions"
                        className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-primary-700 transition"
                    >
                        <Eye className="h-4 w-4" />
                        View All
                    </Link>
                </PageTitle>
                <div className="p-6">
                    {submissions.length === 0 ? (
                        <p className="text-gray-600 text-center py-8">No contact submissions yet.</p>
                    ) : (
                        <div className="space-y-4">
                            {submissions.slice(0, 10).map((submission) => (
                                <div key={submission.id} className="border-b border-gray-200 pb-4 last:border-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">{submission.name}</p>
                                            <p className="text-sm text-gray-600">{submission.email}</p>
                                            <p className="text-sm text-gray-500 mt-1">{submission.message}</p>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {new Date(submission.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PermissionGuard>
    );
}
