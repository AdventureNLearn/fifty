import { useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLive } from "@/lib/live-store";
import { CAMERAS, CITIES, SIGNATURES } from "@/lib/data/petition";
import type { LiveSnapshot } from "@/lib/types";

export function useLiveHydrate() {
  const refreshIfStale = useLive((s) => s.refreshIfStale);
  useEffect(() => {
    void Promise.resolve(useLive.persist.rehydrate()).then(() => {
      void useLive.getState().refreshIfStale();
    });
  }, [refreshIfStale]);
}

export function signaturesView(snapshot: LiveSnapshot | null) {
  if (snapshot?.petition.ok && snapshot.petition.value) {
    return {
      count: snapshot.petition.value.count,
      asOf: snapshot.petition.value.asOfLabel,
      live: true as const,
    };
  }
  return { count: SIGNATURES.count, asOf: SIGNATURES.asOf, live: false as const };
}

export function camerasView(snapshot: LiveSnapshot | null) {
  if (snapshot?.cameras.ok && snapshot.cameras.value) {
    return {
      count: snapshot.cameras.value.count,
      asOf: snapshot.cameras.value.asOfLabel,
      share: snapshot.cameras.value.flockShare,
      live: true as const,
    };
  }
  return {
    count: CAMERAS.count,
    asOf: CAMERAS.asOf,
    share: null as string | null,
    live: false as const,
  };
}

export function LiveRefreshButton({ className }: { className?: string }) {
  const status = useLive((s) => s.status);
  const snapshot = useLive((s) => s.snapshot);
  const error = useLive((s) => s.error);
  const refresh = useLive((s) => s.refresh);
  const loading = status === "loading";
  const when = snapshot?.fetchedAt
    ? new Date(snapshot.fetchedAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : null;

  return (
    <div className={className}>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => void refresh()}
        disabled={loading}
        aria-label="Refresh live figures"
      >
        <RefreshCw className={`size-3.5 ${loading ? "animate-spin" : ""}`} />
        {loading ? "Refreshing" : "Refresh figures"}
      </Button>
      <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
        {when ? `Last live pull ${when}. ` : "On-file figures until you refresh. "}
        Signatures from the petition page. Camera count from Finding Flock’s
        crowdsourced map — a floor, not a census. State rows are a retrieved
        briefing, not a live feed.
        {error ? ` ${error}` : ""}
        {snapshot?.petition.error ? ` ${snapshot.petition.error}` : ""}
        {snapshot?.cameras.error ? ` ${snapshot.cameras.error}` : ""}
      </p>
    </div>
  );
}

export function LiveStatStrip() {
  const snapshot = useLive((s) => s.snapshot);
  const sig = signaturesView(snapshot);
  const cam = camerasView(snapshot);
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Stat
        k="Signatures"
        v={sig.count.toLocaleString()}
        n={sig.live ? `live · ${sig.asOf}` : `on file · ${sig.asOf}`}
      />
      <Stat
        k="Cities & towns"
        v={CITIES.count.toLocaleString()}
        n={`Census ${CITIES.asOf}`}
      />
      <Stat
        k="Mapped cameras"
        v={cam.count.toLocaleString()}
        n={
          cam.live
            ? `floor · ${cam.asOf}${cam.share ? ` · ${cam.share} Flock` : ""}`
            : `CRS floor · ${cam.asOf}`
        }
      />
      <Stat k="States" v="50" n="the petition’s target" />
    </dl>
  );
}

function Stat({ k, v, n }: { k: string; v: string; n: string }) {
  return (
    <div className="rounded-md bg-bg px-3 py-3 shadow-[inset_0_0_0_1px_var(--color-rule)]">
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        {k}
      </dt>
      <dd className="mt-1 font-display text-2xl font-medium tabular-nums tracking-tight">
        {v}
      </dd>
      <p className="mt-1 text-xs text-muted">{n}</p>
    </div>
  );
}
