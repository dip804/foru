import { Heart } from "lucide-react";

export default function Divider() {
  return (
    <div aria-hidden className="relative mx-auto my-10 w-full max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ivory/16 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-midnight/80 px-3 backdrop-blur-md">
        <Heart
          className="h-4 w-4 text-gold/70 drop-shadow-[0_0_14px_rgba(255,207,155,0.25)]"
          fill="currentColor"
          stroke="none"
        />
      </div>
    </div>
  );
}
