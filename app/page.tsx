import type { Metadata } from 'next';
import { AdSlot } from '../components/AdSlot';
import Link from 'next/link';
import { articles } from '../content/articles';
import { tools } from '../content/tools';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">HackerHub</h1>
        <p className="mt-3 text-neutral-400">Learn cybersecurity, explore tools, get career-ready.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/articles" className="bg-brand-500 hover:bg-brand-400 text-white px-4 py-2 rounded-md">Start Learning</Link>
          <Link href="/tools" className="border border-brand-500 text-brand-300 px-4 py-2 rounded-md">Browse Tools</Link>
        </div>
      </section>

      <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />

      <section>
        <h2 className="text-2xl font-semibold">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">

      {/* JSON-LD: Organization & WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'HackerHub',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'HackerHub',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            potentialAction: {
              '@type': 'SearchAction',
              target: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/tools?query={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
          {articles.slice(0,3).map(a => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="block bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-brand-500">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-neutral-400 text-sm mt-2">{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Popular Tools</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {tools.slice(0,3).map(t => (
            <Link key={t.slug} href={`/tools/${t.slug}`} className="block bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-brand-500">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-neutral-400 text-sm mt-2">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};
