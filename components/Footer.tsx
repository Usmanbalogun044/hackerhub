export function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex justify-between">
        <span>© {new Date().getFullYear()} HackerHub</span>
        <span>Built with Next.js + Tailwind</span>
      </div>
    </footer>
  );
}
