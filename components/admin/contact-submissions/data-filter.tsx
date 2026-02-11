'use client';

import { useState, useMemo } from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { DatePicker } from '@/components/ui/adminUi/datepicker';
import { Input } from '@/components/ui/adminUi/input';
import { Select } from '@/components/ui/adminUi/select';

interface ContactSubmissionsFilterProps {
  sourceFilter: string;
  startDate: string;
  endDate: string;
  countryFilter: string;
  nameFilter: string;
  websiteFilter: string;
  uniqueCountries: string[];
  uniqueWebsites: string[];
  onSourceFilterChange: (value: string) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onCountryFilterChange: (value: string) => void;
  onNameFilterChange: (value: string) => void;
  onWebsiteFilterChange: (value: string) => void;
  onClearFilters: () => void;
}

const SOURCE_OPTIONS = [
  { value: 'all', label: 'All Sources' },
  { value: 'contact', label: 'Contact' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'demo', label: 'Demo' },
  { value: 'hero-section-country', label: 'Hero section - country' },
  { value: 'hero-section-module', label: 'Hero section - module' },
];

export function ContactSubmissionsFilter({
  sourceFilter,
  startDate,
  endDate,
  countryFilter,
  nameFilter,
  websiteFilter,
  uniqueCountries,
  uniqueWebsites,
  onSourceFilterChange,
  onStartDateChange,
  onEndDateChange,
  onCountryFilterChange,
  onNameFilterChange,
  onWebsiteFilterChange,
  onClearFilters,
}: ContactSubmissionsFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const websiteOptions = useMemo(
    () => [
      { value: 'all', label: 'All Websites' },
      ...uniqueWebsites.map((w) => ({ value: w, label: w })),
    ],
    [uniqueWebsites]
  );

  const activeFilterCount = useMemo(
    () =>
      (sourceFilter !== 'all' ? 1 : 0) +
      (startDate ? 1 : 0) +
      (endDate ? 1 : 0) +
      (countryFilter !== 'all' ? 1 : 0) +
      (websiteFilter !== 'all' ? 1 : 0) +
      (nameFilter ? 1 : 0),
    [sourceFilter, startDate, endDate, countryFilter, websiteFilter, nameFilter]
  );

  const countryOptions = useMemo(
    () => [
      { value: 'all', label: 'All Countries' },
      ...uniqueCountries.map((country) => ({ value: country, label: country })),
    ],
    [uniqueCountries]
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-medium"
      >
        <SlidersHorizontal className="h-5 w-5" />
        <span>Filter</span>
        {!!activeFilterCount && (
          <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold text-primary-600 bg-white rounded-full">
            {activeFilterCount}
          </span>
        )}
      </button>

      {isFilterOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-30 p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Filter</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
                <DatePicker value={startDate} onChange={onStartDateChange} min={undefined} max={endDate || undefined} placeholder="From" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
                <DatePicker value={endDate} onChange={onEndDateChange} min={startDate || undefined} max={undefined} placeholder="To" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                <Select options={countryOptions} value={countryFilter} onValueChange={onCountryFilterChange} placeholder="Country" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Source</label>
                <Select options={SOURCE_OPTIONS} value={sourceFilter} onValueChange={onSourceFilterChange} placeholder="Source" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
                <Select options={websiteOptions} value={websiteFilter} onValueChange={onWebsiteFilterChange} placeholder="Website" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <Input type="text" value={nameFilter} onChange={(e) => onNameFilterChange(e.target.value)} placeholder="Name" />
              </div>
            </div>

            {!!activeFilterCount && (
              <button
                onClick={onClearFilters}
                className="w-full mt-4 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
