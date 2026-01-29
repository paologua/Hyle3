export default function Home() {
  return (
    <main className="w-full min-h-screen px-6 md:px-32 py-32 font-sans bg-white text-black">

      {/* BLOCCO 1 — HERO SINISTRA */}
      <section className="mb-48">
        <h1 className="text-[2.8rem] md:text-[3.5rem] font-light leading-tight max-w-3xl tracking-tight">
          Sviluppiamo sistemi decisionali<br />
          per contesti complessi.
        </h1>
      </section>

      {/* BLOCCO 2 — DESTRA */}
      <section className="mb-48 flex justify-end">
        <div className="max-w-2xl text-right">
          <p className="text-[2rem] md:text-[2.5rem] font-light leading-snug">
            Siamo uno studio dinamico.
          </p>

          <p className="mt-8 text-[1.2rem] md:text-[1.4rem] leading-relaxed opacity-80">
            Progettiamo sistemi orientati all’equilibrio,<br />
            capaci di adattarsi alla tua realtà.
          </p>
        </div>
      </section>

      {/* BLOCCO 3 — DESTRA */}
      <section className="mb-48 flex justify-end">
        <div className="max-w-2xl text-right leading-relaxed text-[1.2rem] md:text-[1.4rem] opacity-90 space-y-10">
          <p>
            Per creare qualcosa di davvero efficace, dobbiamo capire a fondo
            cosa vuoi realizzare.
          </p>
          <p>
            Solo così possiamo proporti soluzioni sorprendenti,
            costruite su misura.
          </p>
          <p>
            HYLE sviluppa sistemi decisionali per persone e aziende
            che vogliono fare le cose meglio.
          </p>
          <p>
            Lavoriamo con te, passo dopo passo,
            per costruire un’esperienza unica.
          </p>
        </div>
      </section>

      {/* CHIUSURA HOME — CENTRATA */}
      <section className="text-center mt-48">
        <p className="text-[2rem] md:text-[2.5rem] font-light leading-snug">
          Sistemi progettati per reggere la complessità.
        </p>
      </section>

    </main>
  );
}
