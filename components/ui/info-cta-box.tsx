import * as React from "react";
import { BarChart3 } from "lucide-react";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface InfoCtaBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<{ className?: string }>;
  text: React.ReactNode;
  buttonText: string;
  buttonHref: string;
}

const InfoCtaBox = React.forwardRef<HTMLDivElement, InfoCtaBoxProps>(
  ({ className, icon: Icon = BarChart3, text, buttonText, buttonHref, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center capitalize justify-between gap-6 rounded-[28px] border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-blue-50 px-6 py-5 dark:via-slate-900 dark:to-slate-950/70",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-primary" />
          <Typography variant="p" className="text-sm text-muted-foreground">
            {text}
          </Typography>
        </div>
        <ReadMoreButton
          href={buttonHref}
          variant="highlighted"
          className="rounded-full bg-primary px-6 py-3 text-white shadow hover:opacity-90 [&_.read-more-icon]:bg-white/20 [&_.read-more-icon]:text-white [&_.read-more-icon_svg]:text-white"
        >
          {buttonText}
        </ReadMoreButton>
      </div>
    );
  }
);
InfoCtaBox.displayName = "InfoCtaBox";

export { InfoCtaBox };
