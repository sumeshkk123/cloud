'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Input } from '@/components/ui/adminUi/input';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { MediaUploader } from './media-uploader';
import { Copy, Trash2, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/toast';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';

interface MediaItem {
  url: string;
  name: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  uploadedAt?: string;
  uploadedBy?: string;
  uploadedTo?: string;
}

const PAGE_SIZE = 10;

const FAILED_IMAGE_SVG =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="14"%3EFailed to load%3C/text%3E%3C/svg%3E';

export function MediaManager() {
  const { showToast, ToastComponent } = useToast();
  const [images, setImages] = useState<MediaItem[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dimensionsCache, setDimensionsCache] = useState<Record<string, { width: number; height: number }>>({});
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<MediaItem | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const imagesLengthRef = useRef(0);
  const hasLoadedRef = useRef(false);
  imagesLengthRef.current = images.length;

  const fetchPage = useCallback(
    async (offset: number, append: boolean) => {
      const res = await fetch(
        `/api/admin/media?limit=${PAGE_SIZE}&offset=${offset}`,
        { credentials: 'include' }
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error ?? 'Failed to load images');
      }
      const data = await res.json();
      const list = Array.isArray(data.images) ? data.images : [];
      const totalCount = typeof data.total === 'number' ? data.total : list.length;
      return { images: list, total: totalCount, append };
    },
    []
  );

  const loadImages = useCallback(
    async (reset = true) => {
      if (reset) {
        setIsLoading(true);
        setLoadError(null);
      } else {
        setIsLoadingMore(true);
      }
      try {
        const offset = reset ? 0 : imagesLengthRef.current;
        const { images: pageImages, total: totalCount, append } = await fetchPage(
          offset,
          !reset
        );
        setTotal(totalCount);
        if (append) {
          setImages((prev) => [...prev, ...pageImages]);
        } else {
          setImages(pageImages);
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'Failed to load images';
        setLoadError(msg);
        if (reset) setImages([]);
        showToast(msg, 'error');
      } finally {
        if (reset) setIsLoading(false);
        else setIsLoadingMore(false);
      }
    },
    [fetchPage, showToast]
  );

  const loadMore = useCallback(() => {
    if (isLoadingMore || images.length >= total || total === 0) return;
    loadImages(false);
  }, [isLoadingMore, images.length, total, loadImages]);

  useEffect(() => {
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadImages(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  useEffect(() => {
    if (images.length >= total || total === 0 || isLoadingMore) return;
    const el = loadMoreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: '200px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [images.length, total, isLoadingMore, loadMore]);

  const handleImageSelect = (image: MediaItem) => {
    setCopied(false);

    if (dimensionsCache[image.url]) {
      setSelectedImage({
        ...image,
        dimensions: dimensionsCache[image.url],
      });
      return;
    }

    setSelectedImage(image);

    const img = new window.Image();
    img.onload = () => {
      const dims = { width: img.naturalWidth, height: img.naturalHeight };
      setDimensionsCache((prev) => ({ ...prev, [image.url]: dims }));
      setSelectedImage((prev) => {
        if (prev?.url === image.url) {
          return { ...prev, dimensions: dims };
        }
        return prev;
      });
    };
    img.onerror = () => { };
    img.src = image.url;
  };

  const handleCopyUrl = async () => {
    if (!selectedImage) return;

    try {
      await navigator.clipboard.writeText(selectedImage.url);
      setCopied(true);
      showToast('URL copied to clipboard', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Failed to copy URL', 'error');
    }
  };

  const handleDeleteClick = () => {
    if (!selectedImage) return;
    setImageToDelete(selectedImage);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!imageToDelete) return;

    const urlToDelete = imageToDelete.url;

    try {
      setIsDeleting(true);
      const res = await fetch(
        `/api/admin/media?url=${encodeURIComponent(urlToDelete)}`,
        { method: 'DELETE' }
      );

      if (!res.ok) {
        throw new Error('Failed to delete image');
      }

      showToast('Image deleted successfully', 'success');
      setSelectedImage(null);
      setImageToDelete(null);
      setDeleteConfirmOpen(false);

      // Optimistic update: remove from list and keep scroll position (no full refetch)
      setImages((prev) => prev.filter((img) => img.url !== urlToDelete));
      setTotal((prev) => Math.max(0, prev - 1));
    } catch {
      showToast('Failed to delete image', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUploadSuccess = () => {
    hasLoadedRef.current = false; // Reset to allow reload
    loadImages(true);
  };

  const canLoadMore = total > 0 && images.length < total;

  return (
    <div className="space-y-6">
      <PageTitle
        title="Media Library"
        description="Manage and organize your media files"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upload Image</h2>
            <MediaUploader onUploadSuccess={handleUploadSuccess} />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              All Images ({images.length})
            </h2>

            {isLoading ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading images...
              </div>
            ) : loadError ? (
              <div className="text-center py-12 text-red-600 dark:text-red-400">
                <p className="font-medium">{loadError}</p>
                <button
                  type="button"
                  onClick={() => loadImages(true)}
                  className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                No images uploaded yet. Upload your first image above.
              </div>
            ) : (
              <>
                <div className="grid grid-cols-6 gap-3">
                  {images.map((image) => (
                    <div
                      key={image.url}
                      onClick={() => handleImageSelect(image)}
                      className={`
                        relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer
                        transition-all hover:border-primary-500 bg-gray-100 dark:bg-gray-800
                        ${selectedImage?.url === image.url
                          ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800'
                          : 'border-gray-200 dark:border-gray-700'
                        }
                      `}
                    >
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onError={(e) => {
                          e.currentTarget.src = FAILED_IMAGE_SVG;
                          e.currentTarget.style.opacity = '1';
                        }}
                        style={{ opacity: 0, transition: 'opacity 0.2s' }}
                      />
                    </div>
                  ))}
                </div>

                {canLoadMore && (
                  <div className="mt-6 flex flex-col items-center gap-4">
                    <div ref={loadMoreRef} className="h-4 w-full" aria-hidden />
                    {isLoadingMore ? (
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Loading more...
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={loadMore}
                        className="group/button relative inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-300 border-2 border-primary-500 dark:border-primary-400 bg-transparent text-primary-600 dark:text-primary-400 hover:bg-primary-700 dark:hover:bg-primary-700 hover:text-white dark:hover:text-white hover:border-primary-700 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 px-8 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Load more ({total - images.length} remaining)
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 sticky top-6">
            {selectedImage ? (
              <>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Image Details</h2>

                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 mb-6">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    className="w-full h-full object-contain"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== FAILED_IMAGE_SVG) {
                        target.src = FAILED_IMAGE_SVG;
                        target.style.opacity = '1';
                      }
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.2s' }}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <FieldLabel>File Name</FieldLabel>
                    <Input
                      value={selectedImage.name}
                      readOnly
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>

                  {selectedImage.dimensions && (
                    <div>
                      <FieldLabel>Dimensions</FieldLabel>
                      <Input
                        value={`${selectedImage.dimensions.width} × ${selectedImage.dimensions.height} pixels`}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800"
                      />
                    </div>
                  )}

                  <div>
                    <FieldLabel>File Size</FieldLabel>
                    <Input
                      value={`${(selectedImage.size / 1024).toFixed(2)} KB`}
                      readOnly
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>

                  <div>
                    <FieldLabel>File URL</FieldLabel>
                    <div className="flex gap-2">
                      <Input
                        value={selectedImage.url}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-800 flex-1 border-gray-300 dark:border-gray-600"
                      />
                      <button
                        type="button"
                        onClick={handleCopyUrl}
                        className={`relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-[50px] ${copied
                          ? 'bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-700'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        title={copied ? 'Copied!' : 'Copy URL'}
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      type="button"
                      onClick={handleDeleteClick}
                      disabled={isDeleting}
                      className="w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg transition-all duration-300 text-red-600 dark:text-red-400 bg-red-50 hover:bg-red-150 dark:hover:bg-red-900/20 px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete Permanently</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <p className="text-sm">Select an image to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setImageToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        title="Delete Image"
        message={
          imageToDelete
            ? `Are you sure you want to delete "${imageToDelete.name}"? This action cannot be undone.`
            : 'Are you sure you want to delete this image? This action cannot be undone.'
        }
        confirmLabel="Delete"
        isLoading={isDeleting}
      />

      {ToastComponent}
    </div>
  );
}
