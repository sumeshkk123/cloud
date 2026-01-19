"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { isDark, status, toggleTheme } = useTheme();
  const ready = status === "ready";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      disabled={!ready}
      className="relative h-10 w-10 text-foreground hover:bg-muted"
    >
      <Sun
        aria-hidden
        className={cn(
          "h-5 w-5 transition-all duration-200",
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute h-5 w-5 transition-all duration-200",
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        )}
      />
      <span className="sr-only">{label}</span>
      {!ready ? (
        <span className="absolute inset-0 rounded-full border border-border/40" aria-hidden />
      ) : null}
    </Button>
  );
}
