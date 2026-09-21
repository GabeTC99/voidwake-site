import { Wordmark } from "@/components/wordmark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-border/70 mt-auto border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm space-y-3">
          <Wordmark />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Independent studio. Original space games. {site.game} is the
            flagship.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.playUrl}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              {site.sourceLabel}
            </a>
          </nav>
          <p className="text-muted-foreground text-xs tracking-wide">
            © {new Date().getFullYear()} {site.studio}
          </p>
        </div>
      </div>
    </footer>
  );
}
