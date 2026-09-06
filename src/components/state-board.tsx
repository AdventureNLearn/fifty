import { Link } from "@tanstack/react-router";
import { POSTURE_LABEL, STATES, postureCounts } from "@/lib/data/states";
import { PostureBadge } from "@/components/ui/badge";
import type { Posture } from "@/lib/types";
import { cn } from "@/lib/utils";

const ORDER: Posture[] = ["exec-pause", "statute", "bill", "local", "open"];

export function StateBoard({ filter }: { filter?: Posture }) {
  const rows = filter ? STATES.filter((s) => s.posture === filter) : STATES;
  const counts = postureCounts();

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Link
          to="/states"
          className={chipClass(!filter)}
        >
          All · {STATES.length}
        </Link>
        {ORDER.map((p) => (
          <Link
            key={p}
            to="/states"
            search={{ p }}
            className={chipClass(filter === p)}
          >
            {POSTURE_LABEL[p]} · {counts[p]}
          </Link>
        ))}
      </div>

      <ul className="mt-5 grid grid-cols-3 gap-1.5 sm:grid-cols-6 md:grid-cols-9">
        {STATES.map((s) => (
          <li key={s.code}>
            <Link
              to="/states/$code"
              params={{ code: s.code }}
              className={cn(
                "flex min-h-11 flex-col items-center justify-center rounded-sm bg-paper px-1 py-2 shadow-[inset_0_0_0_1px_var(--color-rule)] hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gulf)_50%,transparent)]",
                filter && s.posture !== filter && "opacity-35",
              )}
            >
              <span className="font-mono text-sm tabular-nums">{s.code}</span>
              <span
                className={cn(
                  "mt-1 size-1.5 rounded-full",
                  s.posture === "exec-pause" && "bg-gulf",
                  s.posture === "statute" && "bg-fg",
                  s.posture === "bill" && "bg-warn",
                  s.posture === "local" && "bg-muted",
                  s.posture === "open" && "bg-rule",
                )}
              />
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2">
        {rows
          .filter((s) => s.posture !== "open")
          .map((s) => (
            <li key={s.code}>
              <Link
                to="/states/$code"
                params={{ code: s.code }}
                className="flex flex-col gap-1 rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)] hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gulf)_50%,transparent)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="font-medium">
                    <span className="font-mono text-faint">{s.code}</span>{" "}
                    {s.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{s.why}</p>
                </div>
                <PostureBadge posture={s.posture} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

function chipClass(active: boolean) {
  return cn(
    "inline-flex min-h-11 items-center rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.1em]",
    active
      ? "bg-raised text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]"
      : "text-muted hover:text-fg",
  );
}
