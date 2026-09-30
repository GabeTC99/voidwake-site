import type { Metadata } from "next";
import { DocPage } from "@/components/doc-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.game} and ${site.studio} handle your data: no accounts, no ads, no tracking; saves stay on your device unless you turn on cloud save.`,
  alternates: { canonical: "/privacy" },
};

const privacyMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.game} privacy request`,
)}`;

export default function PrivacyPage() {
  return (
    <DocPage
      kicker="Legal"
      title="Privacy policy"
      intro={
        <>
          <p>
            This policy covers {site.game} — the Android app and any future
            versions for other stores — and this website, all made by{" "}
            {site.studio} (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
          </p>
          <p className="text-ice/80 mt-3 text-sm tracking-[0.04em]">
            Last updated {site.privacyUpdated}
          </p>
        </>
      }
    >
      <div className="bg-panel2 border-l-amber border border-l-[3px] border-white/[0.08] p-6">
        <p className="text-foreground font-semibold">The short version</p>
        <ul className="mt-3">
          <li>
            There are no accounts, no ads, no analytics, no tracking and no
            in-app purchases. You buy the game once through the store, and the
            store handles the payment.
          </li>
          <li>Your saves and settings are stored on your own device.</li>
          <li>
            If you choose to turn on <strong>cloud save</strong>, your save
            files are uploaded so you can load them on another device. That is
            the only game data we ever receive, and we never ask for your name
            or email address.
          </li>
          <li>We do not sell or share your data with anyone.</li>
        </ul>
      </div>

      <h2 id="not-collected">What we don&apos;t collect</h2>
      <p>
        {site.game} does not ask for or collect your name, email address, phone
        number, contacts, photos, location, microphone, camera or any
        advertising identifier. It contains no advertising or analytics
        software. The Android app requests a single permission, internet access,
        which it uses for cloud save and to load the game&apos;s typeface.
      </p>

      <h2 id="on-device">Data stored on your device</h2>
      <p>
        The game saves your progress (up to three pilots) and your settings —
        volume, controls, graphics and similar options — in the app&apos;s own
        storage. This data never leaves your device unless you use cloud save or
        export a save file yourself. Uninstalling the app, or clearing its
        storage in Android&apos;s settings, deletes it.
      </p>
      <p>
        On Android, the system&apos;s own backup (Google&apos;s Auto Backup) may
        include the app&apos;s data in your device backup if you have backups
        turned on. That backup is handled by Google under your Google account
        settings, not by us.
      </p>

      <h2 id="cloud-save">Cloud save (optional)</h2>
      <p>
        Cloud save is off until you create or enter a sync code under{" "}
        <strong>☁ Cloud save</strong> on the title screen or pause menu. While a
        sync code is set on a device, the game uploads a pilot a few seconds
        after it saves. Each upload contains:
      </p>
      <ul>
        <li>
          <strong>The save file</strong> — your in-game progress: ship, cargo,
          credits, missions, reputation, discoveries and so on.
        </li>
        <li>
          <strong>A short summary</strong> shown when choosing between saves:
          current star system, credits, ship name, play time, and the kind of
          device it came from (&ldquo;Android&rdquo;, &ldquo;Windows&rdquo;,
          &ldquo;iOS&rdquo;, &ldquo;Mac&rdquo; or &ldquo;browser&rdquo;).
        </li>
      </ul>
      <p>
        Saves are filed under a one-way hash of your sync code; we store the
        hash, never the code itself, and nothing links a save to you as a
        person. Anyone who has your sync code can load and overwrite those
        saves, so keep it private. <strong>Unlink this device</strong> in the
        Cloud save panel stops uploads from that device.
      </p>
      <p>
        Cloud saves are stored in a database run for us by{" "}
        <a href="https://supabase.com/privacy">Supabase</a>. All traffic uses
        encrypted HTTPS connections. Like any web server, Supabase&apos;s
        infrastructure sees the IP address of the device connecting to it and
        may keep it briefly in its logs for security and operations. We use it
        for nothing else.
      </p>

      <h2 id="services">Other services the game talks to</h2>
      <ul>
        <li>
          <strong>Google Fonts.</strong> When the game starts, it downloads its
          typeface, Chakra Petch, from Google Fonts. Google receives your IP
          address and browser details as part of that request; see{" "}
          <a href="https://developers.google.com/fonts/faq/privacy">
            Google Fonts&apos; privacy notes
          </a>
          .
        </li>
        <li>
          <strong>Google Play</strong> sells, installs and updates the Android
          app, and Google&apos;s own{" "}
          <a href="https://policies.google.com/privacy">privacy policy</a>{" "}
          applies to the Play Store. Google takes the payment; we never see your
          card or payment details. For each purchase Google gives us an order
          record (order number, date, price and your country and region), which
          we use only for accounting, tax and refunds. We also see the
          aggregate, anonymous install and crash statistics that Google Play
          Console gives every developer.
        </li>
        <li>
          <strong>Device text-to-speech.</strong> If you pick &ldquo;Device
          TTS&rdquo; as the ship voice, lines are spoken by your device&apos;s
          own speech engine. The default voice uses recordings bundled with the
          game.
        </li>
      </ul>

      <h2 id="exports">Files you export</h2>
      <p>
        <strong>Export save file</strong> and the{" "}
        <strong>performance recorder</strong> log create files on your device.
        The performance log includes technical details — device model string,
        screen size, graphics chip and frame rates — so it&apos;s useful in bug
        reports. These files go only where you send them: nothing is uploaded
        automatically. If you email one to us, we use it only to look into your
        problem.
      </p>

      <h2 id="website">This website</h2>
      <p>
        {site.siteUrl.replace("https://", "")} is hosted by{" "}
        <a href="https://vercel.com/legal/privacy-policy">Vercel</a>, which
        processes visitor IP addresses to serve pages and protect against abuse.
        The site sets no cookies and runs no analytics or advertising scripts.
      </p>

      <h2 id="email">If you email us</h2>
      <p>
        We receive whatever you choose to send — your email address, your
        message and any attachments — and use it only to reply and to fix what
        you report. We delete support email once it is no longer needed.
      </p>

      <h2 id="delete-data">Deleting your data</h2>
      <ul>
        <li>
          <strong>On your device:</strong> delete a pilot with ✕ on the title
          screen, clear the app&apos;s storage, or uninstall it.
        </li>
        <li>
          <strong>Cloud saves:</strong> <a href={privacyMailto}>email us</a>{" "}
          your sync code and we will delete every save stored under it, usually
          within 7 days and always within 30. Because we only store a hash of
          the code, the code is the only way we can find your saves — we
          can&apos;t look them up by name or email.
        </li>
      </ul>
      <p>
        Cloud saves are otherwise kept until you ask us to delete them or we
        shut the cloud save service down, in which case they are deleted.
      </p>

      <h2 id="rights">Your rights</h2>
      <p>
        Depending on where you live (for example under the GDPR in the EU and
        UK, or the CCPA in California), you may have the right to access,
        correct, export or delete personal data about you, and to object to how
        it is used. Because we hold almost nothing that identifies you, the
        practical way to exercise these rights is the cloud save deletion above,
        or to <a href={privacyMailto}>email us</a>. We will not discriminate
        against you for making a request. We do not sell personal information,
        and we do not use it for advertising.
      </p>

      <h2 id="children">Children</h2>
      <p>
        {site.game} is not directed at children under 13, and we do not
        knowingly collect personal information from them. The game itself asks
        for none. If you believe a child has sent us personal information,{" "}
        <a href={privacyMailto}>contact us</a> and we will delete it.
      </p>

      <h2 id="security">Security</h2>
      <p>
        Cloud save traffic is encrypted in transit. The saves table can only be
        reached through three narrow functions that require the sync code, so
        one player cannot list or read another&apos;s saves.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        If the game starts handling data differently, we will update this page
        and the date at the top before the change ships. Significant changes
        will also be noted in the game&apos;s release notes.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Questions or requests about privacy:{" "}
        <a href={privacyMailto}>email {site.studio}</a>.
      </p>
    </DocPage>
  );
}
