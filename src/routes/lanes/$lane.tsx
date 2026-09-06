import { createFileRoute, Link } from "@tanstack/react-router";
import { LANES, LAYERS, cellsForLane } from "@/lib/data/stack";
import { ClaimRow } from "@/components/claim-chip";
import { Button } from "@/components/ui/button";
import { templatesFor } from "@/lib/data/comments";
import { FEDERAL } from "@/lib/data/federal";
import { useDesk } from "@/lib/store";
import { Copy } from "lucide-react";
import type { LaneId } from "@/lib/types";

const LANE_IDS: LaneId[] = LANES.map((l) => l.id);

export const Route = createFileRoute("/lanes/$lane")({
  component: LanePage,
});

function LanePage() {
  const { lane: raw } = Route.useParams();
  const lane = (LANE_IDS as string[]).includes(raw) ? (raw as LaneId) : null;
  const meta = LANES.find((l) => l.id === lane);
  const cells = lane ? cellsForLane(lane) : [];
  const templates = lane ? templatesFor(lane) : [];
  const setCopied = useDesk((s) => s.setCopied);

  if (!lane || !meta) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl">Not a lane</h1>
        <Link to="/lanes" className="mt-3 inline-block text-gulf">
          All lanes
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <Link
        to="/lanes"
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint hover:text-muted"
      >
        Lanes
      </Link>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-gulf">
        {meta.verb}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
        {meta.name}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{meta.blurb}</p>

      <ol className="mt-8 space-y-4">
        {cells.map((c) => {
          const layer = LAYERS.find((l) => l.id === c.layer);
          return (
            <li
              key={c.layer}
              className="rounded-lg bg-paper p-5 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {layer?.name}
              </p>
              <h2 className="mt-1 font-display text-xl font-medium">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              <p className="mt-3 text-sm">{c.action}</p>
              <ClaimRow state={c.claim} kind={c.kind} sourceIds={c.sourceIds} />
            </li>
          );
        })}
      </ol>

      {lane === "legislation" && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Federal instruments</h2>
          <ul className="mt-4 space-y-3">
            {FEDERAL.bills.map((b) => (
              <li
                key={b.cite}
                className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
              >
                <p className="font-mono text-[11px] text-gulf">{b.cite}</p>
                <p className="mt-1 font-medium">{b.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {b.sponsor} · {b.status}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.what}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lane === "grants" && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Named grant pipes</h2>
          <ul className="mt-4 space-y-3">
            {FEDERAL.grants.map((g) => (
              <li
                key={g.name}
                className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
              >
                <p className="font-medium">{g.name}</p>
                <p className="mt-1 text-xs text-faint">{g.who}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.note}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lane === "privacy" && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Three doors</h2>
          <ul className="mt-4 space-y-3">
            {FEDERAL.access.map((a) => (
              <li
                key={a.title}
                className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
              >
                <p className="font-medium">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {templates.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Comments in this lane</h2>
          <ul className="mt-4 space-y-3">
            {templates.map((t) => (
              <li
                key={t.id}
                className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {t.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{t.text}</p>
                <Button
                  size="sm"
                  variant="secondary"
                  className="mt-3"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(t.text);
                      setCopied(t.id);
                    } catch {
                      /* ignore */
                    }
                  }}
                >
                  <Copy className="size-3.5" />
                  Copy
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
