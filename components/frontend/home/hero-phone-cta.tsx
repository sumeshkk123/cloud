import type { HomepageLink } from "@/types/homepage";
import * as React from "react";

interface HeroPhoneCtaProps {
  phoneCta: HomepageLink & { phoneDisplay: string };
}

export function HeroPhoneCta({ phoneCta }: HeroPhoneCtaProps) {
  return (
    <a
      href={phoneCta.href}
      className="inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-foreground transition bg-primary/10 hover:bg-primary/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72 12.44 12.44 0 00.7 2.73 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 005.66 5.66l1.27-1.27a2 2 0 012.11-.45 12.44 12.44 0 002.73.7A2 2 0 0122 16.92z" />
        </svg>
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs font-normal text-muted-foreground">{phoneCta.label}</span>
        <span className="text-sm font-semibold text-white">{phoneCta.phoneDisplay}</span>
      </span>
    </a>
  );
}
