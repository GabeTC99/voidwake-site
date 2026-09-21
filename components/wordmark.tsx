import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline">
      {/* Local public mark; decorative because the studio name is adjacent. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/voidwake-mark.png"
        alt=""
        width={32}
        height={32}
        className="border-starlight/25 size-8 rounded-full border object-cover"
      />
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
