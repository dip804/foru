import { HeartHandshake, Leaf, Smile, Sparkles } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { admire } from "@/lib/content";

const icons = [Leaf, Sparkles, Smile, HeartHandshake];

export default function Admire() {
  return (
    <section
      id="admire"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="What I admire"
            title="Not just beauty - the kind of person you are"
            subtitle="These are the qualities that stayed with me, quietly and genuinely."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {admire.map((a, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={a.title} delay={0.03 * (idx % 6)}>
                  <div className="cinematic-card group noisy relative overflow-hidden rounded-3xl p-6 transition hover:bg-[linear-gradient(180deg,rgba(246,242,236,0.11),rgba(246,242,236,0.06))]">
                    <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.14),transparent_62%)] blur-2xl opacity-75 transition group-hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-ivory/14 bg-ivory/6 shadow-[0_18px_55px_-40px_rgba(241,169,182,0.30)]">
                        <Icon className="h-5 w-5 text-blush/85" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg tracking-tight text-ivory">
                          {a.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-mist/80 sm:text-base">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
