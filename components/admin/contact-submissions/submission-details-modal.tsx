'use client';

import { Copy, Phone, FileText } from 'lucide-react';
import { Modal } from '@/components/ui/adminUi/modal';
import { useToast } from '@/components/ui/toast';
import type { ContactSubmission } from '@/components/admin/dashboard/contact-submissions';

interface SubmissionDetailsModalProps {
  submission: ContactSubmission | null;
  isOpen: boolean;
  onClose: () => void;
  onMakeNote: () => void;
}

const sourceLabels: Record<string, string> = {
  contact: 'Contact',
  pricing: 'Pricing',
  demo: 'Demo',
  services: 'Services',
  'mlm-software-modules': 'Modules',
};

function slugToPageName(slug: string): string {
  return slug
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

function getSourceLabel(source?: string, notes?: string | null): string {
  const s = (source || 'contact').trim();
  const n = (notes || '').toLowerCase();
  if (s.startsWith('module-')) {
    const slug = s.replace('module-', '');
    return slug ? `Module: ${slugToPageName(slug)}` : 'Module';
  }
  if (s.startsWith('demo-')) return `Demo: ${s.replace('demo-', '')}`;
  if (s === 'project-brief' && notes) {
    if (n.includes('services page')) return 'Services';
    if (n.includes('module page:')) {
      const match = notes.match(/module page:\s*([^\s,]+)/i);
      if (match?.[1]) return `Module: ${slugToPageName(match[1])}`;
      return 'Modules';
    }
    if (n.includes('modules page') || n.includes('mlm software modules')) return 'Modules';
    return 'Contact';
  }
  if (s === 'project-brief') return 'Contact';
  if (s === 'contact' && notes) {
    if (n.includes('services page') || n.includes('enquiry from services')) return 'Services';
    if (n.includes('module page:') || n.includes('enquiry from module')) {
      const match = notes.match(/(?:module page|enquiry from module[^:]*):\s*([^\s,]+)/i);
      if (match?.[1]) return `Module: ${slugToPageName(match[1])}`;
      return 'Modules';
    }
    if (n.includes('modules page') || n.includes('mlm software modules')) return 'Modules';
  }
  if (s === 'hero-section-country') return 'Hero section - country';
  if (s === 'hero-section-module' || s === 'mlm-software-modules') return 'Hero section - module';
  if (s === 'hero-section' || s === 'cta-section') {
    const pageMatch = notes?.match(/Page:\s*(.+?)(?:\s·|$)/i);
    const page = pageMatch?.[1]?.trim();
    const base = s === 'hero-section' ? 'Hero section' : 'CTA section';
    return page ? `${base} (${page})` : base;
  }
  if (s.startsWith('service-')) {
    const slug = s.replace('service-', '');
    return slug ? `Service: ${slugToPageName(slug)}` : 'Service';
  }
  return sourceLabels[s] || s;
}

function getWebsiteDisplay(value?: string | null): string {
  if (!value?.trim()) return 'Cloud MLM'; // Submissions in this DB without sourceSite are from Cloud MLM
  const v = value.trim().toLowerCase();
  if (v.includes('business') && (v.includes('mlm') || v.includes('mlmsoftware'))) return 'Business MLM';
  if (v.includes('cloud') && (v.includes('mlm') || v.includes('mlmsoftware'))) return 'Cloud MLM';
  return value.trim();
}

function isModuleSource(source?: string, notes?: string | null): boolean {
  const s = (source || '').trim();
  if (s.startsWith('module-') || s === 'mlm-software-modules' || s === 'hero-section-module') return true;
  if (notes) {
    const n = notes.toLowerCase();
    return (
      n.includes('module page') ||
      n.includes('enquiry from module') ||
      n.includes('modules page') ||
      n.includes('mlm software modules')
    );
  }
  return false;
}

function getSourceBadgeClasses(source?: string, notes?: string | null): string {
  const s = (source || 'contact').trim();
  const baseClasses = 'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full';
  const n = (notes || '').toLowerCase();
  const fromNotes =
    (s === 'project-brief' || s === 'contact') &&
    (n.includes('services page') ||
      n.includes('enquiry from services') ||
      n.includes('module page') ||
      n.includes('enquiry from module') ||
      n.includes('modules page') ||
      n.includes('mlm software modules'));
  const effectiveSource = fromNotes
    ? n.includes('services page') || n.includes('enquiry from services')
      ? 'services'
      : n.includes('module page') || n.includes('enquiry from module') || n.includes('modules page') || n.includes('mlm software modules')
        ? 'mlm-software-modules'
        : 'contact'
    : s;
  const isModuleStyle = effectiveSource === 'mlm-software-modules' || effectiveSource.startsWith('module-') || effectiveSource === 'hero-section-module';
  if (isModuleStyle) {
    return `${baseClasses} bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm`;
  }
  if (effectiveSource === 'hero-section-country') {
    return `${baseClasses} bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-200`;
  }
  if (effectiveSource.startsWith('demo-')) {
    return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200`;
  }
  switch (effectiveSource) {
    case 'contact':
      return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200`;
    case 'pricing':
      return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200`;
    case 'demo':
      return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200`;
    case 'services':
      return `${baseClasses} bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`;
  }
}

export function SubmissionDetailsModal({
  submission,
  isOpen,
  onClose,
  onMakeNote,
}: SubmissionDetailsModalProps) {
  const { showToast } = useToast();

  if (!submission) return null;

  const sourceLabel = getSourceLabel(submission.source, submission.notes);
  const isModule = isModuleSource(submission.source, submission.notes);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Submission Details"
      size="2xl"
      headerActions={
        <button
          onClick={onMakeNote}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Make Note
        </button>
      }
    >
      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{submission.name || '—'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{getWebsiteDisplay(submission.sourceSite)}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-gray-900 dark:text-white">{submission.email}</span>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(submission.email);
                    showToast('Email copied to clipboard!', 'success');
                  } catch {
                    showToast('Failed to copy email', 'error');
                  }
                }}
                className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                <Copy className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</label>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm text-gray-900 dark:text-white">{submission.phone || '—'}</span>
              {submission.phone && (
                <a
                  href={`tel:${submission.phone.replace(/[\s\-\(\)]/g, '')}`}
                  className="p-1.5 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  title="Call phone number"
                  aria-label="Call phone number"
                >
                  <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
                </a>
              )}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Country</label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{submission.country || '—'}</p>
          </div>
          <div className={isModule ? 'rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/50 p-4 ring-1 ring-indigo-200/50 dark:ring-indigo-800/50' : ''}>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Source</label>
            <p className="mt-1">
              <span className={getSourceBadgeClasses(submission.source, submission.notes)}>{sourceLabel}</span>
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">
              {new Date(submission.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Message</label>
          <p className="mt-1 text-sm text-gray-900 dark:text-white whitespace-pre-wrap bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            {submission.message}
          </p>
        </div>
        {submission.notes && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Admin Notes</label>
            <div
              className="prose prose-sm dark:prose-invert max-w-none text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 p-4 rounded-lg [&_p]:my-1 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mt-3 [&_h2]:mb-2"
              dangerouslySetInnerHTML={{ __html: submission.notes }}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
