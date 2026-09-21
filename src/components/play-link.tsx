import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type PlayLinkProps = {
  className?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
};

export function PlayLink({
  className,
  label = site.playLabel,
  variant = "default",
}: PlayLinkProps) {
  return (
    <a
      href={site.playUrl}
      className={cn(
        buttonVariants({ variant, size: "lg" }),
        "h-11 rounded-md px-5 text-sm tracking-wide",
        className
      )}
    >
      {label}
    </a>
  );
}
