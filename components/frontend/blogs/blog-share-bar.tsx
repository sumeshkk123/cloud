"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const TWITTER_INTENT = "https://twitter.com/intent/tweet";
const LINKEDIN_SHARE = "https://www.linkedin.com/sharing/share-offsite/";
const FACEBOOK_SHARE = "https://www.facebook.com/sharer/sharer.php";

type BlogShareBarProps = {
  shareUrl: string;
  title: string;
  shareLabel?: string;
  /** When false, only icons are shown (no "Share" label). Default true */
  showLabel?: boolean;
  className?: string;
};

function buildTwitterUrl(url: string, text: string): string {
  const params = new URLSearchParams();
  params.set("url", url);
  params.set("text", text);
  return `${TWITTER_INTENT}?${params.toString()}`;
}

function buildLinkedInUrl(url: string): string {
  const params = new URLSearchParams();
  params.set("url", url);
  return `${LINKEDIN_SHARE}?${params.toString()}`;
}

function buildFacebookUrl(url: string): string {
  const params = new URLSearchParams();
  params.set("u", url);
  return `${FACEBOOK_SHARE}?${params.toString()}`;
}

export function BlogShareBar({
  shareUrl,
  title,
  shareLabel = "Share",
  showLabel = true,
  className
}: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      setCopied(false);
    }
  }, [shareUrl]);

  const shareLinks = [
    {
      label: "Twitter",
      href: buildTwitterUrl(shareUrl, title),
      icon: Twitter,
      ariaLabel: "Share on X (Twitter)"
    },
    {
      label: "LinkedIn",
      href: buildLinkedInUrl(shareUrl),
      icon: Linkedin,
      ariaLabel: "Share on LinkedIn"
    },
    {
      label: "Facebook",
      href: buildFacebookUrl(shareUrl),
      icon: Facebook,
      ariaLabel: "Share on Facebook"
    }
  ];

  return (
    <div className={cn(showLabel ? "space-y-4" : "space-y-2", className)}>
      {showLabel && (
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {shareLabel}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map(({ href, icon: Icon, ariaLabel }) => (
          <Link
            key={ariaLabel}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <Icon className="h-5 w-5" aria-hidden />
          </Link>
        ))}
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Copy link"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          {copied ? (
            <Check className="h-5 w-5 text-primary" aria-hidden />
          ) : (
            <Link2 className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>
      {copied && (
        <p className="text-xs text-primary">Link copied to clipboard</p>
      )}
    </div>
  );
}
