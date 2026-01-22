import { notFound } from 'next/navigation';
import { articles } from '../../../content/articles';
import { AdSlot } from '../../../components/AdSlot';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-neutral-400 mt-2">Category: {article.category}</p>
      <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} className="my-6" />
      <div className="mt-6 space-y-4">
        <p>
          {article.summary}
        </p>
        <p className="text-sm text-neutral-500">This is a placeholder. We will add full content, code snippets, and references soon.</p>
      </div>
    </article>
  );
}
