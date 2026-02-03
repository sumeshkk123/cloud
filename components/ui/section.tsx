'use client';

import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

export type SectionVariant =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'muted'
    | 'gradient'
    | 'gradient-light'
    | 'gradient-dark';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface SectionProps {
    children: ReactNode;
    className?: string;
    variant?: SectionVariant;
    padding?: SectionPadding;
    containerClassName?: string;
    as?: 'section' | 'div';
    id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    function Section(
        {
            children,
            className,
            variant = 'default',
            padding = 'md',
            containerClassName,
            as: Component = 'section',
            id,
        },
        ref
    ) {
        const paddingClasses: Record<SectionPadding, string> = {
            none: '',
            sm: 'py-8 md:py-12',
            md: 'py-12 md:py-20',
            lg: 'py-16 md:py-24',
            xl: 'py-20 md:py-32',
            '2xl': 'py-24 md:py-40',
        };

        const variantClasses: Record<SectionVariant, string> = {
            default: 'bg-background',
            primary: 'bg-primary/5 dark:bg-primary/10',
            secondary: 'bg-secondary/30 dark:bg-secondary/20',
            accent: 'bg-primary/10 dark:bg-primary/20',
            muted: 'bg-muted/20 dark:bg-muted/10',
            gradient: 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900',
            'gradient-light': 'bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-900',
            'gradient-dark': 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950',
        };

        return (
            <Component
                ref={ref as React.Ref<HTMLDivElement>}
                id={id}
                className={cn(
                    'relative overflow-hidden',
                    variantClasses[variant],
                    paddingClasses[padding],
                    className
                )}
            >
                <div className={cn('container', containerClassName)}>
                    {children}
                </div>
            </Component>
        );
    }
);

Section.displayName = 'Section';
