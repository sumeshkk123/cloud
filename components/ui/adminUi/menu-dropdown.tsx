'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MenuDropdownItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'default' | 'danger';
}

interface MenuDropdownProps {
  trigger: React.ReactNode;
  items: MenuDropdownItem[];
  align?: 'left' | 'right';
  className?: string;
}

export function MenuDropdown({ trigger, items, align = 'right', className }: MenuDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<{ top: number; left?: number; right?: number; placement: 'top' | 'bottom' }>({
    top: 0,
    placement: 'bottom',
  });

  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const estimatedMenuHeight = items.length * 40 + 8;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      const shouldPlaceAbove = spaceBelow < estimatedMenuHeight && spaceAbove > spaceBelow;

      const placement = shouldPlaceAbove ? 'top' : 'bottom';
      const top = shouldPlaceAbove
        ? buttonRect.top + window.scrollY - estimatedMenuHeight - 4
        : buttonRect.bottom + window.scrollY + 4;

      const position: { top: number; left?: number; right?: number; placement: 'top' | 'bottom' } = {
        top,
        placement,
      };

      if (align === 'right') {
        position.right = window.innerWidth - buttonRect.right;
      } else {
        position.left = buttonRect.left + window.scrollX;
      }

      setPosition(position);

      if (menuRef.current) {
        const actualHeight = menuRef.current.offsetHeight;
        if (shouldPlaceAbove && actualHeight !== estimatedMenuHeight) {
          const newTop = buttonRect.top + window.scrollY - actualHeight - 4;
          setPosition((prev) => ({ ...prev, top: newTop }));
        }
      }
    }
  }, [isOpen, align, items.length]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className={cn('relative', className)}>
      <div ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={menuRef}
            className={cn(
              'fixed bg-white rounded-md shadow-lg border border-gray-200 z-[9999] min-w-[140px] py-1',
              position.placement === 'top' && 'bottom-auto',
              position.placement === 'bottom' && 'top-auto'
            )}
            style={{
              top: position.placement === 'bottom' ? `${position.top}px` : `${position.top}px`,
              left: position.left !== undefined ? `${position.left}px` : undefined,
              right: position.right !== undefined ? `${position.right}px` : undefined,
            }}
          >
            {items.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                  item.variant === 'danger'
                    ? 'text-red-600 hover:bg-gray-100'
                    : 'text-gray-900 hover:bg-gray-100',
                  item.className
                )}
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
