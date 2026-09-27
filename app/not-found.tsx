import Link from "next/link";
import { PlayLink } from "@/components/play-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24 sm:px-6">
      <p className="text-amber text-xs tracking-[0.3em] uppercase">
        Signal lost
      </p>
      <h1 className="mt-3 text-5xl">No system at this heading.</h1>
      <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
        That route is uncharted. Plot a course back to the studio page, or
        launch the game.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="sw-btn border-muted-foreground hover:bg-muted-foreground inline-flex h-11 items-center justify-center border px-5 text-[0.95rem] font-semibold tracking-[0.04em] transition-colors hover:text-[#0a0a14]"
        >
          Back to Voidwake
        </Link>
        <PlayLink />
      </div>
    </main>
  );
}
