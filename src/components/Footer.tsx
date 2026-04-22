import { Heart } from "lucide-react";

import { footerLine } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-ivory/10 bg-[linear-gradient(180deg,rgba(246,242,236,0.06),rgba(246,242,236,0.03))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-center sm:py-12">
        <div className="mx-auto h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-ivory/16 to-transparent" />
        <div className="mx-auto inline-flex items-center gap-2 text-sm text-mist/80">
          <Heart
            className="h-4 w-4 text-gold/70 drop-shadow-[0_0_14px_rgba(255,207,155,0.18)]"
            fill="currentColor"
            stroke="none"
          />
          <span>{footerLine}</span>
        </div>
        <div className="text-xs text-mist/60">
          Made softly, with gratitude. - Private gift page
        </div>
        <div className="mx-auto inline-flex items-center justify-center gap-2 text-[11px] font-medium tracking-[0.08em]">
          <Heart
            className="h-3.5 w-3.5 text-blush/80 drop-shadow-[0_0_18px_rgba(241,169,182,0.22)]"
            fill="currentColor"
            stroke="none"
          />
          <span className="bg-gradient-to-r from-[#f1a9b6] via-[#ffcf9b] to-[#f6f2ec] bg-clip-text text-transparent drop-shadow-[0_14px_44px_rgba(0,0,0,0.45)]">
            I&apos;m still waiting, Shubh — yours, Dipak.
          </span>
        </div>
      </div>
    </footer>
  );
}
