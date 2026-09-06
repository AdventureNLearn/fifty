import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchLive } from "@/lib/live";
import type { LiveSnapshot } from "@/lib/types";

const STALE_MS = 30 * 60 * 1000;

type LiveState = {
  snapshot: LiveSnapshot | null;
  status: "idle" | "loading" | "ok" | "error";
  error: string | null;
  refresh: () => Promise<void>;
  refreshIfStale: () => Promise<void>;
};

function isStale(snapshot: LiveSnapshot | null): boolean {
  if (!snapshot) return true;
  const t = Date.parse(snapshot.fetchedAt);
  if (!Number.isFinite(t)) return true;
  return Date.now() - t > STALE_MS;
}

export const useLive = create<LiveState>()(
  persist(
    (set, get) => ({
      snapshot: null,
      status: "idle",
      error: null,
      refresh: async () => {
        if (get().status === "loading") return;
        set({ status: "loading", error: null });
        try {
          const snapshot = await fetchLive();
          const failed = !snapshot.petition.ok && !snapshot.cameras.ok;
          set({
            snapshot,
            status: failed ? "error" : "ok",
            error: failed
              ? "Live sources did not answer. On-file figures stand."
              : null,
          });
        } catch (err) {
          set({
            status: "error",
            error:
              err instanceof Error
                ? err.message
                : "Live refresh failed. On-file figures stand.",
          });
        }
      },
      refreshIfStale: async () => {
        if (!isStale(get().snapshot)) return;
        await get().refresh();
      },
    }),
    {
      name: "fifty-live",
      skipHydration: true,
      partialize: (s) => ({ snapshot: s.snapshot }),
    },
  ),
);
