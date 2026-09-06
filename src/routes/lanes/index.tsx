import { createFileRoute, Link } from "@tanstack/react-router";
import { LANES } from "@/lib/data/stack";

export const Route = createFileRoute("/lanes/")({ component: LanesIndex });

function LanesIndex() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Process
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
        Six lanes, local through federal.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Funding is not a grant. A grant is not a permit. A permit is not an
        install. An install is not a privacy rule. A privacy rule is not a ban.
      </p>
      <ul className="mt-8 space-y-3">
        {LANES.map((l) => (
          <li key={l.id}>
            <Link
              to="/lanes/$lane"
              params={{ lane: l.id }}
              className="block rounded-lg bg-paper px-5 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)] hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-gulf)_50%,transparent)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gulf">
                {l.verb}
              </p>
              <h2 className="mt-1 font-display text-2xl font-medium">{l.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
