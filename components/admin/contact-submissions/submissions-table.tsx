'use client';

import { useState } from 'react';
import { Eye, Copy, Check, Phone, Trash2 } from 'lucide-react';
import { Table } from '@/components/ui/adminUi/table';
import { SearchInput } from '@/components/ui/adminUi/search-input';
import { ContactSubmissionsFilter } from '@/components/admin/contact-submissions/data-filter';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { SubmissionDetailsModal } from '@/components/admin/contact-submissions/submission-details-modal';
import { NotesModal } from '@/components/admin/contact-submissions/notes-modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { useToast } from '@/components/ui/toast';
import { PermissionGuard } from '@/components/admin/permissions/permission-guard';
import { Permission } from '@/lib/permissions';
import { useSubmissionsFilter } from '@/components/admin/contact-submissions/use-submissions-filter';
import type { ContactSubmission } from '@/components/admin/dashboard/contact-submissions';

interface ContactSubmissionsTableProps {
  submissions: (ContactSubmission & { no?: number; date?: string })[];
  onView?: (submission: ContactSubmission) => void;
  onUpdate?: () => void;
  emptyMessage?: string;
  className?: string;
  onSubmissionUpdate?: (submission: ContactSubmission) => void;
}

const sourceLabels: Record<string, string> = {
  contact: 'Contact',
  pricing: 'Pricing',
  demo: 'Demo',
};

function getSourceLabel(source?: string) {
  const s = source || 'contact';
  if (s.startsWith('demo-')) return `Demo: ${s.replace('demo-', '')}`;
  return sourceLabels[s] || s;
}

function getWebsiteDisplay(value?: string | null): string {
  if (!value?.trim()) return 'Cloud MLM'; // Submissions in this DB without sourceSite are from Cloud MLM
  const v = value.trim().toLowerCase();
  if (v.includes('business') && (v.includes('mlm') || v.includes('mlmsoftware'))) {
    return 'Business MLM';
  }
  if (v.includes('cloud') && (v.includes('mlm') || v.includes('mlmsoftware'))) {
    return 'Cloud MLM';
  }
  return value.trim();
}

function getSourceBadgeClasses(source?: string): string {
  const s = source || 'contact';
  const baseClasses = 'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full';
  if (s.startsWith('demo-')) {
    return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200`;
  }
  switch (s) {
    case 'contact':
      return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200`;
    case 'pricing':
      return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200`;
    case 'demo':
      return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`;
  }
}

export function ContactSubmissionsTable({
  submissions,
  onView,
  onUpdate,
  onSubmissionUpdate,
  emptyMessage = 'No contact submissions found.',
  className = '',
}: ContactSubmissionsTableProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [notesVersion, setNotesVersion] = useState(0);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { showToast, ToastComponent } = useToast();

  const handleView = (submission: ContactSubmission) => {
    const latest = submissions.find((s) => s.id === submission.id) || submission;
    setSelectedSubmission(latest as ContactSubmission);
    setNotesVersion(0);
    onView?.(latest as ContactSubmission);
  };

  const handleSaveNotes = async (notes: string) => {
    if (!selectedSubmission) return;
    setIsSavingNotes(true);
    try {
      const response = await fetch(`/api/admin/contact/${selectedSubmission.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
      if (response.ok) {
        const updated = await response.json();
        setSelectedSubmission({ ...selectedSubmission, notes: updated.notes ?? notes });
        setNotesVersion((prev) => prev + 1);
        onSubmissionUpdate?.({ ...selectedSubmission, notes: updated.notes ?? notes });
        showToast('Notes updated successfully', 'success');
        setShowNotesModal(false);
        onUpdate?.();
      } else {
        showToast('Failed to update notes', 'error');
      }
    } catch {
      showToast('Failed to update notes', 'error');
    } finally {
      setIsSavingNotes(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/admin/contact/${deleteId}`, { method: 'DELETE' });
      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error || 'Failed to delete');
      }
      showToast('Contact submission deleted successfully', 'success');
      setDeleteConfirmOpen(false);
      setDeleteId(null);
      onUpdate?.();
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed to delete', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {ToastComponent}
      <Table
        columns={[
          { key: 'no', label: 'No.' },
          { key: 'name', label: 'Name', className: 'font-medium text-gray-900 dark:text-white' },
          { key: 'website', label: 'Website' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone Number' },
          { key: 'country', label: 'Country' },
          { key: 'source', label: 'Source' },
          { key: 'date', label: 'Date' },
          { key: 'actions', label: 'Actions', className: 'whitespace-nowrap text-sm font-medium' },
        ]}
        data={submissions}
        renderCell={(column, row, index) => {
          const r = row as ContactSubmission & { no?: number; date?: string };
          if (column.key === 'no') return <span className="text-gray-500 dark:text-gray-400">{r.no ?? index + 1}</span>;
          if (column.key === 'name') return <span className="font-medium text-gray-900 dark:text-white">{r.name || '—'}</span>;
          if (column.key === 'website') return <span className="font-bold">{getWebsiteDisplay(r.sourceSite)}</span>;
          if (column.key === 'email') {
            return (
              <div className="flex items-center gap-2">
                <span>{r.email}</span>
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    try {
                      await navigator.clipboard.writeText(r.email);
                      setCopiedEmail(r.id);
                      setTimeout(() => setCopiedEmail(null), 2000);
                    } catch {}
                  }}
                  className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail === r.id ? (
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  )}
                </button>
              </div>
            );
          }
          if (column.key === 'phone') {
            return (
              <div className="flex items-center gap-2">
                <span>{r.phone ?? '—'}</span>
                {r.phone && (
                  <a
                    href={`tel:${r.phone.replace(/[\s\-\(\)]/g, '')}`}
                    className="p-1 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    title="Call phone number"
                    aria-label="Call phone number"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                  </a>
                )}
              </div>
            );
          }
          if (column.key === 'country') return <span>{r.country ?? '—'}</span>;
          if (column.key === 'source') {
            return (
              <span className={getSourceBadgeClasses(r.source)}>{getSourceLabel(r.source)}</span>
            );
          }
          if (column.key === 'date') return <span>{r.date ?? '—'}</span>;
          if (column.key === 'actions') {
            return (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleView(r)}
                  className="text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200 inline-flex items-center gap-1"
                >
                  <Eye className="h-4 w-4" />
                  View
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteId(r.id);
                    setDeleteConfirmOpen(true);
                  }}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 inline-flex items-center gap-1"
                  title="Delete submission"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          }
          return null;
        }}
        emptyMessage={emptyMessage}
        className={className}
      />

      <SubmissionDetailsModal
        submission={selectedSubmission}
        isOpen={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        onMakeNote={() => setShowNotesModal(true)}
      />

      <NotesModal
        isOpen={showNotesModal && !!selectedSubmission}
        onClose={() => setShowNotesModal(false)}
        initialNotes={selectedSubmission?.notes ?? ''}
        keyId={selectedSubmission?.id}
        onSave={handleSaveNotes}
        isLoading={isSavingNotes}
      />

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
        title="Delete Contact Submission"
        message="Are you sure you want to delete this contact submission? This action cannot be reversed."
        isLoading={isDeleting}
      />
    </>
  );
}

interface AllSubmissionsProps {
  submissions: ContactSubmission[];
  onDelete?: (id: string) => void;
  onUpdate?: () => void;
}

export function AllSubmissions({ submissions, onUpdate }: AllSubmissionsProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {
    searchQuery,
    currentPage,
    sourceFilter,
    startDate,
    endDate,
    countryFilter,
    nameFilter,
    websiteFilter,
    uniqueCountries,
    uniqueWebsites,
    filteredSubmissions,
    paginatedSubmissions,
    totalPages,
    setCurrentPage,
    setSourceFilter,
    setStartDate,
    setEndDate,
    setCountryFilter,
    setNameFilter,
    setWebsiteFilter,
    handleFilterChange,
    handleSearchChange,
    clearFilters,
  } = useSubmissionsFilter(submissions, 20);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onUpdate?.();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <PermissionGuard
      requiredPermission={Permission.CONTACT_VIEW}
      fallback={
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
          <p className="text-gray-600 dark:text-gray-400">You don&apos;t have permission to view contact submissions.</p>
        </div>
      }
    >
      <div className="space-y-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Submissions</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {filteredSubmissions.length} submission{filteredSubmissions.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Refresh submissions"
              title="Refresh submissions"
            >
              <span className={`inline-block w-4 h-4 ${isRefreshing ? 'animate-spin rounded-full border-2 border-primary-500 border-t-transparent' : ''}`}>
                {!isRefreshing && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
              </span>
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <SearchInput
              wrapperClassName="max-w-md"
              placeholder="Search by name, website, email, phone, country, or message..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
            <ContactSubmissionsFilter
              sourceFilter={sourceFilter}
              startDate={startDate}
              endDate={endDate}
              countryFilter={countryFilter}
              nameFilter={nameFilter}
              websiteFilter={websiteFilter}
              uniqueCountries={uniqueCountries}
              uniqueWebsites={uniqueWebsites}
              onSourceFilterChange={(value) => handleFilterChange(() => setSourceFilter(value))}
              onStartDateChange={(value) => handleFilterChange(() => setStartDate(value))}
              onEndDateChange={(value) => handleFilterChange(() => setEndDate(value))}
              onCountryFilterChange={(value) => handleFilterChange(() => setCountryFilter(value))}
              onNameFilterChange={(value) => handleFilterChange(() => setNameFilter(value))}
              onWebsiteFilterChange={(value) => handleFilterChange(() => setWebsiteFilter(value))}
              onClearFilters={clearFilters}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
          <ContactSubmissionsTable
            submissions={paginatedSubmissions.map((submission, index) => ({
              ...submission,
              no: (currentPage - 1) * 20 + index + 1,
              date: formatDate(submission.createdAt),
            }))}
            onUpdate={onUpdate}
            emptyMessage="No contact submissions found."
            className="border-0 shadow-none rounded-none"
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={20}
          totalItems={filteredSubmissions.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </PermissionGuard>
  );
}
