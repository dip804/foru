import { Heart, Quote, ShieldCheck } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { feelings, feelingsQuote } from "@/lib/content";

export default function Feelings() {
  return (
    <section
      id="feelings"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
    >
      <Reveal>
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="pointer-events-none absolute -inset-x-6 -top-10 h-[120%] rounded-[42px] bg-[radial-gradient(circle_at_70%_25%,rgba(255,207,155,0.14),transparent_60%)] opacity-70" />
          <div className="pointer-events-none absolute -inset-x-6 -top-10 h-[120%] rounded-[42px] bg-[radial-gradient(circle_at_22%_70%,rgba(241,169,182,0.10),transparent_60%)] opacity-70" />

          <div className="space-y-6">
            <SectionHeading
              eyebrow="What I felt"
              title="A soft confession, held with respect"
              subtitle="This is not an argument for love. It's just the honest truth of how I carried this chapter."
            />

            <div className="space-y-4 text-sm leading-7 text-mist/80 sm:text-base">
              {feelings.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="cinematic-card rounded-3xl px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-ivory/14 bg-ivory/6">
                  <ShieldCheck className="h-5 w-5 text-gold/85" />
                </div>
                <div>
                  <div className="font-medium text-ivory">
                    Your comfort matters most.
                  </div>
                  <div className="mt-1 text-xs leading-6 text-mist/75">
                    This website is designed to feel safe - no guilt, no force,
                    no expectation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="cinematic-card noisy relative overflow-hidden rounded-3xl p-7">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.16),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(184,167,255,0.08),transparent_62%)] blur-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-ivory/10 bg-ivory/5 px-3 py-1 text-xs font-medium text-mist/80">
                  <Heart
                    className="h-3.5 w-3.5 text-blush/80"
                    fill="currentColor"
                    stroke="none"
                  />
                  <span>quiet truth</span>
                </div>
                <h3 className="font-display text-2xl tracking-tight text-ivory">
                  You became one of the best parts of my college story.
                </h3>
                <p className="text-sm leading-7 text-mist/80 sm:text-base">
                  Not because of a label. Because of the way small moments felt
                  with you around - and the way I learned to respect a boundary
                  with kindness.
                </p>

                <div className="pt-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-ivory/12 bg-ivory/6 p-4">
                    <Quote className="mt-0.5 h-4 w-4 text-gold/80" />
                    <p className="text-sm leading-7 text-mist/85">
                      {feelingsQuote}
                    </p>
                  </div>
                </div>
                <div className="pt-2 text-xs text-mist/70">
                  If a feeling is real, it should also be respectful.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
