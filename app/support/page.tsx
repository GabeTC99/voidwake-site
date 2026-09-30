import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { ContactLink, PlayLink } from "@/components/play-link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Help with ${site.game}: buying, saves and cloud sync, controls, performance, other platforms, bug reports and deleting your data.`,
  alternates: { canonical: "/support" },
};

const supportMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.game} support`,
)}`;

export default function SupportPage() {
  return (
    <DocPage
      kicker="Support"
      title={`${site.game} help`}
      intro={
        <>
          <p>
            Stuck on a mission, lost a save, or found a bug? Most answers are
            below. If yours isn&apos;t, email the studio — a real person reads
            every message.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ContactLink label="Email support" variant="solid" />
            <PlayLink variant="ghost" />
          </div>
        </>
      }
    >
      <h2 id="buying">Buying {site.game}</h2>
      <p>
        {site.game} is a one-time purchase on Google Play: no ads, no in-app
        purchases and no account. Google handles payment, and refunds follow{" "}
        <a href="https://support.google.com/googleplay/answer/2479637">
          Google Play&apos;s refund policy
        </a>
        . Reinstalling on the same Google account, or on a new phone, is free.
      </p>

      <h2 id="saves">Where are my saves?</h2>
      <p>
        On your device. The game saves automatically when you dock, every 20
        seconds in flight, and when you switch away from it. You have three
        pilot slots on the title screen.
      </p>
      <h3 id="move-saves">Moving pilots between devices</h3>
      <ul>
        <li>
          <strong>Cloud save:</strong> open ☁ Cloud save on the title screen or
          pause menu, create a sync code, and enter the same code on your other
          device. Saves upload a few seconds after the game saves. If two
          devices have both moved on, the panel asks which copy to keep.
        </li>
        <li>
          <strong>By file:</strong> use <em>Export save file</em> in the pause
          menu, move the file across, and choose <em>Import save</em> on the
          title screen.
        </li>
      </ul>
      <p>
        Keep your sync code private — anyone with it can load and overwrite your
        cloud saves. If you lose it, we can&apos;t recover it: we only store a
        one-way hash of the code.
      </p>

      <h2 id="controls">Controls</h2>
      <p>
        Mouse to aim, W/S for thrust, A/D to strafe, click or Space to fire, J
        for slipstream, E to dock, M for the galaxy map, N for the system map
        and U for autopilot. Esc pauses. Touch controls appear automatically on
        phones and tablets, and gamepads work too (D-pad and A in menus, B or
        Start to go back). On Android, the back button acts like Esc. Keys can
        be rebound from the pause menu.
      </p>

      <h2 id="performance">The game runs slowly</h2>
      <ul>
        <li>
          Lower the graphics setting in the pause menu, and close other apps
          running in the background.
        </li>
        <li>
          Turn off battery saver while you play: it slows the processor and caps
          the frame rate.
        </li>
        <li>
          If it&apos;s still slow, turn on <em>Performance recorder</em> in the
          pause menu, play until it stutters, then <em>Export log</em> and
          attach the file to an email. It shows us exactly where the time goes.
        </li>
      </ul>

      <h2 id="platforms">Other platforms</h2>
      <p>
        {site.game} launches on Android first. Steam and itch.io versions are
        planned; when they arrive, cloud save will carry your pilots across.
        There is no iOS version yet.
      </p>

      <h2 id="bugs">Reporting a bug</h2>
      <p>
        <a href={supportMailto}>Email us</a> with what you were doing, what you
        expected and what happened instead, plus your phone model and Android
        version. A screenshot, an exported save file or a performance log helps
        a lot.
      </p>

      <h2 id="delete-data">Deleting your data</h2>
      <p>
        Delete a pilot with ✕ on the title screen, or uninstall the app. To
        delete cloud saves, email us your sync code and we will remove every
        save stored under it. The{" "}
        <Link href="/privacy#delete-data">privacy policy</Link> has the details,
        including what cloud save stores.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Support, press and everything else:{" "}
        <a href={supportMailto}>email {site.studio}</a>. We usually reply within
        a few days.
      </p>
    </DocPage>
  );
}
