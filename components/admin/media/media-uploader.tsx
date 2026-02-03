'use client';

import { useState, useRef } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaUploaderProps {
  onUploadSuccess?: () => void;
  maxSizeBytes?: number;
  helperText?: string;
}

export function MediaUploader({
  onUploadSuccess,
  maxSizeBytes = 10 * 1024 * 1024, // 10MB default for media library
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadingCount, setUploadingCount] = useState(0);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }
    if (file.size > maxSizeBytes) {
      setError(`File "${file.name}" is too large. Max size is ${Math.round(maxSizeBytes / 1024 / 1024)}MB.`);
      return;
    }

    setError('');
    setUploading(true);
    setUploadingCount((prev) => prev + 1);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Upload failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.url) {
        throw new Error('No URL returned from upload');
      }

      onUploadSuccess?.();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : `Failed to upload "${file.name}". Please try again.`;
      setError(errorMessage);
    } finally {
      setUploadingCount((prev) => {
        const newCount = prev - 1;
        if (newCount === 0) {
          setUploading(false);
          if (inputRef.current) inputRef.current.value = '';
        }
        return newCount;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        handleFileSelect(file);
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
          handleFileSelect(file);
        }
      });
    }
  };

  return (
    <div className="space-y-2">
      <div
        className={cn(
          'border-2 border-dashed rounded-2xl p-8 text-center transition-colors',
          dragActive
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50',
          uploading && 'opacity-50 cursor-not-allowed'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,image/svg+xml"
          onChange={handleInputChange}
          className="hidden"
          id="media-uploader-input"
          disabled={uploading}
          multiple
        />
        <label
          htmlFor="media-uploader-input"
          className="cursor-pointer flex flex-col items-center gap-4"
        >
          {uploading ? (
            <>
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700">
                <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Uploading{uploadingCount > 1 ? ` ${uploadingCount} files` : ''}...
              </span>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <Upload className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">or</div>
              <div className="text-base font-semibold text-gray-700 dark:text-gray-200">
                {dragActive ? 'Drop files to upload' : 'Drop files to upload'}
              </div>
            </>
          )}
        </label>
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}
