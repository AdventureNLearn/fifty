import { Link } from "@tanstack/react-router";
import { CELLS, LANES, LAYERS } from "@/lib/data/stack";
import { ClaimStateBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LaneId, LayerId } from "@/lib/types";

export function StackMatrix({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-24 p-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              Layer
            </th>
            {LANES.map((lane) => (
              <th key={lane.id} className="p-2">
                <Link
                  to="/lanes/$lane"
                  params={{ lane: lane.id }}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted hover:text-fg"
                >
                  {lane.name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LAYERS.map((layer) => (
            <tr key={layer.id} className="border-t border-rule">
              <th className="align-top p-2">
                <a
                  href={`#${layer.id}`}
                  className="font-display text-base font-medium hover:text-gulf"
                >
                  {layer.name}
                </a>
                {!compact && (
                  <p className="mt-1 font-mono text-[10px] text-faint">
                    {layer.kicker}
                  </p>
                )}
              </th>
              {LANES.map((lane) => {
                const cell = CELLS.find(
                  (c) => c.layer === layer.id && c.lane === lane.id,
                );
                if (!cell) return <td key={lane.id} />;
                return (
                  <td key={lane.id} className="align-top p-1.5">
                    <a
                      href={`#${layer.id}-${lane.id}`}
                      className={cn(
                        "block min-h-24 rounded-md bg-paper p-3 shadow-[inset_0_0_0_1px_var(--color-rule)] hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gulf)_50%,transparent)]",
                      )}
                    >
                      <p className="text-sm font-medium leading-snug">
                        {cell.title}
                      </p>
                      {!compact && (
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                          {cell.body}
                        </p>
                      )}
                      <div className="mt-2">
                        <ClaimStateBadge state={cell.claim} />
                      </div>
                    </a>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StackLegend() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg bg-paper p-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          Jurisdiction
        </p>
        <ul className="mt-3 space-y-3">
          {LAYERS.map((l) => (
            <li key={l.id}>
              <Link to="/stack" hash={l.id} className="block hover:text-gulf">
                <p className="text-sm font-medium">{l.name}</p>
                <p className="text-xs leading-relaxed text-muted">{l.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-paper p-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          Process
        </p>
        <ul className="mt-3 space-y-3">
          {LANES.map((l) => (
            <li key={l.id}>
              <Link
                to="/lanes/$lane"
                params={{ lane: l.id }}
                className="block hover:text-gulf"
              >
                <p className="text-sm font-medium">{l.name}</p>
                <p className="text-xs leading-relaxed text-muted">{l.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function cellAnchor(layer: LayerId, lane: LaneId) {
  return `${layer}-${lane}`;
}
