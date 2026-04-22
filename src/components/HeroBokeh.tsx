"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import * as React from "react";

type Bokeh = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  tint: "blush" | "gold" | "ivory";
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function HeroBokeh({
  seed = 101,
  count = 16,
}: {
  seed?: number;
  count?: number;
}) {
  const reduceMotion = useReducedMotion();

  const hearts = React.useMemo<Bokeh[]>(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map(() => {
      const pick = rand();
      const tint: Bokeh["tint"] =
        pick < 0.55 ? "blush" : pick < 0.82 ? "gold" : "ivory";
      const size = 24 + rand() * 56;
      const blur = 6 + rand() * 18;
      return {
        left: `${Math.round(rand() * 100)}%`,
        top: `${Math.round(rand() * 72)}%`,
        size,
        opacity: 0.045 + rand() * 0.08,
        blur,
        duration: 12 + rand() * 16,
        delay: rand() * 6,
        driftX: (rand() - 0.5) * 40,
        driftY: -18 - rand() * 26,
        tint,
      };
    });
  }, [seed, count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: h.left,
            top: h.top,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            filter: `blur(${h.blur}px)`,
            transform: "translateZ(0)",
            mixBlendMode: "screen",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, h.driftY, 0],
                  x: [0, h.driftX, 0],
                  opacity: [h.opacity * 0.7, h.opacity, h.opacity * 0.7],
                  scale: [0.98, 1.03, 0.98],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: h.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: h.delay,
                }
          }
        >
          <Heart
            className={[
              "h-full w-full",
              h.tint === "blush"
                ? "text-blush/70"
                : h.tint === "gold"
                  ? "text-gold/65"
                  : "text-ivory/45",
            ].join(" ")}
            fill="currentColor"
            stroke="none"
          />
        </motion.div>
      ))}
    </div>
  );
}

