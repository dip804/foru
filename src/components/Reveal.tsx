"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function Reveal({ className, delay = 0, children }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={
        reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{
        type: "spring",
        bounce: 0.15,
        duration: 0.9,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

