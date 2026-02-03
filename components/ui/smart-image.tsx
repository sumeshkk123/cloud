"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { toAbsoluteUrl } from "@/lib/media";

interface SmartImageProps extends Omit<React.ComponentProps<typeof Image>, "src"> {
  src: string | null | undefined;
  fallback?: string;
  alt: string;
  priority?: boolean; // For LCP images
}

/**
 * SmartImage component that handles both local and external images
 * - Local images (from public folder): Uses Next.js Image optimization
 * - External images: Uses unoptimized mode to avoid Next.js image optimization issues
 */
export function SmartImage({ src, fallback, alt, priority = false, ...props }: SmartImageProps) {
  const [imgError, setImgError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  const [isValidSrc, setIsValidSrc] = useState(true);
  
  const imageSrc = toAbsoluteUrl(src);
  const fallbackSrc = fallback ? toAbsoluteUrl(fallback) : null;
  
  // Determine which image to use
  const primarySrc = imageSrc ?? fallbackSrc;
  const shouldUseFallback = imgError && fallbackSrc && !fallbackError;
  const currentSrc = shouldUseFallback ? fallbackSrc : primarySrc;
  
  // Validate the source URL
  useEffect(() => {
    if (!currentSrc) {
      setIsValidSrc(false);
      return;
    }
    
    // Check if it's a valid URL format
    const isValidUrl = currentSrc.startsWith("/") || /^https?:\/\//i.test(currentSrc);
    setIsValidSrc(isValidUrl);
  }, [currentSrc]);
  
  // If no image source available, invalid URL, or both failed, show placeholder
  if (!currentSrc || !isValidSrc || (imgError && fallbackError)) {
    const initials = alt
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    
    return (
      <div
        className="flex items-center justify-center bg-muted text-muted-foreground rounded-full"
        style={{ width: props.width || 56, height: props.height || 56 }}
        aria-label={alt}
      >
        <span className="text-xs font-semibold">{initials || "?"}</span>
      </div>
    );
  }

  // Check if it's an external URL
  const isExternal = /^https?:\/\//i.test(currentSrc);
  
  // Handle error for primary image
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${currentSrc}`, e);
    if (currentSrc === imageSrc) {
      setImgError(true);
    } else if (currentSrc === fallbackSrc) {
      setFallbackError(true);
    }
  };
  
  // For external images, use unoptimized to avoid Next.js optimization issues
  // For local images, use optimized Next.js Image
  // Default to lazy loading unless priority is explicitly set (for LCP images)
  try {
    return (
      <Image
        {...props}
        src={currentSrc}
        alt={alt}
        unoptimized={isExternal}
        onError={handleError}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        quality={props.quality || (isExternal ? undefined : 75)}
      />
    );
  } catch (error) {
    console.error(`Error rendering image: ${currentSrc}`, error);
    // Return placeholder on render error
    const initials = alt
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    
    return (
      <div
        className="flex items-center justify-center bg-muted text-muted-foreground rounded-full"
        style={{ width: props.width || 56, height: props.height || 56 }}
        aria-label={alt}
      >
        <span className="text-xs font-semibold">{initials || "?"}</span>
      </div>
    );
  }
}
