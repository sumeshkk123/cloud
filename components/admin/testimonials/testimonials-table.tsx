'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { TestimonialsForm } from './testimonials-form';
import { localeNames } from '@/i18n-config';
import { supportedLocales } from '@/config/site';
import { LanguageBadges } from '@/components/admin/common/language-badges';

interface TestimonialRow {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  locale: string;
  availableLocales?: string[];
  updatedAt?: Date | string;
}

const ITEMS_PER_PAGE = 20;

export function TestimonialsTable() {
  const { showToast, ToastComponent } = useToast();
  const [items, setItems] = useState<TestimonialRow[]>([]);
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
  const [refreshKey, setRefreshKey] = useState(0);
  const hasLoadedRef = useRef(false);

  const loadItems = async (forceReload = false) => {
    try {
      if (forceReload || !hasLoadedRef.current) {
        setIsLoading(true);
      }
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/testimonials?locale=en&withTranslations=true&_t=${timestamp}`, {
        credentials: 'include',
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
        },
      });
      let data: unknown;
      try {
        data = await res.json();
      } catch {
        showToast('Invalid response from server. Please try again.', 'error');
        setItems([]);
        setCurrentPage(1);
        return;
      }
      if (!res.ok) {
        const message =
          (data && typeof data === 'object' && 'error' in data && typeof (data as { error: unknown }).error === 'string')
            ? (data as { error: string }).error
            : res.status === 401
              ? 'Please sign in to view testimonials.'
              : res.status === 403
                ? 'You don’t have permission to view testimonials.'
                : `Unable to load testimonials (${res.status}).`;
        showToast(message, 'error');
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const rawList = Array.isArray(data)
        ? data
        : (data && typeof data === 'object' && Array.isArray((data as { data?: unknown }).data))
          ? (data as { data: unknown[] }).data
          : (data && typeof data === 'object' && Array.isArray((data as { testimonials?: unknown }).testimonials))
            ? (data as { testimonials: unknown[] }).testimonials
            : null;
      if (!rawList) {
        showToast('Unexpected response format from server.', 'error');
        setItems([]);
        setCurrentPage(1);
        return;
      }
      const mapped: TestimonialRow[] = rawList.map((item: any) => ({
        id: String(item.id),
        name: String(item.name || ''),
        role: item.role ? String(item.role) : '',
        content: String(item.content || ''),
        image: item.image ? String(item.image) : undefined,
        locale: String(item.locale || 'en'),
        updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
        availableLocales: Array.isArray(item.availableLocales) ? item.availableLocales : [item.locale || 'en'],
      }));

      setItems(mapped);
      setCurrentPage(1);
      if (!forceReload) {
        hasLoadedRef.current = true;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load testimonials.';
      showToast(message, 'error');
      setItems([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSave = async () => {
    hasLoadedRef.current = false; // Reset loaded flag to force reload
    setRefreshKey((prev) => prev + 1); // Trigger refresh via refreshKey
    setCurrentPage(1); // Reset to first page
  };

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadItems runs when refreshKey changes
  }, [refreshKey]);

  // Optimized: Direct use of items, no unnecessary filtering
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const columns = [
    { key: 'image', label: 'Image', className: 'w-24' },
    { key: 'name', label: 'Name', className: 'w-1/5' },
    { key: 'role', label: 'Role', className: 'w-1/5' },
    { key: 'content', label: 'Testimonial', className: 'w-1/3' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'actions', label: 'Actions', className: 'w-20 text-right' },
  ];

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
            onClick={() => {
              setEditingId(null);
              setIsFormOpen(true);
            }}
          >
            New Testimonial
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        isLoading={isLoading}
        emptyMessage={isLoading ? 'Loading testimonials...' : 'No testimonials available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'image') {
            return (
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                {row.image ? (
                  row.image.startsWith('/uploads/') || row.image.startsWith('/images/') ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`${row.image}?t=${refreshKey}`}
                      alt={row.name}
                      className="w-full h-full object-cover"
                      key={`${row.id}-${refreshKey}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Image
                      src={row.image}
                      alt={row.name}
                      fill
                      className="object-cover"
                      key={`${row.id}-${refreshKey}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No img
                  </div>
                )}
              </div>
            );
          }
          if (column.key === 'name') {
            return <span className="font-medium text-gray-900">{row.name}</span>;
          }
          if (column.key === 'role') {
            return <span className="text-gray-700">{row.role || '—'}</span>;
          }
          if (column.key === 'content') {
            return <span className="line-clamp-2 text-gray-700">{row.content}</span>;
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
          return row[column.key as keyof TestimonialRow] as string;
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
        title={editingId ? 'Edit Testimonial' : 'Add Testimonial'}
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
              form="testimonials-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : editingId ? 'Update Testimonial' : 'Save Testimonial'}
            </Button>
          </div>
        }
      >
        <TestimonialsForm
          key={editingId || 'new'}
          testimonialId={editingId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            setFormToast(null);
          }}
          onSave={handleFormSave}
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
            const res = await fetch(`/api/admin/testimonials?id=${encodeURIComponent(deleteId)}`, {
              method: 'DELETE',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete testimonial');
            showToast('Testimonial deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setDeleteId(null);
            loadItems();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete testimonial.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Testimonial"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
}
