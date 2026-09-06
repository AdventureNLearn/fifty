import { createFileRoute, Link } from "@tanstack/react-router";
import { STATE_BY_CODE, STATES } from "@/lib/data/states";
import { ClaimStateBadge, PostureBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LANES } from "@/lib/data/stack";
import { PETITION_URL, JOIN_MAILTO } from "@/lib/data/petition";
import { TEMPLATES } from "@/lib/data/comments";
import { useDesk } from "@/lib/store";
import { ClaimRow } from "@/components/claim-chip";

export const Route = createFileRoute("/states/$code")({
  component: StatePage,
});

function StatePage() {
  const { code } = Route.useParams();
  const row = STATE_BY_CODE[code.toUpperCase()];
  const setCopied = useDesk((s) => s.setCopied);

  if (!row) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl">Not on this board</h1>
        <p className="mt-3 text-muted">
          {code} is not a U.S. state or the District in this briefing.{" "}
          <Link to="/states" className="text-gulf underline-offset-2 hover:underline">
            Back to the board
          </Link>
        </p>
      </main>
    );
  }

  const comment = `A city fight in ${row.name} is still one of 19,000. A state ban is one of 50. Sign: ${PETITION_URL}`;
  const idx = STATES.findIndex((s) => s.code === row.code);
  const prev = STATES[(idx - 1 + STATES.length) % STATES.length];
  const next = STATES[(idx + 1) % STATES.length];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <Link
        to="/states"
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint hover:text-muted"
      >
        Board
      </Link>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PostureBadge posture={row.posture} />
        <ClaimStateBadge state={row.claim} />
        <span className="font-mono text-[10px] text-faint">as of {row.asOf}</span>
      </div>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {row.name}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{row.why}</p>
      {row.sourceIds && row.sourceIds.length > 0 && (
        <ClaimRow
          state={row.claim}
          kind={row.claim === "supported" ? "evidence" : "assumption"}
          sourceIds={row.sourceIds}
        />
      )}

      <dl className="mt-8 space-y-5">
        <Fact k="ALPR statute" v={row.alprStatute} />
        <Fact k="Executive" v={row.executive} />
        <Fact k="Local" v={row.localNote} />
        <Fact k="Funding / grants" v={row.fundingNote} />
        <Fact k="Permitting / dirt" v={row.permitNote} />
        <Fact k="Privacy" v={row.privacyNote} />
      </dl>

      {row.bills.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display text-2xl font-medium">Bills and memos</h2>
          <ul className="mt-3 space-y-3">
            {row.bills.map((b) => (
              <li
                key={b.cite}
                className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
              >
                <p className="font-mono text-[11px] text-gulf">{b.cite}</p>
                <p className="mt-1 font-medium">{b.title}</p>
                <p className="mt-1 text-sm text-muted">{b.status}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-8 rounded-lg bg-paper p-5 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          Comment for this state
        </p>
        <p className="mt-2 text-[15px] leading-relaxed">{comment}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(comment);
                setCopied(TEMPLATES[0].id);
              } catch {
                /* ignore */
              }
            }}
          >
            Copy
          </Button>
          <Button asChild variant="secondary">
            <a href={PETITION_URL} target="_blank" rel="noreferrer">
              Sign
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={JOIN_MAILTO}>Join the team</a>
          </Button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-medium">Read the lanes</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LANES.map((l) => (
            <li key={l.id}>
              <Link
                to="/lanes/$lane"
                params={{ lane: l.id }}
                className="flex min-h-11 items-center rounded-sm bg-paper px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-rule)] hover:text-gulf"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-10 flex justify-between text-sm text-muted">
        <Link
          to="/states/$code"
          params={{ code: prev.code }}
          className="min-h-11 inline-flex items-center hover:text-fg"
        >
          ← {prev.code}
        </Link>
        <Link
          to="/states/$code"
          params={{ code: next.code }}
          className="min-h-11 inline-flex items-center hover:text-fg"
        >
          {next.code} →
        </Link>
      </nav>
    </main>
  );
}

function Fact({ k, v }: { k: string; v: string | null }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
        {k}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-muted">
        {v ?? "Not retrieved. Empty beats a copied neighbor."}
      </dd>
    </div>
  );
}
