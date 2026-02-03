'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/adminUi/button';
import { Upload, X, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
  maxSizeBytes?: number;
  helperText?: string;
  sizeText?: string;
  folder?: string;
  disabled?: boolean;
}

export function ImageUpload({
  value,
  onChange,
  label = 'Image',
  accept = 'image/jpeg,image/jpg,image/png,image/gif,image/webp,image/svg+xml',
  maxSizeBytes = 200 * 1024, // 200KB
  helperText = 'Allowed .jpeg, .jpg, .png, .gif, .webp, .svg images only',
  sizeText = 'Max size 200KB',
  folder,
  disabled = false,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }
    if (file.size > maxSizeBytes) {
      setError(`File too large. Max size is ${Math.round(maxSizeBytes / 1024)}KB.`);
      return;
    }

    setError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      if (folder) {
        formData.append('folder', folder);
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Upload failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (!data.url) {
        throw new Error('No URL returned from upload');
      }

      onChange(data.url);
      if (inputRef.current) inputRef.current.value = '';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload image. Please try again.';
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {value ? (
        <div className="relative inline-block">
          <div className="relative w-48 h-48 rounded-md overflow-hidden border border-gray-300 bg-gray-50" style={{ minHeight: '192px' }}>
            {value.startsWith('/uploads/') || value.startsWith('/images/') ? (
              /* eslint-disable-next-line @next/next/no-img-element -- dynamic upload preview URLs */
              <img
                key={value}
                src={value}
                alt="Uploaded"
                className="w-full h-full object-cover"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  minWidth: '192px',
                  minHeight: '192px',
                  objectFit: 'cover'
                }}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.error-message')) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs p-2 text-center';
                    errorDiv.innerHTML = `
                      <div>Image not found</div>
                      <div class="text-[10px] mt-1 break-all">${value}</div>
                    `;
                    parent.appendChild(errorDiv);
                  }
                }}
              />
            ) : value.startsWith('http://') || value.startsWith('https://') ? (
              <Image
                src={value}
                alt="Uploaded"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.closest('.relative');
                  if (parent && !parent.querySelector('.error-message')) {
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-message w-full h-full flex items-center justify-center text-gray-400 text-xs';
                    errorDiv.textContent = 'Image not found';
                    parent.appendChild(errorDiv);
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                Invalid image URL: {value}
              </div>
            )}
          </div>
          {!disabled && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-md bg-red-500 hover:bg-red-600 text-white border-0 flex items-center justify-center shadow-lg transition-colors"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        <div
          className={cn(
            'border-2 border-dashed border-gray-300 rounded-md p-8 text-center',
            'bg-white'
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            id={`image-upload-${label || 'default'}`}
            disabled={uploading || disabled}
          />
          <label
            htmlFor={`image-upload-${label || 'default'}`}
            className={cn(
              'flex flex-col items-center gap-4',
              disabled || uploading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            )}
          >
            {uploading ? (
              <>
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300">
                  <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
                </div>
                <span className="text-sm text-gray-500">Uploading...</span>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
                  <Upload className="h-8 w-8 text-gray-500" />
                </div>
                <div className="text-base font-semibold text-gray-700">Upload</div>
                <div className="text-sm text-gray-500 text-center leading-relaxed">
                  {helperText}
                </div>
                <div className="text-sm text-gray-500">{sizeText}</div>
              </>
            )}
          </label>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
