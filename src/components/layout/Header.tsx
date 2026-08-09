import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Logo } from "./Logo";
import { NavMenu, type NavItem } from "./NavMenu";

const NAV: NavItem[] = [
  { href: "/competicoes", label: "Competições" },
  { href: "/rankings", label: "Rankings" },
  { href: "/campeonatos", label: "Campeonatos" },
  { href: "/comparar", label: "Comparar" },
  { href: "/calculadora", label: "Calculadora FINA" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy-950 text-white shadow-lg shadow-black/20">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Escudo — âncora da marca, preso à barra mas transbordando por baixo dela */}
        <div className="absolute left-4 sm:left-6 top-2 sm:top-3 z-10 h-[72px] sm:h-28">
          <Logo
            priority
            className="h-full drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)]"
          />
        </div>

        <div className="flex h-16 sm:h-20 items-center justify-end gap-6 pl-20 sm:pl-32">
          <NavMenu items={NAV} />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-white/70">
              Entrar
            </span>
            <Link
              href="/buscar"
              className="rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-navy-950 hover:brightness-95"
            >
              Localizar atleta
            </Link>
            <MobileNav items={NAV} />
          </div>
        </div>
      </div>
    </header>
  );
}
