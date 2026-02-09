import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PricingSubCta } from "./types";
import { Section } from "@/components/ui/section";

interface PricingSubPageCtaProps {
  content: PricingSubCta;
  contactHref: string;
  secondaryHref: string;
}

export function PricingSubPageCta({ content, contactHref, secondaryHref }: PricingSubPageCtaProps) {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-10">
      <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500 p-10 text-white shadow-xl transition-all duration-300 hover:shadow-2xl md:p-12">
        {/* Animated grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"
            aria-hidden
          />
        </div>

        {/* Decorative animated orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse" />
          <div
            className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-white/15 blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute left-10 top-10 h-20 w-20 rounded-full border-2 border-white/20 animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute right-16 top-20 h-16 w-16 rotate-45 border-2 border-white/20 animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-16 left-16 h-12 w-12 rotate-12 rounded-lg border-2 border-white/20 animate-bounce"
            style={{ animationDuration: "3.5s", animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-10 right-20 h-14 w-14 rounded-full border-2 border-white/20 animate-bounce"
            style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
          />
        </div>

        {/* Content - same layout: left heading/description, right card + buttons */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl">
              {content.heading}
            </h2>
            <p className="text-sm text-white/90 sm:text-base">{content.description}</p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
            {(content.cardTitle || content.cardBody) && (
              <div className="space-y-2">
                {content.cardTitle && (
                  <h3 className="text-lg font-semibold text-white">{content.cardTitle}</h3>
                )}
                {content.cardBody && (
                  <p className="text-sm text-white/85">{content.cardBody}</p>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-white px-6 py-6 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-xl"
              >
                <Link href={contactHref} className="flex items-center gap-2">
                  {content.primaryCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-2 border-white/90 bg-white/10 px-6 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white hover:text-white hover:shadow-xl"
              >
                <Link href={secondaryHref} className="flex items-center gap-2 text-white">
                  {content.secondaryCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
