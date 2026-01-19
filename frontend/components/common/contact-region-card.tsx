import * as React from "react";
import Link from "next/link";
import { MapPin, PhoneCall, EnvelopeSimple } from "phosphor-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import type { FlagCode } from "@/components/home/contact-regions";

// WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

export interface ContactRegionCardProps extends React.HTMLAttributes<HTMLElement> {
    region: string;
    subheading: string;
    address: string[];
    phones: string[];
    email: string;
    whatsapp?: string;
    flag: FlagCode;
}

const ContactRegionCard = React.forwardRef<HTMLElement, ContactRegionCardProps>(
    (
        {
            className,
            region,
            subheading,
            address,
            phones,
            email,
            whatsapp,
            flag,
            ...props
        },
        ref
    ) => {
        return (
            <article
                ref={ref as any}
                className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-card transition-all duration-500",
                    "hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
                    className
                )}
                {...props}
            >
                {/* Animated background gradient effect */}
                <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-6 p-8">
                    {/* Header with flag and region */}
                    <div className="flex items-start gap-4">
                        <div className="relative">
                            <FlagBadge code={flag} />
                            <div className="absolute -inset-1 rounded-full bg-primary/20 blur opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <Typography
                                as="h5"
                                variant="h5"
                                className="font-bold tracking-tight text-foreground"
                            >
                                {region}
                            </Typography>
                            <Typography
                                variant="small"
                                className="uppercase tracking-[0.1em] font-semibold text-primary/60"
                            >
                                {subheading}
                            </Typography>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/60" />

                    {/* Address */}
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                            <MapPin size={18} weight="duotone" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                            {address.map((line, index) => (
                                <Typography
                                    key={index}
                                    variant="small"
                                    className="leading-relaxed text-muted-foreground"
                                >
                                    {line}
                                </Typography>
                            ))}
                            {whatsapp && (
                                <Link
                                    href={`https://wa.me/${whatsapp.replace(/\s+/g, "").replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                                >
                                    <WhatsAppIcon className="h-3.5 w-3.5" />
                                    <Typography
                                        variant="small"
                                        className="leading-relaxed"
                                    >
                                        WhatsApp: {whatsapp}
                                    </Typography>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Contact information */}
                    <div className="mt-auto space-y-3 pt-2">
                        {phones.map((phone) => {
                            const normalized = phone.replace(/\s+/g, "");
                            return (
                                <Link
                                    key={phone}
                                    href={`tel:${normalized}`}
                                    className="group/phone flex items-center gap-3 rounded-xl border border-primary/30 bg-card/90 px-4 py-3 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary transition-colors group-hover/phone:bg-primary/30">
                                        <PhoneCall size={14} weight="duotone" />
                                    </div>
                                    <span className="truncate">{phone}</span>
                                </Link>
                            );
                        })}
                        {whatsapp && (
                            <Link
                                href={`https://wa.me/${whatsapp.replace(/\s+/g, "").replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/whatsapp flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50 hover:bg-green-500/20 hover:shadow-md hover:shadow-green-500/20"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 transition-colors group-hover/whatsapp:bg-green-500/30">
                                    <WhatsAppIcon className="h-3.5 w-3.5" />
                                </div>
                                <span className="truncate">WhatsApp: {whatsapp}</span>
                            </Link>
                        )}
                        <Link
                            href={`mailto:${email}`}
                            className="group/email flex items-center gap-3 rounded-xl border border-primary/30 bg-card/90 px-4 py-3 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                        >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary transition-colors group-hover/email:bg-primary/30">
                                <EnvelopeSimple size={14} weight="duotone" />
                            </div>
                            <span className="truncate">{email}</span>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }
);
ContactRegionCard.displayName = "ContactRegionCard";

type FlagBadgeProps = {
    code: FlagCode;
};

function FlagBadge({ code }: FlagBadgeProps) {
    return (
        <div className="relative">
            <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border-2 border-border/60 bg-card shadow-lg shadow-[0_8px_20px_-8px_rgba(15,23,42,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {renderFlag(code)}
            </span>
        </div>
    );
}

function renderFlag(code: FlagCode) {
    switch (code) {
        case "in":
            return (
                <svg viewBox="0 0 32 32" className="h-full w-full">
                    <rect width="32" height="32" fill="#f47c20" />
                    <rect y="10.67" width="32" height="10.66" fill="#ffffff" />
                    <rect y="21.33" width="32" height="10.67" fill="#138808" />
                    <circle cx="16" cy="16" r="3.2" fill="#054187" />
                    <circle cx="16" cy="16" r="2.2" fill="none" stroke="#ffffff" strokeWidth="0.8" />
                </svg>
            );
        case "ae":
            return (
                <svg viewBox="0 0 32 32" className="h-full w-full">
                    <rect width="32" height="32" fill="#ffffff" />
                    <rect width="9" height="32" fill="#ef2b2d" />
                    <rect x="9" width="23" height="10.67" fill="#009e49" />
                    <rect x="9" y="10.67" width="23" height="10.66" fill="#ffffff" />
                    <rect x="9" y="21.33" width="23" height="10.67" fill="#141414" />
                </svg>
            );
        case "na":
            return (
                <svg viewBox="0 0 32 32" className="h-full w-full">
                    <rect width="32" height="32" fill="#b22234" />
                    <rect y="4" width="32" height="4" fill="#ffffff" />
                    <rect y="12" width="32" height="4" fill="#ffffff" />
                    <rect y="20" width="32" height="4" fill="#ffffff" />
                    <rect y="28" width="32" height="4" fill="#ffffff" />
                    <rect width="16" height="16" fill="#3c3b6e" />
                    <polygon points="6,2 7.2,5.3 10.8,5.3 7.9,7.4 9.1,10.6 6,8.7 2.9,10.6 4.1,7.4 1.2,5.3 4.8,5.3" fill="#ffffff" />
                    <rect x="20" width="12" height="32" fill="#ffffff" opacity="0.75" />
                </svg>
            );
        case "eu":
            return (
                <svg viewBox="0 0 32 32" className="h-full w-full">
                    <rect width="32" height="32" fill="#1f4ab8" />
                    {[...Array(8)].map((_, index) => {
                        const angle = (index / 8) * Math.PI * 2;
                        const cx = 16 + Math.cos(angle) * 9;
                        const cy = 16 + Math.sin(angle) * 9;
                        return <circle key={index} cx={cx} cy={cy} r={1.4} fill="#facc15" />;
                    })}
                </svg>
            );
        case "apac":
            return (
                <svg viewBox="0 0 32 32" className="h-full w-full">
                    <rect width="32" height="32" fill="#d90429" />
                    <rect y="12" width="32" height="8" fill="#ffffff" />
                    <circle cx="10" cy="16" r="4" fill="#ffffff" />
                    <circle cx="11.5" cy="16" r="2.4" fill="#d90429" />
                    <path d="M22 10l2 4 4 .5-3 2.7.9 4.8-3.9-2.3-3.9 2.3.9-4.8-3-2.7 4-.5z" fill="#ffffff" />
                </svg>
            );
        default:
            return null;
    }
}

export { ContactRegionCard };
