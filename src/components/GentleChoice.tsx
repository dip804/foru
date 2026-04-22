"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, HeartHandshake, Info, X } from "lucide-react";
import * as React from "react";

import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { gentleChoice } from "@/lib/content";
import { cn } from "@/lib/utils";

type Choice = "yes" | "no" | null;

export default function GentleChoice() {
  const reduceMotion = useReducedMotion();
  const [choice, setChoice] = React.useState<Choice>(null);

  return (
    <section
      id="choice"
      className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-12 sm:py-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_640px_at_84%_44%,rgba(255,207,155,0.10),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_60%,rgba(241,169,182,0.09),transparent_60%)]" />
      </div>

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <SectionHeading
            eyebrow={gentleChoice.eyebrow}
            title={gentleChoice.title}
            subtitle={gentleChoice.subtitle}
          />

          <div className="space-y-4">
            <GlassCard className="p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.14),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.12),transparent_62%)] blur-2xl" />

              <div className="relative space-y-5">
                <p className="text-sm leading-7 text-ivory/84 drop-shadow-[0_14px_44px_rgba(0,0,0,0.40)] sm:text-base">
                  {gentleChoice.question}
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setChoice("yes")}
                    className={cn(
                      "group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold",
                      "bg-gradient-to-r from-[#efb89d] to-[#f4c7b0] text-[#231816]",
                      "shadow-[0_18px_46px_rgba(239,184,157,0.22)] transition",
                      "hover:scale-[1.01] hover:shadow-[0_20px_54px_rgba(239,184,157,0.30)]",
                      choice === "yes" ? "ring-2 ring-gold/40" : "",
                    )}
                  >
                    <Check className="h-4 w-4" />
                    <span>{gentleChoice.yesLabel}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChoice("no")}
                    className={cn(
                      "inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-ivory/16 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm font-semibold text-ivory/90",
                      "shadow-[0_18px_60px_-50px_rgba(0,0,0,0.80)] ring-1 ring-[rgba(255,207,155,0.06)] backdrop-blur-xl transition",
                      "hover:bg-[rgba(255,255,255,0.09)] hover:border-ivory/20",
                      choice === "no" ? "ring-2 ring-blush/35" : "",
                    )}
                  >
                    <X className="h-4 w-4" />
                    <span>{gentleChoice.noLabel}</span>
                  </button>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {choice ? (
                    <motion.div
                      key={choice}
                      initial={
                        reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }
                      }
                      animate={
                        reduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, y: 0, filter: "blur(0px)" }
                      }
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="rounded-2xl border border-ivory/14 bg-midnight/30 p-4 shadow-[0_22px_70px_-60px_rgba(0,0,0,0.90)] backdrop-blur-xl"
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-2xl border border-ivory/14 bg-ivory/6 shadow-[0_18px_55px_-40px_rgba(255,207,155,0.22)]">
                          {choice === "yes" ? (
                            <HeartHandshake className="h-5 w-5 text-gold/85" />
                          ) : (
                            <Info className="h-5 w-5 text-mist/80" />
                          )}
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm leading-7 text-mist/85">
                            {choice === "yes"
                              ? gentleChoice.yesResponse
                              : gentleChoice.noResponse}
                          </p>
                          {choice === "yes" ? (
                            <p className="text-xs leading-6 text-mist/70">
                              {gentleChoice.yesNextStep}
                            </p>
                          ) : null}
                          <p className="text-xs text-mist/65">
                            {gentleChoice.privacyNote}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </GlassCard>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
