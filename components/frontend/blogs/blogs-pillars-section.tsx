import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { PILLARS } from "./blogs-data";

export function BlogsPillarsSection() {
  return (
    <Section id="blog-pillars" variant="secondary" padding="lg" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Editorial pillars"
          heading="What you can expect in every issue"
          description="Four editorial pillars guide how we gather insights, document experiments, and surface recommendations."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8 dark:bg-background/95"
                >
                  <div className="relative grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 dark:ring-primary/30">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <Typography as="h3" variant="h4" className="tracking-tight">
                          {pillar.title}
                        </Typography>
                        <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                          {pillar.description}
                        </Typography>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div className="space-y-3">
                        <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                          What you get
                        </Typography>
                        <BulletList items={pillar.bullets} variant="compact" />
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
        </div>
      </div>
    </Section>
  );
}
