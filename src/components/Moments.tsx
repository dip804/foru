import { BookOpen, Coffee, MessageCircle, Smile, Sparkles, Users } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { moments } from "@/lib/content";

const icons = [BookOpen, Sparkles, Coffee, MessageCircle, Smile, Users];

export default function Moments() {
  return (
    <section
      id="moments"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Little moments"
            title="The ordinary days that became special"
            subtitle="These are the memories that don't need photos - because they stayed in the heart anyway."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map((m, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={m.title} delay={0.03 * (idx % 6)}>
                  <div className="group cinematic-card noisy relative h-full overflow-hidden rounded-3xl p-6 transition hover:bg-[linear-gradient(180deg,rgba(246,242,236,0.11),rgba(246,242,236,0.06))]">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.16),transparent_62%)] blur-2xl opacity-70 transition-opacity group-hover:opacity-100" />
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-ivory/14 bg-ivory/6 shadow-[0_18px_55px_-40px_rgba(255,207,155,0.35)]">
                        <Icon className="h-5 w-5 text-gold/85" />
                      </div>
                      <span className="rounded-full border border-ivory/10 bg-ivory/5 px-3 py-1 text-[11px] font-medium text-mist/75">
                        {m.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl tracking-tight text-ivory">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-mist/80 sm:text-base">
                      {m.description}
                    </p>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-ivory/14 to-transparent" />
                    <div className="mt-4 text-xs text-mist/65">
                      Sometimes the smallest moments stay the longest.
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
