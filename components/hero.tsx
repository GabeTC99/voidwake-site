import { PlayLink, SourceLink } from "@/components/play-link";
import { Starfield } from "@/components/starfield";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="starwake"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <Starfield />
      <div className="pointer-events-none absolute inset-0">
        <div className="wake-drift bg-accent/60 absolute top-0 right-[-8rem] size-[34rem] rounded-full blur-3xl" />
        <div className="wake-drift bg-amber/10 absolute top-40 right-[12%] size-[18rem] rounded-full blur-3xl" />
        <div className="from-void via-void/80 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <h1 id="hero-title" className="sw-glow leading-[0.86] font-bold">
            <span className="text-amber mb-4 ml-1 block text-[clamp(0.8rem,2.2vw,1.1rem)] font-medium tracking-[0.42em]">
              {site.kicker}
            </span>
            <span className="text-foreground block text-[clamp(3.6rem,12vw,8.5rem)] tracking-[-0.02em]">
              {site.game}
            </span>
          </h1>
          <p className="text-foreground/90 mt-6 max-w-xl text-xl leading-snug font-medium sm:text-2xl">
            {site.tagline}
          </p>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-[1.0625rem]">
            Trade between stations, mine asteroid rings, answer distress
            calls and hunt pirate aces for bounties — or jump out past the
            charted systems and sell what you find to Universal Cartographics.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PlayLink />
              <SourceLink />
              <a
                href="#features"
                className="text-muted-foreground hover:text-amber px-1 text-sm underline-offset-4 hover:underline"
              >
                What you can do
              </a>
            </div>
            <p className="text-ice/80 max-w-2xl text-xs tracking-[0.06em]">
              {site.heroCtaNote}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <WakeMark />
        </div>
      </div>
    </section>
  );
}

/** The Starwake app icon, drawn large: a ship trailing its amber wake. */
function WakeMark() {
  return (
    <figure className="relative aspect-square w-full">
      <svg
        viewBox="0 0 512 512"
        role="img"
        aria-label="A small ship streaking across the dark, trailing an amber wake."
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="hero-wake" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff3d6" />
            <stop offset=".2" stopColor="#ffa640" />
            <stop offset="1" stopColor="#ffa640" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-hull" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2e6cc" />
            <stop offset="1" stopColor="#6e6450" />
          </linearGradient>
          <radialGradient id="hero-glow">
            <stop offset="0" stopColor="#ffd9a0" stopOpacity=".9" />
            <stop offset="1" stopColor="#ffa640" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="256"
          cy="256"
          r="236"
          fill="none"
          stroke="#ffa64033"
          strokeDasharray="3 9"
        />
        <circle
          cx="256"
          cy="256"
          r="176"
          fill="none"
          stroke="#7fe3ff1f"
        />

        <path
          d="M300 212 L96 416 L128 448 L312 232 Z"
          fill="url(#hero-wake)"
          opacity=".9"
        />
        <circle cx="300" cy="212" r="70" fill="url(#hero-glow)" />
        <g transform="translate(318 194) rotate(-45) scale(92)">
          <polygon
            points="1,0 -0.6,0.72 -0.35,0 -0.6,-0.72"
            fill="url(#hero-hull)"
            stroke="#ffc070"
            strokeWidth=".05"
            strokeLinejoin="round"
          />
          <ellipse cx=".35" cy="0" rx=".16" ry=".09" fill="#7fd4f0" />
        </g>
      </svg>
      <figcaption className="text-muted-foreground mt-2 text-center text-xs tracking-[0.22em] uppercase">
        ~1 million systems · Solace at home
      </figcaption>
    </figure>
  );
}
