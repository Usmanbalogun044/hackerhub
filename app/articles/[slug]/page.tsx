import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '../../../content/articles';
import { AdSlot } from '../../../components/AdSlot';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <article className="prose prose-invert max-w-none">
      {/* JSON-LD: Article & BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/articles/${article.slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Articles', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/articles` },
              { '@type': 'ListItem', position: 2, name: article.title, item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/articles/${article.slug}` },
            ],
          }),
        }}
      />
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return { title: 'Article not found', robots: { index: false, follow: false } };
  const title = article.title;
  const description = article.summary || `${article.title} — article on HackerHub.`;
  return {
    title,
    description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: { title, description, type: 'article', url: `/articles/${article.slug}` },
    twitter: { card: 'summary_large_image', title, description },
  };
}
