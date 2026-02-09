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
import { ConnectorForm } from './connector-form';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { i18n } from '@/i18n-config';

interface ConnectorSlider {
  sliderTitle: string;
  items: Array<{
    id: string;
    title: string;
    locale: string;
  }>;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function ConnectorsTable() {
  const { showToast, ToastComponent } = useToast();
  const [sliders, setSliders] = useState<ConnectorSlider[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSliderTitle, setEditingSliderTitle] = useState<string | null>(null);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteSliderTitle, setDeleteSliderTitle] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadSliders = async () => {
    try {
      setIsLoading(true);
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/connectors?bySlider=true&locale=en&_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();

      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load connectors.', 'error');
        }
        setSliders([]);
        setCurrentPage(1);
        setIsLoading(false);
        return;
      }

      const slidersData: ConnectorSlider[] = Array.isArray(data) ? data : [];

      // Fetch available locales for each slider by checking translations of English connectors
      // Similar to testimonials table pattern - check each connector's translations
      const slidersWithLocales = await Promise.all(
        slidersData.map(async (slider) => {
          try {
            const uniqueLocales = new Set<string>(['en']); // English is always available
            
            // For each English connector in this slider, check if translations exist
            // Use Promise.all to check all connectors in parallel
            await Promise.all(
              slider.items.map(async (item) => {
                try {
                  const translationsRes = await fetch(
                    `/api/admin/connectors?id=${encodeURIComponent(item.id)}&all=true&_t=${timestamp}`,
                    { cache: 'no-store' }
                  );
                  if (translationsRes.ok) {
                    const translationsData = await translationsRes.json();
                    const translations = translationsData?.translations || [];
                    translations.forEach((t: any) => {
                      if (t.locale) uniqueLocales.add(t.locale);
                    });
                  }
                } catch (error) {
                  // Silent fail for individual connector
                }
              })
            );
            
            return { ...slider, availableLocales: Array.from(uniqueLocales) };
          } catch (error) {
            return { ...slider, availableLocales: ['en'] };
          }
        })
      );

      setSliders(slidersWithLocales);
      setCurrentPage(1);
    } catch (error) {
      showToast('Failed to load connectors. Please try again.', 'error');
      setSliders([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSliders();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  const filtered = useMemo(() => sliders, [sliders]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const columns = [
    { key: 'sliderTitle', label: 'Slider Title', className: 'w-1/4' },
    { key: 'items', label: 'Items', className: 'w-2/5' },
    { key: 'languages', label: 'Languages', className: 'w-48' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
  ];

  const handleDelete = async () => {
    if (!deleteSliderTitle) return;

    try {
      setIsDeleting(true);
      
      // Find all connector IDs for this slider
      const slider = sliders.find(s => s.sliderTitle === deleteSliderTitle);
      if (!slider) {
        showToast('Slider not found.', 'error');
        return;
      }

      // Delete all connectors in this slider
      const deletePromises = slider.items.map(item =>
        fetch(`/api/admin/connectors?id=${encodeURIComponent(item.id)}`, {
          method: 'DELETE',
        })
      );

      await Promise.all(deletePromises);

      showToast('Slider deleted successfully.', 'success');
      setDeleteConfirmOpen(false);
      setDeleteSliderTitle(null);
      await loadSliders();
    } catch (error) {
      showToast('Failed to delete slider.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormSave = async () => {
    await loadSliders();
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
                setEditingSliderTitle(null);
                setIsFormOpen(true);
              }}
            >
              New Connector
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
              emptyMessage={isLoading ? 'Loading connectors...' : 'No connectors available yet.'}
              renderCell={(column, row: ConnectorSlider) => {
                if (column.key === 'sliderTitle') {
                  return <span className="font-medium text-gray-900">{row.sliderTitle}</span>;
                }
                if (column.key === 'items') {
                  const itemsText = row.items.map(item => item.title).join(', ');
                  return (
                    <span className="text-gray-700 text-sm">
                      {itemsText || 'No items'}
                    </span>
                  );
                }
                if (column.key === 'languages') {
                  const availableLocales = row.availableLocales || ['en'];
                  const allLocales = [...i18n.locales];
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
                        setEditingSliderTitle(row.sliderTitle);
                        setIsFormOpen(true);
                      }}
                      onDelete={() => {
                        setDeleteSliderTitle(row.sliderTitle);
                        setDeleteConfirmOpen(true);
                      }}
                    />
                  );
                }
                return '';
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
          setEditingSliderTitle(null);
          setFormToast(null);
        }}
        title={editingSliderTitle ? 'Edit Slider' : 'New Slider'}
        size="3xl"
      >
        <ConnectorForm
          sliderId={editingSliderTitle}
          onClose={() => {
            setIsFormOpen(false);
            setEditingSliderTitle(null);
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
          setDeleteSliderTitle(null);
        }}
        onConfirm={handleDelete}
        isLoading={isDeleting}
        title="Delete Slider"
        message="Are you sure you want to delete this slider and all its connector items? This action cannot be undone."
      />

      {ToastComponent}
    </>
  );
}
