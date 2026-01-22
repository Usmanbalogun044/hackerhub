'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { tools } from '../../content/tools';
import { AdSlot } from '../../components/AdSlot';

export default function Tools() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const set = new Set<string>();
    tools.forEach(t => set.add(t.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return tools.filter(t => {
      const matchesQuery = `${t.name} ${t.description} ${t.category}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || t.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-neutral-400 mt-2">Curated tools for security practitioners.</p>

      <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} className="my-6" />

      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tools..."
          className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm w-full"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm w-full md:w-48"
        >
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {filtered.map(t => (
          <div key={t.slug} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-brand-500">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">
                  <Link href={`/tools/${t.slug}`} className="hover:underline">{t.name}</Link>
                </h3>
                <p className="text-neutral-400 text-sm mt-2">{t.description}</p>
                <span className="text-xs text-neutral-500 mt-2 block">{t.category}</span>
              </div>
              <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-400 underline">Website</a>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500 text-sm">No tools match your search.</p>
        )}
      </div>
    </div>
  );
}
