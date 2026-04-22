import { Heart, Sparkles } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { finalNote } from "@/lib/content";

export default function FinalNote() {
  return (
    <section
      id="final"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <SectionHeading
            eyebrow="Final note"
            title="No force. Only respect."
            subtitle="A gentle ending - the kind that keeps dignity on both sides."
          />

          <div className="space-y-4">
            <div className="cinematic-card noisy relative overflow-hidden rounded-3xl p-7">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.16),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.10),transparent_62%)] blur-2xl" />

              <div className="relative space-y-4 text-sm leading-7 text-mist/85 sm:text-base">
                {finalNote.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-ivory/12 bg-ivory/6 px-3 py-1 text-xs font-medium text-mist/80">
                  <Sparkles className="h-3.5 w-3.5 text-rose/85" />
                  <span>Whatever you choose, I&apos;m thankful.</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-ivory/12 bg-ivory/6 px-3 py-1 text-xs font-medium text-mist/80">
                  <span className="relative grid h-4 w-4 place-items-center">
                    <span className="absolute inset-0 rounded-full bg-blush/20 blur-md [animation:pulse_2.4s_ease-in-out_infinite]" />
                    <Heart
                      className="relative h-3.5 w-3.5 text-blush/80"
                      fill="currentColor"
                      stroke="none"
                    />
                  </span>
                  <span>Always respectful. Always gentle.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
