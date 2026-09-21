import { ContactLinks } from "@/components/contact-links";
import { PlayLink } from "@/components/play-link";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="border-border/60 border-t"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-starlight text-xs tracking-[0.3em] uppercase">
            The studio
          </p>
          <h2
            id="studio-title"
            className="font-heading mt-3 text-4xl leading-tight sm:text-5xl"
          >
            {site.studio}
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
            An independent workshop for original space games. No licensed
            fleets, no borrowed maps, no obligation to anyone else&apos;s
            live-service calendar. We make the quiet, systemic sandboxes we
            want to play.
          </p>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            {site.game} is the flagship: a solo prototype with a circular
            human core, an Uncharted Reach, and a ship that remembers what
            you did to it. The studio name is the afterimage of a jump —
            the dark that stays when the wake fades.
          </p>
          <div className="mt-8 space-y-3">
            <p className="text-starlight text-xs tracking-[0.3em] uppercase">
              Studio contacts
            </p>
            <ContactLinks className="flex flex-col gap-2" />
          </div>
        </div>
        <aside className="border-border/80 bg-card/50 rounded-xl border p-7 sm:p-8">
          <p className="font-heading text-2xl leading-snug">
            Ready to fly?
          </p>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            The current public build lives in the game repository. Point{" "}
            <code className="text-foreground/90">playUrl</code> in{" "}
            <code className="text-foreground/90">lib/site.ts</code> at a
            hosted build or store listing when one is live.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PlayLink />
            <PlayLink variant="outline" label={site.sourceLabel} />
          </div>
        </aside>
      </div>
    </section>
  );
}
