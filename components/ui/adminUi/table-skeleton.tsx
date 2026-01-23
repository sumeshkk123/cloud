'use client';

import React from 'react';

interface TableSkeletonProps {
  columns: number;
  rows?: number;
  className?: string;
}

export function TableSkeleton({ columns, rows = 5, className = '' }: TableSkeletonProps) {
  return (
    <div className={`bg-white rounded-md shadow-sm p-4 overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 rounded-t-md overflow-hidden">
            <tr>
              {Array.from({ length: columns }).map((_, index) => (
                <th
                  key={index}
                  className="px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200">
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td key={colIndex} className="px-3 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" style={{ 
                      width: colIndex === 0 ? '60%' : colIndex === columns - 1 ? '80px' : '40%',
                      animationDelay: `${(rowIndex * columns + colIndex) * 50}ms`
                    }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
