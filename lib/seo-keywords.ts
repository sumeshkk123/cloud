/**
 * SEO Keywords for MLM Software Website
 * Optimized for: USA, Philippines, Australia, India, Germany
 */

export const seoKeywords = {
  // Primary Keywords
  primary: [
    'MLM software',
    'network marketing software',
    'multi-level marketing software',
    'direct selling software',
    'MLM platform',
    'cloud MLM software',
    'MLM management system',
    'network marketing platform',
    'MLM business software',
    'MLM solution',
  ],

  // Location-based Keywords
  locationBased: {
    usa: [
      'MLM software USA',
      'network marketing software United States',
      'MLM platform America',
      'direct selling software USA',
      'MLM management system USA',
    ],
    philippines: [
      'MLM software Philippines',
      'network marketing software Philippines',
      'MLM platform Philippines',
      'direct selling software Philippines',
      'MLM management system Philippines',
    ],
    australia: [
      'MLM software Australia',
      'network marketing software Australia',
      'MLM platform Australia',
      'direct selling software Australia',
      'MLM management system Australia',
    ],
    india: [
      'MLM software India',
      'network marketing software India',
      'MLM platform India',
      'direct selling software India',
      'MLM management system India',
      'MLM software Mumbai',
      'MLM software Delhi',
      'MLM software Bangalore',
      'MLM software Hyderabad',
      'MLM software Chennai',
      'MLM software Pune',
    ],
    germany: [
      'MLM Software Deutschland',
      'Network Marketing Software Deutschland',
      'MLM Plattform Deutschland',
      'Direktvertrieb Software Deutschland',
      'MLM Management System Deutschland',
    ],
  },

  // Feature-based Keywords
  features: [
    'MLM compensation plan software',
    'MLM commission calculator',
    'MLM genealogy tree',
    'MLM e-commerce platform',
    'MLM mobile app',
    'MLM payment gateway integration',
    'MLM inventory management',
    'MLM reporting dashboard',
    'MLM distributor management',
    'MLM auto-ship management',
    'MLM binary plan software',
    'MLM unilevel plan software',
    'MLM matrix plan software',
    'MLM hybrid plan software',
  ],

  // Industry-specific Keywords
  industries: [
    'health and wellness MLM software',
    'beauty MLM software',
    'nutrition MLM software',
    'cosmetics MLM software',
    'wellness MLM platform',
    'fitness MLM software',
  ],

  // Technology Keywords
  technology: [
    'cloud-based MLM software',
    'SaaS MLM platform',
    'AI-powered MLM software',
    'automated MLM system',
    'scalable MLM platform',
    'secure MLM software',
    'multi-currency MLM software',
    'multi-language MLM platform',
    'API-based MLM software',
  ],

  // Business Keywords
  business: [
    'start MLM business',
    'grow MLM business',
    'scale MLM company',
    'MLM startup software',
    'enterprise MLM software',
    'small business MLM software',
    'MLM business automation',
  ],

  // Combined Keywords for Meta Tags
  combined: [
    'MLM software, network marketing software, multi-level marketing platform, direct selling software, cloud MLM, MLM management system, MLM business software, MLM solution, MLM platform USA, MLM software Philippines, MLM software Australia, MLM software India, MLM software Germany, MLM compensation plan, MLM commission calculator, MLM e-commerce, MLM mobile app, cloud-based MLM, SaaS MLM platform, AI-powered MLM software, automated MLM system, scalable MLM platform, secure MLM software, multi-currency MLM, multi-language MLM platform',
  ],
};

/**
 * Get SEO keywords for a specific page
 */
export function getPageKeywords(page: string, locale: string = 'en'): string {
  const baseKeywords = seoKeywords.primary.join(', ');
  const featureKeywords = seoKeywords.features.slice(0, 5).join(', ');
  const techKeywords = seoKeywords.technology.slice(0, 3).join(', ');

  // Add location-based keywords based on locale
  let locationKeywords = '';
  if (locale === 'en') {
    locationKeywords = [
      ...seoKeywords.locationBased.usa.slice(0, 2),
      ...seoKeywords.locationBased.philippines.slice(0, 1),
      ...seoKeywords.locationBased.australia.slice(0, 1),
      ...seoKeywords.locationBased.india.slice(0, 2),
    ].join(', ');
  } else if (locale === 'de') {
    locationKeywords = seoKeywords.locationBased.germany.slice(0, 3).join(', ');
  } else {
    // For other locales, include relevant location keywords
    locationKeywords = seoKeywords.locationBased.india.slice(0, 2).join(', ');
  }

  return `${baseKeywords}, ${featureKeywords}, ${techKeywords}, ${locationKeywords}`;
}

/**
 * Generate alt text for images with SEO keywords
 */
export function generateImageAltText(
  imageType: 'dashboard' | 'feature' | 'service' | 'testimonial' | 'logo' | 'hero' | 'module' | 'integration' | 'company',
  context?: string
): string {
  const baseAlt = {
    dashboard: 'Cloud MLM Software Dashboard - Network Marketing Management Platform',
    feature: 'MLM Software Feature - Network Marketing Solution',
    service: 'MLM Software Service - Direct Selling Platform',
    testimonial: 'MLM Software Customer Testimonial - Network Marketing Success Story',
    logo: 'Cloud MLM Software Logo - Network Marketing Platform',
    hero: 'Best MLM Software Platform - Cloud-Based Network Marketing Solution',
    module: 'MLM Software Module - Network Marketing Management Tool',
    integration: 'MLM Software Integration - Payment Gateway and Third-Party Services',
    company: 'MLM Company Using Cloud MLM Software - Network Marketing Success',
  };

  const base = baseAlt[imageType] || 'Cloud MLM Software - Network Marketing Platform';

  if (context) {
    return `${base} - ${context}`;
  }

  return base;
}

/**
 * Get comprehensive keywords for homepage
 */
export function getHomepageKeywords(): string {
  return seoKeywords.combined[0];
}
