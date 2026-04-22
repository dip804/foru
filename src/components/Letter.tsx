"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, MailOpen } from "lucide-react";
import * as React from "react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { letter } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Letter() {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="letter"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Letter to Shubh"
            title="A letter written through design"
            subtitle="A calm note - honest, grateful, and gentle. Read it only if it feels comfortable."
          />

          <div className="space-y-4">
            <div className="cinematic-card noisy relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,207,155,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(241,169,182,0.12),transparent_62%)]" />
              </div>

              <div className="relative">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-ivory/12 bg-ivory/6 px-3 py-1 text-xs font-medium text-mist/80">
                    <MailOpen className="h-3.5 w-3.5 text-gold/85" />
                    <span>{letter.preface}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="rounded-full bg-ivory/8 px-4 py-2 text-xs font-semibold text-ivory shadow-[0_20px_60px_-45px_rgba(255,207,155,0.35)] ring-soft transition hover:bg-ivory/12 focus:outline-none focus:ring-2 focus:ring-gold/40"
                    aria-expanded={open}
                  >
                    {open ? "Close letter" : "Open letter"}
                  </button>
                </div>

                <div className="relative">
                  <AnimatePresence initial={false}>
                    {!open ? (
                      <motion.div
                        key="sealed"
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="relative overflow-hidden rounded-3xl border border-ivory/14 bg-[linear-gradient(180deg,rgba(246,242,236,0.10),rgba(246,242,236,0.05))] p-7"
                      >
                        <div className="pointer-events-none absolute inset-0">
                          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.16),transparent_62%)] blur-2xl" />
                          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.14),transparent_62%)] blur-2xl" />
                        </div>

                        <div className="relative space-y-4 text-center">
                          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ivory/8 ring-soft">
                            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-rose/70 to-blush/70 shadow-[0_18px_50px_-20px_rgba(241,169,182,0.6)]">
                              <Heart
                                className="h-5 w-5 text-ink"
                                fill="currentColor"
                                stroke="none"
                              />
                            </div>
                          </div>
                          <div className="font-display text-2xl tracking-tight text-ivory">
                            A sealed letter
                          </div>
                          <p className="mx-auto max-w-md text-sm leading-7 text-mist/80">
                            Tap &quot;Open letter&quot; only if it feels okay. This is
                            meant to be gentle - like an envelope you can keep,
                            or quietly return.
                          </p>

                          <div className="pt-2 text-xs text-mist/70">
                            (No pressure. Always your comfort.)
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, y: 14, rotateX: -6 }
                        }
                        animate={
                          reduceMotion
                            ? { opacity: 1 }
                            : { opacity: 1, y: 0, rotateX: 0 }
                        }
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={cn(
                          "relative overflow-hidden rounded-3xl border border-ivory/14 p-7 sm:p-8",
                          "bg-[linear-gradient(180deg,rgba(246,242,236,0.12),rgba(246,242,236,0.06))]",
                        )}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.95]"
                          style={{
                            backgroundImage: "url(/paper-texture.svg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            mixBlendMode: "soft-light",
                          }}
                        />
                        <div className="pointer-events-none absolute inset-0 opacity-70">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,rgba(255,207,155,0.18),transparent_62%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_78%,rgba(241,169,182,0.10),transparent_62%)]" />
                        </div>

                        <div className="relative space-y-4 text-sm leading-7 text-ink/85 sm:text-base">
                          {letter.paragraphs.map((p, i) => (
                            <p
                              key={i}
                              className={cn(
                                i === 0 ? "text-ink font-medium" : "text-ink/85",
                              )}
                            >
                              {p}
                            </p>
                          ))}

                          <div className="pt-2">
                            <div className="flex items-center gap-3 text-xs text-ink/55">
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
                              <span>kept softly</span>
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <p className="text-xs leading-6 text-mist/65">
              If any line feels too much, please ignore it. This letter is meant
              to be light in your hands.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
