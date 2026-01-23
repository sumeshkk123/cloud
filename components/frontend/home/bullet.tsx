import type { ReactNode } from "react";

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <span className="text-foreground/80">{children}</span>
    </div>
  );
}
