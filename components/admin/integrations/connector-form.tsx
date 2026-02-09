'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Button } from '@/components/ui/adminUi/button';
import { i18n, localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';
import { Languages, Loader2 } from 'lucide-react';

interface ConnectorSliderTranslation {
  locale: string;
  sliderTitle: string;
  items: string[];
  exists: boolean;
}

interface ConnectorFormProps {
  sliderId?: string | null; // sliderTitle for editing
  onClose: () => void;
  onSave?: () => void;
  onToastChange?: (toast: React.ReactNode) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onSavingChange?: (isSaving: boolean) => void;
}

export function ConnectorForm({
  sliderId,
  onClose,
  onSave,
  onToastChange,
  onLoadingChange,
  onSavingChange,
}: ConnectorFormProps) {
  const { showToast, ToastComponent } = useToast();

  React.useEffect(() => {
    if (onToastChange) {
      onToastChange(ToastComponent);
    }
  }, [ToastComponent, onToastChange]);

  const [activeTab, setActiveTab] = useState<string>('en');
  const [translations, setTranslations] = useState<Record<string, ConnectorSliderTranslation>>(() => {
    const initial: Record<string, ConnectorSliderTranslation> = {};
    i18n.locales.forEach((loc) => {
      initial[loc] = {
        locale: loc,
        sliderTitle: '',
        items: [],
        exists: false,
      };
    });
    return initial;
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [currentSliderTitle, setCurrentSliderTitle] = useState<string | null>(sliderId || null);
  const [englishSliderTitle, setEnglishSliderTitle] = useState<string | null>(sliderId || null); // Keep English title for loading
  const [savedLocales, setSavedLocales] = useState<string[]>([]);

  useEffect(() => {
    onSavingChange?.(isSaving);
  }, [isSaving, onSavingChange]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    setCurrentSliderTitle(sliderId || null);
    setEnglishSliderTitle(sliderId || null); // Also set English title
  }, [sliderId]);

  useEffect(() => {
    if (englishSliderTitle) {
      loadSliderData();
    } else {
      const reset: Record<string, ConnectorSliderTranslation> = {};
      i18n.locales.forEach((loc) => {
        reset[loc] = {
          locale: loc,
          sliderTitle: '',
          items: [],
          exists: false,
        };
      });
      setTranslations(reset);
      setSavedLocales([]);
      setActiveTab('en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- loadSliderData runs when englishSliderTitle changes
  }, [englishSliderTitle]);

  const loadSliderData = async () => {
    // Use English slider title for loading (sliders are grouped by English title)
    const sliderTitleToLoad = englishSliderTitle || currentSliderTitle;
    if (!sliderTitleToLoad) return;

    try {
      setIsLoading(true);

      // First, get English connectors to find the slider and get connector IDs
      const englishResponse = await fetch(`/api/admin/connectors?bySlider=true&locale=en`, {
        next: { revalidate: 0 },
      });

      if (!englishResponse.ok) {
        showToast('Failed to load slider data.', 'error');
        return;
      }

      const englishSliders = await englishResponse.json();
      const englishSlider = englishSliders.find((s: any) => s.sliderTitle === sliderTitleToLoad);

      if (!englishSlider || !englishSlider.items || englishSlider.items.length === 0) {
        showToast('Slider not found.', 'error');
        return;
      }

      // Store English slider title for future loading
      const englishTitle = englishSlider.sliderTitle;
      setEnglishSliderTitle(englishTitle);

      // Get all connector IDs from English slider (in order)
      const englishConnectors = englishSlider.items || [];
      const connectorIdToIndex = new Map<string, number>();
      englishConnectors.forEach((item: any, index: number) => {
        connectorIdToIndex.set(item.id, index);
      });

      // Fetch all translations for these connectors
      const allTranslationsByLocale: Record<string, Map<string, any>> = {};
      i18n.locales.forEach(loc => {
        allTranslationsByLocale[loc] = new Map();
      });

      await Promise.all(
        englishConnectors.map(async (englishItem: any) => {
          try {
            const translationsRes = await fetch(
              `/api/admin/connectors?id=${encodeURIComponent(englishItem.id)}&all=true`,
              { next: { revalidate: 0 } }
            );
            if (translationsRes.ok) {
              const translationsData = await translationsRes.json();
              const translations = translationsData?.translations || [];
              translations.forEach((t: any) => {
                if (allTranslationsByLocale[t.locale]) {
                  allTranslationsByLocale[t.locale].set(englishItem.id, t);
                }
              });
            }
          } catch (error) {
            // Silent fail for individual connector
          }
        })
      );

      // Load translations for all locales, maintaining the English connector order
      const loaded: Record<string, ConnectorSliderTranslation> = {};
      const existingLocales: string[] = [];

      i18n.locales.forEach((loc) => {
        const itemsInLocale: any[] = [];
        // Build items array in the same order as English connectors
        englishConnectors.forEach((englishItem: any) => {
          const translation = allTranslationsByLocale[loc]?.get(englishItem.id);
          if (translation) {
            itemsInLocale.push(translation);
          } else if (loc === 'en') {
            // For English, always include the English connector
            itemsInLocale.push(englishItem);
          }
        });

        if (itemsInLocale.length > 0) {
          // Use the translated slider title from the items, or fall back to English
          const translatedSliderTitle = itemsInLocale[0].sliderTitle || englishTitle;
          loaded[loc] = {
            locale: loc,
            sliderTitle: translatedSliderTitle,
            items: itemsInLocale.map((item: any) => item.title),
            exists: true,
          };
          existingLocales.push(loc);
        } else {
          // For new translations, use English title initially
          loaded[loc] = {
            locale: loc,
            sliderTitle: loc === 'en' ? englishTitle : '', // English keeps original, others will be translated
            items: [],
            exists: false,
          };
        }
      });

      setTranslations(loaded);
      setSavedLocales(existingLocales);
      setActiveTab(existingLocales.length > 0 ? existingLocales[0] : 'en');
    } catch (error) {
      showToast('Failed to load slider data.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const updateTranslation = (locale: string, field: 'sliderTitle' | 'items', value: string | string[]) => {
    setTranslations((prev) => ({
      ...prev,
      [locale]: {
        ...prev[locale],
        [field]: value,
      },
    }));
  };

  const autoTranslate = async () => {
    if (activeTab === 'en') {
      showToast('Cannot auto-translate English. Please select another language.', 'error');
      return;
    }

    const english = translations['en'];
    if (!english || (!english.sliderTitle.trim() && english.items.length === 0)) {
      showToast('Please fill in the English version first.', 'error');
      return;
    }

    try {
      setIsTranslating(true);
      let successCount = 0;
      let errorCount = 0;

      // Translate slider title
      if (english.sliderTitle.trim()) {
        try {
          const titleRes = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: english.sliderTitle,
              sourceLocale: 'en',
              targetLocale: activeTab,
            }),
          });
          const titleData = await titleRes.json();
          if (titleRes.ok && titleData.translatedText) {
            updateTranslation(activeTab, 'sliderTitle', titleData.translatedText);
            successCount++;
          } else {
            errorCount++;
          }
        } catch (error) {
          errorCount++;
        }
      }

      // Translate each item in the items array
      if (english.items.length > 0) {
        const translatedItems: string[] = [];
        for (const item of english.items) {
          if (item.trim()) {
            try {
              const itemRes = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  text: item.trim(),
                  sourceLocale: 'en',
                  targetLocale: activeTab,
                }),
              });
              const itemData = await itemRes.json();
              if (itemRes.ok && itemData.translatedText) {
                translatedItems.push(itemData.translatedText);
                successCount++;
              } else {
                translatedItems.push(item); // Keep original if translation fails
                errorCount++;
              }
            } catch (error) {
              translatedItems.push(item); // Keep original if translation fails
              errorCount++;
            }
          }
        }
        if (translatedItems.length > 0) {
          updateTranslation(activeTab, 'items', translatedItems);
        }
      }

      if (errorCount > 0 && successCount === 0) {
        showToast('Translation failed. The translation service may be unavailable. Please try again later or translate manually.', 'error');
      } else if (errorCount > 0) {
        showToast(`Partially translated. ${successCount} field(s) translated, ${errorCount} failed.`, 'warning');
      } else if (successCount > 0) {
        showToast(`Auto-translated ${successCount} field(s) successfully.`, 'success');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Translation failed.';
      showToast(`Translation error: ${errorMessage}. Please try again or translate manually.`, 'error');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSave = async () => {
    const current = translations[activeTab];
    const trimmedSliderTitle = current.sliderTitle.trim();
    const trimmedItems = current.items.map(item => item.trim()).filter(item => item.length > 0);

    if (!trimmedSliderTitle) {
      showToast('Please fill in the slider title field.', 'error');
      return;
    }

    if (trimmedItems.length === 0) {
      showToast('Please add at least one connector item.', 'error');
      return;
    }

    try {
      setIsSaving(true);

      // Determine if this is an edit or create operation
      // Use English slider title for identifying the slider (sliders are grouped by English title)
      const isEditing = englishSliderTitle !== null && englishSliderTitle.trim() !== '';
      const oldSliderTitle = isEditing ? englishSliderTitle : null;

      // Create or update slider with all items
      const res = await fetch('/api/admin/connectors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldSliderTitle: oldSliderTitle, // Include old slider title if editing
          sliderTitle: trimmedSliderTitle,
          titles: trimmedItems,
          locale: activeTab,
        }),
      });

      const payload = await res.json();
      console.log('[ConnectorForm] Save response:', {
        ok: res.ok,
        status: res.status,
        payload,
        oldSliderTitle,
        newSliderTitle: trimmedSliderTitle,
        locale: activeTab,
        items: trimmedItems
      });

      if (!res.ok) {
        console.error('[ConnectorForm] Save failed:', payload);
        throw new Error(payload?.error || 'Failed to save slider');
      }

      // Verify the response contains connectors
      if (!payload.connectors || !Array.isArray(payload.connectors)) {
        console.error('[ConnectorForm] Invalid response format:', payload);
        throw new Error('Invalid response from server. Connectors not returned.');
      }

      console.log('[ConnectorForm] Successfully saved connectors:', payload.connectors.length);

      // Update current slider title (translated version)
      setCurrentSliderTitle(trimmedSliderTitle);

      // Keep English slider title for loading (only update if this is English tab)
      if (activeTab === 'en') {
        setEnglishSliderTitle(trimmedSliderTitle);
      }

      setTranslations((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          sliderTitle: trimmedSliderTitle,
          items: trimmedItems,
          exists: true,
        },
      }));

      if (!savedLocales.includes(activeTab)) {
        setSavedLocales([...savedLocales, activeTab]);
      }

      // Reload slider data to get the latest from database
      if (englishSliderTitle) {
        await loadSliderData();
      }

      showToast(isEditing ? 'Slider updated successfully.' : 'Slider created successfully.', 'success');
      setIsSaving(false);

      // Small delay to ensure database transaction is committed
      await new Promise(resolve => setTimeout(resolve, 200));

      if (onSave) {
        await onSave();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save slider.';
      showToast(message, 'error');
      setIsSaving(false);
    }
  };

  const current = translations[activeTab] || { sliderTitle: '', items: [], exists: false };
  const itemsText = current.items.join(', ');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-5">
      {/* Language Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-2">
          {i18n.locales.map((locale) => {
            const trans = translations[locale];
            const isActive = activeTab === locale;
            const hasContent = trans && (trans.sliderTitle?.trim() || trans.items.length > 0);
            const exists = trans?.exists || false;

            return (
              <button
                key={locale}
                type="button"
                onClick={() => setActiveTab(locale)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${isActive
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : hasContent
                      ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 bg-green-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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

      {/* Auto Translate Button */}
      {activeTab !== 'en' && (translations['en']?.sliderTitle?.trim() || translations['en']?.items.length > 0) && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={autoTranslate}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="sliderTitle" required>
            Slider Title ({localeNames[activeTab as keyof typeof localeNames]})
          </FieldLabel>
          <Input
            id="sliderTitle"
            key={`sliderTitle-${activeTab}`}
            value={current.sliderTitle}
            onChange={(e) => updateTranslation(activeTab, 'sliderTitle', e.target.value)}
            placeholder={`Enter slider title in ${localeNames[activeTab as keyof typeof localeNames]}, e.g., Slider 1, Slider 2`}
            disabled={isSaving || isLoading || isTranslating}
          />
        </div>

        <div>
          <FieldLabel htmlFor="items" required>
            Connector Items ({localeNames[activeTab as keyof typeof localeNames]})
          </FieldLabel>
          <Textarea
            id="items"
            key={`items-${activeTab}`}
            value={itemsText}
            onChange={(e) => {
              const items = e.target.value.split(',').map(item => item.trim()).filter(item => item.length > 0);
              updateTranslation(activeTab, 'items', items);
            }}
            placeholder={`Enter connector items separated by commas, e.g., Stripe, PayPal, Shopify, WooCommerce`}
            rows={6}
            disabled={isSaving || isLoading || isTranslating}
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter multiple connector items separated by commas. All items will be grouped under this slider.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isSaving}
        >
          Cancel
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  );
}
