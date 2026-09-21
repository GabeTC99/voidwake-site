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
          <radialGradient id="orbital-world" cx="38%" cy="36%" r="68%">
            <stop offset="0%" stopColor="#25414a" />
            <stop offset="55%" stopColor="#12222e" />
            <stop offset="100%" stopColor="#070d17" />
          </radialGradient>
          <linearGradient id="orbital-ring-far" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#90efdc26" />
            <stop offset="50%" stopColor="#90efdc88" />
            <stop offset="100%" stopColor="#6db6ad33" />
          </linearGradient>
          <linearGradient id="orbital-ring-near" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6db6ad66" />
            <stop offset="45%" stopColor="#90efdc" />
            <stop offset="100%" stopColor="#90efdc77" />
          </linearGradient>
          <clipPath id="orbital-planet">
            <circle cx="240" cy="236" r="88" />
          </clipPath>
        </defs>

        <circle cx="96" cy="150" r="1.4" fill="#b4f8e9cc" />
        <circle cx="404" cy="348" r="0.9" fill="#b4f8e966" />
        <circle cx="72" cy="318" r="0.7" fill="#90efdc55" />

        {/* Far equatorial rings sit behind the world */}
        <g transform="rotate(-18 240 246)" fill="none">
          <path
            d="M42 246 A198 46 0 0 0 438 246"
            stroke="url(#orbital-ring-far)"
            strokeWidth="1.2"
          />
          <path
            d="M72 246 A168 36 0 0 0 408 246"
            stroke="#6db6ad55"
            strokeWidth="0.7"
          />
        </g>

        {/* Far half of the probe's inclined orbit */}
        <g transform="rotate(-52 240 236)" fill="none">
          <path
            d="M40 236 A200 58 0 0 0 440 236"
            stroke="#90efdc28"
            strokeWidth="0.65"
          />
        </g>

        <circle cx="240" cy="236" r="88" fill="url(#orbital-world)" />
        <g clipPath="url(#orbital-planet)">
          <circle cx="208" cy="208" r="88" fill="#070d1773" />
          <ellipse
            cx="240"
            cy="246"
            rx="198"
            ry="46"
            fill="none"
            stroke="#070d17"
            strokeWidth="11"
            opacity="0.42"
            transform="rotate(-18 240 246)"
          />
        </g>
        <circle
          cx="240"
          cy="236"
          r="88.6"
          fill="none"
          stroke="#90efdc22"
          strokeWidth="0.6"
        />

        {/* Near equatorial rings pass in front of the disk */}
        <g transform="rotate(-18 240 246)" fill="none">
          <path
            d="M42 246 A198 46 0 0 1 438 246"
            stroke="url(#orbital-ring-near)"
            strokeWidth="1.45"
          />
          <path
            d="M72 246 A168 36 0 0 1 408 246"
            stroke="#90efdc88"
            strokeWidth="0.85"
          />
        </g>

        {/* Near orbit, departing wake, and probe — wake never meets the surface */}
        <g transform="rotate(-52 240 236)" fill="none">
          <path
            d="M40 236 A200 58 0 0 1 440 236"
            stroke="#90efdc2a"
            strokeWidth="0.65"
          />
          <path
            d="M346 285.2 A200 58 0 0 0 427.9 255.8"
            stroke="#90efdc40"
            strokeWidth="1"
          />
          <path
            d="M397.6 271.7 A200 58 0 0 0 427.9 255.8"
            stroke="#90efdcc7"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          <circle
            cx="427.9"
            cy="255.8"
            r="5.6"
            stroke="#90efdc66"
            strokeWidth="0.7"
          />
          <circle cx="427.9" cy="255.8" r="3.1" fill="#90efdc" />
          <path
            d="M427.9 255.8 L434.2 250.8"
            stroke="#90efdc"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <figcaption className="text-muted-foreground mt-2 text-center text-xs tracking-[0.22em] uppercase">
        192 systems · Solace at the core
      </figcaption>
    </figure>
  );
}
