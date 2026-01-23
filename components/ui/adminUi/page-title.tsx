'use client';

import * as React from 'react';

interface PageTitleProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    variant?: 'page' | 'table';
    className?: string;
}

export function PageTitle({
    title,
    description,
    children,
    variant = 'page',
    className = ''
}: PageTitleProps) {
    if (variant === 'table') {
        return (
            <div className={`px-6 py-3 border-b border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${className}`}>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {children && (
                    <div className="flex items-center gap-3">{children}</div>
                )}
            </div>
        );
    }

    return (
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 ${className}`}>
            <div>
                <h1 className="text-lg font-bold text-gray-900">{title}</h1>
                {description && (
                    <p className="text-gray-600 text-sm">{description}</p>
                )}
            </div>
            {children && (
                <div className="flex items-center gap-3">{children}</div>
            )}
        </div>
    );
}
