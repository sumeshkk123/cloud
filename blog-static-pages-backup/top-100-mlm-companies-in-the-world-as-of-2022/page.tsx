
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ChartLineUp,
  GlobeHemisphereWest,
  Medal,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type TopCompany = {
  rank: number;
  company: string;
  country: string;
  founded: string;
  headquarters: string;
  compensationStructure: string;
  primaryMarket: string;
};

type RegionalHighlight = {
  title: string;
  description: string;
};

type Insight = {
  title: string;
  description: string;
  icon: IconType;
  badgeClasses: string;
};

type TocItem = {
  label: string;
  href: string;
};

type RelatedResource = {
  title: string;
  path: string;
  description: string;
};

const AUTHOR = {
  name: "Cloud MLM Market Intelligence Desk",
  role: "Research collective behind our direct-selling trend reports.",
  bio: "The team curates global MLM insights, benchmarks high-performing compensation models, and translates frontline feedback into actionable guidance for enterprise network marketing brands."
};

const LAST_UPDATED = "September 25, 2025";

const INTRO_PARAGRAPHS = [
  "Network marketing continues to be the preferred growth model for entrepreneurs who want flexible income streams, community-first selling, and predictable payouts. As the industry becomes more data-driven, founders, CXOs, and field leaders need clear signals on which brands are sustaining trust at scale.",
  "This 2025 leaderboard distills publicly available disclosures, direct selling association reports, and our analyst notes to map 100 enduring MLM companies across continents. Use it to benchmark product categories, compensation structures, and market velocity before you fine-tune your own go-to-market playbook.",
  "Cloud MLM Software partners with high-performing organizations across these rankings to modernize commissions, unify global teams, and orchestrate compliant expansion. The insights below reveal where the best are headed—so you can outpace them with purpose-built software."
];

const GLOBAL_OVERVIEW_PARAGRAPHS = [
  "Network marketing is one of the accepted modern business programmes for people seeking part-time or flexible business. Also known as multi-level marketing or referral marketing, it relies on passionate distributors who translate product stories into measurable growth. Cloud MLM Software remains one of the most widely adopted technology stacks among these brands—powering genealogy, payouts, and AI-assisted enablement.",
  "The top 100 MLM companies represent the most successful and innovative players in the industry today. Many began as modest ventures and evolved into worldwide enterprises by combining quality products, credible leadership, and resilient compensation designs. This guide helps you understand that landscape, explore emerging product categories, and decode what makes these companies trusted by distributors and customers alike."
];

const INSIGHTS: Insight[] = [
  {
    title: "Global footprint",
    description:
      "100 MLM champions span 21 countries, with wellness, beauty, and lifestyle brands leading the charge across the Americas, Europe, and APAC.",
    icon: GlobeHemisphereWest,
    badgeClasses: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
  },
  {
    title: "United States powerhouse",
    description:
      "49 of the 100 brands are headquartered in the United States, reflecting the country’s mature distributor infrastructure and regulatory clarity.",
    icon: ChartLineUp,
    badgeClasses: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
  },
  {
    title: "Heritage meets innovation",
    description:
      "Founding years range from 1675 to 2017, proving legacy players and digital-native entrants can coexist—when compensation transparency stays sharp.",
    icon: Medal,
    badgeClasses: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200"
  },
  {
    title: "People-first economics",
    description:
      "Modern plans blend multi-level earnings with specialist bonuses, prioritizing customer retention, compliance, and equitable downline growth.",
    icon: UsersThree,
    badgeClasses: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-200"
  }
];

const TOC_ITEMS: TocItem[] = [
  { label: "Global Top 100 ranking", href: "#global-ranking" },
  { label: "Top 10 — United States", href: "#usa-leaders" },
  { label: "Top 10 — Malaysia", href: "#malaysia-leaders" },
  { label: "Top 10 — Spain", href: "#spain-leaders" },
  { label: "Frequently asked questions", href: "#faq" }
];

const FAQS: RegionalHighlight[] = [
  {
    title: "Is MLM business profitable?",
    description:
      "MLM can be profitable when leaders pair differentiated products with disciplined onboarding, coaching, and compliance. Success always depends on the distributor’s skill, time investment, and the company’s support infrastructure."
  },
  {
    title: "Who earns the highest in the MLM industry?",
    description:
      "Top earners usually run established organizations with strong recruiting systems, predictable customer retention, and layered bonuses. Their income combines personal sales, team sales, incentives, and performance pools."
  },
  {
    title: "What criteria are used to rank the top 100 MLM companies?",
    description:
      "We reference product leadership, compensation transparency, geographic reach, revenue signals, distributor sentiment, and year-over-year growth when compiling this list."
  },
  {
    title: "Which is the number-one MLM company today?",
    description:
      "Amway continues to lead globally thanks to its diverse catalog, omnichannel customer experience, and resilient compensation design that rewards both retail and team performance."
  },
  {
    title: "How can Cloud MLM Software benefit my MLM business?",
    description:
      "Our platform unifies genealogy management, payout automation, analytics, AI copilots, and global compliance in one stack—so you execute like the leaders above while staying nimble."
  }
];

const RELATED_RESOURCES: RelatedResource[] = [
  {
    title: "The Ultimate Guide to MLM Affiliate Software",
    path: "/blog/mlm-affiliate-software",
    description:
      "Blend affiliate acceleration with network marketing rigor to drive omnichannel acquisition without breaking compensation logic."
  },
  {
    title: "AI and Shopify-MLM: The Future of Personalized Commission Planning",
    path: "/blog/ai-shopify-mlm",
    description:
      "See how AI orchestration and commerce integrations reshape commission triggers, upsell flows, and customer lifetime value."
  },
  {
    title: "MLM Back Office Software: Powering Growth in Your Network Marketing Business",
    path: "/blog/mlm-back-office-software",
    description:
      "Evaluate the mission-critical modules that keep finance, support, and field teams coordinated across regions."
  },
  {
    title: "The 10 Best Direct Sales Software Tools to Try in 2025",
    path: "/blog/best-direct-sales-softwares",
    description:
      "Explore ecosystem tools that complement your MLM stack—from incentive engines to distributor enablement suites."
  },
  {
    title: "Simplifying Overlay Bonuses with Compensation Software",
    path: "/blog/overlay-bonuses-simplified",
    description:
      "Decode overlay bonus mechanics and learn how automation keeps payouts accurate, auditable, and motivating."
  }
];

const DISCLAIMER =
  "Cloud MLM Software neither promotes nor endorses any company listed here. The insights are compiled from publicly available resources and provided for informational purposes only.";

const TABLE_HEADERS = [
  "Rank",
  "Company",
  "Country",
  "Founded",
  "Headquarters",
  "Compensation structure",
  "Primary market"
];


const TOP_COMPANIES: TopCompany[] = [
  {
    rank: 1,
    company: "Amway",
    country: "United States",
    founded: "1959",
    headquarters: "Ada,Michigan,United States",
    compensationStructure: "Multi-level",
    primaryMarket: "United States"
  },
  {
    rank: 2,
    company: "Avon products Inc.",
    country: "United States",
    founded: "1886",
    headquarters: "London,united kingdom",
    compensationStructure: "Multi-level",
    primaryMarket: "United States"
  },
  {
    rank: 3,
    company: "Herbalife",
    country: "United States",
    founded: "1980",
    headquarters: "Los Angeles, California, U.S.",
    compensationStructure: "multi-level",
    primaryMarket: "United States"
  },
  {
    rank: 4,
    company: "Infinitus",
    country: "China",
    founded: "1992",
    headquarters: "Hongkong,china",
    compensationStructure: "NA",
    primaryMarket: "CHINA"
  },
  {
    rank: 5,
    company: "Vorwerk",
    country: "Germany",
    founded: "1883",
    headquarters: "Wuppertal, Germany",
    compensationStructure: "Single level",
    primaryMarket: "United States; Mexico; Europe"
  },
  {
    rank: 6,
    company: "Natura",
    country: "Brazil",
    founded: "1969",
    headquarters: "Cajamar, São Paulo/Brazil",
    compensationStructure: "Single level",
    primaryMarket: "Brazil"
  },
  {
    rank: 7,
    company: "NU SKIN",
    country: "United States",
    founded: "1984",
    headquarters: "Provo, Utah, USA",
    compensationStructure: "Multi level",
    primaryMarket: "China"
  },
  {
    rank: 8,
    company: "COWAY",
    country: "South Korea",
    founded: "1989",
    headquarters: "Seoul, South Korea",
    compensationStructure: "NA",
    primaryMarket: "Asia"
  },
  {
    rank: 9,
    company: "Tupperware",
    country: "United States",
    founded: "1946",
    headquarters: "Orlando, Florida",
    compensationStructure: "Single-level and Multi-level",
    primaryMarket: "Asia"
  },
  {
    rank: 10,
    company: "Young Living",
    country: "United States",
    founded: "1993",
    headquarters: "Lehi, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 11,
    company: "oriflame cosmetics",
    country: "Switzerland",
    founded: "1967",
    headquarters: "Switzerland",
    compensationStructure: "Multi-level",
    primaryMarket: "Europe"
  },
  {
    rank: 12,
    company: "Rodan + fields",
    country: "United States",
    founded: "2008",
    headquarters: "San Francisco, California",
    compensationStructure: "Multi-level",
    primaryMarket: "united states"
  },
  {
    rank: 13,
    company: "Jeunesse",
    country: "United States",
    founded: "2009",
    headquarters: "Lake Mary, Florida",
    compensationStructure: "Multi-level",
    primaryMarket: "Asia"
  },
  {
    rank: 14,
    company: "Ambit Energy",
    country: "United States",
    founded: "2006",
    headquarters: "Dallas, Texas",
    compensationStructure: "Multi-level",
    primaryMarket: "united states"
  },
  {
    rank: 15,
    company: "DXN MARKETING SDN BHD",
    country: "Malaysia",
    founded: "1993",
    headquarters: "Alor Setar, Malaysia",
    compensationStructure: "Multi-level",
    primaryMarket: "Malaysia, Bolivia"
  },
  {
    rank: 16,
    company: "Pola",
    country: "Japan",
    founded: "1929",
    headquarters: "Tokyo, Japan",
    compensationStructure: "single-level",
    primaryMarket: "NA"
  },
  {
    rank: 17,
    company: "O Boticário",
    country: "Brazil",
    founded: "1977",
    headquarters: "São José dos Pinhais, State of Paraná, Brazil",
    compensationStructure: "Multi-level",
    primaryMarket: "Brazil"
  },
  {
    rank: 18,
    company: "usana Health Sciences",
    country: "United States",
    founded: "1992",
    headquarters: "Salt Lake City, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "Greater China"
  },
  {
    rank: 19,
    company: "Belcorp",
    country: "Peru",
    founded: "1968",
    headquarters: "Lima, Peru",
    compensationStructure: "single level",
    primaryMarket: "Latin America"
  },
  {
    rank: 20,
    company: "Atomy",
    country: "South Korea",
    founded: "2009",
    headquarters: "Gongju, South Korea",
    compensationStructure: "Multi level",
    primaryMarket: "south korea"
  },
  {
    rank: 21,
    company: "Telecom plus",
    country: "United Kingdom",
    founded: "1997",
    headquarters: "London, England",
    compensationStructure: "Multi level",
    primaryMarket: "United kingdom"
  },
  {
    rank: 22,
    company: "Yanbal international",
    country: "Peru",
    founded: "1967",
    headquarters: "Lima, Peru",
    compensationStructure: "Multi level",
    primaryMarket: "Peru"
  },
  {
    rank: 23,
    company: "market america",
    country: "United States",
    founded: "1992",
    headquarters: "Greensboro, North Carolina",
    compensationStructure: "single level",
    primaryMarket: "united states"
  },
  {
    rank: 24,
    company: "pm-international",
    country: "Luxembourg",
    founded: "1993",
    headquarters: "Schengen, Luxembourg",
    compensationStructure: "multi level",
    primaryMarket: "Germany"
  },
  {
    rank: 25,
    company: "stream",
    country: "United States",
    founded: "2004",
    headquarters: "Dallas,Texas",
    compensationStructure: "multi level",
    primaryMarket: "United states"
  },
  {
    rank: 26,
    company: "Team National",
    country: "United States",
    founded: "1997",
    headquarters: "Davie, Florida",
    compensationStructure: "multi level",
    primaryMarket: "united states"
  },
  {
    rank: 27,
    company: "Amore pacific",
    country: "South Korea",
    founded: "1945",
    headquarters: "Seoul, South Korea",
    compensationStructure: "NA",
    primaryMarket: "NA"
  },
  {
    rank: 28,
    company: "Arbonne international",
    country: "United States",
    founded: "1980",
    headquarters: "Irvine, California",
    compensationStructure: "Multilevel",
    primaryMarket: "United states"
  },
  {
    rank: 29,
    company: "Hinode",
    country: "Brazil",
    founded: "1988",
    headquarters: "Sao Paolo, Brazil",
    compensationStructure: "Multilevel",
    primaryMarket: "Brazil"
  },
  {
    rank: 30,
    company: "plexus",
    country: "United States",
    founded: "2008",
    headquarters: "Scottsdale, Arizona",
    compensationStructure: "Multilevel",
    primaryMarket: "United states"
  },
  {
    rank: 31,
    company: "optavia/medifast.Inc",
    country: "United States",
    founded: "1981",
    headquarters: "Baltimore, Maryland",
    compensationStructure: "Multilevel",
    primaryMarket: "United states"
  },
  {
    rank: 32,
    company: "Miki corp",
    country: "Japan",
    founded: "1966",
    headquarters: "Osaka, Japan",
    compensationStructure: "NA",
    primaryMarket: "Japan"
  },
  {
    rank: 33,
    company: "Faberlic",
    country: "Russia",
    founded: "1997",
    headquarters: "Moscow, Russia",
    compensationStructure: "Multillevel",
    primaryMarket: "Russia"
  },
  {
    rank: 34,
    company: "scentsy",
    country: "United States",
    founded: "2004",
    headquarters: "Meridian, Idaho",
    compensationStructure: "Multillevel",
    primaryMarket: "United states"
  },
  {
    rank: 35,
    company: "Monatglobal",
    country: "United States",
    founded: "2014",
    headquarters: "Doral, Florida",
    compensationStructure: "Multillevel",
    primaryMarket: "United states"
  },
  {
    rank: 36,
    company: "Younique",
    country: "United States",
    founded: "2012",
    headquarters: "Lehi, Utah",
    compensationStructure: "Multillevel",
    primaryMarket: "United states"
  },
  {
    rank: 37,
    company: "For Days",
    country: "Japan",
    founded: "1997",
    headquarters: "Tokyo, Japan",
    compensationStructure: "Multillevel",
    primaryMarket: "Japan"
  },
  {
    rank: 38,
    company: "World Ventures",
    country: "United States",
    founded: "2005",
    headquarters: "Plano, Texas",
    compensationStructure: "Multillevel",
    primaryMarket: "United states"
  },
  {
    rank: 39,
    company: "Cosway corp.Ltd",
    country: "Malaysia",
    founded: "1979",
    headquarters: "Kuala Lumpur, Malaysia",
    compensationStructure: "NA",
    primaryMarket: "Malaysia"
  },
  {
    rank: 40,
    company: "Nature’s sunshine",
    country: "United States",
    founded: "1972",
    headquarters: "Lehi, Utah",
    compensationStructure: "Multi-Level",
    primaryMarket: "United states"
  },
  {
    rank: 41,
    company: "Pruvit",
    country: "United States",
    founded: "2016",
    headquarters: "Louisville, Kentucky",
    compensationStructure: "Multi-Level",
    primaryMarket: "United states"
  },
  {
    rank: 42,
    company: "Beautycounter",
    country: "United States",
    founded: "2013",
    headquarters: "Santa Monica, California",
    compensationStructure: "Multi-Level",
    primaryMarket: "United states"
  },
  {
    rank: 43,
    company: "4Life Research",
    country: "United States",
    founded: "1998",
    headquarters: "Sandy, Utah",
    compensationStructure: "Multi-Level",
    primaryMarket: "United states"
  },
  {
    rank: 44,
    company: "LG Household & Healthcare",
    country: "South Korea",
    founded: "1947",
    headquarters: "Seoul, South Korea",
    compensationStructure: "NA",
    primaryMarket: "Asia"
  },
  {
    rank: 45,
    company: "Vivint",
    country: "United States",
    founded: "2010",
    headquarters: "Provo, Utah",
    compensationStructure: "Single level",
    primaryMarket: "united states"
  },
  {
    rank: 46,
    company: "Noevir co.ltd",
    country: "Japan",
    founded: "1964",
    headquarters: "Tokyo, Japan",
    compensationStructure: "Single level",
    primaryMarket: "Japan"
  },
  {
    rank: 47,
    company: "Hy cite enterprises,LLC",
    country: "United States",
    founded: "1959",
    headquarters: "Madison, Wisconsin",
    compensationStructure: "Multi- level",
    primaryMarket: "United states"
  },
  {
    rank: 48,
    company: "pro-partner",
    country: "Taiwan",
    founded: "1993",
    headquarters: "Taipei, Taiwan",
    compensationStructure: "Multi- level",
    primaryMarket: "Asia"
  },
  {
    rank: 49,
    company: "pure Romance",
    country: "United States",
    founded: "1993",
    headquarters: "Cincinnati, Ohio",
    compensationStructure: "Multi- level",
    primaryMarket: "United states"
  },
  {
    rank: 50,
    company: "Naturally Plus",
    country: "Japan",
    founded: "1999",
    headquarters: "Tokyo, Japan",
    compensationStructure: "Multi- level",
    primaryMarket: "Japan, Taiwan"
  },
  {
    rank: 51,
    company: "New Image Group",
    country: "New Zealand",
    founded: "1984",
    headquarters: "Auckland, New Zealand",
    compensationStructure: "Multi- level",
    primaryMarket: "Taiwan"
  },
  {
    rank: 52,
    company: "Prowin International",
    country: "Germany",
    founded: "1995",
    headquarters: "Illingen, Germany",
    compensationStructure: "single level",
    primaryMarket: "Germany"
  },
  {
    rank: 53,
    company: "Morinda",
    country: "United States",
    founded: "1996",
    headquarters: "American Fork, Utah",
    compensationStructure: "Multilevel",
    primaryMarket: "United states"
  },
  {
    rank: 54,
    company: "Menard",
    country: "Japan",
    founded: "1959",
    headquarters: "Nagoya, Japan",
    compensationStructure: "Multilevel",
    primaryMarket: "Japan"
  },
  {
    rank: 55,
    company: "Cutco/Vector marketing",
    country: "United States",
    founded: "1949",
    headquarters: "Olean, New York",
    compensationStructure: "single-level",
    primaryMarket: "United states"
  },
  {
    rank: 56,
    company: "Family Heritage life",
    country: "United States",
    founded: "1989",
    headquarters: "Cleveland, Ohio",
    compensationStructure: "single-level",
    primaryMarket: "United states"
  },
  {
    rank: 57,
    company: "Arix",
    country: "United States",
    founded: "2011",
    headquarters: "Phoenix, Arizona",
    compensationStructure: "Multi-level",
    primaryMarket: "North America"
  },
  {
    rank: 58,
    company: "South western Advantage",
    country: "United States",
    founded: "1855",
    headquarters: "Nashville, Tennessee",
    compensationStructure: "Single level",
    primaryMarket: "United states"
  },
  {
    rank: 59,
    company: "Lifevantage",
    country: "United States",
    founded: "2003",
    headquarters: "Sandy, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 60,
    company: "Vida Divina",
    country: "United States",
    founded: "2016",
    headquarters: "Fontana, California",
    compensationStructure: "Multi-level",
    primaryMarket: "united states"
  },
  {
    rank: 61,
    company: "KK Assuran",
    country: "Japan",
    founded: "1994",
    headquarters: "Fukuoka, Japan",
    compensationStructure: "Multi-level",
    primaryMarket: "japan"
  },
  {
    rank: 62,
    company: "Vestige Marketing",
    country: "India",
    founded: "2004",
    headquarters: "New Delhi, India",
    compensationStructure: "Multi-level",
    primaryMarket: "India"
  },
  {
    rank: 63,
    company: "NHT Global",
    country: "United States",
    founded: "2001",
    headquarters: "Hong Kong",
    compensationStructure: "Multi-level",
    primaryMarket: "Hong Kong"
  },
  {
    rank: 64,
    company: "Hillary’s Blinds",
    country: "United Kingdom",
    founded: "1971",
    headquarters: "Nottinghamshire, England",
    compensationStructure: "Single level",
    primaryMarket: "United Kingdom"
  },
  {
    rank: 65,
    company: "Giffarine skyine unityco.",
    country: "Thailand",
    founded: "1996",
    headquarters: "Bangkok, Thailand",
    compensationStructure: "Multi- level",
    primaryMarket: "Thailand"
  },
  {
    rank: 66,
    company: "Bearcere’Ju co.Ltd",
    country: "Japan",
    founded: "1992",
    headquarters: "Tokyo, Japan",
    compensationStructure: "NA",
    primaryMarket: "Japan"
  },
  {
    rank: 67,
    company: "Mannatech",
    country: "United States",
    founded: "1993",
    headquarters: "Flower Mound, Texas",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 68,
    company: "Youngevity",
    country: "United States",
    founded: "1997",
    headquarters: "Steve Wallach",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 69,
    company: "Princess House",
    country: "United States",
    founded: "1963",
    headquarters: "Taunton, Massachusetts",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 70,
    company: "Charle corporation",
    country: "Japan",
    founded: "1975",
    headquarters: "Kobe, Japan",
    compensationStructure: "Multi-level",
    primaryMarket: "Japan"
  },
  {
    rank: 71,
    company: "Diana",
    country: "Japan",
    founded: "1986",
    headquarters: "Tokyo, japan",
    compensationStructure: "single level",
    primaryMarket: "Japan"
  },
  {
    rank: 72,
    company: "Naris Cosmetics",
    country: "Japan",
    founded: "1931",
    headquarters: "Osaka, Japan",
    compensationStructure: "Multi level",
    primaryMarket: "NA"
  },
  {
    rank: 73,
    company: "maruko",
    country: "Japan",
    founded: "1978",
    headquarters: "Japan",
    compensationStructure: "NA",
    primaryMarket: "Japan"
  },
  {
    rank: 74,
    company: "Marketing personal",
    country: "Colombia",
    founded: "1999",
    headquarters: "Medellin, Colombia",
    compensationStructure: "Single level",
    primaryMarket: "Colombia"
  },
  {
    rank: 75,
    company: "Immunotec Research Ltd",
    country: "Canada",
    founded: "1996",
    headquarters: "Quebec, Canada",
    compensationStructure: "Multi-level",
    primaryMarket: "Mexico"
  },
  {
    rank: 76,
    company: "ASEA",
    country: "United States",
    founded: "2010",
    headquarters: "Pleasant Grove, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 77,
    company: "Color street",
    country: "United States",
    founded: "2017",
    headquarters: "Clifton, New Jersey",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 78,
    company: "World Global Network",
    country: "United States",
    founded: "2011",
    headquarters: "Miami, Florida",
    compensationStructure: "Multi-level",
    primaryMarket: "United States; Asia; Europe"
  },
  {
    rank: 79,
    company: "Usborn Books & More",
    country: "United States",
    founded: "1989",
    headquarters: "Tulsa, Oklahoma",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 80,
    company: "Truvision Health",
    country: "United States",
    founded: "2014",
    headquarters: "Draper, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 81,
    company: "C’BON Cosmetics",
    country: "Japan",
    founded: "1996",
    headquarters: "Tokyo, Japan",
    compensationStructure: "NA",
    primaryMarket: "Japan"
  },
  {
    rank: 82,
    company: "Xyngular",
    country: "United States",
    founded: "2009",
    headquarters: "Lehi, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 83,
    company: "Zhulian Marketing",
    country: "Malaysia",
    founded: "1989",
    headquarters: "Penang, Malaysia",
    compensationStructure: "Multi-level",
    primaryMarket: "Asia"
  },
  {
    rank: 84,
    company: "Nefful",
    country: "Singapore",
    founded: "2014",
    headquarters: "Singapore",
    compensationStructure: "Multi-level",
    primaryMarket: "Taiwan"
  },
  {
    rank: 85,
    company: "Mydailychoice/Hempworx",
    country: "United States",
    founded: "2014",
    headquarters: "Las Vegas, Nevada",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 86,
    company: "Perfectly posh",
    country: "United States",
    founded: "2011",
    headquarters: "Salt Lake City, Utah",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 87,
    company: "Energetix",
    country: "Germany",
    founded: "2002",
    headquarters: "Bingen am Rhein, Germany",
    compensationStructure: "Single-level",
    primaryMarket: "Germany"
  },
  {
    rank: 88,
    company: "Zurvita",
    country: "United States",
    founded: "2008",
    headquarters: "Houston, Texas",
    compensationStructure: "Multi-level",
    primaryMarket: "United states"
  },
  {
    rank: 89,
    company: "Arsoa Honsha",
    country: "Japan",
    founded: "1972",
    headquarters: "Yamanashi, Japan",
    compensationStructure: "Multi-level",
    primaryMarket: "Japan"
  },
  {
    rank: 90,
    company: "Best world International Ltd",
    country: "Singapore",
    founded: "1990",
    headquarters: "Singapore",
    compensationStructure: "Multi-level",
    primaryMarket: "Asia"
  },
  {
    rank: 91,
    company: "Hai-O",
    country: "Malaysia",
    founded: "1992",
    headquarters: "Selangor, Malaysia",
    compensationStructure: "NA",
    primaryMarket: "Malaysia"
  },
  {
    rank: 92,
    company: "Koyo-Sha",
    country: "Japan",
    founded: "1975",
    headquarters: "Gife,japan",
    compensationStructure: "Multi-level",
    primaryMarket: "Japan"
  },
  {
    rank: 93,
    company: "Shinsei Home service co.Ltd",
    country: "Japan",
    founded: "2004",
    headquarters: "Kobe City, Japan",
    compensationStructure: "Multi-level",
    primaryMarket: "NA"
  },
  {
    rank: 94,
    company: "Captain Tortue Group",
    country: "France",
    founded: "1993",
    headquarters: "Aix-en-Provence, France",
    compensationStructure: "Multi-level",
    primaryMarket: "France"
  },
  {
    rank: 95,
    company: "Chandeal co.Ltd",
    country: "Japan",
    founded: "1985",
    headquarters: "Tsuneo Nakashima",
    compensationStructure: "Multi-level",
    primaryMarket: "Japan"
  },
  {
    rank: 96,
    company: "Grant E One’s",
    country: "Japan",
    founded: "2005",
    headquarters: "Fukul, Japan",
    compensationStructure: "NA",
    primaryMarket: "Japan"
  },
  {
    rank: 97,
    company: "Nikken",
    country: "United States",
    founded: "1989",
    headquarters: "Irvine, California",
    compensationStructure: "Multilevel",
    primaryMarket: "United States; Mexico"
  },
  {
    rank: 98,
    company: "Zinzino",
    country: "Sweden",
    founded: "2005",
    headquarters: "Vastra Gotaland, Sweden",
    compensationStructure: "Multilevel",
    primaryMarket: "Sweden"
  },
  {
    rank: 99,
    company: "Pieroth Wein",
    country: "Germany",
    founded: "1675",
    headquarters: "Burg Layen, Germany",
    compensationStructure: "Single level",
    primaryMarket: "Germany"
  },
  {
    rank: 100,
    company: "Unicity",
    country: "United States",
    founded: "2001",
    headquarters: "Provo, Utah, United States",
    compensationStructure: "Multilevel",
    primaryMarket: "United States"
  }
];

const USA_LEADERS: RegionalHighlight[] = [
  {
    title: "1. Amway",
    description: "Amway is a global leader in health, beauty, and home care products. With a rich history of over 60 years, it offers one of the most robust compensation plans in the industry, providing multiple earning opportunities through product sales and recruitment."
  },
  {
    title: "2. Herbalife",
    description: "Herbalife specializes in nutrition, weight management, and personal care products. Known for its strong community support and training programmes, Herbalife provides distributors with a comprehensive platform to promote health-focused products while building a business. For those seeking insights, a detailed Herbalife MLM Company Review highlights how the brand combines wellness solutions with business opportunities for aspiring entrepreneurs."
  },
  {
    title: "3. Mary Kay",
    description: "Mary Kay multi-level marketing is a well-established beauty and skincare company. It offers a rewarding business model for independent consultants, emphasizing personal development, mentorship, and lucrative earning potential through product sales and team building."
  },
  {
    title: "4. Tupperware",
    description: "Tupperware is known for its innovative kitchen and home storage products. The company focuses on empowering its members through direct sales events and online channels, providing fair earning opportunities and fostering a community-driven environment. A detailed Tupperware MLM Review can give deeper insights into how the brand blends quality products with a rewarding business model for its members."
  },
  {
    title: "5. Avon",
    description: "Avon has a wide range of beauty, skincare, and personal care products. Avon has more female representatives than any other MLM company. It focuses on empowering women by giving them flexible job opportunities."
  },
  {
    title: "6. Young Living",
    description: "Young Living is a leading essential oils company that promotes natural wellness through its extensive product line. Distributors benefit from a supportive network, educational resources, and multiple income streams, including sales commissions and bonuses."
  },
  {
    title: "7. doTERRA",
    description: "doTERRA specializes in essential oils and wellness products, emphasizing purity and sustainability. Its business model supports wellness advocates with generous compensation, training, and a focus on personal development, making it a favorite among health enthusiasts."
  },
  {
    title: "8. Nu Skin",
    description: "Nu Skin provides a diverse range of anti-aging and personal care products. Known for its science-based approach, Nu Skin offers a rewarding business opportunity with a dynamic compensation plan that includes retail profits, bonuses, and incentives."
  },
  {
    title: "9. Rodan + Fields",
    description: "Rodan + Fields is a premium skincare company known for its dermatologist-developed products. It offers a highly supportive business environment for consultants, focusing on social commerce and personalized selling strategies to maximize earning potential."
  },
  {
    title: "10. Primerica",
    description: "Primerica offers financial services, including life insurance, investment products, and debt solutions. It operates on a network marketing model that empowers representatives to build their financial services businesses, providing comprehensive training and income opportunities. For those wondering is Primerica a network marketing company , the answer lies in its unique structure that combines direct sales with entrepreneurial growth opportunities for its representatives."
  }
];

const MALAYSIA_LEADERS: RegionalHighlight[] = [
  {
    title: "1. Amway Malaysia",
    description: "Amway Malaysia is a prominent player offering a wide range of health, beauty, and home care products. Known for its strong network and training programs, it provides rewarding income opportunities for distributors through product sales and recruitment incentives."
  },
  {
    title: "2. Herbalife Malaysia",
    description: "A major group of people in Malaysia heavily depend on herbalife nutrition and weight management products. It is well-known for its supportive community, wellness coaching, and business opportunity that allows distributors to earn through personal sales and building a team of independent distributors."
  },
  {
    title: "3. Cuckoo International",
    description: "Cuckoo specializes in home appliances, including water purifiers and air purifiers. It combines direct sales with MLM strategies, offering lucrative commissions, incentives, and promotions, making it a popular choice among Malaysian distributors."
  },
  {
    title: "4. DXN Malaysia",
    description: "DXN is a health and wellness MLM company specializing in Ganoderma-based products. They have a straightforward compensation plan and strong focus on health, and offer distributors various income streams and support for growing their businesses."
  },
  {
    title: "5. Elken Malaysia",
    description: "Elken is one of Malaysia’s prominent MLM companies, focusing on wellness, beauty, and personal care products. It offers a comprehensive business model with training, incentives, and rewards, emphasizing personal development and community building."
  },
  {
    title: "6. Shaklee Malaysia",
    description: "Shaklee is a trusted brand offering natural nutrition, beauty, and household products. It provides a healthy lifestyle, making it appealing to health-conscious entrepreneurs."
  },
  {
    title: "7. Atomy Malaysia",
    description: "Atomy is also popular for its beauty and household products. They are of high quality and available at affordable prices. Atomy has a good reputation and their products align with the needs of consumers."
  },
  {
    title: "8. USANA Malaysia",
    description: "USANA is a leading provider of nutrition and wellness products. It provides beauty consultants with personalized business support, training, and incentives, encouraging entrepreneurship with a focus on empowerment and financial independence."
  },
  {
    title: "9. Mary Kay Malaysia",
    description: "As we all know, Mary Kay is a popular MLM company that sells beauty and skincare products. Its Malaysian enterprise is quite well-known too. They encourage entrepreneurship with a focus on empowerment and financial independence."
  },
  {
    title: "10. Avon Malaysia",
    description: "Like Amway, Avon is also a renowned MLM company that has a global presence. In Malaysia too, Avon has a long history of success. It offers beauty, skincare, and fashion products to clients."
  }
];

const SPAIN_LEADERS: RegionalHighlight[] = [
  {
    title: "1. Amway Spain",
    description: "Amway has expanded its MLM activities in Spain too. The kind of trust and security that Amway offers to their customers is what makes them unique and exceptional. In Spain, Amway offers high quality beauty and wellness products."
  },
  {
    title: "2. Herbalife Spain",
    description: "Herbalife has carved its niche in Spain with top-tier nutrition and wellness solutions. Known for its engaging community and personalized support, it enables distributors to thrive through structured training, wellness coaching, and a rewarding compensation model. Many of the top Herbalife earners attribute their success to this holistic approach, combining quality products with mentorship and consistent support."
  },
  {
    title: "3. Oriflame Spain",
    description: "Oriflame blends natural beauty products with a modern MLM approach. Its focus on eco-friendly, Scandinavian-inspired products appeals to Spanish distributors, who benefit from straightforward selling methods, attractive incentives, and a sense of belonging in a vibrant beauty network."
  },
  {
    title: "4. Avon Spain",
    description: "Avan is committed to offering products that satisfy the needs of consumers. The company continues to capture the Spanish market with an extensive array of beauty and fashion products."
  },
  {
    title: "5. Vorwerk ( Thermomix )",
    description: "Vorwerk’s thermomix has developed into a lifestyle brand. The company uses  a unique direct selling model, where Spanish distributors showcase the product’s versatility through demonstrations, driving sales through personal connections and high customer engagement."
  },
  {
    title: "6. Forever Living Spain",
    description: "Forever Living’s aloe vera-based products are popular in the Spanish market for their natural health benefits. Forever  Living is committed to wellness, attractive commissions, and a community that promotes a healthy and balanced lifestyle."
  },
  {
    title: "7. Nu Skin Spain",
    description: "Nu Skin’s anti-aging and skincare innovations appeal to Spain’s beauty-conscious market. They are well recognized for their products that are affordable and safe to use."
  },
  {
    title: "8. Tupperware Spain",
    description: "Tupperware’s iconic storage solutions are deeply ingrained in Spanish households. The in-home demonstrations and modern online selling techniques, turning everyday kitchen products into profitable business opportunities."
  },
  {
    title: "9. Yves Rocher Spain",
    description: "Yves Rocher captivates the Spanish market with botanical beauty products and a commitment to sustainability."
  },
  {
    title: "10. Mary Kay Spain",
    description: "Mary Kay combines luxury skincare and cosmetics with a powerful business model in Spain. With a solid compensation package and top-grade products, Mary Kay continues to thrive in the MLM landscape."
  }
];


export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Top 100 MLM Companies in 2025: Global Leaders & Insights";
  const description =
    "Explore the 2025 ranking of 100 MLM companies, regional top 10 lists, and strategic insights to shape your next growth move.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/top-100-mlm-companies-in-the-world-as-of-2022",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type PageProps = {
  params: { lang: SupportedLocale };
};

export default function TopMlmCompanies2025Page({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const topFiveCompanies = TOP_COMPANIES.slice(0, 5);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_65%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_68%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
              2025 industry radar
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Top 100 MLM companies in 2025: global leaders & insights
            </h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to an expert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-300 bg-white/70 px-6 py-2 text-slate-800 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-400"
              >
                <Link href={demoHref}>
                  Schedule a product tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-8 text-sm shadow-2xl backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Report owners
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.role}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div>
                  <p className="text-slate-400 dark:text-slate-500">Updated on</p>
                  <p className="mt-1 text-sm text-slate-800 dark:text-slate-100">{LAST_UPDATED}</p>
                </div>
                <div>
                  <p className="text-slate-400 dark:text-slate-500">Benchmarks from</p>
                  <p className="mt-1 text-sm text-slate-800 dark:text-slate-100">Global direct selling filings</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm dark:border-slate-700 dark:from-slate-900/60 dark:to-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Top 5 brands steering 2025
              </p>
              <ol className="mt-4 space-y-3">
                {topFiveCompanies.map((company) => (
                  <li key={company.rank} className="flex items-start justify-between gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {company.rank}. {company.company}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {company.country} • {company.primaryMarket}
                      </p>
                    </div>
                    <span className="inline-flex rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-100/10 dark:text-slate-200">
                      #{company.rank}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-300/60 bg-emerald-50/80 p-4 text-emerald-800 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" aria-hidden />
                <p className="text-sm font-semibold">Enterprise-grade data assurance</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-emerald-700 dark:text-emerald-200/90">
                Rankings are reconciled with direct selling association reports and public financial disclosures, so your strategy mirrors verified market momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contents"
        className="container rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
      >
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What this article covers</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          The original article mapped every major insight you need to evaluate new MLM markets. Jump straight to the section that will fast-track your planning.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TOC_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-5 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:bg-white hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-400"
            >
              <span>{item.label}</span>
              <span className="mt-2 text-xs font-medium text-slate-400 transition group-hover:text-emerald-500 dark:text-slate-500">
                Explore ➝
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="global-ranking" className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Leading top MLM companies of 2025 — still trending
            </h2>
            {GLOBAL_OVERVIEW_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            {INSIGHTS.map(({ title, description, icon: Icon, badgeClasses }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className={cn("mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", badgeClasses)}>
                  <Icon className="mr-2 h-4 w-4" aria-hidden />
                  {title}
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
              <thead className="bg-slate-100/80 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                <tr>
                  {TABLE_HEADERS.map((heading) => (
                    <th key={heading} className="px-4 py-3 align-middle">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOP_COMPANIES.map((company) => {
                  const isTopTen = company.rank <= 10;
                  return (
                    <tr
                      key={company.rank}
                      className={cn(
                        "text-slate-700 transition dark:text-slate-200",
                        isTopTen
                          ? "bg-sky-50/80 dark:bg-sky-500/10"
                          : company.rank % 2 === 0
                            ? "bg-white dark:bg-slate-900/60"
                            : "bg-slate-50/70 dark:bg-slate-900/40"
                      )}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{company.rank}</td>
                      <td className="px-4 py-3 font-semibold">{company.company}</td>
                      <td className="px-4 py-3">{company.country}</td>
                      <td className="px-4 py-3">{company.founded}</td>
                      <td className="px-4 py-3">{company.headquarters}</td>
                      <td className="px-4 py-3">{company.compensationStructure}</td>
                      <td className="px-4 py-3">{company.primaryMarket}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="usa-leaders"
        className="container rounded-[36px] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-10 shadow-xl dark:border-blue-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Top 10 MLM companies in the USA</h2>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              The United States still anchors the global MLM economy. From legacy beauty houses to fintech-driven financial services, these ten companies pair disciplined compliance with community-first storytelling.
            </p>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Evaluate how they structure training, omnichannel selling, and payout tiers before you craft your own distributor journeys.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {USA_LEADERS.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-blue-400/20 dark:bg-slate-900/70"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-blue-500/10" />
                <div className="relative">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="malaysia-leaders"
        className="container rounded-[36px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-10 shadow-xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Top 10 MLM companies in Malaysia</h2>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Malaysia’s regulatory clarity and wellness-focused consumers make it a hotspot for product-first MLM brands. Use this list to sense-check localized offerings, hybrid retail plus MLM playbooks, and the incentives that keep Malaysian distributors mobilized.
            </p>
          </div>
          <div className="space-y-4">
            <ol className="space-y-4">
              {MALAYSIA_LEADERS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-3xl border border-emerald-200/80 bg-white/90 p-5 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900/70"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="spain-leaders"
        className="container rounded-[36px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-10 shadow-xl dark:border-amber-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Top 10 MLM companies in Spain</h2>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Spain’s distributors value premium lifestyle experiences, hybrid omnichannel journeys, and strong product provenance. These ten brands balance in-home storytelling with digital convenience.
            </p>
          </div>
          <div className="space-y-6 border-l-2 border-amber-200 pl-6 dark:border-amber-500/40">
            {SPAIN_LEADERS.map((item) => (
              <div key={item.title} className="relative pl-6">
                <span className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400 shadow" />
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{faq.title}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-7 shadow-xl dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200">Need to validate your plan?</h3>
            <p className="mt-2 text-sm leading-6 text-emerald-700 dark:text-emerald-200/90">
              Take your existing compensation sheet, plug it into Cloud MLM Software, and let our AI copilots surface compliance gaps, payout leakages, and ROI opportunities.
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Button asChild className="justify-start rounded-full bg-emerald-600 px-5 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                <Link href={pricingHref}>Compare pricing options</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="justify-start rounded-full border-emerald-300 bg-white/70 px-5 py-2 text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/40 dark:bg-slate-900/70 dark:text-emerald-200"
              >
                <Link href={calculatorHref}>Experiment with MLM plan calculators</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-sm shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">Disclaimer</p>
            <p className="mt-2 leading-6 text-slate-600 dark:text-slate-300">{DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Related resources</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_RESOURCES.map((resource) => (
              <Link
                key={resource.path}
                href={buildLocalizedPath(resource.path, locale)}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-white hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-400"
              >
                <span>{resource.title}</span>
                <span className="mt-3 text-xs font-normal leading-6 text-slate-600 transition group-hover:text-emerald-500 dark:text-slate-300">
                  {resource.description}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition group-hover:text-emerald-500 dark:text-slate-400">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">About the authors</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{AUTHOR.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
