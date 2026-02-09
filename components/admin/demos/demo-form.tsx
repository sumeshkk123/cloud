'use client';

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as LucideIcons from 'lucide-react';
import * as RemixIcon from '@remixicon/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { IconPicker } from '@/components/ui/adminUi/icon-picker';
import { localeNames } from '@/i18n-config';
import { supportedLocales } from '@/config/site';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Button } from '@/components/ui/adminUi/button';
import { ImageUpload } from '@/components/ui/adminUi/image-upload';
import { Toggle } from '@/components/ui/adminUi/toggle';
import { X, Plus, Languages, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Register FontAwesome icons
library.add(fas);

const locales = supportedLocales;

// Helper functions for icon parsing and rendering
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

interface DemoTranslation {
  locale: string;
  icon: string;
  image: string;
  title: string;
  adminDemoTitle: string;
  adminDemoFeatures: string[];
  distributorsDemoTitle: string;
  distributorsDemoFeatures: string[];
  showOnHomePage: boolean;
  exists: boolean;
}

interface DemoFormProps {
  demoId?: string | null;
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export interface DemoFormRef {
  handleSave: () => Promise<void>;
}

export const DemoForm = forwardRef<DemoFormRef, DemoFormProps>(({
  demoId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}, ref) => {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, DemoTranslation>>(() => {
    const initial: Record<string, DemoTranslation> = {};
    locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        icon: '',
        image: '',
        title: '',
        adminDemoTitle: '',
        adminDemoFeatures: [],
        distributorsDemoTitle: '',
        distributorsDemoFeatures: [],
        showOnHomePage: false,
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDemoId, setCurrentDemoId] = useState<string | null>(demoId || null);
  const [savedLocales, setSavedLocales] = useState<string[]>([]);
  const [newAdminFeature, setNewAdminFeature] = useState<Record<string, string>>({});
  const [newDistributorFeature, setNewDistributorFeature] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentDemoId(demoId || null);
  }, [demoId]);

  useEffect(() => {
    if (currentDemoId) {
      loadDemo();
    } else {
      setIsLoading(false);
      onLoadingChange?.(false);
      const reset: Record<string, DemoTranslation> = {};
      locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          icon: '',
          image: '',
          title: '',
          adminDemoTitle: '',
          adminDemoFeatures: [],
          distributorsDemoTitle: '',
          distributorsDemoFeatures: [],
          showOnHomePage: false,
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
      setNewAdminFeature({});
      setNewDistributorFeature({});
    }
  }, [currentDemoId]);

  const loadDemo = async () => {
    if (!currentDemoId) return;

    try {
      setIsLoading(true);
      onLoadingChange?.(true);

      const response = await fetch(`/api/admin/demo-items?id=${encodeURIComponent(currentDemoId)}&all=true`);

      if (!response.ok) {
        showToast('Failed to load demo translations.', 'error');
        setIsLoading(false);
        onLoadingChange?.(false);
        return;
      }

      const data = await response.json();
      const existingTranslations = data?.translations || [];

      const loaded: Record<string, DemoTranslation> = {};
      const existingLocales: string[] = [];
      let sharedIcon = '';
      let sharedImage = '';
      let sharedTitle = '';
      let sharedShowOnHomePage = false;

      const englishVersion = existingTranslations.find((t: any) => t.locale === 'en');
      if (englishVersion) {
        // Use icon as-is from database (should already have prefix like remix: or fontawesome:)
        const iconValue = String(englishVersion.icon || '').trim();
        sharedIcon = iconValue; // Don't normalize - keep as stored in DB
        sharedImage = String(englishVersion.image || '').trim();
        sharedTitle = String(englishVersion.title || '').trim();
        sharedShowOnHomePage = englishVersion.showOnHomePage ?? false;

        // Debug log
        console.log('Demo form - English version icon:', {
          raw: englishVersion.icon,
          normalized: sharedIcon,
          iconValue
        });
      }

      locales.forEach((loc) => {
        const existing = existingTranslations.find((t: any) => t.locale === loc);
        if (existing) {
          const adminTitle = existing.adminDemoTitle || '';
          const distributorsTitle = existing.distributorsDemoTitle || '';

          // Use icon as-is from database (should already have prefix)
          const existingIcon = String(existing.icon || '').trim();

          loaded[loc] = {
            locale: loc,
            icon: sharedIcon || existingIcon || '',
            image: sharedImage || String(existing.image || '').trim(),
            title: sharedTitle || String(existing.title || ''),
            adminDemoTitle: String(adminTitle),
            adminDemoFeatures: Array.isArray(existing.adminDemoFeatures) ? existing.adminDemoFeatures : [],
            distributorsDemoTitle: String(distributorsTitle),
            distributorsDemoFeatures: Array.isArray(existing.distributorsDemoFeatures) ? existing.distributorsDemoFeatures : [],
            showOnHomePage: sharedShowOnHomePage || (existing.showOnHomePage ?? false),
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          loaded[loc] = {
            locale: loc,
            icon: sharedIcon || '',
            image: sharedImage || '',
            title: sharedTitle || '',
            adminDemoTitle: '',
            adminDemoFeatures: [],
            distributorsDemoTitle: '',
            distributorsDemoFeatures: [],
            showOnHomePage: sharedShowOnHomePage,
            exists: false,
          };
        }
      });

      // Ensure icon, image, title, and showOnHomePage are synced across all locales
      // These fields are shared across all locales, so always use shared values from English version
      Object.keys(loaded).forEach((loc) => {
        // Always use sharedIcon if available (from English version)
        if (sharedIcon) {
          loaded[loc].icon = sharedIcon;
        }
        // Otherwise keep existing icon as-is (don't normalize to lucide)
        loaded[loc].image = sharedImage || String(loaded[loc].image || '').trim();
        loaded[loc].title = sharedTitle || String(loaded[loc].title || '').trim();
        loaded[loc].showOnHomePage = sharedShowOnHomePage;
      });

      // Debug: Log the loaded translations to verify icon values
      console.log('Demo form - Loaded translations:', {
        sharedIcon,
        translations: Object.keys(loaded).map(loc => ({ locale: loc, icon: loaded[loc].icon, title: loaded[loc].title }))
      });

      setTranslations(loaded);
      setSavedLocales(existingLocales);

      if (existingLocales.length > 0) {
        setActiveTab(existingLocales[0]);
      } else {
        setActiveTab('en');
      }
    } catch (error) {
      console.error('Error loading demo:', error);
      showToast('Failed to load demo translations.', 'error');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  const updateTranslation = (locale: string, field: keyof DemoTranslation, value: any) => {
    setTranslations((prev) => ({
      ...prev,
      [locale]: {
        ...prev[locale],
        [field]: value,
      },
    }));
  };

  const addAdminFeature = (locale: string) => {
    const feature = newAdminFeature[locale]?.trim() || '';
    if (feature) {
      setTranslations((prev) => {
        const current = prev[locale];
        if (!current || !current.adminDemoFeatures) {
          return prev;
        }
        if (!current.adminDemoFeatures.includes(feature)) {
          return {
            ...prev,
            [locale]: {
              ...current,
              adminDemoFeatures: [...current.adminDemoFeatures, feature],
            },
          };
        }
        return prev;
      });
      setNewAdminFeature((prev) => {
        const updated = { ...prev };
        updated[locale] = '';
        return updated;
      });
    }
  };

  const removeAdminFeature = (locale: string, index: number) => {
    const current = translations[locale];
    updateTranslation(locale, 'adminDemoFeatures', current.adminDemoFeatures.filter((_, i) => i !== index));
  };

  const addDistributorFeature = (locale: string) => {
    const feature = newDistributorFeature[locale]?.trim() || '';
    if (feature) {
      setTranslations((prev) => {
        const current = prev[locale];
        if (!current || !current.distributorsDemoFeatures) {
          return prev;
        }
        if (!current.distributorsDemoFeatures.includes(feature)) {
          return {
            ...prev,
            [locale]: {
              ...current,
              distributorsDemoFeatures: [...current.distributorsDemoFeatures, feature],
            },
          };
        }
        return prev;
      });
      setNewDistributorFeature((prev) => {
        const updated = { ...prev };
        updated[locale] = '';
        return updated;
      });
    }
  };

  const removeDistributorFeature = (locale: string, index: number) => {
    const current = translations[locale];
    updateTranslation(locale, 'distributorsDemoFeatures', current.distributorsDemoFeatures.filter((_, i) => i !== index));
  };

  const autoTranslate = async () => {
    if (activeTab === 'en') {
      showToast('Cannot auto-translate English. Please select another language.', 'error');
      return;
    }

    const english = translations['en'];
    if (!english) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    const hasContent =
      english.title?.trim() ||
      english.adminDemoTitle?.trim() ||
      english.distributorsDemoTitle?.trim() ||
      (english.adminDemoFeatures?.length ?? 0) > 0 ||
      (english.distributorsDemoFeatures?.length ?? 0) > 0;
    if (!hasContent) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslating(true);
      let successCount = 0;
      let errorCount = 0;

      const translateField = async (text: string): Promise<string | null> => {
        if (!text?.trim()) return null;
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: text.trim(),
            sourceLocale: 'en',
            targetLocale: activeTab,
          }),
        });
        const data = await res.json();
        if (res.ok && data.translatedText) return data.translatedText;
        return null;
      };

      if (english.title?.trim()) {
        const translated = await translateField(english.title);
        if (translated) {
          updateTranslation(activeTab, 'title', translated);
          successCount++;
        } else {
          errorCount++;
        }
      }

      if (english.adminDemoTitle?.trim()) {
        const translated = await translateField(english.adminDemoTitle);
        if (translated) {
          updateTranslation(activeTab, 'adminDemoTitle', translated);
          successCount++;
        } else {
          errorCount++;
        }
      }

      const translatedAdminFeatures: string[] = [];
      for (const feature of english.adminDemoFeatures ?? []) {
        if (!feature?.trim()) continue;
        const translated = await translateField(feature);
        if (translated) {
          translatedAdminFeatures.push(translated);
          successCount++;
        } else {
          errorCount++;
        }
      }
      if (translatedAdminFeatures.length > 0) {
        updateTranslation(activeTab, 'adminDemoFeatures', translatedAdminFeatures);
      }

      if (english.distributorsDemoTitle?.trim()) {
        const translated = await translateField(english.distributorsDemoTitle);
        if (translated) {
          updateTranslation(activeTab, 'distributorsDemoTitle', translated);
          successCount++;
        } else {
          errorCount++;
        }
      }

      const translatedDistributorFeatures: string[] = [];
      for (const feature of english.distributorsDemoFeatures ?? []) {
        if (!feature?.trim()) continue;
        const translated = await translateField(feature);
        if (translated) {
          translatedDistributorFeatures.push(translated);
          successCount++;
        } else {
          errorCount++;
        }
      }
      if (translatedDistributorFeatures.length > 0) {
        updateTranslation(activeTab, 'distributorsDemoFeatures', translatedDistributorFeatures);
      }

      if (errorCount > 0 && successCount === 0) {
        showToast(
          'Translation failed. The translation service may be unavailable. Please try again later or translate manually.',
          'error'
        );
      } else if (errorCount > 0) {
        showToast(`Partially translated. ${successCount} field(s) translated, ${errorCount} failed.`, 'warning');
      } else if (successCount > 0) {
        showToast(`Auto-translated ${successCount} field(s) successfully.`, 'success');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Translation failed.';
      showToast(`Translation error: ${message}. Please try again or translate manually.`, 'error');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSaveCurrentTab = React.useCallback(async () => {
    const current = translations[activeTab];

    // Auto-add any text in input fields
    let finalAdminFeatures = [...(current.adminDemoFeatures || [])];
    let finalDistributorFeatures = [...(current.distributorsDemoFeatures || [])];

    const newAdminFeat = newAdminFeature[activeTab]?.trim();
    if (newAdminFeat && !finalAdminFeatures.includes(newAdminFeat)) {
      finalAdminFeatures.push(newAdminFeat);
      updateTranslation(activeTab, 'adminDemoFeatures', finalAdminFeatures);
      setNewAdminFeature({ ...newAdminFeature, [activeTab]: '' });
    }

    const newDistributorFeat = newDistributorFeature[activeTab]?.trim();
    if (newDistributorFeat && !finalDistributorFeatures.includes(newDistributorFeat)) {
      finalDistributorFeatures.push(newDistributorFeat);
      updateTranslation(activeTab, 'distributorsDemoFeatures', finalDistributorFeatures);
      setNewDistributorFeature({ ...newDistributorFeature, [activeTab]: '' });
    }

    const updatedCurrent = {
      ...current,
      adminDemoFeatures: finalAdminFeatures,
      distributorsDemoFeatures: finalDistributorFeatures,
    };

    // Validate required fields
    if (!updatedCurrent.icon) {
      showToast('Please fill in the Icon field.', 'error');
      return;
    }
    if (!updatedCurrent.image) {
      showToast('Please fill in the Image field.', 'error');
      return;
    }
    // Auto-fill title from adminDemoTitle if title is empty
    if (!updatedCurrent.title?.trim() && updatedCurrent.adminDemoTitle?.trim()) {
      updatedCurrent.title = updatedCurrent.adminDemoTitle.trim();
    }
    if (!updatedCurrent.title?.trim()) {
      showToast('Please fill in the Title field.', 'error');
      return;
    }
    if (!updatedCurrent.adminDemoTitle?.trim()) {
      showToast('Please fill in the Admin Demo Title field.', 'error');
      return;
    }
    if (!updatedCurrent.distributorsDemoTitle?.trim()) {
      showToast('Please fill in the Distributors Demo Title field.', 'error');
      return;
    }

    try {
      setIsSaving(true);
      const idToUse = currentDemoId;

      if (!idToUse) {
        if (activeTab !== 'en') {
          showToast('Please create the English version first.', 'error');
          setIsSaving(false);
          return;
        }

        const res = await fetch('/api/admin/demo-items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            icon: updatedCurrent.icon,
            image: updatedCurrent.image,
            title: updatedCurrent.title || null,
            adminDemoTitle: updatedCurrent.adminDemoTitle,
            adminDemoFeatures: updatedCurrent.adminDemoFeatures,
            distributorsDemoTitle: updatedCurrent.distributorsDemoTitle,
            distributorsDemoFeatures: updatedCurrent.distributorsDemoFeatures,
            showOnHomePage: updatedCurrent.showOnHomePage,
            locale: 'en',
          }),
        });
        const payload = await res.json();
        if (!res.ok) throw new Error(payload?.error || 'Failed to save demo');

        if (payload?.id) {
          setCurrentDemoId(payload.id);
          setTranslations((prev) => ({
            ...prev,
            en: { ...prev.en, exists: true },
          }));
          setSavedLocales(['en']);
        }
        showToast('Demo created successfully.', 'success');
        setIsSaving(false);
        if (onSave) {
          await onSave();
        }
        // Don't close automatically - let user decide
        return;
      }

      // Update existing demo
      // For non-English locales, we need to check if translation exists or create it
      const res = await fetch(`/api/admin/demo-items?id=${encodeURIComponent(idToUse)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Icon, image, and title are shared - only update when editing English
          icon: activeTab === 'en' ? updatedCurrent.icon : undefined,
          image: activeTab === 'en' ? updatedCurrent.image : undefined, // Image is now shared like icon
          showOnHomePage: activeTab === 'en' ? updatedCurrent.showOnHomePage : undefined,
          title: updatedCurrent.title,
          adminDemoTitle: updatedCurrent.adminDemoTitle,
          adminDemoFeatures: updatedCurrent.adminDemoFeatures,
          distributorsDemoTitle: updatedCurrent.distributorsDemoTitle,
          distributorsDemoFeatures: updatedCurrent.distributorsDemoFeatures,
          locale: activeTab,
        }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'Failed to save demo');

      // Reload all translations to get updated data
      await loadDemo();

      showToast('Demo saved successfully.', 'success');
      setIsSaving(false);
      if (onSave) {
        await onSave();
      }
      // Don't close automatically - let user decide
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save demo.';
      showToast(message, 'error');
      setIsSaving(false);
    } finally {
      onSavingChange?.(false);
    }
  }, [activeTab, translations, newAdminFeature, newDistributorFeature, currentDemoId, onSave, onSavingChange, showToast, loadDemo]);

  // Expose save handler via ref
  useImperativeHandle(ref, () => ({
    handleSave: handleSaveCurrentTab,
  }), [handleSaveCurrentTab]);

  const current = translations[activeTab] || {
    locale: 'en',
    icon: '',
    image: '',
    title: '',
    adminDemoTitle: '',
    adminDemoFeatures: [],
    distributorsDemoTitle: '',
    distributorsDemoFeatures: [],
    showOnHomePage: false,
    exists: false,
  };

  // Debug: Log current icon value
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && current.icon) {
      console.log('Demo form - Current icon value:', {
        activeTab,
        icon: current.icon,
        allTranslations: Object.keys(translations).map(loc => ({ locale: loc, icon: translations[loc].icon }))
      });
    }
  }, [activeTab, current.icon, translations]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-2">
          {locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (
              trans.title?.trim() ||
              trans.adminDemoTitle?.trim() ||
              trans.distributorsDemoTitle?.trim() ||
              trans.adminDemoFeatures?.length > 0 ||
              trans.distributorsDemoFeatures?.length > 0
            );
            const exists = trans?.exists || false;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                  ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                  : hasContent
                    ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 bg-green-50 dark:bg-green-900/10'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span>{localeNames[locale as keyof typeof localeNames] ?? locale}</span>
                  {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Auto Translate Button (only show for non-English tabs) */}
      {activeTab !== 'en' && (translations['en']?.adminDemoTitle || translations['en']?.distributorsDemoTitle || translations['en']?.title) && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={autoTranslate}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10"
            disabled={isTranslating || isSaving || isLoading}
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

      {/* Icon Field */}
      <div className="space-y-1.5">
        <FieldLabel required>Icon</FieldLabel>
        <IconPicker
          value={current.icon || ''}
          onChange={(icon) => {
            // Update icon for all locales (shared field)
            locales.forEach((loc) => {
              updateTranslation(loc, 'icon', icon);
            });
          }}
          disabled={isSaving || isLoading || activeTab !== 'en'}
          placeholder="Select an icon..."
          className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
        />
        {activeTab !== 'en' && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Icon is shared across all languages. Edit in English to change.
          </p>
        )}
      </div>

      {/* Title Field */}
      <div className="space-y-1.5">
        <FieldLabel required>Title</FieldLabel>
        <Input
          value={current.title}
          onChange={(e) => updateTranslation(activeTab, 'title', e.target.value)}
          placeholder="Enter demo title"
          disabled={isSaving || isLoading}
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-1.5">
        <FieldLabel required>Image</FieldLabel>
        <ImageUpload
          value={current.image}
          onChange={(image) => {
            // Update image for all locales (shared field, like icon)
            locales.forEach((loc) => {
              updateTranslation(loc, 'image', image);
            });
          }}
          disabled={(isSaving || isLoading) || activeTab !== 'en'}
          folder="demos"
          label=""
        />
        {activeTab !== 'en' && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Image is shared across all languages. Edit in English to change.
          </p>
        )}
      </div>

      {/* Title - stored in demo_items.title */}
      <div className="space-y-1.5">
        <FieldLabel>Title</FieldLabel>
        <Input
          value={current.title || ''}
          onChange={(e) => {
            // Update title for all locales (shared field, like icon/image)
            locales.forEach((loc) => {
              updateTranslation(loc, 'title', e.target.value);
            });
          }}
          placeholder="Enter title (e.g., Binary Plan, Matrix Plan)"
          disabled={(isSaving || isLoading) || activeTab !== 'en'}
          className={activeTab !== 'en' ? 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed' : ''}
        />
        {activeTab !== 'en' && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Title is shared across all languages. Edit in English to change.
          </p>
        )}
      </div>

      {/* Show on Home Page */}
      <div className="space-y-1.5">
        <FieldLabel htmlFor="showOnHomePage">Show on Home Page</FieldLabel>
        <Toggle
          id="showOnHomePage"
          checked={current.showOnHomePage}
          onCheckedChange={(checked) => {
            // Update showOnHomePage for all locales (shared field)
            locales.forEach((loc) => {
              updateTranslation(loc, 'showOnHomePage', checked);
            });
          }}
          disabled={(isSaving || isLoading) || activeTab !== 'en'}
        />
        {activeTab !== 'en' && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Show on Home Page is shared across all languages. Edit in English to change.
          </p>
        )}
      </div>

      {/* Admin Demo Section */}
      <div className="space-y-4 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Demo</h3>

        <div className="space-y-1.5">
          <FieldLabel required>Admin Demo Title</FieldLabel>
          <Input
            value={current.adminDemoTitle}
            onChange={(e) => updateTranslation(activeTab, 'adminDemoTitle', e.target.value)}
            placeholder="Enter admin demo title"
            disabled={isSaving || isLoading}
          />
        </div>

        {/* Admin Demo Features */}
        <div className="space-y-1.5">
          <FieldLabel>Admin Demo Features</FieldLabel>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={newAdminFeature[activeTab] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewAdminFeature((prev) => {
                    const updated = { ...prev };
                    updated[activeTab] = value;
                    return updated;
                  });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addAdminFeature(activeTab);
                  }
                }}
                placeholder="Add a feature..."
                disabled={isSaving || isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => addAdminFeature(activeTab)}
                disabled={isSaving || isLoading || !newAdminFeature[activeTab]?.trim()}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
            {current.adminDemoFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {current.adminDemoFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeAdminFeature(activeTab, index)}
                      disabled={isSaving || isLoading}
                      className={cn(
                        "text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors",
                        (isSaving || isLoading) && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Distributors Demo Section */}
      <div className="space-y-4 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Distributors Demo</h3>

        <div className="space-y-1.5">
          <FieldLabel required>Distributors Demo Title</FieldLabel>
          <Input
            value={current.distributorsDemoTitle}
            onChange={(e) => updateTranslation(activeTab, 'distributorsDemoTitle', e.target.value)}
            placeholder="Enter distributors demo title"
            disabled={isSaving || isLoading}
          />
        </div>

        {/* Distributors Demo Features */}
        <div className="space-y-1.5">
          <FieldLabel>Distributors Demo Features</FieldLabel>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={newDistributorFeature[activeTab] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewDistributorFeature((prev) => {
                    const updated = { ...prev };
                    updated[activeTab] = value;
                    return updated;
                  });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addDistributorFeature(activeTab);
                  }
                }}
                placeholder="Add a feature..."
                disabled={isSaving || isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => addDistributorFeature(activeTab)}
                disabled={isSaving || isLoading || !newDistributorFeature[activeTab]?.trim()}
                leftIcon={<Plus className="h-4 w-4" />}
              >
                Add
              </Button>
            </div>
            {current.distributorsDemoFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                {current.distributorsDemoFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeDistributorFeature(activeTab, index)}
                      disabled={isSaving || isLoading}
                      className={cn(
                        "text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors",
                        (isSaving || isLoading) && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
