"use client";

import type { ComponentType, MouseEvent, ReactNode } from "react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  ClipboardList,
  Cpu,
  TrendingUp,
  CalendarCheck,
  Rocket,
  Plug,
  Briefcase,
  Globe,
  Sparkles,
  ShieldCheck,
  Target,
  BarChart3,
  Wallet,
  Trophy,
  Layers,
  BookOpen,
  FileText,
  GraduationCap
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { supportedLocales } from "@/config/site";
import { toAbsoluteUrl } from "@/lib/media";
import { buildLocalizedPath, resolveHref } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type {
  CmsLink,
  HighlightCard,
  LanguageOption,
  LinkWithIcon,
  MegaCard,
  MegaDetail,
  MegaMenu,
  MegaMenuCallout,
  MegaMenuCategory,
  NavItem
} from "@/types/global";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { SiteLogo } from "@/components/site/site-logo";
import { SmartImage } from "@/components/ui/smart-image";
import { Button } from "@/components/ui/button";

type TopUtilityLink = {
  label: string;
  href: string;
};

type Announcement = {
  message: string;
  href?: string;
  label?: string;
};

const FALLBACK_ANNOUNCEMENT: Announcement | null = {
  message: "2025 Global MLM Transformation Summit registration is now open.",
  href: "/resources/events/mlm-transformation-summit",
  label: "Reserve a seat"
};

const FALLBACK_UTILITY_LINKS: TopUtilityLink[] = [
  { label: "Strategy Blog", href: "/blog" },
  { label: "Comp Plan Playbooks", href: "/resources/compensation/toolkit" },
  { label: "Customer Stories", href: "/resources/customers" },
  { label: "Resources", href: "/resources" },
  { label: "Partner Portal", href: "/partners" }
];

const FALLBACK_NAV_ITEMS: NavItem[] = [
  {
    label: "Platform",
    href: "/features",
    kind: "mega",
    order: 1,
    mega: {
      variant: "platform",
      highlights: [
        {
          title: "MLM software control hub",
          description: "Run campaigns, payouts, and compliance in one simple workspace.",
          ctaLabel: "See the platform",
          href: "/features"
        },
        {
          title: "Launch Cloud MLM fast",
          description: "Use ready modules to launch your MLM software in weeks.",
          ctaLabel: "View launch plan",
          href: "/features#implementation-journey"
        }
      ],
      cards: [
        {
          title: "Campaign tools",
          description: "Plan email, social, and funnels in one place.",
          href: "/features#campaign-tools"
        },
        {
          title: "Compensation engine",
          description: "Design and test MLM payouts with simple steps.",
          href: "/features#compensation-engine"
        },
        {
          title: "Wallet & payouts",
          description: "Send commissions and bonuses globally with one wallet.",
          href: "/features#wallet-payouts"
        },
        {
          title: "MLM analytics",
          description: "Track ranks, volume, and ROI with clear dashboards.",
          href: "/features#mlm-analytics"
        }
      ],
      serviceDetails: [
        {
          title: "Platform tour video",
          description: "Watch a five-minute walkthrough of key MLM software screens.",
          href: "/free-mlm-software-demo?video=platform",
          ctaLabel: "Watch"
        },
        {
          title: "Implementation checklist",
          description: "Tick through data, payout, and launch tasks in order.",
          href: "/resources/implementation",
          ctaLabel: "Download"
        }
      ],
      serviceList: [
        { label: "Feature list", href: "/features" },
        { label: "Integration map", href: "/features#integration-map" },
        { label: "Security overview", href: "/features#compliance-trust" },
        { label: "Support plans", href: "/features#support-plans" }
      ],
      categories: [
        {
          title: "Enterprise teams",
          description: "Run global MLM software with stable payouts and reporting.",
          badge: "ENTERPRISE",
          layout: "pill",
          links: [
            { title: "Ops control", href: "/features#operations-cockpit" },
            { title: "Compliance center", href: "/features#compliance-trust" },
            { title: "Analytics dashboards", href: "/features#analytics-dashboards" }
          ]
        },
        {
          title: "Startups",
          description: "Launch an MLM software stack with a small crew.",
          badge: "STARTUP",
          layout: "pill",
          links: [
            { title: "Starter journeys", href: "/features#starter-journeys" },
            { title: "Comp plan templates", href: "/features#compensation-engine" },
            { title: "Cost planner", href: "/features#continuous-optimization" }
          ]
        }
      ],
      callouts: [
        {
          title: "Book an MLM platform demo",
          description: "See the MLM software screens that matter to your team.",
          ctaLabel: "Schedule demo",
          href: "/contact",
          tone: "primary"
        }
      ],
      seeAll: {
        title: "Explore all MLM software features",
        href: "/features"
      }
    }
  },
  {
    label: "Demo",
    href: "/free-mlm-software-demo",
    kind: "mega",
    order: 2,
    mega: {
      variant: "demo",
      highlights: [
        {
          title: "See Cloud MLM Software your way",
          description: "Join a live walkthrough or try the sandbox to click through the MLM tools yourself.",
          ctaLabel: "Pick a demo path",
          href: "/free-mlm-software-demo"
        }
      ],
      cards: [
        {
          title: "Live product tour",
          description: "Join a 30-minute live session focused on your MLM goals.",
          href: "/free-mlm-software-demo",
          bullets: [
            "Host shows the screens you choose",
            "Invite marketing, finance, or IT teammates",
            "Get the recording and next steps within a day"
          ]
        },
        {
          title: "Sandbox access",
          description: "Use a ready Cloud MLM Software site for 20 days with sample data.",
          href: "https://demo.cloudmlmsoftware.com",
          bullets: [
            "Instant setup with no credit card",
            "Guided missions highlight key workflows",
            "Chat support when you need help"
          ]
        }
      ],
      serviceDetails: [],
      serviceList: [
        { label: "Demo agenda", href: "/free-mlm-software-demo#agenda" },
        { label: "Sandbox checklist", href: "/resources/implementation" },
        { label: "Security overview", href: "/company/security" }
      ],
      categories: [],
      callouts: [
        {
          title: "Talk with a demo guide",
          description: "Confirm the best demo flow and the questions we should cover.",
          ctaLabel: "Plan my demo",
          href: "/book-a-demo",
          tone: "primary"
        },
        {
          title: "Share demo invites",
          description: "Send the agenda to your MLM leaders so everyone joins prepared.",
          ctaLabel: "Share details",
          href: "/free-mlm-software-demo#invite"
        }
      ],
      seeAll: {
        title: "Explore all demo experiences",
        href: "/free-mlm-software-demo"
      }
    }
  },
  {
    label: "Modules",
    href: "/mlm-software-modules/",
    kind: "mega",
    order: 3,
    mega: {
      variant: "modules",
      highlights: [
        {
          title: "MLM software modules",
          description: "Add the modules that keep payouts, stores, and field teams running smooth.",
          ctaLabel: "Explore modules",
          href: "/mlm-software-modules/"
        }
      ],
      cards: [
        {
          title: "Commission module",
          description: "Build plans and run MLM payouts without spreadsheets.",
          href: "/modules/compensation"
        },
        {
          title: "Commerce module",
          description: "Launch replicated shops, autoships, and taxes in minutes.",
          href: "/modules/commerce"
        },
        {
          title: "Field mobile app",
          description: "Give distributors a mobile app for tasks, scripts, and recognition.",
          href: "/modules/field-engagement"
        },
        {
          title: "Analytics module",
          description: "Watch ranks, orders, and retention with simple dashboards.",
          href: "/modules/analytics"
        }
      ],
      serviceDetails: [
        {
          title: "Automation recipes",
          description: "Grab ready journeys for onboarding, promos, and win-back flows.",
          href: "/modules/automation",
          ctaLabel: "See recipes"
        }
      ],
      serviceList: [
        { label: "MLM wallet", href: "/mlm-wallet" },
        { label: "Genealogy tree", href: "/features/genealogy" },
        { label: "Compliance monitor", href: "/features/compliance-monitoring" }
      ],
      categories: [],
      callouts: [
        {
          title: "Module bundle guide",
          description: "See bundles for enterprise brands and fast-moving startups.",
          ctaLabel: "View bundles",
          href: "/resources/module-comparison",
          tone: "primary"
        },
        {
          title: "Plan module rollouts",
          description: "Talk with us to choose the next MLM software modules to launch.",
          ctaLabel: "Plan modules",
          href: "/book-a-demo"
        }
      ],
      seeAll: {
        title: "Browse every MLM module",
        href: "/mlm-software-modules/"
      }
    }
  },
  {
    label: "MLM Plans",
    href: "/mlm-plans/",
    kind: "mega",
    order: 4,
    mega: {
      variant: "plans",
      highlights: [
        {
          title: "Pick the best MLM compensation plan",
          description: "Simple explainers for binary, unilevel, matrix, and hybrid plans.",
          ctaLabel: "Browse plan types",
          href: "/mlm-plans/"
        }
      ],
      cards: [
        {
          title: "Binary plan",
          description: "Balance legs, manage carryover, and reward leaders easily.",
          href: "/mlm-plan/mlm-binary-plan/"
        },
        {
          title: "Unilevel plan",
          description: "Grow deep teams with simple compression and bonus pools.",
          href: "/mlm-plan/unilevel-mlm-plan/"
        },
        {
          title: "Matrix & board",
          description: "Handle board breaks, cycling, and forced matrix rewards without spreadsheets.",
          href: "/mlm-plan/mlm-matrix-plan/"
        },
        {
          title: "Hybrid & custom",
          description: "Blend plan styles or launch regional bonuses with clear payouts.",
          href: "/mlm-plan/mlm-australian-binary-plan/"
        }
      ],
      serviceDetails: [
        {
          title: "Plan health audit",
          description: "Check payout ratios, retention, and rank flow with compensation experts.",
          href: "/services/comp-plan-audit",
          ctaLabel: "Request audit"
        }
      ],
      serviceList: [
        { label: "Plan builder studio", href: "/platform/compensation" },
        { label: "Bonus library", href: "/mlm-plans/bonuses" },
        { label: "Scenario simulator", href: "/mlm-plans/scenario-lab" }
      ],
      categories: [],
      callouts: [
        {
          title: "Compare plan templates",
          description: "Download the quick guide to compare binary, unilevel, and matrix setups.",
          ctaLabel: "Get comparison",
          href: "/mlm-plans/templates",
          tone: "primary"
        },
        {
          title: "Talk to a plan architect",
          description: "Map the best plan for your stage in a short consult.",
          ctaLabel: "Book consult",
          href: "/book-a-demo"
        }
      ],
      seeAll: {
        title: "See all plan resources",
        href: "/mlm-plans/"
      }
    }
  },
  {
    label: "Services",
    href: "/services",
    kind: "mega",
    order: 5,
    mega: {
      variant: "services",
      highlights: [
        {
          title: "MLM services to build and scale",
          description:
            "Work with one team for implementation, app builds, and compensation help.",
          ctaLabel: "View service catalog",
          href: "/services"
        }
      ],
      cards: [
        {
          title: "MLM platform implementation",
          description: "Configure modules, move data, and launch your MLM software on time.",
          href: "/services/implementation"
        },
        {
          title: "Mobile app & portal development",
          description: "Build distributor apps, dashboards, and admin tools for your workflows.",
          href: "/services/mobile-development"
        },
        {
          title: "Website & funnel creation",
          description: "Launch responsive MLM marketing sites, funnels, and onboarding journeys.",
          href: "/services/website-development"
        },
        {
          title: "HYIP scripts development & customization",
          description: "Deliver custom scripts, investor dashboards, and wallet flows ready for launch.",
          href: "/services/hyip-scripts"
        },
        {
          title: "Laravel & API engineering",
          description: "Extend your stack with Laravel builds, integrations, and automation APIs.",
          href: "/services/laravel-development"
        },
        {
          title: "Compensation plan consulting",
          description: "Model, test, and document plans with experienced MLM consultants.",
          href: "/services/comp-plan-consulting"
        }
      ],
      serviceDetails: [
        {
          title: "Implementation blueprint desk",
          description: "Plan data, payouts, and compliance steps with our specialists.",
          href: "/services/implementation-blueprint",
          ctaLabel: "Review blueprint"
        },
        {
          title: "Success management pod",
          description: "Get ongoing admin, support, and optimization from a dedicated team.",
          href: "/services/success-pod",
          ctaLabel: "Meet the pod"
        }
      ],
      serviceList: [
        { label: "MLM migration checklist", href: "/resources/migration-checklist" },
        { label: "Mobile app feature guide", href: "/resources/mobile-guide" },
        { label: "Comp plan workshop outline", href: "/resources/comp-plan-workshop" }
      ],
      categories: [],
      seeAll: {
        title: "Explore all MLM services",
        href: "/services"
      }
    }
  },
  {
    label: "AI Copilot",
    href: "/ai-copilot",
    kind: "link",
    order: 6
  },
  {
    label: "Company",
    href: "/company/about",
    kind: "mega",
    order: 7,
    mega: {
      variant: "company",
      highlights: [
        {
          title: "Bpract builds Cloud MLM Software",
          description: "Meet the team that designs, codes, and supports the platform every day.",
          ctaLabel: "About Bpract",
          href: "/company/about"
        },
        {
          title: "Trusted by fast-scaling MLM brands",
          description: "See how Bpract keeps launches, payouts, and compliance on track worldwide.",
          ctaLabel: "Read stories",
          href: "/resources"
        }
      ],
      cards: [
        {
          title: "Who we serve",
          description: "Enterprise marketing teams, startup founders, and field leaders rely on Bpract.",
          href: "/company/about#who-we-serve"
        },
        {
          title: "Inside Bpract",
          description: "Get a quick look at our product squads, services pods, and support desks.",
          href: "/company/about#inside-bpract"
        },
        {
          title: "Careers at Bpract",
          description: "Join builders who focus on clear tools, fast launches, and happy field teams.",
          href: "/company/careers"
        }
      ],
      serviceDetails: [
        {
          title: "Delivery playbook",
          description: "See how Bpract plans, ships, and supports every MLM software rollout.",
          href: "/company/about#delivery-playbook",
          ctaLabel: "View playbook"
        }
      ],
      serviceList: [
        { label: "Security & trust", href: "/company/security" },
        { label: "Legal center", href: "/legal" },
        { label: "Newsroom", href: "/company/news" },
        { label: "Partner program", href: "/partners" },
        { label: "Contact Bpract", href: "/contact" }
      ],
      categories: [
        {
          title: "Why Bpract",
          description: "Understand our values, timelines, and customer promises.",
          layout: "list",
          links: [
            { title: "Our story", href: "/company/about" },
            { title: "How we ship", href: "/company/about#delivery-playbook" },
            { title: "Customer results", href: "/resources" }
          ]
        },
        {
          title: "Work with us",
          description: "Explore open roles, culture notes, and hiring steps.",
          layout: "pill",
          links: [
            { title: "Open roles", href: "/company/careers#open-roles" },
            { title: "Life at Bpract", href: "/company/culture" },
            { title: "Hiring FAQ", href: "/company/careers/faq" }
          ]
        }
      ],
      callouts: [
        {
          title: "Talk with Bpract",
          description: "Share your MLM roadmap and get a simple next-step plan.",
          ctaLabel: "Book a call",
          href: "/contact",
          tone: "primary"
        },
        {
          title: "Visit bpract.com",
          description: "Learn more about the team behind Cloud MLM Software.",
          ctaLabel: "Go to Bpract",
          href: "https://bpract.com"
        }
      ],
      seeAll: {
        title: "Explore Bpract",
        href: "/company/about"
      }
    }
  },
  {
    label: "Contact",
    href: "/contact",
    kind: "link",
    order: 8
  }
];

const FALLBACK_SITE_NAME = "Cloud MLM Software";
const FALLBACK_HEADER_CTA: CmsLink | null = null;
const FALLBACK_LANGUAGE_OPTIONS: LanguageOption[] = [
  { locale: "en", label: "en English", href: buildLocalizedPath("/", "en") },
  { locale: "es", label: "es Español", href: buildLocalizedPath("/", "es") },
  { locale: "fr", label: "fr Français", href: buildLocalizedPath("/", "fr") },
  { locale: "it", label: "it Italiano", href: buildLocalizedPath("/", "it") },
  { locale: "de", label: "de Deutsch", href: buildLocalizedPath("/", "de") },
  { locale: "pt", label: "pt Português", href: buildLocalizedPath("/", "pt") },
  { locale: "zh", label: "zh 中文", href: buildLocalizedPath("/", "zh") },
];

type SiteHeaderProps = {
  locale: SupportedLocale;
  siteName: string;
  navItems: NavItem[];
  headerCta?: CmsLink | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  languageOptions: LanguageOption[];
};

export function SiteHeader({
  locale,
  siteName,
  navItems,
  headerCta,
  languageLabel,
  languageAriaLabel,
  languageOptions
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [megaOffset, setMegaOffset] = useState<number>(0);

  const cancelScheduledOpen = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
  };

  const cancelScheduledClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleOpenMega = (label: string, immediate = false) => {
    cancelScheduledClose();
    if (immediate) {
      cancelScheduledOpen();
      setOpenMega(label);
      return;
    }
    cancelScheduledOpen();
    openTimer.current = setTimeout(() => {
      setOpenMega(label);
      openTimer.current = null;
    }, 180);
  };

  const handleScheduleClose = (label: string) => {
    cancelScheduledClose();
    cancelScheduledOpen();
    closeTimer.current = setTimeout(() => {
      setOpenMega((current) => (current === label ? null : current));
      closeTimer.current = null;
    }, 120);
  };

  const handleImmediateClose = () => {
    cancelScheduledOpen();
    cancelScheduledClose();
    setOpenMega(null);
  };

  useEffect(
    () => () => {
      cancelScheduledOpen();
      cancelScheduledClose();
    },
    []
  );

  useLayoutEffect(() => {
    const updateOffset = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setMegaOffset(rect.bottom);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const resolvedSiteName = siteName?.trim() ? siteName : FALLBACK_SITE_NAME;
  const resolvedNavItems = navItems.length > 0 ? navItems : FALLBACK_NAV_ITEMS;
  const sortedNav = useMemo(
    () => resolvedNavItems.slice().sort((a, b) => a.order - b.order),
    [resolvedNavItems]
  );

  const resolvedHeaderCta = headerCta ?? FALLBACK_HEADER_CTA;
  const cta = resolvedHeaderCta ? resolveHref(resolvedHeaderCta.href, locale) : null;
  const resolvedLanguageOptions = languageOptions.length > 0 ? languageOptions : FALLBACK_LANGUAGE_OPTIONS;
  const resolvedLanguageLabel = null; // Always hide the "Language" label text
  const resolvedLanguageAriaLabel = languageAriaLabel ?? "Select language";

  const activeMegaItem = useMemo(
    () => sortedNav.find((item) => item.kind === "mega" && item.label === openMega) ?? null,
    [sortedNav, openMega]
  );
  const announcement = FALLBACK_ANNOUNCEMENT;
  const utilityLinks = FALLBACK_UTILITY_LINKS;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-background shadow-sm">
      {announcement ? (
        <div className="flex items-center justify-center bg-gradient-to-r from-primary via-primary/90 to-primary/70 px-3 py-2 text-xs font-medium text-primary-foreground sm:px-4 sm:text-sm">
          <a
            href={announcement.href ? resolveHref(announcement.href, locale).href : "#"}
            className="inline-flex items-center gap-2 whitespace-nowrap transition hover:opacity-90"
          >
            <span>{announcement.message}</span>
            {announcement.label ? (
              <span className="inline-flex items-center gap-1">
                {announcement.label}
                <span aria-hidden="true">-&gt;</span>
              </span>
            ) : null}
          </a>
        </div>
      ) : null}

      {utilityLinks.length > 0 ? (
        <div className="hidden border-b border-primary/10 bg-primary/5 text-xs text-primary/70 md:block">
          <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 py-2">
            <nav aria-label="Utility">
              <ul className="flex items-center gap-4 lg:gap-6">
                {utilityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={resolveHref(link.href, locale).href}
                      className="transition hover:text-primary/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <MegaSurface
              activeItem={activeMegaItem}
              offset={megaOffset}
              locale={locale}
              onHover={handleOpenMega}
              onLeave={handleScheduleClose}
              onForceClose={handleImmediateClose}
            />
          </div>
        </div>
      ) : null}

      <div className="flex h-auto min-h-16 w-full flex-wrap items-center justify-between gap-3 border-b border-border/40 bg-background/95 px-4 py-2 backdrop-blur xl:px-6">
        <div className="flex items-center gap-3 flex-shrink-0">
          <SiteLogo locale={locale} siteName={resolvedSiteName} />
        </div>
        <nav className="relative hidden flex-1 items-center justify-center lg:flex min-w-0">
          <ul className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium text-muted-foreground">
            {sortedNav.map((item) => {
              const isMega = item.kind === "mega" && Boolean(item.mega);
              const isOpen = openMega === item.label;
              const panelId = isMega ? 'mega-surface' : undefined;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (isMega) handleOpenMega(item.label);
                  }}
                  onMouseLeave={(event) => {
                    if (!isMega) return;
                    const next = (event.relatedTarget as HTMLElement | null)?.closest("[data-mega-panel]");
                    if (!next) {
                      handleScheduleClose(item.label);
                    }
                  }}
                >
                  {isMega ? (() => {
                    const resolved = resolveHref(item.href, locale);
                    // Normalize paths by removing trailing slashes and converting to lowercase for comparison
                    const normalizePath = (path: string): string => {
                      if (!path) return '/';
                      const normalized = path.replace(/\/$/, '').toLowerCase();
                      return normalized || '/';
                    };
                    // Strip locale prefix from pathname for comparison
                    const stripLocalePrefix = (path: string): string => {
                      const segments = path.split('/').filter(Boolean);
                      const maybeLocale = segments[0];
                      const normalizedLocale =
                        maybeLocale === "pt-pt" ? "pt" : maybeLocale === "zh-hans" ? "zh" : maybeLocale;
                      if (segments.length > 0 && supportedLocales.includes(normalizedLocale as SupportedLocale)) {
                        segments.shift();
                      }
                      return '/' + segments.join('/');
                    };
                    const pathnameWithoutLocale = stripLocalePrefix(pathname || '/');
                    const normalizedPathname = normalizePath(pathnameWithoutLocale);
                    const normalizedHref = normalizePath(resolved.href || '/');
                    const isActive = normalizedPathname === normalizedHref || 
                      (normalizedHref !== '/' && normalizedPathname.startsWith(normalizedHref + '/'));
                    return (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "bg-primary/10 text-foreground font-semibold shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                        isOpen && !isActive ? "bg-primary/10 text-foreground shadow-sm" : ""
                      )}
                      onClick={() => {
                        cancelScheduledOpen();
                        cancelScheduledClose();
                        setOpenMega((current) => (current === item.label ? null : item.label));
                      }}
                      onFocus={() => handleOpenMega(item.label, true)}
                      onBlur={(event) => {
                        const next = (event.relatedTarget as HTMLElement | null)?.closest("[data-mega-panel]");
                        if (!next) {
                          handleScheduleClose(item.label);
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") {
                          event.preventDefault();
                          handleImmediateClose();
                          event.currentTarget.blur();
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0")} />
                    </button>
                    );
                  })() : (
                    <HeaderLink item={item} locale={locale} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex flex-shrink-0">
          <ThemeToggle />
          <LanguageSwitcher
            locale={locale}
            label={resolvedLanguageLabel}
            ariaLabel={resolvedLanguageAriaLabel}
            options={resolvedLanguageOptions}
          />
          {resolvedHeaderCta && cta ? <CtaButton href={cta.href} external={cta.external} label={resolvedHeaderCta.title} /> : null}
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border/60 p-2 text-foreground hover:bg-muted lg:hidden"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        locale={locale}
        siteName={resolvedSiteName}
        navItems={sortedNav}
        headerCta={resolvedHeaderCta}
        languageLabel={resolvedLanguageLabel}
        languageAriaLabel={resolvedLanguageAriaLabel}
        languageOptions={resolvedLanguageOptions}
        utilityLinks={utilityLinks}
        announcement={announcement}
      />
    </header>
  );
}

function HeaderLink({ item, locale }: { item: NavItem; locale: SupportedLocale }) {
  const pathname = usePathname();
  const resolved = resolveHref(item.href, locale);
  
  // Normalize paths by removing trailing slashes and converting to lowercase for comparison
  const normalizePath = (path: string): string => {
    if (!path) return '/';
    // Remove trailing slash, convert to lowercase, and ensure it starts with /
    const normalized = path.replace(/\/$/, '').toLowerCase();
    return normalized || '/';
  };
  
  // Strip locale prefix from pathname for comparison
  const stripLocalePrefix = (path: string): string => {
    const segments = path.split('/').filter(Boolean);
    const maybeLocale = segments[0];
    const normalizedLocale =
      maybeLocale === "pt-pt" ? "pt" : maybeLocale === "zh-hans" ? "zh" : maybeLocale;
    if (segments.length > 0 && supportedLocales.includes(normalizedLocale as SupportedLocale)) {
      segments.shift();
    }
    return '/' + segments.join('/');
  };
  
  // Check if the current pathname matches the item's href
  // Handle exact match or sub-path match (but not partial matches)
  const pathnameWithoutLocale = stripLocalePrefix(pathname || '/');
  const normalizedPathname = normalizePath(pathnameWithoutLocale);
  const normalizedHref = normalizePath(resolved.href || '/');
  const isActive = normalizedPathname === normalizedHref || 
    (normalizedHref !== '/' && normalizedPathname.startsWith(normalizedHref + '/'));
  
  const linkClasses = cn(
    "inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    isActive
      ? "bg-primary/10 text-foreground font-semibold"
      : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
  );

  if (!item.href || resolved.external) {
    return (
      <a
        href={resolved.href}
        target={resolved.external ? "_blank" : undefined}
        rel={resolved.external ? "noopener noreferrer" : undefined}
        className={linkClasses}
      >
        <span>{item.label}</span>
      </a>
    );
  }

  return (
    <Link href={resolved.href} className={linkClasses}>
      <span>{item.label}</span>
    </Link>
  );
}

export function MegaSurface({
  activeItem,
  offset,
  locale,
  onHover,
  onLeave,
  onForceClose
}: {
  activeItem: NavItem | null;
  offset: number;
  locale: SupportedLocale;
  onHover: (label: string, immediate?: boolean) => void;
  onLeave: (label: string) => void;
  onForceClose: () => void;
}) {
  const [rendered, setRendered] = useState<NavItem | null>(activeItem);
  const [visible, setVisible] = useState(Boolean(activeItem));
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (activeItem && activeItem.kind === "mega" && activeItem.mega) {
      setRendered(activeItem);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [activeItem]);

  useLayoutEffect(() => {
    if (!rendered || rendered.kind !== "mega" || !rendered.mega || !contentRef.current) return;

    const el = contentRef.current;
    const update = () => {
      const maxHeight = typeof window !== "undefined" ? Math.floor(window.innerHeight * 0.8) : el.scrollHeight;
      const nextHeight = Math.min(el.scrollHeight, maxHeight);
      setHeight(nextHeight);
    };

    update();

    let frame = 0;
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
          if (frame) window.cancelAnimationFrame(frame);
          frame = window.requestAnimationFrame(update);
        })
        : null;

    if (observer) observer.observe(el);

    return () => {
      if (observer) observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [rendered]);

  useEffect(() => {
    if (!visible && !activeItem) {
      const timeout = setTimeout(() => {
        setRendered(null);
      }, 220);
      return () => clearTimeout(timeout);
    }
    if (!visible) {
      setHeight(0);
    }
  }, [visible, activeItem]);

  if (!rendered || rendered.kind !== "mega" || !rendered.mega) {
    return null;
  }

  const mega = rendered.mega;
  const label = rendered.label;

  const variant = mega.variant ?? "standard";
  const primaryHighlight = mega.highlights[0] ?? null;
  const secondaryHighlights = primaryHighlight ? mega.highlights.slice(1) : mega.highlights;
  const categories = mega.categories ?? [];
  const callouts = mega.callouts ?? [];
  const cards = mega.cards ?? [];
  const serviceDetails = mega.serviceDetails ?? [];
  const serviceList = mega.serviceList ?? [];
  const seeAll = mega.seeAll ?? null;

  let content: ReactNode = null;

  if (variant === "platform") {
    const hasPlatformContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasPlatformContent) {
      return null;
    }

    content = (
      <MegaPlatformLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "services") {
    const hasServicesContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasServicesContent) {
      return null;
    }

    content = (
      <MegaServicesLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "resources") {
    const hasResourcesContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasResourcesContent) {
      return null;
    }

    content = (
      <MegaResourcesLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "company") {
    const hasCompanyContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasCompanyContent) {
      return null;
    }

    content = (
      <MegaCompanyLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "modules") {
    const hasModulesContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasModulesContent) {
      return null;
    }

    content = (
      <MegaModulesLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "plans") {
    const hasPlansContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasPlansContent) {
      return null;
    }

    content = (
      <MegaPlansLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else if (variant === "demo") {
    const hasDemoContent = Boolean(
      primaryHighlight ||
      secondaryHighlights.length > 0 ||
      cards.length > 0 ||
      categories.length > 0 ||
      serviceDetails.length > 0 ||
      serviceList.length > 0 ||
      callouts.length > 0 ||
      seeAll
    );

    if (!hasDemoContent) {
      return null;
    }

    content = (
      <MegaDemoLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
      />
    );
  } else {
    const hasHighlightColumn = Boolean(primaryHighlight || secondaryHighlights.length > 0 || cards.length > 0);
    const hasCalloutColumn = callouts.length > 0 || serviceDetails.length > 0 || serviceList.length > 0;
    const hasMiddleContent = categories.length > 0 || (!hasHighlightColumn && cards.length > 0);
    const hasAnyContent = hasHighlightColumn || hasMiddleContent || hasCalloutColumn || Boolean(seeAll);

    if (!hasAnyContent) {
      return null;
    }

    const highlightSpan = hasHighlightColumn ? 5 : 0;
    const calloutSpan = hasCalloutColumn ? (hasHighlightColumn ? 4 : 5) : 0;
    const middleSpan = 12 - highlightSpan - calloutSpan;
    const highlightClass = getColSpanClass(highlightSpan);
    const middleClass = getColSpanClass(middleSpan);
    const calloutClass = getColSpanClass(calloutSpan);
    const showCardsInHighlightColumn = hasHighlightColumn && cards.length > 0;
    const showCardsInMiddleColumn = !hasHighlightColumn && cards.length > 0;

    content = (
      <MegaStandardLayout
        locale={locale}
        primaryHighlight={primaryHighlight}
        secondaryHighlights={secondaryHighlights}
        cards={cards}
        categories={categories}
        serviceDetails={serviceDetails}
        serviceList={serviceList}
        callouts={callouts}
        seeAll={seeAll}
        hasHighlightColumn={hasHighlightColumn}
        hasMiddleContent={hasMiddleContent}
        hasCalloutColumn={hasCalloutColumn}
        highlightClass={highlightClass}
        middleClass={middleClass}
        calloutClass={calloutClass}
        showCardsInHighlightColumn={showCardsInHighlightColumn}
        showCardsInMiddleColumn={showCardsInMiddleColumn}
      />
    );
  }

  const outerClass = cn(
    "fixed inset-x-0 z-[9998] hidden justify-center transition-transform duration-200 ease-out lg:flex",
    visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
  );

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href]");
    if (anchor) {
      onForceClose();
    }
  };

  return (
    <div
      id="mega-surface"
      data-mega-panel
      aria-hidden={!visible}
      className={outerClass}
      style={{ top: offset || undefined }}
      onMouseEnter={() => onHover(label, true)}
      onMouseLeave={() => onLeave(label)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onForceClose();
        }
      }}
    >
      <div className="w-full">
        <div
          className="overflow-hidden border-y border-border/40 bg-background/95 backdrop-blur shadow-[0_40px_140px_-60px_rgba(15,23,42,0.45)] transition-[height] duration-200 ease-out"
          style={{ height: visible ? height : 0, maxHeight: "80vh" }}
        >
          <div
            ref={contentRef}
            className="mx-auto w-full max-w-[1920px] overflow-y-auto px-6 pb-12 pt-8 lg:px-12 xl:px-16 2xl:px-20"
            style={{ maxHeight: "80vh" }}
            onClickCapture={handleContentClick}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaStandardLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll,
  hasHighlightColumn,
  hasMiddleContent,
  hasCalloutColumn,
  highlightClass,
  middleClass,
  calloutClass,
  showCardsInHighlightColumn,
  showCardsInMiddleColumn
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
  hasHighlightColumn: boolean;
  hasMiddleContent: boolean;
  hasCalloutColumn: boolean;
  highlightClass: string;
  middleClass: string;
  calloutClass: string;
  showCardsInHighlightColumn: boolean;
  showCardsInMiddleColumn: boolean;
}) {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {hasHighlightColumn ? (
          <aside className={cn(highlightClass, "flex flex-col gap-6")}>
            {primaryHighlight ? <HighlightCardView card={primaryHighlight} locale={locale} variant="hero" /> : null}
            {secondaryHighlights.length > 0 ? (
              <MegaSection title="Additional highlights">
                <div className="space-y-4">
                  {secondaryHighlights.map((card) => (
                    <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}
            {showCardsInHighlightColumn ? (
              <MegaSection title="Featured">
                <div className="space-y-3">
                  {cards.map((card) => (
                    <MegaCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}
          </aside>
        ) : null}

        {hasMiddleContent ? (
          <section className={cn(middleClass, "flex flex-col gap-8")}>
            {categories.length > 0 ? (
              <MegaSection title="Explore">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {categories.map((category) => (
                    <MegaCategoryView key={`${category.title}-${category.href ?? ''}`} category={category} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {showCardsInMiddleColumn ? (
              <MegaSection title="Featured">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {cards.map((card) => (
                    <MegaCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {!hasCalloutColumn && serviceDetails.length > 0 ? (
              <MegaSection title="Programs & services">
                <div className="space-y-4">
                  {serviceDetails.map((detail) => (
                    <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {!hasCalloutColumn && serviceList.length > 0 ? (
              <MegaQuickList title="More from us" links={serviceList} locale={locale} />
            ) : null}
          </section>
        ) : null}

        {hasCalloutColumn ? (
          <aside className={cn(calloutClass, "flex flex-col gap-8")}>
            {serviceDetails.length > 0 ? (
              <MegaSection title="Programs & services">
                <div className="space-y-4">
                  {serviceDetails.map((detail) => (
                    <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {serviceList.length > 0 ? (
              <MegaQuickList title="More from us" links={serviceList} locale={locale} />
            ) : null}

            {callouts.length > 0 ? (
              <MegaSection title="Get started">
                <div className="space-y-3">
                  {callouts.map((callout) => (
                    <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}
          </aside>
        ) : null}
      </div>

      {seeAll ? (
        <div className="mt-8 text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </>
  );
}

function MegaPlatformLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const hasHero = Boolean(primaryHighlight) || secondaryHighlights.length > 0;
  const hasFeatures = cards.length > 0;
  const hasGuides = serviceDetails.length > 0;
  const hasTools = serviceList.length > 0;
  const hasTracks = categories.length > 0;
  const hasUpdates = callouts.length > 0;
  const hasMain = hasFeatures || hasGuides || hasTools || hasTracks || hasUpdates;
  const columnCount = [hasFeatures, hasGuides || hasTools, hasTracks || hasUpdates].filter(Boolean).length;
  const gridCols = columnCount >= 3 ? "lg:grid-cols-3" : columnCount === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1";

  if (!hasHero && !hasMain && !seeAll) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {hasHero ? (
        <MegaPlatformHero
          primary={primaryHighlight}
          secondary={secondaryHighlights}
          locale={locale}
        />
      ) : null}

      {hasMain ? (
        <div className={cn("grid gap-3", gridCols)}>
          {hasFeatures ? (
            <section className="space-y-3">
              <MegaSection title="MLM software features">
                <MegaPlatformFeatureGrid cards={cards} locale={locale} />
              </MegaSection>
            </section>
          ) : null}

          {(hasGuides || hasTools) ? (
            <section className="space-y-3">
              {hasGuides ? (
                <MegaSection title="Quick guides">
                  <MegaPlatformGuideStack details={serviceDetails} locale={locale} />
                </MegaSection>
              ) : null}

              {hasTools ? (
                <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-background to-background p-4 shadow-sm">
                  <MegaSection title="Helpful links">
                    <MegaPlatformQuickLinks links={serviceList} locale={locale} />
                  </MegaSection>
                </div>
              ) : null}
            </section>
          ) : null}

          {hasTracks ? (
            <section className="space-y-3">
              <MegaSection title="Built for">
                <MegaPlatformAudienceGrid categories={categories} locale={locale} />
              </MegaSection>
            </section>
          ) : null}
        </div>
      ) : null}

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaPlatformHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) {
    return null;
  }

  const heroCard = primary ?? secondary[0] ?? null;
  const supporting = primary ? secondary : secondary.slice(1);
  const heroCta: CmsLink | null = heroCard && heroCard.href
    ? { title: heroCard.ctaLabel?.trim() || "See details", href: heroCard.href }
    : null;
  const heroBadges = ["MLM campaigns", "Smart payouts", "Compliance", "Analytics"];
  const quickLinks = supporting.slice(0, 3);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-primary/15"
        viewBox="0 0 320 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="platformHeroLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.16" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.3" />
          </linearGradient>
          <linearGradient id="platformHeroArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.12" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
        </defs>
        <g stroke="currentColor" stroke-opacity="0.06" stroke-width="1">
          <line x1="0" y1="170" x2="320" y2="170" />
          <line x1="0" y1="130" x2="320" y2="130" />
          <line x1="0" y1="90" x2="320" y2="90" />
          <line x1="0" y1="50" x2="320" y2="50" />
        </g>
        <path
          d="M0 180 C30 150 70 150 105 115 C145 70 190 78 220 55 C255 35 290 42 320 24 L320 200 L0 200 Z"
          fill="url(#platformHeroArea)"
        />
        <path
          d="M0 180 C30 150 70 150 105 115 C145 70 190 78 220 55 C255 35 290 42 320 24"
          stroke="url(#platformHeroLine)"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>

      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        {heroCard ? (
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              MLM SOFTWARE PLATFORM
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold leading-tight text-foreground">{heroCard.title}</h3>
              {heroCard.description ? (
                <p className="text-sm leading-relaxed text-muted-foreground">{heroCard.description}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-primary">
              {heroBadges.map((badge) => (
                <span key={badge} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {badge}
                </span>
              ))}
            </div>
            {heroCta ? (
              <ResolvedLink
                link={heroCta}
                locale={locale}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>{heroCta.title}</span>
                <ArrowRight className="h-4 w-4" />
              </ResolvedLink>
            ) : null}
          </div>
        ) : null}

        {quickLinks.length > 0 ? (
          <div className="flex flex-col gap-2">
            {quickLinks.map((card) => (
              <ResolvedLink
                key={`${card.title}-${card.href ?? ''}`}
                link={{ title: card.title, href: card.href ?? null }}
                locale={locale}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border/30 bg-background/95 p-3 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
                  {card.description ? <p className="text-xs text-muted-foreground group-hover:text-foreground/80">{card.description}</p> : null}
                </div>
                <ArrowRight className="h-4 w-4 text-primary transition-transform duration-150 group-hover:translate-x-1" />
              </ResolvedLink>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
function MegaPlatformFeatureGrid({ cards, locale }: { cards: MegaCard[]; locale: SupportedLocale }) {
  const icons = [Cpu, ClipboardList, Wallet, BarChart3];

  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {cards.map((card, index) => (
        <MegaPlatformFeatureCard
          key={`${card.title}-${card.href ?? ''}`}
          card={card}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaPlatformFeatureCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-2.5 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
        {card.description ? <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">{card.description}</p> : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold text-primary">
          View feature
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaPlatformGuideStack({ details, locale }: { details: MegaDetail[]; locale: SupportedLocale }) {
  const items = details.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <div className="space-y-3">
      {items.map((detail) => (
        <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
      ))}
    </div>
  );
}

function MegaPlatformQuickLinks({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 6);
  if (items.length === 0) return null;

  const iconSet: ComponentType<{ className?: string }>[] = [Sparkles, Plug, ShieldCheck, Globe];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((link, index) => {
        const cmsLink: CmsLink = { title: link.label, href: link.href ?? null };
        const Icon = iconSet[index % iconSet.length];
        return (
          <ResolvedLink
            key={`${link.label}-${link.href ?? ''}`}
            link={cmsLink}
            locale={locale}
            className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-background/95 p-3 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary">{link.label}</span>
          </ResolvedLink>
        );
      })}
    </div>
  );
}

function MegaPlatformAudienceGrid({
  categories,
  locale
}: {
  categories: MegaMenuCategory[];
  locale: SupportedLocale;
}) {
  if (categories.length === 0) return null;
  const icons = [Briefcase, Rocket];

  return (
    <div className="flex flex-col gap-2.5">
      {categories.map((category, index) => (
        <MegaPlatformAudienceStrip
          key={`${category.title}-${category.href ?? ''}`}
          category={category}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaPlatformAudienceStrip({
  category,
  locale,
  Icon
}: {
  category: MegaMenuCategory;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, 4);
  const badge = category.badge?.trim() ?? null;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {badge}
            </span>
          ) : null}
          <p className="mt-1 text-sm font-semibold text-foreground">{category.title}</p>
          {category.description ? <p className="text-sm text-muted-foreground">{category.description}</p> : null}
        </div>
      </div>

      {links.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <ResolvedLink
              key={`${link.title}-${link.href ?? ''}`}
              link={link}
              locale={locale}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowRight className="h-3 w-3" />
              <span>{link.title}</span>
            </ResolvedLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaServicesLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const hasHero = Boolean(primaryHighlight) || secondaryHighlights.length > 0;
  const hasRightRail = serviceDetails.length > 0 || serviceList.length > 0 || callouts.length > 0;
  const hasMainContent = cards.length > 0 || categories.length > 0 || (!hasHero && serviceDetails.length > 0);

  if (!hasHero && !hasMainContent && !hasRightRail && !seeAll) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      {hasHero ? (
        <MegaServicesHero primary={primaryHighlight} secondary={secondaryHighlights} locale={locale} />
      ) : null}

      <div className={cn("grid gap-6", hasRightRail ? "lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]" : "lg:grid-cols-1")}>
        <div className="space-y-6">
          {cards.length > 0 ? (
            <MegaSection title="MLM software services">
              <MegaServicesCardDeck cards={cards} locale={locale} />
            </MegaSection>
          ) : null}

          {categories.length > 0 ? (
            <MegaSection title="Guided by who you are">
              <MegaServicesAudienceGrid categories={categories} locale={locale} />
            </MegaSection>
          ) : null}

          {!hasRightRail && serviceList.length > 0 ? (
            <MegaSection title="Tools & calculators">
              <MegaServicesResourcePills links={serviceList} locale={locale} />
            </MegaSection>
          ) : null}
        </div>

        {hasRightRail ? (
          <aside className="flex flex-col gap-5">
            {serviceDetails.length > 0 ? (
              <MegaSection title="Programs & accelerators">
                <div className="space-y-3">
                  {serviceDetails.map((detail) => (
                    <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {serviceList.length > 0 ? (
              <MegaSection title="Tools & calculators">
                <MegaServicesResourcePills links={serviceList} locale={locale} />
              </MegaSection>
            ) : null}

            {callouts.length > 0 ? (
              <div className="space-y-3">
                {callouts.map((callout) => (
                  <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
                ))}
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaServicesHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) {
    return null;
  }

  const heroCard = primary ?? secondary[0] ?? null;
  const supporting = primary ? secondary : secondary.slice(1);

  return (
    <div className={cn("grid gap-3", supporting.length > 0 ? "lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" : "")}>
      {heroCard ? <HighlightCardView card={heroCard} locale={locale} variant="hero" /> : null}
      {supporting.length > 0 ? (
        <div className="grid gap-3">
          {supporting.map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaServicesCardDeck({ cards, locale }: { cards: MegaCard[]; locale: SupportedLocale }) {
  const icons = [Cpu, TrendingUp, Wallet, Users, Layers, ClipboardList];

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <MegaServicesCard
          key={`${card.title}-${card.href ?? ''}`}
          card={card}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaServicesCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-gradient-to-br from-muted/20 via-background to-background p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
        {card.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">{card.description}</p>
        ) : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary">
          Explore service
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaServicesAudienceGrid({
  categories,
  locale
}: {
  categories: MegaMenuCategory[];
  locale: SupportedLocale;
}) {
  const icons = [Briefcase, Rocket, Sparkles];

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map((category, index) => (
        <MegaServicesAudienceCard
          key={`${category.title}-${category.href ?? ''}`}
          category={category}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaServicesAudienceCard({
  category,
  locale,
  Icon
}: {
  category: MegaMenuCategory;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const badge = category.badge?.trim() ? category.badge.trim() : null;
  const layout = category.layout === "list" ? "list" : "pill";
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, layout === "list" ? 4 : 6);

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-2">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              {badge}
            </span>
          ) : null}
          <p className="text-sm font-semibold text-foreground">{category.title}</p>
          {category.description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
          ) : null}
        </div>
      </div>

      {links.length > 0 ? (
        layout === "list" ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={`${link.title}-${link.href ?? ''}`}>
                <ResolvedLink
                  link={link}
                  locale={locale}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{link.title}</span>
                </ResolvedLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <ResolvedLink
                key={`${link.title}-${link.href ?? ''}`}
                link={link}
                locale={locale}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ArrowRight className="h-3 w-3" />
                <span>{link.title}</span>
              </ResolvedLink>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

function MegaServicesResourcePills({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 6);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((link) => (
        <ResolvedLink
          key={`${link.label}-${link.href ?? ''}`}
          link={{ title: link.label, href: link.href ?? null }}
          locale={locale}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/40 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          <span>{link.label}</span>
        </ResolvedLink>
      ))}
    </div>
  );
}

function MegaResourcesLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const hasHero = Boolean(primaryHighlight) || secondaryHighlights.length > 0;
  const hasCards = cards.length > 0;
  const hasGuides = serviceDetails.length > 0;
  const hasTools = serviceList.length > 0;
  const hasTracks = categories.length > 0;
  const hasUpdates = callouts.length > 0;
  const hasMainSection = hasCards || hasGuides || hasTools || hasTracks || hasUpdates;

  if (!hasHero && !hasMainSection && !seeAll) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {hasHero ? <MegaResourcesHero primary={primaryHighlight} secondary={secondaryHighlights} locale={locale} /> : null}

      {hasMainSection ? (
        <div className="grid gap-3 lg:grid-cols-12">
          {hasCards ? (
            <section className="lg:col-span-5 space-y-3">
              <MegaSection title="Resource kits">
                <MegaResourcesCardDeck cards={cards} locale={locale} />
              </MegaSection>
            </section>
          ) : null}

          {(hasGuides || hasTools) ? (
            <section className={cn(hasCards ? "lg:col-span-4" : "lg:col-span-6", "space-y-3")}>
              {hasGuides ? (
                <MegaSection title="Step-by-step guides">
                  <div className="space-y-3">
                    {serviceDetails.map((detail) => (
                      <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
                    ))}
                  </div>
                </MegaSection>
              ) : null}

              {hasTools ? (
                <MegaSection title="Quick tools">
                  <MegaResourcesPillStack links={serviceList} locale={locale} />
                </MegaSection>
              ) : null}
            </section>
          ) : null}

          {(hasTracks || hasUpdates) ? (
            <aside className={cn(hasCards && (hasGuides || hasTools) ? "lg:col-span-3" : "lg:col-span-4", "flex flex-col gap-3")}>
              {hasTracks ? (
                <MegaSection title="Audience tracks">
                  <MegaResourcesPersonaGrid categories={categories} locale={locale} />
                </MegaSection>
              ) : null}


            </aside>
          ) : null}
        </div>
      ) : null}

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaResourcesHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) {
    return null;
  }

  const heroCard = primary ?? secondary[0] ?? null;
  const supporting = primary ? secondary : secondary.slice(1);

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      {heroCard ? <HighlightCardView card={heroCard} locale={locale} variant="hero" /> : null}
      {supporting.length > 0 ? (
        <div className="grid gap-3">
          {supporting.map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaResourcesCardDeck({ cards, locale }: { cards: MegaCard[]; locale: SupportedLocale }) {
  const icons = [BookOpen, FileText, BarChart3, Sparkles];

  return (
    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <MegaResourcesCard
          key={`${card.title}-${card.href ?? ''}`}
          card={card}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaResourcesCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-2.5 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
        {card.description ? <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">{card.description}</p> : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold text-primary">
          Open resource
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaResourcesPersonaGrid({
  categories,
  locale
}: {
  categories: MegaMenuCategory[];
  locale: SupportedLocale;
}) {
  const icons = [Briefcase, Rocket, GraduationCap];

  return (
    <div className={cn("grid gap-2.5", categories.length > 1 ? "sm:grid-cols-1" : "sm:grid-cols-1")}>
      {categories.map((category, index) => (
        <MegaResourcesPersonaCard
          key={`${category.title}-${category.href ?? ''}`}
          category={category}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaResourcesPersonaCard({
  category,
  locale,
  Icon
}: {
  category: MegaMenuCategory;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const badge = category.badge?.trim() ?? null;
  const layout = category.layout === "list" ? "list" : "pill";
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, layout === "list" ? 4 : 5);

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-5 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-2">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              {badge}
            </span>
          ) : null}
          <p className="text-sm font-semibold text-foreground">{category.title}</p>
          {category.description ? <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p> : null}
        </div>
      </div>

      {links.length > 0 ? (
        layout === "list" ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={`${link.title}-${link.href ?? ''}`}>
                <ResolvedLink
                  link={link}
                  locale={locale}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{link.title}</span>
                </ResolvedLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <ResolvedLink
                key={`${link.title}-${link.href ?? ''}`}
                link={link}
                locale={locale}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ArrowRight className="h-3 w-3" />
                <span>{link.title}</span>
              </ResolvedLink>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

function MegaResourcesPillStack({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 8);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((link) => (
        <ResolvedLink
          key={`${link.label}-${link.href ?? ''}`}
          link={{ title: link.label, href: link.href ?? null }}
          locale={locale}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/95 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          <span>{link.label}</span>
        </ResolvedLink>
      ))}
    </div>
  );
}

function MegaCompanyLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const hasHero = Boolean(primaryHighlight) || secondaryHighlights.length > 0;
  const hasCards = cards.length > 0;
  const hasGuides = serviceDetails.length > 0;
  const hasTools = serviceList.length > 0;
  const hasTracks = categories.length > 0;
  const hasUpdates = callouts.length > 0;
  const hasMain = hasCards || hasGuides || hasTools || hasTracks || hasUpdates;

  if (!hasHero && !hasMain && !seeAll) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {hasHero ? (
        <MegaCompanyHero
          primary={primaryHighlight}
          secondary={secondaryHighlights}
          locale={locale}
        />
      ) : null}

      {hasMain ? (
        <div className="grid gap-3 lg:grid-cols-12">
          {hasCards ? (
            <section className="lg:col-span-5 space-y-3">
              <MegaSection title="Bpract at a glance">
                <MegaCompanyCardDeck cards={cards} locale={locale} />
              </MegaSection>
            </section>
          ) : null}

          {(hasGuides || hasTools) ? (
            <section className={cn(hasCards ? "lg:col-span-4" : "lg:col-span-6", "space-y-3")}>
              {hasGuides ? (
                <MegaSection title="How we work">
                  <MegaCompanyDetailStack details={serviceDetails} locale={locale} />
                </MegaSection>
              ) : null}

              {hasTools ? (
                <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary/5 via-background to-background p-4 shadow-sm">
                  <MegaSection title="Quick links">
                    <MegaCompanyQuickLinks links={serviceList} locale={locale} />
                  </MegaSection>
                </div>
              ) : null}
            </section>
          ) : null}

          {(hasTracks || hasUpdates) ? (
            <aside className={cn(hasCards && (hasGuides || hasTools) ? "lg:col-span-3" : "lg:col-span-4", "flex flex-col gap-3")}>
              {hasTracks ? (
                <MegaSection title="For you">
                  <MegaCompanyPersonaGrid categories={categories} locale={locale} />
                </MegaSection>
              ) : null}

              {hasUpdates ? (
                <MegaSection title="Stay connected">
                  <div className="space-y-3">
                    {callouts.map((callout) => (
                      <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
                    ))}
                  </div>
                </MegaSection>
              ) : null}
            </aside>
          ) : null}
        </div>
      ) : null}

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaCompanyHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) {
    return null;
  }

  const heroCard = primary ?? secondary[0] ?? null;
  const supporting = primary ? secondary : secondary.slice(1);

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      {heroCard ? <HighlightCardView card={heroCard} locale={locale} variant="hero" /> : null}
      {supporting.length > 0 ? (
        <div className="grid gap-2.5">
          {supporting.map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaCompanyCardDeck({ cards, locale }: { cards: MegaCard[]; locale: SupportedLocale }) {
  const icons = [Briefcase, Users, Globe, Sparkles];

  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {cards.map((card, index) => (
        <MegaCompanyCard
          key={`${card.title}-${card.href ?? ''}`}
          card={card}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaCompanyCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-2.5 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
        {card.description ? <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80">{card.description}</p> : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold text-primary">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaCompanyDetailStack({
  details,
  locale
}: {
  details: MegaDetail[];
  locale: SupportedLocale;
}) {
  if (details.length === 0) return null;

  return (
    <div className="space-y-3">
      {details.map((detail) => (
        <MegaDetailView key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
      ))}
    </div>
  );
}

function MegaCompanyQuickLinks({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 6);
  if (items.length === 0) return null;

  const icons = [Sparkles, Globe, ShieldCheck, Plug, BarChart3, Users];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {items.map((link, index) => {
        const cmsLink: CmsLink = { title: link.label, href: link.href ?? null };
        const Icon = icons[index % icons.length];
        return (
          <ResolvedLink
            key={`${link.label}-${link.href ?? ''}`}
            link={cmsLink}
            locale={locale}
            className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-background/95 p-3 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary">{link.label}</span>
          </ResolvedLink>
        );
      })}
    </div>
  );
}

function MegaCompanyPersonaGrid({
  categories,
  locale
}: {
  categories: MegaMenuCategory[];
  locale: SupportedLocale;
}) {
  if (categories.length === 0) return null;
  const icons = [Briefcase, Rocket, Users];

  return (
    <div className={cn("grid gap-2.5", categories.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1")}>
      {categories.map((category, index) => (
        <MegaCompanyPersonaCard
          key={`${category.title}-${category.href ?? ''}`}
          category={category}
          locale={locale}
          Icon={icons[index % icons.length]}
        />
      ))}
    </div>
  );
}

function MegaCompanyPersonaCard({
  category,
  locale,
  Icon
}: {
  category: MegaMenuCategory;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const layout = category.layout === "list" ? "list" : "pill";
  const badge = category.badge?.trim() ?? null;
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, layout === "list" ? 4 : 5);

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1 space-y-2">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {badge}
            </span>
          ) : null}
          <p className="text-sm font-semibold text-foreground">{category.title}</p>
          {category.description ? <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p> : null}
        </div>
      </div>

      {links.length > 0 ? (
        layout === "list" ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={`${link.title}-${link.href ?? ''}`}>
                <ResolvedLink
                  link={link}
                  locale={locale}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{link.title}</span>
                </ResolvedLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <ResolvedLink
                key={`${link.title}-${link.href ?? ''}`}
                link={link}
                locale={locale}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ArrowRight className="h-3 w-3" />
                <span>{link.title}</span>
              </ResolvedLink>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

function MegaModulesLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const hasRightRail = serviceDetails.length > 0 || serviceList.length > 0 || callouts.length > 0;

  return (
    <div className="flex flex-col gap-6">
      <MegaModulesHero primary={primaryHighlight} secondary={secondaryHighlights} locale={locale} />

      <div className={cn("grid gap-6", hasRightRail ? "lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" : "lg:grid-cols-1")}>
        <div className="space-y-6">
          {cards.length > 0 ? (
            <MegaSection title="Core modules">
              <MegaModulesCardDeck cards={cards} locale={locale} />
            </MegaSection>
          ) : null}

          {categories.length > 0 ? (
            <MegaSection title="Choose your path">
              <MegaModulesPersonaGrid categories={categories} locale={locale} />
            </MegaSection>
          ) : null}
        </div>

        {hasRightRail ? (
          <aside className="flex flex-col gap-5">
            {serviceDetails.length > 0 ? (
              <MegaSection title="Advisory & accelerators">
                <div className="space-y-3">
                  {serviceDetails.map((detail, index) => (
                    <MegaModulesDetailItem
                      key={`${detail.title}-${detail.href ?? ''}`}
                      detail={detail}
                      locale={locale}
                      Icon={index % 2 === 0 ? ShieldCheck : BarChart3}
                    />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {serviceList.length > 0 ? (
              <MegaSection title="Helpful resources">
                <MegaModulesResourcePills links={serviceList} locale={locale} />
              </MegaSection>
            ) : null}

            {callouts.length > 0 ? (
              <MegaSection title="Next steps">
                <div className="space-y-3">
                  {callouts.map((callout) => (
                    <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}
          </aside>
        ) : null}
      </div>

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaModulesHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) return null;

  const heroCard = primary ?? secondary[0] ?? null;
  const supporting = primary ? secondary : secondary.slice(1);

  return (
    <div className={cn("grid gap-4", supporting.length > 0 ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]" : "")}>
      {heroCard ? <HighlightCardView card={heroCard} locale={locale} variant="hero" /> : null}
      {supporting.length > 0 ? (
        <div className="grid gap-2.5">
          {supporting.map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaModulesCardDeck({ cards, locale }: { cards: MegaCard[]; locale: SupportedLocale }) {
  const icons = [ShieldCheck, Globe, Users, Sparkles, Wallet, Target];

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <MegaModulesCard key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} Icon={icons[index % icons.length]} />
      ))}
    </div>
  );
}

function MegaModulesCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground">{card.title}</p>
        {card.description ? <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p> : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary">
          Explore module
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaModulesPersonaGrid({
  categories,
  locale
}: {
  categories: MegaMenuCategory[];
  locale: SupportedLocale;
}) {
  const personaIcons = [Briefcase, Rocket];

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {categories.map((category, index) => (
        <MegaModulesPersonaCard
          key={`${category.title}-${category.href ?? ''}`}
          category={category}
          locale={locale}
          Icon={personaIcons[index % personaIcons.length]}
        />
      ))}
    </div>
  );
}

function MegaModulesPersonaCard({
  category,
  locale,
  Icon
}: {
  category: MegaMenuCategory;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const badge = category.badge?.trim() ?? null;
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, 4);

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-gradient-to-br from-muted/20 via-background to-background p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-2">
          {badge ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              {badge}
            </span>
          ) : null}
          <p className="text-sm font-semibold text-foreground">{category.title}</p>
          {category.description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
          ) : null}
        </div>
      </div>

      {links.length > 0 ? (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {links.map((link) => (
            <ResolvedLink
              key={`${link.title}-${link.href ?? ''}`}
              link={link}
              locale={locale}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/95 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowRight className="h-3 w-3" />
              <span>{link.title}</span>
            </ResolvedLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaModulesDetailItem({
  detail,
  locale,
  Icon
}: {
  detail: MegaDetail;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const base = (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-muted/50 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground">{detail.title}</p>
        {detail.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{detail.description}</p>
        ) : null}
        {detail.ctaLabel ? (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
            {detail.ctaLabel}
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </div>
  );

  const classes = "group block rounded-2xl border border-border/40 bg-background/95 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  if (detail.href) {
    return (
      <ResolvedLink link={{ title: detail.title, href: detail.href }} locale={locale} className={classes}>
        {base}
      </ResolvedLink>
    );
  }

  return <div className={classes}>{base}</div>;
}

function MegaModulesResourcePills({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 5);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((link) => (
        <ResolvedLink
          key={`${link.label}-${link.href ?? ''}`}
          link={{ title: link.label, href: link.href ?? null }}
          locale={locale}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/95 px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          <span>{link.label}</span>
        </ResolvedLink>
      ))}
    </div>
  );
}

function MegaPlansLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const planIcons = [Target, ShieldCheck, Trophy, Layers];

  return (
    <div className="flex flex-col gap-6">
      <MegaPlansHero primary={primaryHighlight} secondary={secondaryHighlights} locale={locale} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.slice(0, 4).map((card, index) => (
          <MegaPlansCard key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} Icon={planIcons[index % planIcons.length]} />
        ))}
      </div>

      {serviceDetails.length > 0 || serviceList.length > 0 || callouts.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            {serviceDetails.length > 0 ? (
              <MegaSection title="Plan support">
                <div className="space-y-3">
                  {serviceDetails.map((detail) => (
                    <MegaPlansDetailItem key={`${detail.title}-${detail.href ?? ''}`} detail={detail} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {serviceList.length > 0 ? (
              <MegaSection title="Tools to try">
                <MegaPlansResourcePills links={serviceList} locale={locale} />
              </MegaSection>
            ) : null}
          </div>

          {callouts.length > 0 ? (
            <div className="space-y-3">
              {callouts.map((callout) => (
                <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {seeAll ? (
        <div className="text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </div>
  );
}

function MegaPlansHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  if (!primary && secondary.length === 0) return null;

  const heroCard = primary ?? secondary[0] ?? null;

  return (
    <div className="grid gap-3">
      {heroCard ? <HighlightCardView card={heroCard} locale={locale} variant="hero" /> : null}
      {!primary && secondary.length > 1 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {secondary.slice(1, 3).map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaPlansCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border/30 bg-background/95 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground">{card.title}</p>
        {card.description ? <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p> : null}
      </div>
      {card.href ? (
        <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaPlansDetailItem({ detail, locale }: { detail: MegaDetail; locale: SupportedLocale }) {
  return (
    <ResolvedLink
      link={{ title: detail.title, href: detail.href ?? null }}
      locale={locale}
      className="group flex flex-col gap-2 rounded-2xl border border-border/40 bg-background/95 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <p className="text-sm font-semibold text-foreground">{detail.title}</p>
      {detail.description ? <p className="text-sm leading-relaxed text-muted-foreground">{detail.description}</p> : null}
      {detail.ctaLabel ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
          {detail.ctaLabel}
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : null}
    </ResolvedLink>
  );
}

function MegaPlansResourcePills({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 4);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((link) => (
        <ResolvedLink
          key={`${link.label}-${link.href ?? ''}`}
          link={{ title: link.label, href: link.href ?? null }}
          locale={locale}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/95 px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          <span>{link.label}</span>
        </ResolvedLink>
      ))}
    </div>
  );
}

function MegaDemoLayout({
  locale,
  primaryHighlight,
  secondaryHighlights,
  cards,
  categories,
  serviceDetails,
  serviceList,
  callouts,
  seeAll
}: {
  locale: SupportedLocale;
  primaryHighlight: HighlightCard | null;
  secondaryHighlights: HighlightCard[];
  cards: MegaCard[];
  categories: MegaMenuCategory[];
  serviceDetails: MegaDetail[];
  serviceList: LinkWithIcon[];
  callouts: MegaMenuCallout[];
  seeAll: CmsLink | null;
}) {
  const optionIcons = [Users, Rocket, Cpu, TrendingUp];
  const detailIcons = [ClipboardList, CalendarCheck, Plug];

  const hasRightRail = serviceDetails.length > 0 || serviceList.length > 0 || callouts.length > 0;
  const gridClass = cn(
    "grid gap-10",
    hasRightRail ? "lg:grid-cols-[1.65fr,1fr]" : "lg:grid-cols-1"
  );

  return (
    <>
      <div className={gridClass}>
        <div className="flex flex-col gap-8">
          <MegaDemoHero primary={primaryHighlight} secondary={secondaryHighlights} locale={locale} />

          {cards.length > 0 ? (
            <MegaSection title="Select your experience">
              <div className={cards.length > 1 ? "grid gap-4 md:grid-cols-2" : "space-y-4"}>
                {cards.map((card, index) => (
                  <MegaDemoOptionCard
                    key={`${card.title}-${card.href ?? ''}`}
                    card={card}
                    locale={locale}
                    Icon={optionIcons[index % optionIcons.length]}
                  />
                ))}
              </div>
            </MegaSection>
          ) : null}

          {categories.length > 0 ? (
            <MegaSection title="Popular focus areas">
              <div className="grid gap-4 md:grid-cols-2">
                {categories.map((category) => (
                  <MegaCategoryView key={`${category.title}-${category.href ?? ''}`} category={category} locale={locale} />
                ))}
              </div>
            </MegaSection>
          ) : null}
        </div>

        {hasRightRail ? (
          <aside className="flex flex-col gap-6">
            {serviceDetails.length > 0 ? (
              <MegaSection title="Included touchpoints">
                <div className="space-y-3">
                  {serviceDetails.map((detail, index) => (
                    <MegaDemoDetailItem
                      key={`${detail.title}-${detail.href ?? ''}`}
                      detail={detail}
                      locale={locale}
                      Icon={detailIcons[index % detailIcons.length]}
                    />
                  ))}
                </div>
              </MegaSection>
            ) : null}

            {serviceList.length > 0 ? (
              <MegaSection title="Helpful resources">
                <MegaDemoResourcePills links={serviceList} locale={locale} />
              </MegaSection>
            ) : null}

            {callouts.length > 0 ? (
              <MegaSection title="Next steps">
                <div className="space-y-3">
                  {callouts.map((callout) => (
                    <MegaCalloutView key={`${callout.title}-${callout.href ?? ''}`} callout={callout} locale={locale} />
                  ))}
                </div>
              </MegaSection>
            ) : null}
          </aside>
        ) : null}
      </div>

      {seeAll ? (
        <div className="mt-8 text-right">
          <ResolvedLink
            link={seeAll}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
          >
            <span>{seeAll.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        </div>
      ) : null}
    </>
  );
}

function MegaDemoHero({
  primary,
  secondary,
  locale
}: {
  primary: HighlightCard | null;
  secondary: HighlightCard[];
  locale: SupportedLocale;
}) {
  const heroCard = primary ?? secondary[0] ?? null;
  if (!heroCard) return null;

  const supporting = primary ? secondary : secondary.slice(1);

  return (
    <div className={cn("grid gap-4", supporting.length > 0 ? "xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" : "")}>
      <HighlightCardView card={heroCard} locale={locale} variant="hero" />
      {supporting.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {supporting.map((card) => (
            <HighlightCardView key={`${card.title}-${card.href ?? ''}`} card={card} locale={locale} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MegaDemoOptionCard({
  card,
  locale,
  Icon
}: {
  card: MegaCard;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const hasLink = Boolean(card.href);
  const bullets = Array.isArray(card.bullets)
    ? card.bullets.filter((bullet) => bullet && bullet.trim())
    : [];
  const normalizedTitle = card.title.toLowerCase();
  const linkLabel = normalizedTitle.includes("sandbox")
    ? "Launch sandbox"
    : normalizedTitle.includes("walkaround") || normalizedTitle.includes("online")
      ? "Book walkaround"
      : "Learn more";

  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group block h-full rounded-3xl border border-border/40 bg-background/95 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{card.title}</p>
            {card.description ? (
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            ) : null}
          </div>
        </div>

        {bullets.length > 0 ? (
          <ul className="space-y-2 text-xs text-muted-foreground">
            {bullets.map((bullet, index) => (
              <li key={`${bullet}-${index}`} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span className="flex-1 leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {hasLink ? (
          <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary">
            {linkLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </ResolvedLink>
  );
}

function MegaDemoDetailItem({
  detail,
  locale,
  Icon
}: {
  detail: MegaDetail;
  locale: SupportedLocale;
  Icon: ComponentType<{ className?: string }>;
}) {
  const classes =
    "group block rounded-2xl border border-border/40 bg-background/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const body = (
    <div className="flex gap-3">
      <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-muted/60 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground">{detail.title}</p>
        {detail.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">{detail.description}</p>
        ) : null}
        {detail.ctaLabel ? (
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
            {detail.ctaLabel}
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        ) : null}
      </div>
    </div>
  );

  if (detail.href) {
    return (
      <ResolvedLink link={{ title: detail.title, href: detail.href }} locale={locale} className={classes}>
        {body}
      </ResolvedLink>
    );
  }

  return <div className={classes}>{body}</div>;
}

function MegaDemoResourcePills({ links, locale }: { links: LinkWithIcon[]; locale: SupportedLocale }) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 8);
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((link) => (
        <ResolvedLink
          key={`${link.label}-${link.href ?? ""}`}
          link={{ title: link.label, href: link.href ?? null }}
          locale={locale}
          className="group inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          <span>{link.label}</span>
        </ResolvedLink>
      ))}
    </div>
  );
}
function getColSpanClass(span: number): string {
  switch (span) {
    case 3:
      return "lg:col-span-3";
    case 4:
      return "lg:col-span-4";
    case 5:
      return "lg:col-span-5";
    case 6:
      return "lg:col-span-6";
    case 8:
      return "lg:col-span-8";
    case 9:
      return "lg:col-span-9";
    case 12:
      return "lg:col-span-12";
    default:
      return "lg:col-span-12";
  }
}

function MegaSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">{title}</p>
      {children}
    </section>
  );
}

function MegaCategoryView({ category, locale }: { category: MegaMenuCategory; locale: SupportedLocale }) {
  const layout = category.layout === "list" ? "list" : "pill";
  const badge = category.badge?.trim() ? category.badge.trim() : null;
  const links = (category.links ?? []).filter((link) => link.title?.trim()).slice(0, layout === "list" ? 4 : 6);
  const titleLink = category.href ? { title: category.title, href: category.href } : null;

  return (
    <div className="group flex h-full min-h-[200px] flex-col rounded-2xl border border-border/40 bg-background/90 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
      <div className="space-y-2">
        {badge ? (
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            {badge}
          </span>
        ) : null}
        {titleLink ? (
          <ResolvedLink
            link={titleLink}
            locale={locale}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span>{category.title}</span>
            <span aria-hidden="true">-&gt;</span>
          </ResolvedLink>
        ) : (
          <span className="text-sm font-semibold text-foreground">{category.title}</span>
        )}
        {category.description ? <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p> : null}
      </div>
      {links.length > 0 ? (
        layout === "list" ? (
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={`${link.title}-${link.href ?? ""}`}>
                <ResolvedLink
                  link={link}
                  locale={locale}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>{link.title}</span>
                </ResolvedLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link) => (
              <ResolvedLink
                key={`${link.title}-${link.href ?? ""}`}
                link={link}
                locale={locale}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ArrowRight className="h-3 w-3" />
                <span>{link.title}</span>
              </ResolvedLink>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

function MegaCalloutView({ callout, locale }: { callout: MegaMenuCallout; locale: SupportedLocale }) {
  const tone = callout.tone ?? "default";
  const toneClass =
    tone === "primary"
      ? "border-sky-200 bg-sky-100 text-sky-900"
      : tone === "success"
        ? "border-emerald-200 bg-emerald-100 text-emerald-900"
        : tone === "warning"
          ? "border-amber-200 bg-amber-100 text-amber-900"
          : "border-border/40 bg-muted/30 text-foreground";
  const ctaClass = cn(
    "mt-auto inline-flex items-center gap-2 text-sm font-semibold",
    tone === "default" ? "text-primary" : "text-current"
  );

  const content = (
    <div className="flex h-full flex-col gap-3">
      <h4 className="text-sm font-semibold leading-tight">{callout.title}</h4>
      {callout.description ? <p className="text-sm leading-relaxed text-current/80">{callout.description}</p> : null}
      {callout.ctaLabel ? (
        <span className={ctaClass}>
          {callout.ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      ) : null}
    </div>
  );

  const classes = cn(
    "block rounded-2xl border p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    toneClass
  );

  if (callout.href) {
    return (
      <ResolvedLink link={{ title: callout.title, href: callout.href }} locale={locale} className={classes}>
        {content}
      </ResolvedLink>
    );
  }

  return <div className={classes}>{content}</div>;
}

function MegaQuickList({
  title,
  links,
  locale
}: {
  title: string;
  links: LinkWithIcon[];
  locale: SupportedLocale;
}) {
  const items = links.filter((link) => link.label?.trim()).slice(0, 8);
  if (items.length === 0) return null;

  return (
    <MegaSection title={title}>
      <ul className="space-y-2 text-sm">
        {items.map((link) => {
          const cmsLink: CmsLink = { title: link.label, href: link.href ?? null };
          return (
            <li key={`${link.label}-${link.href ?? ""}`}>
              <ResolvedLink
                link={cmsLink}
                locale={locale}
                className="group inline-flex w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                <span className="truncate">{link.label}</span>
              </ResolvedLink>
            </li>
          );
        })}
      </ul>
    </MegaSection>
  );
}

function HighlightCardView({
  card,
  locale,
  variant = "standard"
}: {
  card: HighlightCard;
  locale: SupportedLocale;
  variant?: "hero" | "standard";
}) {
  const img = card.imageUrl;

  const heroContent = (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/10 bg-gradient-to-br from-primary/25 via-primary/10 to-background p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl">
      {img ? (
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          {/* <Image src={img} alt={card.title} width={640} height={360} className="h-48 w-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold leading-tight text-foreground">{card.title}</h3>
        {card.description ? <p className="mt-3 text-sm text-foreground/80">{card.description}</p> : null}
        {card.ctaLabel && card.href ? (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:translate-x-1">
            {card.ctaLabel}
            <span aria-hidden="true">-&gt;</span>
          </span>
        ) : null}
      </div>
    </div>
  );

  const standardContent = (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/40 bg-background/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg">
      <div>
        {img ? (
          <SmartImage src={img} alt={card.title} width={640} height={360} className="mb-4 h-24 w-full rounded-xl object-cover" />
        ) : null}
        <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
        {card.description ? <p className="mt-2 text-sm text-muted-foreground">{card.description}</p> : null}
      </div>
      {card.ctaLabel && card.href ? (
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
          {card.ctaLabel}
          <span aria-hidden="true">-&gt;</span>
        </span>
      ) : null}
    </div>
  );

  const content = variant === "hero" ? heroContent : standardContent;

  if (card.href) {
    return (
      <ResolvedLink
        link={{ title: card.title, href: card.href ?? null }}
        locale={locale}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </ResolvedLink>
    );
  }

  return <div className="block h-full">{content}</div>;
}

function MegaCardView({ card, locale }: { card: MegaCard; locale: SupportedLocale }) {
  return (
    <ResolvedLink
      link={{ title: card.title, href: card.href ?? null }}
      locale={locale}
      className="group block h-full rounded-2xl border border-border/40 bg-background/90 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <p className="text-sm font-semibold text-foreground group-hover:text-primary">{card.title}</p>
      {card.description ? <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground/80">{card.description}</p> : null}
    </ResolvedLink>
  );
}

function MegaDetailView({ detail, locale }: { detail: MegaDetail; locale: SupportedLocale }) {
  return (
    <ResolvedLink
      link={{ title: detail.title, href: detail.href ?? null }}
      locale={locale}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/90 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {detail.imageUrl ? <SmartImage src={detail.imageUrl} alt={detail.title} width={640} height={360} className="h-32 w-full object-cover" /> : null}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-base font-semibold text-foreground group-hover:text-primary">{detail.title}</h4>
        {detail.description ? <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground/80">{detail.description}</p> : null}
        {detail.ctaLabel ? (
          <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary">
            {detail.ctaLabel}
            <span aria-hidden="true">-&gt;</span>
          </span>
        ) : null}
      </div>
    </ResolvedLink>
  );
}

function LinkWithIconView({ link, locale }: { link: LinkWithIcon; locale: SupportedLocale }) {
  return (
    <ResolvedLink
      link={{ title: link.label, href: link.href ?? null }}
      locale={locale}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/80 p-3 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:shadow-lg">
        {link.iconUrl ? <SmartImage src={link.iconUrl} alt="" width={24} height={24} className="h-6 w-6" /> : null}
        <span className="text-sm font-medium text-foreground group-hover:text-primary">{link.label}</span>
      </div>
    </ResolvedLink>
  );
}

function ResolvedLink({
  link,
  locale,
  className,
  children
}: {
  link: CmsLink;
  locale: SupportedLocale;
  className?: string;
  children?: ReactNode;
}) {
  const resolved = resolveHref(link.href ?? null, locale);
  const content = children ?? link.title;
  if (!link.href || resolved.external) {
    return (
      <a
        href={resolved.href}
        target={resolved.external ? "_blank" : undefined}
        rel={resolved.external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={resolved.href} className={className}>
      {content}
    </Link>
  );
}

function CtaButton({ href, label, external }: { href: string; label: string; external: boolean }) {
  return (
    <Button asChild size="sm" className="rounded-full px-5">
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={href}>{label}</Link>
      )}
    </Button>
  );
}

function MobileMenu({
  open,
  onClose,
  locale,
  siteName,
  navItems,
  headerCta,
  languageLabel,
  languageAriaLabel,
  languageOptions,
  utilityLinks,
  announcement
}: {
  open: boolean;
  onClose: () => void;
  locale: SupportedLocale;
  siteName: string;
  navItems: NavItem[];
  headerCta?: CmsLink | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  languageOptions: LanguageOption[];
  utilityLinks: TopUtilityLink[];
  announcement: Announcement | null;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">{siteName}</span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-border/60 p-2 text-foreground transition hover:bg-muted"
          aria-label="Close navigation menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6 space-y-5 overflow-y-auto pb-10">
        {announcement ? (
          <div className="rounded-2xl bg-primary/10 px-4 py-3 text-xs text-primary">
            <a href={announcement.href ? resolveHref(announcement.href, locale).href : "#"} className="inline-flex items-center gap-2">
              <span>{announcement.message}</span>
              {announcement.label ? (
                <span className="inline-flex items-center gap-1 text-primary/80">
                  {announcement.label}
                  <span aria-hidden="true">-&gt;</span>
                </span>
              ) : null}
            </a>
          </div>
        ) : null}

        <div className="rounded-3xl border border-border/50 bg-muted/20 p-4">
          <div className="flex items-center justify-between gap-4">
            <LanguageSwitcher
              locale={locale}
              label={null}
              ariaLabel={languageAriaLabel ?? "Select language"}
              options={languageOptions}
            />
            <ThemeToggle />
          </div>
        </div>

        {utilityLinks.length > 0 ? (
          <div className="rounded-3xl border border-border/60 bg-muted/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a href={resolveHref(link.href, locale).href} className="inline-flex items-center gap-2 transition hover:text-primary">
                    <ArrowRight className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="space-y-6">
          {navItems.map((item) => (
            <div key={item.label} className="space-y-4 rounded-3xl border border-border/40 bg-background p-5 shadow-sm">
              <HeaderLink item={item} locale={locale} />
              {item.kind === "mega" && item.mega ? <MegaMobileSections mega={item.mega} locale={locale} /> : null}
            </div>
          ))}
        </div>
        {headerCta ? (
          <ResolvedLink
            link={headerCta}
            locale={locale}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow"
          >
            {headerCta.title}
          </ResolvedLink>
        ) : null}
      </div>
    </div>
  );
}

function MegaMobileSections({ mega, locale }: { mega: MegaMenu; locale: SupportedLocale }) {
  const heroHighlight = mega.highlights[0] ?? null;
  const secondaryHighlights = heroHighlight ? mega.highlights.slice(1) : mega.highlights;
  const categories = mega.categories ?? [];
  const callouts = mega.callouts ?? [];

  return (
    <div className="space-y-6 text-muted-foreground">
      {heroHighlight ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Spotlight</p>
          <HighlightCardView card={heroHighlight} locale={locale} variant="hero" />
        </div>
      ) : null}
      {mega.cards.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Featured</p>
          <div className="space-y-3">
            {mega.cards.map((card) => (
              <MegaCardView key={`${card.title}-${card.href ?? ""}`} card={card} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
      {secondaryHighlights.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Highlights</p>
          <div className="space-y-3">
            {secondaryHighlights.map((card) => (
              <HighlightCardView key={`${card.title}-${card.href ?? ""}`} card={card} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
      {categories.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Explore</p>
          <div className="space-y-3">
            {categories.map((category) => {
              const layout = category.layout === "list" ? "list" : "pill";
              const badge = category.badge?.trim() ? category.badge.trim() : null;
              const links = category.links ?? [];
              const titleLink = category.href ? { title: category.title, href: category.href } : null;
              return (
                <div
                  key={`${category.title}-${category.href ?? ""}`}
                  className="space-y-3 rounded-2xl border border-border/40 bg-background/90 p-4 shadow-sm"
                >
                  {badge ? (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                      {badge}
                    </span>
                  ) : null}
                  <div className="space-y-2">
                    {titleLink ? (
                      <ResolvedLink
                        link={titleLink}
                        locale={locale}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                      >
                        <span>{category.title}</span>
                        <span aria-hidden="true">-&gt;</span>
                      </ResolvedLink>
                    ) : (
                      <span className="text-sm font-semibold text-foreground">{category.title}</span>
                    )}
                    {category.description ? <p className="text-sm text-muted-foreground">{category.description}</p> : null}
                  </div>
                  {links.length > 0 ? (
                    layout === "list" ? (
                      <div className="space-y-2 text-sm">
                        {links.map((link) => (
                          <ResolvedLink
                            key={`${link.title}-${link.href ?? ""}`}
                            link={link}
                            locale={locale}
                            className="block text-muted-foreground transition hover:text-primary"
                          >
                            {link.title}
                          </ResolvedLink>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {links.map((link) => (
                          <ResolvedLink
                            key={`${link.title}-${link.href ?? ""}`}
                            link={link}
                            locale={locale}
                            className="inline-flex items-center rounded-full border border-border/40 bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                          >
                            {link.title}
                          </ResolvedLink>
                        ))}
                      </div>
                    )
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {mega.serviceDetails.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Solutions</p>
          <div className="space-y-3">
            {mega.serviceDetails.map((detail) => (
              <MegaDetailView key={`${detail.title}-${detail.href ?? ""}`} detail={detail} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
      {mega.serviceList.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">More from us</p>
          <div className="space-y-2">
            {mega.serviceList.map((link) => (
              <LinkWithIconView key={`${link.label}-${link.href ?? ""}`} link={link} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
      {callouts.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">Take action</p>
          <div className="space-y-3">
            {callouts.map((callout) => (
              <MegaCalloutView key={`${callout.title}-${callout.href ?? ""}`} callout={callout} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
      {mega.seeAll ? (
        <ResolvedLink link={mega.seeAll} locale={locale} className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
          <span>{mega.seeAll.title}</span>
          <span aria-hidden="true">-&gt;</span>
        </ResolvedLink>
      ) : null}
    </div>
  );
}
