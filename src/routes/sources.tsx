import { createFileRoute, Link } from "@tanstack/react-router";
import { SOURCES } from "@/lib/data/sources";
import { CAMERAS, CITIES, DISCLAIMER, SIGNATURES } from "@/lib/data/petition";
import { FEDERAL } from "@/lib/data/federal";
import { SITE } from "@/lib/data/site";
import { LiveRefreshButton, camerasView, signaturesView } from "@/components/live-refresh";
import { useLive } from "@/lib/live-store";

export const Route = createFileRoute("/sources")({ component: SourcesPage });

function SourcesPage() {
  const snapshot = useLive((s) => s.snapshot);
  const sig = signaturesView(snapshot);
  const cam = camerasView(snapshot);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Integrity
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
        Sources and labels.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        {SITE.independence} Claims are tri-state: Supported, Unproven,
        Disputed. Kind is Evidence, Inference, or Assumption. Primary records
        beat commentary. Empty beats a cloned permit. FIFTY will not look up a
        plate, a person, or a home address. State rows are a retrieved
        briefing, not a live legislature feed. Petition signatures and the
        crowdsourced camera count can be refreshed from their public pages.
        How a cell is filled — file, tens, merge — is on{" "}
        <Link to="/method" className="text-gulf underline-offset-4 hover:underline">
          Method
        </Link>
        .
      </p>

      <section className="mt-8 rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          Live overlay
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            Signatures: {sig.count.toLocaleString()}{" "}
            {sig.live ? `(live · ${sig.asOf})` : `(on file ${SIGNATURES.asOf})`}
          </li>
          <li>
            Mapped cameras: {cam.count.toLocaleString()}{" "}
            {cam.live
              ? `(live floor · ${cam.asOf})`
              : `(CRS on file ${CAMERAS.asOf})`}
          </li>
          <li>
            Municipal governments: {CITIES.count.toLocaleString()} (Census of
            Governments {CITIES.asOf} — retrieved, not live)
          </li>
          <li>Federal pack as of {FEDERAL.asOf} — not live</li>
        </ul>
        <LiveRefreshButton className="mt-4" />
      </section>

      <ul className="mt-8 space-y-3">
        {SOURCES.map((s) => (
          <li
            key={s.id}
            className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              {s.kind} · {s.asOf}
            </p>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm font-medium hover:text-gulf"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xs leading-relaxed text-faint">{DISCLAIMER}</p>
    </main>
  );
}
