import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "live" | "record" | "faster" | "slower";

const TONE_CLASSES: Record<Tone, string> = {
  neutral: "bg-page text-secondary border-subtle",
  brand: "bg-brand text-white border-brand",
  live: "bg-coral text-white border-coral animate-pulse",
  record: "bg-time-record text-navy-950 border-time-record",
  faster: "bg-time-faster/15 text-time-faster border-time-faster/30",
  slower: "bg-time-slower/15 text-time-slower border-time-slower/30",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
