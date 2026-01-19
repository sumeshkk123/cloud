import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";

/**
 * Map of icon names to Remix Icon components
 * Using narrow/slim line icons from Remix Icon
 */
const REMIX_ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  // Rocket/Launch icons
  Rocket: RemixIcon.RiRocketLine,
  rocket: RemixIcon.RiRocketLine,
  launch: RemixIcon.RiRocketLine,
  
  // Gauge/Performance icons
  Gauge: RemixIcon.RiSpeedLine,
  gauge: RemixIcon.RiSpeedLine,
  speed: RemixIcon.RiSpeedLine,
  performance: RemixIcon.RiSpeedLine,
  
  // Globe/World icons
  Globe2: RemixIcon.RiGlobalLine,
  globe: RemixIcon.RiGlobalLine,
  globe2: RemixIcon.RiGlobalLine,
  world: RemixIcon.RiGlobalLine,
  global: RemixIcon.RiGlobalLine,
  
  // Heart/Health icons
  HeartPulse: RemixIcon.RiHeartPulseLine,
  heart: RemixIcon.RiHeartPulseLine,
  health: RemixIcon.RiHeartPulseLine,
  satisfaction: RemixIcon.RiHeartPulseLine,
  
  // Building/Enterprise icons
  Building2: RemixIcon.RiBuildingLine,
  building: RemixIcon.RiBuildingLine,
  enterprise: RemixIcon.RiBuildingLine,
  
  // Users/Team icons
  Users: RemixIcon.RiTeamLine,
  users: RemixIcon.RiTeamLine,
  team: RemixIcon.RiTeamLine,
  
  // Headset/Support icons
  Headset: RemixIcon.RiCustomerServiceLine,
  headset: RemixIcon.RiCustomerServiceLine,
  support: RemixIcon.RiCustomerServiceLine,
  
  // Sparkles/Beauty icons
  Sparkles: RemixIcon.RiSparklingLine,
  sparkles: RemixIcon.RiSparklingLine,
  beauty: RemixIcon.RiSparklingLine,
  
  // Shield/Security icons
  ShieldCheck: RemixIcon.RiShieldCheckLine,
  shield: RemixIcon.RiShieldCheckLine,
  security: RemixIcon.RiShieldCheckLine,
  insurance: RemixIcon.RiShieldCheckLine,
  
  // Store/Shop icons
  Store: RemixIcon.RiStoreLine,
  store: RemixIcon.RiStoreLine,
  shop: RemixIcon.RiStoreLine,
  ecommerce: RemixIcon.RiStoreLine,
  
  // Coins/Finance icons
  Coins: RemixIcon.RiCoinsLine,
  coins: RemixIcon.RiCoinsLine,
  finance: RemixIcon.RiCoinsLine,
  cryptocurrency: RemixIcon.RiCoinsLine,
  
  // Bitcoin/Crypto icons - using CoinLine as Bitcoin icon
  Bitcoin: RemixIcon.RiCoinLine,
  bitcoin: RemixIcon.RiCoinLine,
  crypto: RemixIcon.RiCoinLine,
  web3: RemixIcon.RiCoinLine,
  
  // Layers/Stack icons
  Layers: RemixIcon.RiStackLine,
  layers: RemixIcon.RiStackLine,
  
  // Workflow/Automation icons
  Workflow: RemixIcon.RiFlowChart,
  workflow: RemixIcon.RiFlowChart,
  automation: RemixIcon.RiFlowChart,
  
  // Default fallback
  default: RemixIcon.RiStarLine,
};

/**
 * Default icon to use when no match is found
 */
const DEFAULT_ICON = RemixIcon.RiStarLine;

/**
 * Get Remix Icon component from icon name
 */
export function getRemixIcon(iconName?: string): ComponentType<{ className?: string }> {
  if (!iconName) {
    return DEFAULT_ICON;
  }
  
  const normalizedName = iconName.trim();
  return REMIX_ICON_MAP[normalizedName] || REMIX_ICON_MAP[normalizedName.toLowerCase()] || DEFAULT_ICON;
}
