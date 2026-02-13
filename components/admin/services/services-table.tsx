'use client';

import React, { useEffect, useMemo, useState, useImperativeHandle, forwardRef } from 'react';
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
import { ServicesForm } from './services-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { supportedLocales } from '@/config/site';
import { toAbsoluteUrl } from '@/lib/media';

// Register FontAwesome icons
library.add(fas);

interface ServiceRow {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  locale: string;
  showOnHomePage: boolean;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export interface ServicesTableRef {
  openNewForm: () => void;
}

export const ServicesTable = forwardRef<ServicesTableRef>((props, ref) => {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<ServiceRow[]>([]);
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
  const [imageRefreshKey, setImageRefreshKey] = useState(() => Date.now());
  const [imageErrorIds, setImageErrorIds] = useState<Set<string>>(new Set());

  useImperativeHandle(ref, () => ({
    openNewForm: () => {
      setEditingId(null);
      setIsFormOpen(true);
    },
  }));

  const loadItems = async () => {
    try {
      setIsLoading(true);
      const timestamp = Date.now();
      // Use withTranslations=true to get all translation info in one request
      const res = await fetch(`/api/admin/services?locale=en&withTranslations=true&_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load services.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: ServiceRow[] = Array.isArray(data)
        ? data.map((item: any) => ({
          id: String(item.id),
          title: String(item.title || ''),
          description: String(item.description || ''),
          icon: item.icon ? String(item.icon) : undefined,
          image: item.image ? String(item.image) : undefined,
          locale: String(item.locale || 'en'),
          showOnHomePage: Boolean(item.showOnHomePage ?? false),
          availableLocales: item.availableLocales || [item.locale], // Use pre-fetched locales
        }))
        : [];

      setItems(mapped);
      setImageRefreshKey(Date.now());
      setImageErrorIds(new Set());
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
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

  const columns = [
    { key: 'icon', label: 'Icon', className: 'w-24' },
    { key: 'image', label: 'Image', className: 'w-24' },
    { key: 'title', label: 'Title', className: 'w-1/4' },
    { key: 'description', label: 'Description', className: 'w-1/3' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'showOnHomePage', label: 'Status', className: 'w-24' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

  const handleNew = () => {
    setEditingId(null);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full md:-mt-16 md:mb-8 md:justify-end">
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={handleNew}
          >
            New Service
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        emptyMessage={isLoading ? 'Loading services...' : 'No services available yet.'}
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
          if (column.key === 'image') {
            const base = row.image ? (toAbsoluteUrl(row.image) ?? row.image) : '';
            const imageUrl = base ? base + (base.includes('?') ? '&' : '?') + `t=${imageRefreshKey}` : '';
            const imageFailed = imageErrorIds.has(row.id);
            return (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                {imageUrl && !imageFailed ? (
                  /* eslint-disable-next-line @next/next/no-img-element -- dynamic admin image URLs */
                  <img
                    key={`${row.id}-img-${imageRefreshKey}`}
                    src={imageUrl}
                    alt={row.title ?? ''}
                    className="w-full h-full object-cover"
                    onError={() => {
                      setImageErrorIds((prev) => new Set(prev).add(row.id));
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-xs">
                    No image
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
                allLocales={[...supportedLocales]}
                layout="grid"
              />
            );
          }
          if (column.key === 'showOnHomePage') {
            return (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.showOnHomePage
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
          return row[column.key as keyof ServiceRow];
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
        title={editingId ? 'Edit Service' : 'Add Service'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="outline"
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
              form="services-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save Translation'}
            </Button>
          </div>
        }
      >
        <ServicesForm
          key={editingId || 'new'}
          serviceId={editingId}
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
            const res = await fetch(`/api/admin/services?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
              cache: 'no-store',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete service');
            showToast('Service deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setDeleteId(null);
            loadItems();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete service.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Service"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
});

ServicesTable.displayName = 'ServicesTable';
