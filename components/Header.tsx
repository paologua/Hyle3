import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 px-6 max-w-content mx-auto flex justify-between items-center">
      <Link href="/" className="text-lg font-medium">hylestudio</Link>
      <nav className="flex gap-6 text-sm text-muted">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
      </nav>
    </header>
  );
}
