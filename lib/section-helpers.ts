import type { SupportedLocale } from "@/config/site";
import type { CmsLink, MediaAsset, SectionTheme } from "@/types/global";

import { resolveHref } from "@/lib/locale-links";
import { toAbsoluteUrl } from "@/lib/media";

export type SectionThemeStyles = {
  wrapper: string;
  background: string;
  heading: string;
  muted: string;
  card: string;
  badge: string;
  kicker: string;
  outline: string;
  glow: string;
};

export type ResolvedMedia = {
  src: string;
  alt: string | null;
  width: number | null;
  height: number | null;
};

export type ResolvedCta = {
  title: string;
  href: string;
  external: boolean;
};

export function getSectionThemeStyles(theme: SectionTheme): SectionThemeStyles {
  switch (theme) {
    case "dark":
      return {
        wrapper: "bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950 text-foreground border-border/60 backdrop-blur-xl",
        background: "from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--background))]",
        heading: "text-foreground",
        muted: "text-muted-foreground",
        card: "bg-card/50 border border-border/60",
        badge: "bg-primary/25 text-primary border border-primary/40",
        kicker: "text-primary/80",
        outline: "border border-border/60 text-foreground hover:bg-muted/40",
        glow: "shadow-[0_45px_120px_rgba(15,23,42,0.45)]"
      };
    case "muted":
      return {
        wrapper: "bg-muted/70 text-foreground border-border/50 backdrop-blur-xl",
        background: "from-[hsl(var(--muted))] via-[hsl(var(--background))] to-[hsl(var(--muted))]",
        heading: "text-foreground",
        muted: "text-muted-foreground",
        card: "bg-card/80 border border-border/50",
        badge: "bg-primary/15 text-primary border border-primary/25",
        kicker: "text-primary",
        outline: "border border-border/50 text-muted-foreground hover:bg-muted/40",
        glow: "shadow-[0_35px_80px_rgba(15,23,42,0.18)]"
      };
    case "light":
    default:
      return {
        wrapper: "bg-background/85 text-foreground border-border/40 backdrop-blur-xl",
        background: "from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--background))]",
        heading: "text-foreground",
        muted: "text-muted-foreground",
        card: "bg-card/80 border border-border/40",
        badge: "bg-primary/12 text-primary border border-primary/20",
        kicker: "text-primary",
        outline: "border border-border/40 text-muted-foreground hover:bg-muted/30",
        glow: "shadow-[0_35px_80px_rgba(15,23,42,0.16)]"
      };
  }
}

export function getMediaSource(media?: MediaAsset | null): ResolvedMedia | null {
  if (!media?.url) {
    return null;
  }

  const src = toAbsoluteUrl(media.url);
  if (!src) {
    return null;
  }

  return {
    src,
    alt: media.alt ?? media.title ?? null,
    width: media.width ?? null,
    height: media.height ?? null
  };
}

export function resolveCtas(ctas: CmsLink[] | undefined, locale: SupportedLocale): ResolvedCta[] {
  if (!ctas || ctas.length === 0) {
    return [];
  }

  const resolved = ctas
    .map((cta) => {
      const title = cta.title?.trim();
      if (!title) {
        return null;
      }
      const resolvedHref = resolveHref(cta.href ?? null, locale);
      return {
        title,
        href: resolvedHref.href,
        external: resolvedHref.external
      };
    })
    .filter(Boolean) as ResolvedCta[];

  const seen = new Set<string>();
  return resolved.filter((cta) => {
    if (seen.has(cta.href + cta.title)) {
      return false;
    }
    seen.add(cta.href + cta.title);
    return true;
  });
}

export function sanitizeHtml(html?: string | null): string {
  if (!html) {
    return "";
  }
  return html.replace(/<!--.*?-->/gs, "").trim();
}
