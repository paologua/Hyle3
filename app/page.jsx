export default function Home() {
  return (
    <main className="w-full min-h-screen px-8 md:px-24 py-32">

      {/* BLOCCO 1 — HERO SINISTRA */}
      <section className="mb-48">
        <h1 className="text-5xl md:text-6xl font-light leading-tight max-w-3xl">
          Sviluppiamo sistemi decisionali<br />
          per contesti complessi.
        </h1>
      </section>

      {/* BLOCCO 2 — DESTRA */}
      <section className="mb-48 flex justify-end">
        <div className="max-w-2xl text-right">
          <p className="text-3xl md:text-4xl font-light">
            Siamo uno studio dinamico.
          </p>

          <p className="mt-6 text-lg md:text-xl opacity-80 leading-relaxed">
            Progettiamo sistemi orientati all’equilibrio,<br />
            capaci di adattarsi alla tua realtà.
          </p>
        </div>
      </section>

      {/* BLOCCO 3 — DESTRA */}
      <section className="mb-48 flex justify-end">
        <div className="max-w-2xl text-right leading-relaxed">

          <p className="text-lg md:text-xl opacity-90">
            Per creare qualcosa di davvero efficace, dobbiamo capire a fondo
            cosa vuoi realizzare.
          </p>

          <p className="mt-8 text-lg md:text-xl opacity-90">
            Solo così possiamo proporti soluzioni sorprendenti,
            costruite su misura.
          </p>

          <p className="mt-8 text-lg md:text-xl opacity-90">
            HYLE sviluppa sistemi decisionali per persone e aziende
            che vogliono fare le cose meglio.
          </p>

          <p className="mt-8 text-lg md:text-xl opacity-90">
            Lavoriamo con te, passo dopo passo,
            per costruire un’esperienza unica.
          </p>

        </div>
      </section>

      {/* CHIUSURA HOME — CENTRATA */}
      <section className="text-center mt-48">
        <p className="text-3xl md:text-4xl font-light">
          Sistemi progettati per reggere la complessità.
        </p>
      </section>

    </main>
  );
}
