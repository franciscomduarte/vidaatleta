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
  { href: "/buscar", label: "Buscar atleta" },
  { href: "/rankings", label: "Rankings" },
  { href: "/competicoes", label: "Competições" },
  { href: "/campeonatos", label: "Campeonatos" },
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
        <header className="border-b border-subtle">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="font-display font-extrabold text-lg tracking-tight">
              Vida de Atleta
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-secondary">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-subtle py-8 text-sm text-secondary">
          <div className="mx-auto max-w-6xl px-6">
            © {new Date().getFullYear()} Vida de Atleta
          </div>
        </footer>
      </body>
    </html>
  );
}
