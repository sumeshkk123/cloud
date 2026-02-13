'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { resolveIcon } from '@/components/frontend/home/utils';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { IndustrySolutionsForm } from './industry-solutions-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';
import { Sparkles } from 'lucide-react';

interface IndustrySolutionRow {
  id: string;
  title: string;
  description: string;
  icon?: string;
  locale: string;
  showOnHomePage: boolean;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function IndustrySolutionsTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<IndustrySolutionRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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
      const res = await fetch(`/api/admin/industry-solutions?locale=en&withTranslations=true`, {
        cache: 'no-store',
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data?.error || 'Unable to load industry solutions.', 'error');
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: IndustrySolutionRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
            id: String(item.id),
            title: String(item.title || ''),
            description: String(item.description || ''),
            icon: item.icon ? String(item.icon) : undefined,
            locale: String(item.locale || 'en'),
            showOnHomePage: Boolean(item.showOnHomePage ?? false),
            availableLocales: item.availableLocales || [item.locale],
          }))
        : [];
      setItems(mapped);
      setCurrentPage(1);
    } catch (error) {
      setItems([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const getIconComponent = (iconValue?: string | null) => {
    return resolveIcon(iconValue || null, Sparkles);
  };

  const columns = [
    { key: 'icon', label: 'Icon', className: 'w-24' },
    { key: 'title', label: 'Title', className: 'w-1/4' },
    { key: 'description', label: 'Description', className: 'w-2/4' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'showOnHomePage', label: 'Status', className: 'w-24' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

  const handleFormSave = () => {
    loadItems();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
        <Button
          type="button"
          variant="primary"
          size="md"
          rounded="default"
          leftIcon={<Plus className="h-4 w-4" />}
          onClick={() => {
            setEditingId(null);
            setIsFormOpen(true);
          }}
        >
          New Industry Solution
        </Button>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading industry solutions...' : 'No industry solutions available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'icon') {
            const IconComponent = getIconComponent(row.icon);
            return (
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                <IconComponent className="h-4 w-4 text-gray-900 dark:text-gray-100" />
              </div>
            );
          }
          if (column.key === 'title') {
            return <span className="font-medium text-gray-900 dark:text-gray-100">{row.title}</span>;
          }
          if (column.key === 'description') {
            return <span className="line-clamp-2 text-gray-700 dark:text-gray-300">{row.description}</span>;
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            return (
              <LanguageBadges
                availableLocales={locales}
                allLocales={[...i18n.locales]}
                layout="grid"
              />
            );
          }
          if (column.key === 'showOnHomePage') {
            return (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  row.showOnHomePage ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {row.showOnHomePage ? 'On Home' : 'Hidden'}
              </span>
            );
          }
          if (column.key === 'actions') {
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
          return row[column.key as keyof IndustrySolutionRow] as string;
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
          setIsFormLoading(false);
          setFormToast(null);
        }}
        title={editingId ? 'Edit Industry Solution' : 'Add Industry Solution'}
        size="3xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingId(null);
                setIsFormLoading(false);
                setFormToast(null);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="industry-solutions-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <IndustrySolutionsForm
          solutionId={editingId}
          onClose={() => {}}
          onSave={handleFormSave}
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
        onConfirm={async () => {
          if (!deleteId) return;
          try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/industry-solutions?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete industry solution');
            showToast('Industry solution deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setDeleteId(null);
            loadItems();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete industry solution.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        isLoading={isDeleting}
        title="Delete Industry Solution"
        message="Are you sure you want to delete this industry solution? This will remove all language versions."
      />

      {ToastComponent}
    </div>
  );
}
