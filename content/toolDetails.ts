export type ToolDetail = {
  slug: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  website?: string;
  overview: string;
  features: string[];
  installation?: {
    linux?: string;
    windows?: string;
    docker?: string;
  };
  usage: {
    basics: Array<{ title: string; command: string; description?: string }>;
  };
  useCase?: string;
  pros?: string[];
  cons?: string[];
  legalNote?: string;
  resources?: Array<{ label: string; href: string }>;
};

export const toolDetails: ToolDetail[] = [
  {
    slug: 'nmap',
    name: 'Nmap',
    category: 'Recon',
    level: 'Beginner',
    website: 'https://nmap.org',
    overview: 'Nmap is a network scanning tool used to discover hosts and services across networks.',
    features: ['Port scanning', 'Service/version detection', 'OS fingerprinting', 'Scriptable scans (NSE)'],
    installation: {
      linux: 'sudo apt install nmap',
      windows: 'Download installer: https://nmap.org/download.html',
      docker: 'docker run --rm -it instrumentisto/nmap -sV example.com',
    },
    usage: {
      basics: [
        { title: 'Version scan', command: 'nmap -sV target.com' },
        { title: 'Fast top ports', command: 'nmap --top-ports 100 target.com' },
        { title: 'Script scan', command: 'nmap -sV --script safe target.com' },
      ],
    },
    useCase: 'Bug bounty recon: identify exposed services and versions for further testing.',
    pros: ['Fast and flexible', 'Rich ecosystem of scripts', 'Widely documented'],
    cons: ['Can trigger IDS/IPS', 'Requires permission to use'],
    legalNote: 'Only scan systems you own or have explicit permission to test.',
    resources: [
      { label: 'Official Docs', href: 'https://nmap.org/book/' },
      { label: 'Cheat Sheet', href: 'https://cheatsheetseries.owasp.org/cheatsheets/Nmap_Cheat_Sheet.html' },
    ],
  },
  {
    slug: 'burpsuite',
    name: 'Burp Suite',
    category: 'Web',
    level: 'Intermediate',
    website: 'https://portswigger.net/burp',
    overview: 'Burp Suite is a web proxy and security testing platform for web application assessments.',
    features: ['Intercept proxy', 'Repeater/Intruder modules', 'Scanner (Pro)', 'Extender via BApp Store'],
    installation: {
      linux: 'Download Java installer: https://portswigger.net/burp/releases',
      windows: 'Download Windows installer: https://portswigger.net/burp/releases',
      docker: 'Not officially supported; use community images cautiously.',
    },
    usage: {
      basics: [
        { title: 'Intercept traffic', command: 'Configure browser proxy to 127.0.0.1:8080' },
        { title: 'Send to Repeater', command: 'Right-click → Send to Repeater' },
      ],
    },
    useCase: 'Manual web testing: intercept, modify, and replay HTTP requests to identify vulnerabilities.',
    pros: ['Powerful manual testing', 'Rich ecosystem', 'Industry standard'],
    cons: ['Pro features are paid', 'Learning curve for beginners'],
    legalNote: 'Test only with authorization. Respect terms of service.',
    resources: [
      { label: 'PortSwigger Academy', href: 'https://portswigger.net/web-security' },
      { label: 'Official Docs', href: 'https://portswigger.net/burp/documentation' },
    ],
  },
  {
    slug: 'metasploit',
    name: 'Metasploit',
    category: 'Exploit',
    level: 'Advanced',
    website: 'https://www.metasploit.com/',
    overview: 'Metasploit Framework helps develop, test, and execute exploits and payloads against targets.',
    features: ['Exploit modules', 'Payloads and auxiliary modules', 'Post-exploitation tools'],
    installation: {
      linux: 'curl https://raw.githubusercontent.com/rapid7/metasploit-framework/master/scripts/msfupdate | bash',
      windows: 'Download installer: https://github.com/rapid7/metasploit-framework/wiki/Metasploit-Installation',
      docker: 'docker run --rm -it metasploitframework/metasploit-framework',
    },
    usage: {
      basics: [
        { title: 'Start console', command: 'msfconsole' },
        { title: 'Search modules', command: 'search smb' },
        { title: 'Use module', command: 'use exploit/windows/smb/ms17_010_eternalblue' },
      ],
    },
    useCase: 'Security research in controlled lab environments to validate vulnerabilities.',
    pros: ['Extensive modules', 'Active community'],
    cons: ['High responsibility and risk', 'Not for unauthorized testing'],
    legalNote: 'Use only in labs or with explicit authorization. Illegal use is prohibited.',
    resources: [
      { label: 'Docs', href: 'https://docs.metasploit.com/' },
      { label: 'GitHub', href: 'https://github.com/rapid7/metasploit-framework' },
    ],
  },
];

export function getToolDetail(slug: string): ToolDetail | undefined {
  return toolDetails.find(t => t.slug === slug);
}
