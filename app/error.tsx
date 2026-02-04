"use client";

import { useEffect } from "react";
import Link from "next/link";
import { i18n } from "@/i18n-config";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const defaultLocale = i18n.defaultLocale;
const homeHref = `/${defaultLocale}`;

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background">
      {/* Grid + gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-orange-500/10" />
      </div>
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-destructive/20 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative flex min-h-screen flex-col items-center justify-center py-24">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive backdrop-blur-sm">
            <AlertIcon className="h-4 w-4 shrink-0" />
            Server Error
          </div>

          {/* 500 */}
          <h1 className="mb-8 text-9xl font-bold leading-none sm:text-[12rem]">
            <span className="bg-gradient-to-r from-destructive via-orange-500 to-red-500 bg-clip-text text-transparent">
              500
            </span>
          </h1>

          {/* Copy */}
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Something went wrong
          </h2>
          <p className="mb-12 text-muted-foreground max-w-lg mx-auto">
            We hit an unexpected error. Our team has been notified. Please try again or head back home.
          </p>

          {/* Dev-only error details */}
          {typeof process !== "undefined" && process.env.NODE_ENV === "development" && error?.message && (
            <div className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left">
              <p className="mb-2 text-sm font-semibold text-destructive">Error details</p>
              <p className="text-sm font-mono text-muted-foreground break-all">{error.message}</p>
              {error.digest && (
                <p className="mt-2 text-xs text-muted-foreground">ID: {error.digest}</p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <RefreshIcon className="shrink-0" />
              Try again
            </button>
            <Link
              href={homeHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-transparent px-6 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <HomeIcon className="shrink-0" />
              Go to homepage
            </Link>
          </div>

          {/* Help */}
          <div className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-lg font-semibold text-foreground">Need help?</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              If this keeps happening, contact our support team.
            </p>
            <Link
              href={`/${defaultLocale}/contact`}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
