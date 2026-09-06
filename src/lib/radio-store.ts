import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STATIONS } from "@/lib/data/stations";

type RadioState = {
  stationId: string;
  volume: number;
  muted: boolean;
  wantPlay: boolean;
  setStation: (id: string) => void;
  setVolume: (v: number) => void;
  setMuted: (m: boolean) => void;
  setWantPlay: (p: boolean) => void;
};

export const useRadio = create<RadioState>()(
  persist(
    (set) => ({
      stationId: STATIONS[0].id,
      volume: 0.72,
      muted: false,
      wantPlay: false,
      setStation: (id) => set({ stationId: id }),
      setVolume: (v) => set({ volume: Math.min(1, Math.max(0, v)), muted: false }),
      setMuted: (m) => set({ muted: m }),
      setWantPlay: (p) => set({ wantPlay: p }),
    }),
    {
      name: "fifty-radio",
      skipHydration: true,
      partialize: (s) => ({
        stationId: s.stationId,
        volume: s.volume,
        muted: s.muted,
      }),
    },
  ),
);
