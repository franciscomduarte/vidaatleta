import Link from "next/link";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(207,233,43,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Vida de Atleta
        </span>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-balance text-white">
          Cada centésimo <span className="text-accent">conta.</span>
        </h2>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          Encontre seu atleta, acompanhe os rankings da sua UF e nacional, e
          siga as competições ao vivo — tudo ao centésimo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/buscar"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy-950 hover:brightness-95"
          >
            Buscar meu atleta
          </Link>
          <Link
            href="/rankings"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Ver rankings
          </Link>
        </div>
      </div>
    </section>
  );
}
