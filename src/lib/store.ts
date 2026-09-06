import { create } from "zustand";
import { persist } from "zustand/middleware";
import { streakFrom, todayKey } from "@/lib/utils";

type DeskState = {
  done: string[];
  lastCopiedId: string | null;
  markToday: () => void;
  unmarkToday: () => void;
  setCopied: (id: string) => void;
  isDone: (iso?: string) => boolean;
  streak: () => number;
};

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      done: [],
      lastCopiedId: null,
      markToday: () => {
        const t = todayKey();
        set((s) => (s.done.includes(t) ? s : { done: [...s.done, t] }));
      },
      unmarkToday: () => {
        const t = todayKey();
        set((s) => ({ done: s.done.filter((d) => d !== t) }));
      },
      setCopied: (id) => set({ lastCopiedId: id }),
      isDone: (iso = todayKey()) => get().done.includes(iso),
      streak: () => streakFrom(get().done),
    }),
    { name: "fifty-desk", skipHydration: true },
  ),
);
