"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type AccordionType = "single" | "multiple";

type AccordionProps = {
  type?: AccordionType;
  collapsible?: boolean;
  defaultValue?: string | string[];
  className?: string;
  children: ReactNode;
};

type AccordionContextValue = {
  openValues: string[];
  toggleItem: (value: string) => void;
  type: AccordionType;
  collapsible: boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within <Accordion>");
  }
  return context;
}

export function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  className,
  children
}: AccordionProps) {
  const initial = useMemo(() => {
    if (!defaultValue) return [] as string[];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);

  const [openValues, setOpenValues] = useState<string[]>(initial);

  const toggleItem = (value: string) => {
    setOpenValues((prev) => {
      const isOpen = prev.includes(value);
      if (type === "multiple") {
        if (isOpen) {
          return prev.filter((item) => item !== value);
        }
        return [...prev, value];
      }

      if (isOpen) {
        return collapsible ? [] : prev;
      }

      return [value];
    });
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem, type, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemContextValue = {
  value: string;
  isOpen: boolean;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionItem components must be used within <AccordionItem>");
  }
  return context;
}

type AccordionItemProps = {
  value: string;
  className?: string;
  children: ReactNode;
};

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const { openValues } = useAccordionContext();
  const isOpen = openValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("rounded-xl", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const { value, isOpen } = useAccordionItemContext();

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-xl bg-transparent text-left text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden className="text-lg">
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
}

type AccordionContentProps = {
  children: ReactNode;
  className?: string;
};

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen } = useAccordionItemContext();

  return (
    <div
      className={cn(
        "grid overflow-hidden text-sm transition-all duration-300 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        className
      )}
    >
      <div className="min-h-0">{children}</div>
    </div>
  );
}
