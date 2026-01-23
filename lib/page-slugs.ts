/**
 * Page slug mappings for different locales
 * Maps locale-specific slugs to page identifiers
 */
export const pageSlugMap: Record<string, Record<string, string>> = {
  en: {
    'faqs': 'faqs',
    'faq': 'faqs', // Legacy support
    'testimonials': 'testimonials',
    'mlm-software-modules': 'mlm-software-modules',
    'services': 'services',
    'industries': 'industries',
    'contact': 'contact',
  },
  es: {
    'preguntas-frecuentes': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'testimonios': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modulos-de-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'servicios': 'services',
    'services': 'services', // Fallback to English slug
    'industrias': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contacto': 'contact',
    'contact': 'contact', // Fallback to English slug
  },
  fr: {
    'foire-aux-questions': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'temoignages': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modules-logiciel-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'services': 'services', // French uses same slug as English
    'industries': 'industries', // French uses same slug as English
    'contact': 'contact', // French uses same slug as English
  },
  it: {
    'domande-frequenti': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'testimonianze': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'moduli-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'servizi': 'services',
    'services': 'services', // Fallback to English slug
    'settori': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contatti': 'contact',
    'contact': 'contact', // Fallback to English slug
  },
  de: {
    'haeufig-gestellte-fragen': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'referenzen': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'mlm-software-module': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'dienstleistungen': 'services',
    'services': 'services', // Fallback to English slug
    'branchen': 'industries',
    'industries': 'industries', // Fallback to English slug
    'kontakt': 'contact',
    'contact': 'contact', // Fallback to English slug
  },
  pt: {
    'perguntas-frequentes': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'depoimentos': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modulos-de-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'servicos': 'services',
    'services': 'services', // Fallback to English slug
    'industrias': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contato': 'contact',
    'contact': 'contact', // Fallback to English slug
  },
  zh: {
    'chang-jian-wen-ti': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'tuijian': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'ruan-jian-mo-kuai': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'fu-wu': 'services',
    'services': 'services', // Fallback to English slug
    'hang-ye': 'industries',
    'industries': 'industries', // Fallback to English slug
    'lian-xi': 'contact',
    'contact': 'contact', // Fallback to English slug
  },
};

/**
 * Reverse mapping: page identifier to locale-specific slugs
 */
export const pageToSlugMap: Record<string, Record<string, string>> = {
  'faqs': {
    en: 'faqs',
    es: 'preguntas-frecuentes',
    fr: 'foire-aux-questions',
    it: 'domande-frequenti',
    de: 'haeufig-gestellte-fragen',
    pt: 'perguntas-frequentes',
    zh: 'chang-jian-wen-ti',
  },
  'testimonials': {
    en: 'testimonials',
    es: 'testimonios',
    fr: 'temoignages',
    it: 'testimonianze',
    de: 'referenzen',
    pt: 'depoimentos',
    zh: 'tuijian',
  },
  'mlm-software-modules': {
    en: 'mlm-software-modules',
    es: 'modulos-de-software-mlm',
    fr: 'modules-logiciel-mlm',
    it: 'moduli-software-mlm',
    de: 'mlm-software-module',
    pt: 'modulos-de-software-mlm',
    zh: 'ruan-jian-mo-kuai',
  },
  'services': {
    en: 'services',
    es: 'servicios',
    fr: 'services', // French uses same slug as English
    it: 'servizi',
    de: 'dienstleistungen',
    pt: 'servicos',
    zh: 'fu-wu',
  },
  'industries': {
    en: 'industries',
    es: 'industrias',
    fr: 'industries', // French uses same slug as English
    it: 'settori',
    de: 'branchen',
    pt: 'industrias',
    zh: 'hang-ye',
  },
  'contact': {
    en: 'contact',
    es: 'contacto',
    fr: 'contact', // French uses same slug as English
    it: 'contatti',
    de: 'kontakt',
    pt: 'contato',
    zh: 'lian-xi',
  },
};

/**
 * Get page identifier from locale-specific slug
 */
export function getPageFromSlug(slug: string, locale: string): string | null {
  return pageSlugMap[locale]?.[slug] || null;
}

/**
 * Get locale-specific slug from page identifier
 */
export function getSlugFromPage(page: string, locale: string): string | null {
  return pageToSlugMap[page]?.[locale] || null;
}
