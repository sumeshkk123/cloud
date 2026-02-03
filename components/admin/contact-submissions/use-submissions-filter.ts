import { useState, useMemo } from 'react';
import type { ContactSubmission } from '@/components/admin/dashboard/contact-submissions';

export function useSubmissionsFilter(submissions: ContactSubmission[], itemsPerPage: number = 20) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [websiteFilter, setWebsiteFilter] = useState<string>('all');

  const uniqueCountries = useMemo(() => {
    const countries = submissions
      .map((sub) => sub.country)
      .filter((country): country is string => !!country && country.trim() !== '');
    return Array.from(new Set(countries)).sort();
  }, [submissions]);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const matchesSearch =
        searchQuery === '' ||
        (submission.name?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (submission.email?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (submission.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (submission.country?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (submission.sourceSite?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (submission.message?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      let matchesSource = true;
      if (sourceFilter !== 'all') {
        const submissionSource = submission.source || 'contact';
        if (sourceFilter === 'demo') {
          matchesSource = submissionSource === 'demo' || submissionSource.startsWith('demo-');
        } else {
          matchesSource = submissionSource === sourceFilter;
        }
      }

      const submissionDate = new Date(submission.createdAt);
      const submissionDateOnly = new Date(submissionDate.getFullYear(), submissionDate.getMonth(), submissionDate.getDate());

      let matchesStartDate = true;
      if (startDate) {
        const start = new Date(startDate);
        matchesStartDate = submissionDateOnly >= start;
      }

      let matchesEndDate = true;
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        matchesEndDate = submissionDateOnly <= end;
      }

      const matchesCountry = countryFilter === 'all' || (submission.country || '') === countryFilter;
      const matchesName = !nameFilter || (submission.name?.toLowerCase().includes(nameFilter.toLowerCase()) ?? false);
      const getWebsiteDisplay = (v?: string | null) => {
        if (!v?.trim()) return 'cloud mlm'; // Null/empty = Cloud MLM (this DB holds Cloud MLM enquiries)
        const x = v.trim().toLowerCase();
        if (x.includes('business') && (x.includes('mlm') || x.includes('mlmsoftware'))) return 'business mlm';
        if (x.includes('cloud') && (x.includes('mlm') || x.includes('mlmsoftware'))) return 'cloud mlm';
        return x;
      };
      const subWebsite = getWebsiteDisplay(submission.sourceSite) || submission.sourceSite?.toLowerCase() || 'cloud mlm';
      const filterNorm = websiteFilter === 'all' ? '' : websiteFilter.toLowerCase().trim();
      const matchesWebsite = !filterNorm || subWebsite === filterNorm;

      return matchesSearch && matchesSource && matchesStartDate && matchesEndDate && matchesCountry && matchesName && matchesWebsite;
    });
  }, [submissions, searchQuery, sourceFilter, startDate, endDate, countryFilter, nameFilter, websiteFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredSubmissions.length / itemsPerPage));
  const paginatedSubmissions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredSubmissions.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredSubmissions, currentPage, itemsPerPage]);

  const handleFilterChange = (updater: () => void) => {
    updater();
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSourceFilter('all');
    setStartDate('');
    setEndDate('');
    setCountryFilter('all');
    setNameFilter('');
    setWebsiteFilter('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const uniqueWebsites = useMemo(() => {
    const sites = new Set<string>(['Cloud MLM']); // Always include Cloud MLM (null/empty = Cloud MLM)
    submissions.forEach((s) => {
      const v = s.sourceSite?.trim();
      if (v) {
        const x = v.toLowerCase();
        if (x.includes('business') && (x.includes('mlm') || x.includes('mlmsoftware'))) sites.add('Business MLM');
        else if (x.includes('cloud') && (x.includes('mlm') || x.includes('mlmsoftware'))) sites.add('Cloud MLM');
        else sites.add(v);
      }
    });
    return Array.from(sites).sort();
  }, [submissions]);

  return {
    searchQuery,
    currentPage,
    sourceFilter,
    startDate,
    endDate,
    countryFilter,
    nameFilter,
    websiteFilter,
    uniqueCountries,
    uniqueWebsites,
    filteredSubmissions,
    paginatedSubmissions,
    totalPages,
    setCurrentPage,
    setSourceFilter,
    setStartDate,
    setEndDate,
    setCountryFilter,
    setNameFilter,
    setWebsiteFilter,
    handleFilterChange,
    handleSearchChange,
    clearFilters,
  };
}
