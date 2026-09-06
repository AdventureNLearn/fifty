import { createFileRoute, Link } from "@tanstack/react-router";
import { TEMPLATES, WEEKDAY_TARGETS } from "@/lib/data/comments";
import { DAILY_RULE, JOIN_EMAIL, JOIN_MAILTO, JOIN_SUBJECT, RECRUIT_POST } from "@/lib/data/petition";
import { SITE } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { useDesk } from "@/lib/store";
import { Copy } from "lucide-react";

export const Route = createFileRoute("/kit")({ component: KitPage });

function KitPage() {
  const setCopied = useDesk((s) => s.setCopied);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gulf">
        Daily team
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium tracking-tight">
        The kit.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        {DAILY_RULE.what} {DAILY_RULE.cadence} Any state. Do not automate it.
        Do not vandalize a pole. Copy, paste, one post a day.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-faint">
        {SITE.independence}
      </p>

      <section className="mt-8 rounded-lg bg-paper p-5 shadow-[inset_0_0_0_1px_var(--color-rule)]">
        <h2 className="font-display text-xl font-medium">Join</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Email {JOIN_EMAIL} with subject “{JOIN_SUBJECT}”. The organizer
          sends a progress update. That is the whole team.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild>
            <a href={JOIN_MAILTO}>Open mail</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={RECRUIT_POST} target="_blank" rel="noreferrer">
              The recruiting post
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-medium">Weekday targets</h2>
        <p className="mt-2 text-sm text-muted">
          Same action every day. The kind of post rotates so the team is not
          stacking the same thread.
        </p>
        <ol className="mt-4 space-y-3">
          {WEEKDAY_TARGETS.map((t) => (
            <li
              key={t.weekday}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-medium">{t.label}</p>
              <p className="mt-1 text-sm text-muted">{t.hint}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-medium">Comment bank</h2>
        <ul className="mt-4 space-y-3">
          {TEMPLATES.map((t) => (
            <li
              key={t.id}
              className="rounded-md bg-paper px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {t.lane} · {t.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{t.text}</p>
              <Button
                size="sm"
                variant="secondary"
                className="mt-3"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(t.text);
                    setCopied(t.id);
                  } catch {
                    /* ignore */
                  }
                }}
              >
                <Copy className="size-3.5" />
                Copy
              </Button>
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-12 text-sm leading-relaxed text-faint">
        This page is the daily comment bank. The research desk — file, tens,
        merge, copyable prompts for Grok and Grok Build — is{" "}
        <Link to="/method" className="text-muted underline-offset-4 hover:underline">
          Method
        </Link>
        .
      </p>
    </main>
  );
}
