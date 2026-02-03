'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, RefreshCw } from 'lucide-react';

const SUPPORTED_LOCALES = ['en', 'es', 'it', 'de', 'pt', 'zh'] as const;
type LocaleKey = (typeof SUPPORTED_LOCALES)[number];

const translations: Record<LocaleKey, {
  title: string;
  description: string;
  tryAgain: string;
  goHome: string;
  helpText: string;
}> = {
  en: {
    title: 'Something went wrong!',
    description: 'An unexpected error occurred. Please try again or return to the homepage.',
    tryAgain: 'Try again',
    goHome: 'Go back home',
    helpText: 'If this problem persists, please contact our support team.'
  },
  es: {
    title: '¡Algo salió mal!',
    description: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo o regresa a la página principal.',
    tryAgain: 'Intentar de nuevo',
    goHome: 'Volver al inicio',
    helpText: 'Si este problema persiste, por favor contacta a nuestro equipo de soporte.'
  },
  it: {
    title: 'Qualcosa è andato storto!',
    description: 'Si è verificato un errore imprevisto. Riprova o torna alla homepage.',
    tryAgain: 'Riprova',
    goHome: 'Torna alla home',
    helpText: 'Se questo problema persiste, contatta il nostro team di supporto.'
  },
  de: {
    title: 'Etwas ist schiefgelaufen!',
    description: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.',
    tryAgain: 'Erneut versuchen',
    goHome: 'Zurück zur Startseite',
    helpText: 'Wenn dieses Problem weiterhin besteht, wenden Sie sich bitte an unser Support-Team.'
  },
  pt: {
    title: 'Algo deu errado!',
    description: 'Ocorreu um erro inesperado. Por favor, tente novamente ou retorne à página inicial.',
    tryAgain: 'Tentar novamente',
    goHome: 'Voltar para o início',
    helpText: 'Se este problema persistir, entre em contato com nossa equipe de suporte.'
  },
  zh: {
    title: '出错了！',
    description: '发生了意外错误。请重试或返回首页。',
    tryAgain: '重试',
    goHome: '返回首页',
    helpText: '如果此问题持续存在，请联系我们的支持团队。'
  }
};

function getLocaleFromPathname(pathname: string | null): LocaleKey {
  if (!pathname) return 'en';
  const segment = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(segment as LocaleKey) ? (segment as LocaleKey) : 'en';
}

function getHomeHref(locale: LocaleKey): string {
  return locale === 'en' ? '/' : `/${locale}`;
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
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-4 tracking-tight">
          500
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
          {error?.message || t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold rounded-lg border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <RefreshCw className="w-5 h-5" aria-hidden />
            {t.tryAgain}
          </button>
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold rounded-lg border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" aria-hidden />
            {t.goHome}
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-500">
          {t.helpText}
        </p>
      </div>
    </div>
  );
}
