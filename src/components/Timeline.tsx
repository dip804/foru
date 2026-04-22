import { CalendarHeart, MapPin, Sparkles } from "lucide-react";

import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/lib/content";

const icons = [Sparkles, CalendarHeart, CalendarHeart, Sparkles, MapPin, Sparkles];

export default function Timeline() {
  return (
    <section
      id="story"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <GlassCard className="p-6 sm:p-7">
              <SectionHeading
                eyebrow="Our story"
                title="A timeline of small, real moments"
                subtitle="Not a dramatic movie. Just a gentle sequence of days that shaped my college journey."
              />
            </GlassCard>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent sm:left-6" />
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px blur-md sm:left-6 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <Reveal key={item.title} delay={0.05 * (idx % 6)}>
                    <div className="relative pl-12 sm:pl-16">
                      <div className="absolute left-[9px] top-7 h-7 w-7 rounded-full bg-midnight ring-1 ring-ivory/14 sm:left-[17px]">
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.22),transparent_62%)]" />
                        <div className="absolute -inset-2 rounded-full bg-gold/10 blur-md" />
                        <div className="absolute inset-0 grid place-items-center">
                          <Icon className="h-4 w-4 text-gold/80" />
                        </div>
                      </div>

                      <div className="cinematic-card noisy relative overflow-hidden rounded-3xl p-6">
                        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.14),transparent_62%)] blur-2xl" />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-display text-xl tracking-tight text-ivory">
                            {item.title}
                          </h3>
                          <div className="text-xs font-medium text-mist/70">
                            {item.time}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-mist/80 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
