'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { Button } from '@/components/ui/adminUi/button';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { useToast } from '@/components/ui/toast';
import { X, Plus, Languages, Loader2 } from 'lucide-react';
import { Loader } from '@/components/ui/adminUi/loader';
import { localeNames } from '@/i18n-config';
import { COUNTRY_CODES } from '@/components/ui/country-select';
import { cn } from '@/lib/utils';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

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

type FormState = {
  country: string;
  address: string;
  phones: string[];
  whatsapp: string;
  email: string;
};

interface ContactTranslation {
  locale: string;
  country: string;
  place: string;
  address: string;
  phones: string[];
  whatsapp: string;
  email: string;
  exists: boolean;
}

interface ContactFormProps {
  contactId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function ContactForm({ contactId, onClose, onSave, onToastChange, onLoadingChange, onSavingChange }: ContactFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, ContactTranslation>>(() => {
    const initial: Record<string, ContactTranslation> = {};
    locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        country: '',
        place: '',
        address: '',
        phones: [],
        whatsapp: '',
        email: '',
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentContactId, setCurrentContactId] = useState<string | null>(contactId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const [newPhone, setNewPhone] = useState('');
  const preserveTabRef = React.useRef<string | null>(null);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentContactId(contactId || null);
  }, [contactId]);

  useEffect(() => {
    if (currentContactId) {
      const tabToPreserve = preserveTabRef.current;
      preserveTabRef.current = null;
      if (tabToPreserve) {
        loadAllTranslations(true, tabToPreserve);
      } else {
        loadAllTranslations(false);
      }
    } else {
      const reset: Record<string, ContactTranslation> = {};
      locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          country: '',
          place: '',
          address: '',
          phones: [],
          whatsapp: '',
          email: '',
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
      setNewPhone('');
    }
  }, [currentContactId]);

  const loadAllTranslations = async (preserveActiveTab: boolean = false, tabToPreserve: string | null = null) => {
    if (!currentContactId) {
      return;
    }

    const currentActiveTab = preserveActiveTab ? (tabToPreserve || activeTab) : null;

    try {
      setIsLoading(true);

      const response = await fetch(`/api/admin/contact-addresses?id=${encodeURIComponent(currentContactId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load contact address translations.', 'error');
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, ContactTranslation> = {};
      const existingLocales: string[] = [];

      const english = existingTranslations.find((t: any) => t.locale === 'en');
      const sharedCountry = english ? String(english.country || '') : '';
      const sharedPlace = english ? String(english.place || '') : '';
      const sharedEmail = english ? String(english.email || '') : '';
      const sharedWhatsapp = english ? String(english.whatsapp || '') : '';
      let sharedPhones: string[] = [];
      if (english && english.phones) {
        if (Array.isArray(english.phones)) {
          sharedPhones = english.phones;
        } else {
          try {
            sharedPhones = typeof english.phones === 'string' ? JSON.parse(english.phones) : [english.phones];
          } catch {
            sharedPhones = [english.phones];
          }
        }
      }

      locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          loaded[loc] = {
            locale: loc,
            country: sharedCountry || String(existing.country || ''),
            place: sharedPlace || String(existing.place || ''),
            address: String(existing.address || ''),
            phones: sharedPhones.length > 0 ? sharedPhones : [],
            whatsapp: sharedWhatsapp || String(existing.whatsapp || ''),
            email: sharedEmail || String(existing.email || ''),
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            locale: loc,
            country: sharedCountry,
            place: sharedPlace,
            address: '',
            phones: sharedPhones,
            whatsapp: sharedWhatsapp,
            email: sharedEmail,
            exists: false,
          };
        }
      });

      if (sharedCountry || sharedPlace || sharedEmail || sharedPhones.length > 0 || sharedWhatsapp) {
        Object.keys(loaded).forEach((loc) => {
          if (sharedCountry) {
            loaded[loc].country = sharedCountry;
          }
          if (sharedPlace) {
            loaded[loc].place = sharedPlace;
          }
          if (sharedEmail) {
            loaded[loc].email = sharedEmail;
          }
          if (sharedPhones.length > 0) {
            loaded[loc].phones = sharedPhones;
          }
          if (sharedWhatsapp) {
            loaded[loc].whatsapp = sharedWhatsapp;
          }
        });
      }

      setTranslations(loaded);
      setSavedLocales(existingLocales);

      if (preserveActiveTab && currentActiveTab) {
        setActiveTab(currentActiveTab);
      } else {
        if (existingLocales.length > 0) {
          setActiveTab(existingLocales[0]);
        } else {
          setActiveTab('en');
        }
      }
    } catch (error) {
      showToast('Failed to load contact address translations.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof ContactTranslation, value: any) => {
    setTranslations((prev) => {
      const updated = {
        ...prev,
        [locale]: {
          ...prev[locale],
          [field]: value,
        },
      };
      // If updating country, place, email, phones, or whatsapp, sync it to all locales (they are shared)
      if (field === 'country' || field === 'place' || field === 'email' || field === 'phones' || field === 'whatsapp') {
        Object.keys(updated).forEach((loc) => {
          if (field === 'country') {
            updated[loc].country = value as string;
          } else if (field === 'place') {
            updated[loc].place = value as string;
          } else if (field === 'email') {
            updated[loc].email = value as string;
          } else if (field === 'phones') {
            updated[loc].phones = value as string[];
          } else if (field === 'whatsapp') {
            updated[loc].whatsapp = value as string;
          }
        });
      }
      return updated;
    });
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone || phone.trim() === '') return false;
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
    return /^\d{7,15}$/.test(cleaned);
  };

  const isValidPhoneFormat = (phone: string): boolean => {
    if (!phone || phone.trim() === '') return false;
    return /^\+?[\d\s\-\(\)]+$/.test(phone.trim());
  };

  const addPhone = (locale: string) => {
    if (locale !== 'en') {
      showToast('Phone numbers can only be edited in the English tab.', 'error');
      return;
    }
    try {
      const trimmedPhone = newPhone.trim();

      if (!trimmedPhone) {
        showToast('Please enter a phone number.', 'error');
        return;
      }

      if (!isValidPhoneFormat(trimmedPhone)) {
        showToast('Phone number can contain digits, spaces, dashes, parentheses, and + sign.', 'error');
        setNewPhone('');
        return;
      }

      if (!validatePhone(trimmedPhone)) {
        showToast('Please enter a valid phone number (7-15 digits).', 'error');
        return;
      }

      const current = translations[locale];
      const normalizedNewPhone = trimmedPhone.replace(/[\s\-\(\)]/g, '');
      const isDuplicate = current.phones.some((phone) => {
        const normalizedPhone = phone.replace(/[\s\-\(\)]/g, '');
        return normalizedPhone === normalizedNewPhone;
      });

      if (isDuplicate) {
        showToast('This phone number is already added.', 'error');
        return;
      }

      updateTranslation(locale, 'phones', [...current.phones, trimmedPhone]);
      setNewPhone('');
    } catch (error) {
      showToast('An error occurred while adding the phone number.', 'error');
    }
  };

  const removePhone = (locale: string, index: number) => {
    if (locale !== 'en') {
      showToast('Phone numbers can only be edited in the English tab.', 'error');
      return;
    }
    const current = translations[locale];
    updateTranslation(locale, 'phones', current.phones.filter((_, i) => i !== index));
  };

  const autoTranslate = async () => {
    if (activeTab === 'en') {
      showToast('Cannot auto-translate English. Please select another language.', 'error');
      return;
    }

    const english = translations['en'];
    if (!english || !english.address.trim()) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslating(true);

      if (english.address.trim()) {
        const addressRes = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: english.address,
            sourceLocale: 'en',
            targetLocale: activeTab,
          }),
        });
        const addressData = await addressRes.json();
        if (!addressRes.ok) throw new Error(addressData.error || 'Failed to translate address');
        updateTranslation(activeTab, 'address', addressData.translatedText);
      }

      showToast(`Auto-translated to ${localeNames[activeTab as keyof typeof localeNames]}.`, 'success');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to auto-translate.';
      showToast(message, 'error');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSaveCurrentTab = async () => {
    const current = translations[activeTab];
    const trimmedCountry = (translations['en']?.country.trim() || current.country.trim());
    const trimmedPlace = (translations['en']?.place.trim() || current.place.trim());
    const trimmedAddress = current.address.trim();
    const trimmedEmail = (translations['en']?.email.trim() || current.email.trim());
    const trimmedWhatsapp = (translations['en']?.whatsapp.trim() || current.whatsapp.trim());
    const englishPhones = translations['en']?.phones || current.phones || [];

    if (!trimmedCountry || !trimmedAddress || !trimmedEmail) {
      const missingFields = [];
      if (!trimmedCountry) missingFields.push('Country');
      if (!trimmedAddress) missingFields.push('Address');
      if (!trimmedEmail) missingFields.push('Email');
      showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
      return;
    }

    if (englishPhones.length > 0) {
      const invalidPhones = englishPhones.filter((phone) => !validatePhone(phone));
      if (invalidPhones.length > 0) {
        showToast('Please ensure all phone numbers are valid (7-15 digits).', 'error');
        return;
      }
    }

    let allPhones = [...englishPhones];
    const trimmedNewPhone = newPhone.trim();

    if (trimmedNewPhone && activeTab === 'en') {
      if (!isValidPhoneFormat(trimmedNewPhone)) {
        showToast('Phone number can contain digits, spaces, dashes, parentheses, and + sign.', 'error');
        return;
      }

      if (!validatePhone(trimmedNewPhone)) {
        showToast('Please enter a valid phone number (7-15 digits).', 'error');
        return;
      }

      const normalizedNewPhone = trimmedNewPhone.replace(/[\s\-\(\)]/g, '');
      const isDuplicate = allPhones.some((phone) => {
        const normalizedPhone = phone.replace(/[\s\-\(\)]/g, '');
        return normalizedPhone === normalizedNewPhone;
      });

      if (!isDuplicate) {
        allPhones.push(trimmedNewPhone);
        setNewPhone('');
      } else {
        showToast('This phone number is already added.', 'error');
        return;
      }
    }

    try {
      setIsSaving(true);

      const idToUse = currentContactId || contactId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/contact-addresses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            country: trimmedCountry,
            place: trimmedPlace || null,
            address: trimmedAddress,
            email: trimmedEmail,
            whatsapp: trimmedWhatsapp || null,
            phones: allPhones.length > 0 ? allPhones : [],
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save contact address');

        if (payload && payload.id) {
          setCurrentContactId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: {
              ...prev.en,
              exists: true,
            },
          }));
          setSavedLocales(['en']);
        }
        showToast('Contact address created successfully.', 'success');
        setIsSaving(false);
        return;
      }

      const res = await fetch(`/api/admin/contact-addresses?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country: trimmedCountry,
          place: trimmedPlace || null,
          address: trimmedAddress,
          email: trimmedEmail,
          whatsapp: trimmedWhatsapp || null,
          phones: allPhones,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save translation');

      setTranslations((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          exists: true,
        },
      }));

      if (!savedLocales.includes(activeTab)) {
        setSavedLocales([...savedLocales, activeTab]);
      }

      const tabToKeep = activeTab;
      preserveTabRef.current = tabToKeep;

      if (payload.id && payload.id !== idToUse) {
        setCurrentContactId(payload.id);
      } else {
        await loadAllTranslations(true, tabToKeep);
        preserveTabRef.current = null;
      }

      showToast(`Translation saved successfully.`, 'success');
      onSave?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save contact address.';
      showToast(message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || { country: '', place: '', address: '', phones: [], whatsapp: '', email: '', exists: false };

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.address || trans.country || trans.email);
            const exists = trans?.exists || false;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                  isActive
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } ${hasContent && !isActive ? 'bg-green-50 dark:bg-green-900/10' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span>{localeNames[locale]}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                  {hasContent && !exists && (
                    <span className="w-2 h-2 bg-yellow-500 rounded-full" title="Unsaved changes" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Auto Translate Button */}
      {activeTab !== 'en' && translations['en']?.address && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => autoTranslate()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10"
            disabled={isTranslating}
          >
            {isTranslating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Translating...
              </>
            ) : (
              <>
                <Languages className="h-4 w-4" />
                Auto Translate
              </>
            )}
          </button>
        </div>
      )}

      {/* Form */}
      <form
        id="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveCurrentTab();
        }}
        className="space-y-5"
      >
        <div className="space-y-1.5">
          <FieldLabel required>Country (Common for all languages)</FieldLabel>
          <div className="relative">
            <select
              value={current.country}
              onChange={(e) => {
                if (activeTab === 'en') {
                  updateTranslation('en', 'country', e.target.value);
                }
              }}
              disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
              className={cn(
                "w-full px-3 py-3 text-sm border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors",
                activeTab !== 'en' && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed',
                (isSaving || isLoading || isTranslating) && 'opacity-50 cursor-not-allowed',
                "dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
              )}
            >
              <option value="">Select a country</option>
              {Object.keys(COUNTRY_CODES).sort().map((country) => (
                <option key={country} value={country}>
                  {COUNTRY_CODES[country].flag} {country}
                </option>
              ))}
            </select>
            {current.country && getCountryFlag(current.country) && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                Selected: <span className="text-lg">{getCountryFlag(current.country)}</span> <span className="font-medium">{current.country}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Place/City (Common for all languages)</FieldLabel>
          <Input
            value={current.place}
            onChange={(e) => {
              if (activeTab === 'en') {
                updateTranslation('en', 'place', e.target.value);
              }
            }}
            placeholder="e.g., Kochi, Dubai, Austin"
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
            readOnly={activeTab !== 'en'}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>
            Address ({localeNames[activeTab as keyof typeof localeNames]})
          </FieldLabel>
          <Textarea
            value={current.address}
            onChange={(e) => updateTranslation(activeTab, 'address', e.target.value)}
            placeholder={`Enter the full address in ${localeNames[activeTab as keyof typeof localeNames]}`}
            rows={3}
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel required>Email (Common for all languages)</FieldLabel>
          <Input
            type="email"
            value={current.email}
            onChange={(e) => {
              if (activeTab === 'en') {
                updateTranslation('en', 'email', e.target.value);
              }
            }}
            placeholder="Enter email address"
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
            readOnly={activeTab !== 'en'}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel>WhatsApp Number (Common for all languages)</FieldLabel>
          <Input
            type="tel"
            value={current.whatsapp}
            onChange={(e) => {
              if (activeTab === 'en') {
                updateTranslation('en', 'whatsapp', e.target.value);
              }
            }}
            placeholder="Enter WhatsApp number (e.g., +91 85901 37114)"
            disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
            className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
            readOnly={activeTab !== 'en'}
          />
        </div>

        <div className="space-y-1.5">
          <FieldLabel>Phone Numbers (Common for all languages)</FieldLabel>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (activeTab === 'en') {
                      addPhone(activeTab);
                    }
                  }
                }}
                placeholder="Enter phone number (e.g., +91 85901 37114)"
                disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
                className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed flex-1' : 'flex-1'}
                type="tel"
                readOnly={activeTab !== 'en'}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => addPhone(activeTab)}
                disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en' || !newPhone.trim()}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
            {current.phones.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {current.phones.map((phone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{phone}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removePhone(activeTab, index)}
                      disabled={(isSaving || isLoading || isTranslating) || activeTab !== 'en'}
                      className="h-5 w-5 p-0 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {isLoading && <Loader />}

        {activeTab !== 'en' && !currentContactId && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-200">
            Please save the English version first before adding translations.
          </div>
        )}
      </form>
    </div>
  );
}
