import type { CSSProperties } from "react";
import type { HomepageHeroLogo } from "@/types/homepage";
import { SmartImage } from "@/components/ui/smart-image";

export interface ClientLogoDisplayProps {
  logos: HomepageHeroLogo[];
  className?: string;
}

export function ClientLogoDisplay({ logos, className }: ClientLogoDisplayProps) {
  return (
    <div className={className || ""}>
      <div className="relative pt-10">
        <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl sm:top-16 sm:h-[520px] sm:w-[520px]" aria-hidden />
        <div className="relative mx-auto h-[360px] w-[360px] sm:h-[520px] sm:w-[520px]">
          <div className="absolute inset-0 rounded-full border border-border/40 bg-gradient-to-br from-white via-sky-50 to-primary/10 shadow-[0_50px_140px_-90px_rgba(15,23,42,0.45)] dark:from-slate-900 dark:via-slate-900/60 dark:to-primary/20" aria-hidden />
          <div className="absolute inset-[8%] rounded-full border border-primary/15" aria-hidden />
          <div className="absolute inset-[18%] rounded-full border border-primary/10" aria-hidden />
          <div className="absolute inset-[12%] overflow-hidden rounded-full">
            <div
              className="absolute inset-0 animate-[spin_60s_linear_infinite]"
              style={{
                backgroundImage:
                  "url('/images/world-map.webp')",
                backgroundSize: "170% auto",
                backgroundPosition: "center",
                opacity: 0.6
              }}
            />
          </div>
          <div className="absolute inset-[33%] rounded-full border border-primary/20 opacity-60" aria-hidden />
          <div className="absolute inset-[46%] rounded-full border border-primary/10 opacity-50" aria-hidden />
          <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-card/70 shadow-inner">
            <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Cloud MLM
            </div>
          </div>
          {logos.map((client) => (
            <div
              key={client.name}
              className={`absolute ${client.sizeClass} -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-border/50 bg-card/95 shadow-[0_25px_70px_-60px_rgba(15,23,42,0.35)] backdrop-blur-sm transition hover:-translate-y-1 hover:scale-105 dark:border-white/10 dark:bg-card/20`}
              style={client.position as CSSProperties}
            >
              <SmartImage
                src={client.logo}
                alt={`${client.name} logo`}
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}