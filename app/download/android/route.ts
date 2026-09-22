import { NextResponse } from "next/server";

/**
 * GitHub's `/releases/latest/download/Nullharbor.apk` is two client hops
 * (github.com → github.com/releases/download/… → release-assets.githubusercontent.com).
 * Mobile browsers often stall on that chain when it starts from a marketing-site
 * `<a href>`. Resolve the hops here and send the phone one redirect to the
 * signed asset URL that actually serves the APK with attachment disposition.
 *
 * Do not stream APK bytes through Vercel — HEAD only, then 302.
 */
const GITHUB_LATEST_APK =
  "https://github.com/GabeTC99/Nullharbor/releases/latest/download/Nullharbor.apk";

const MAX_HOPS = 8;

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const assetUrl = await resolveLatestApkUrl();
    return redirectTo(assetUrl);
  } catch {
    return redirectTo(GITHUB_LATEST_APK);
  }
}

async function resolveLatestApkUrl(): Promise<string> {
  let current = GITHUB_LATEST_APK;

  for (let hop = 0; hop < MAX_HOPS; hop++) {
    if (isFinalAssetHost(new URL(current).hostname)) {
      return current;
    }

    const response = await fetch(current, {
      method: "HEAD",
      redirect: "manual",
      cache: "no-store",
      headers: {
        Accept: "application/vnd.android.package-archive,*/*",
        "User-Agent": "voidwake-studios-site/1.0 (+https://www.voidwakestudios.com)",
      },
    });

    await response.body?.cancel().catch(() => undefined);

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) {
        throw new Error(`Redirect missing Location from ${current}`);
      }

      const next = new URL(location, current);
      if (!isAllowedDownloadHost(next.hostname)) {
        throw new Error(`Unexpected APK redirect host: ${next.hostname}`);
      }

      current = next.href;
      continue;
    }

    if (response.ok) {
      return current;
    }

    throw new Error(`Unexpected status ${response.status} resolving ${current}`);
  }

  if (isFinalAssetHost(new URL(current).hostname)) {
    return current;
  }

  throw new Error("Exceeded redirect hops resolving APK");
}

function redirectTo(url: string) {
  const response = NextResponse.redirect(new URL(url), 302);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

function isAllowedDownloadHost(hostname: string): boolean {
  return (
    hostname === "github.com" ||
    hostname.endsWith(".github.com") ||
    hostname === "githubusercontent.com" ||
    hostname.endsWith(".githubusercontent.com") ||
    hostname.endsWith(".blob.core.windows.net")
  );
}

function isFinalAssetHost(hostname: string): boolean {
  return (
    hostname === "githubusercontent.com" ||
    hostname.endsWith(".githubusercontent.com") ||
    hostname.endsWith(".blob.core.windows.net")
  );
}
