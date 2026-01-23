"use client";

import type { ComponentType, MouseEvent } from "react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SmartImage } from "@/components/ui/smart-image";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath, resolveHref } from "@/lib/locale-links";
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

    function HeaderLink({ item, locale }: { item: NavItem; locale: SupportedLocale }) {
        if (!item.href) return null;
        const href = resolveHref(item.href, locale);
        if (!href) return null;

        return (
            <Link
                href={href.href}
                className={cn(
                    "inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition",
                    "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
            >
                {item.label}
            </Link>
        );
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
                                <ul className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
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
                                                            isOpen ? "bg-primary/10 text-foreground shadow-sm" : ""
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
                                <LanguageSwitcher
                                    locale={locale}
                                    label={resolvedLanguageLabel}
                                    ariaLabel={resolvedLanguageAriaLabel}
                                    options={resolvedLanguageOptions}
                                />
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
