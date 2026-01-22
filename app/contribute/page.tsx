import type { Metadata } from 'next';
import Link from 'next/link';

export default function Contribute() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Contribute a Tool</h1>
      <p>HackerHub is open-source. You can add new tools or improve existing ones with a simple pull request.</p>

      <h2>Quick Steps</h2>
      <ol>
        <li>Fork the repository on GitHub.</li>
        <li>Create a new branch, e.g. <code>add-tool-nmap</code>.</li>
        <li>Edit <code>content/toolDetails.ts</code> and add a new object following the template below.</li>
        <li>Run locally and verify the tool appears under <code>/tools</code> and its detail page works.</li>
        <li>Open a pull request with a clear description.</li>
      </ol>

      <h2>Tool Template</h2>
      <pre><code>{`{
  slug: 'tool-slug',
  name: 'Tool Name',
  category: 'Recon',
  level: 'Beginner',
  website: 'https://example.com',
  overview: 'One-paragraph overview of what the tool does and why.',
  features: ['Bullet', 'Points'],
  installation: {
    linux: 'sudo apt install tool',
    windows: 'Download installer: https://example.com',
    docker: 'docker run ...',
  },
  usage: {
    basics: [
      { title: 'Do something', command: 'tool -x target.com' },
    ],
  },
  useCase: 'Describe a practical scenario.',
  pros: ['Strengths'],
  cons: ['Limitations'],
  legalNote: 'Use responsibly with permission only.',
  resources: [
    { label: 'Official Docs', href: 'https://example.com/docs' },
  ],
}`}</code></pre>

      <h2>Content Rules</h2>
      <ul>
        <li>Be accurate and neutral. Cite sources when possible.</li>
        <li>No illegal or unethical guidance. Always include a legal/ethical note.</li>
        <li>Prefer beginner-friendly explanations with clear examples.</li>
        <li>Keep commands minimal and copy-pasteable.</li>
      </ul>

      <h2>Where to Start</h2>
      <p>Check existing tools at <Link href="/tools" className="underline">/tools</Link>. If something is missing, add it!</p>

      <h2>Community & License</h2>
      <p>By contributing, you agree your content can be published under the project license. See <Link href="/" className="underline">README</Link> for details.</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Contribute',
  description: 'Add or improve tools and guides for the cybersecurity community.',
  alternates: { canonical: '/contribute' },
};
