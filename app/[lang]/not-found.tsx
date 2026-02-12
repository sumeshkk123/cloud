import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { GoBackButton } from "@/components/ui/go-back-button";
import { Home, Sparkles, FileQuestion } from "lucide-react";
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

// Translation strings
const translations: Record<Locale, {
  badge: string;
  title: string;
  description: string;
  goHome: string;
  helpfulLinks: string;
  features: string;
  pricing: string;
  contact: string;
  blog: string;
}> = {
  en: {
    badge: "Page Not Found",
    title: "Oops! This page doesn't exist",
    description: "The page you're looking for might have been moved, deleted, or the URL might be incorrect. Let's get you back on track.",
    goHome: "Go to Homepage",
    helpfulLinks: "Popular Pages",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog"
  },
  es: {
    badge: "Página No Encontrada",
    title: "¡Oops! Esta página no existe",
    description: "La página que buscas podría haber sido movida, eliminada o la URL podría ser incorrecta. Te ayudamos a volver al camino correcto.",
    goHome: "Ir a la Página Principal",
    helpfulLinks: "Páginas Populares",
    features: "Características",
    pricing: "Precios",
    contact: "Contacto",
    blog: "Blog"
  },
  fr: {
    badge: "Page introuvable",
    title: "Oups ! Cette page n'existe pas",
    description: "La page que vous recherchez a peut-être été déplacée, supprimée ou l'URL est incorrecte. Nous vous aidons à retrouver votre chemin.",
    goHome: "Retour à l'accueil",
    helpfulLinks: "Pages populaires",
    features: "Fonctionnalités",
    pricing: "Tarifs",
    contact: "Contact",
    blog: "Blog"
  },
  it: {
    badge: "Pagina Non Trovata",
    title: "Ops! Questa pagina non esiste",
    description: "La pagina che stai cercando potrebbe essere stata spostata, eliminata o l'URL potrebbe essere errato. Ti aiutiamo a tornare sulla strada giusta.",
    goHome: "Vai alla Homepage",
    helpfulLinks: "Pagine Popolari",
    features: "Caratteristiche",
    pricing: "Prezzi",
    contact: "Contatto",
    blog: "Blog"
  },
  de: {
    badge: "Seite Nicht Gefunden",
    title: "Hoppla! Diese Seite existiert nicht",
    description: "Die gesuchte Seite wurde möglicherweise verschoben, gelöscht oder die URL ist falsch. Wir helfen Ihnen, wieder auf den richtigen Weg zu kommen.",
    goHome: "Zur Startseite",
    helpfulLinks: "Beliebte Seiten",
    features: "Funktionen",
    pricing: "Preise",
    contact: "Kontakt",
    blog: "Blog"
  },
  pt: {
    badge: "Página Não Encontrada",
    title: "Ops! Esta página não existe",
    description: "A página que você está procurando pode ter sido movida, excluída ou a URL pode estar incorreta. Vamos ajudá-lo a voltar aos trilhos.",
    goHome: "Ir para a Página Inicial",
    helpfulLinks: "Páginas Populares",
    features: "Recursos",
    pricing: "Preços",
    contact: "Contato",
    blog: "Blog"
  },
  zh: {
    badge: "未找到页面",
    title: "糟糕！此页面不存在",
    description: "您正在查找的页面可能已被移动、删除或URL可能不正确。让我们帮您回到正轨。",
    goHome: "返回首页",
    helpfulLinks: "热门页面",
    features: "功能",
    pricing: "定价",
    contact: "联系",
    blog: "博客"
  }
};

export default function NotFound({ params }: NotFoundProps) {
  const locale = resolveLocale(params.lang);
  const t = translations[locale];
  const homeHref = buildLocalizedPath("/", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const blogHref = buildLocalizedPath("/blog", locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Animated 404 Number */}
        {/* Icon */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-xl animate-ping"></div>
            <div className="relative bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full">
              <FileQuestion className="w-12 h-12 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>
        <div className="relative mb-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h1 className="relative text-7xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 animate-pulse">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t.title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
          {t.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={homeHref}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            {t.goHome}
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-20">
          <div className="h-2 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-transparent to-primary-500 rounded-full"></div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {t.helpfulLinks}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href={featuresHref}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {t.features}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href={pricingHref}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {t.pricing}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href={contactHref}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {t.contact}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href={blogHref}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {t.blog}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
