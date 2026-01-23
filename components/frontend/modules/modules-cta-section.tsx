import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight, CheckCircle2, Clock, Zap } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { Section } from "@/components/ui/section";

interface ModulesCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function ModulesCtaSection({ contactHref, demoHref, locale }: ModulesCtaSectionProps) {
  const content = getModulesContent(locale);
  const t = content.ctaSection;
  return (
    <Section padding="lg" variant="gradient">
      <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500 p-12 text-center transition-all duration-300 hover:shadow-3xl">
        {/* Animated grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        </div>

        {/* Decorative animated orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-white/15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 h-20 w-20 rounded-full border-2 border-white/20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }} />
          <div className="absolute top-20 right-16 h-16 w-16 rotate-45 border-2 border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-16 left-16 h-12 w-12 rounded-lg border-2 border-white/20 rotate-12 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
          <div className="absolute bottom-10 right-20 h-14 w-14 rounded-full border-2 border-white/20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Typography variant="h2" as="h2" className="mb-6 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl">
            {t.title}
          </Typography>

          <Typography variant="p" className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
            {t.description}
          </Typography>

          {/* Enhanced buttons with decorative elements */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-xl bg-white px-8 py-6 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/95"
            >
              <Link href={contactHref} className="relative z-10 flex items-center gap-2">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                {t.primaryButton}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden rounded-xl border-2 border-white/90 bg-white/10 px-8 py-6 text-base font-semibold !text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white !hover:text-white hover:shadow-xl"
            >
              <Link href={demoHref} className="relative z-10 flex items-center gap-2 !text-white !group-hover:text-white">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                {t.secondaryButton}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </Link>
            </Button>
          </div>

          {/* Trust indicators - moved to bottom */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-white" />
              <span>{t.trustIndicators.quickImplementation}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-white" />
              <span>{t.trustIndicators.expertConsultation}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-white" />
              <span>{t.trustIndicators.provenResults}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
