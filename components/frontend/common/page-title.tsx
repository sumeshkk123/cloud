import * as React from "react";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PageTitleProps {
  /** Badge text to display above the title */
  badgeText?: string | null;
  /** Badge icon (defaults to Sparkles if badgeText is provided) */
  badgeIcon?: ReactNode;
  /** Text before the highlighted portion */
  beforeText?: string;
  /** The text to highlight with gradient */
  highlightText: string;
  /** Text after the highlighted portion */
  afterText?: string;
  /** Description text below the title */
  description?: string;
  /** Optional className for the container */
  className?: string;
  /** Optional className for the heading element */
  headingClassName?: string;
  /** Optional as prop to change the HTML element type */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Whether the content is centered */
  centered?: boolean;
  /** Whether to disable the gradient highlight on the title */
  disableHighlight?: boolean;
  /** Max number of lines for description (shows ellipsis after); e.g. 4 */
  descriptionMaxLines?: number;
}

export function PageTitle({
  badgeText,
  badgeIcon,
  beforeText,
  highlightText,
  afterText,
  description,
  className,
  headingClassName,
  as: Component = "h1",
  centered = false,
  disableHighlight = false,
  descriptionMaxLines,
}: PageTitleProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Badge */}
      {badgeText && (
        <div className={cn(
          "inline-flex items-center gap-2 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-all",
          centered && "mx-auto"
        )}>
          {badgeIcon || <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />}
          <span>{badgeText}</span>
        </div>
      )}

      {/* Heading with gradient highlight */}
      <Component 
        className={cn(
          "text-3xl font-bold leading-tight tracking-tight break-words sm:text-5xl lg:text-6xl",
          centered && "text-center",
          headingClassName
        )}
        style={headingClassName?.includes('text-white') ? undefined : {}}
      >
        {beforeText && (
          <>
            <span className="break-words" style={headingClassName?.includes('text-white') ? { color: 'white' } : undefined}>{beforeText}</span>{" "}
          </>
        )}
        {disableHighlight ? (
          <span className="break-words" style={headingClassName?.includes('text-white') ? { color: 'white' } : undefined}>{highlightText}</span>
        ) : (
          <span className="relative inline-block break-words">
            <span 
              className="relative z-10 bg-gradient-to-r from-primary via-blue-500 via-purple-500 via-pink-500 to-orange-500 bg-clip-text break-words" 
              style={{ color: 'transparent', WebkitTextFillColor: 'transparent' }}
            >
              {highlightText}
            </span>
            <span className="absolute bottom-0 left-0 h-3 w-full bg-gradient-to-r from-primary/20 via-blue-500/20 via-purple-500/20 via-pink-500/20 to-orange-500/20 -rotate-1" />
          </span>
        )}
        {afterText && (
          <>
            {" "}<span className="break-words" style={headingClassName?.includes('text-white') ? { color: 'white' } : undefined}>{afterText}</span>
          </>
        )}
      </Component>

      {/* Description */}
      {description && (
        <p className={cn(
          "text-lg text-muted-foreground",
          centered && "text-center",
          descriptionMaxLines !== undefined &&
            descriptionMaxLines >= 1 &&
            descriptionMaxLines <= 6 &&
            {
              1: "line-clamp-1",
              2: "line-clamp-2",
              3: "line-clamp-3",
              4: "line-clamp-4",
              5: "line-clamp-5",
              6: "line-clamp-6",
            }[descriptionMaxLines]
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
