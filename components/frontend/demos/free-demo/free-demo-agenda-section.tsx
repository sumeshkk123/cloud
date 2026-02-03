import { ClipboardList, LayoutDashboard, NotebookPen, ServerCog, Check, Workflow } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import type { AgendaItem } from "./free-demo-content";

export function FreeDemoAgendaSection({ agenda }: { agenda: AgendaItem[] }) {
  return (
    <Section id="agenda" variant="gradient" padding="xl" className="relative isolate !overflow-visible" containerClassName="space-y-12">
      <SectionTitle
        badge="Demo agenda"
        heading="What we cover in sixty minutes"
        description="Align stakeholders on outcomes, experience live workflows, and capture next steps across compensation, commerce, and automation in a single guided session."
        centered={true}
        maxWidth="3xl"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
        {agenda.map((item) => {
          const Icon =
            item.icon === "kickoff"
              ? NotebookPen
              : item.icon === "compensation"
                ? LayoutDashboard
                : item.icon === "automation"
                  ? Workflow
                  : item.icon === "integration"
                    ? ServerCog
                    : ClipboardList;

          return (
            <div key={item.title} className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8">
              <div className="relative grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                      {item.slot}
                    </Typography>
                    <Typography as="h3" variant="h5" className="tracking-tight">
                      {item.title}
                    </Typography>
                    <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                      {item.description}
                    </Typography>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div className="space-y-3">
                    <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                      Highlights
                    </Typography>
                    <BulletList items={item.bullets} variant="compact" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

