"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  getHrefForPage: (page: number) => string;
  showingResultsLabel: string;
  siblings?: number;
  className?: string;
}

export function BlogPagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  getHrefForPage,
  showingResultsLabel,
  siblings = 2,
  className = "",
}: BlogPaginationProps) {
  const pageNumbers = useMemo(() => {
    if (totalPages <= 1) return [];

    const pages: (number | string)[] = [];
    let startPage = Math.max(1, currentPage - siblings);
    let endPage = Math.min(totalPages, currentPage + siblings);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages, siblings]);

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  const resultsText = showingResultsLabel
    .replace("{start}", String(startItem))
    .replace("{end}", String(endItem))
    .replace("{total}", String(totalItems));

  const linkClass =
    "p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-center";
  const disabledClass = "opacity-50 pointer-events-none cursor-not-allowed";

  return (
    <nav
      className={`flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl ${className}`}
      aria-label="Blog pagination"
    >
      <div className="text-sm text-gray-700 dark:text-gray-300">{resultsText}</div>
      <div className="flex items-center gap-1">
        <Link
          href={getHrefForPage(1)}
          className={`${linkClass} ${currentPage === 1 ? disabledClass : ""}`}
          aria-label="First page"
          tabIndex={currentPage === 1 ? -1 : undefined}
        >
          <ChevronsLeft className="h-5 w-5" />
        </Link>
        <Link
          href={getHrefForPage(currentPage > 1 ? currentPage - 1 : 1)}
          className={`${linkClass} ${currentPage === 1 ? disabledClass : ""}`}
          aria-label="Previous page"
          tabIndex={currentPage === 1 ? -1 : undefined}
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>

        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400"
              >
                ...
              </span>
            );
          }
          const pageNum = page as number;
          const isActive = pageNum === currentPage;
          return (
            <Link
              key={pageNum}
              href={getHrefForPage(pageNum)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </Link>
          );
        })}

        <Link
          href={getHrefForPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className={`${linkClass} ${currentPage === totalPages ? disabledClass : ""}`}
          aria-label="Next page"
          tabIndex={currentPage === totalPages ? -1 : undefined}
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
        <Link
          href={getHrefForPage(totalPages)}
          className={`${linkClass} ${currentPage === totalPages ? disabledClass : ""}`}
          aria-label="Last page"
          tabIndex={currentPage === totalPages ? -1 : undefined}
        >
          <ChevronsRight className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
}
