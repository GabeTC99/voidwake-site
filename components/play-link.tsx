import { cn } from "@/lib/utils";
import { googlePlayUrl, mailto, site } from "@/lib/site";

type Variant = "solid" | "outline" | "ghost";

type SiteCtaProps = {
  className?: string;
  label?: string;
  variant?: Variant;
};

// Mirrors Starwake's `.btn`, `.btn.solid` and `.btn.ghost`.
const variants: Record<Variant, string> = {
  solid: "border-amber bg-amber text-primary-foreground hover:bg-[#ffc070]",
  outline:
    "border-amber text-amber hover:bg-amber hover:text-primary-foreground",
  ghost:
    "border-muted-foreground text-foreground hover:bg-muted-foreground hover:text-[#0a0a14]",
};

function SiteCta({
  href,
  label,
  variant = "solid",
  className,
}: SiteCtaProps & { href: string; label: string }) {
  return (
    <a
      href={href}
      className={cn(
        "sw-btn focus-visible:outline-ice inline-flex h-11 shrink-0 items-center justify-center border px-5 text-[0.95rem] font-semibold tracking-[0.04em] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      {label}
    </a>
  );
}

export function PlayLink({
  className,
  label = site.playLabel,
  variant = "solid",
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

export function SourceLink({
  className,
  label = site.sourceLabel,
  variant = "ghost",
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

export function ContactLink({
  className,
  label = site.contactLabel,
  variant = "outline",
}: SiteCtaProps) {
  return (
    <SiteCta
      href={mailto}
      label={label}
      variant={variant}
      className={className}
    />
  );
}

/** The Android app on Google Play: a link once the listing is live, a note until then. */
export function GooglePlayNote({ className }: { className?: string }) {
  if (site.googlePlayLive) {
    return (
      <p className={cn("text-sm leading-relaxed", className)}>
        <a
          href={googlePlayUrl}
          className="text-amber underline-offset-4 hover:underline"
        >
          Get {site.game} on Google Play
        </a>
      </p>
    );
  }
  return (
    <p
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
    >
      The Android app is coming to Google Play.
    </p>
  );
}
