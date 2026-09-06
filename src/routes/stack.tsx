import { createFileRoute, Link } from "@tanstack/react-router";
import { LANES, LAYERS, cellAt } from "@/lib/data/stack";
import { ClaimRow } from "@/components/claim-chip";
import { StackMatrix } from "@/components/stack-matrix";
import { Button } from "@/components/ui/button";
import { templatesFor } from "@/lib/data/comments";
import { useDesk } from "@/lib/store";
import { Copy } from "lucide-react";
import type { LaneId } from "@/lib/types";

export const Route = createFileRoute("/stack")({ component: StackPage });

function StackPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Full picture
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        From the pole to the statute.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Four layers of government. Six process lanes. Read across for a
        jurisdiction, down for a process. Do not paste one state’s occupancy
        form onto another state’s dirt.
      </p>

      <div className="mt-8 hidden lg:block">
        <StackMatrix />
      </div>

      <div className="mt-8 space-y-12">
        {LAYERS.map((layer) => (
          <section key={layer.id} id={layer.id} className="scroll-mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {layer.kicker}
            </p>
            <h2 className="mt-1 font-display text-3xl font-medium">{layer.name}</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">{layer.blurb}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {LANES.map((lane) => {
                const cell = cellAt(layer.id, lane.id);
                if (!cell) return null;
                return (
                  <article
                    key={lane.id}
                    id={`${layer.id}-${lane.id}`}
                    className="scroll-mt-24 rounded-lg bg-paper p-5 shadow-[inset_0_0_0_1px_var(--color-rule)]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gulf">
                      {lane.name}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium">
                      {cell.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {cell.body}
                    </p>
                    <p className="mt-3 text-sm text-fg">{cell.action}</p>
                    <ClaimRow
                      state={cell.claim}
                      kind={cell.kind}
                      sourceIds={cell.sourceIds}
                    />
                    <CopyLane lane={lane.id} />
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        Lanes as a vertical:{" "}
        {LANES.map((l, i) => (
          <span key={l.id}>
            {i > 0 && " · "}
            <Link
              to="/lanes/$lane"
              params={{ lane: l.id }}
              className="text-gulf underline-offset-2 hover:underline"
            >
              {l.name}
            </Link>
          </span>
        ))}
      </p>
    </main>
  );
}

function CopyLane({ lane }: { lane: LaneId }) {
  const templates = templatesFor(lane);
  const setCopied = useDesk((s) => s.setCopied);
  if (templates.length === 0) return null;
  const t = templates[0];
  return (
    <div className="mt-4">
      <Button
        size="sm"
        variant="secondary"
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
        Copy a comment in this lane
      </Button>
    </div>
  );
}
