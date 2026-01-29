export default function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-white/10 p-6">
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted">{desc}</p>
    </div>
  );
}
