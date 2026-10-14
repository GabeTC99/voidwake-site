import Image from "next/image";
import { ArrowUpRight, Crosshair, ScanEye } from "lucide-react";
import { CharacterPreview } from "@/components/character-preview";
import { featureShowcase } from "@/lib/site";

export function NewFeatures() {
  return (
    <section
      id="whats-new"
      aria-labelledby="whats-new-title"
      className="border-border/60 border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-amber text-xs tracking-[0.3em] uppercase">
          {featureShowcase.eyebrow}
        </p>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h2
              id="whats-new-title"
              className="max-w-3xl text-4xl leading-tight sm:text-5xl"
            >
              {featureShowcase.title}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
              {featureShowcase.body}
            </p>
          </div>
          <a
            href="#features"
            className="text-ice hover:text-amber inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice lg:self-auto"
          >
            {featureShowcase.browseLabel}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="sw-panel border-border bg-card mt-10 grid overflow-hidden border lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-border bg-void relative aspect-[16/10] min-w-0 overflow-hidden border-b lg:aspect-auto lg:border-r lg:border-b-0">
            <Image
              src={featureShowcase.animation.image.src}
              alt={featureShowcase.animation.image.alt}
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 90vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 p-6 sm:p-8">
            <p className="text-amber text-xs tracking-[0.2em] uppercase">
              {featureShowcase.animation.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl leading-snug sm:text-3xl">
              {featureShowcase.animation.title}
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
              {featureShowcase.animation.body}
            </p>
            <CharacterPreview />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {featureShowcase.improvements.map((improvement) => {
            const Icon = improvement.id === "controls" ? Crosshair : ScanEye;

            return (
              <article
                key={improvement.id}
                className="sw-panel border-border/70 bg-panel2 min-w-0 border p-6 sm:p-7"
              >
                <div className="text-ice flex items-center gap-3">
                  <Icon aria-hidden="true" className="size-5 shrink-0" />
                  <p className="text-xs tracking-[0.2em] uppercase">
                    {improvement.eyebrow}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl leading-snug">
                  {improvement.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                  {improvement.body}
                </p>
                <p className="text-ice/80 mt-4 text-xs leading-relaxed">
                  {improvement.detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
