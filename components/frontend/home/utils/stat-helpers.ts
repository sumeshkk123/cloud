import type { ComponentType } from "react";
import {
  Rocket,
  Globe2,
  Gauge,
  Headset,
  MapPin,
  Map,
  type LucideIcon,
} from "lucide-react";

/**
 * Map of icon names to Lucide icon components
 * Can be extended with more icons as needed
 */
const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  globe: Globe2,
  globe2: Globe2,
  gauge: Gauge,
  headset: Headset,
  mappin: MapPin,
  map: Map,
  // Add more mappings as needed
  // Format: lowercase icon name -> Lucide icon component
};

/**
 * Default icon to use when no match is found
 */
const DEFAULT_ICON = Rocket;

/**
 * Get icon component from icon name or label
 */
export function getStatIcon(
  iconName?: string,
  label?: string
): ComponentType<{ className?: string; strokeWidth?: number }> {
  if (iconName) {
    const normalizedName = iconName.toLowerCase().trim();
    return iconMap[normalizedName] || DEFAULT_ICON;
  }

  if (label) {
    // Try to infer icon from label
    const normalizedLabel = label.toLowerCase();
    if (normalizedLabel.includes("module") || normalizedLabel.includes("mlm")) {
      return Rocket;
    }
    if (normalizedLabel.includes("country") || normalizedLabel.includes("countries") || normalizedLabel.includes("global") || normalizedLabel.includes("world")) {
      return Globe2;
    }
    if (normalizedLabel.includes("uptime") || normalizedLabel.includes("performance")) {
      return Gauge;
    }
    if (normalizedLabel.includes("support") || normalizedLabel.includes("help")) {
      return Headset;
    }
  }

  return DEFAULT_ICON;
}

/**
 * Intelligently split a label into two lines
 * Attempts to split at natural word boundaries
 */
export function splitLabelIntoLines(
  label: string,
  customFirstLine?: string,
  customSecondLine?: string
): { firstLine: string; secondLine: string } {
  // Use custom lines if provided
  if (customFirstLine && customSecondLine) {
    return { firstLine: customFirstLine, secondLine: customSecondLine };
  }

  const words = label.split(" ");
  const wordCount = words.length;

  // Single word - try to split in the middle if it's long
  if (wordCount === 1) {
    const word = words[0];
    if (word.length > 8) {
      const mid = Math.ceil(word.length / 2);
      return {
        firstLine: word.slice(0, mid),
        secondLine: word.slice(mid),
      };
    }
    return { firstLine: word, secondLine: "" };
  }

  // Two words - one per line
  if (wordCount === 2) {
    return { firstLine: words[0], secondLine: words[1] };
  }

  // Three or more words - split roughly in half
  const mid = Math.ceil(wordCount / 2);
  return {
    firstLine: words.slice(0, mid).join(" "),
    secondLine: words.slice(mid).join(" "),
  };
}
