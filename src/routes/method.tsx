import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useDesk } from "@/lib/store";
import {
  DESKS,
  EDITOR_PROMPT,
  FORK,
  HARD_RULES,
  INTEGRITY,
  KIT_PACK,
  LOOPS,
  METHOD,
  ORIGIN,
  POSTURE_LADDER,
  RESEARCHER_PROMPT,
  ROLES,
  RUNBOOK,
  SEARCH_ORDER,
  SISTER,
  STATE_FILE_TEXT,
  TOOLS,
} from "@/lib/data/method";
import { Check, Copy } from "lucide-react";

export const Route = createFileRoute("/method")({ component: MethodPage });

function MethodPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        {METHOD.kicker}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {METHOD.title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{METHOD.lede}</p>
      <p className="mt-3 text-sm leading-relaxed text-faint">{METHOD.independence}</p>
      <p className="mt-3 text-sm leading-relaxed text-faint">
        {SISTER.kit} {SISTER.method}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <CopyButton id="kit-pack" text={KIT_PACK} label="Copy the whole kit" size="default" />
        <Button asChild variant="secondary">
          <Link to="/kit">Daily comment kit</Link>
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">{ORIGIN.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{ORIGIN.lede}</p>
        <ol className="mt-4 space-y-3">
          {ORIGIN.beats.map((s) => (
            <li
              key={s.step}
              className="rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Step {s.step}
              </p>
              <p className="mt-1 font-medium">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">The team</h2>
        <p className="mt-2 text-sm text-muted">
          Ten researcher desks. One editor. One file. That is the whole crew.
        </p>
        <ul className="mt-4 space-y-3">
          {ROLES.map((r) => (
            <li
              key={r.id}
              className="rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gulf">
                {r.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.job}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          One loop — ten desks
        </p>
        <ol className="mt-2 grid grid-cols-5 gap-1 sm:grid-cols-10">
          {DESKS.map((d) => (
            <li
              key={d}
              className="rounded-sm bg-paper py-3 text-center font-mono text-[11px] tabular-nums shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              R{d}
            </li>
          ))}
        </ol>
        <p className="mt-2 text-sm text-muted">
          Each desk gets one cell. They run at the same time. The editor waits
          for all ten, then writes.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Five loops × ten</h2>
        <p className="mt-2 text-sm text-muted">
          Parallel inside a loop. Sequential across loops. DC rides on loop 5.
          A loop is on the board only after the editor merges it.
        </p>
        <ol className="mt-4 space-y-2">
          {LOOPS.map((w) => (
            <li
              key={w.loop}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Loop {w.loop}
                {w.cells.length > 10 ? " · rider" : ""}
              </p>
              <p className="mt-2 flex flex-wrap gap-1">
                {w.cells.map((code) => (
                  <span
                    key={code}
                    className="inline-flex min-w-9 items-center justify-center rounded-sm px-1.5 py-1 font-mono text-[11px] tabular-nums shadow-[inset_0_0_0_1px_var(--color-rule)]"
                  >
                    {code}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Posture ladder</h2>
        <p className="mt-2 text-sm text-muted">Pick the highest that is true. One only.</p>
        <ol className="mt-4 space-y-2">
          {POSTURE_LADDER.map((p) => (
            <li
              key={p.id}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-medium">{p.label}</p>
              <p className="mt-1 text-sm text-muted">{p.rule}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Search order</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
          {SEARCH_ORDER.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Hard rules</h2>
        <ul className="mt-4 space-y-2">
          {HARD_RULES.map((r) => (
            <li
              key={r}
              className="rounded-md bg-paper px-4 py-3 text-sm leading-relaxed shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Integrity kernel</h2>
        <p className="mt-2 text-sm text-muted">
          The labels on the board are not decoration. They are the merge rule.
        </p>
        <ul className="mt-4 space-y-2">
          {INTEGRITY.map((i) => (
            <li
              key={i.label}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-medium">{i.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{i.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">The run</h2>
        <ol className="mt-4 space-y-3">
          {RUNBOOK.map((s) => (
            <li
              key={s.step}
              className="rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Step {s.step}
              </p>
              <p className="mt-1 font-medium">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">{TOOLS.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{TOOLS.body}</p>
        <ul className="mt-4 space-y-3">
          <li className="rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gulf">
              {TOOLS.grok.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{TOOLS.grok.how}</p>
            <a
              href={TOOLS.grok.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm text-gulf underline-offset-4 hover:underline"
            >
              Open Grok
            </a>
          </li>
          <li className="rounded-md bg-paper px-4 py-4 shadow-[inset_0_0_0_1px_var(--color-rule)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gulf">
              {TOOLS.build.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{TOOLS.build.how}</p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">The file</h2>
        <p className="mt-2 text-sm text-muted">
          FIFTY’s worked ALPR template. Swap the stack lanes when you fork the
          topic. Do not fuzzy the posture ladder.
        </p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-paper p-4 font-mono text-[11px] leading-relaxed text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]">
          {STATE_FILE_TEXT}
        </pre>
        <CopyButton
          id="state-file"
          text={STATE_FILE_TEXT}
          label="Copy the file"
          className="mt-3"
        />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Researcher prompt</h2>
        <p className="mt-2 text-sm text-muted">
          One cell. Paste into Grok or hand to a Grok Build researcher.
        </p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-paper p-4 font-mono text-[11px] leading-relaxed text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]">
          {RESEARCHER_PROMPT}
        </pre>
        <CopyButton
          id="researcher-prompt"
          text={RESEARCHER_PROMPT}
          label="Copy researcher prompt"
          className="mt-3"
        />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">Editor prompt</h2>
        <p className="mt-2 text-sm text-muted">
          After ten files land. Spot-check. Merge. Next loop.
        </p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-paper p-4 font-mono text-[11px] leading-relaxed text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]">
          {EDITOR_PROMPT}
        </pre>
        <CopyButton
          id="editor-prompt"
          text={EDITOR_PROMPT}
          label="Copy editor prompt"
          className="mt-3"
        />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium">{FORK.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{FORK.body}</p>
        <ul className="mt-4 space-y-2">
          {FORK.swaps.map((s) => (
            <li
              key={s.from}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {s.from}
              </p>
              <p className="mt-1 text-sm text-muted">{s.to}</p>
            </li>
          ))}
        </ul>
        <CopyButton id="kit-pack-end" text={KIT_PACK} label="Copy the whole kit" className="mt-6" />
      </section>
    </main>
  );
}

function CopyButton({
  id,
  text,
  label,
  className,
  size = "sm",
}: {
  id: string;
  text: string;
  label: string;
  className?: string;
  size?: "sm" | "default";
}) {
  const last = useDesk((s) => s.lastCopiedId);
  const setCopied = useDesk((s) => s.setCopied);
  const copied = last === id || (id.startsWith("kit-pack") && !!last && last.startsWith("kit-pack"));

  return (
    <Button
      size={size}
      variant={size === "default" ? "gulf" : "secondary"}
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(id);
        } catch {
          /* ignore */
        }
      }}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : label}
    </Button>
  );
}
