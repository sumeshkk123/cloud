"use client";

import type { ComponentType, MouseEvent } from "react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SmartImage } from "@/components/ui/smart-image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath, resolveHref } from "@/lib/locale-links";
import { getPageFromSlug } from "@/lib/page-slugs";
import { cn } from "@/lib/utils";
import type {
    CmsLink,
    LanguageOption,
    NavItem
} from "@/types/global";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { MegaSurface } from "@/components/site/header";

type MenuBarProps = {
    locale: SupportedLocale;
    siteName: string;
    navItems: NavItem[];
    headerCta?: CmsLink | null;
    languageLabel?: string | null;
    languageAriaLabel?: string | null;
    languageOptions: LanguageOption[];
};

export function MenuBar({
    locale,
    siteName,
    navItems,
    headerCta,
    languageLabel,
    languageAriaLabel,
    languageOptions
}: MenuBarProps) {
    const pathname = usePathname();
    const normalizedPathWithoutLocale = useMemo(() => {
        if (!pathname || typeof pathname !== "string") return "/";
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length === 0) return "/";

        const first = segments[0];
        const normalizedFirst =
            first === "pt-pt" ? "pt" : first === "zh-hans" ? "zh" : first;
        const localeSet = new Set<SupportedLocale>(["en", "es", "fr", "it", "de", "pt", "zh"]);
        const hasLocale = localeSet.has(normalizedFirst as SupportedLocale);
        const rest = hasLocale ? segments.slice(1) : segments;
        const safeRest = Array.isArray(rest) ? rest : [];
        return `/${safeRest.join("/")}`;
    }, [pathname]);
    const hideLanguageSwitcher = useMemo(() => {
        const rest = normalizedPathWithoutLocale.split("/").filter(Boolean);
        if (rest.length === 0) return false;

        const firstSegment = rest[0];
        const pageId =
            getPageFromSlug(firstSegment, locale) ||
            getPageFromSlug(firstSegment, "en") ||
            firstSegment;

        if (pageId !== "industries") return false;
        return normalizedPathWithoutLocale === `/${firstSegment}` || normalizedPathWithoutLocale.startsWith(`/${firstSegment}/`);
    }, [normalizedPathWithoutLocale, locale]);

    const [openMega, setOpenMega] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const [megaOffset, setMegaOffset] = useState<number>(0);

    const cancelScheduledOpen = () => {
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }
    };

    const cancelScheduledClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const handleOpenMega = (label: string, immediate = false) => {
        cancelScheduledClose();
        if (immediate) {
            setOpenMega(label);
        } else {
            if (openTimer.current) return;
            openTimer.current = setTimeout(() => {
                setOpenMega(label);
                openTimer.current = null;
            }, 150);
        }
    };

    const handleScheduleClose = (label: string) => {
        cancelScheduledOpen();
        if (closeTimer.current) return;
        closeTimer.current = setTimeout(() => {
            if (openMega === label) {
                setOpenMega(null);
            }
            closeTimer.current = null;
        }, 200);
    };

    const handleImmediateClose = () => {
        cancelScheduledOpen();
        cancelScheduledClose();
        setOpenMega(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 100); // Start fixing after 100px scroll
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelScheduledOpen();
            cancelScheduledClose();
        };
    }, []);

    useLayoutEffect(() => {
        if (!headerRef.current || !openMega) return;
        const headerRect = headerRef.current.getBoundingClientRect();
        setMegaOffset(headerRect.bottom);
    }, [openMega]);

    const sortedNav = useMemo(() => {
        return [...navItems].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }, [navItems]);

    const resolvedSiteName = siteName || "Cloud MLM Software";
    const resolvedLanguageLabel = languageLabel ?? null;
    const resolvedLanguageAriaLabel = languageAriaLabel ?? "Select language";
    const resolvedLanguageOptions = languageOptions.length > 0 ? languageOptions : [];

    const resolvedHeaderCta = headerCta ?? null;
    const cta = resolvedHeaderCta ? resolveHref(resolvedHeaderCta.href, locale) : null;

    const activeMegaItem = useMemo(
        () => sortedNav.find((item) => item.kind === "mega" && item.label === openMega) ?? null,
        [sortedNav, openMega]
    );

    function stripLocalePrefix(path: string): string {
        const segments = path.split("/").filter(Boolean);
        if (segments.length === 0) return "/";
        const first = segments[0];
        const normalizedFirst =
            first === "pt-pt" ? "pt" : first === "zh-hans" ? "zh" : first;
        const localeSet = new Set<SupportedLocale>(["en", "es", "fr", "it", "de", "pt", "zh"]);
        if (localeSet.has(normalizedFirst as SupportedLocale)) {
            segments.shift();
        }
        return `/${segments.join("/")}` || "/";
    }

    function isNavItemActive(itemHref: string): boolean {
        const pathWithoutLocale = stripLocalePrefix(pathname || "/");
        const normalizedPath = pathWithoutLocale.replace(/\/$/, "") || "/";
        const normalizedHref = (itemHref || "").replace(/\/$/, "") || "/";
        return normalizedPath === normalizedHref || (normalizedHref !== "/" && normalizedPath.startsWith(normalizedHref + "/"));
    }

    function HeaderLink({ item, locale }: { item: NavItem; locale: SupportedLocale }) {
        if (!item.href) return null;
        const href = resolveIndustryAwareHref(item.href, locale);
        if (!href) return null;
        const isActive = isNavItemActive(item.href);

        return (
            <Link
                href={href.href}
                className={cn(
                    "inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition",
                    "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive && "text-primary font-semibold"
                )}
            >
                {item.label}
            </Link>
        );
    }

    function resolveIndustryAwareHref(rawHref: string, activeLocale: SupportedLocale) {
        if (rawHref) {
            const rawPath = rawHref.startsWith("http://") || rawHref.startsWith("https://")
                ? (() => {
                    try {
                        return new URL(rawHref).pathname;
                    } catch {
                        return rawHref;
                    }
                })()
                : rawHref;
            const rawStripped = rawPath.replace(/^\/(?:en|es|fr|it|de|pt|zh|pt-pt|zh-hans)(?=\/|$)/, "");
            const rawSegments = rawStripped.split("/").filter(Boolean);
            const rawFirst = rawSegments[0] || "";
            const rawPageId = getPageFromSlug(rawFirst, activeLocale) || getPageFromSlug(rawFirst, "en");
            if (rawStripped === "/industries" || rawStripped.startsWith("/industries/") || rawPageId === "industries") {
                const rest = rawSegments.length > 1 ? `/${rawSegments.slice(1).join("/")}` : "";
                return { href: `/industries${rest}`, external: false };
            }
        }

        const resolved = resolveHref(rawHref, activeLocale);
        if (resolved.external) return resolved;
        const stripped = resolved.href.replace(/^\/(?:en|es|fr|it|de|pt|zh|pt-pt|zh-hans)(?=\/|$)/, "");
        const segments = stripped.split("/").filter(Boolean);
        const first = segments[0] || "";
        const pageId = getPageFromSlug(first, activeLocale) || getPageFromSlug(first, "en");
        if (stripped === "/industries" || stripped.startsWith("/industries/") || pageId === "industries") {
            const rest = segments.length > 1 ? `/${segments.slice(1).join("/")}` : "";
            return { href: `/industries${rest}`, external: false };
        }
        return resolved;
    }

    function CtaButton({ href, external, label }: { href: string; external?: boolean; label: string }) {
        return (
            <Button
                asChild
                size="sm"
                className="rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
            >
                <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                    {label}
                </Link>
            </Button>
        );
    }

    return (
        <>
            <div
                ref={headerRef}
                className={`${isScrolled ? 'fixed top-0 left-0 right-0 bg-white dark:bg-background/90' : 'relative'} z-[9999] w-full`}
                style={{ zIndex: 9999 }}
            >
                <div className="w-full backdrop-blur-sm border-b border-border/50 bg-white dark:bg-background/90 px-4 lg:px-8 xl:px-6" style={{ zIndex: 9999 }}>
                    <div className="container mx-auto">
                        <div className={`${isScrolled ? 'flex h-20' : 'flex h-20'} w-full items-center justify-between  relative`} style={{ zIndex: 9999 }}>
                            <div className="flex items-center gap-3 ">
                                <Link
                                    href={buildLocalizedPath("/", locale)}
                                    className="flex items-center gap-2"
                                    aria-label={resolvedSiteName}
                                >
                                    <span className="relative block h-9 w-32">
                                        <SmartImage
                                            src="/wp-content/themes/cloudmlmdemo/assets/images/cloudmlm-logo.webp"
                                            alt={resolvedSiteName}
                                            width={128}
                                            height={36}
                                            className="h-9 w-auto object-contain"
                                            priority
                                        />
                                    </span>
                                </Link>
                            </div>
                            <nav className="relative hidden flex-1 items-center justify-center lg:flex">
                                <ul className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground">
                                    {sortedNav.map((item) => {
                                        const isMega = item.kind === "mega" && Boolean(item.mega);
                                        const isOpen = openMega === item.label;
                                        const panelId = isMega ? 'mega-surface' : undefined;

                                        return (
                                            <li
                                                key={item.label}
                                                className="relative"
                                                onMouseEnter={() => {
                                                    if (isMega) handleOpenMega(item.label);
                                                }}
                                                onMouseLeave={(event) => {
                                                    if (!isMega) return;
                                                    const next = (event.relatedTarget as HTMLElement | null)?.closest("[data-mega-panel]");
                                                    if (!next) {
                                                        handleScheduleClose(item.label);
                                                    }
                                                }}
                                            >
                                                {isMega ? (
                                                    <button
                                                        type="button"
                                                        aria-haspopup="true"
                                                        aria-expanded={isOpen}
                                                        aria-controls={panelId}
                                                        className={cn(
                                                            "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition",
                                                            "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                                            (isOpen || (item.href && isNavItemActive(item.href))) ? "text-primary font-semibold" : ""
                                                        )}
                                                        onClick={() => {
                                                            cancelScheduledOpen();
                                                            cancelScheduledClose();
                                                            setOpenMega((current) => (current === item.label ? null : item.label));
                                                        }}
                                                        onFocus={() => handleOpenMega(item.label, true)}
                                                        onBlur={(event) => {
                                                            const next = (event.relatedTarget as HTMLElement | null)?.closest("[data-mega-panel]");
                                                            if (!next) {
                                                                handleScheduleClose(item.label);
                                                            }
                                                        }}
                                                        onKeyDown={(event) => {
                                                            if (event.key === "Escape") {
                                                                event.preventDefault();
                                                                handleImmediateClose();
                                                                event.currentTarget.blur();
                                                            }
                                                        }}
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "rotate-0")} />
                                                    </button>
                                                ) : (
                                                    <HeaderLink item={item} locale={locale} />
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                            <div className="hidden items-center gap-3 lg:flex">
                                <ThemeToggle />
                                {!hideLanguageSwitcher ? (
                                    <LanguageSwitcher
                                        locale={locale}
                                        label={resolvedLanguageLabel}
                                        ariaLabel={resolvedLanguageAriaLabel}
                                        options={resolvedLanguageOptions}
                                    />
                                ) : null}
                                {resolvedHeaderCta && cta ? <CtaButton href={cta.href} external={cta.external} label={resolvedHeaderCta.title} /> : null}
                            </div>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-border/60 p-2 text-foreground hover:bg-muted lg:hidden"
                                aria-label="Open navigation menu"
                                onClick={() => setMobileOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MegaSurface
                activeItem={activeMegaItem}
                offset={megaOffset}
                locale={locale}
                onHover={handleOpenMega}
                onLeave={handleScheduleClose}
                onForceClose={handleImmediateClose}
            />
        </>
    );
}
