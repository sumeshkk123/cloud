import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  Fingerprint,
  KeyRound,
  Lock,
  Scan,
  Shield,
  ShieldCheck
} from "lucide-react";
import {
  CloudCheck,
  FingerprintSimple,
  LockKeyOpen,
  ShieldCheckered,
  WifiHigh
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type ArchitectureLayer = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type AuthMethod = {
  name: string;
  detail: string;
  reinforcement: string;
  icon: IconType;
};

type Safeguard = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Identity-first controls",
    description: "Grant access through layered verification, contextual rules, and audited session policies.",
    icon: ShieldCheck
  },
  {
    title: "Adaptive challenge flow",
    description: "Progressive checks respond to device, location, and behavioural signals in real time.",
    icon: Fingerprint
  },
  {
    title: "Encrypted everywhere",
    description: "TLS and data-at-rest encryption protect distributor credentials across every touchpoint.",
    icon: Lock
  }
];

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    heading: "Zero-trust perimeter",
    summary:
      "Our platform treats every request as untrusted until validated, reducing the exposure of open-network deployments.",
    bullets: [
      "Public endpoints hardened with rate limiting and bot defence.",
      "Role-aware firewalls keep admin and distributor surfaces isolated.",
      "Continuous device posture checks before privilege escalation."
    ],
    icon: Shield
  },
  {
    heading: "Intelligent verification",
    summary:
      "Combines knowledge, possession, and inherence factors so sensitive operations remain uncompromised.",
    bullets: [
      "Captcha, OTP, and Duo prompts triggered by risk scoring.",
      "Biometric-ready workflows for RFID, fingerprint, or facial ID.",
      "Kerberos-derived session governance with expiry safeguards."
    ],
    icon: FingerprintSimple
  },
  {
    heading: "Observable operations",
    summary:
      "Security analytics surface anomalies and empower rapid remediation across global teams.",
    bullets: [
      "Centralised dashboard tracks login anomalies by territory.",
      "Immutable audit logs stream to your SIEM of choice.",
      "Automated notifications alert leadership of suspicious activity."
    ],
    icon: Activity
  }
];

const AUTH_METHODS: AuthMethod[] = [
  {
    name: "Kerberos-based identity",
    detail:
      "Distributors and admins authenticate with an enterprise-grade ticketing model, pairing usernames with hardened passwords.",
    reinforcement: "Ideal for campuses or global organisations needing provable identity assertions across systems.",
    icon: KeyRound
  },
  {
    name: "Cloud web certificates",
    detail:
      "Secure web servers issue certificates to encrypt traffic and restrict access to authorised stakeholders.",
    reinforcement: "Ensures sensitive enrolment or payout data travels through encrypted, trusted channels.",
    icon: CloudCheck
  },
  {
    name: "Central touchstone SSO",
    detail:
      "A single sign-on layer simplifies web app access; once authenticated, users glide across modules without re-entering credentials.",
    reinforcement: "Supports multiple auth factors and builds on the existing Kerberos scaffold for continuity.",
    icon: ShieldCheckered
  },
  {
    name: "Duo two-factor approvals",
    detail:
      "Landlines or smartphones receive push confirmations so sensitive actions require deliberate user consent.",
    reinforcement: "Mitigates credential stuffing and phishing risks with a friendly yet firm secondary check.",
    icon: WifiHigh
  },
  {
    name: "Biometric & RFID pairing",
    detail:
      "Optional hardware layers blend RFID tokens with fingerprint validation before unlocking high-value workflows.",
    reinforcement: "Pairs with magnetic locking systems, ZigBee/Wi-Fi connectivity, and camera evidence capture.",
    icon: FingerprintSimple
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Real-time posture scoring",
    description:
      "Evaluate device, location, and user behaviour to determine when to escalate challenges or flag anomalies.",
    icon: Scan
  },
  {
    title: "Secure content delivery",
    description:
      "Edge caching, dynamic compression, and minified payloads keep replicated portals fast without exposing data.",
    icon: Cpu
  },
  {
    title: "Resilient backup cadence",
    description:
      "Automated backups with encrypted storage ensure quick recovery while protecting historic identities and payouts.",
    icon: CloudCheck
  },
  {
    title: "Granular privilege orchestration",
    description:
      "Fine-grained permissions give leaders the tools to approve, revoke, or delegate access instantly.",
    icon: LockKeyOpen
  }
];

const READINESS_CHECKLIST: string[] = [
  "Audit current authentication flows and identify high-risk journeys.",
  "Decide which factors—password, possession, inherence—are mandatory for each role.",
  "Align replication, CRM, and payment integrations with single sign-on policies.",
  "Document incident response timelines and notification paths across regions."
];

const PLATFORM_CAPABILITIES: string[] = [
  "Secure MLM software foundation",
  "Advanced reporting and anomaly dashboards",
  "Ticketing, SMS, and support escalation",
  "Laravel-powered authentication hardening",
  "Dynamic compression and caching",
  "Privilege management with audit logs",
  "Theme changing options with access control",
  "AI-ready analytics for behavioural insights"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Secure Authentication System for MLM Software";
  const description =
    "Protect every distributor and admin with Cloud MLM Software's secure authentication system. Layered verification, encryption, and monitoring designed for enterprise-scale MLM networks.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/secure-authentication-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SecureAuthenticationPageProps = {
  params: { lang: SupportedLocale };
};

export default function SecureAuthenticationPage({ params }: SecureAuthenticationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-28 pb-28">
      <section className="relative overflow-hidden border-b border-border/60 bg-[#05070f] py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(129,140,248,0.2),transparent_60%),radial-gradient(circle_at_20%_82%,rgba(148,163,184,0.18),transparent_55%)]" aria-hidden />
        <div className="container space-y-14">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/50 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Secure Authentication System
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Enterprise-grade authentication for open network MLM deployments.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software helps you safeguard sensitive payouts, identities, and growth data. Combine layered authentication, encryption, and behavioural analytics so your teams work confidently across public networks.
              </p>
              <p className="text-sm text-slate-200/70">
                Empower every distributor with the right level of access while corporate leaders maintain complete oversight of threats, anomalies, and compliance obligations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Design a security workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/50 text-sky-100 hover:bg-sky-500/10">
                <Link href={demoHref}>
                  Review the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-slate-100">{card.title}</h2>
                    <p className="text-sm text-slate-200/80">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ensuring security across public-facing MLM infrastructures.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software supports open network architectures where multiple locations, devices, and downlines collaborate. We remove the guesswork with a secure authentication system that blocks unauthorised access, arrests spam attacks, and keeps sensitive records locked to approved users.
          </p>
          <p className="text-sm text-muted-foreground">
            Captcha challenges, two-step verification, and behavioural scoring reinforce every login event. Before anyone reaches your control centre, our security layer validates identity, context, and device integrity—keeping the experience fast for good actors and unforgiving for threats.
          </p>
          <p className="text-sm text-muted-foreground">
            Combine software safeguards with optional hardware protection, including RFID and fingerprint verification, magnetic locks, and camera logs for forensic traceability.
          </p>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h3 className="text-base font-semibold text-primary">Security posture priorities</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Shield className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Limit lateral movement by isolating admin, distributor, and customer surfaces.</span>
            </li>
            <li className="flex items-start gap-3">
              <FingerprintSimple className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Adopt multi-factor authentication that evolves with the risk profile of each request.</span>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Feed security events into automated monitoring so teams can act before issues escalate.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Authentication methods designed for resilience.
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose the mix of protocols that suits your compliance landscape. Whether you rely on enterprise SSO, mobile approvals, or biometric checkpoints, Cloud MLM Software assembles a secure flow from the moment credentials are requested.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {AUTH_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <article key={method.name} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{method.name}</h3>
                  <p className="text-sm text-muted-foreground">{method.detail}</p>
                </div>
                <p className="text-xs text-muted-foreground">{method.reinforcement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational safeguards that keep threats out.
          </h2>
          <p className="text-sm text-muted-foreground">
            Beyond login screens, our platform orchestrates performance, backups, and permission models so your growth engine remains unstoppable.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {SAFEGUARDS.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
        <div className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h2 className="text-2xl font-semibold text-foreground">
            Readiness checklist before rollout.
          </h2>
          <p className="text-sm text-muted-foreground">
            Gather your teams and align on priorities so every factor of authentication lands smoothly across the field.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {READINESS_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <blockquote className="rounded-3xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground">
            “Security is never a single feature. It is the continuous choreography of authentication, monitoring, and rapid response. We pair decades of MLM expertise with modern zero-trust practices so your organisation stays resilient.”
          </blockquote>
          <p className="text-sm text-muted-foreground">
            Our architects partner with your compliance, IT, and field leaders to refine adoption plans. From pilot groups to global rollout, we embed education, support, and analysis in every milestone.
          </p>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Platform capabilities that reinforce authentication.
          </h2>
          <p className="text-sm text-muted-foreground">
            Your secure login experience ties directly into the rest of Cloud MLM Software—ensuring payments, communications, and analytics inherit the same governance.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {PLATFORM_CAPABILITIES.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-primary/25 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to strengthen your authentication posture?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current security landscape or invite us to run a discovery. We will help you architect multi-factor experiences, align integrations, and coach the field through every change.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Speak with a security specialist
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more capabilities
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Activation checklist
              </p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p>✓ Confirm regulatory requirements across regions.</p>
                <p>✓ Map authentication flows to CRM, payment, and replication modules.</p>
                <p>✓ Prepare communication templates for distributors and admins.</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                With these insights, we deliver prototypes, rollout schedules, and adoption playbooks tailored to your organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
