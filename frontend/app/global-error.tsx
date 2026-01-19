"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Home, RefreshCw, AlertCircle } from "lucide-react";
import { i18n } from "@/i18n-config";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const defaultLocale = i18n.defaultLocale;
  const homeHref = `/${defaultLocale}`;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="relative isolate min-h-screen overflow-hidden bg-background">
          {/* Animated mesh gradient background */}
          <div className="absolute inset-0 -z-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-orange-500/10" />
          </div>

          {/* Floating orbs */}
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-destructive/20 blur-3xl animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container relative flex min-h-screen flex-col items-center justify-center py-24">
            <div className="mx-auto max-w-2xl text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive backdrop-blur-sm">
                <AlertCircle className="h-4 w-4" aria-hidden />
                Critical Error
              </div>

              {/* Error Number */}
              <div className="mb-8">
                <h1 className="text-9xl font-bold leading-none text-foreground sm:text-[12rem]">
                  <span className="bg-gradient-to-r from-destructive via-orange-500 to-red-500 bg-clip-text text-transparent">
                    500
                  </span>
                </h1>
              </div>

              {/* Content */}
              <SectionTitle
                badge={null}
                heading="Something went wrong"
                description="A critical error occurred. Our team has been notified and is working to resolve the issue. Please try again in a few moments."
                centered={true}
                maxWidth="2xl"
                className="mb-12 space-y-6"
              />

              {/* Error Details (only in development) */}
              {process.env.NODE_ENV === "development" && error.message && (
                <div className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left">
                  <p className="text-sm font-semibold text-destructive mb-2">Error Details:</p>
                  <p className="text-sm text-muted-foreground font-mono">{error.message}</p>
                  {error.digest && (
                    <p className="mt-2 text-xs text-muted-foreground">Error ID: {error.digest}</p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={reset}
                  size="lg"
                  className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <RefreshCw className="mr-2 h-5 w-5 transition-transform group-hover:rotate-180" aria-hidden />
                  Try Again
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5"
                >
                  <Link href={homeHref}>
                    <Home className="mr-2 h-5 w-5" aria-hidden />
                    Go to Homepage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
