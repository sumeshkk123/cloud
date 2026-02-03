import React from 'react';
import { localeNames } from '@/i18n-config';

export interface LanguageBadgesProps {
  availableLocales: string[];
  allLocales?: string[];
  layout?: 'flex' | 'grid';
  className?: string;
}

export function LanguageBadges({
  availableLocales,
  allLocales = ['en', 'es', 'it', 'de', 'pt', 'zh'],
  layout = 'flex',
  className = '',
}: LanguageBadgesProps) {
  const Container = layout === 'grid' ? 'div' : 'div';
  const containerClassName =
    layout === 'grid'
      ? 'grid grid-cols-3 gap-1 w-48'
      : 'flex flex-wrap gap-1';

  return (
    <Container className={`${containerClassName} ${className}`}>
      {allLocales.map((loc) => {
        const exists = (availableLocales || []).includes(loc);
        return (
          <span
            key={loc}
            className={`px-2 py-1 text-xs font-medium rounded text-center transition-colors ${
              exists
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600'
            }`}
            title={exists ? `${localeNames[loc as keyof typeof localeNames] || loc} - Available` : `${localeNames[loc as keyof typeof localeNames] || loc} - Missing`}
          >
            {loc.toUpperCase()}
          </span>
        );
      })}
    </Container>
  );
}
