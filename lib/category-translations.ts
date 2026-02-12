import type { SupportedLocale } from "@/config/site";

export const FEATURE_CATEGORIES = [
  'Compensation',
  'AI',
  'Core',
  'Performance',
  'Security',
  'Commerce',
  'Integrations',
  'Enablement',
  'Unique',
] as const;

export type FeatureCategory = typeof FEATURE_CATEGORIES[number];

const CATEGORY_TRANSLATIONS: Record<SupportedLocale, Record<FeatureCategory, string>> = {
  en: {
    Compensation: 'Compensation',
    AI: 'AI',
    Core: 'Core',
    Performance: 'Performance',
    Security: 'Security',
    Commerce: 'Commerce',
    Integrations: 'Integrations',
    Enablement: 'Enablement',
    Unique: 'Unique',
  },
  es: {
    Compensation: 'Compensación',
    AI: 'IA',
    Core: 'Núcleo',
    Performance: 'Rendimiento',
    Security: 'Seguridad',
    Commerce: 'Comercio',
    Integrations: 'Integraciones',
    Enablement: 'Habilitación',
    Unique: 'Único',
  },
  fr: {
    Compensation: 'Rémunération',
    AI: 'IA',
    Core: 'Noyau',
    Performance: 'Performance',
    Security: 'Sécurité',
    Commerce: 'Commerce',
    Integrations: 'Intégrations',
    Enablement: 'Activation',
    Unique: 'Unique',
  },
  it: {
    Compensation: 'Compensazione',
    AI: 'IA',
    Core: 'Nucleo',
    Performance: 'Prestazioni',
    Security: 'Sicurezza',
    Commerce: 'Commercio',
    Integrations: 'Integrazioni',
    Enablement: 'Abilitazione',
    Unique: 'Unico',
  },
  de: {
    Compensation: 'Vergütung',
    AI: 'KI',
    Core: 'Kern',
    Performance: 'Leistung',
    Security: 'Sicherheit',
    Commerce: 'Handel',
    Integrations: 'Integrationen',
    Enablement: 'Aktivierung',
    Unique: 'Einzigartig',
  },
  pt: {
    Compensation: 'Compensação',
    AI: 'IA',
    Core: 'Núcleo',
    Performance: 'Desempenho',
    Security: 'Segurança',
    Commerce: 'Comércio',
    Integrations: 'Integrações',
    Enablement: 'Habilitação',
    Unique: 'Único',
  },
  zh: {
    Compensation: '补偿',
    AI: '人工智能',
    Core: '核心',
    Performance: '性能',
    Security: '安全',
    Commerce: '商务',
    Integrations: '集成',
    Enablement: '启用',
    Unique: '独特',
  },
};

/**
 * Get translated category name
 * @param category - The category value (e.g., 'Compensation', 'AI')
 * @param locale - The locale to translate to
 * @returns Translated category name or original if not found
 */
export function getTranslatedCategory(category: string, locale: SupportedLocale = 'en'): string {
  if (!category) return category;
  
  const categoryKey = category as FeatureCategory;
  if (FEATURE_CATEGORIES.includes(categoryKey)) {
    return CATEGORY_TRANSLATIONS[locale]?.[categoryKey] || CATEGORY_TRANSLATIONS.en[categoryKey] || category;
  }
  
  return category;
}
