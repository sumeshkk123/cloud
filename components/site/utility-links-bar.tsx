"use client";

type TopUtilityLink = {
  label: string;
  href: string;
};

const FALLBACK_UTILITY_LINKS: TopUtilityLink[] = [
  { label: "Strategy Blog", href: "/blog" },
  { label: "Comp Plan Playbooks", href: "/resources/compensation/toolkit" },
  { label: "Customer Stories", href: "/resources/customers" },
  { label: "Partner Portal", href: "/partners" }
];

export function UtilityLinksBar() {
  const utilityLinks = FALLBACK_UTILITY_LINKS;

  if (utilityLinks.length === 0) {
    return null;
  }

  return (
    <div className="hidden border-b border-primary/10 bg-primary/5 text-xs text-primary/70 md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 py-2">
        <nav aria-label="Utility">
          <ul className="flex items-center gap-4 lg:gap-6">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition hover:text-primary/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
