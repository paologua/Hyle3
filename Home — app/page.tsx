import Section from "../components/Section";
import Grid from "../components/Grid";

export default function Home() {
  return (
    <>
      <Section>
        <h1 className="text-hero mb-6">
          Progettiamo sistemi AI partendo dai problemi, non dalle soluzioni.
        </h1>
        <p className="text-muted max-w-xl">
          Per aziende e individui, quando il contesto è complesso e le soluzioni standard falliscono.
        </p>
      </Section>

      <Section>
        <Grid>
          <p>Applicazioni, agenti e sistemi progettati su misura.</p>
          <p>Artefatti digitali pensati per durare, adattarsi e reggere l’attrito reale.</p>
        </Grid>
      </Section>
    </>
  );
}
