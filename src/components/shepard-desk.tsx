import { useEffect, useRef, useState } from "react";
import { Send, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  askShepard,
  SHEPARD,
  SHEPARD_STARTERS,
  type ShepardTurn,
} from "@/lib/shepard";
import { useShepard } from "@/lib/shepard-store";
import { cn } from "@/lib/utils";

export function ShepardButton() {
  const open = useShepard((s) => s.open);
  const setOpen = useShepard((s) => s.setOpen);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-controls="shepard-desk"
      className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-muted hover:text-fg sm:px-3"
    >
      <Shield className="size-4" />
      <span className="hidden sm:inline">Shepard</span>
    </button>
  );
}

export function ShepardDesk() {
  const open = useShepard((s) => s.open);
  const setOpen = useShepard((s) => s.setOpen);
  const messages = useShepard((s) => s.messages);
  const pending = useShepard((s) => s.pending);
  const error = useShepard((s) => s.error);
  const push = useShepard((s) => s.push);
  const setPending = useShepard((s) => s.setPending);
  const setError = useShepard((s) => s.setError);
  const clear = useShepard((s) => s.clear);
  const [draft, setDraft] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    void useShepard.persist.rehydrate();
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;
    setDraft("");
    setError(null);
    const next: ShepardTurn[] = [...useShepard.getState().messages, { role: "user", content }];
    push({ role: "user", content });
    setPending(true);
    try {
      const result = await askShepard({ data: { messages: next } });
      if (result.ok) {
        push({ role: "assistant", content: result.text });
      } else {
        setError(result.error);
      }
    } catch {
      setError("The Shepard lost the hill. Try again.");
    } finally {
      setPending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-40 flex justify-end" style={{ bottom: "var(--radio-h)" }}>
      <button
        type="button"
        aria-label="Close Shepard"
        className="absolute inset-0 bg-bg/70"
        onClick={() => setOpen(false)}
      />
      <aside
        id="shepard-desk"
        role="dialog"
        aria-labelledby="shepard-title"
        className="relative flex h-full w-full max-w-md flex-col bg-paper shadow-[inset_1px_0_0_var(--color-rule)]"
      >
        <header className="flex items-start justify-between gap-3 border-b border-rule px-4 py-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gulf">
              {SHEPARD.title}
            </p>
            <h2 id="shepard-title" className="font-display text-2xl font-medium tracking-tight">
              {SHEPARD.name}
            </h2>
          </div>
          <div className="flex items-center">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="min-h-11 px-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint hover:text-fg"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="flex size-11 items-center justify-center rounded-md text-muted hover:text-fg"
            >
              <X className="size-4" />
            </button>
          </div>
        </header>

        <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <p className="text-sm leading-relaxed text-muted">{SHEPARD.welcome}</p>
          {messages.length === 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {SHEPARD_STARTERS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => void send(s.text)}
                  className="min-h-11 rounded-sm px-3 text-left text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-rule)] hover:bg-raised"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
          <ol className="mt-6 space-y-4">
            {messages.map((m, i) => (
              <li
                key={`${m.role}-${i}`}
                className={cn(
                  "max-w-[92%] text-sm leading-relaxed",
                  m.role === "user" ? "ml-auto text-fg" : "text-fg",
                )}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {m.role === "user" ? "Citizen" : "Shepard"}
                </p>
                <p className="mt-1 whitespace-pre-wrap">{m.content}</p>
              </li>
            ))}
          </ol>
          {pending && (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gulf shepard-wait">
              Walking the stack
            </p>
          )}
          {error && <p className="mt-4 text-sm text-bad">{error}</p>}
        </div>

        <form
          className="border-t border-rule p-3"
          onSubmit={(e) => {
            e.preventDefault();
            void send(draft);
          }}
        >
          <label htmlFor="shepard-input" className="sr-only">
            Message The Good Shepard
          </label>
          <div className="flex items-end gap-2">
            <textarea
              id="shepard-input"
              ref={inputRef}
              rows={2}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(draft);
                }
              }}
              placeholder="Name a state, a bill, a pole."
              className="min-h-11 flex-1 resize-none rounded-md bg-raised px-3 py-2.5 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-rule)] placeholder:text-faint"
            />
            <Button type="submit" variant="gulf" size="icon" disabled={pending || !draft.trim()} aria-label="Send">
              <Send className="size-4" />
            </Button>
          </div>
        </form>
      </aside>
    </div>
  );
}
