import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

export interface TestimonialDetailProps {
  testimonial: {
    name: string;
    role?: string | null;
    content: string;
    image?: string | null;
  };
  backHref?: string;
}

export function TestimonialDetail({ testimonial, backHref }: TestimonialDetailProps) {
  return (
    <Section
      variant="default"
      padding="lg"
      className="rounded-3xl border border-border/60 bg-gradient-to-br from-teal-50 via-white to-purple-50 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-purple-900/30"
      containerClassName="max-w-5xl mx-auto"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(167,139,250,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(14,165,233,0.16),transparent_60%)] rounded-3xl" aria-hidden />
      <div className="grid gap-12 px-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,0.45fr)] md:px-6 shadow-lg p-6 lg:p-12 rounded-3xl bg-background/80 dark:bg-background/90 border border-border/40 overflow-hidden">
        <div className="space-y-8">
          <Badge
            icon={() => null}
            variant="default"
            className="gap-0 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium tracking-wide text-foreground shadow-sm"
          >
            Client testimonial
          </Badge>
          <div className="space-y-2">
            <Typography as="h2" variant="h2">
              {testimonial.name}
            </Typography>
            {testimonial.role ? (
              <Typography as="p" variant="h4" textColor="muted" className="font-normal">
                {testimonial.role}
              </Typography>
            ) : null}
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-primary/70" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-4 7-10V5l-7 6v4c0 2 2 6 7 6" /><path d="M15 21c3 0 7-4 7-10V5l-7 6v4c0 2 2 6 7 6" /></svg>
            </span>
            <Typography as="p" variant="p" textColor="muted" className="max-w-2xl leading-relaxed">
              {testimonial.content}
            </Typography>
          </div>
          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden>
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to testimonials
            </Link>
          ) : null}
        </div>
        <aside className="flex items-center justify-center">
          {testimonial.image ? (
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-muted/30">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ) : (
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-border/60 bg-muted/30">
              <Typography as="span" variant="h2" textColor="muted" className="text-4xl font-semibold">
                {testimonial.name
                  .split(/\s+/)
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </Typography>
            </div>
          )}
        </aside>
      </div>
    </Section>
  );
}
