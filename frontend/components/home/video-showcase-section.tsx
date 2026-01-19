'use client';

import { Play } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

interface VideoShowcaseSectionProps {
    badge?: string;
    heading?: string;
    description?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    videoUrl?: string;
    videoPoster?: string;
    youtubeUrl?: string;
}

// Extract YouTube video ID and start time from URL
function getYouTubeEmbedUrl(url: string): string {
    // Handle youtu.be format: https://youtu.be/VIDEO_ID?t=SECONDS
    const youtuBeMatch = url.match(/youtu\.be\/([^?]+)(?:\?t=(\d+))?/);
    if (youtuBeMatch) {
        const videoId = youtuBeMatch[1];
        const startTime = youtuBeMatch[2] || '0';
        return `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0&modestbranding=1`;
    }

    // Handle youtube.com format: https://www.youtube.com/watch?v=VIDEO_ID&t=SECONDS
    const youtubeMatch = url.match(/[?&]v=([^&]+)(?:&t=(\d+))?/);
    if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        const startTime = youtubeMatch[2] || '0';
        return `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0&modestbranding=1`;
    }

    return url;
}

export function VideoShowcaseSection({
    badge = "Watch & Learn",
    heading = "Time is priceless. Cloud MLM is free.",
    description = "See how Cloud MLM Software transforms your network marketing business. Watch our demo to discover how you can save time, automate workflows, and scale your MLM operations effortlessly.",
    subtitle = "Save 2 days per week.",
    buttonText = "Start Free Trial",
    buttonHref = "/demo",
    videoUrl,
    videoPoster,
    youtubeUrl = "https://youtu.be/naWFi4PCojA?t=1",
}: VideoShowcaseSectionProps) {
    const embedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null;
    return (
        <section className="relative isolate overflow-visible px-14 pt-16 bg-background">
            <div className="container relative z-10">
                {/* Container with :before pseudo-element for half-height background */}
                <div
                    className="relative before:absolute before:inset-x-0 before:top-0 before:h-2/3 before:-mx-4 before:rounded-t-3xl before:md:-mx-8 before:md:rounded-t-[2rem] before:content-['']"
                    style={{
                        '--gradient-bg': 'linear-gradient(to bottom right, #3b82f6, hsl(var(--primary)), #06b6d4, #8b5cf6, #6366f1)',
                    } as React.CSSProperties & { '--gradient-bg'?: string }}
                >
                    <div
                        className="absolute inset-x-0 top-0 h-2/3 -mx-4 rounded-t-3xl md:-mx-8 md:rounded-t-[2rem]"
                        style={{ background: 'var(--gradient-bg)' }}
                    />
                    {/* Overlay gradient for depth - only on top half */}
                    <div className="absolute inset-x-0 top-0 h-2/3 -mx-4 rounded-t-3xl bg-gradient-to-b from-black/10 dark:from-black/20 via-transparent to-transparent md:-mx-8 md:rounded-t-[2rem]" />

                    {/* Radial gradient accents - only on top half */}
                    <div className="absolute inset-x-0 top-0 h-2/3 -mx-4 rounded-t-3xl bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.4),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.4),transparent_50%)] md:-mx-8 md:rounded-t-[2rem]" />

                    <div className="relative z-10 py-16 md:py-24">
                        <div className="mx-auto max-w-4xl text-center">
                            {/* Section Title */}
                            <SectionTitle
                                badge={badge}
                                heading={heading}
                                description={description}
                                className="text-white [&_h2]:text-white [&_p]:text-white/90 [&_span]:text-white [&_svg]:text-white"
                                maxWidth="full"
                            />

                            {/* Video Container */}
                            <div className="relative mx-auto mt-12 max-w-5xl p-6 bg-gradient-to-br from-slate-50/70 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 rounded-2xl">
                                <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl backdrop-blur-sm">
                                    {embedUrl ? (
                                        <iframe
                                            src={embedUrl}
                                            className="h-full w-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Video showcase"
                                        />
                                    ) : videoUrl ? (
                                        <video
                                            className="h-full w-full object-cover"
                                            poster={videoPoster}
                                            controls
                                            preload="metadata"
                                        >
                                            <source src={videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                                            {/* Placeholder with play button */}
                                            <div className="group relative">
                                                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-300" />
                                                <button
                                                    className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-primary shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                                                    aria-label="Play video"
                                                >
                                                    <Play className="ml-1 h-12 w-12 fill-current" />
                                                </button>
                                            </div>

                                            {/* Optional: Overlay UI mockup elements */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute left-4 top-4 h-8 w-8 rounded bg-white" />
                                                <div className="absolute right-4 top-4 h-2 w-24 rounded bg-white" />
                                                <div className="absolute bottom-4 left-1/2 h-2 w-32 -translate-x-1/2 rounded bg-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/10 dark:bg-primary/20 blur-3xl" />
                                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/10 dark:bg-primary/20 blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
