import { createFileRoute, Link } from "@tanstack/react-router";
import { TodayCard } from "@/components/today-card";
import { StackLegend } from "@/components/stack-matrix";
import { DISCLAIMER, DAILY_RULE, PETITION } from "@/lib/data/petition";
import { postureCounts } from "@/lib/data/states";
import { PostureBadge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const counts = postureCounts();
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        {DAILY_RULE.cadence}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight sm:text-6xl">
        19,000 cities.
        <br />
        50 states.
        <br />
        One comment a day.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {PETITION.thesis} {DAILY_RULE.what} {DAILY_RULE.update}
      </p>

      <div className="mt-10">
        <TodayCard />
      </div>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              The picture
            </p>
            <h2 className="mt-1 font-display text-3xl font-medium tracking-tight">
              Local to federal. Check to statute.
            </h2>
          </div>
          <Link
            to="/stack"
            className="hidden text-sm text-gulf underline-offset-4 hover:underline sm:inline"
          >
            Open the stack
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Two axes, not a vendor map. Jurisdiction: city, county, state, federal.
          Process: funding, grants, permitting, installation, privacy, legislation.
          A city contract is not a highway permit. A grant is not a statute.
        </p>
        <div className="mt-6">
          <StackLegend />
        </div>
        <Link
          to="/stack"
          className="mt-4 inline-flex min-h-11 items-center text-sm text-gulf underline-offset-4 hover:underline sm:hidden"
        >
          Open the stack
        </Link>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Fifty legislatures
            </p>
            <h2 className="mt-1 font-display text-3xl font-medium tracking-tight">
              Where the petition lands
            </h2>
          </div>
          <Link
            to="/states"
            className="hidden text-sm text-gulf underline-offset-4 hover:underline sm:inline"
          >
            Open the board
          </Link>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {(
            [
              ["exec-pause", counts["exec-pause"]],
              ["statute", counts.statute],
              ["bill", counts.bill],
              ["local", counts.local],
              ["open", counts.open],
            ] as const
          ).map(([p, n]) => (
            <li
              key={p}
              className="rounded-md bg-paper px-3 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-display text-2xl tabular-nums">{n}</p>
              <div className="mt-2">
                <PostureBadge posture={p} />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Empty is a finding. A state marked “not retrieved” has no packed ban,
          bill, or executive order in this desk — not “nothing happened.”
        </p>
      </section>

      <p className="mt-16 max-w-2xl text-xs leading-relaxed text-faint">
        {DISCLAIMER}
      </p>
    </main>
  );
}
