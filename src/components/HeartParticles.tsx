"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import * as React from "react";

type Particle = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  drift: number;
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

export default function HeartParticles({
  seed = 7,
  count = 18,
}: {
  seed?: number;
  count?: number;
}) {
  const reduceMotion = useReducedMotion();

  const particles = React.useMemo<Particle[]>(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map(() => {
      const size = 10 + Math.round(rand() * 16);
      const pick = rand();
      const tint: Particle["tint"] =
        pick < 0.55 ? "blush" : pick < 0.82 ? "gold" : "ivory";
      return {
        left: `${Math.round(rand() * 100)}%`,
        top: `${Math.round(rand() * 100)}%`,
        size,
        opacity: 0.08 + rand() * 0.14,
        blur: 0.6 + rand() * 1.6,
        duration: 10 + rand() * 10,
        delay: rand() * 6,
        drift: (rand() - 0.5) * 26,
        tint,
      };
    });
  }, [seed, count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [-6, -34, -6],
                  x: [0, p.drift, 0],
                  opacity: [p.opacity * 0.6, p.opacity, p.opacity * 0.6],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }
          }
        >
          <Heart
            className={[
              "h-full w-full",
              p.tint === "blush"
                ? "text-blush/90 drop-shadow-[0_0_14px_rgba(241,169,182,0.20)]"
                : p.tint === "gold"
                  ? "text-gold/85 drop-shadow-[0_0_16px_rgba(255,207,155,0.18)]"
                  : "text-ivory/60 drop-shadow-[0_0_12px_rgba(246,242,236,0.12)]",
            ].join(" ")}
            fill="currentColor"
            stroke="none"
          />
        </motion.div>
      ))}
    </div>
  );
}
