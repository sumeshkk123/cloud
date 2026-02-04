/**
 * Page slug mappings for different locales
 * Maps locale-specific slugs to page identifiers
 */
export const pageSlugMap: Record<string, Record<string, string>> = {
  en: {
    'about-company': 'about-company',
    'faqs': 'faqs',
    'faq': 'faqs', // Legacy support
    'testimonials': 'testimonials',
    'mlm-software-modules': 'mlm-software-modules',
    'mlm-software-integration': 'mlm-software-integration',
    'mlm-plans': 'mlm-plans',
    'services': 'services',
    'industries': 'industries',
    'contact': 'contact',
    'changelog': 'changelog',
    'ai-copilot': 'ai-copilot',
    'features': 'features',
    'free-mlm-software-demo': 'free-mlm-software-demo',
    'pricing': 'pricing',
    'blog': 'blog',
    'press-release': 'press-release',
    'privacy': 'privacy',
    'refunds-and-cancellation': 'refunds-and-cancellation',
    'legal': 'legal',
    'resources': 'resources',
    'support': 'support',
  },
  es: {
    'sobre-la-empresa': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'preguntas-frecuentes': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'testimonios': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modulos-de-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'integracion-de-software-mlm': 'mlm-software-integration',
    'mlm-software-integration': 'mlm-software-integration', // Fallback to English slug
    'planes-mlm': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'servicios': 'services',
    'services': 'services', // Fallback to English slug
    'industrias': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contacto': 'contact',
    'contact': 'contact', // Fallback to English slug
    'registro-de-cambios': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'copiloto-ia': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'caracteristicas': 'features',
    'features': 'features', // Fallback to English slug
    'demo-gratis-de-software-mlm': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'precios': 'pricing',
    'pricing': 'pricing',
    'blog': 'blog',
    'comunicado-de-prensa': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'politica-de-privacidad': 'privacy',
    'privacy': 'privacy', // Fallback to English slug
    'politica-de-reembolso': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'terminos-y-condiciones': 'legal',
    'legal': 'legal', // Fallback to English slug
    'recursos': 'resources',
    'resources': 'resources',
    'soporte': 'support',
    'support': 'support',
  },
  fr: {
    'a-propos-de-l-entreprise': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'foire-aux-questions': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'temoignages': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modules-logiciel-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'integration-logiciel-mlm': 'mlm-software-integration',
    'mlm-software-integration': 'mlm-software-integration', // Fallback to English slug
    'plans-mlm': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'services': 'services', // French uses same slug as English
    'industries': 'industries', // French uses same slug as English
    'contact': 'contact', // French uses same slug as English
    'journal-des-modifications': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'copilote-ia': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'fonctionnalites': 'features',
    'features': 'features', // Fallback to English slug
    'demo-gratuite-logiciel-mlm': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'tarifs': 'pricing',
    'pricing': 'pricing',
    'blog': 'blog',
    'communique-de-presse': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'politique-de-confidentialite': 'privacy',
    'privacy': 'privacy', // Fallback to English slug
    'politique-de-remboursement': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'conditions-generales': 'legal',
    'legal': 'legal', // Fallback to English slug
    'ressources': 'resources',
    'resources': 'resources',
    'support': 'support',
  },
  it: {
    'chi-siamo': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'domande-frequenti': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'testimonianze': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'moduli-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'integrazione-software-mlm': 'mlm-software-integration',
    'mlm-software-integration': 'mlm-software-integration', // Fallback to English slug
    'piani-mlm': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'servizi': 'services',
    'services': 'services', // Fallback to English slug
    'settori': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contatti': 'contact',
    'contact': 'contact', // Fallback to English slug
    'registro-delle-modifiche': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'co-pilota-ia': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'funzionalita': 'features',
    'features': 'features', // Fallback to English slug
    'demo-gratuita-software-mlm': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'prezzi': 'pricing',
    'pricing': 'pricing',
    'blog': 'blog',
    'comunicato-stampa': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'informativa-sulla-privacy': 'privacy',
    'privacy': 'privacy', // Fallback to English slug
    'politica-di-rimborso': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'termini-e-condizioni': 'legal',
    'legal': 'legal', // Fallback to English slug
    'risorse': 'resources',
    'resources': 'resources',
    'supporto': 'support',
    'support': 'support',
  },
  de: {
    'ueber-uns': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'haeufig-gestellte-fragen': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'referenzen': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'mlm-software-module': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'mlm-software-integration': 'mlm-software-integration',
    'mlm-plaene': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'dienstleistungen': 'services',
    'services': 'services', // Fallback to English slug
    'branchen': 'industries',
    'industries': 'industries', // Fallback to English slug
    'kontakt': 'contact',
    'contact': 'contact', // Fallback to English slug
    'aenderungsprotokoll': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'ki-co-pilot': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'funktionen': 'features',
    'features': 'features', // Fallback to English slug
    'kostenlose-mlm-software-demo': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'preise': 'pricing',
    'pricing': 'pricing',
    'blog': 'blog',
    'pressemitteilung': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'datenschutz': 'privacy',
    'privacy': 'privacy', // Fallback to English slug
    'rueckerstattungsrichtlinie': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'allgemeine-geschaeftsbedingungen': 'legal',
    'legal': 'legal', // Fallback to English slug
    'ressourcen': 'resources',
    'resources': 'resources',
    'support': 'support',
  },
  pt: {
    'sobre-a-empresa': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'perguntas-frequentes': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'depoimentos': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'modulos-de-software-mlm': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'integracao-de-software-mlm': 'mlm-software-integration',
    'mlm-software-integration': 'mlm-software-integration', // Fallback to English slug
    'planos-mlm': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'servicos': 'services',
    'services': 'services', // Fallback to English slug
    'industrias': 'industries',
    'industries': 'industries', // Fallback to English slug
    'contato': 'contact',
    'contact': 'contact', // Fallback to English slug
    'registro-de-alteracoes': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'co-piloto-ia': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'recursos': 'features',
    'features': 'features', // Fallback to English slug
    'demo-gratis-software-mlm': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'precos': 'pricing',
    'pricing': 'pricing',
    'blog': 'blog',
    'comunicado-imprensa': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'politica-de-reembolso': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'termos-e-condicoes': 'legal',
    'legal': 'legal', // Fallback to English slug
    'materiais': 'resources',
    'resources': 'resources',
    'suporte': 'support',
    'support': 'support',
  },
  zh: {
    'guanyu-gongsi': 'about-company',
    'about-company': 'about-company', // Fallback to English slug
    'chang-jian-wen-ti': 'faqs',
    'faqs': 'faqs', // Fallback to English slug
    'tuijian': 'testimonials',
    'testimonials': 'testimonials', // Fallback to English slug
    'ruan-jian-mo-kuai': 'mlm-software-modules',
    'mlm-software-modules': 'mlm-software-modules', // Fallback to English slug
    'ruan-jian-ji-cheng': 'mlm-software-integration',
    'mlm-software-integration': 'mlm-software-integration', // Fallback to English slug
    'mlm-ji-hua': 'mlm-plans',
    'mlm-plans': 'mlm-plans', // Fallback to English slug
    'fu-wu': 'services',
    'services': 'services', // Fallback to English slug
    'hang-ye': 'industries',
    'industries': 'industries', // Fallback to English slug
    'lian-xi': 'contact',
    'contact': 'contact', // Fallback to English slug
    'geng-xin-ri-zhi': 'changelog',
    'changelog': 'changelog', // Fallback to English slug
    'ai-fu-jia-shi': 'ai-copilot',
    'ai-copilot': 'ai-copilot', // Fallback to English slug
    'gong-neng': 'features',
    'features': 'features', // Fallback to English slug
    'mian-fei-mlm-ruan-jian-yan-shi': 'free-mlm-software-demo',
    'free-mlm-software-demo': 'free-mlm-software-demo', // Fallback to English slug
    'ding-jia': 'pricing',
    'pricing': 'pricing',
    'bo-ke': 'blog',
    'blog': 'blog',
    'xin-wen-gao': 'press-release',
    'press-release': 'press-release', // Fallback to English slug
    'yin-si-zheng-ce': 'privacy',
    'privacy': 'privacy', // Fallback to English slug
    'tui-kuan-zheng-ce': 'refunds-and-cancellation',
    'refunds-and-cancellation': 'refunds-and-cancellation', // Fallback to English slug
    'tiao-kuan-he-tiao-jian': 'legal',
    'legal': 'legal', // Fallback to English slug
    'zi-yuan': 'resources',
    'resources': 'resources',
    'zhi-chi': 'support',
    'support': 'support',
  },
};

/**
 * Reverse mapping: page identifier to locale-specific slugs
 */
export const pageToSlugMap: Record<string, Record<string, string>> = {
  'about-company': {
    en: 'about-company',
    es: 'sobre-la-empresa',
    fr: 'a-propos-de-l-entreprise',
    it: 'chi-siamo',
    de: 'ueber-uns',
    pt: 'sobre-a-empresa',
    zh: 'guanyu-gongsi',
  },
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
  'mlm-software-integration': {
    en: 'mlm-software-integration',
    es: 'integracion-de-software-mlm',
    fr: 'integration-logiciel-mlm',
    it: 'integrazione-software-mlm',
    de: 'mlm-software-integration',
    pt: 'integracao-de-software-mlm',
    zh: 'ruan-jian-ji-cheng',
  },
  'mlm-plans': {
    en: 'mlm-plans',
    es: 'planes-mlm',
    fr: 'plans-mlm',
    it: 'piani-mlm',
    de: 'mlm-plaene',
    pt: 'planos-mlm',
    zh: 'mlm-ji-hua',
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
  'free-mlm-software-demo': {
    en: 'free-mlm-software-demo',
    es: 'demo-gratis-de-software-mlm',
    fr: 'demo-gratuite-logiciel-mlm',
    it: 'demo-gratuita-software-mlm',
    de: 'kostenlose-mlm-software-demo',
    pt: 'demo-gratis-software-mlm',
    zh: 'mian-fei-mlm-ruan-jian-yan-shi',
  },
  'changelog': {
    en: 'changelog',
    es: 'registro-de-cambios',
    fr: 'journal-des-modifications',
    it: 'registro-delle-modifiche',
    de: 'aenderungsprotokoll',
    pt: 'registro-de-alteracoes',
    zh: 'geng-xin-ri-zhi',
  },
  'ai-copilot': {
    en: 'ai-copilot',
    es: 'copiloto-ia',
    fr: 'copilote-ia',
    it: 'co-pilota-ia',
    de: 'ki-co-pilot',
    pt: 'co-piloto-ia',
    zh: 'ai-fu-jia-shi',
  },
  'features': {
    en: 'features',
    es: 'caracteristicas',
    fr: 'fonctionnalites',
    it: 'funzionalita',
    de: 'funktionen',
    pt: 'recursos',
    zh: 'gong-neng',
  },
  'pricing': {
    en: 'pricing',
    es: 'precios',
    fr: 'tarifs',
    it: 'prezzi',
    de: 'preise',
    pt: 'precos',
    zh: 'ding-jia',
  },
  'blog': {
    en: 'blog',
    es: 'blog',
    fr: 'blog',
    it: 'blog',
    de: 'blog',
    pt: 'blog',
    zh: 'bo-ke',
  },
  'resources': {
    en: 'resources',
    es: 'recursos',
    fr: 'ressources',
    it: 'risorse',
    de: 'ressourcen',
    pt: 'materiais',
    zh: 'zi-yuan',
  },
  'support': {
    en: 'support',
    es: 'soporte',
    fr: 'support',
    it: 'supporto',
    de: 'support',
    pt: 'suporte',
    zh: 'zhi-chi',
  },
  'press-release': {
    en: 'press-release',
    es: 'comunicado-de-prensa',
    fr: 'communique-de-presse',
    it: 'comunicato-stampa',
    de: 'pressemitteilung',
    pt: 'comunicado-imprensa',
    zh: 'xin-wen-gao',
  },
  'privacy': {
    en: 'privacy',
    es: 'politica-de-privacidad',
    fr: 'politique-de-confidentialite',
    it: 'informativa-sulla-privacy',
    de: 'datenschutz',
    pt: 'politica-de-privacidade',
    zh: 'yin-si-zheng-ce',
  },
  'refunds-and-cancellation': {
    en: 'refunds-and-cancellation',
    es: 'politica-de-reembolso',
    fr: 'politique-de-remboursement',
    it: 'politica-di-rimborso',
    de: 'rueckerstattungsrichtlinie',
    pt: 'politica-de-reembolso',
    zh: 'tui-kuan-zheng-ce',
  },
  'legal': {
    en: 'legal',
    es: 'terminos-y-condiciones',
    fr: 'conditions-generales',
    it: 'termini-e-condizioni',
    de: 'allgemeine-geschaeftsbedingungen',
    pt: 'termos-e-condicoes',
    zh: 'tiao-kuan-he-tiao-jian',
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
