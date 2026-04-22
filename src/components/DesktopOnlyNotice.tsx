"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Copy, Laptop, X } from "lucide-react";
import * as React from "react";

import GlassCard from "@/components/GlassCard";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const DISMISS_KEY = "desktop_notice_dismissed_v1";

function isLikelyMobile() {
  if (typeof window === "undefined") return false;

  const coarsePointer = window.matchMedia?.("(hover: none) and (pointer: coarse)")
    ?.matches;
  const smallScreen = window.matchMedia?.("(max-width: 1024px)")?.matches;

  return Boolean(coarsePointer || smallScreen);
}

export default function DesktopOnlyNotice({ className }: Props) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = React.useState(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return false;
    } catch {
      // ignore
    }
    return isLikelyMobile();
  });
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const dismiss = React.useCallback(() => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  }, []);

  const copyLink = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn("fixed inset-0 z-[90]", className)}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          <div className="absolute inset-0 grid place-items-center px-5">
            <GlassCard className="w-full max-w-md p-6 text-center sm:p-7">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.16),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.14),transparent_62%)] blur-2xl" />

              <button
                type="button"
                onClick={dismiss}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-ivory/16 bg-black/45 text-ivory/90 shadow-[0_16px_60px_-45px_rgba(0,0,0,0.90)] backdrop-blur-md transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-gold/35"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-3xl border border-ivory/14 bg-ivory/6 shadow-[0_18px_60px_-45px_rgba(255,207,155,0.22)]">
                <Laptop className="h-7 w-7 text-gold/85" />
              </div>

              <div className="relative mt-5 space-y-3">
                <div className="font-display text-2xl tracking-tight text-ivory">
                  Best on a laptop
                </div>
                <p className="text-sm leading-7 text-mist/85">
                  This memory-gift page is designed for a wider screen and calm
                  reading. Please open it on a laptop for the best experience.
                </p>
              </div>

              <div className="relative mt-6 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => void copyLink()}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-ivory/16 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm font-semibold text-ivory/90 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.80)] ring-1 ring-[rgba(255,207,155,0.06)] backdrop-blur-xl transition hover:bg-[rgba(255,255,255,0.09)] hover:border-ivory/20"
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied ? "Copied" : "Copy link"}</span>
                </button>

                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-[#efb89d] to-[#f4c7b0] px-4 py-3 text-sm font-semibold text-[#231816] shadow-[0_18px_46px_rgba(239,184,157,0.22)] transition hover:scale-[1.01] hover:shadow-[0_20px_54px_rgba(239,184,157,0.30)]"
                >
                  Continue anyway
                </button>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
