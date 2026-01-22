'use client';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-brand-300">HackerHub</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/articles">Articles</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="https://github.com/dollarhunter/hackerhub" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </nav>
      </div>
    </header>
  );
}
