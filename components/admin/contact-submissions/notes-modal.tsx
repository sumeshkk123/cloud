'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/adminUi/modal';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { RichTextEditor } from '@/components/ui/adminUi/rich-text-editor';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
  onSave: (notes: string) => Promise<void>;
  isLoading?: boolean;
  keyId?: string;
}

export function NotesModal({
  isOpen,
  onClose,
  initialNotes = '',
  onSave,
  isLoading = false,
  keyId,
}: NotesModalProps) {
  const [notesContent, setNotesContent] = useState('');
  const [modalKey, setModalKey] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setNotesContent(initialNotes || '');
      setError('');
      // Force remount of editor when modal opens by updating key
      setModalKey(prev => prev + 1);
    }
  }, [isOpen, initialNotes]);

  const validateNotes = (content: string): boolean => {
    if (!content || content.trim() === '') {
      setError('Notes cannot be empty. Please enter some content.');
      return false;
    }

    const textContent = content
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();

    if (textContent === '' || textContent.length === 0) {
      setError('Notes cannot be empty. Please enter some content.');
      return false;
    }

    if (textContent.length > 10000) {
      setError('Notes cannot exceed 10,000 characters. Please shorten your notes.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSave = async () => {
    if (!validateNotes(notesContent)) {
      return;
    }

    try {
      await onSave(notesContent);
      setError('');
    } catch (err) {
      setError('Failed to save notes. Please try again.');
    }
  };

  const handleClose = () => {
    setError('');
    onClose();
  };

  const handleContentChange = (content: string) => {
    setNotesContent(content);
    if (error) {
      setError('');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add/Edit Notes" size="xl">
      <div className="px-6 py-4 space-y-6">
        <div>
          <FieldLabel required className="mb-2">
            Notes (Reply status, follow-up details, etc.)
          </FieldLabel>
          <RichTextEditor
            key={isOpen ? `${keyId || 'new'}-${modalKey}` : 'closed'}
            content={notesContent}
            onChange={handleContentChange}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Updating...' : 'Update Notes'}
          </button>
        </div>
      </div>
    </Modal>
  );
}
