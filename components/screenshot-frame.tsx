import { resolveScreenshotSrc } from "@/lib/screenshots";
import { site } from "@/lib/site";

type ScreenshotFrameProps = {
  id: string;
  title: string;
  caption: string;
  featured?: boolean;
};

export function ScreenshotFrame({
  id,
  title,
  caption,
  featured = false,
}: ScreenshotFrameProps) {
  const src = resolveScreenshotSrc(id);

  return (
    <figure className={featured ? "group col-span-full" : "group"}>
      <div
        className={`border-border bg-void sw-panel relative overflow-hidden border ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        {/* Local public files; see public/screenshots/README.md. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${site.game} ${title} — ${caption}`}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="border-amber/60 pointer-events-none absolute top-3 left-3 size-5 border-t border-l" />
        <div className="border-amber/60 pointer-events-none absolute top-3 right-3 size-5 border-t border-r" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <div>
            <figcaption className="text-xl font-bold sm:text-2xl">
              {title}
            </figcaption>
          </div>
          <p className="text-foreground/75 hidden max-w-[16rem] text-right text-xs sm:block">
            {caption}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground mt-2 text-sm sm:hidden">{caption}</p>
    </figure>
  );
}
