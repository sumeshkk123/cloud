'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Loader } from './loader';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  className?: string;
  headerActions?: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  full: 'max-w-full mx-4',
} as const;

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  className = '',
  headerActions,
  footer,
  isLoading = false,
}: ModalProps) {
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      style={{ margin: 0 }}
    >
      <div
        className={cn(
          'relative bg-white rounded-2xl shadow-xl w-full max-h-[90vh] overflow-hidden',
          'animate-in fade-in slide-in-from-top-2 duration-200',
          'transition-all duration-200',
          sizeClasses[size],
          isClosing && 'animate-out fade-out slide-out-to-top-2',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-3 p-2 rounded-md hover:bg-gray-100 transition-colors z-20"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        )}
        {(title || headerActions) && (
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between z-10">
            {title && (
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 sm:whitespace-nowrap">
                {title}
              </h2>
            )}
            {headerActions && (
              <div className="flex items-center gap-2 sm:ml-auto pr-6 sm:pr-8">{headerActions}</div>
            )}
          </div>
        )}
        <div className="relative overflow-y-auto px-6 py-6 pb-8 sm:pb-6" style={{ maxHeight: footer ? 'calc(85vh - 8rem)' : 'calc(85vh - 4rem)' }}>
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-20">
              <Loader size="lg" />
            </div>
          )}
          {children}
        </div>
        {footer && (
          <div className="sticky bottom-0 bg-white border-t-2 border-gray-200 px-6 py-4 z-10">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
