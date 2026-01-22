import Link from 'next/link';
import { AdSlot } from '../../../components/AdSlot';
import { getToolDetail } from '../../../content/toolDetails';

function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="text-xs px-2 py-1 rounded border border-neutral-700 hover:border-brand-500 text-neutral-300"
    >Copy</button>
  );
}

export default function ToolDetail({ params }: { params: { slug: string } }) {
  const tool = getToolDetail(params.slug);
  if (!tool) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Tool not found</h1>
        <p className="text-neutral-400 mt-2">No details available for this tool.</p>
        <Link href="/tools" className="text-brand-400 underline mt-4 inline-block">Back to tools</Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{tool.name}</h1>
          {tool.website && (
            <a href={tool.website} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-400 underline">Official Site</a>
          )}
        </div>
        <p className="text-neutral-400 mt-1 text-sm">{tool.category} · {tool.level}</p>

        <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} className="my-6" />

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-neutral-300 mt-2">{tool.overview}</p>
        </section>

        {!!tool.features?.length && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-2 list-disc list-inside text-neutral-300">
              {tool.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </section>
        )}

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Installation</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-2">
            {tool.installation?.linux && (
              <div className="bg-neutral-900 border border-neutral-800 rounded p-4">
                <h3 className="font-medium">Linux</h3>
                <div className="mt-2 flex items-center justify-between">
                  <pre className="text-sm text-neutral-300 overflow-x-auto"><code>{tool.installation.linux}</code></pre>
                  <CopyButton text={tool.installation.linux} />
                </div>
              </div>
            )}
            {tool.installation?.windows && (
              <div className="bg-neutral-900 border border-neutral-800 rounded p-4">
                <h3 className="font-medium">Windows</h3>
                <div className="mt-2 flex items-center justify-between">
                  <pre className="text-sm text-neutral-300 overflow-x-auto"><code>{tool.installation.windows}</code></pre>
                  <CopyButton text={tool.installation.windows} />
                </div>
              </div>
            )}
            {tool.installation?.docker && (
              <div className="bg-neutral-900 border border-neutral-800 rounded p-4">
                <h3 className="font-medium">Docker</h3>
                <div className="mt-2 flex items-center justify-between">
                  <pre className="text-sm text-neutral-300 overflow-x-auto"><code>{tool.installation.docker}</code></pre>
                  <CopyButton text={tool.installation.docker} />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Basic Usage</h2>
          <div className="space-y-3 mt-2">
            {tool.usage.basics.map((b) => (
              <div key={b.title} className="bg-neutral-900 border border-neutral-800 rounded p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{b.title}</h3>
                  <CopyButton text={b.command} />
                </div>
                <pre className="text-sm text-neutral-300 overflow-x-auto mt-2"><code>{b.command}</code></pre>
                {b.description && (<p className="text-neutral-400 text-sm mt-2">{b.description}</p>)}
              </div>
            ))}
          </div>
        </section>

        {tool.useCase && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Real-World Use Case</h2>
            <p className="text-neutral-300 mt-2">{tool.useCase}</p>
          </section>
        )}

        {(tool.pros || tool.cons) && (
          <section className="mt-6 grid md:grid-cols-2 gap-4">
            {!!tool.pros?.length && (
              <div>
                <h2 className="text-xl font-semibold">Pros</h2>
                <ul className="mt-2 list-disc list-inside text-neutral-300">
                  {tool.pros!.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            )}
            {!!tool.cons?.length && (
              <div>
                <h2 className="text-xl font-semibold">Cons</h2>
                <ul className="mt-2 list-disc list-inside text-neutral-300">
                  {tool.cons!.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}
          </section>
        )}

        {tool.legalNote && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Legal / Ethical Note</h2>
            <p className="text-neutral-300 mt-2">{tool.legalNote}</p>
          </section>
        )}

        {!!tool.resources?.length && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul className="mt-2 text-neutral-300">
              {tool.resources!.map((r) => (
                <li key={r.href}>
                  <a href={r.href} className="underline text-brand-400" target="_blank" rel="noopener noreferrer">{r.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <aside>
        <div className="sticky top-20 space-y-6">
          <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />
          <div className="bg-neutral-900 border border-neutral-800 rounded p-4">
            <h3 className="font-semibold">Contribute a Tool</h3>
            <p className="text-neutral-400 text-sm mt-2">Help the community by adding more details or new tools.</p>
            <Link href="/contribute" className="text-brand-400 underline text-sm mt-2 inline-block">Contribution Guide</Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
