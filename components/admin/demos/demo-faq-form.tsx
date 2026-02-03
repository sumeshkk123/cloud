'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { Textarea } from '@/components/ui/adminUi/textarea';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Button } from '@/components/ui/adminUi/button';
import { localeNames } from '@/i18n-config';
import { useToast } from '@/components/ui/toast';
import { Loader } from '@/components/ui/adminUi/loader';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;

interface DemoFaqTranslation {
    locale: string;
    question: string;
    answer: string;
    exists: boolean;
}

interface DemoFaqFormProps {
    faqId?: string | null;
    onClose: () => void;
    onSave?: () => void;
    onToastChange?: (toast: React.ReactNode) => void;
    onLoadingChange?: (isLoading: boolean) => void;
    onSavingChange?: (isSaving: boolean) => void;
}

export function DemoFaqForm({
    faqId,
    onClose,
    onSave,
    onToastChange,
    onLoadingChange,
    onSavingChange,
}: DemoFaqFormProps) {
    const { showToast, ToastComponent } = useToast();

    React.useEffect(() => {
        if (onToastChange) {
            onToastChange(ToastComponent);
        }
    }, [ToastComponent, onToastChange]);

    const [activeTab, setActiveTab] = useState<string>('en');
    const [translations, setTranslations] = useState<Record<string, DemoFaqTranslation>>(() => {
        const initial: Record<string, DemoFaqTranslation> = {};
        locales.forEach((loc) => {
            initial[loc] = {
                locale: loc,
                question: '',
                answer: '',
                exists: false,
            };
        });
        return initial;
    });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentFaqId, setCurrentFaqId] = useState<string | null>(faqId || null);
    const [savedLocales, setSavedLocales] = useState<string[]>([]);

    useEffect(() => {
        onSavingChange?.(isSaving);
    }, [isSaving, onSavingChange]);

    useEffect(() => {
        onLoadingChange?.(isLoading);
    }, [isLoading, onLoadingChange]);

    useEffect(() => {
        setCurrentFaqId(faqId || null);
    }, [faqId]);

    useEffect(() => {
        if (currentFaqId) {
            loadAllTranslations();
        } else {
            setIsLoading(false);
            onLoadingChange?.(false);
            const reset: Record<string, DemoFaqTranslation> = {};
            locales.forEach((loc) => {
                reset[loc] = {
                    locale: loc,
                    question: '',
                    answer: '',
                    exists: false,
                };
            });
            setTranslations(reset);
            setSavedLocales([]);
            setActiveTab('en');
        }
    }, [currentFaqId]);

    const loadAllTranslations = async () => {
        if (!currentFaqId) return;

        try {
            setIsLoading(true);
            onLoadingChange?.(true);

            const response = await fetch(`/api/admin/demo-faq?id=${encodeURIComponent(currentFaqId)}&all=true`);

            if (!response.ok) {
                showToast('Failed to load FAQ translations.', 'error');
                setIsLoading(false);
                onLoadingChange?.(false);
                return;
            }

            const data = await response.json();
            const existingTranslations = data?.translations || [];

            const loaded: Record<string, DemoFaqTranslation> = {};
            const existingLocales: string[] = [];

            locales.forEach((loc) => {
                const existing = existingTranslations.find((t: any) => t.locale === loc);
                if (existing) {
                    loaded[loc] = {
                        locale: loc,
                        question: String(existing.question || ''),
                        answer: String(existing.answer || ''),
                        exists: true,
                    };
                    existingLocales.push(loc);
                } else {
                    loaded[loc] = {
                        locale: loc,
                        question: '',
                        answer: '',
                        exists: false,
                    };
                }
            });

            setTranslations(loaded);
            setSavedLocales(existingLocales);

            if (existingLocales.length > 0) {
                setActiveTab(existingLocales[0]);
            } else {
                setActiveTab('en');
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            showToast('Failed to load FAQ translations.', 'error');
        } finally {
            setIsLoading(false);
            onLoadingChange?.(false);
        }
    };

    const updateTranslation = (locale: string, field: 'question' | 'answer', value: string) => {
        setTranslations((prev) => ({
            ...prev,
            [locale]: {
                ...prev[locale],
                [field]: value,
            },
        }));
    };

    const handleSaveCurrentTab = async () => {
        const current = translations[activeTab];
        const trimmedQuestion = current.question.trim();
        const trimmedAnswer = current.answer.trim();

        if (!trimmedQuestion || !trimmedAnswer) {
            const missingFields = [];
            if (!trimmedQuestion) missingFields.push('Question');
            if (!trimmedAnswer) missingFields.push('Answer');
            showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }

        try {
            setIsSaving(true);
            onSavingChange?.(true);

            const idToUse = currentFaqId || 'new';
            const url = idToUse === 'new'
                ? '/api/admin/demo-faq'
                : `/api/admin/demo-faq?id=${encodeURIComponent(idToUse)}`;

            const res = await fetch(url, {
                method: idToUse === 'new' ? 'POST' : 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: trimmedQuestion,
                    answer: trimmedAnswer,
                    locale: activeTab,
                }),
            });
            const payload = await res.json();
            if (!res.ok) throw new Error(payload?.error || 'Failed to save FAQ');

            if (idToUse === 'new' && payload.id) {
                setCurrentFaqId(payload.id);
            }

            setTranslations((prev) => ({
                ...prev,
                [activeTab]: {
                    ...prev[activeTab],
                    question: trimmedQuestion,
                    answer: trimmedAnswer,
                    exists: true,
                },
            }));

            if (!savedLocales.includes(activeTab)) {
                setSavedLocales([...savedLocales, activeTab]);
            }

            showToast('FAQ saved successfully.', 'success');
            setIsSaving(false);
            if (onSave) {
                await onSave();
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to save FAQ.';
            showToast(message, 'error');
            setIsSaving(false);
        } finally {
            onSavingChange?.(false);
        }
    };

    const current = translations[activeTab] || {
        locale: 'en',
        question: '',
        answer: '',
        exists: false,
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="space-y-5">
            {/* Language Tabs */}
            <div className="border-b border-gray-200">
                <nav className="flex gap-2">
                    {locales.map((locale) => {
                        const trans = translations[locale];
                        const isActive = activeTab === locale;
                        const hasContent = trans && (trans.question?.trim() || trans.answer?.trim());
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
                                    <span>{localeNames[locale]}</span>
                                    {exists && <span className="w-2 h-2 bg-green-500 rounded-full" title="Saved" />}
                                </div>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
                <div>
                    <FieldLabel htmlFor="question" required>
                        Question
                    </FieldLabel>
                    <Input
                        id="question"
                        value={current.question}
                        onChange={(e) => updateTranslation(activeTab, 'question', e.target.value)}
                        placeholder="Enter FAQ question"
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="answer" required>
                        Answer
                    </FieldLabel>
                    <Textarea
                        id="answer"
                        value={current.answer}
                        onChange={(e) => updateTranslation(activeTab, 'answer', e.target.value)}
                        placeholder="Enter FAQ answer"
                        rows={6}
                    />
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
                    onClick={handleSaveCurrentTab}
                    disabled={isSaving}
                >
                    {isSaving ? 'Saving...' : 'Save'}
                </Button>
            </div>
        </div>
    );
}
