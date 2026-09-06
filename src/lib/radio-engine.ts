import { stationById } from "@/lib/data/stations";

type LiveFn = (live: boolean) => void;
type LostFn = (lost: boolean) => void;

let audio: HTMLAudioElement | null = null;
let urlIndex = 0;
let currentId = "";
let liveFn: LiveFn | null = null;
let lostFn: LostFn | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio();
    audio.preload = "none";
    audio.addEventListener("playing", () => liveFn?.(true));
    audio.addEventListener("pause", () => liveFn?.(false));
    audio.addEventListener("error", () => {
      const station = stationById(currentId);
      const next = urlIndex + 1;
      if (next < station.urls.length) {
        urlIndex = next;
        audio!.src = station.urls[next];
        void audio!.play().catch(() => lostFn?.(true));
        return;
      }
      lostFn?.(true);
      liveFn?.(false);
    });
  }
  return audio;
}

export function watchRadio(hooks: { onLive: LiveFn; onLost: LostFn }) {
  liveFn = hooks.onLive;
  lostFn = hooks.onLost;
  return () => {
    if (liveFn === hooks.onLive) liveFn = null;
    if (lostFn === hooks.onLost) lostFn = null;
  };
}

export async function startRadio(stationId: string): Promise<boolean> {
  const el = getAudio();
  if (!el) return false;
  currentId = stationId;
  urlIndex = 0;
  const station = stationById(stationId);
  el.src = station.urls[0];
  try {
    await el.play();
    lostFn?.(false);
    return true;
  } catch {
    lostFn?.(true);
    return false;
  }
}

export function stopRadio() {
  audio?.pause();
  liveFn?.(false);
}

export function setRadioGain(volume: number, muted: boolean) {
  const el = getAudio();
  if (!el) return;
  el.volume = muted ? 0 : volume;
}

export function isRadioLive(): boolean {
  return !!audio && !audio.paused;
}
