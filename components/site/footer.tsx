'use client';

import type { ReactNode } from "react";
import Link from "next/link";

import type { ComponentType } from "react";
import type { IconProps } from "phosphor-react";
import { Buildings, ChartLineUp, GlobeHemisphereEast, Handshake, Lightning, ShieldCheck, UsersThree, FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo, LinkedinLogo, TelegramLogo } from "phosphor-react";

import type { SupportedLocale } from "@/config/site";
import { toAbsoluteUrl } from "@/lib/media";
import { buildLocalizedPath, resolveHref } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { FooterBottomLink, FooterColumn, FooterContact, FooterCta } from "@/types/global";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

type IconComponent = ComponentType<IconProps>;

type FooterDifferentiatorText = {
  title: string;
  description: string;
};

type FooterExpertSupportText = FooterDifferentiatorText;

type FooterStaticCopy = {
  badgeLabel: string;
  description: string;
  differentiators: FooterDifferentiatorText[];
  dominanceStats: string[];
  trustBadges: string[];
  heroHeading: string;
  heroBody: string;
  expertSupport: FooterExpertSupportText[];
  companySectionLabel: string;
  librarySectionLabel: string;
  seoColumns: FooterColumn[];
  bottomTagline: string;
};

const DIFFERENTIATOR_ICONS: IconComponent[] = [Lightning, ChartLineUp, ShieldCheck, Handshake];

const EXPERT_SUPPORT_ICONS: IconComponent[] = [Buildings, UsersThree, ShieldCheck, GlobeHemisphereEast];

const DOMINANCE_VALUES = ["3,200+", "$1.4B+", "99.98%", "80+"];

const AVAILABLE_COUNTRIES_TITLE = "Available Countries";
const AVAILABLE_COUNTRIES_BASE_PATH = "/mlm-software-availability-across-countries";
/** Display name -> slug for footer country links (must match countries-by-continent slugs). */
const AVAILABLE_COUNTRIES: { name: string; slug: string }[] = [
  { name: "United States", slug: "united-states" },
  { name: "Spain", slug: "spain" },
  { name: "France", slug: "france" },
  { name: "Italy", slug: "italy" },
  { name: "Portugal", slug: "portugal" },
  { name: "Singapore", slug: "singapore" },
  { name: "Malaysia", slug: "malaysia" },
];
const VIEW_ALL_COUNTRIES_LABEL = "View All Countries";

const FOOTER_STATIC_COPY: Record<string, FooterStaticCopy> = {
  en: {
    badgeLabel: "Dominant MLM Platform",
    description:
      "Cloud MLM Software powers enterprise network marketing teams with a unified operating system for compensation, payouts, compliance, analytics, and AI-driven distributor journeys across every region.",
    differentiators: [
      {
        title: "Mission-critical architecture",
        description: "Elastic microservices with autoscaling, redundancy, and sub-100 ms commission engine response times."
      },
      {
        title: "Growth intelligence",
        description: "Unified dashboards for revenue, churn, cohorts, and predictive bonus forecasts across every market."
      },
      {
        title: "Compliance first",
        description: "Regulatory guardrails baked-in for FTC, DSA, GDPR, VAT/GST, AML, and regional taxation workflows."
      },
      {
        title: "Enterprise partnerships",
        description: "Global alliances for payments, logistics, cloud, and KYC to power rapid launches and scale."
      }
    ],
    dominanceStats: [
      "MLM organisations launched",
      "Monthly commission volume automated",
      "Uptime backed by enterprise SLA",
      "Countries with multi-currency compliance"
    ],
    trustBadges: ["ISO 27001", "SOC 2 Ready", "GDPR & PDPA", "AI Fraud Analytics", "Bank-grade Encryption"],
    heroHeading: "Talk with an enterprise strategist",
    heroBody:
      "Blueprint enterprise-grade MLM ecosystems with specialists who have launched hundreds of regulated network marketing brands worldwide.",
    expertSupport: [
      {
        title: "Global delivery hubs",
        description: "Presence across India, UAE, USA, and Europe for localized implementations and governance."
      },
      {
        title: "Executive playbooks",
        description: "CXO-level advisory for go-to-market, compensation modelling, and large-scale migrations."
      },
      {
        title: "Regulatory desk",
        description: "Continuous monitoring of global MLM, tax, and payment regulations with proactive alerts."
      },
      {
        title: "Follow-the-sun support",
        description: "24/7 command center with multilingual strategists, solution architects, and product specialists."
      }
    ],
    companySectionLabel: "Company & Platform",
    librarySectionLabel: "MLM Expertise Library",
    seoColumns: [
      {
        title: "MLM Software Solutions",
        links: [
          { title: "Binary MLM Software", href: "/solutions/binary-mlm-software" },
          { title: "Matrix MLM Software", href: "/solutions/matrix-mlm-software" },
          { title: "Hybrid MLM Platform", href: "/solutions/hybrid-mlm" },
          { title: "Unilevel MLM Software", href: "/solutions/unilevel-mlm" },
          { title: "Generation MLM", href: "/solutions/generation-plan" },
          { title: "Stair Step Software", href: "/solutions/stair-step-plan" }
        ]
      },
      {
        title: "Enterprise Services",
        links: [
          { title: "MLM App Development", href: "/services/mlm-app-development" },
          { title: "Compensation Plan Consulting", href: "/services/compensation-consulting" },
          { title: "Payment Gateway Integrations", href: "/services/payment-gateway-integration" },
          { title: "Cloud & On-prem Migrations", href: "/services/mlm-software-migration" },
          { title: "Enterprise Implementation", href: "/services/enterprise-mlm" },
          { title: "White Label MLM Platform", href: "/services/white-label-mlm" }
        ]
      },
      {
        title: "Industries We Power",
        links: [
          { title: "Health & Wellness MLM", href: "/industries/health-and-wellness" },
          { title: "Fintech & Crypto", href: "/industries/fintech-crypto" },
          { title: "Beauty & Cosmetics", href: "/industries/beauty-cosmetics" },
          { title: "Nutraceutical MLM", href: "/industries/nutraceutical" },
          { title: "Education & eLearning", href: "/industries/education-elearning" },
          { title: "Direct Selling Startups", href: "/industries/startups" }
        ]
      },
      {
        title: "Strategic Resources",
        links: [
          { title: "MLM Compliance Handbook", href: "/resources/mlm-compliance-guide" },
          { title: "Commission Automation Playbook", href: "/resources/commission-automation" },
          { title: "Global Payout Guide", href: "/resources/global-payout-guide" },
          { title: "Technology Stack Overview", href: "/resources/technology-stack" },
          { title: "Enterprise Success Stories", href: "/resources/case-studies" },
          { title: "MLM Knowledge Base", href: "/resources/knowledge-base" }
        ]
      }
    ],
    bottomTagline: "Enterprise-grade data security, privacy, and global compliance."
  },
  es: {
    badgeLabel: "Plataforma MLM líder",
    description:
      "Cloud MLM Software impulsa a los equipos empresariales de marketing multinivel con un sistema operativo unificado para compensaciones, pagos, cumplimiento, analítica y recorridos de distribuidores impulsados por IA en cada región.",
    differentiators: [
      {
        title: "Arquitectura para misiones críticas",
        description: "Microservicios elásticos con autoescalado, redundancia y tiempos de respuesta inferiores a 100 ms en el motor de comisiones."
      },
      {
        title: "Inteligencia de crecimiento",
        description: "Paneles unificados para ingresos, churn, cohortes y previsiones de bonos en todos los mercados."
      },
      {
        title: "Cumplimiento ante todo",
        description: "Controles regulatorios integrados para FTC, DSA, GDPR, IVA/IGV, AML y requisitos fiscales regionales."
      },
      {
        title: "Alianzas empresariales",
        description: "Alianzas globales para pagos, logística, nube y KYC que aceleran lanzamientos y escalamiento."
      }
    ],
    dominanceStats: [
      "Organizaciones MLM lanzadas",
      "Volumen mensual de comisiones automatizado",
      "Disponibilidad respaldada por SLA empresarial",
      "Países con cumplimiento multimoneda"
    ],
    trustBadges: ["ISO 27001", "Preparado para SOC 2", "GDPR y PDPA", "Analítica antifraude con IA", "Cifrado de nivel bancario"],
    heroHeading: "Habla con un estratega empresarial",
    heroBody:
      "Diseña ecosistemas MLM de nivel empresarial con especialistas que han lanzado cientos de marcas reguladas de marketing multinivel en todo el mundo.",
    expertSupport: [
      {
        title: "Centros de entrega globales",
        description: "Presencia en India, EAU, Estados Unidos y Europa para implementaciones y gobernanza locales."
      },
      {
        title: "Playbooks ejecutivos",
        description: "Asesoría para directivos en go-to-market, compensación y migraciones a gran escala."
      },
      {
        title: "Mesa regulatoria",
        description: "Monitoreo continuo de normativa MLM, fiscal y de pagos con alertas proactivas."
      },
      {
        title: "Soporte follow-the-sun",
        description: "Centro de comando 24/7 con estrategas multilingües, arquitectos de soluciones y especialistas de producto."
      }
    ],
    companySectionLabel: "Empresa y plataforma",
    librarySectionLabel: "Biblioteca de experiencia MLM",
    seoColumns: [
      {
        title: "Soluciones de software MLM",
        links: [
          { title: "Software MLM binario", href: "/solutions/binary-mlm-software" },
          { title: "Software MLM matriz", href: "/solutions/matrix-mlm-software" },
          { title: "Plataforma MLM híbrida", href: "/solutions/hybrid-mlm" },
          { title: "Software MLM unilevel", href: "/solutions/unilevel-mlm" },
          { title: "MLM de generación", href: "/solutions/generation-plan" },
          { title: "Software escalonado", href: "/solutions/stair-step-plan" }
        ]
      },
      {
        title: "Servicios empresariales",
        links: [
          { title: "Desarrollo de apps MLM", href: "/services/mlm-app-development" },
          { title: "Consultoría de planes de compensación", href: "/services/compensation-consulting" },
          { title: "Integraciones de pasarelas de pago", href: "/services/payment-gateway-integration" },
          { title: "Migraciones en la nube y locales", href: "/services/mlm-software-migration" },
          { title: "Implementación empresarial", href: "/services/enterprise-mlm" },
          { title: "Plataforma MLM de marca blanca", href: "/services/white-label-mlm" }
        ]
      },
      {
        title: "Industrias que impulsamos",
        links: [
          { title: "MLM de salud y bienestar", href: "/industries/health-and-wellness" },
          { title: "Fintech y criptomonedas", href: "/industries/fintech-crypto" },
          { title: "Belleza y cosméticos", href: "/industries/beauty-cosmetics" },
          { title: "MLM nutracéutico", href: "/industries/nutraceutical" },
          { title: "Educación y eLearning", href: "/industries/education-elearning" },
          { title: "Startups de venta directa", href: "/industries/startups" }
        ]
      },
      {
        title: "Recursos estratégicos",
        links: [
          { title: "Manual de cumplimiento MLM", href: "/resources/mlm-compliance-guide" },
          { title: "Playbook de automatización de comisiones", href: "/resources/commission-automation" },
          { title: "Guía global de pagos", href: "/resources/global-payout-guide" },
          { title: "Resumen de la pila tecnológica", href: "/resources/technology-stack" },
          { title: "Casos de éxito empresariales", href: "/resources/case-studies" },
          { title: "Base de conocimiento MLM", href: "/resources/knowledge-base" }
        ]
      }
    ],
    bottomTagline: "Seguridad de datos, privacidad y cumplimiento global de nivel empresarial."
  },
  "pt-PT": {
    badgeLabel: "Plataforma MLM de referência",
    description:
      "O Cloud MLM Software potencia equipas empresariais de marketing multinível com um sistema operativo unificado para compensações, pagamentos, conformidade, analítica e jornadas de distribuidores orientadas por IA em todas as regiões.",
    differentiators: [
      {
        title: "Arquitetura para missões críticas",
        description: "Microserviços elásticos com autoescala, redundância e tempos de resposta inferiores a 100 ms no motor de comissões."
      },
      {
        title: "Inteligência de crescimento",
        description: "Dashboards unificados para receita, churn, cohorts e previsões de bónus em todos os mercados."
      },
      {
        title: "Conformidade em primeiro lugar",
        description: "Salvaguardas regulatórias integradas para FTC, DSA, GDPR, IVA, AML e requisitos fiscais regionais."
      },
      {
        title: "Parcerias empresariais",
        description: "Alianças globais para pagamentos, logística, cloud e KYC que aceleram lançamentos e escala."
      }
    ],
    dominanceStats: [
      "Organizações MLM lançadas",
      "Volume mensal de comissões automatizado",
      "Disponibilidade garantida por SLA empresarial",
      "Países com conformidade multimoeda"
    ],
    trustBadges: ["ISO 27001", "Pré-certificação SOC 2", "GDPR e PDPA", "Analítica antifraude com IA", "Encriptação de nível bancário"],
    heroHeading: "Fale com um estratega empresarial",
    heroBody:
      "Desenhe ecossistemas MLM de nível empresarial com especialistas que lançaram centenas de marcas regulamentadas de marketing multinível em todo o mundo.",
    expertSupport: [
      {
        title: "Centros de entrega globais",
        description: "Presença na Índia, EAU, EUA e Europa para implementações e governação localizadas."
      },
      {
        title: "Playbooks executivos",
        description: "Consultoria ao nível da gestão para go-to-market, modelação de compensações e migrações em grande escala."
      },
      {
        title: "Mesa regulatória",
        description: "Monitorização contínua da regulamentação MLM, fiscal e de pagamentos com alertas proativos."
      },
      {
        title: "Suporte follow-the-sun",
        description: "Centro de comando 24/7 com estrategas multilingues, arquitetos de solução e especialistas de produto."
      }
    ],
    companySectionLabel: "Empresa e plataforma",
    librarySectionLabel: "Biblioteca de conhecimento MLM",
    seoColumns: [
      {
        title: "Soluções de software MLM",
        links: [
          { title: "Software MLM binário", href: "/solutions/binary-mlm-software" },
          { title: "Software MLM matriz", href: "/solutions/matrix-mlm-software" },
          { title: "Plataforma MLM híbrida", href: "/solutions/hybrid-mlm" },
          { title: "Software MLM unilevel", href: "/solutions/unilevel-mlm" },
          { title: "MLM de geração", href: "/solutions/generation-plan" },
          { title: "Software em escada", href: "/solutions/stair-step-plan" }
        ]
      },
      {
        title: "Serviços empresariais",
        links: [
          { title: "Desenvolvimento de aplicações MLM", href: "/services/mlm-app-development" },
          { title: "Consultoria de planos de compensação", href: "/services/compensation-consulting" },
          { title: "Integrações de gateways de pagamento", href: "/services/payment-gateway-integration" },
          { title: "Migrações cloud e on-premises", href: "/services/mlm-software-migration" },
          { title: "Implementação empresarial", href: "/services/enterprise-mlm" },
          { title: "Plataforma MLM white label", href: "/services/white-label-mlm" }
        ]
      },
      {
        title: "Indústrias que atendemos",
        links: [
          { title: "MLM de saúde e bem-estar", href: "/industries/health-and-wellness" },
          { title: "Fintech e cripto", href: "/industries/fintech-crypto" },
          { title: "Beleza e cosméticos", href: "/industries/beauty-cosmetics" },
          { title: "MLM nutracêutico", href: "/industries/nutraceutical" },
          { title: "Educação e e-learning", href: "/industries/education-elearning" },
          { title: "Startups de venda direta", href: "/industries/startups" }
        ]
      },
      {
        title: "Recursos estratégicos",
        links: [
          { title: "Manual de conformidade MLM", href: "/resources/mlm-compliance-guide" },
          { title: "Playbook de automação de comissões", href: "/resources/commission-automation" },
          { title: "Guia global de pagamentos", href: "/resources/global-payout-guide" },
          { title: "Visão geral da stack tecnológica", href: "/resources/technology-stack" },
          { title: "Histórias de sucesso empresariais", href: "/resources/case-studies" },
          { title: "Base de conhecimento MLM", href: "/resources/knowledge-base" }
        ]
      }
    ],
    bottomTagline: "Segurança de dados, privacidade e conformidade global de nível empresarial."
  },
  fr: {
    badgeLabel: "Plateforme MLM de référence",
    description:
      "Cloud MLM Software équipe les organisations de marketing relationnel avec un système d’exploitation unifié pour la rémunération, les paiements, la conformité, l’analytique et des parcours distributeurs pilotés par l’IA dans chaque région.",
    differentiators: [
      {
        title: "Architecture critique",
        description: "Microservices élastiques avec autoscaling, redondance et moteur de commissions à moins de 100 ms."
      },
      {
        title: "Intelligence de croissance",
        description: "Tableaux de bord unifiés pour revenus, churn, cohortes et prévisions de primes sur tous les marchés."
      },
      {
        title: "Conformité prioritaire",
        description: "Garde-fous réglementaires intégrés pour la FTC, le DSA, le RGPD, la TVA, l’AML et les fiscalités régionales."
      },
      {
        title: "Partenariats d’entreprise",
        description: "Alliances mondiales pour paiements, logistique, cloud et KYC afin d’accélérer les lancements et la montée en charge."
      }
    ],
    dominanceStats: [
      "Organisations MLM lancées",
      "Volume mensuel de commissions automatisé",
      "Disponibilité garantie par SLA entreprise",
      "Pays avec conformité multidevises"
    ],
    trustBadges: ["ISO 27001", "Certifié SOC 2", "RGPD & PDPA", "Analytique anti-fraude IA", "Chiffrement de niveau bancaire"],
    heroHeading: "Échangez avec un stratège entreprise",
    heroBody:
      "Concevez des écosystèmes MLM de niveau entreprise avec des spécialistes ayant lancé des centaines de marques réglementées partout dans le monde.",
    expertSupport: [
      {
        title: "Hubs de livraison mondiaux",
        description: "Présence en Inde, aux Émirats arabes unis, aux États-Unis et en Europe pour des déploiements locaux."
      },
      {
        title: "Playbooks exécutifs",
        description: "Conseil de niveau direction pour go-to-market, modélisation des plans et migrations à grande échelle."
      },
      {
        title: "Cellule de conformité",
        description: "Veille continue des réglementations MLM, fiscales et de paiement avec alertes proactives."
      },
      {
        title: "Support en continu",
        description: "Centre de commande 24/7 avec stratèges multilingues, architectes solutions et spécialistes produit."
      }
    ],
    companySectionLabel: "Entreprise et plateforme",
    librarySectionLabel: "Bibliothèque d’expertise MLM",
    seoColumns: [
      {
        title: "Solutions logicielles MLM",
        links: [
          { title: "Logiciel MLM binaire", href: "/solutions/binary-mlm-software" },
          { title: "Logiciel MLM matrice", href: "/solutions/matrix-mlm-software" },
          { title: "Plateforme MLM hybride", href: "/solutions/hybrid-mlm" },
          { title: "Logiciel MLM unilevel", href: "/solutions/unilevel-mlm" },
          { title: "MLM génération", href: "/solutions/generation-plan" },
          { title: "Logiciel plan par paliers", href: "/solutions/stair-step-plan" }
        ]
      },
      {
        title: "Services pour entreprises",
        links: [
          { title: "Développement d’applications MLM", href: "/services/mlm-app-development" },
          { title: "Consulting plan de compensation", href: "/services/compensation-consulting" },
          { title: "Intégrations de passerelles de paiement", href: "/services/payment-gateway-integration" },
          { title: "Migrations cloud et on-premise", href: "/services/mlm-software-migration" },
          { title: "Mise en œuvre entreprise", href: "/services/enterprise-mlm" },
          { title: "Plateforme MLM en marque blanche", href: "/services/white-label-mlm" }
        ]
      },
      {
        title: "Secteurs que nous servons",
        links: [
          { title: "MLM santé & bien-être", href: "/industries/health-and-wellness" },
          { title: "Fintech & crypto", href: "/industries/fintech-crypto" },
          { title: "Beauté & cosmétiques", href: "/industries/beauty-cosmetics" },
          { title: "MLM nutraceutique", href: "/industries/nutraceutical" },
          { title: "Éducation & e-learning", href: "/industries/education-elearning" },
          { title: "Start-up de vente directe", href: "/industries/startups" }
        ]
      },
      {
        title: "Ressources stratégiques",
        links: [
          { title: "Guide de conformité MLM", href: "/resources/mlm-compliance-guide" },
          { title: "Playbook d’automatisation des commissions", href: "/resources/commission-automation" },
          { title: "Guide des paiements mondiaux", href: "/resources/global-payout-guide" },
          { title: "Vue d’ensemble de l’architecture technologique", href: "/resources/technology-stack" },
          { title: "Success stories entreprises", href: "/resources/case-studies" },
          { title: "Base de connaissances MLM", href: "/resources/knowledge-base" }
        ]
      }
    ],
    bottomTagline: "Sécurité des données, confidentialité et conformité mondiale de niveau entreprise."
  },
  "zh-Hans": {
    badgeLabel: "领先的 MLM 平台",
    description:
      "Cloud MLM Software 为企业级直销团队提供统一的运营系统，涵盖佣金发放、支付、合规、分析以及面向各地区的 AI 分销商旅程。",
    differentiators: [
      {
        title: "关键业务架构",
        description: "弹性微服务，支持自动扩缩、冗余以及低于 100 毫秒的佣金引擎响应。"
      },
      {
        title: "增长智能",
        description: "统一的仪表盘覆盖收入、流失、分组及各市场的奖金预测。"
      },
      {
        title: "合规优先",
        description: "内置针对 FTC、DSA、GDPR、增值税、反洗钱及各地区税务流程的监管防护。"
      },
      {
        title: "企业级合作伙伴",
        description: "在支付、物流、云和 KYC 方面的全球合作，助力快速上线与扩张。"
      }
    ],
    dominanceStats: ["已上线的 MLM 组织", "每月自动化佣金额", "企业 SLA 保障的可用性", "支持多币种合规的国家/地区"],
    trustBadges: ["ISO 27001", "SOC 2 准备就绪", "GDPR 与 PDPA", "AI 反欺诈分析", "银行级加密"],
    heroHeading: "与企业战略顾问交流",
    heroBody: "与曾为全球数百家受监管直销品牌成功上线的专家，共同规划企业级 MLM 生态。",
    expertSupport: [
      {
        title: "全球交付中心",
        description: "在印度、阿联酋、美国和欧洲设点，提供本地化实施与治理。"
      },
      {
        title: "高管级打法",
        description: "为市场拓展、奖金建模和大规模迁移提供 CXO 级建议。"
      },
      {
        title: "合规专席",
        description: "持续监测全球 MLM、税务与支付法规，并主动推送预警。"
      },
      {
        title: "全天候支持",
        description: "24/7 指挥中心，配备多语言策略师、解决方案架构师与产品专家。"
      }
    ],
    companySectionLabel: "企业与平台",
    librarySectionLabel: "MLM 专业资源库",
    seoColumns: [
      {
        title: "MLM 软件解决方案",
        links: [
          { title: "二元制 MLM 软件", href: "/solutions/binary-mlm-software" },
          { title: "矩阵 MLM 软件", href: "/solutions/matrix-mlm-software" },
          { title: "混合型 MLM 平台", href: "/solutions/hybrid-mlm" },
          { title: "单层 MLM 软件", href: "/solutions/unilevel-mlm" },
          { title: "代际 MLM 方案", href: "/solutions/generation-plan" },
          { title: "阶梯制软件", href: "/solutions/stair-step-plan" }
        ]
      },
      {
        title: "企业服务",
        links: [
          { title: "MLM 应用开发", href: "/services/mlm-app-development" },
          { title: "奖金计划咨询", href: "/services/compensation-consulting" },
          { title: "支付网关集成", href: "/services/payment-gateway-integration" },
          { title: "云端与本地迁移", href: "/services/mlm-software-migration" },
          { title: "企业级实施", href: "/services/enterprise-mlm" },
          { title: "白标 MLM 平台", href: "/services/white-label-mlm" }
        ]
      },
      {
        title: "我们服务的行业",
        links: [
          { title: "健康与保健 MLM", href: "/industries/health-and-wellness" },
          { title: "金融科技与加密", href: "/industries/fintech-crypto" },
          { title: "美容与化妆品", href: "/industries/beauty-cosmetics" },
          { title: "营养保健 MLM", href: "/industries/nutraceutical" },
          { title: "教育与在线学习", href: "/industries/education-elearning" },
          { title: "直销初创企业", href: "/industries/startups" }
        ]
      },
      {
        title: "战略资源",
        links: [
          { title: "MLM 合规手册", href: "/resources/mlm-compliance-guide" },
          { title: "佣金自动化手册", href: "/resources/commission-automation" },
          { title: "全球支付指南", href: "/resources/global-payout-guide" },
          { title: "技术栈综述", href: "/resources/technology-stack" },
          { title: "企业成功案例", href: "/resources/case-studies" },
          { title: "MLM 知识库", href: "/resources/knowledge-base" }
        ]
      }
    ],
    bottomTagline: "企业级的数据安全、隐私与全球合规保障。"
  }
};

function getFooterStaticContent(locale: SupportedLocale): FooterStaticCopy {
  return FOOTER_STATIC_COPY[locale] ?? FOOTER_STATIC_COPY.en;
}

const year = new Date().getFullYear();

type SiteFooterProps = {
  locale: SupportedLocale;
  siteName: string;
  siteTagline?: string | null;
  columns: FooterColumn[];
  cta?: FooterCta | null;
  contacts: FooterContact[];
  bottomLinks: FooterBottomLink[];
};

export function SiteFooter({ locale, siteName, siteTagline, columns, cta, contacts, bottomLinks }: SiteFooterProps) {
  const copy = getFooterStaticContent(locale);
  const fallbackCopy = FOOTER_STATIC_COPY.en;

  const footerBackground = "/images/home/bg-wave.svg";
  const gradientBackdrop =
    "radial-gradient(circle at 15% -20%, rgba(148, 163, 184, 0.18), transparent 56%)," +
    " radial-gradient(circle at 78% -18%, rgba(59, 130, 246, 0.14), transparent 58%)," +
    " radial-gradient(circle at 42% 120%, rgba(45, 212, 191, 0.12), transparent 68%)";
  const backgroundImage = footerBackground ? `${gradientBackdrop}, url(${footerBackground})` : gradientBackdrop;

  const differentiators = DIFFERENTIATOR_ICONS.map((icon, index) => {
    const text = copy.differentiators[index] ?? fallbackCopy.differentiators[index];
    return {
      icon,
      title: text?.title ?? fallbackCopy.differentiators[index]?.title ?? "",
      description: text?.description ?? fallbackCopy.differentiators[index]?.description ?? ""
    };
  });

  const dominanceStats = DOMINANCE_VALUES.map((value, index) => ({
    value,
    label: copy.dominanceStats[index] ?? fallbackCopy.dominanceStats[index] ?? ""
  }));

  const trustBadges = (copy.trustBadges.length ? copy.trustBadges : fallbackCopy.trustBadges).filter(Boolean);

  const expertSupport = EXPERT_SUPPORT_ICONS.map((icon, index) => {
    const text = copy.expertSupport[index] ?? fallbackCopy.expertSupport[index];
    return {
      icon,
      title: text?.title ?? fallbackCopy.expertSupport[index]?.title ?? "",
      detail: text?.description ?? fallbackCopy.expertSupport[index]?.description ?? ""
    };
  });

  const seoColumns = copy.seoColumns.length ? copy.seoColumns : fallbackCopy.seoColumns;
  const badgeLabel = copy.badgeLabel || fallbackCopy.badgeLabel;
  const description = copy.description || fallbackCopy.description;
  const heroHeading = copy.heroHeading || fallbackCopy.heroHeading;
  const heroBody = copy.heroBody || fallbackCopy.heroBody;
  const companySectionLabel = copy.companySectionLabel || fallbackCopy.companySectionLabel;
  const librarySectionLabel = copy.librarySectionLabel || fallbackCopy.librarySectionLabel;
  const bottomTagline = copy.bottomTagline || fallbackCopy.bottomTagline;

  return (
    <footer
      className="relative overflow-hidden border-t border-border/60 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900"
      style={{
        backgroundImage,
        backgroundRepeat: footerBackground ? "no-repeat, no-repeat" : "no-repeat",
        backgroundSize: footerBackground ? "contain" : "contain",
        backgroundPosition: footerBackground ? "left top, left" : "left top",
        backgroundBlendMode: "normal"
      }}
    >
      {/* Overlay to reduce background image opacity */}
      {footerBackground && (
        <div
          className="pointer-events-none absolute inset-0 bg-background/80"
          aria-hidden="true"
        />
      )}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-background via-background/80 to-transparent"
        aria-hidden="true"
      />
      {cta ? <FooterCtaBlock cta={cta} locale={locale} /> : null}
      <div className="relative z-10">
        <div className="container space-y-16 py-16">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)]">
            <div className="space-y-6">
              <div className="space-y-4">
                <SectionTitle
                  badge={badgeLabel}
                  heading={siteName}
                  description={description}
                  centered={false}
                />
                {siteTagline ? (
                  <p className="text-base font-semibold text-muted-foreground md:text-md">{siteTagline}</p>
                ) : null}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {differentiators.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex h-full gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:bg-muted/30 hover:shadow-xl"
                    >
                      <span className="flex h-11 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon size={22} weight="duotone" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {dominanceStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/50 bg-card p-5 text-sm shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                  >
                    <p className="text-xl font-semibold text-foreground mb-2">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>
            <div className="space-y-6 rounded-3xl border border-border/50 bg-background/85 p-6 shadow-xl shadow-primary/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground">{heroHeading}</h3>
              <p className="text-sm text-muted-foreground">{heroBody}</p>
              {contacts.length > 0 ? (
                <div className="space-y-4">
                  {contacts.map((contact, index) => (
                    <div
                      key={contact.heading ? `contact-${contact.heading}` : `contact-${index}`}
                      className="rounded-2xl border border-border/50 bg-muted/20 p-4"
                    >
                      {contact.heading ? <p className="text-sm font-semibold text-foreground">{contact.heading}</p> : null}
                      {contact.body ? (
                        <p
                          className="mt-2 text-sm text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: contact.body.replace(/\n/g, "<br />") }}
                        />
                      ) : null}
                      {contact.links?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {contact.links.map((link) => (
                            <FooterLink
                              key={`${link.title}-${link.href ?? ""}`}
                              link={link}
                              locale={locale}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:text-primary/80"
                            >
                              {link.title}
                            </FooterLink>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase  text-muted-foreground">Connect us through Social Media</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="Facebook"
                  >
                    <FacebookLogo size={20} weight="duotone" />
                  </a>
                  <a
                    href="https://www.instagram.com/cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="Instagram"
                  >
                    <InstagramLogo size={20} weight="duotone" />
                  </a>
                  <a
                    href="https://twitter.com/cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="Twitter"
                  >
                    <TwitterLogo size={20} weight="duotone" />
                  </a>
                  <a
                    href="https://www.youtube.com/@cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="YouTube"
                  >
                    <YoutubeLogo size={20} weight="duotone" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={20} weight="duotone" />
                  </a>
                  <a
                    href="https://t.me/cloudmlmsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-muted-foreground transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    aria-label="Telegram"
                  >
                    <TelegramLogo size={20} weight="duotone" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-14">
            {columns.length ? (
              <section className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">{companySectionLabel}</p>
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                  {columns.map((column) => (
                    <div key={column.title} className="space-y-3 text-sm">
                      <h3 className="text-base font-semibold text-foreground/90">{column.title}</h3>
                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={`${column.title}-${link.title}-${link.href ?? ""}`}>
                            <FooterLink link={link} locale={locale} className="text-muted-foreground transition hover:text-foreground">
                              {link.title}
                            </FooterLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="space-y-3 text-sm">
                    <h3 className="text-base font-semibold text-foreground/90">{AVAILABLE_COUNTRIES_TITLE}</h3>
                    <ul className="space-y-2">
                      {AVAILABLE_COUNTRIES.map(({ name, slug }) => (
                        <li key={slug}>
                          <FooterLink
                            link={{ title: name, href: buildLocalizedPath(`${AVAILABLE_COUNTRIES_BASE_PATH}/${slug}`, locale) }}
                            locale={locale}
                            className="text-muted-foreground transition hover:text-foreground"
                          >
                            {name}
                          </FooterLink>
                        </li>
                      ))}
                      <li>
                        <FooterLink
                          link={{ title: VIEW_ALL_COUNTRIES_LABEL, href: buildLocalizedPath(AVAILABLE_COUNTRIES_BASE_PATH, locale) }}
                          locale={locale}
                          className="font-medium text-primary transition hover:text-primary/80"
                        >
                          {VIEW_ALL_COUNTRIES_LABEL}
                        </FooterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            ) : null}
            <section className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">{librarySectionLabel}</p>
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {seoColumns.map((column) => (
                  <div key={column.title} className="space-y-3 text-sm">
                    <h3 className="text-base font-semibold text-foreground/90">{column.title}</h3>
                    <ul className="space-y-2">
                      {column.links.map((link) => (
                        <li key={`${column.title}-${link.title}-${link.href ?? ""}`}>
                          <FooterLink link={link} locale={locale} className="text-muted-foreground transition hover:text-foreground">
                            {link.title}
                          </FooterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-border/60 bg-muted/10 py-6">
        <div className="container flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-xs md:flex-row md:items-center md:gap-4">
            <p>© {year} {siteName}. All rights reserved.</p>
            <p className="text-muted-foreground/80">{bottomTagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {bottomLinks.map((link) => (
              <FooterLink key={`${link.title}-${link.href ?? ""}`} link={link} locale={locale} className="font-medium">
                {link.title}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCtaBlock({ cta, locale }: { cta: FooterCta; locale: SupportedLocale }) {
  const primaryAction = cta.actions[0];
  const secondaryAction = cta.actions[1];
  const background = toAbsoluteUrl("/images/footer-cta-pattern.svg");

  return (
    <div className="border-b border-border/60 bg-primary/90 py-16 text-primary-foreground">
      <div className="container">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-primary-foreground/20 bg-gradient-to-br from-primary/95 via-primary to-primary/80 p-10 text-center shadow-lg",
            background && "bg-cover bg-center"
          )}
          style={background ? { backgroundImage: `url(${background})` } : undefined}
        >
          <div className="space-y-4">
            {cta.title ? <h2 className="text-3xl font-bold tracking-tight">{cta.title}</h2> : null}
            {cta.description ? <p className="mx-auto max-w-2xl text-base font-medium text-primary-foreground/90">{cta.description}</p> : null}
          </div>
          {cta.actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {primaryAction ? <FooterButton link={primaryAction} locale={locale} variant="primary" /> : null}
              {secondaryAction ? <FooterButton link={secondaryAction} locale={locale} variant="ghost" /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FooterButton({
  link,
  locale,
  variant
}: {
  link: FooterBottomLink;
  locale: SupportedLocale;
  variant: "primary" | "ghost";
}) {
  const resolved = resolveHref(link.href ?? null, locale);
  const button = (
    <Button
      variant={variant === "primary" ? "default" : "outline"}
      size="lg"
      className={cn(
        "rounded-full px-6",
        variant === "ghost" && "border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
      )}
    >
      {link.title}
    </Button>
  );

  if (!link.href || resolved.external) {
    return (
      <a href={resolved.href} target={resolved.external ? "_blank" : undefined} rel={resolved.external ? "noopener noreferrer" : undefined}>
        {button}
      </a>
    );
  }

  return <Link href={resolved.href}>{button}</Link>;
}

function FooterLink({ link, locale, className, children }: { link: FooterBottomLink; locale: SupportedLocale; className?: string; children: ReactNode }) {
  const resolved = resolveHref(link.href ?? null, locale);
  if (!link.href || resolved.external) {
    return (
      <a
        className={className}
        href={resolved.href}
        target={resolved.external ? "_blank" : undefined}
        rel={resolved.external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={resolved.href}>
      {children}
    </Link>
  );
}
