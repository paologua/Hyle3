export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-28 border-b border-white/5">
      {children}
    </section>
  );
}
