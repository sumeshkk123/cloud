import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { GoBackButton } from "@/components/ui/go-back-button";
import { Home, Sparkles } from "lucide-react";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

type NotFoundProps = {
  params: { lang: SupportedLocale };
};

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export default function NotFound({ params }: NotFoundProps) {
  const locale = resolveLocale(params.lang);
  const homeHref = buildLocalizedPath("/", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const blogHref = buildLocalizedPath("/blog", locale);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative flex min-h-screen flex-col items-center justify-center py-24">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" aria-hidden />
            Page Not Found
          </div>

          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold leading-none text-foreground sm:text-[12rem]">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </div>

          {/* Content */}
          <SectionTitle
            badge={null}
            heading="Oops! This page doesn't exist"
            description="The page you're looking for might have been moved, deleted, or the URL might be incorrect. Let's get you back on track."
            centered={true}
            maxWidth="2xl"
            className="mb-12 space-y-6"
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Link href={homeHref}>
                <Home className="mr-2 h-5 w-5" aria-hidden />
                Go to Homepage
              </Link>
            </Button>
            <GoBackButton
              variant="outline"
              size="lg"
              className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5"
            />
          </div>

          {/* Helpful Links */}
          <div className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="ghost" size="sm">
                <Link href={featuresHref}>Features</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href={pricingHref}>Pricing</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href={contactHref}>Contact</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href={blogHref}>Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
