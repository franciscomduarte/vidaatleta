import Image from "next/image";

const ASPECT: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImageFrame({
  src,
  alt,
  aspect = "video",
  fallbackLabel,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority,
  rounded = true,
  className = "",
}: {
  src: string | null;
  alt: string;
  aspect?: keyof typeof ASPECT;
  fallbackLabel?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-navy-950 ${rounded ? "rounded-xl" : ""} ${ASPECT[aspect]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-navy-800 to-navy-950">
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            aria-hidden="true"
          >
            <pattern
              id="frame-waves"
              width="28"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 7 Q 7 0 14 7 T 28 7"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#frame-waves)" />
          </svg>
          <span className="relative font-display font-bold text-2xl text-accent/90 tracking-tight">
            {fallbackLabel ?? "Vida de Atleta"}
          </span>
        </div>
      )}
    </div>
  );
}
