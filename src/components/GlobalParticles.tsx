"use client";

import DustParticles from "@/components/DustParticles";
import HeartParticles from "@/components/HeartParticles";

export default function GlobalParticles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-40">
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_35%_20%,black,transparent_70%)]">
        <HeartParticles seed={17} count={12} />
      </div>
      <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_55%_35%,black,transparent_75%)]">
        <DustParticles seed={41} count={60} />
      </div>
    </div>
  );
}
