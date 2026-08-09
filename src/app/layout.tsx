import type { Metadata } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vida de Atleta",
  description: "Acompanhe atletas, tempos, rankings, provas e competições ao vivo em um só lugar.",
};

const NAV = [
  { href: "/competicoes", label: "Competições" },
  { href: "/rankings", label: "Rankings" },
  { href: "/campeonatos", label: "Campeonatos" },
  { href: "/comparar", label: "Comparar" },
  { href: "/calculadora", label: "Calculadora FINA" },
];

const FOOTER_PRODUTO = [
  { href: "/rankings", label: "Rankings" },
  { href: "/competicoes", label: "Competições" },
  { href: "/campeonatos", label: "Campeonatos" },
];

const FOOTER_ATLETAS = [
  { href: "/buscar", label: "Buscar atleta" },
  { href: "/comparar", label: "Comparar" },
  { href: "/calculadora", label: "Calculadora FINA" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-primary">
        <header className="bg-navy-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="font-display font-extrabold text-lg tracking-tight">
              Vida de Atleta
            </Link>
            <nav className="hidden md:flex flex-wrap gap-x-6 text-sm font-medium text-white/70">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-sm font-medium text-white/70">
                Entrar
              </span>
              <Link
                href="/buscar"
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy-950 hover:brightness-95"
              >
                Buscar atleta
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-navy-950 text-white/70">
          <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <span className="font-display font-extrabold text-lg text-white">
                Vida de Atleta
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed">
                Cada centésimo conta. Tempos, rankings e competições de
                natação, acompanhados do início ao fim.
              </p>
            </div>
            <FooterColumn title="Produto" items={FOOTER_PRODUTO} />
            <FooterColumn title="Atletas" items={FOOTER_ATLETAS} />
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-5 text-xs">
              © {new Date().getFullYear()} Vida de Atleta
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
