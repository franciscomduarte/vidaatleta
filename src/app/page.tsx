import Link from "next/link";

const CHIPS = ["Tempos oficiais", "Rankings por UF e nacional", "Competições ao vivo"];

const AUDIENCES = [
  {
    eyebrow: "Pais e famílias",
    title: "Acompanhe cada prova do seu filho.",
    body: "Saiba a série, a raia e o horário. Receba o tempo oficial no instante em que ele toca a borda.",
  },
  {
    eyebrow: "Atletas",
    title: "Veja seu tempo cair, centésimo a centésimo.",
    body: "PBs, evolução por prova e sua posição no ranking da sua UF e nacional.",
  },
  {
    eyebrow: "Fãs da natação",
    title: "Viva a competição em tempo real.",
    body: "Favorite atletas e clubes, acompanhe as séries ao vivo e veja os resultados oficiais assim que eles saem.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-time-record" />
          Natação competitiva · vidadeatleta
        </span>
        <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-balance max-w-3xl">
          Cada centésimo <span className="text-time-record">conta.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-secondary leading-relaxed">
          Acompanhe atletas, tempos, rankings, provas e competições ao vivo em
          um só lugar — antes, durante e depois da piscina.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/buscar"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Buscar meu atleta
          </Link>
          <Link
            href="/rankings"
            className="rounded-full border border-subtle px-6 py-3 text-sm font-semibold text-primary hover:bg-card"
          >
            Ver rankings
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-subtle bg-card px-3 py-1.5 text-xs font-medium text-secondary"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-subtle bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Para quem vive a natação
          </span>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance">
            Para quem está na água — e para quem torce por ela.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {AUDIENCES.map((a) => (
              <article
                key={a.eyebrow}
                className="rounded-2xl border border-subtle p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  {a.eyebrow}
                </span>
                <h3 className="mt-2 font-display font-semibold text-lg leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
