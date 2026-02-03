'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
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
import { DemoForm, DemoFormRef } from './demo-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

// Register FontAwesome icons
library.add(fas);

// Helper functions for icon parsing and rendering (same as service table)
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

  // Use icon as-is (should already have prefix)
  const { type, name } = parseIconValue(iconName);

  if (type === 'lucide') {
    const IconComponent = (LucideIcons as any)[name] as React.ComponentType<{ className?: string }> | undefined;
    if (!IconComponent && process.env.NODE_ENV === 'development') {
      console.warn(`Lucide icon not found: ${name}`, {
        iconName,
        name,
        available: Object.keys(LucideIcons).filter(k => k.toLowerCase().includes(name.toLowerCase())).slice(0, 5)
      });
    }
    return IconComponent;
  } else if (type === 'remix') {
    const IconComponent = (RemixIcon as any)[name] as React.ComponentType<{ className?: string }> | undefined;
    return IconComponent;
  } else if (type === 'fontawesome') {
    const iconNameClean = name.replace(/^fa/, '');
    const variations = [
      `fa${iconNameClean}`,
      `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1)}`,
      `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1).toLowerCase()}`,
      name,
      `fa${name}`,
    ];

    for (const key of variations) {
      if (fas[key as keyof typeof fas]) {
        return { type: 'fontawesome', icon: fas[key as keyof typeof fas] };
      }
    }
  }

  return null;
};

interface DemoRow {
  id: string;
  icon?: string | null;
  image?: string | null;
  title?: string | null;
  adminDemoTitle?: string | null;
  showOnHomePage?: boolean | null;
  locale: string;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function DemoTable() {
  const { showToast, ToastComponent } = useToast();
  const [demos, setDemos] = useState<DemoRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDemoId, setEditingDemoId] = useState<string | null>(null);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [demoToDelete, setDemoToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const hasLoadedRef = useRef(false);
  const formRef = useRef<DemoFormRef>(null);

  const loadDemos = async (showLoading = true, forceReload = false) => {
    try {
      if (forceReload) {
        hasLoadedRef.current = false;
      }
      if (showLoading && !hasLoadedRef.current) {
        setIsLoading(true);
      }
      const timestamp = Date.now();
      // Use simple list (no withTranslations) - listDemoItems returns items by locale
      const res = await fetch(`/api/admin/demo-items?locale=en&_t=${timestamp}`, {
        cache: 'no-store',
        credentials: 'include',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
        },
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        const text = await res.text();
        console.error('Failed to parse JSON response:', text);
        throw new Error('Invalid response from server');
      }

      if (!res.ok) {
        console.error('API error:', res.status, data);
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load demos.', 'error');
        }
        setDemos([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      console.log('[DemoTable] API response:', { 
        isArray: Array.isArray(data), 
        length: Array.isArray(data) ? data.length : 0,
        sample: Array.isArray(data) && data.length > 0 ? data[0] : null 
      });

      const items: DemoRow[] = Array.isArray(data)
        ? data.map((item: any) => {
          // Use icon as-is from database (should already have prefix like remix: or fontawesome:)
          const iconValue = item.icon ? String(item.icon).trim() : '';

          return {
            id: String(item.id),
            icon: iconValue || null,
            image: item.image ? String(item.image).trim() : null,
            title: item.title ? String(item.title).trim() : null,
            adminDemoTitle: item.adminDemoTitle ? String(item.adminDemoTitle).trim() : null,
            showOnHomePage: item.showOnHomePage === true,
            locale: String(item.locale || 'en'),
            availableLocales: item.availableLocales || [item.locale],
          };
        })
        : [];

      console.log('[DemoTable] Mapped items:', { count: items.length, sample: items[0] });
      setDemos(items);
      setCurrentPage(1);
      if (!forceReload) {
        hasLoadedRef.current = true;
      }
    } catch (error) {
      console.error('Error loading demos:', error);
      showToast('Failed to load demos. Please try again.', 'error');
      setDemos([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!hasLoadedRef.current) {
      loadDemos(true);
    }
  }, []);

  const totalItems = demos.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return demos.slice(start, start + ITEMS_PER_PAGE);
  }, [demos, currentPage]);

  const columns = [
    { key: 'icon', label: 'Icon', className: 'w-24' },
    { key: 'image', label: 'Image', className: 'w-24' },
    { key: 'title', label: 'Title', className: 'w-1/3' },
    { key: 'status', label: 'Status', className: 'w-32' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

  const handleDelete = async () => {
    if (!demoToDelete) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/demo-items?id=${encodeURIComponent(demoToDelete)}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        showToast(data?.error || 'Failed to delete demo.', 'error');
        return;
      }

      showToast('Demo deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDemoToDelete(null);
      loadDemos();
    } catch (error) {
      showToast('Failed to delete demo.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormSave = async () => {
    // Force reload by resetting the loaded flag and reloading
    hasLoadedRef.current = false;
    await loadDemos(false, true); // Don't show loading spinner, but force reload
    // Reset to first page to see the updated/new item
    setCurrentPage(1);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full md:-mt-16 md:mb-8 md:justify-end">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="primary"
            size="md"
            rounded="default"
            leftIcon={<Plus className="h-4 w-4" />}
            className="whitespace-nowrap"
            onClick={() => {
              setIsFormLoading(false);
              setEditingDemoId(null);
              setIsFormOpen(true);
            }}
          >
            New Demo
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading demos...' : 'No demos available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'icon') {
            const iconValue = row.icon ? String(row.icon).trim() : '';
            const iconComponent = getIconComponent(iconValue);
            const { type } = parseIconValue(iconValue);

            return (
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                {iconComponent ? (
                  type === 'fontawesome' && typeof iconComponent === 'object' && 'icon' in iconComponent ? (
                    <FontAwesomeIcon icon={iconComponent.icon} className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  ) : typeof iconComponent === 'function' ? (
                    React.createElement(iconComponent, { className: "h-4 w-4 text-gray-900 dark:text-gray-100" })
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-[10px]">
                      No icon
                    </div>
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-[10px]">
                    {iconValue ? `Invalid: ${iconValue}` : 'No icon'}
                  </div>
                )}
              </div>
            );
          }
          if (column.key === 'image') {
            return (
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                {row.image ? (
                  <img
                    src={row.image}
                    alt={row.title || row.adminDemoTitle || 'Demo'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-[10px]">No image</div>';
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-[10px]">
                    No image
                  </div>
                )}
              </div>
            );
          }
          if (column.key === 'title') {
            const displayText = row.title || row.adminDemoTitle;
            return (
              <span className="font-medium text-gray-900 dark:text-white">
                {displayText ? String(displayText).substring(0, 60) + (String(displayText).length > 60 ? '...' : '') : '—'}
              </span>
            );
          }
          if (column.key === 'status') {
            const onHome = row.showOnHomePage === true;
            return (
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${onHome ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                {onHome ? 'On home page' : 'Hidden'}
              </span>
            );
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
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingDemoId(row.id);
                  setIsFormOpen(true);
                }}
                onDelete={() => {
                  setDemoToDelete(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof DemoRow] as string;
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
          setEditingDemoId(null);
          setIsFormLoading(false);
        }}
        title={editingDemoId ? 'Edit Demo' : 'New Demo'}
        size="3xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsFormOpen(false);
                setEditingDemoId(null);
                setIsFormLoading(false);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={() => {
                formRef.current?.handleSave();
              }}
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        }
      >
        <DemoForm
          ref={formRef}
          demoId={editingDemoId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingDemoId(null);
            setIsFormLoading(false);
          }}
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
          setDemoToDelete(null);
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Demo"
        message="Are you sure you want to delete this demo? This action cannot be undone."
      />

      {ToastComponent}
    </div>
  );
}
