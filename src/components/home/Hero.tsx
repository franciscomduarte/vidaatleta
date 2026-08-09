import Image from "next/image";
import Link from "next/link";
import { PhoneMock } from "./PhoneMock";

const CHIPS = ["Tempo oficial, sempre", "Do seu estado ao Brasil inteiro", "Ao vivo, sem atraso"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <Image
        src="/hero-underwater.jpg"
        alt="Nadador em prova de nado livre, vista subaquática"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, var(--navy-950) 28%, rgba(0,16,59,0.75) 55%, rgba(0,16,59,0.35) 78%), linear-gradient(0deg, var(--navy-950) 0%, transparent 30%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(17,78,139,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(249,175,13,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 grid gap-14 lg:grid-cols-[1.1fr_auto] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Direto da piscina, pra você · Vida de Atleta
          </span>
          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-balance text-white max-w-xl">
            Onde o centésimo <span className="text-accent">decide.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/70 leading-relaxed">
            Toda prova, toda raia, todo recorde — do aquecimento à premiação,
            sem perder o centésimo exato.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/buscar"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-950 hover:brightness-95"
            >
              Localizar meu atleta
            </Link>
            <Link
              href="/rankings"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Conferir rankings
            </Link>
          </div>
          <Link
            href="/competicoes"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral/80"
          >
            <span className="h-2 w-2 rounded-full bg-coral animate-pulse" />
            A prova está rolando — acompanhe
            <span aria-hidden>→</span>
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
