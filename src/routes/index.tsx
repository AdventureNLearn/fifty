import { createFileRoute, Link } from "@tanstack/react-router";
import { TodayCard } from "@/components/today-card";
import { StackLegend } from "@/components/stack-matrix";
import { DISCLAIMER, DAILY_RULE, PETITION } from "@/lib/data/petition";
import { SITE } from "@/lib/data/site";
import { postureCounts } from "@/lib/data/states";
import { PostureBadge } from "@/components/ui/badge";
import { RADIO, STATIONS } from "@/lib/data/stations";
import { SHEPARD } from "@/lib/shepard";
import { useShepard } from "@/lib/shepard-store";
import { useRadio } from "@/lib/radio-store";
import { startRadio } from "@/lib/radio-engine";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const counts = postureCounts();
  const setOpen = useShepard((s) => s.setOpen);
  const setWantPlay = useRadio((s) => s.setWantPlay);
  const setStation = useRadio((s) => s.setStation);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        {SITE.kicker}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight sm:text-6xl">
        19,000 cities.
        <br />
        50 states.
        <br />
        One comment a day.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {PETITION.thesis} {DAILY_RULE.what} {DAILY_RULE.cadence} Any state. Same
        action.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setStation(STATIONS[0].id);
            void startRadio(STATIONS[0].id).then((ok) => setWantPlay(ok));
          }}
          className="inline-flex min-h-11 items-center rounded-sm px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-fg shadow-[inset_0_0_0_1px_var(--color-rule)] hover:bg-paper"
        >
          {RADIO.call} on air
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-11 items-center rounded-sm px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-fg shadow-[inset_0_0_0_1px_var(--color-rule)] hover:bg-paper"
        >
          Ask {SHEPARD.name}
        </button>
      </div>

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
          Empty is a finding. “Not retrieved” means this briefing has no
          statewide instrument on file — not that nothing happened. A retention
          statute is not a ban. No state is the default.
        </p>
      </section>

      <p className="mt-16 max-w-2xl text-xs leading-relaxed text-faint">
        {DISCLAIMER}
      </p>
    </main>
  );
}
