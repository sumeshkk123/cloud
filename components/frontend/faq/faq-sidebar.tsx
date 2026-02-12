'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { resolveIcon } from "@/components/frontend/home/utils";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";

interface FaqGroup {
  id: string;
  label: string;
  icon?: string | null;
}

interface FaqSidebarProps {
  groups: FaqGroup[];
  contactHref: string;
  locale: Locale;
}

// Translation strings for sidebar
const sidebarTranslations: Record<Locale, {
  browseTopics: string;
  needSomethingSpecific: string;
  needSomethingDescription: string;
  startCustomQa: string;
}> = {
  en: {
    browseTopics: "Browse topics",
    needSomethingSpecific: "Need something specific?",
    needSomethingDescription: "Share your requirements and we will create a tailored brief or workshop agenda for your team.",
    startCustomQa: "Start a custom Q&A"
  },
  es: {
    browseTopics: "Explorar temas",
    needSomethingSpecific: "¿Necesitas algo específico?",
    needSomethingDescription: "Comparte tus requisitos y crearemos un resumen personalizado o una agenda de taller para tu equipo.",
    startCustomQa: "Iniciar una Q&A personalizada"
  },
  fr: {
    browseTopics: "Parcourir les sujets",
    needSomethingSpecific: "Vous avez besoin de quelque chose de précis ?",
    needSomethingDescription: "Partagez vos exigences et nous créerons un brief personnalisé ou un ordre du jour d'atelier pour votre équipe.",
    startCustomQa: "Démarrer une Q&R personnalisée"
  },
  de: {
    browseTopics: "Themen durchsuchen",
    needSomethingSpecific: "Brauchen Sie etwas Spezifisches?",
    needSomethingDescription: "Teilen Sie Ihre Anforderungen mit und wir erstellen ein maßgeschneidertes Briefing oder einen Workshop-Ablauf für Ihr Team.",
    startCustomQa: "Eine individuelle Q&A starten"
  },
  it: {
    browseTopics: "Esplora argomenti",
    needSomethingSpecific: "Hai bisogno di qualcosa di specifico?",
    needSomethingDescription: "Condividi i tuoi requisiti e creeremo un brief personalizzato o un'agenda di workshop per il tuo team.",
    startCustomQa: "Avvia una Q&A personalizzata"
  },
  pt: {
    browseTopics: "Navegar por tópicos",
    needSomethingSpecific: "Precisa de algo específico?",
    needSomethingDescription: "Partilhe os seus requisitos e criaremos um resumo personalizado ou uma agenda de workshop para a sua equipa.",
    startCustomQa: "Iniciar uma Q&A personalizada"
  },
  zh: {
    browseTopics: "浏览主题",
    needSomethingSpecific: "需要特定内容？",
    needSomethingDescription: "分享您的需求，我们将为您的团队创建量身定制的简报或研讨会议程。",
    startCustomQa: "开始自定义问答"
  }
};

export function FaqSidebar({ groups, contactHref, locale }: FaqSidebarProps) {
  const t = sidebarTranslations[locale] || sidebarTranslations.en;
  const [activeId, setActiveId] = useState<string>("");

  // Handle smooth scroll and update active state
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, groupId: string) => {
    e.preventDefault();
    const element = document.getElementById(groupId);
    if (element) {
      const offset = 100; // Offset for sticky header if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveId(groupId);
    }
  };

  // Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = groups.map(group => {
        const element = document.getElementById(group.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: group.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const scrollPosition = window.scrollY + 150; // Offset for active state

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.top + window.scrollY - 200) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [groups]);

  return (
    <aside className="lg:sticky lg:top-16 self-start space-y-4">
      <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
        <Typography variant="h6" as="h2">{t.browseTopics}</Typography>
        <nav className="mt-4 space-y-2 text-sm">
          {groups.map((group) => {
            const Icon = resolveIcon(group.icon, Sparkles);
            const isActive = activeId === group.id;
            return (
              <a
                key={group.id}
                onClick={(e) => handleLinkClick(e, group.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-2 transition-all duration-300 ease-in-out cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
                href={`#${group.id}`}
              >
                <span className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-primary/10 text-primary"
                )}>
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="transition-all duration-300">{group.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
        <Typography variant="h6" as="h3">{t.needSomethingSpecific}</Typography>
        <Typography variant="small" textColor="muted" className="mt-3">
          {t.needSomethingDescription}
        </Typography>
        <Button asChild className="mt-4 w-full">
          <Link href={contactHref}>
            {t.startCustomQa}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
