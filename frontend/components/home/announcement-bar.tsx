import Link from "next/link";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { localizedHref } from "./utils";

export function AnnouncementBar({ locale, announcements }: { locale: Locale; announcements: HomepageContent["announcements"] }) {
  if (!announcements || announcements.length === 0) {
    return null;
  }
  return (
    <section className="bg-muted/40">
      <div className="container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        {announcements.map((notice) => (
          <Link
            key={notice.title}
            href={localizedHref(locale, notice.href)}
            className={`group relative flex items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r ${notice.accentClass ?? "from-primary to-primary/80"} px-4 py-3 text-sm font-medium text-white shadow`}
          >
            <span>{notice.title}</span>
            <span className="ml-3 inline-flex items-center gap-1 text-xs font-semibold opacity-90 transition group-hover:translate-x-0.5">
              Explore
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
