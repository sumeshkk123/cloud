import type {
  CmsLink,
  FooterBottomLink,
  FooterColumn,
  FooterContact,
  LanguageOption,
  MegaMenu,
  NavItem
} from "@/types/global";
import type { SupportedLocale } from "@/config/site";

const normalizeKey = (value?: string | null): string => (value ? value.trim().toLowerCase() : "");

function coalesceText(preferred?: string | null, fallback?: string | null): string | undefined {
  const trimmed = preferred?.trim();
  if (trimmed) {
    return trimmed;
  }
  const fallbackTrimmed = fallback?.trim();
  return fallbackTrimmed || undefined;
}

function coalesceHref(preferred?: string | null, fallback?: string | null): string | null {
  if (preferred === undefined || preferred === null || preferred === "") {
    return fallback ?? null;
  }
  return preferred;
}

function mergeMegaMenu(base?: MegaMenu, override?: MegaMenu | null): MegaMenu | undefined {
  if (!base && !override) {
    return undefined;
  }

  if (!base) {
    return override ?? undefined;
  }

  if (!override) {
    return base;
  }

  const mergedHighlights = override.highlights?.length ? override.highlights : base.highlights;
  const mergedCards = override.cards?.length ? override.cards : base.cards;
  const mergedServiceList = override.serviceList?.length ? override.serviceList : base.serviceList;
  const mergedServiceDetails = override.serviceDetails?.length ? override.serviceDetails : base.serviceDetails;
  const mergedCategories = override.categories && override.categories.length ? override.categories : base.categories;
  const mergedCallouts = override.callouts && override.callouts.length ? override.callouts : base.callouts;
  const mergedSeeAll = override.seeAll ?? base.seeAll;

  return {
    variant: override.variant ?? base.variant,
    highlights: mergedHighlights,
    cards: mergedCards,
    serviceList: mergedServiceList,
    serviceDetails: mergedServiceDetails,
    categories: mergedCategories,
    callouts: mergedCallouts,
    seeAll: mergedSeeAll
  };
}

export function mergeNavItems(base: NavItem[], overrides?: NavItem[] | null): NavItem[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, NavItem>();
  const baseByOrder = new Map<number, NavItem>();
  base.forEach((item) => {
    const key = normalizeKey(item.label);
    if (key) {
      baseByKey.set(key, item);
    }
    if (typeof item.order === "number") {
      baseByOrder.set(item.order, item);
    }
  });

  const seenLabelKeys = new Set<string>();
  const seenOrders = new Set<number>();
  const merged: NavItem[] = overrides.map((override, index) => {
    const key = normalizeKey(override.label);
    let fallback = key ? baseByKey.get(key) : undefined;

    if (!fallback && typeof override.order === "number") {
      fallback = baseByOrder.get(override.order);
    }

    if (key) {
      seenLabelKeys.add(key);
    }
    if (typeof override.order === "number") {
      seenOrders.add(override.order);
    }

    if (!fallback) {
      return {
        label: override.label?.trim() || override.label || `Navigation ${index + 1}`,
        href: coalesceHref(override.href, null),
        kind: override.kind === "mega" ? "mega" : "link",
        order: typeof override.order === "number" ? override.order : base.length + index,
        mega: mergeMegaMenu(undefined, override.mega)
      };
    }

    const kind: NavItem["kind"] = fallback.kind;
    const mega = kind === "mega" ? mergeMegaMenu(fallback.mega, override.mega) : undefined;

    const fallbackKey = normalizeKey(fallback.label);
    if (fallbackKey) {
      seenLabelKeys.add(fallbackKey);
    }
    if (typeof fallback.order === "number") {
      seenOrders.add(fallback.order);
    }

    return {
      label: coalesceText(override.label, fallback.label) ?? fallback.label,
      href: coalesceHref(override.href, fallback.href),
      kind,
      order: typeof override.order === "number" ? override.order : fallback.order,
      mega
    };
  });

  base.forEach((item) => {
    const key = normalizeKey(item.label);
    const order = typeof item.order === "number" ? item.order : undefined;
    if ((key && seenLabelKeys.has(key)) || (order !== undefined && seenOrders.has(order))) {
      return;
    }

    if (key) {
      seenLabelKeys.add(key);
    }
    if (order !== undefined) {
      seenOrders.add(order);
    }
    merged.push(item);
  });

  return merged.sort((a, b) => a.order - b.order);
}

function mergeLinks(base: CmsLink[], overrides?: CmsLink[] | null): CmsLink[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const sanitizedOverrides = overrides.filter((link) => Boolean(link?.title?.trim()));
  if (sanitizedOverrides.length === 0) {
    return base;
  }

  const merged = base.map((link, index) => {
    const override = sanitizedOverrides[index];
    if (!override) {
      return link;
    }
    return {
      title: coalesceText(override.title, link.title) ?? link.title,
      href: coalesceHref(override.href, link.href)
    };
  });

  if (sanitizedOverrides.length > base.length) {
    sanitizedOverrides.slice(base.length).forEach((link) => {
      merged.push({
        title: link.title,
        href: coalesceHref(link.href, null)
      });
    });
  }

  return merged;
}

export function mergeFooterColumns(base: FooterColumn[], overrides?: FooterColumn[] | null): FooterColumn[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, FooterColumn>();
  const baseByIndex = new Map<number, FooterColumn>();
  base.forEach((column) => {
    const key = normalizeKey(column.title);
    if (key) {
      baseByKey.set(key, column);
    }
    baseByIndex.set(baseByIndex.size, column);
  });

  const seenKeys = new Set<string>();
  const seenIndices = new Set<number>();
  const merged: FooterColumn[] = overrides.map((override, index) => {
    const key = normalizeKey(override.title);
    let fallback = key ? baseByKey.get(key) : undefined;
    if (!fallback && baseByIndex.has(index)) {
      fallback = baseByIndex.get(index);
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);

    if (!fallback) {
      return {
        title: coalesceText(override.title, `Column ${index + 1}`) ?? `Column ${index + 1}`,
        links: mergeLinks([], override.links)
      };
    }

    const fallbackKey = normalizeKey(fallback.title);
    if (fallbackKey) {
      seenKeys.add(fallbackKey);
    }

    return {
      title: coalesceText(override.title, fallback.title) ?? fallback.title,
      links: mergeLinks(fallback.links, override.links)
    };
  });

  base.forEach((column) => {
    const key = normalizeKey(column.title);
    const index = base.indexOf(column);
    if ((key && seenKeys.has(key)) || seenIndices.has(index)) {
      return;
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);
    merged.push(column);
  });

  return merged;
}

export function mergeFooterContacts(base: FooterContact[], overrides?: FooterContact[] | null): FooterContact[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByKey = new Map<string, FooterContact>();
  const baseByIndex = new Map<number, FooterContact>();
  base.forEach((contact, index) => {
    const key = normalizeKey(contact.heading);
    if (key) {
      baseByKey.set(key, contact);
    }
    baseByIndex.set(index, contact);
  });

  const seenKeys = new Set<string>();
  const seenIndices = new Set<number>();
  const merged: FooterContact[] = overrides.map((override, index) => {
    const key = normalizeKey(override.heading);
    let fallback = key ? baseByKey.get(key) : undefined;

    if (!fallback && baseByIndex.has(index)) {
      fallback = baseByIndex.get(index);
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);

    if (!fallback) {
      return {
        heading: coalesceText(override.heading, null) ?? undefined,
        body: coalesceText(override.body, null) ?? undefined,
        links: mergeLinks([], override.links)
      };
    }

    const fallbackKey = normalizeKey(fallback.heading);
    if (fallbackKey) {
      seenKeys.add(fallbackKey);
    }

    return {
      heading: coalesceText(override.heading, fallback.heading),
      body: coalesceText(override.body, fallback.body),
      links: mergeLinks(fallback.links, override.links)
    };
  });

  base.forEach((contact, index) => {
    const key = normalizeKey(contact.heading);
    if ((key && seenKeys.has(key)) || seenIndices.has(index)) {
      return;
    }

    if (key) {
      seenKeys.add(key);
    }
    seenIndices.add(index);
    merged.push(contact);
  });

  return merged;
}

export function mergeFooterBottomLinks(base: FooterBottomLink[], overrides?: FooterBottomLink[] | null): FooterBottomLink[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const sanitizedOverrides = overrides.filter((link) => Boolean(link?.title?.trim()));
  if (sanitizedOverrides.length === 0) {
    return base;
  }

  return mergeLinks(base, sanitizedOverrides);
}

export function mergeLanguageOptions(base: LanguageOption[], overrides?: LanguageOption[] | null): LanguageOption[] {
  if (!overrides || overrides.length === 0) {
    return base;
  }

  const baseByLocale = new Map<SupportedLocale, LanguageOption>();
  base.forEach((option) => {
    baseByLocale.set(option.locale, option);
  });

  const merged: LanguageOption[] = overrides.map((option) => {
    const fallback = baseByLocale.get(option.locale);
    return {
      locale: option.locale,
      label: coalesceText(option.label, fallback?.label) ?? option.locale.toUpperCase(),
      href: option.href || fallback?.href || option.href
    };
  });

  base.forEach((option) => {
    if (!merged.some((item) => item.locale === option.locale)) {
      merged.push(option);
    }
  });

  return merged;
}

export function mergeHeaderCta(base: CmsLink | null, override?: CmsLink | null): CmsLink | null {
  if (!override) {
    return base;
  }

  const title = coalesceText(override.title, base?.title);
  if (!title) {
    return base;
  }

  return {
    title,
    href: coalesceHref(override.href, base?.href ?? null)
  };
}
