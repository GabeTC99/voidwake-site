import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline">
      <span
        aria-hidden
        className="border-starlight/40 text-starlight relative grid size-8 place-items-center rounded-full border"
      >
        <span className="bg-starlight/90 absolute top-1/2 left-[7px] h-px w-3.5 -translate-y-1/2" />
        <span className="border-ice/80 absolute top-1.5 right-1.5 size-2 rounded-full border" />
      </span>
      <span className="leading-none">
        <span className="text-foreground block text-[0.7rem] tracking-[0.28em] uppercase">
          {site.studioShort}
        </span>
        {compact ? null : (
          <span className="text-muted-foreground mt-1 block text-[0.62rem] tracking-[0.32em] uppercase">
            Studios
          </span>
        )}
      </span>
    </Link>
  );
}
