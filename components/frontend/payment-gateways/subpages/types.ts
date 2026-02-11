/**
 * Content shape for payment gateway country subpages (e.g. /mlm-software-payment-gateways/algeria).
 * Use icon keys (e.g. "BarChart3", "Bank") so content can be passed from Server to Client Components.
 */

export interface PaymentGatewayCountryHeroMetric {
  label: string;
  value: string;
  description: string;
  /** Icon key resolved in client via getPaymentGatewayCountryIcon (e.g. BarChart3, Building2, Signal, Bank, GlobeSimple, Map, ChartLineUp, ShieldCheck, UsersThree, Layers3). */
  icon: string;
}

export interface PaymentGatewayCountryCluster {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface PaymentGatewayCountryStage {
  name: string;
  detail: string;
  icon: string;
}

export interface PaymentGatewayCountryGuard {
  title: string;
  description: string;
  icon: string;
}

export interface PaymentGatewayCountryFaqItem {
  question: string;
  answer: string;
}

export interface PaymentGatewayCountryBriefcase {
  title: string;
  description: string;
  artefactsLabel: string;
  artefactsDetail: string;
  refreshLabel: string;
  refreshDetail: string;
  ctaLabel: string;
}

export interface PaymentGatewayCountryContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    /** First button (e.g. "Pricing"). */
    primaryCtaLabel: string;
    /** Second button (e.g. "Try free demo"). */
    secondaryCtaLabel: string;
    /** Third button (e.g. "Reserve your demo") — opens popup when onPrimaryCtaClick set. */
    reserveDemoCtaLabel: string;
    quote: string;
    quoteAttribution: string;
    snapshotCtaLabel: string;
    metrics: PaymentGatewayCountryHeroMetric[];
  };
  clusters: {
    heading: string;
    description: string;
    items: PaymentGatewayCountryCluster[];
  };
  stages: {
    heading: string;
    description: string;
    items: PaymentGatewayCountryStage[];
  };
  guards: {
    heading: string;
    description: string;
    items: PaymentGatewayCountryGuard[];
    briefcase: PaymentGatewayCountryBriefcase;
  };
  faq: {
    heading: string;
    description: string;
    items: PaymentGatewayCountryFaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    /** Modal subheading when primary CTA opens Request Demo popup. Optional. */
    subheading?: string;
    /** Exactly 3 strings for trust indicators (Zap, Clock, CheckCircle2). Optional; default used if omitted. */
    trustIndicators?: [string, string, string];
  };
}
