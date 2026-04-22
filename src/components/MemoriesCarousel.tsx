"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Images, X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type MemoryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: MemoryImage[];
  className?: string;
};

export default function MemoriesCarousel({ images, className }: Props) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const count = images.length;
  const current = images[Math.min(index, count - 1)];

  const prev = React.useCallback(() => {
    setIndex((v) => (v - 1 + count) % count);
  }, [count]);

  const next = React.useCallback(() => {
    setIndex((v) => (v + 1) % count);
  }, [count]);

  React.useEffect(() => {
    if (count <= 0) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, next, prev]);

  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!current) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-3xl border border-ivory/12 bg-[rgba(11,16,40,0.34)] shadow-[0_30px_90px_-70px_rgba(0,0,0,0.90)] ring-1 ring-[rgba(255,207,155,0.10)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_640px_at_84%_44%,rgba(255,207,155,0.10),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_60%,rgba(241,169,182,0.08),transparent_60%)]" />
        </div>

        <div className="relative grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative overflow-hidden rounded-2xl border border-ivory/10 bg-midnight/30 text-left shadow-[0_26px_80px_-70px_rgba(0,0,0,0.90)] transition hover:border-ivory/16 hover:bg-midnight/40 focus:outline-none focus:ring-2 focus:ring-gold/35"
            aria-label="Open photo fullscreen"
          >
            <div className="pointer-events-none absolute inset-0 star-dust opacity-[0.08]" />
            <div className="relative aspect-[16/10] w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.src}
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.01 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.995 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <div className="h-16 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)]" />
              <div className="absolute bottom-3 right-3 rounded-full border border-ivory/16 bg-black/25 px-3 py-1 text-xs font-medium text-ivory/85 backdrop-blur-md">
                Tap to view full
              </div>
            </div>
          </button>

          <div className="relative flex flex-col justify-between gap-4 rounded-2xl border border-ivory/10 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_22px_70px_-60px_rgba(0,0,0,0.90)] backdrop-blur-xl sm:p-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-ivory/14 bg-ivory/6 px-3 py-1 text-xs font-medium text-mist/80 backdrop-blur-xl">
                <Images className="h-3.5 w-3.5 text-gold/80" />
                <span>Memories</span>
              </div>

              <div className="font-display text-2xl tracking-tight text-ivory">
                {String(index + 1).padStart(2, "0")}
                <span className="text-mist/60"> / </span>
                {String(count).padStart(2, "0")}
              </div>

              <p className="text-sm leading-7 text-mist/85">
                Tap next to load the next photo — one at a time, kept softly.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={count <= 1}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-ivory/14 bg-ivory/6 px-4 py-3 text-sm font-semibold text-ivory shadow-[0_18px_60px_-55px_rgba(0,0,0,0.90)] transition hover:bg-ivory/10 disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={next}
                disabled={count <= 1}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#efb89d] to-[#f4c7b0] px-4 py-3 text-sm font-semibold text-[#231816] shadow-[0_18px_46px_rgba(239,184,157,0.22)] transition hover:scale-[1.01] hover:shadow-[0_20px_54px_rgba(239,184,157,0.30)] disabled:opacity-50"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80]"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={
              reduceMotion
                ? { opacity: 1, pointerEvents: "auto" }
                : { opacity: 1, pointerEvents: "auto" }
            }
            exit={
              reduceMotion
                ? { opacity: 0, pointerEvents: "none" }
                : { opacity: 0, pointerEvents: "none" }
            }
          >
            <button
              type="button"
              className="absolute inset-0 z-0 cursor-zoom-out bg-black/75 backdrop-blur-md"
              aria-label="Close fullscreen view"
              onClick={() => setOpen(false)}
            />

            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_60%,rgba(241,169,182,0.10),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(1000px_640px_at_84%_44%,rgba(255,207,155,0.12),transparent_62%)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-4 sm:px-6">
              <div className="pointer-events-auto rounded-full border border-ivory/16 bg-black/45 px-4 py-2 text-sm font-medium text-ivory/90 shadow-[0_16px_60px_-45px_rgba(0,0,0,0.90)] backdrop-blur-md">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-ivory/18 bg-black/55 text-ivory shadow-[0_18px_70px_-55px_rgba(0,0,0,0.95)] backdrop-blur-md transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-gold/35"
                aria-label="Close"
              >
                <X className="h-5 w-5 drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]" />
              </button>
            </div>

            <div className="absolute inset-0 z-20 grid place-items-center px-4 py-20 sm:px-8 sm:py-24">
              <div className="pointer-events-auto relative h-[calc(100dvh-11rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-ivory/14 bg-black/25 shadow-[0_30px_110px_-70px_rgba(0,0,0,0.95)] ring-1 ring-[rgba(255,207,155,0.10)] backdrop-blur-sm">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.src}
                    className="absolute inset-0"
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.995 }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.005 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      sizes="100vw"
                      className="object-contain object-center"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-center justify-center gap-2 px-4 pb-5">
              <button
                type="button"
                onClick={prev}
                disabled={count <= 1}
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-ivory/18 bg-black/45 px-4 py-2 text-sm font-semibold text-ivory/90 shadow-[0_16px_60px_-45px_rgba(0,0,0,0.90)] backdrop-blur-md transition hover:bg-black/55 disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={next}
                disabled={count <= 1}
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-ivory/18 bg-black/45 px-4 py-2 text-sm font-semibold text-ivory/90 shadow-[0_16px_60px_-45px_rgba(0,0,0,0.90)] backdrop-blur-md transition hover:bg-black/55 disabled:opacity-50"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
