import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type ContactMethod = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: Array<{ label: string; value: string; href?: string }>;
};

type SupportRoute = {
  title: string;
  description: string;
  href: string;
  label: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    title: "Call our specialists",
    description: "We’re available Monday to Saturday, 9:00 AM – 7:00 PM IST for project discussions, support, and partnerships.",
    icon: Phone,
    details: [
      { label: "Primary", value: "+91 85901 37119", href: "tel:+918590137119" },
      { label: "24/7 line", value: "+91 81291 84448", href: "tel:+918129184448" }
    ]
  },
  {
    title: "Email Bpract",
    description: "Share briefs, RFPs, or general questions. We typically respond within one business day.",
    icon: Mail,
    details: [
      { label: "General", value: "[email protected]", href: "mailto:[email protected]" },
      { label: "Careers", value: "[email protected]", href: "mailto:[email protected]" }
    ]
  },
  {
    title: "Visit our office",
    description: "Drop by our Kozhikode Cyberpark workspace to collaborate in person.",
    icon: Globe2,
    details: [
      {
        label: "Address",
        value: "Unit 1A, 4th Floor, KSITIL SEZ, Cyberpark Campus, Sahya Building, Nillikkode P.O, Kozhikode 673017, Kerala, India",
        href: "https://maps.app.goo.gl/oKWZ1cWmVhSAYnoo9"
      }
    ]
  }
];

const SUPPORT_ROUTES: SupportRoute[] = [
  {
    title: "Book a discovery call",
    description: "Schedule a 30-minute session to explore how Bpract can support your AI, network marketing, or digital marketing roadmap.",
    href: "mailto:[email protected]?subject=Schedule%20a%20Discovery%20Call",
    label: "Email to schedule"
  },
  {
    title: "Request a proposal",
    description: "Send us your project goals, timeline, and budget—we’ll prepare a tailored plan and quote.",
    href: "mailto:[email protected]?subject=Request%20for%20Proposal",
    label: "Send brief"
  },
  {
    title: "Join our partner network",
    description: "Explore agency, reseller, or technology partnerships across network marketing and automation products.",
    href: "https://bpract.com/partners/",
    label: "View partnership options"
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which services can Bpract help with?",
    answer:
      "Bpract delivers end-to-end services covering custom software, AI copilots, network marketing platforms, ecommerce, and full-stack digital marketing."
  },
  {
    question: "How quickly will someone respond?",
    answer:
      "We reply to new enquiries within one business day. For urgent matters, use the 24/7 hotline listed above."
  },
  {
    question: "Do you work with international teams?",
    answer:
      "Yes. We support clients across India, the Middle East, Europe, and North America with distributed delivery and overlapping hours."
  },
  {
    question: "Is post-launch support available?",
    answer:
      "Every engagement includes maintenance and optimisation options, plus managed services for long-term partnerships."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Contact Bpract Software Solutions";
  const description =
    "Reach the Bpract Software Solutions team for project consultations, support, or partnerships. Schedule a call, email the specialists, or visit our Kozhikode office.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/contact", locale)
    }
  };
}

type ContactPageProps = {
  params: { lang: SupportedLocale };
};

export default function ContactPage({ params }: ContactPageProps) {
  const locale = resolveLocale(params.lang);
  const brochureHref = "https://bpract.com/wp-content/uploads/2023/12/Bpract-Company-Brochure.pdf";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <div className="max-w-4xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" aria-hidden />
                Let’s talk about your next launch
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Contact Bpract Software Solutions for AI, network marketing, and digital growth programmes.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Share your ideas, request a roadmap, or ask about partnerships. Our specialists respond within one business day—and faster for urgent needs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="mailto:[email protected]">
                    Email us now
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+918590137119">
                    Call +91 85901 37119
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={brochureHref} target="_blank" rel="noopener noreferrer">
                    Download brochure
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden overflow-hidden rounded-3xl border border-border/60 bg-background/60 shadow-sm md:block">
              <Image
                src="https://bpract.com/wp-content/uploads/2023/07/contact-bpract.webp"
                alt="Bpract Software Solutions contact workspace"
                width={900}
                height={643}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the right channel</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            However you prefer to collaborate—calls, email, or in person—we’re ready.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CONTACT_METHODS.map((method) => (
            <article key={method.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <method.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{method.title}</h3>
              <p className="text-sm text-muted-foreground">{method.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {method.details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-2">
                    <span className="text-primary">{detail.label}:</span>
                    {detail.href ? (
                      <Link href={detail.href} className="transition hover:text-primary">
                        {detail.value}
                      </Link>
                    ) : (
                      <span>{detail.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we can help next</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Share your needs and we’ll connect you with the right product, engineering, or marketing specialist.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUPPORT_ROUTES.map((route) => (
            <article key={route.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{route.title}</h3>
              <p className="text-sm text-muted-foreground">{route.description}</p>
              <Button asChild variant="outline" className="mt-auto w-fit">
                <Link href={route.href} target={route.href.startsWith("http") ? "_blank" : undefined} rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {route.label}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Office hours</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We align to IST and provide overlapping coverage for EMEA and North American partners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <Clock className="h-4 w-4" aria-hidden />
              Standard availability
            </span>
            <p className="text-sm text-muted-foreground">
              Monday – Saturday, 9:00 AM to 7:00 PM IST. Dedicated project teams align to your preferred sprint ceremonies and stand-ups.
            </p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <MessageCircle className="h-4 w-4" aria-hidden />
              24/7 support
            </span>
            <p className="text-sm text-muted-foreground">
              Use the hotline or support email for urgent requests. Managed service clients receive guaranteed SLAs across incidents and enhancements.
            </p>
          </article>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Quick answers before we hop on a call.
          </p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition">
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Share your idea and let’s build it together</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Whether it’s AI copilots, network marketing automation, or a full digital marketing overhaul, Bpract brings a practical mindset and best practices to every project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Send your brief
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="tel:+918590137119">
                Speak with a specialist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
