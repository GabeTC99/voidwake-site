import { ScreenshotFrame } from "@/components/screenshot-frame";
import { screenshots } from "@/lib/site";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="border-border/60 border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-starlight text-xs tracking-[0.3em] uppercase">
          Gallery
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="gallery-title"
            className="font-heading max-w-xl text-4xl leading-tight sm:text-5xl"
          >
            From the cockpit, the dock, and the dirt.
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Four frames from the current build — local space, the dock, the
            circular core, and a skiff over the dirt.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {screenshots.map((shot) => (
            <ScreenshotFrame key={shot.id} {...shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
