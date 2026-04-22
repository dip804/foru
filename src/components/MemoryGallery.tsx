import fs from "node:fs";
import path from "node:path";

import Reveal from "@/components/Reveal";
import MemoriesCarousel from "@/components/MemoriesCarousel";
import SectionHeading from "@/components/SectionHeading";

type MemoryImage = {
  src: string;
  alt: string;
};

function naturalImageSort(a: string, b: string) {
  const stripExt = (s: string) => s.replace(/\.[^.]+$/, "");
  const baseA = stripExt(a);
  const baseB = stripExt(b);

  const matchA = baseA.match(/(\d+)$/);
  const matchB = baseB.match(/(\d+)$/);

  const numA = matchA ? Number(matchA[1]) : -1;
  const numB = matchB ? Number(matchB[1]) : -1;

  const prefixA = matchA ? baseA.slice(0, matchA.index) : baseA;
  const prefixB = matchB ? baseB.slice(0, matchB.index) : baseB;

  const prefixCmp = prefixA.localeCompare(prefixB);
  if (prefixCmp !== 0) return prefixCmp;

  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}

function getPublicMemories(): MemoryImage[] {
  const dir = path.join(process.cwd(), "public", "img");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter((name) => /\.(png|jpg|jpeg|webp|gif)$/i.test(name))
    .sort(naturalImageSort);

  return files.map((name, idx) => ({
    src: `/img/${name}`,
    alt: `Memory photo ${idx + 1}`,
  }));
}

export default function MemoryGallery() {
  const images = getPublicMemories();

  return (
    <section
      id="memories"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-12 sm:py-16"
    >
      <Reveal>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Memories"
            title="A small gallery, one photo at a time"
            subtitle="Tap next only if you want to. Nothing here is meant to feel heavy."
          />

          {images.length > 0 ? (
            <Reveal delay={0.05}>
              <MemoriesCarousel images={images} />
            </Reveal>
          ) : (
            <Reveal delay={0.05}>
              <div className="cinematic-card noisy rounded-3xl p-6 sm:p-8">
                <p className="text-sm leading-7 text-mist/85 sm:text-base">
                  Add your photos to <span className="text-ivory">public/img</span>{" "}
                  (example: <span className="text-ivory">img1.jpg</span>,{" "}
                  <span className="text-ivory">img2.jpg</span>). Then restart{" "}
                  <span className="text-ivory">npm run dev</span>.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Reveal>
    </section>
  );
}

