import { About } from "@/components/about";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { NewFeatures } from "@/components/new-features";
import { StatsStrip } from "@/components/stats-strip";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <StatsStrip />
      <NewFeatures />
      <Features />
      <Gallery />
      <About />
    </main>
  );
}
