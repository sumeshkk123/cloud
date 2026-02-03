import { siteBaseConfig } from "@/config/site";

const ORIGIN = siteBaseConfig.url.replace(/\/$/, "");
const EXTERNAL_ORIGIN = "https://cloudmlmsoftware.com";

// List of paths that should be treated as local assets (in public folder)
const LOCAL_ASSET_PATTERNS = [
  "/logo",
  "/favicon",
  "/icons/",
  "/images/",
  "/uploads/",
  "/fonts/",
  "/models/",
  "/textures/",
  "/og-image",
  "/robots.txt",
  "/logos/"
];

export function toAbsoluteUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  // Already absolute URL
  if (/^https?:\/\//i.test(url)) return url;

  // Protocol-relative URL
  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  // If it's a wp-content path (any variation), it's from the external WordPress site
  // Use the external origin for these images
  // This includes: /wp-content/, /wp-content/themes/, /wp-content/uploads/, etc.
  if (url.startsWith("/wp-content/")) {
    return `${EXTERNAL_ORIGIN}${url}`;
  }

  // Check if it's a local asset (in public folder)
  const isLocalAsset = LOCAL_ASSET_PATTERNS.some(pattern => url.startsWith(pattern));

  // For local assets, return as relative path for Next.js Image component
  // Next.js will serve these from the public folder
  if (url.startsWith("/") && isLocalAsset) {
    return url;
  }

  // For other relative paths starting with /, convert to absolute using ORIGIN
  // This handles cases where we need absolute URLs for external resources
  if (url.startsWith("/")) {
    return `${ORIGIN}${url}`;
  }

  // For paths without leading slash, normalize and use ORIGIN
  const normalized = `/${url}`;
  return `${ORIGIN}${normalized}`;
}
