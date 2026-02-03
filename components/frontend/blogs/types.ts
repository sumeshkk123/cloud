import type { ComponentType } from "react";

export type IconType = ComponentType<{ className?: string }>;

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

export type FeaturedStory = {
  title: string;
  summary: string;
  meta: string;
  href: string;
  icon: IconType;
};

export type Insight = {
  title: string;
  summary: string;
  date: string;
  category: string;
  href: string;
};

export type FocusArea = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: IconType;
};

export type AudienceAction = {
  label: string;
  path?: string;
  externalHref?: string;
};

export type AudienceTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  actions: AudienceAction[];
};

export type AioSignal = {
  title: string;
  description: string;
  icon: IconType;
};

export type BlogsFaq = {
  question: string;
  answer: string;
};
