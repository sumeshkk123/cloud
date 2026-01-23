// Strapi removed - using Prisma backend

export function getPricingCookieSecret(): string {
  const secret = process.env.PRICING_COOKIE_SECRET;
  if (!secret) {
    throw new Error('PRICING_COOKIE_SECRET environment variable is not set.');
  }
  return secret;
}

export const PRICING_COOKIE_NAME = 'pricing-session';
export const PRICING_COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds
