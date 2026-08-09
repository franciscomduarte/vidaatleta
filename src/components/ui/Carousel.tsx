"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M11 3.5 5.5 9l5.5 5.5" : "M7 3.5 12.5 9 7 14.5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Carousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByPage(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory motion-safe:scroll-smooth pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Rolar para o item anterior"
        className="hidden sm:grid absolute top-1/2 -left-4 -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-subtle bg-card text-primary shadow-md hover:bg-page"
      >
        <ArrowIcon dir="left" />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        aria-label="Rolar para o próximo item"
        className="hidden sm:grid absolute top-1/2 -right-4 -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-subtle bg-card text-primary shadow-md hover:bg-page"
      >
        <ArrowIcon dir="right" />
      </button>
    </div>
  );
}

export function CarouselItem({
  children,
  width = "w-[300px]",
}: {
  children: ReactNode;
  width?: string;
}) {
  return <div className={`shrink-0 snap-start ${width}`}>{children}</div>;
}
