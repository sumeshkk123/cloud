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
    'network-marketing-software': 'network-marketing-software',
    'direct-selling-software': 'direct-selling-software',
    'crm-mlm-software': 'crm-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'software-marketing-red': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'software-venta-directa': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'software-crm-mlm': 'crm-mlm-software',
    'crm-mlm-software': 'crm-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'disponibilidad-software-mlm-paises': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'logiciel-marketing-reseau': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'logiciel-vente-directe': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'logiciel-crm-mlm': 'crm-mlm-software',
    'crm-mlm-software': 'crm-mlm-software',
    'logiciel-mlm-de-crypto-monnaie-bitcoin': 'bitcoin-cryptocurrency-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'disponibilite-logiciel-mlm-pays': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'software-network-marketing': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'software-vendita-diretta': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'software-crm-mlm': 'crm-mlm-software',
    'crm-mlm-software': 'crm-mlm-software',
    'software-mlm-per-criptovaluta-bitcoin': 'bitcoin-cryptocurrency-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'disponibilita-software-mlm-paesi': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'netzwerk-marketing-software': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'direktvertrieb-software': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'crm-mlm-software': 'crm-mlm-software',
    'bitcoin-kryptowahrung-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'mlm-software-verfuegbarkeit-laender': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'software-marketing-rede': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'software-venda-direta': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'software-crm-mlm': 'crm-mlm-software',
    'crm-mlm-software': 'crm-mlm-software',
    'software-de-mlm-de-criptomoeda-bitcoin': 'bitcoin-cryptocurrency-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'disponibilidade-software-mlm-paises': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
    'wang-luo-ying-xiao-ruan-jian': 'network-marketing-software',
    'network-marketing-software': 'network-marketing-software',
    'zhi-xiao-ruan-jian': 'direct-selling-software',
    'direct-selling-software': 'direct-selling-software',
    'crm-mlm-ruan-jian': 'crm-mlm-software',
    'crm-mlm-software': 'crm-mlm-software',
    'bitcoin-jia-mi-huo-bi-mlm-ruan-jian': 'bitcoin-cryptocurrency-mlm-software',
    'bitcoin-cryptocurrency-mlm-software': 'bitcoin-cryptocurrency-mlm-software',
    'mlm-ruan-jian-ge-guo-ke-yong': 'mlm-software-availability-across-countries',
    'mlm-software-availability-across-countries': 'mlm-software-availability-across-countries',
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
  'network-marketing-software': {
    en: 'network-marketing-software',
    es: 'software-marketing-red',
    fr: 'logiciel-marketing-reseau',
    it: 'software-network-marketing',
    de: 'netzwerk-marketing-software',
    pt: 'software-marketing-rede',
    zh: 'wang-luo-ying-xiao-ruan-jian',
  },
  'direct-selling-software': {
    en: 'direct-selling-software',
    es: 'software-venta-directa',
    fr: 'logiciel-vente-directe',
    it: 'software-vendita-diretta',
    de: 'direktvertrieb-software',
    pt: 'software-venda-direta',
    zh: 'zhi-xiao-ruan-jian',
  },
  'crm-mlm-software': {
    en: 'crm-mlm-software',
    es: 'software-crm-mlm',
    fr: 'logiciel-crm-mlm',
    it: 'software-crm-mlm',
    de: 'crm-mlm-software',
    pt: 'software-crm-mlm',
    zh: 'crm-mlm-ruan-jian',
  },
  'bitcoin-cryptocurrency-mlm-software': {
    en: 'bitcoin-cryptocurrency-mlm-software',
    es: 'bitcoin-cryptocurrency-mlm-software',
    fr: 'logiciel-mlm-de-crypto-monnaie-bitcoin',
    it: 'software-mlm-per-criptovaluta-bitcoin',
    de: 'bitcoin-kryptowahrung-mlm-software',
    pt: 'software-de-mlm-de-criptomoeda-bitcoin',
    zh: 'bitcoin-jia-mi-huo-bi-mlm-ruan-jian',
  },
  'mlm-software-availability-across-countries': {
    en: 'mlm-software-availability-across-countries',
    es: 'disponibilidad-software-mlm-paises',
    fr: 'disponibilite-logiciel-mlm-pays',
    it: 'disponibilita-software-mlm-paesi',
    de: 'mlm-software-verfuegbarkeit-laender',
    pt: 'disponibilidade-software-mlm-paises',
    zh: 'mlm-ruan-jian-ge-guo-ke-yong',
  },
};

/**
 * Module sub-page slugs (top-level [slug] under [lang], e.g. /emails, /ticket-system-module-for-mlm-software).
 * Canonical page id -> locale -> slug. Used so /es/correos-electronicos rewrites to /es/emails and buildLocalizedPath(/emails) returns locale-specific slug.
 */
export const modulesSubpageToSlugMap: Record<string, Record<string, string>> = {
  emails: { en: 'emails', es: 'correos-electronicos', fr: 'emails-automatisation', it: 'email', de: 'e-mails', pt: 'emails', zh: 'dian-zi-you-jian' },
  'compensation-module': {
    en: 'compensation-module',
    es: 'modulo-compensacion',
    fr: 'module-compensation',
    it: 'modulo-compensi',
    de: 'compensation-modul',
    pt: 'modulo-compensacao',
    zh: 'bu-chang-mo-kuai',
  },
  'ecommerce-module': {
    en: 'ecommerce-module',
    es: 'modulo-ecommerce',
    fr: 'module-e-commerce',
    it: 'modulo-e-commerce',
    de: 'e-commerce-modul',
    pt: 'modulo-ecommerce',
    zh: 'dian-shang-mo-kuai',
  },
  'marketing-automation': { en: 'marketing-automation', es: 'automatizacion-marketing', fr: 'automatisation-marketing', it: 'automazione-marketing', de: 'marketing-automatisierung', pt: 'automacao-marketing', zh: 'ying-xiao-zi-dong-hua' },
  'compliance-modules': {
    en: 'compliance-modules',
    es: 'modulos-cumplimiento',
    fr: 'modules-conformite',
    it: 'moduli-conformita',
    de: 'compliance-modul',
    pt: 'modulos-conformidade',
    zh: 'he-gui-mo-kuai',
  },
  analytics: { en: 'analytics', es: 'analiticas', fr: 'analytiques', it: 'analytics', de: 'analysen', pt: 'analytics', zh: 'fen-xi' },
  genealogy: { en: 'genealogy', es: 'genealogia', fr: 'genealogie', it: 'genealogia', de: 'genealogie', pt: 'genealogia', zh: 'wang-luo-shu' },
  'customer-engagement-module': {
    en: 'customer-engagement-module',
    es: 'compromiso-cliente',
    fr: 'engagement-client',
    it: 'coinvolgimento-clienti',
    de: 'kundenbindung',
    pt: 'engajamento-cliente',
    zh: 'ke-hu-can-yu',
  },
  'mass-email-sending-module': { en: 'mass-email-sending-module', es: 'modulo-envio-masivo-email', fr: 'module-envoi-email-masse', it: 'modulo-invio-email-massa', de: 'modul-massene-mail', pt: 'modulo-envio-email-massa', zh: 'qun-fa-you-jian-mo-kuai' },
  'e-voucher': {
    en: 'e-voucher-for-mlm-software',
    es: 'e-voucher-para-el-software-de-mlm',
    fr: 'e-voucher-pour-le-logiciel-mlm',
    it: 'e-voucher-per-il-software-mlm',
    de: 'e-gutschein-fur-mlm-software',
    pt: 'e-voucher-para-o-mlm-software',
    zh: 'dian-zi-dai-jin-quan-mlm-ruan-jian',
  },
  'e-wallet': {
    en: 'e-wallet-module-for-mlm-software',
    es: 'e-wallet-module-for-mlm-software',
    fr: 'e-wallet-module-for-mlm-software',
    it: 'e-wallet-module-for-mlm-software',
    de: 'e-wallet-module-for-mlm-software',
    pt: 'e-wallet-module-for-mlm-software',
    zh: 'e-wallet-module-for-mlm-software',
  },
  'ticket-system': {
    en: 'ticket-system-module-for-mlm-software',
    es: 'ticket-system-module-for-mlm-software',
    fr: 'ticket-system-module-for-mlm-software',
    it: 'ticket-system-module-for-mlm-software',
    de: 'ticket-system-module-for-mlm-software',
    pt: 'ticket-system-module-for-mlm-software',
    zh: 'ticket-system-module-for-mlm-software',
  },
  'auto-responder': { en: 'auto-responder', es: 'respuesta-automatica', fr: 'reponse-automatique', it: 'risposta-automatica', de: 'auto-responder', pt: 'resposta-automatica', zh: 'zi-dong-hui-fu' },
  'multi-currency-module': {
    en: 'multi-currency-module',
    es: 'modulo-multidivisa',
    fr: 'module-multi-devises',
    it: 'multi-modulo-di-valuta',
    de: 'mehrwahrungsmodul',
    pt: 'modulo-de-multiplas-moedas',
    zh: 'duo-bi-zhong-mo-kuai',
  },
  'multi-lingual-system': { en: 'multi-lingual-system', es: 'sistema-multilingue', fr: 'systeme-multilingue', it: 'sistema-multilingue', de: 'mehrsprachiges-system', pt: 'sistema-multilinguagem', zh: 'duo-yu-xi-tong' },
  'kyc-documentation': { en: 'kyc-documentation', es: 'documentacion-kyc', fr: 'documentation-kyc', it: 'documentazione-kyc', de: 'kyc-dokumentation', pt: 'documentacao-kyc', zh: 'kyc-wen-dang' },
  'backup-manager': { en: 'backup-manager', es: 'gestor-copias-seguridad', fr: 'gestionnaire-sauvegarde', it: 'gestore-backup', de: 'backup-manager', pt: 'gerenciador-backup', zh: 'bei-fen-guan-li' },
  'email-module': { en: 'email-module', es: 'modulo-email', fr: 'module-email', it: 'modulo-email', de: 'e-mail-modul', pt: 'modulo-email', zh: 'you-jian-mo-kuai' },
};

// Merge module sub-page slugs into pageSlugMap and pageToSlugMap so middleware and buildLocalizedPath handle translated slugs
(function mergeModulesSubpageSlugs() {
  for (const [pageId, slugs] of Object.entries(modulesSubpageToSlugMap)) {
    (pageToSlugMap as Record<string, Record<string, string>>)[pageId] = slugs;
    for (const [loc, slug] of Object.entries(slugs)) {
      if (!pageSlugMap[loc]) (pageSlugMap as Record<string, Record<string, string>>)[loc] = {};
      (pageSlugMap as Record<string, Record<string, string>>)[loc][slug] = pageId;
    }
    // Allow page id as path segment so buildLocalizedPath("/e-voucher", locale) still resolves
    for (const loc of Object.keys(slugs)) {
      if (!(pageSlugMap as Record<string, Record<string, string>>)[loc][pageId]) {
        (pageSlugMap as Record<string, Record<string, string>>)[loc][pageId] = pageId;
      }
    }
  }
})();

/**
 * Pricing sub-page slugs (second segment under /pricing/)
 * Page key -> locale -> slug
 */
export const pricingSubpageToSlugMap: Record<string, Record<string, string>> = {
  "auto-responder-module": {
    en: "auto-responder-module",
    es: "modulo-respuesta-automatica",
    fr: "module-reponse-automatique",
    it: "modulo-risposta-automatica",
    de: "auto-responder-modul",
    pt: "modulo-resposta-automatica",
    zh: "zi-dong-hui-fu-mo-kuai",
  },
  "cloud-mlm-software-basic": {
    en: "cloud-mlm-software-basic",
    es: "software-mlm-basico-nube",
    fr: "logiciel-mlm-cloud-de-base",
    it: "software-mlm-base-cloud",
    de: "cloud-mlm-software-basis",
    pt: "software-mlm-basico-nuvem",
    zh: "yun-mlm-ruan-jian-ji-chu",
  },
  "drupal-cms-website": {
    en: "drupal-cms-website",
    es: "sitio-web-cms-drupal",
    fr: "site-web-cms-drupal",
    it: "sito-web-cms-drupal",
    de: "drupal-cms-webseite",
    pt: "site-cms-drupal",
    zh: "drupal-cms-wang-zhan",
  },
  "email": {
    en: "email",
    es: "correo-automatizacion",
    fr: "email-automatisation",
    it: "email-automazione",
    de: "e-mail-automatisierung",
    pt: "email-automacao",
    zh: "you-jian-zi-dong-hua",
  },
  "lcp-page-development": {
    en: "lcp-page-development",
    es: "desarrollo-pagina-lcp",
    fr: "developpement-page-lcp",
    it: "sviluppo-pagina-lcp",
    de: "lcp-seiten-entwicklung",
    pt: "desenvolvimento-pagina-lcp",
    zh: "lcp-ye-mian-kai-fa",
  },
  "magento-integration": {
    en: "magento-integration",
    es: "integracion-magento",
    fr: "integration-magento",
    it: "integrazione-magento",
    de: "magento-integration",
    pt: "integracao-magento",
    zh: "magento-ji-cheng",
  },
  "multi-currency-system": {
    en: "multi-currency-system",
    es: "sistema-multimoneda",
    fr: "systeme-multidevises",
    it: "sistema-multivaluta",
    de: "multi-wahrungssystem",
    pt: "sistema-multimoeda",
    zh: "duo-bi-zhi-xi-tong",
  },
  "multilingual-system": {
    en: "multilingual-system",
    es: "sistema-multilingue",
    fr: "systeme-multilingue",
    it: "sistema-multilingue",
    de: "mehrsprachiges-system",
    pt: "sistema-multilinguagem",
    zh: "duo-yu-xi-tong",
  },
  "native-android-app-with-mlm-software": {
    en: "native-android-app-with-mlm-software",
    es: "app-android-nativa-mlm",
    fr: "app-android-native-mlm",
    it: "app-android-nativa-mlm",
    de: "native-android-app-mlm",
    pt: "app-android-nativa-mlm",
    zh: "yuan-sheng-android-mlm-ying-yong",
  },
  "opencart-integration": {
    en: "opencart-integration",
    es: "integracion-opencart",
    fr: "integration-opencart",
    it: "integrazione-opencart",
    de: "opencart-integration",
    pt: "integracao-opencart",
    zh: "opencart-ji-cheng",
  },
  "payment-gateway-integration": {
    en: "payment-gateway-integration",
    es: "integracion-pasarela-pago",
    fr: "integration-passerelle-paiement",
    it: "integrazione-gateway-pagamento",
    de: "zahlungsgateway-integration",
    pt: "integracao-gateway-pagamento",
    zh: "zhi-fu-wang-guan-ji-cheng",
  },
  "privileged-user-system-module": {
    en: "privileged-user-system-module",
    es: "modulo-sistema-usuario-privilegiado",
    fr: "module-systeme-utilisateur-privilegie",
    it: "modulo-sistema-utente-privilegiato",
    de: "privilegiertes-benutzersystem-modul",
    pt: "modulo-sistema-usuario-privilegiado",
    zh: "te-quan-yong-hu-xi-tong-mo-kuai",
  },
  "replicating-website-for-mlm-business": {
    en: "replicating-website-for-mlm-business",
    es: "replicacion-sitio-web-negocio-mlm",
    fr: "replication-site-web-affaire-mlm",
    it: "replica-sito-web-business-mlm",
    de: "replizierende-website-mlm-geschaeft",
    pt: "replicacao-site-negocio-mlm",
    zh: "fu-zhi-wang-zhan-mlm-ye-wu",
  },
  "support-ticket-system-module-for-mlm-software": {
    en: "support-ticket-system-module-for-mlm-software",
    es: "modulo-sistema-tickets-soporte-software-mlm",
    fr: "module-systeme-tickets-support-logiciel-mlm",
    it: "modulo-sistema-ticket-supporto-software-mlm",
    de: "support-ticket-system-modul-mlm-software",
    pt: "modulo-sistema-tickets-suporte-software-mlm",
    zh: "ke-fu-gong-dan-xi-tong-mo-kuai-mlm-ruan-jian",
  },
  "wordpress-cms-website": {
    en: "wordpress-cms-website",
    es: "sitio-web-cms-wordpress",
    fr: "site-web-cms-wordpress",
    it: "sito-web-cms-wordpress",
    de: "wordpress-cms-webseite",
    pt: "site-cms-wordpress",
    zh: "wordpress-cms-wang-zhan",
  },
};

/** Locale -> slug (second segment) -> page key. Used to resolve URL to page. */
const pricingSubpageSlugToPageMap: Record<string, Record<string, string>> = (() => {
  const out: Record<string, Record<string, string>> = {};
  for (const [page, slugs] of Object.entries(pricingSubpageToSlugMap)) {
    for (const [loc, slug] of Object.entries(slugs)) {
      if (!out[loc]) out[loc] = {};
      out[loc][slug] = page;
    }
  }
  return out;
})();

export function getPricingSubpageFromSlug(slug: string, locale: string): string | null {
  return pricingSubpageSlugToPageMap[locale]?.[slug] ?? pricingSubpageSlugToPageMap["en"]?.[slug] ?? null;
}

/** Resolve any locale's slug to page key (for buildLocalizedPath when path is /pricing/xxx). */
export function getPricingSubpageKeyFromSlug(segment: string): string | null {
  for (const loc of Object.keys(pricingSubpageSlugToPageMap)) {
    const page = pricingSubpageSlugToPageMap[loc]?.[segment];
    if (page) return page;
  }
  return null;
}

export function getSlugForPricingSubpage(page: string, locale: string): string | null {
  return pricingSubpageToSlugMap[page]?.[locale] ?? pricingSubpageToSlugMap[page]?.["en"] ?? null;
}

/**
 * Get page identifier from locale-specific slug.
 * Tries exact match, then URL-decoded slug (e.g. verg%C3%BCtungsmodul → vergütungsmodul).
 */
export function getPageFromSlug(slug: string, locale: string): string | null {
  const exact = pageSlugMap[locale]?.[slug];
  if (exact) return exact;
  try {
    const decoded = decodeURIComponent(slug);
    if (decoded !== slug) return pageSlugMap[locale]?.[decoded] ?? null;
  } catch {
    // ignore decode errors
  }
  return null;
}

/**
 * Get locale-specific slug from page identifier
 */
export function getSlugFromPage(page: string, locale: string): string | null {
  return pageToSlugMap[page]?.[locale] || null;
}
