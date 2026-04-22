"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";

function scrollToWhy() {
  const el = document.getElementById("why");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative w-full scroll-mt-24">
      <div className="relative h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] w-full overflow-hidden bg-[#070814]">
        {/* BACKGROUND IMAGE (keep clear + cinematic) */}
        <div className="absolute inset-0">
          <Image
            src="/romantic_balloon.gif"
            alt="Dreamy romantic evening memory background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="select-none object-cover object-right opacity-95 saturate-[1.06] contrast-[1.08]"
          />
        </div>

        {/* Readability overlays (keep light: don't muddy the image) */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(940px_600px_at_18%_50%,rgba(8,8,14,0.30),rgba(8,8,14,0.13)_54%,rgba(8,8,14,0.04)_76%,transparent_90%)]" />
        <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_84%_74%,rgba(255,191,132,0.14),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,5,14,0.14),rgba(3,5,14,0.04)_24%,rgba(3,5,14,0.06)_70%,rgba(3,5,14,0.10))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_56%,rgba(0,0,0,0.16)_100%)]" />

        {/* CONTENT (left side) */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pb-10 pt-16 sm:px-10 sm:pb-14 sm:pt-20 lg:px-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl lg:max-w-[42rem]">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-[#f7ddd6] backdrop-blur-md"
              >
                <Heart className="h-3.5 w-3.5 fill-[#efb3ad] text-[#efb3ad]" />
                <span>not a proposal - a memory gift</span>
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05 }}
                className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-[#fff6ef] drop-shadow-[0_4px_24px_rgba(0,0,0,0.34)] sm:text-5xl lg:text-6xl"
              >
                A Beautiful Chapter of
                <br />
                My B.Tech Journey
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="mt-4 max-w-2xl text-base leading-7 text-[#f7e7df]/92 sm:mt-6 sm:text-lg sm:leading-8"
              >
                For Shubh - with honesty, warmth, and respect. No pressure.
                <br className="hidden sm:block" />
                Just a small place where memories can stay beautiful.
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.2 }}
                className="mt-5 max-w-2xl rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.09)] px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-[10px] sm:mt-8 sm:px-6 sm:py-5"
              >
                <p className="text-sm leading-7 text-[#f6e9e3]/90 sm:text-[1.1rem] sm:leading-8">
                  Some people become part of our journey - not through labels, but
                  through the warmth they leave behind.
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.28 }}
                className="mt-5 sm:mt-8"
              >
                <button
                  type="button"
                  onClick={scrollToWhy}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#efb89d] to-[#f4c7b0] px-7 py-3 text-base font-semibold text-[#231816] shadow-[0_18px_46px_rgba(239,184,157,0.30)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_54px_rgba(239,184,157,0.38)] sm:px-8 sm:py-4 sm:text-lg"
                >
                  Open Our Story
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/35 transition group-hover:bg-white/45 sm:h-9 sm:w-9">
                    <ArrowDown className="h-4 w-4" />
                  </span>
                </button>

                <p className="mt-4 text-xs leading-6 text-[#f1e1da]/80 sm:mt-5 sm:text-base sm:leading-7">
                  A gentle note: This is written to be safe and respectful - like a
                  letter you can close anytime.
                </p>
              </motion.div>
            </div>

            <div aria-hidden className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
