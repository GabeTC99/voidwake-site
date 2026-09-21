import { existsSync } from "node:fs";
import path from "node:path";
import { screenshotExtensions } from "@/lib/site";

export function resolveScreenshotSrc(id: string): string {
  const dir = path.join(process.cwd(), "public", "screenshots");

  for (const ext of screenshotExtensions) {
    if (existsSync(path.join(dir, `${id}.${ext}`))) {
      return `/screenshots/${id}.${ext}`;
    }
  }

  return `/screenshots/${id}.svg`;
}
