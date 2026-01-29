import Section from "../../components/Section";
import Grid from "../../components/Grid";
import ProjectCard from "../../components/ProjectCard";

export default function Works() {
  return (
    <Section>
      <h2 className="text-h2 mb-12">Works</h2>
      <Grid>
        <ProjectCard title="AI Decision System" desc="Sistema decisionale per contesti ad alta ambiguità." />
        <ProjectCard title="Custom Knowledge Engine" desc="Artefatto AI per gestione conoscenza non strutturata." />
      </Grid>
    </Section>
  );
}
