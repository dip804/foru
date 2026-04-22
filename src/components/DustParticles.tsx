"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type Dust = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function DustParticles({
  seed = 23,
  count = 42,
}: {
  seed?: number;
  count?: number;
}) {
  const reduceMotion = useReducedMotion();
  const dust = React.useMemo<Dust[]>(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map(() => {
      const size = 1 + rand() * 2.4;
      return {
        left: `${Math.round(rand() * 100)}%`,
        top: `${Math.round(rand() * 100)}%`,
        size,
        opacity: 0.05 + rand() * 0.12,
        duration: 10 + rand() * 16,
        delay: rand() * 6,
        driftX: (rand() - 0.5) * 26,
        driftY: (rand() - 0.5) * 18,
      };
    });
  }, [seed, count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {dust.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-ivory"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            filter: "blur(0.2px)",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, d.driftX, 0],
                  y: [0, d.driftY, 0],
                  opacity: [d.opacity * 0.5, d.opacity, d.opacity * 0.5],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: d.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: d.delay,
                }
          }
        />
      ))}
    </div>
  );
}

