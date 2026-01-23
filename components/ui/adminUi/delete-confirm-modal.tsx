'use client';

import React from 'react';
import { Modal } from './modal';
import { Button } from './button';

interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void | Promise<void>;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    isLoading?: boolean;
}

export function DeleteConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title = 'Delete Document',
    message = 'Are you sure that you want to continue? This action cannot be reversed.',
    confirmLabel = 'Delete',
    cancelLabel = 'Cancel',
    isLoading = false,
}: DeleteConfirmModalProps) {
    const handleConfirm = async () => {
        await onConfirm();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            size="md"
            closeOnBackdropClick={!isLoading}
        >
            <div className="space-y-6">
                <p className="text-gray-600">{message}</p>
                <div className="flex justify-end gap-1">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onClose}
                        disabled={isLoading}
                        className=""
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        type="button"
                        variant="primary"
                        onClick={handleConfirm}
                        disabled={isLoading}
                        className="bg-red-600 hover:bg-red-700 text-white"
                    >
                        {isLoading ? 'Deleting...' : confirmLabel}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
