"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import * as React from "react";

import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [active, setActive] = React.useState<string>("home");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-ivory/10 bg-[linear-gradient(180deg,rgba(7,10,23,0.72),rgba(7,10,23,0.40))] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="group flex items-center gap-2"
            aria-label="Go to top"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-ivory/12 bg-ivory/6 shadow-[0_18px_50px_-32px_rgba(255,207,155,0.35)]">
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,207,155,0.24),transparent_62%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="font-display text-base tracking-tight text-ivory">S</span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm text-ivory">For Shubh</div>
              <div className="text-[11px] text-mist/70">
                a memory gift, softly
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition",
                  "hover:bg-ivory/6 hover:text-ivory",
                  active === item.id
                    ? "text-ivory"
                    : "text-mist/75",
                )}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent transition-opacity",
                      active === item.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                </span>
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/12 bg-ivory/6 text-ivory shadow-[0_18px_50px_-32px_rgba(255,207,155,0.35)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-b border-ivory/10 bg-[linear-gradient(180deg,rgba(7,10,23,0.68),rgba(7,10,23,0.36))] px-4 pb-4 pt-2 backdrop-blur-xl sm:px-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToId(item.id);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-left",
                      "bg-ivory/6 hover:bg-ivory/10",
                      active === item.id ? "text-ivory" : "text-mist/80",
                    )}
                  >
                    <span className="text-sm">{item.label}</span>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        active === item.id
                          ? "bg-gold shadow-[0_0_18px_rgba(255,207,155,0.35)]"
                          : "bg-ivory/15",
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
