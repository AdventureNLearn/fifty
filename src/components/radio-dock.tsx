import { useEffect, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { RADIO, STATIONS, stationById } from "@/lib/data/stations";
import { useRadio } from "@/lib/radio-store";
import { setRadioGain, startRadio, stopRadio, watchRadio } from "@/lib/radio-engine";
import { cn } from "@/lib/utils";

export function RadioDock() {
  const stationId = useRadio((s) => s.stationId);
  const volume = useRadio((s) => s.volume);
  const muted = useRadio((s) => s.muted);
  const wantPlay = useRadio((s) => s.wantPlay);
  const setStation = useRadio((s) => s.setStation);
  const setVolume = useRadio((s) => s.setVolume);
  const setMuted = useRadio((s) => s.setMuted);
  const setWantPlay = useRadio((s) => s.setWantPlay);
  const [live, setLive] = useState(false);
  const [lost, setLost] = useState(false);

  const station = stationById(stationId);

  useEffect(() => {
    void useRadio.persist.rehydrate();
  }, []);

  useEffect(() => {
    return watchRadio({
      onLive: setLive,
      onLost: (v) => {
        setLost(v);
        if (v) setWantPlay(false);
      },
    });
  }, [setWantPlay]);

  useEffect(() => {
    setRadioGain(volume, muted);
  }, [volume, muted]);

  async function togglePlay() {
    if (wantPlay || live) {
      stopRadio();
      setWantPlay(false);
      setLive(false);
      return;
    }
    const ok = await startRadio(stationId);
    setWantPlay(ok);
    setLost(!ok);
  }

  async function pickStation(id: string) {
    setStation(id);
    if (useRadio.getState().wantPlay || live) {
      const ok = await startRadio(id);
      setWantPlay(ok);
      setLost(!ok);
    }
  }

  return (
    <div
      className="fixed inset-x-0 z-[35] border-t border-rule bg-paper/95 backdrop-blur-sm"
      style={{ bottom: "var(--nav-h)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:gap-4 sm:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            aria-label={wantPlay || live ? "Pause radio" : "Play radio"}
            onClick={() => void togglePlay()}
            className="flex size-11 shrink-0 items-center justify-center rounded-md bg-fg text-bg hover:opacity-90 active:scale-[0.98]"
          >
            {wantPlay || live ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4 ml-0.5" />
            )}
          </button>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gulf">
                {RADIO.call}
              </span>
              <span className="font-mono text-lg tabular-nums tracking-tight text-fg">
                {station.freq}
              </span>
              <span className="hidden truncate font-display text-base font-medium tracking-tight sm:inline">
                {station.call}
              </span>
              <span
                className={cn(
                  "hidden font-mono text-[10px] uppercase tracking-[0.16em] sm:inline",
                  live ? "text-gulf radio-onair" : "text-faint",
                )}
              >
                {lost ? "Signal lost" : live ? "On air" : "Standby"}
              </span>
            </div>
            <p className="hidden truncate font-mono text-[10px] uppercase tracking-[0.12em] text-faint sm:block">
              {station.name}
              <span className="text-faint"> · </span>
              {station.credit}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto">
          {STATIONS.map((s) => {
            const active = s.id === station.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => void pickStation(s.id)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center rounded-sm px-3 font-mono text-[10px] uppercase tracking-[0.14em]",
                  active
                    ? "bg-raised text-fg shadow-[inset_0_0_0_1px_var(--color-rule)]"
                    : "text-faint hover:text-fg",
                )}
              >
                {s.call}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label={muted ? "Unmute" : "Mute"}
            onClick={() => setMuted(!muted)}
            className="flex size-11 items-center justify-center rounded-md text-muted hover:text-fg"
          >
            {muted || volume === 0 ? (
              <VolumeX className="size-4" />
            ) : (
              <Volume2 className="size-4" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
            className="radio-fader w-24"
          />
        </div>
      </div>
    </div>
  );
}
