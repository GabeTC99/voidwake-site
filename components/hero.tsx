import { PlayLink, SourceLink } from "@/components/play-link";
import { Starfield } from "@/components/starfield";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="nullharbor"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <Starfield />
      <div className="pointer-events-none absolute inset-0">
        <div className="wake-drift bg-ice/10 absolute top-16 -left-24 size-[28rem] rounded-full blur-3xl" />
        <div className="wake-drift bg-starlight/10 absolute top-10 right-[-6rem] size-[22rem] rounded-full blur-3xl" />
        <div className="from-void via-void/80 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="text-starlight mb-5 text-xs tracking-[0.34em] uppercase">
            {site.studio}
          </p>
          <h1
            id="hero-title"
            className="font-heading text-[clamp(3.4rem,11vw,7.4rem)] leading-[0.88] tracking-tight"
          >
            {site.game}
          </h1>
          <p className="text-foreground/90 mt-6 max-w-xl text-xl leading-relaxed sm:text-2xl">
            {site.tagline}
          </p>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Open-ended exploration, economy, mining, and ship progression — built
            original for touchscreens and the desktop browser. Chart the Reach.
            Sell the data. Keep the ship flying.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PlayLink />
            <SourceLink />
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground px-1 text-sm underline-offset-4 hover:underline"
            >
              What you can do
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <OrbitalMark />
        </div>
      </div>
    </section>
  );
}

function OrbitalMark() {
  return (
    <figure className="relative aspect-square w-full">
      <svg
        viewBox="0 0 480 480"
        role="img"
        aria-label="A ringed world against a dark starfield, with a thin orbital wake."
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="world" cx="38%" cy="36%" r="68%">
            <stop offset="0%" stopColor="#25414a" />
            <stop offset="55%" stopColor="#12222e" />
            <stop offset="100%" stopColor="#070d17" />
          </radialGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#90efdc26" />
            <stop offset="45%" stopColor="#90efdcd9" />
            <stop offset="100%" stopColor="#6db6ad33" />
          </linearGradient>
        </defs>
        <ellipse
          cx="240"
          cy="248"
          rx="196"
          ry="52"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1.25"
          transform="rotate(-18 240 248)"
        />
        <ellipse
          cx="240"
          cy="248"
          rx="168"
          ry="40"
          fill="none"
          stroke="#6db6ad47"
          strokeWidth="0.75"
          transform="rotate(-18 240 248)"
        />
        <circle cx="240" cy="236" r="88" fill="url(#world)" />
        <circle
          cx="208"
          cy="208"
          r="88"
          fill="#070d1773"
        />
        <circle cx="372" cy="118" r="3.2" fill="#90efdc" />
        <circle cx="96" cy="150" r="1.4" fill="#b4f8e9cc" />
        <path
          d="M372 118 C 330 168, 300 210, 268 228"
          fill="none"
          stroke="#90efdc73"
          strokeWidth="1"
        />
        <circle
          cx="240"
          cy="236"
          r="104"
          fill="none"
          stroke="#90efdc2e"
          strokeWidth="0.6"
        />
      </svg>
      <figcaption className="text-muted-foreground mt-2 text-center text-xs tracking-[0.22em] uppercase">
        192 systems · Solace at the core
      </figcaption>
    </figure>
  );
}
