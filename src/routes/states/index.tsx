import { createFileRoute, Link } from "@tanstack/react-router";
import { StateBoard } from "@/components/state-board";
import type { Posture } from "@/lib/types";

const POSTURES: Posture[] = ["exec-pause", "statute", "bill", "local", "open"];

type Search = { p?: Posture };

export const Route = createFileRoute("/states/")({
  validateSearch: (raw: Record<string, unknown>): Search => {
    const p = raw.p;
    if (typeof p === "string" && (POSTURES as string[]).includes(p)) {
      return { p: p as Posture };
    }
    return {};
  },
  component: StatesPage,
});

function StatesPage() {
  const { p } = Route.useSearch();
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Fifty legislatures
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        The board.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Each cell is a posture, not a camera count. Executive pause is not a
        ban. A statute is not always a removal. Empty means this briefing has
        not retrieved a statewide instrument — not that nothing happened. No
        state is the default. How a cell is filled is public:{" "}
        <Link to="/method" className="text-gulf underline-offset-4 hover:underline">
          Method
        </Link>
        .
      </p>
      <div className="mt-8">
        <StateBoard filter={p} />
      </div>
    </main>
  );
}
