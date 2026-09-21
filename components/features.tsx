import { features } from "@/lib/site";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="border-border/60 border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-starlight text-xs tracking-[0.3em] uppercase">
          In the Reach
        </p>
        <h2
          id="features-title"
          className="font-heading mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl"
        >
          A sandbox with work to do.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          Farbound is a solo prototype: local progression, no multiplayer, no
          on-foot play. The systems are already deep enough to get lost in.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="border-border/80 bg-card/60 hover:border-starlight/30 rounded-xl border p-6 transition-colors"
            >
              <h3 className="font-heading text-2xl leading-snug">
                {feature.title}
              </h3>
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
