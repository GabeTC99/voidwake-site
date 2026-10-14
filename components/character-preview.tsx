"use client";

import { useCallback, useId, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { characterPreview } from "@/lib/site";

type SpriteStyle = CSSProperties & {
  "--sprite-rows": number;
  "--sprite-start-row": number;
};

type Character = (typeof characterPreview.characters)[number];

function CharacterSprite({
  character,
  playing,
}: {
  character: Character;
  playing: boolean;
}) {
  const [atlasStatus, setAtlasStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );
  const attachAtlas = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete) {
      setAtlasStatus(image.naturalWidth > 0 ? "loaded" : "error");
    }
  }, []);
  const loaded = atlasStatus === "loaded";
  const spriteStyle: SpriteStyle = {
    backgroundImage: loaded ? `url("${character.src}")` : undefined,
    "--sprite-rows": character.rows,
    "--sprite-start-row": character.startRow,
  };

  return (
    <div
      aria-hidden="true"
      className={`character-sprite${loaded && playing ? " is-playing" : ""}`}
      style={spriteStyle}
    >
      {/* Load the exact atlas used by the CSS background; image optimisation
          would change its source and duplicate the download. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={attachAtlas}
        src={character.src}
        alt=""
        hidden
        onLoad={() => setAtlasStatus("loaded")}
        onError={() => setAtlasStatus("error")}
      />
      {loaded ? null : (
        <Image
          src={character.fallbackSrc}
          alt=""
          width={128}
          height={128}
          sizes="100px"
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}

export function CharacterPreview() {
  const [playing, setPlaying] = useState(false);
  const previewId = useId();
  const Icon = playing ? Pause : Play;

  return (
    <div className="border-border/60 mt-6 border-t pt-5">
      <p className="text-ice text-[0.65rem] tracking-[0.18em] uppercase">
        {characterPreview.label}
      </p>
      <div id={previewId} className="mt-4 grid grid-cols-3 gap-2">
        {characterPreview.characters.map((character) => (
          <figure key={character.id} className="min-w-0 text-center">
            <div className="bg-void/70 border-border/50 sw-panel flex min-w-0 items-center justify-center border py-2">
              <CharacterSprite character={character} playing={playing} />
            </div>
            <figcaption className="text-muted-foreground mt-2 text-[11px] leading-snug">
              {character.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
        <button
          type="button"
          aria-pressed={playing}
          aria-controls={previewId}
          onClick={() => setPlaying((value) => !value)}
          className="sw-btn border-amber/50 text-amber hover:bg-amber/10 inline-flex min-h-11 shrink-0 items-center gap-2 border px-3 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice"
        >
          <Icon aria-hidden="true" className="size-3.5" />
          {playing ? characterPreview.pauseLabel : characterPreview.playLabel}
        </button>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {characterPreview.note}
        </p>
      </div>
    </div>
  );
}
