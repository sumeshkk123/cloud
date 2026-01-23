'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  align?: 'left' | 'right';
  maxHeight?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      className,
      options,
      value,
      onChange,
      onValueChange,
      error,
      placeholder,
      triggerClassName,
      menuClassName,
      disabled = false,
      name,
      id,
      required,
      align = 'left',
      maxHeight = 'max-h-60',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState<{ top: number; left?: number; right?: number; width?: number; placement: 'top' | 'bottom' }>({
      top: 0,
      placement: 'bottom',
    });

    const selectedOption = options.find((opt) => opt.value === value);

    React.useEffect(() => {
      if (isOpen && buttonRef.current) {
        const calculatePosition = () => {
          if (!buttonRef.current) return;

          const buttonRect = buttonRef.current.getBoundingClientRect();
          const estimatedMenuHeight = Math.min(options.length * 40 + 8, 240);
          const spaceBelow = window.innerHeight - buttonRect.bottom;
          const spaceAbove = buttonRect.top;
          const shouldPlaceAbove = spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow;

          const placement = shouldPlaceAbove ? 'top' : 'bottom';
          const gap = 4;

          let top: number;
          let actualHeight = estimatedMenuHeight;

          if (menuRef.current) {
            actualHeight = menuRef.current.offsetHeight || estimatedMenuHeight;
          }

          if (shouldPlaceAbove) {
            top = buttonRect.top - actualHeight - gap;
          } else {
            top = buttonRect.bottom + gap;
          }

          const position: { top: number; left?: number; right?: number; width?: number; placement: 'top' | 'bottom' } = {
            top,
            width: buttonRect.width,
            placement,
          };

          position.left = buttonRect.left;

          setPosition(position);
        };

        let rafId: number;
        let timeoutId: NodeJS.Timeout;

        rafId = requestAnimationFrame(() => {
          calculatePosition();

          timeoutId = setTimeout(() => {
            calculatePosition();
          }, 0);
        });

        const handleResize = () => {
          requestAnimationFrame(calculatePosition);
        };
        const handleScroll = () => {
          requestAnimationFrame(calculatePosition);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
          if (rafId) cancelAnimationFrame(rafId);
          if (timeoutId) clearTimeout(timeoutId);
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll, true);
        };
      }
    }, [isOpen, align, options.length]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node) &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
      const option = options.find(opt => opt.value === optionValue);
      if (!option?.disabled) {
        if (onChange) {
          const syntheticEvent = {
            target: { value: optionValue, name },
            currentTarget: { value: optionValue, name },
          } as React.ChangeEvent<HTMLSelectElement>;
          onChange(syntheticEvent);
        }
        if (onValueChange) {
          onValueChange(optionValue);
        }
        setIsOpen(false);
      }
    };

    return (
      <div ref={ref} className={cn('w-full relative', className)} {...props}>
        {name && (
          <select
            name={name}
            id={id}
            value={value || ''}
            onChange={() => { }}
            required={required}
            disabled={disabled}
            className="sr-only"
            aria-hidden="true"
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        <button
          ref={buttonRef}
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          id={id ? `${id}-button` : undefined}
          className={cn(
            'w-full px-3 py-3 pr-8 text-sm border rounded-md bg-white text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors flex items-center justify-between',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-200',
            disabled && 'opacity-50 cursor-not-allowed',
            !disabled && 'cursor-pointer hover:border-gray-300',
            triggerClassName
          )}
        >
          <span className={cn('truncate flex-1 text-left', !selectedOption && 'text-gray-400')}>
            {selectedOption?.label || placeholder || 'Select...'}
          </span>
          <ChevronDown
            className={cn(
              'h-4 w-4 text-gray-400 flex-shrink-0 ml-2 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}

        {isOpen && typeof window !== 'undefined' && createPortal(
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setIsOpen(false)}
            />
            <div
              ref={menuRef}
              className={cn(
                'fixed bg-white border border-gray-200 rounded-md shadow-lg overflow-auto z-[9999]',
                maxHeight,
                menuClassName
              )}
              style={{
                top: `${position.top}px`,
                left: position.left !== undefined ? `${position.left}px` : undefined,
                right: position.right !== undefined ? `${position.right}px` : undefined,
                width: position.width !== undefined ? `${position.width}px` : undefined,
              }}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'w-full px-3 py-2 text-left text-sm transition-colors',
                    value === option.value
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-900 hover:bg-gray-100',
                    option.disabled && 'opacity-50 cursor-not-allowed',
                    !option.disabled && 'cursor-pointer'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>,
          document.body
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
