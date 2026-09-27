import { site, stats } from "@/lib/site";

export function StatsStrip() {
  return (
    <section
      aria-label={`${site.game} scale`}
      className="border-border/60 bg-card/60 border-y"
    >
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-4 py-8 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label} className="px-3 py-3 sm:px-5">
            <p className="text-amber text-3xl font-bold tabular-nums sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
