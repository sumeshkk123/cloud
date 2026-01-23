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
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  FileText,
  KeyRound,
  ShieldCheck,
  ShieldHalf,
  ShieldPlus,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type Stat = {
  label: string;
  value: string;
  description: string;
};

type Pillar = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Control = {
  title: string;
  description: string;
  icon?: ComponentType<{ className?: string }>;
};

type Resource = {
  label: string;
  href: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Uptime commitment",
    value: "99.9%",
    description: "Redundant infrastructure and proactive monitoring"
  },
  {
    label: "Security reviews",
    value: "Quarterly",
    description: "Independent penetration testing and audits"
  },
  {
    label: "Incident coverage",
    value: "24 / 7",
    description: "Globally distributed response team"
  }
];

const SECURITY_PILLARS: Pillar[] = [
  {
    title: "Secure architecture",
    description: "Defence-in-depth hardens infrastructure, networking, and application layers from the start.",
    icon: ShieldCheck
  },
  {
    title: "Governed access",
    description: "Least-privilege permissions, enforced MFA, SSO options, and detailed audit trails keep every action accountable.",
    icon: KeyRound
  },
  {
    title: "Resilience & transparency",
    description: "Automated backups, tested disaster recovery plans, and clear communication keep your teams informed.",
    icon: Cloud
  }
];

const CONTROLS: Control[] = [
  {
    title: "Infrastructure controls",
    description: "Dedicated environments, hardened OS baselines, encrypted volumes, DDoS protection, and continuous vulnerability scanning.",
    icon: ShieldPlus
  },
  {
    title: "Application safeguards",
    description: "Secure SDLC, static and dynamic analysis, dependency monitoring, and role-aware admin consoles with activity feeds.",
    icon: FileText
  },
  {
    title: "Data lifecycle",
    description: "Encryption in transit and at rest, residency options, retention management, and controlled data destruction.",
    icon: Cloud
  },
  {
    title: "Compliance & governance",
    description: "Policies aligned with GDPR, PCI-ready payment integrations, and contractual security commitments for enterprise teams.",
    icon: ShieldHalf
  }
];

const ACCESS_CONTROLS: Control[] = [
  {
    title: "Identity & access management",
    description: "SSO/SAML support, enforced MFA, SCIM provisioning, and granular roles for admins, field leaders, and partners.",
    icon: KeyRound
  },
  {
    title: "Operational oversight",
    description: "Quarterly access reviews, just-in-time elevation for support engineers, customer-managed API keys, and IP allow lists.",
    icon: ShieldPlus
  }
];

const MONITORING: Control[] = [
  {
    title: "Threat detection",
    description: "Centralised logging, anomaly detection, and alerting across infrastructure, application, and integration layers.",
    icon: Activity
  },
  {
    title: "Incident response",
    description: "Documented plan with 24/7 on-call engineers, executive escalation paths, and transparent post-incident reporting.",
    icon: AlertTriangle
  }
];

const RESOURCES: Resource[] = [
  { label: "Security & trust overview", href: "/documents/" },
  { label: "Latest release changelog", href: "/resources/launch-readiness" },
  { label: "Request compliance package", href: "mailto:[email protected]" }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software protect customer data?",
    answer:
      "Data is encrypted in transit and at rest using industry-standard ciphers. We segment production networks, restrict access by role, and continuously scan for vulnerabilities."
  },
  {
    question: "Do you support regional data residency?",
    answer:
      "Yes. Deployments can align with your regional compliance needs while maintaining the same security and monitoring controls."
  },
  {
    question: "How are integrations secured?",
    answer:
      "Integrations rely on secure APIs with token-based authentication, signed requests, and optional IP allow lists or VPN tunnels."
  },
  {
    question: "What happens if there’s an incident?",
    answer:
      "Our 24/7 response team investigates immediately, mitigates impact, communicates status updates, and shares post-incident findings along with remediation."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Security & Trust | Cloud MLM Software";
  const description =
    "Learn how Bpract Software Solutions protects Cloud MLM Software with secure infrastructure, access governance, and transparent incident response.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/security", locale)
    }
  };
}

type SecurityPageProps = {
  params: { lang: SupportedLocale };
};

export default function SecurityPage({ params }: SecurityPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Security & trust
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Protecting your distributors, customers, and data is our first priority.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Cloud MLM Software is engineered with layered security, privacy safeguards, and transparent processes. We help network marketing leaders meet regulatory standards and keep sensitive information safe.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to security team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:[email protected]">
                  Request documentation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Security pillars</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {SECURITY_PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Security controls</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {CONTROLS.map((control) => (
            <article key={control.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              {control.icon ? (
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <control.icon className="h-6 w-6" aria-hidden />
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-foreground">{control.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{control.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Access governance</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ACCESS_CONTROLS.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              {item.icon ? (
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Monitoring & response</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {MONITORING.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              {item.icon ? (
                <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Resources & documentation</h2>
        <ul className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {RESOURCES.map((resource) => (
            <li key={resource.label} className="flex items-start gap-2 rounded-3xl border border-border/60 bg-background p-4 shadow-sm">
              <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <Link
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition hover:text-primary"
              >
                {resource.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition">
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a custom security review?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Schedule a session with our security and compliance team. We’ll walk through infrastructure, controls, and documentation for your stakeholders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Request a review
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Contact support
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
