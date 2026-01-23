"use client";

type Announcement = {
  message: string;
  href?: string;
  label?: string;
};

const FALLBACK_ANNOUNCEMENT: Announcement | null = {
  message: "2025 Global MLM Transformation Summit registration is now open.",
  href: "/resources/events/mlm-transformation-summit",
  label: "Reserve a seat"
};

export function TopAnnouncementBar() {
  const announcement = FALLBACK_ANNOUNCEMENT;

  if (!announcement) {
    return null;
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-primary via-primary/90 to-primary/70 px-3 py-2 text-xs font-medium text-primary-foreground sm:px-4 sm:text-sm">
      <a
        href={announcement.href ?? "#"}
        className="inline-flex items-center gap-2 whitespace-nowrap transition hover:opacity-90"
      >
        <span>{announcement.message}</span>
        {announcement.label ? (
          <span className="inline-flex items-center gap-1">
            {announcement.label}
            <span aria-hidden="true">-&gt;</span>
          </span>
        ) : null}
      </a>
    </div>
  );
}
