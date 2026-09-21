import Link from "next/link";
import { PlayLink } from "@/components/play-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24 sm:px-6">
      <p className="text-starlight text-xs tracking-[0.3em] uppercase">
        Signal lost
      </p>
      <h1 className="font-heading mt-3 text-5xl">No system at this heading.</h1>
      <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
        That route is uncharted. Return to the studio page, or open the game
        repository.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="border-border hover:bg-muted inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm"
        >
          Back to Voidwake
        </Link>
        <PlayLink />
      </div>
    </main>
  );
}
