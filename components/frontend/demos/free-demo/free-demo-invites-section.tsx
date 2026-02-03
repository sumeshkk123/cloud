import Link from "next/link";
import { ArrowRight, LineChart, ServerCog, Sparkles, Users2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import type { InvitePersona } from "./free-demo-content";

export function FreeDemoInvitesSection({ invites }: { invites: InvitePersona[] }) {
  return (
    <Section id="invite" variant="gradient" padding="xl" className="relative isolate !overflow-visible" containerClassName="space-y-12">
      <SectionTitle
        badge="Share the invites"
        heading="Bring every stakeholder to the demo"
        description="Use these talking points and ready-to-send notes so leadership, finance, technology, and field teams arrive aligned on outcomes and questions."
        centered={true}
        maxWidth="3xl"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
        {invites.map((persona) => {
          const Icon =
            persona.icon === "leadership"
              ? Sparkles
              : persona.icon === "finance"
                ? LineChart
                : persona.icon === "technology"
                  ? ServerCog
                  : Users2;

          const mailHref = `mailto:?subject=${encodeURIComponent(persona.template.subject)}&body=${encodeURIComponent(persona.template.body)}`;

          return (
            <div key={persona.title} className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8">
              <div className="relative grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <Typography as="h3" variant="h5" className="tracking-tight">
                      {persona.title}
                    </Typography>
                    <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                      {persona.summary}
                    </Typography>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="space-y-3">
                    <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                      Talking points
                    </Typography>
                    <BulletList items={persona.bullets} variant="compact" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-border/60 bg-muted/20 p-5 text-left">
                  <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                    Email template
                  </Typography>
                  <Typography as="p" variant="p" className="mt-3 text-sm font-semibold">
                    Subject: {persona.template.subject}
                  </Typography>
                  <Typography as="p" variant="p" textColor="muted" className="mt-3 whitespace-pre-line text-sm leading-relaxed">
                    {persona.template.body}
                  </Typography>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href={mailHref}>Open draft email</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

