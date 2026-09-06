import { createFileRoute } from "@tanstack/react-router";
import { SOURCES } from "@/lib/data/sources";
import { DISCLAIMER } from "@/lib/data/petition";

export const Route = createFileRoute("/sources")({ component: SourcesPage });

function SourcesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Integrity
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
        Sources and labels.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Claims are tri-state: Supported, Unproven, Disputed. Kind is Evidence,
        Inference, or Assumption. Primary records beat commentary. Empty beats
        a cloned permit. This desk will not look up a plate, a person, or a
        home address.
      </p>
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
