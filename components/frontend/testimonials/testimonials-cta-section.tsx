import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface TestimonialsCtaSectionProps {
  contactHref: string;
  pricingHref: string;
}

export function TestimonialsCtaSection({ contactHref, pricingHref }: TestimonialsCtaSectionProps) {
  return (
    <section className="container py-24">
      <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500 p-12 shadow-2xl transition-all duration-300 hover:shadow-3xl">
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
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
              Want your success story featured here?
            </h2>
            <p className="text-base leading-relaxed text-white/95 sm:text-lg">
              Share your project vision, audience, and desired outcomes. We'll pair you with a dedicated strategist and outline pilot milestones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-6 text-base font-semibold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/95"
              >
                <Link href={contactHref} className="relative z-10 flex items-center gap-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  Connect with us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group relative overflow-hidden rounded-xl border-2 border-white/90 bg-white/10 px-8 py-6 text-base font-semibold !text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white !hover:text-white hover:shadow-xl"
              >
                <Link href={pricingHref} className="relative z-10 flex items-center gap-2 !text-white !group-hover:text-white">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  Review investment options
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm shadow-sm backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Preparation guide
            </p>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• Current challenges and key success metrics.</li>
              <li>• Target launch cadence across regions and channels.</li>
              <li>• Integrations, data sources, and security requirements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
