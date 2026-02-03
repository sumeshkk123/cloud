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
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { AICopilotForm } from './ai-copilot-form';
import { i18n, localeNames } from '@/i18n-config';
import { LanguageBadges } from '@/components/admin/common/language-badges';

// Register FontAwesome icons
library.add(fas);

interface AICopilotRow {
  id: string;
  icon: string | null;
  title: string;
  content: string;
  locale: string;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function AICopilotTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<AICopilotRow[]>([]);
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
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/ai-copilot?locale=en&_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load AI Copilots.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: AICopilotRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
          id: String(item.id),
          icon: item.icon ? String(item.icon) : null,
          title: String(item.title || ''),
          content: String(item.content || ''),
          locale: String(item.locale || 'en'),
        }))
        : [];

      // Fetch available locales for each AI Copilot (by icon)
      const itemsWithLocales = await Promise.all(
        mapped.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/ai-copilot?id=${encodeURIComponent(item.id)}&all=true&_t=${timestamp}`,
              { cache: 'no-store' }
            );
            if (translationsRes.ok) {
              const translationsData = await translationsRes.json();
              const locales = translationsData?.translations?.map((t: any) => t.locale) || [item.locale];
              return { ...item, availableLocales: locales };
            }
          } catch (error) {
            // Silent fail
          }
          return { ...item, availableLocales: [item.locale] };
        })
      );

      setItems(itemsWithLocales);
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

  const handleNew = () => {
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setIsFormOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/ai-copilot?id=${encodeURIComponent(deleteId)}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to delete');
      }

      showToast('AI Copilot deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDeleteId(null);
      await loadItems();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete AI Copilot.';
      showToast(message, 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormToast(null);
    setIsFormLoading(false);
    setIsFormSaving(false);
  };

  const handleFormSave = async () => {
    await loadItems();
    // Don't close the modal - let user continue editing other language tabs
  };

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return items.slice(start, end);
  }, [items, currentPage]);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const parseIconValue = (value?: string | null): { type: 'lucide' | 'remix' | 'fontawesome' | null; name: string } => {
    if (!value) return { type: null, name: '' };

    if (value.includes(':')) {
      const [type, name] = value.split(':');
      if (type === 'lucide' || type === 'remix' || type === 'fontawesome') {
        return { type, name };
      }
    }

    // Default to lucide if no prefix
    return { type: 'lucide', name: value };
  };

  const getIconComponent = (iconName?: string | null) => {
    if (!iconName) return null;

    const { type, name } = parseIconValue(iconName);

    if (type === 'lucide' || !type) {
      const IconComponent = (LucideIcons as any)[name] as React.ComponentType<{ className?: string }> | undefined;
      return IconComponent;
    }
    if (type === 'remix') {
      const IconComponent = (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
      return IconComponent;
    }
    if (type === 'fontawesome') {
      return { type: 'fontawesome', name };
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <PageTitle title="AI Co-pilot" description="Manage AI Co-pilot content across all languages">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={handleNew}
          >
            New AI Copilot
          </Button>
        </div>
      </PageTitle>

      {ToastComponent}

      <Table
        columns={[
          { key: 'icon', label: 'Icon', className: 'w-24' },
          { key: 'title', label: 'Title', className: 'w-2/5' },
          { key: 'content', label: 'Content', className: 'w-2/5' },
          { key: 'languages', label: 'Languages', className: 'w-48' },
          { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
        ]}
        data={paginatedItems}
        isLoading={isLoading}
        emptyMessage="No AI Copilots yet. Create your first AI Copilot!"
        renderCell={(column, row) => {
          if (column.key === 'icon') {
            if (!row.icon) return <span className="text-gray-400">—</span>;
            const iconComponent = getIconComponent(row.icon);
            if (!iconComponent) return <span className="text-gray-400">—</span>;

            if (typeof iconComponent === 'object' && 'type' in iconComponent && iconComponent.type === 'fontawesome') {
              return (
                <FontAwesomeIcon
                  icon={iconComponent.name as any}
                  className="h-5 w-5 text-gray-600 dark:text-gray-400"
                />
              );
            }

            const IconComponent = iconComponent as React.ComponentType<{ className?: string }>;
            return IconComponent ? (
              <IconComponent className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <span className="text-gray-400">{row.icon}</span>
            );
          }
          if (column.key === 'title') {
            return (
              <span className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
                {row.title || '—'}
              </span>
            );
          }
          if (column.key === 'content') {
            return (
              <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {row.content || '—'}
              </span>
            );
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            return (
              <LanguageBadges
                availableLocales={[...locales]}
                allLocales={[...i18n.locales]}
                layout="grid"
              />
            );
          }
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => handleEdit(row.id)}
                onDelete={() => {
                  setDeleteId(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof AICopilotRow] as string;
        }}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={items.length}
          onPageChange={setCurrentPage}
        />
      )}

      <Modal
        isOpen={isFormOpen}
        onClose={handleFormClose}
        title={editingId ? 'Edit AI Copilot' : 'New AI Copilot'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={handleFormClose}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="ai-copilot-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save Translation'}
            </Button>
          </div>
        }
      >
        {formToast}
        <AICopilotForm
          copilotId={editingId}
          onClose={handleFormClose}
          onSave={handleFormSave}
          onToastChange={setFormToast}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
        title="Delete AI Copilot"
        message="Are you sure you want to delete this AI Copilot? This will delete all language translations. This action cannot be undone."
        isLoading={isDeleting}
      />
    </div>
  );
}
