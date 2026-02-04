import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { AIO_SIGNALS } from "./blogs-data";

export function BlogsAioSignalsSection() {
  return (
    <Section id="aio-signals" variant="gradient" padding="xl">
      <div className="space-y-10 container">
        <SectionTitle
          badge="AI & SEO"
          heading="Built for SEO and AI optimisation"
          description="Every article is structured for discoverability, accessibility, and accurate downstream reuse by conversational agents."
          centered={true}
          maxWidth="3xl"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {AIO_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-border/40 bg-background p-6 shadow-sm dark:bg-background/95"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 dark:ring-primary/30">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <Typography as="h3" variant="h5" className="tracking-tight">
                  {signal.title}
                </Typography>
                <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                  {signal.description}
                </Typography>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
