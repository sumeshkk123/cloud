const FALLBACK_STRAPI_URL = 'http://127.0.0.1:1337';

export function getStrapiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_STRAPI_URL ??
    process.env.NEXT_PUBLIC_CMS_URL ??
    FALLBACK_STRAPI_URL
  ).replace(/\/$/, '');
}

export function getStrapiToken(): string | undefined {
  return process.env.STRAPI_API_TOKEN ?? process.env.CMS_API_TOKEN ?? undefined;
}

export function getPricingCookieSecret(): string {
  const secret = process.env.PRICING_COOKIE_SECRET;
  if (!secret) {
    throw new Error('PRICING_COOKIE_SECRET environment variable is not set.');
  }
  return secret;
}

export const PRICING_COOKIE_NAME = 'pricing-session';
export const PRICING_COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds
