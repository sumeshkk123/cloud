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
import { IndustrySolutionsForm } from './industry-solutions-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

// Register FontAwesome icons
library.add(fas);

interface IndustrySolutionRow {
  id: string;
  title: string;
  description: string;
  icon: string;
  showOnHomePage: boolean;
  locale: string;
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
      const res = await fetch(`/api/admin/industry-solutions?locale=en`, {
        cache: 'no-store',
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load industry solutions.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: IndustrySolutionRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
            id: String(item.id),
            title: String(item.title || ''),
            description: String(item.description || ''),
            icon: String(item.icon || ''),
            showOnHomePage: Boolean(item.showOnHomePage ?? false),
            locale: String(item.locale || 'en'),
          }))
        : [];

      // Fetch available locales for each solution
      const itemsWithLocales = await Promise.all(
        mapped.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/industry-solutions?id=${encodeURIComponent(item.id)}&all=true`,
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

  const filtered = useMemo(() => {
    return items;
  }, [items]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const parseIconValue = (value?: string): { type: 'lucide' | 'remix' | 'fontawesome' | null; name: string } => {
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

  const getIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    
    const { type, name } = parseIconValue(iconName);
    
    if (type === 'lucide') {
      const IconComponent = (LucideIcons as any)[name] as React.ComponentType<{ className?: string }> | undefined;
      return IconComponent;
    } else if (type === 'remix') {
      const IconComponent = (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
      return IconComponent;
    } else if (type === 'fontawesome') {
      const iconNameClean = name.replace(/^fa/, '');
      // Try various naming conventions that FontAwesome uses
      const variations = [
        `fa${iconNameClean}`, // Original with fa prefix (e.g., faPersonChalkboard)
        `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1)}`, // First letter uppercase
        `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1).toLowerCase()}`, // First uppercase, rest lowercase
        name, // Original name as-is
        `fa${name}`, // Original name with fa prefix
      ];
      
      for (const key of variations) {
        if (fas[key as keyof typeof fas]) {
          return { type: 'fontawesome', icon: fas[key as keyof typeof fas] };
        }
      }
    }
    
    return null;
  };

  const columns = useMemo(
    () => [
      { key: 'icon', label: 'Icon', className: 'w-24' },
      { key: 'title', label: 'Title', className: 'w-1/4' },
      { key: 'description', label: 'Description', className: 'w-1/3' },
      { key: 'languages', label: 'Languages', className: 'w-32' },
      { key: 'showOnHomePage', label: 'Status', className: 'w-24' },
      { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
    ],
    []
  );

  return (
    <div className="space-y-4">
      <PageTitle title="Industry Solutions" description="Manage industry solutions displayed on the website.">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={() => {
              setEditingId(null);
              setIsFormOpen(true);
            }}
          >
            New Industry Solution
          </Button>
        </div>
      </PageTitle>

      <Table
        columns={columns}
        data={paginated}
        emptyMessage={isLoading ? 'Loading industry solutions...' : 'No industry solutions available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'icon') {
            const iconComponent = getIconComponent(row.icon);
            const { type } = parseIconValue(row.icon);
            
            return (
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                {iconComponent ? (
                  type === 'fontawesome' && typeof iconComponent === 'object' && 'icon' in iconComponent ? (
                    <FontAwesomeIcon icon={iconComponent.icon} className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  ) : typeof iconComponent === 'function' ? (
                    React.createElement(iconComponent, { className: "h-4 w-4 text-gray-900 dark:text-gray-100" })
                  ) : null
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-[10px]">
                    No icon
                  </div>
                )}
              </div>
            );
          }
          if (column.key === 'title') {
            return <span className="font-medium text-gray-900 dark:text-white">{row.title}</span>;
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
                layout="flex"
              />
            );
          }
          if (column.key === 'showOnHomePage') {
            return (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  row.showOnHomePage
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
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
          return row[column.key as keyof IndustrySolutionRow];
        }}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      )}

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingId(null);
          setFormToast(null);
        }}
        title={editingId ? 'Edit Industry Solution' : 'Add Industry Solution'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingId(null);
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
              {isFormSaving ? 'Saving...' : 'Save Translation'}
            </Button>
          </div>
        }
      >
        <IndustrySolutionsForm
          key={editingId || 'new'}
          solutionId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setFormToast(null);
          }}
          onSave={async () => {
            await loadItems();
          }}
          onToastChange={(toast) => setFormToast(toast || null)}
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
        onConfirm={async () => {
          if (!deleteId) return;
          try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/industry-solutions?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
              cache: 'no-store',
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
        title="Delete Industry Solution"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
}
