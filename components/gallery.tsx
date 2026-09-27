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
        <p className="text-amber text-xs tracking-[0.3em] uppercase">
          Gallery
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="gallery-title"
            className="max-w-xl text-4xl leading-tight sm:text-5xl"
          >
            From the cockpit, the concourse and the dirt.
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Captured from the current build — launch, the galaxy map, the
            station concourse, the shipyard, careers, a home of your own and
            a low pass over a rocky world.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {screenshots.map((shot) => (
            <ScreenshotFrame key={shot.id} {...shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
