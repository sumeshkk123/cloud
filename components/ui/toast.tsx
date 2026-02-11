'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { sanitizeErrorForToast } from '@/lib/sanitize-toast-error';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const onCloseRef = useRef(onClose);
  const [mounted, setMounted] = useState(false);
  
  // Handle SSR - only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Update ref when onClose changes
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseRef.current();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const colors = {
    success: 'bg-green-50 border-green-400 text-green-800',
    error: 'bg-red-50 border-red-400 text-red-800',
    info: 'bg-blue-50 border-blue-400 text-blue-800',
    warning: 'bg-amber-50 border-amber-400 text-amber-800',
  };

  const Icon = icons[type];

  const toastContent = (
    <div
      className={`fixed right-4 top-4 z-[99999] flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-in slide-in-from-top-2 ${colors[type]}`}
      role="alert"
      style={{ zIndex: 99999 }}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 p-1 rounded hover:bg-black/10 transition-colors"
        aria-label="Close"
        type="button"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );

  // Render to document body using portal to ensure it's above all elements
  if (!mounted) return null;
  
  return createPortal(toastContent, document.body);
}

export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: ToastType; duration: number } | null>(null);

  const showToast = (message: string, type: ToastType = 'info', duration: number = 3000) => {
    const safeMessage = type === 'error' ? sanitizeErrorForToast(message, 'Something went wrong. Please try again.') : message;
    setToast({ message: safeMessage, type, duration });
  };

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return {
    showToast,
    ToastComponent: toast ? (
      <Toast message={toast.message} type={toast.type} duration={toast.duration} onClose={closeToast} />
    ) : null,
  };
}

// ToastProvider component for layout usage
export function ToastProvider({ children }: { children: React.ReactNode }) {
  // This is a no-op provider since we use useToast hook directly in components
  // It's here for compatibility with layout that expects a provider
  return <>{children}</>;
}
