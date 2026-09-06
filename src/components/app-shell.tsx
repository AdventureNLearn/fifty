import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn, formatLongDate, todayKey } from "@/lib/utils";
import { useDesk } from "@/lib/store";
import { useShepard } from "@/lib/shepard-store";
import { RadioDock } from "@/components/radio-dock";
import { ShepardButton, ShepardDesk } from "@/components/shepard-desk";
import { RADIO } from "@/lib/data/stations";
import { SITE } from "@/lib/data/site";
import { useLiveHydrate } from "@/components/live-refresh";

const NAV = [
  { to: "/", label: "Today" },
  { to: "/stack", label: "Stack" },
  { to: "/states", label: "States" },
  { to: "/kit", label: "Kit" },
  { to: "/method", label: "Method" },
  { to: "/petition", label: "Petition", compact: "Sign" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const done = useDesk((s) => s.isDone());
  const streak = useDesk((s) => s.streak());
  const shepardOpen = useShepard((s) => s.open);
  useLiveHydrate();

  useEffect(() => {
    void useDesk.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg" data-shepard={shepardOpen ? "open" : "shut"}>
      <header className="sticky top-0 z-30 border-b border-rule bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-baseline gap-3 min-w-0">
            <span className="font-display text-xl font-medium tracking-tight">
              FIFTY
            </span>
            <span className="hidden truncate font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:inline">
              {formatLongDate(todayKey())}
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((n) => {
              const active =
                n.to === "/"
                  ? pathname === "/"
                  : pathname === n.to || pathname.startsWith(`${n.to}/`);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-sm px-3 py-2 text-sm",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1">
            <ShepardButton />
            <p className="font-mono text-[11px] tabular-nums text-muted">
              {done ? <span className="text-gulf">Done</span> : <span>Open</span>}
              <span className="text-faint"> · </span>
              {streak}
              <span className="hidden sm:inline"> day streak</span>
            </p>
          </div>
        </div>
      </header>

      <div
        className="pb-[calc(var(--radio-h)+var(--nav-h))]"
      >
        {children}
        <footer className="mx-auto hidden max-w-6xl px-4 py-8 text-xs text-faint md:block">
          <p className="max-w-2xl leading-relaxed">{SITE.independence}</p>
          <p className="mt-3">
            <Link to="/sources" className="hover:text-muted">
              Sources
            </Link>
            <span> · </span>
            <Link to="/lanes" className="hover:text-muted">
              Lanes
            </Link>
            <span> · </span>
            <Link to="/method" className="hover:text-muted">
              Method
            </Link>
            <span> · </span>
            {RADIO.call} {RADIO.slogan}
          </p>
        </footer>
      </div>

      <RadioDock />
      <ShepardDesk />

      <nav
        className={cn(
          "fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-bg/95 backdrop-blur-sm md:hidden",
          shepardOpen && "hidden",
        )}
        aria-label="Mobile"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-6">
          {NAV.map((n) => {
            const active =
              n.to === "/"
                ? pathname === "/"
                : pathname === n.to || pathname.startsWith(`${n.to}/`);
            return (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className={cn(
                    "flex min-h-12 items-center justify-center px-0.5 font-mono text-[10px] uppercase leading-none tracking-wide whitespace-nowrap",
                    active ? "text-fg" : "text-faint",
                  )}
                >
                  {"compact" in n ? n.compact : n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
