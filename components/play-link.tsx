import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

type SiteCtaProps = {
  className?: string;
  label?: string;
  variant?: "default" | "outline" | "ghost";
};

function SiteCta({
  href,
  label,
  variant,
  className,
}: SiteCtaProps & { href: string; label: string }) {
  return (
    <a
      href={href}
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

export function PlayLink({
  className,
  label = site.playLabel,
  variant = "default",
}: SiteCtaProps) {
  return (
    <SiteCta
      href={site.playUrl}
      label={label}
      variant={variant}
      className={className}
    />
  );
}

export function ApkLink({
  className,
  label = site.apkLabel,
  variant = "default",
}: SiteCtaProps) {
  return (
    <SiteCta
      href={site.apkUrl}
      label={label}
      variant={variant}
      className={className}
    />
  );
}

export function SourceLink({
  className,
  label = site.sourceLabel,
  variant = "outline",
}: SiteCtaProps) {
  return (
    <SiteCta
      href={site.sourceUrl}
      label={label}
      variant={variant}
      className={className}
    />
  );
}
