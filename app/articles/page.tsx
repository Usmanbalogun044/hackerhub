import Link from 'next/link';
import { articles } from '../../content/articles';

export default function Articles() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Articles</h1>
      <p className="text-neutral-400 mt-2">Guides and tutorials for learners.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {articles.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`} className="block bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-brand-500">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-neutral-400 text-sm mt-2">{a.summary}</p>
            <span className="text-xs text-neutral-500 mt-2 block">{a.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
