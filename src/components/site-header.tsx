"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PlayLink } from "@/components/play-link";
import { Wordmark } from "@/components/wordmark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-void/70 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <PlayLink className="hidden sm:inline-flex" />
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden"
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-border/70 bg-void/95 border-t px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <PlayLink className="mt-2 w-full sm:hidden" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
