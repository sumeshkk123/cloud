import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Offering = { title: string; points: string[] };

const OFFERINGS: Offering[] = [
  {
    title: "Why enterprises choose us",
    points: [
      "Web-based, self-hosted control with optional managed operations.",
      "Modular compensation engine for binary, matrix, hybrid, and bespoke plans.",
      "AI-assisted insights for fraud detection, churn, and bonus forecasting.",
      "Executive success playbooks and field enablement assets for every region."
    ]
  },
  {
    title: "What we deliver",
    points: [
      "Plan modelling, sandbox testing, and go-live governance.",
      "Mobile-first CRM, replicated sites, e-commerce, and community tooling.",
      "Integrations with payment gateways, ERPs, ecommerce, and analytics stacks.",
      "Sustainability, accessibility, and localisation baked into every deployment."
    ]
  }
];

interface AboutCompanyOfferingsSectionProps {
  contactHref: string;
  servicesHref: string;
}

export function AboutCompanyOfferingsSection({ contactHref, servicesHref }: AboutCompanyOfferingsSectionProps) {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {OFFERINGS.map((offering) => (
            <article key={offering.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">{offering.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {offering.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">Where technology meets people</h3>
              <p className="text-sm text-muted-foreground">
                Collaboration drives every successful launch. We work as an extension of your leadership team—pairing
                compensation strategists, solution architects, designers, and AI specialists with your stakeholders.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default">
                <Link href={servicesHref}>
                  Discover our services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={contactHref}>
                  Schedule a discovery call
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
