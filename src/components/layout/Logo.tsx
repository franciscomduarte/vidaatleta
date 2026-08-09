import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "h-9",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="Vida de Atleta — página inicial">
      <Image
        src="/logo.png"
        alt=""
        width={86}
        height={112}
        priority={priority}
        className={`w-auto object-contain ${className}`}
      />
    </Link>
  );
}
