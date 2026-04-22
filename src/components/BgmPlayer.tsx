"use client";

import { motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  className?: string;
};

const STORAGE_KEY = "bgm_enabled_v1";

export default function BgmPlayer({
  src = "/audio/bgm.mp3",
  className,
}: Props) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = React.useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [playing, setPlaying] = React.useState(false);

  const syncState = React.useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    setPlaying(!el.paused);
  }, []);

  const play = React.useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      el.volume = 0.35;
      await el.play();
      setPlaying(true);
    } catch {
      // Autoplay is often blocked; user can press Play again after interacting.
      setPlaying(false);
    }
  }, []);

  const pause = React.useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    setPlaying(false);
  }, []);

  const setPersistedEnabled = React.useCallback((value: boolean) => {
    setEnabled(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      // ignore
    }
  }, []);

  const onToggle = React.useCallback(async () => {
    if (!enabled) {
      setPersistedEnabled(true);
      await play();
      return;
    }
    setPersistedEnabled(false);
    pause();
  }, [enabled, pause, play, setPersistedEnabled]);

  // Try to start as soon as the user interacts (required by browsers).
  React.useEffect(() => {
    if (!enabled) return;
    const tryStart = () => {
      void play();
    };

    window.addEventListener("pointerdown", tryStart, { once: true });
    window.addEventListener("keydown", tryStart, { once: true });
    window.addEventListener("touchstart", tryStart, { once: true });
    return () => {
      window.removeEventListener("pointerdown", tryStart);
      window.removeEventListener("keydown", tryStart);
      window.removeEventListener("touchstart", tryStart);
    };
  }, [enabled, play]);

  return (
    <div className={cn("fixed bottom-5 left-5 z-[70]", className)}>
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        loop
        onPlay={syncState}
        onPause={syncState}
        onEnded={syncState}
      />

      <motion.button
        type="button"
        onClick={() => void onToggle()}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-ivory/14 px-4 py-2",
          "bg-[rgba(11,16,40,0.45)] text-ivory/90 shadow-[0_26px_90px_-70px_rgba(0,0,0,0.90)]",
          "ring-1 ring-[rgba(255,207,155,0.10)] backdrop-blur-xl transition",
          "hover:bg-[rgba(11,16,40,0.55)] hover:border-ivory/18",
          "focus:outline-none focus:ring-2 focus:ring-gold/35",
        )}
        aria-pressed={enabled}
        aria-label={enabled ? "Pause background music" : "Play background music"}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory/8 ring-1 ring-ivory/12">
          {enabled && playing ? (
            <Pause className="h-4 w-4" />
          ) : enabled ? (
            <Play className="h-4 w-4" />
          ) : (
            <Music2 className="h-4 w-4" />
          )}
        </span>
        <span className="text-sm font-semibold">
          {enabled ? (playing ? "Music on" : "Tap to play") : "Play music"}
        </span>
      </motion.button>
    </div>
  );
}
