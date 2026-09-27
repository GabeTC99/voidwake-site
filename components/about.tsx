import { ContactLink, PlayLink, SourceLink } from "@/components/play-link";
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
          <p className="text-amber text-xs tracking-[0.3em] uppercase">
            The studio
          </p>
          <h2
            id="studio-title"
            className="mt-3 text-4xl leading-tight sm:text-5xl"
          >
            {site.studio}
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
            An independent workshop for original space games. No licensed
            fleets, no borrowed maps, no obligation to anyone else&apos;s
            live-service calendar. We make the sprawling, systemic frontiers
            we want to play.
          </p>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            {site.game} is the flagship: a whole galaxy in a browser tab,
            with no build step and no account. Press, partnerships, bug
            reports or just a trip report from the rim — the inbox is open.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactLink />
          </div>
        </div>
        <aside className="border-border bg-card sw-panel border p-7 shadow-[0_0_0_1px_rgba(0,0,0,.6),0_20px_60px_rgba(0,0,0,.6)] sm:p-8">
          <p className="text-2xl leading-snug font-bold">Ready to launch?</p>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            The current build of {site.game} is live in the browser. Your
            Wisp is fuelled and waiting at Sorensen Relay.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <PlayLink className="w-full" />
            <SourceLink className="w-full" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            {site.installNote}
          </p>
        </aside>
      </div>
    </section>
  );
}
