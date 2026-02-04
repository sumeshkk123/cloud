import type { ComponentType } from "react";
import { Handshake, Rocket, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

type Pillar = { title: string; description: string; icon: ComponentType<{ className?: string }> };

const VALUE_PILLARS: Pillar[] = [
  {
    title: "Enterprise reliability",
    description:
      "High-availability architecture, dedicated security reviews, and 24/7 monitoring keep global compensation cycles uninterrupted.",
    icon: ShieldCheck,
  },
  {
    title: "Analyst-led onboarding",
    description:
      "Business analysts translate plan ideas into compliant workflows, dashboards, and marketing automations tailored to every launch.",
    icon: Handshake,
  },
  {
    title: "Innovation with purpose",
    description:
      "AI copilots, predictive analytics, and integration accelerators are introduced where they unlock measurable growth.",
    icon: Rocket,
  },
];

const PARTNER_POINTS = [
  "Dedicated pods for discovery, implementation, and optimisation.",
  "Transparent roadmaps, weekly governance calls, and executive reporting.",
  "Security, privacy, and accessibility assessments embedded in every milestone.",
  "Long-term partnership models with co-innovation and success credits.",
];

export function AboutCompanyMissionSection() {
  return (
    <Section variant="default" padding="xl" className="bg-gradient-to-b from-background to-muted/10">
      <div className="space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <Typography as="h2" variant="h2">
              Built for lasting impact
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              Cloud MLM Software is a flagship Bpract product crafted for enterprise network marketing, direct selling,
              and affiliate organisations. Our mission is to provide the systems, services, and partnerships leaders
              need to execute ambitious growth strategies without compromising compliance or culture.
            </Typography>
            <Typography as="p" variant="p" textColor="muted">
              We combine proprietary technology with a multidisciplinary team covering compensation architecture,
              full-stack engineering, AI, UX, operations, and success management. Every engagement is guided by insight
              from hundreds of implementations, industry research, and real-time analytics so decision-makers stay ahead.
            </Typography>
          </div>
          <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-transparent to-emerald-200/20 p-6 shadow-sm dark:from-primary/15 dark:to-emerald-500/10">
            <Typography as="h3" variant="h4" className="mb-1">
              What our partners rely on
            </Typography>
            <Typography as="p" variant="small" textColor="muted" className="mb-4 uppercase tracking-wider">
              Included
            </Typography>
            <BulletList items={PARTNER_POINTS} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <Typography as="h3" variant="h4">
                  {pillar.title}
                </Typography>
                <Typography as="p" variant="small" textColor="muted">
                  {pillar.description}
                </Typography>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
