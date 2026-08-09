import type { Metadata } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Logo } from "@/components/layout/Logo";
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
  title: "Vida de Atleta | CBDA",
  description:
    "Produto oficial da CBDA: acompanhe atletas, tempos, rankings, provas e competições ao vivo em um só lugar.",
};

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
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-navy-950 text-white/70">
          <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <span className="flex items-center gap-3">
                <Logo className="h-9" />
                <span className="flex flex-col leading-none">
                  <span className="font-display font-extrabold text-lg text-white">
                    Vida de Atleta
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    por CBDA
                  </span>
                </span>
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed">
                Produto oficial da Confederação Brasileira de Desportos
                Aquáticos. Onde o centésimo decide — tempo oficial, ranking
                atualizado e a prova inteira, do início ao fim.
              </p>
            </div>
            <FooterColumn title="Produto" items={FOOTER_PRODUTO} />
            <FooterColumn title="Atletas" items={FOOTER_ATLETAS} />
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-white/40">
              <span>© {new Date().getFullYear()} CBDA — Vida de Atleta</span>
              <span>
                Fotos: Nenad Stojkovic (CC BY 2.0) · KeepActive Australia (CC
                BY-SA 4.0) · Steven Lek · localfitness.com.au (CC BY-SA 3.0) —
                via Wikimedia Commons
              </span>
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
