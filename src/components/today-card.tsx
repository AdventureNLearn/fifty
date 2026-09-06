import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClaimKindBadge, ClaimStateBadge } from "@/components/ui/badge";
import { JOIN_MAILTO, PETITION_URL } from "@/lib/data/petition";
import {
  targetForWeekday,
  templateForDay,
  templatesFor,
} from "@/lib/data/comments";
import { useDesk } from "@/lib/store";
import { dayOfYear, todayKey } from "@/lib/utils";
import { LiveRefreshButton, LiveStatStrip } from "@/components/live-refresh";

export function TodayCard() {
  const today = todayKey();
  const weekday = new Date().getDay();
  const target = targetForWeekday(weekday);
  const primary = templateForDay(dayOfYear(today));
  const alts = templatesFor(target.lane).filter((t) => t.id !== primary.id);
  const [picked, setPicked] = useState(primary);
  const [copied, setCopied] = useState(false);
  const done = useDesk((s) => s.isDone());
  const mark = useDesk((s) => s.markToday);
  const unmark = useDesk((s) => s.unmarkToday);
  const setCopiedId = useDesk((s) => s.setCopied);

  async function copy() {
    try {
      await navigator.clipboard.writeText(picked.text);
      setCopied(true);
      setCopiedId(picked.id);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard can fail in some embeds; the text stays selectable
    }
  }

  return (
    <section className="rounded-xl bg-paper p-5 shadow-[inset_0_0_0_1px_var(--color-rule)] sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gulf">
            Today’s action
          </p>
          <h2 className="mt-1 font-display text-2xl font-medium tracking-tight sm:text-3xl">
            One comment. Link the petition.
          </h2>
        </div>
        <div className="flex gap-1.5">
          <ClaimStateBadge state="supported" />
          <ClaimKindBadge kind="evidence" />
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {target.label}. {target.hint} Then paste the comment below. That is the
        whole job.
      </p>

      <div className="mt-5 rounded-lg bg-raised p-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {picked.label}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-fg">{picked.text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={copy} variant="gulf">
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy comment"}
          </Button>
          <Button
            variant={done ? "secondary" : "primary"}
            onClick={() => (done ? unmark() : mark())}
          >
            {done ? "Undo today’s mark" : "Mark today done"}
          </Button>
        </div>
      </div>

      {alts.length > 0 && (
        <div className="mt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            Same lane, other wording
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {alts.slice(0, 4).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setPicked(t)}
                className={`rounded-sm px-3 py-2 text-xs min-h-11 shadow-[inset_0_0_0_1px_var(--color-rule)] ${
                  picked.id === t.id ? "bg-raised text-fg" : "text-muted"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <LiveStatStrip />
      </div>
      <LiveRefreshButton className="mt-4" />

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button asChild variant="primary">
          <a href={PETITION_URL} target="_blank" rel="noreferrer">
            Sign the petition
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={JOIN_MAILTO}>Join the daily team</a>
        </Button>
      </div>
    </section>
  );
}
