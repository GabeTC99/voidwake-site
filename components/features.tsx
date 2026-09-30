import { features, site } from "@/lib/site";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="border-border/60 border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-amber text-xs tracking-[0.3em] uppercase">
          Out on the frontier
        </p>
        <h2
          id="features-title"
          className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl"
        >
          A galaxy with work to do.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          {site.game} launches first on Android through Google Play.
          Everything below is in the current build.
        </p>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="bg-panel2 border-l-amber-dim hover:border-l-amber border border-l-[3px] border-white/[0.08] p-6 transition-colors"
            >
              <h3 className="text-xl leading-snug">{feature.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-[0.95rem]">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
