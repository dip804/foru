import * as React from "react";

import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default function GlassCard({ className, children }: Props) {
  return (
    <div
      className={cn(
        "cinematic-card noisy relative overflow-hidden rounded-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

