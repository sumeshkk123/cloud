import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface FaqCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  variant?: "default" | "highlighted";
}

const FaqCard = ({
  question,
  answer,
  isOpen,
  onToggle,
  variant = "default",
  ...props
}: FaqCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "group rounded-xl border border-border/50 bg-background/60 p-5 transition-all hover:border-primary/50 hover:bg-background/80 hover:shadow-sm",
        variant === "highlighted" && "border-primary/50 bg-primary/5"
      )}
      {...props}
    >
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <Typography
          as="span"
          variant="p"
          className={cn(
            "flex-1 font-semibold !text-base leading-snug",
            variant === "highlighted" ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {question}
        </Typography>
        <span className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ease-in-out",
          isOpen && "rotate-45"
        )}>
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="mt-4 pt-4 border-t border-border/30">
          <Typography
            variant="small"
            textColor="muted"
            className="leading-7 whitespace-pre-wrap text-md"
          >
            {answer}
          </Typography>
        </div>
      </div>
    </div>
  );
};

FaqCard.displayName = "FaqCard";

export { FaqCard };