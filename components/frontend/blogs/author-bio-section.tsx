import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const DEFAULT_AUTHOR_IMAGE = "/images/auther.webp";

export type AuthorBioSectionProps = {
  /** Section heading, e.g. "About The Author" */
  heading?: string;
  name: string;
  role: string;
  /** Full URL to LinkedIn profile. If provided, shows a link. */
  linkedInUrl?: string | null;
  biography: string;
  /** Author image URL. Defaults to /images/auther.webp */
  imageSrc?: string | null;
  imageAlt?: string;
  className?: string;
};

export function AuthorBioSection({
  heading = "About The Author",
  name,
  role,
  linkedInUrl,
  biography,
  imageSrc,
  imageAlt,
  className
}: AuthorBioSectionProps) {
  const src = imageSrc || DEFAULT_AUTHOR_IMAGE;
  const alt = imageAlt ?? name;

  return (
    <Section
      id="about-the-author"
      variant="primary"
      padding="md"
      className={cn("blogdetails page !pt-0", className)}
    >
      <div className="container">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {heading}
        </h2>
        <div
          className={cn(
            "flex flex-col gap-6 rounded-xl border border-blue-200/80 dark:border-blue-900/50",
            "bg-white dark:bg-gray-900/80 p-6 shadow-sm",
            "sm:flex-row sm:items-start"
          )}
        >
          <div className="shrink-0 sm:w-[180px]">
            <div className="relative aspect-square w-28 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 sm:w-full">
              <Image
                src={src}
                alt={alt}
                width={180}
                height={180}
                className="object-cover"
                sizes="(max-width: 640px) 112px, 180px"
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            {name ? (
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {name}
              </p>
            ) : null}
            <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
            {linkedInUrl ? (
              <Link
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                <span>LinkedIn</span>
              </Link>
            ) : null}
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {biography}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
