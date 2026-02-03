import Link from "next/link";

type SectionNavItem = {
  label: string;
  href: string;
};

const SECTION_NAV: SectionNavItem[] = [
  { label: "Frameworks", href: "#plan-families" },
  { label: "Evaluation", href: "#plan-evaluation" },
  { label: "Simulations", href: "#plan-simulations" },
  { label: "Deliverables", href: "#plan-deliverables" },
  { label: "Implementation", href: "#plan-implementation" },
  { label: "Outcomes", href: "#plan-use-cases" },
  { label: "FAQ", href: "#plan-faq" }
];

export function PlansNavigationSection() {
  return (
    <section className="container" aria-label="Plan navigation">
      <div className="flex flex-wrap justify-center gap-3 rounded-full border border-border/60 bg-background/80 px-6 py-4 shadow-sm">
        {SECTION_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center rounded-full border border-border/50 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
