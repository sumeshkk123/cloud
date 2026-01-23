'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'default' | 'full';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const buttonVariants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    link: 'text-primary-600 hover:text-primary-800 underline-offset-4 hover:underline focus:ring-primary-500 p-0',
};

const buttonSizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
};

const roundedVariants = {
    default: 'rounded-md',
    full: 'rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'primary',
            size = 'md',
            rounded = 'default',
            isLoading = false,
            leftIcon,
            rightIcon,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || isLoading;

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center gap-2 font-medium',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    'transition-colors duration-200',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    buttonVariants[variant],
                    buttonSizes[size],
                    roundedVariants[rounded],
                    variant === 'link' && 'shadow-none',
                    variant !== 'link' && 'shadow-sm',
                    className
                )}
                disabled={isDisabled}
                {...props}
            >
                {isLoading && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {!isLoading && leftIcon && (
                    <span className="flex-shrink-0">{leftIcon}</span>
                )}
                {children && <span>{children}</span>}
                {!isLoading && rightIcon && (
                    <span className="flex-shrink-0">{rightIcon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
