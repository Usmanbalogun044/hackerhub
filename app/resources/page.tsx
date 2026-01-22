export default function Resources() {
  const items = [
    { name: 'TryHackMe', url: 'https://tryhackme.com/', description: 'Hands-on cybersecurity labs' },
    { name: 'Hack The Box', url: 'https://hackthebox.com/', description: 'Practice penetration testing' },
    { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', description: 'Most critical web app security risks' },
    { name: 'MITRE ATT&CK', url: 'https://attack.mitre.org/', description: 'Adversary tactics and techniques' },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="text-neutral-400 mt-2">Learn, practice, and stay current.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="block bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-brand-500">
            <h3 className="font-semibold">{r.name}</h3>
            <p className="text-neutral-400 text-sm mt-2">{r.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
