'use client';

import { localeNames } from '@/i18n-config';

interface AdminLanguageTabsProps {
  activeTab: string;
  onTabChange: (locale: string) => void;
  locales: readonly string[];
}

export function AdminLanguageTabs({
  activeTab,
  onTabChange,
  locales,
}: AdminLanguageTabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex gap-2">
        {locales.map((locale) => {
          const isActive = activeTab === locale;
          const label = localeNames[locale as keyof typeof localeNames] || locale;
          return (
            <button
              key={locale}
              type="button"
              onClick={() => onTabChange(locale)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors ${
                isActive
                  ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
