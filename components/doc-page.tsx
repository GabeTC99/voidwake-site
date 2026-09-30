import type { ReactNode } from "react";

type DocPageProps = {
  kicker: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

/** Long-form text pages (privacy policy, support): one readable column in the site's type. */
export function DocPage({ kicker, title, intro, children }: DocPageProps) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-amber text-xs tracking-[0.3em] uppercase">{kicker}</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{title}</h1>
      {intro ? (
        <div className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
          {intro}
        </div>
      ) : null}
      <div className="doc-body mt-10">{children}</div>
    </main>
  );
}
