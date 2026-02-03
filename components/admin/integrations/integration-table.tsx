'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { IntegrationForm } from './integration-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { resolveIcon } from '@/components/frontend/home/utils';

interface IntegrationRow {
  id: string;
  icon?: string | null;
  title: string;
  description: string;
  connectors?: string[] | null;
  locale: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

export function IntegrationTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<IntegrationRow[]>([]);
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
      const res = await fetch('/api/admin/integrations?locale=en', {
        next: { revalidate: 0 },
      });
      
      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        console.error('[IntegrationTable] Failed to parse JSON response:', jsonError);
        const text = await res.text();
        console.error('[IntegrationTable] Response text:', text);
        showToast('Failed to parse server response. Check console for details.', 'error');
        setItems([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      if (!res.ok) {
        console.error('[IntegrationTable] API error:', res.status, data);
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load integrations.', 'error');
        }
        setItems([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      console.log('[IntegrationTable] API response:', { status: res.status, dataLength: Array.isArray(data) ? data.length : 'not array', data });

      const mapped: IntegrationRow[] = Array.isArray(data)
        ? data.map((item: any) => {
            let connectors: string[] | null = null;
            if (item.connectors) {
              if (Array.isArray(item.connectors)) {
                connectors = item.connectors;
              } else if (typeof item.connectors === 'string') {
                try {
                  const parsed = JSON.parse(item.connectors);
                  connectors = Array.isArray(parsed) ? parsed : [item.connectors];
                } catch {
                  // If parsing fails, treat as a single connector string
                  connectors = [item.connectors];
                }
              }
            }
            return {
              id: String(item.id),
              icon: item.icon ? String(item.icon) : null,
              title: String(item.title || ''),
              description: String(item.description || ''),
              connectors,
              locale: String(item.locale || 'en'),
              updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
            };
          })
        : [];

      // Fetch available locales for each integration
      const itemsWithLocales = await Promise.all(
        mapped.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/integrations?id=${encodeURIComponent(item.id)}&all=true`,
              { next: { revalidate: 0 } }
            );
            if (translationsRes.ok) {
              let translationsData;
              try {
                translationsData = await translationsRes.json();
              } catch (jsonError) {
                console.error(`[IntegrationTable] Failed to parse translations JSON for ${item.id}:`, jsonError);
                return { ...item, availableLocales: [item.locale] };
              }
              const locales = translationsData?.translations?.map((t: any) => t.locale) || [item.locale];
              return { ...item, availableLocales: locales };
            }
          } catch (error) {
            console.error(`[IntegrationTable] Error fetching translations for ${item.id}:`, error);
          }
          return { ...item, availableLocales: [item.locale] };
        })
      );

      console.log('[IntegrationTable] Items loaded:', itemsWithLocales.length);
      setItems(itemsWithLocales);
      setCurrentPage(1);
    } catch (error) {
      console.error('[IntegrationTable] Load error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to load integrations.';
      showToast(`Failed to load integrations: ${errorMessage}`, 'error');
      setItems([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const filtered = useMemo(() => items, [items]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const columns = [
    { key: 'icon', label: 'Icon', className: 'w-20' },
    { key: 'title', label: 'Title', className: 'w-1/4' },
    { key: 'description', label: 'Description', className: 'w-2/5' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/integrations?id=${encodeURIComponent(deleteId)}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        showToast(data?.error || 'Failed to delete integration.', 'error');
        return;
      }

      showToast('Integration deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDeleteId(null);
      await loadItems();
    } catch (error) {
      showToast('Failed to delete integration.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormSave = async () => {
    await loadItems();
  };

  return (
    <>
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
              onClick={() => {
                setEditingId(null);
                setIsFormOpen(true);
              }}
            >
              New Integration
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-gray-600">Loading...</div>
        ) : (
          <>
            <Table
              columns={columns}
              data={paginated}
              emptyMessage={isLoading ? 'Loading integrations...' : 'No integrations available yet.'}
              renderCell={(column, row) => {
                if (column.key === 'icon') {
                  const IconComponent = row.icon ? resolveIcon(row.icon) : null;
                  return (
                    <div className="flex items-center justify-center">
                      {IconComponent ? (
                        <IconComponent className="h-6 w-6 text-gray-600" />
                      ) : (
                        <span className="text-gray-400 text-xs">No icon</span>
                      )}
                    </div>
                  );
                }
                if (column.key === 'title') {
                  return <span className="font-medium text-gray-900">{row.title}</span>;
                }
                if (column.key === 'description') {
                  return (
                    <span className="text-sm text-gray-600 line-clamp-2">{row.description}</span>
                  );
                }
                if (column.key === 'languages') {
                  const availableLocales = row.availableLocales || ['en'];
                  const allLocales = ['en', 'es', 'it', 'de', 'pt', 'zh'];
                  return (
                    <LanguageBadges
                      availableLocales={availableLocales}
                      allLocales={allLocales}
                      layout="grid"
                    />
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
                return row[column.key as keyof IntegrationRow] as string;
              }}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={totalItems}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingId(null);
          setFormToast(null);
        }}
        title={editingId ? 'Edit Integration' : 'New Integration'}
        size="3xl"
      >
        <IntegrationForm
          integrationId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setFormToast(null);
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
          setDeleteId(null);
        }}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        title="Delete Integration"
        message="Are you sure you want to delete this integration? This action cannot be undone."
      />

      {ToastComponent}
    </>
  );
}
