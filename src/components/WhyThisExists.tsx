import { HeartHandshake, Shield, Sparkles, Smile } from "lucide-react";

import Reveal from "@/components/Reveal";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export default function WhyThisExists() {
  return (
    <section
      id="why"
      className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-12 sm:py-16"
    >
      {/* section lighting (matches screenshot: navy left, warm right glow) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_640px_at_84%_44%,rgba(255,207,155,0.12),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_60%,rgba(241,169,182,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(920px_620px_at_18%_42%,rgba(7,10,23,0.46),transparent_62%)]" />
      </div>

      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <SectionHeading
            eyebrow="Why this exists"
            title="A small gift, not a question"
            subtitle="This page is made to preserve memories with dignity — so it feels safe to read, and easy to close."
          />

          <div className="space-y-4">
            <GlassCard className="p-6 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.90)] ring-1 ring-[rgba(241,169,182,0.10)] sm:p-8">
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(241,169,182,0.16),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,207,155,0.14),transparent_62%)] blur-2xl" />

              <div className="pointer-events-none absolute left-6 top-6 text-4xl leading-none text-blush/70 drop-shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
                &ldquo;
              </div>

              <p className="relative pt-2 text-sm leading-7 text-ivory/84 drop-shadow-[0_14px_44px_rgba(0,0,0,0.40)] sm:text-base">
                I made this website for one reason:{" "}
                <span className="font-semibold text-ivory">
                  to say thank you for the part you played in my college story
                </span>
                . Not to demand anything. Not to make you uncomfortable.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "No pressure", Icon: HeartHandshake },
                  { label: "Only memories", Icon: Sparkles },
                  { label: "Pure respect", Icon: Shield },
                  { label: "Always your comfort", Icon: Smile },
                ].map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/16 bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs font-medium text-ivory/78 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.80)] ring-1 ring-[rgba(255,207,155,0.06)] backdrop-blur-xl"
                  >
                    <Icon className="h-3.5 w-3.5 text-blush/75" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </GlassCard>

            <p className="max-w-2xl text-sm leading-7 text-mist/86 drop-shadow-[0_16px_55px_rgba(0,0,0,0.35)] sm:text-base">
              If you read this, I want it to feel like a soft letter — beautiful,
              calm, and honest. And if you choose not to, that&apos;s also completely
              okay.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
