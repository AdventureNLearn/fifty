import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CITIES,
  DAILY_RULE,
  DISCLAIMER,
  JOIN_MAILTO,
  PETITION,
  PETITION_URL,
} from "@/lib/data/petition";
import { Button } from "@/components/ui/button";
import { ClaimKindBadge, ClaimStateBadge } from "@/components/ui/badge";
import {
  LiveRefreshButton,
  camerasView,
  signaturesView,
} from "@/components/live-refresh";
import { useLive } from "@/lib/live-store";

export const Route = createFileRoute("/petition")({ component: PetitionPage });

function PetitionPage() {
  const snapshot = useLive((s) => s.snapshot);
  const sig = signaturesView(snapshot);
  const cam = camerasView(snapshot);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        {PETITION.organizer}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {PETITION.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <ClaimStateBadge state="supported" />
        <ClaimKindBadge kind="evidence" />
      </div>
      <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight">
        {PETITION.ask}
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted">{PETITION.thesis}</p>

      <blockquote className="mt-8 border-l-2 border-gulf pl-5 text-base leading-relaxed text-fg">
        {PETITION.text}
      </blockquote>

      <dl className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Signatures
          </dt>
          <dd className="mt-1 font-display text-3xl tabular-nums">
            {sig.count.toLocaleString()}
          </dd>
          <p className="mt-1 text-xs text-muted">
            {sig.live ? `live · ${sig.asOf}` : `on file · as of ${sig.asOf}`}
          </p>
        </div>
        <div className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]">
          <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            The math
          </dt>
          <dd className="mt-1 font-display text-3xl">50</dd>
          <p className="mt-1 text-xs text-muted">
            not {CITIES.count.toLocaleString()} municipal governments
          </p>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-faint">
        Mapped cameras: {cam.count.toLocaleString()}
        {cam.live ? ` · live floor · ${cam.asOf}` : ` · CRS on file · ${cam.asOf}`}.
        Crowdsourced. Not a census.
      </p>
      <LiveRefreshButton className="mt-4" />

      <div className="mt-8 flex flex-col gap-2 sm:flex-row">
        <Button asChild>
          <a href={PETITION_URL} target="_blank" rel="noreferrer">
            Sign on Orwell Day
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={JOIN_MAILTO}>Join the daily team</a>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/kit">Open the kit</Link>
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Why the state</h2>
        <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
          <li>
            A city that cancels still sits next to a city that feeds the same
            national database. Local wins leak.
          </li>
          <li>
            Highway right-of-way, grant eligible-uses, and criminal penalties
            for unauthorized install are state instruments. A council cannot
            write them.
          </li>
          <li>
            {DAILY_RULE.what} Concentration beats 19,000 scattered hearings.
          </li>
        </ul>
      </section>

      <p className="mt-12 text-xs leading-relaxed text-faint">{DISCLAIMER}</p>
    </main>
  );
}
