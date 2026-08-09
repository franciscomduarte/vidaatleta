import Image from "next/image";

const SIZE: Record<string, string> = {
  sm: "h-8 w-8 text-[11px]",
  md: "h-10 w-10 text-xs",
  lg: "h-14 w-14 text-base",
};

function iniciaisDe(nome: string) {
  return nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

const TONE: Record<string, string> = {
  brand: "bg-brand text-white",
  accent: "bg-accent text-navy-950",
};

export function AthleteAvatar({
  nome,
  src,
  size = "md",
  tone = "brand",
  title,
  className = "",
}: {
  nome: string;
  src?: string | null;
  size?: keyof typeof SIZE;
  tone?: keyof typeof TONE;
  title?: string;
  className?: string;
}) {
  const base = `relative shrink-0 rounded-full ${SIZE[size]} ${className}`;

  if (src) {
    return (
      <span className={`${base} overflow-hidden`} title={title}>
        <Image src={src} alt="" fill sizes="56px" className="object-cover" />
      </span>
    );
  }

  return (
    <span
      className={`${base} grid place-items-center font-display font-bold ${TONE[tone]}`}
      title={title}
      aria-hidden="true"
    >
      {iniciaisDe(nome)}
    </span>
  );
}
