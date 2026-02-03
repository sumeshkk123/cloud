'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import * as RemixIcon from '@remixicon/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { PlansForm } from './plans-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

library.add(fas);

interface PlanRow {
  id: string;
  title: string;
  subtitle?: string | null;
  icon?: string | null;
  locale: string;
  showOnHomePage: boolean;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

function parseIconValue(value?: string): { type: 'lucide' | 'remix' | 'fontawesome' | null; name: string } {
  if (!value) return { type: null, name: '' };
  if (value.includes(':')) {
    const [type, name] = value.split(':');
    if (type === 'lucide' || type === 'remix' || type === 'fontawesome') return { type, name };
  }
  return { type: 'lucide', name: value };
}

function getIconComponent(iconName?: string) {
  if (!iconName) return null;
  const { type, name } = parseIconValue(iconName);
  if (type === 'lucide') {
    return (LucideIcons as any)[name] as React.ComponentType<{ className?: string }> | undefined;
  }
  if (type === 'remix') {
    return (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
  }
  if (type === 'fontawesome') {
    const clean = name.replace(/^fa/, '');
    const variations = [`fa${clean}`, `fa${clean.charAt(0).toUpperCase() + clean.slice(1)}`, name];
    for (const key of variations) {
      if (fas[key as keyof typeof fas]) {
        return { type: 'fontawesome', icon: fas[key as keyof typeof fas] };
      }
    }
  }
  return null;
}

interface PlansTableProps {
  triggerNewPlan?: boolean;
  onFormStateChange?: (isOpen: boolean, editingId: string | null) => void;
}

export function PlansTable({ triggerNewPlan, onFormStateChange }: PlansTableProps) {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<PlanRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/plans?locale=en&withTranslations=true&_t=${timestamp}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data?.error || 'Unable to load plans.', 'error');
        setItems([]);
        return;
      }
      const mapped: PlanRow[] = Array.isArray(data)
        ? data.map((p: any) => ({
            id: String(p.id),
            title: String(p.title || ''),
            subtitle: p.subtitle ? String(p.subtitle) : null,
            icon: p.icon ? String(p.icon) : null,
            locale: String(p.locale || 'en'),
            showOnHomePage: Boolean(p.showOnHomePage ?? false),
            availableLocales: p.availableLocales || [p.locale],
          }))
        : [];
      setItems(mapped);
      setCurrentPage(1);
    } catch (error) {
      showToast('Failed to load plans.', 'error');
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (triggerNewPlan) {
      setEditingId(null);
      setIsFormOpen(true);
      onFormStateChange?.(true, null);
    }
  }, [triggerNewPlan, onFormStateChange]);

  useEffect(() => {
    onFormStateChange?.(isFormOpen, editingId);
  }, [isFormOpen, editingId, onFormStateChange]);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const columns = [
    { key: 'icon', label: 'Icon', className: 'w-20' },
    { key: 'title', label: 'Title', className: 'w-1/4' },
    { key: 'subtitle', label: 'Subtitle', className: 'w-1/4' },
    { key: 'languages', label: 'Languages', className: 'w-40' },
    { key: 'showOnHomePage', label: 'Status', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/plans?id=${encodeURIComponent(deleteId)}`, { method: 'DELETE' });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to delete plan');
      showToast('Plan deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDeleteId(null);
      loadItems();
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Failed to delete plan.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-4">
      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading plans...' : 'No plans yet.'}
        renderCell={(col, row) => {
          if (col.key === 'icon') {
            const comp = getIconComponent(row.icon);
            const { type } = parseIconValue(row.icon);
            return (
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {comp ? (
                  type === 'fontawesome' && typeof comp === 'object' && 'icon' in comp ? (
                    <FontAwesomeIcon icon={(comp as any).icon} className="h-4 w-4 text-gray-700 dark:text-gray-200" />
                  ) : typeof comp === 'function' ? (
                    React.createElement(comp, { className: 'h-4 w-4 text-gray-700 dark:text-gray-200' })
                  ) : (
                    <span className="text-xs text-gray-500">—</span>
                  )
                ) : (
                  <span className="text-xs text-gray-500">—</span>
                )}
              </div>
            );
          }
          if (col.key === 'title') return <span className="font-medium text-gray-900 dark:text-white">{row.title}</span>;
          if (col.key === 'subtitle') return <span className="text-gray-600 dark:text-gray-400 truncate max-w-[200px] block">{row.subtitle || '—'}</span>;
          if (col.key === 'languages') {
            return (
              <LanguageBadges
                availableLocales={row.availableLocales || [row.locale]}
                allLocales={[...i18n.locales]}
                layout="grid"
              />
            );
          }
          if (col.key === 'showOnHomePage') {
            return (
              <span
                className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${row.showOnHomePage ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
              >
                {row.showOnHomePage ? 'On Home Page' : 'Hidden'}
              </span>
            );
          }
          if (col.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingId(row.id);
                  setIsFormOpen(true);
                }}
                onDelete={() => {
                  setDeleteId(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return null;
        }}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
      />

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingId(null);
          setFormToast(null);
        }}
        title={editingId ? 'Edit Plan' : 'New Plan'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsFormOpen(false);
                setEditingId(null);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button type="submit" form="plans-form" variant="primary" disabled={isFormSaving || isFormLoading}>
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <PlansForm
          planId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
          }}
          onSave={() => loadItems()}
          onToastChange={setFormToast}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
        {formToast}
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Plan"
        message="Are you sure you want to delete this plan? This action cannot be undone."
      />

      {ToastComponent}
    </div>
  );
}
