'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/adminUi/button';
import { Table } from '@/components/ui/adminUi/table';
import { Pagination } from '@/components/ui/adminUi/pagination';
import { useToast } from '@/components/ui/toast';
import { Modal } from '@/components/ui/adminUi/modal';
import { ContactForm } from '@/components/admin/contact/contact-form';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { LanguageBadges } from '@/components/admin/common/language-badges';
import { COUNTRY_CODES } from '@/components/ui/country-select';

// Helper function to get flag emoji from country name
function getCountryFlag(countryName: string): string {
  if (!countryName) return '';
  // Try exact match first
  if (COUNTRY_CODES[countryName]) {
    return COUNTRY_CODES[countryName].flag;
  }
  // Try case-insensitive match
  const matched = Object.keys(COUNTRY_CODES).find(
    key => key.toLowerCase() === countryName.toLowerCase()
  );
  if (matched) {
    return COUNTRY_CODES[matched].flag;
  }
  // Try partial match (e.g., "India (Head Office)" -> "India")
  const partialMatch = Object.keys(COUNTRY_CODES).find(
    key => countryName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(countryName.toLowerCase())
  );
  if (partialMatch) {
    return COUNTRY_CODES[partialMatch].flag;
  }
  return '';
}

interface ContactRow {
  id: string;
  country: string;
  place?: string | null;
  address: string;
  phones: string[];
  whatsapp?: string | null;
  email: string;
  locale: string;
  availableLocales?: string[];
}

const ITEMS_PER_PAGE = 20;

export function ContactTable() {
  const { showToast, ToastComponent } = useToast();
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [formToast, setFormToast] = useState<React.ReactNode>(null);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSaving, setIsFormSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadContacts = async () => {
    try {
      setIsLoading(true);
      const timestamp = Date.now();
      const res = await fetch(`/api/admin/contact-addresses?locale=en&_t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await res.json();

      if (!res.ok) {
        if (res.status >= 500) {
          showToast(data?.error || 'Unable to load contact addresses.', 'error');
        }
        setContacts([]);
        setCurrentPage(1);
        return;
      }

      const items: ContactRow[] = Array.isArray(data?.items)
        ? data.items.map((item: any) => ({
            id: String(item.id),
            country: String(item.country || ''),
            place: item.place ? String(item.place) : null,
            address: String(item.address || ''),
            phones: Array.isArray(item.phones) ? item.phones : item.phones ? [item.phones] : [],
            whatsapp: item.whatsapp ? String(item.whatsapp) : null,
            email: String(item.email || ''),
            locale: String(item.locale || 'en'),
          }))
        : [];

      // Fetch available locales for each contact address (by country)
      const itemsWithLocales = await Promise.all(
        items.map(async (item) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/contact-addresses?id=${encodeURIComponent(item.id)}&all=true&_t=${timestamp}`,
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

      setContacts(itemsWithLocales);
      setCurrentPage(1);
    } catch (error) {
      setContacts([]);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const filtered = useMemo(() => contacts, [contacts]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const columns = [
    { key: 'country', label: 'Country', className: 'w-1/6' },
    { key: 'place', label: 'Place/City', className: 'w-1/6' },
    { key: 'address', label: 'Address', className: 'w-1/3' },
    { key: 'email', label: 'Email', className: 'w-1/6' },
    { key: 'phones', label: 'Phone Numbers', className: 'w-1/6' },
    { key: 'whatsapp', label: 'WhatsApp', className: 'w-1/6' },
    { key: 'languages', label: 'Languages', className: 'w-32' },
    { key: 'actions', label: 'Actions', className: 'w-24 text-right' },
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
              setEditingContactId(null);
              setIsFormOpen(true);
            }}
          >
            New Address
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        data={paginated}
        emptyMessage={isLoading ? 'Loading contact addresses...' : 'No contact addresses available yet.'}
        renderCell={(column, row) => {
          if (column.key === 'country') {
            const flag = getCountryFlag(row.country);
            return (
              <div className="flex items-center gap-2">
                {flag && <span className="text-lg">{flag}</span>}
                <span className="font-medium text-gray-900 dark:text-white">{row.country}</span>
              </div>
            );
          }
          if (column.key === 'place') {
            return row.place ? (
              <span className="text-gray-700 dark:text-gray-300">{row.place}</span>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-sm">—</span>
            );
          }
          if (column.key === 'address') {
            return <span className="line-clamp-2 text-gray-700 dark:text-gray-300">{row.address}</span>;
          }
          if (column.key === 'email') {
            return (
              <a
                href={`mailto:${row.email}`}
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                {row.email}
              </a>
            );
          }
          if (column.key === 'phones') {
            return (
              <div className="space-y-1">
                {row.phones.length > 0 ? (
                  row.phones.map((phone: string, index: number) => (
                    <div key={index} className="text-sm">
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {phone}
                      </a>
                    </div>
                  ))
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 text-sm">No phones</span>
                )}
              </div>
            );
          }
          if (column.key === 'whatsapp') {
            return row.whatsapp ? (
              <a
                href={`https://wa.me/${row.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline text-sm"
              >
                {row.whatsapp}
              </a>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-sm">—</span>
            );
          }
          if (column.key === 'languages') {
            const locales = row.availableLocales || [row.locale];
            return <LanguageBadges availableLocales={locales} />;
          }
          if (column.key === 'actions') {
            return (
              <ActionMenu
                onEdit={() => {
                  setEditingContactId(row.id);
                  setIsFormOpen(true);
                }}
                onDelete={() => {
                  setContactToDelete(row.id);
                  setDeleteConfirmOpen(true);
                }}
              />
            );
          }
          return row[column.key as keyof ContactRow];
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
          setEditingContactId(null);
          setFormToast(null);
        }}
        title={editingContactId ? 'Edit Contact Address' : 'Add Contact Address'}
        size="4xl"
        isLoading={isFormLoading}
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingContactId(null);
                setFormToast(null);
              }}
              disabled={isFormSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="contact-form"
              variant="primary"
              disabled={isFormSaving || isFormLoading}
            >
              {isFormSaving ? 'Saving...' : 'Save Translation'}
            </Button>
          </div>
        }
      >
        <ContactForm
          contactId={editingContactId}
          onClose={() => {
            setIsFormOpen(false);
            setEditingContactId(null);
            setFormToast(null);
          }}
          onSave={() => {
            loadContacts();
          }}
          onToastChange={(toast) => {
            setFormToast(toast || null);
          }}
          onLoadingChange={setIsFormLoading}
          onSavingChange={setIsFormSaving}
        />
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setContactToDelete(null);
        }}
        onConfirm={async () => {
          if (!contactToDelete) return;
          try {
            setIsDeleting(true);
            const res = await fetch(`/api/admin/contact-addresses?id=${encodeURIComponent(contactToDelete)}`, {
              method: 'DELETE',
              cache: 'no-store',
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to delete contact address');
            showToast('Contact address deleted successfully.', 'success');
            setDeleteConfirmOpen(false);
            setContactToDelete(null);
            loadContacts();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete contact address.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete Contact Address"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
      {formToast}
    </div>
  );
}
