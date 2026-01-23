'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
} as const;

export function Loader({ size = 'md', className }: LoaderProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      style={{
        borderWidth: size === 'lg' ? '4px' : size === 'md' ? '3px' : '2px',
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
