'use client';

import * as React from 'react';

interface FieldLabelProps {
    htmlFor?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function FieldLabel({
    htmlFor,
    required = false,
    children,
    className = '',
}: FieldLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm font-medium text-gray-700 ${className}`}
        >
            {children}
            {required && (
                <span className="text-red-500 ml-1">*</span>
            )}
        </label>
    );
}
