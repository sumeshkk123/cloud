"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "es", "it", "de", "pt", "zh"] as const;
type LocaleKey = (typeof SUPPORTED_LOCALES)[number];

const translations: Record<
  LocaleKey,
  { title: string; description: string; tryAgain: string; goHome: string; helpText: string }
> = {
  en: {
    title: "Something went wrong",
    description: "We hit an unexpected error. Please try again or head back home.",
    tryAgain: "Try again",
    goHome: "Go to homepage",
    helpText: "If this keeps happening, contact our support team.",
  },
  es: {
    title: "Algo salió mal",
    description: "Ocurrió un error inesperado. Inténtalo de nuevo o vuelve al inicio.",
    tryAgain: "Intentar de nuevo",
    goHome: "Ir al inicio",
    helpText: "Si sigue pasando, contacta a nuestro equipo de soporte.",
  },
  it: {
    title: "Qualcosa è andato storto",
    description: "Si è verificato un errore. Riprova o torna alla home.",
    tryAgain: "Riprova",
    goHome: "Vai alla home",
    helpText: "Se il problema continua, contatta il nostro team.",
  },
  de: {
    title: "Etwas ist schiefgelaufen",
    description: "Ein unerwarteter Fehler ist aufgetreten. Bitte erneut versuchen oder zur Startseite zurückkehren.",
    tryAgain: "Erneut versuchen",
    goHome: "Zur Startseite",
    helpText: "Wenn das Problem weiter besteht, wenden Sie sich an unser Support-Team.",
  },
  pt: {
    title: "Algo deu errado",
    description: "Ocorreu um erro inesperado. Tente novamente ou volte ao início.",
    tryAgain: "Tentar novamente",
    goHome: "Ir ao início",
    helpText: "Se o problema continuar, entre em contato com nossa equipe.",
  },
  zh: {
    title: "出错了",
    description: "发生了意外错误。请重试或返回首页。",
    tryAgain: "重试",
    goHome: "返回首页",
    helpText: "如果问题持续，请联系我们的支持团队。",
  },
};

function getLocaleFromPathname(pathname: string | null): LocaleKey {
  if (!pathname) return "en";
  const segment = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(segment as LocaleKey) ? (segment as LocaleKey) : "en";
}

function getHomeHref(locale: LocaleKey): string {
  return locale === "en" ? "/" : `/${locale}`;
}

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

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = translations[locale];
  const homeHref = getHomeHref(locale);

  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-orange-500/10" />
      </div>
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-destructive/20 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative flex min-h-screen flex-col items-center justify-center py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive backdrop-blur-sm">
            Server Error
          </div>

          <h1 className="mb-8 text-9xl font-bold leading-none sm:text-[12rem]">
            <span className="bg-gradient-to-r from-destructive via-orange-500 to-red-500 bg-clip-text text-transparent">
              500
            </span>
          </h1>

          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.title}
          </h2>
          <p className="mb-12 text-muted-foreground max-w-lg mx-auto">
            {t.description}
          </p>

          {typeof process !== "undefined" && process.env.NODE_ENV === "development" && error?.message && (
            <div className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left">
              <p className="mb-2 text-sm font-semibold text-destructive">Error details</p>
              <p className="text-sm font-mono text-muted-foreground break-all">{error.message}</p>
              {error.digest && <p className="mt-2 text-xs text-muted-foreground">ID: {error.digest}</p>}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <RefreshIcon className="shrink-0" />
              {t.tryAgain}
            </button>
            <Link
              href={homeHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-transparent px-6 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <HomeIcon className="shrink-0" />
              {t.goHome}
            </Link>
          </div>

          <div className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">{t.helpText}</p>
            <Link
              href={`/${locale}/contact`}
              className="mt-3 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
