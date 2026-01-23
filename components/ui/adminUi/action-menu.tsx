'use client';

import * as React from 'react';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { MenuDropdown, MenuDropdownItem } from './menu-dropdown';
import { cn } from '@/lib/utils';

export interface ActionMenuItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'danger';
  className?: string;
}

export interface ActionMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
  customActions?: ActionMenuItem[];
  align?: 'left' | 'right';
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
}

export function ActionMenu({
  onEdit,
  onDelete,
  customActions = [],
  align = 'right',
  className,
  triggerClassName,
  disabled = false,
}: ActionMenuProps) {
  const items: MenuDropdownItem[] = React.useMemo(() => {
    const actions: MenuDropdownItem[] = [];

    if (onEdit) {
      actions.push({
        label: 'Edit',
        icon: <Pencil className="h-4 w-4" />,
        onClick: onEdit,
        variant: 'default',
      });
    }

    customActions.forEach((action) => {
      actions.push({
        label: action.label,
        icon: action.icon,
        onClick: action.onClick,
        variant: action.variant || 'default',
        className: action.className,
      });
    });

    if (onDelete) {
      actions.push({
        label: 'Delete',
        icon: <Trash2 className="h-4 w-4" />,
        onClick: onDelete,
        variant: 'danger',
      });
    }

    return actions;
  }, [onEdit, onDelete, customActions]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn('flex justify-end', className)}>
      <MenuDropdown
        align={align}
        trigger={
          <button
            type="button"
            disabled={disabled}
            className={cn(
              'p-1 rounded hover:bg-gray-100 transition-colors',
              disabled && 'opacity-50 cursor-not-allowed',
              triggerClassName
            )}
            aria-label="Actions"
          >
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        }
        items={items}
      />
    </div>
  );
}
