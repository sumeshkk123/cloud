import React from 'react';
import { TableSkeleton } from './table-skeleton';

interface TableColumn {
  key: string;
  label: string;
  className?: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  renderCell?: (column: TableColumn, row: any, index: number) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
  isLoading?: boolean;
}

export function Table({ columns, data, renderCell, emptyMessage = 'No data available', className = '', isLoading = false }: TableProps) {
  if (isLoading) {
    return <TableSkeleton columns={columns.length} className={className} />;
  }

  return (
    <div className={`bg-white rounded-md shadow-sm p-4 overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 rounded-t-md overflow-hidden">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-3 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className || ''}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-3 py-8 text-center text-gray-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-3 py-3 text-sm text-gray-500 ${column.className || ''}`}
                    >
                      {renderCell ? renderCell(column, row, rowIndex) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
