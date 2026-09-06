import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ShepardTurn } from "@/lib/shepard";

type ShepardState = {
  open: boolean;
  messages: ShepardTurn[];
  pending: boolean;
  error: string | null;
  setOpen: (open: boolean) => void;
  setPending: (pending: boolean) => void;
  setError: (error: string | null) => void;
  setMessages: (messages: ShepardTurn[]) => void;
  push: (turn: ShepardTurn) => void;
  clear: () => void;
};

export const useShepard = create<ShepardState>()(
  persist(
    (set) => ({
      open: false,
      messages: [],
      pending: false,
      error: null,
      setOpen: (open) => set({ open }),
      setPending: (pending) => set({ pending }),
      setError: (error) => set({ error }),
      setMessages: (messages) => set({ messages }),
      push: (turn) => set((s) => ({ messages: [...s.messages, turn] })),
      clear: () => set({ messages: [], error: null }),
    }),
    {
      name: "fifty-shepard",
      skipHydration: true,
      partialize: (s) => ({ messages: s.messages }),
    },
  ),
);
