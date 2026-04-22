import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-blush/35 bg-[rgba(20,18,34,0.42)] px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-ivory/80 shadow-[0_26px_90px_-70px_rgba(0,0,0,0.90)] ring-1 ring-[rgba(255,207,155,0.08)] backdrop-blur-xl">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-blush/18 shadow-[0_0_30px_rgba(241,169,182,0.22)] ring-1 ring-blush/25">
            <Heart
              className="h-3 w-3 text-blush/85"
              fill="currentColor"
              stroke="none"
            />
          </span>
          <span className="uppercase">{eyebrow}</span>
        </div>
      ) : null}

      <h2 className="font-display text-3xl leading-tight tracking-tight text-ivory drop-shadow-[0_18px_60px_rgba(0,0,0,0.40)] sm:text-4xl cinematic-title">
        {title}
      </h2>

      {subtitle ? (
        <p className="max-w-2xl text-base leading-7 text-mist/86 drop-shadow-[0_16px_50px_rgba(0,0,0,0.35)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}

      <div
        aria-hidden
        className={cn(
          "flex items-center gap-3 pt-1",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        {align === "center" ? (
          <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        ) : null}
        <Heart
          className="h-3.5 w-3.5 text-blush/80 drop-shadow-[0_0_18px_rgba(241,169,182,0.22)]"
          fill="currentColor"
          stroke="none"
        />
        <div
          className={cn(
            "h-px bg-gradient-to-r from-blush/60 via-gold/40 to-transparent",
            align === "center" ? "w-24" : "w-28",
          )}
        />
      </div>
    </div>
  );
}
