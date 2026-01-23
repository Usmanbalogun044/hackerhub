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
  {
    slug: 'wireshark',
    name: 'Wireshark',
    category: 'Analysis',
    level: 'Intermediate',
    website: 'https://www.wireshark.org/',
    overview: 'Wireshark is the world’s foremost and widely-used network protocol analyzer.',
    features: ['Deep inspection of hundreds of protocols', 'Live capture and offline analysis', 'Multi-platform'],
    installation: {
      linux: 'sudo apt install wireshark',
      windows: 'Download installer: https://www.wireshark.org/#download',
    },
    usage: {
      basics: [
        { title: 'Start capture', command: 'Select interface -> Start' },
        { title: 'Filter HTTP', command: 'http' },
        { title: 'Follow Stream', command: 'Right click packet -> Follow -> TCP Stream' },
      ],
    },
    useCase: 'Analyzing network traffic to debug issues or detect malicious activity.',
    pros: ['Industry standard', 'Free and open source'],
    cons: ['Can be overwhelming', 'Requires promiscuous mode'],
    legalNote: 'Ensure you have permission to capture traffic on the network.',
    resources: [{ label: 'Docs', href: 'https://www.wireshark.org/docs/' }],
  },
  {
    slug: 'john-the-ripper',
    name: 'John the Ripper',
    category: 'Cracking',
    level: 'Intermediate',
    website: 'https://www.openwall.com/john/',
    overview: 'John the Ripper is a fast password cracker, currently available for many flavors of Unix, Windows, DOS, and OpenVMS.',
    features: ['Dictionary attacks', 'Brute force', 'Rainbow tables support'],
    installation: {
      linux: 'sudo apt install john',
      windows: 'Download binary: https://www.openwall.com/john/doc/',
    },
    usage: {
      basics: [
         { title: 'Crack hash', command: 'john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt' },
         { title: 'Show cracked', command: 'john --show hash.txt' },
      ],
    },
    useCase: 'Auditing password strength.',
    pros: ['Very fast', 'Supports many hash types'],
    cons: ['Command line only (mostly)'],
    legalNote: 'Only use on hashes you own or have permission to audit.',
    resources: [{ label: 'Wiki', href: 'https://github.com/openwall/john/wiki' }],
  },
  {
    slug: 'aircrack-ng',
    name: 'Aircrack-ng',
    category: 'Wireless',
    level: 'Advanced',
    website: 'https://www.aircrack-ng.org/',
    overview: 'Complete suite of tools to assess WiFi network security.',
    features: ['Monitoring: Packet capture', 'Attacking: Replay attacks, deauthentication', 'Cracking: WEP and WPA PSK'],
    installation: {
      linux: 'sudo apt install aircrack-ng',
    },
    usage: {
      basics: [
        { title: 'Monitor mode', command: 'airmon-ng start wlan0' },
        { title: 'Capture packets', command: 'airodump-ng wlan0mon' },
      ],
    },
    useCase: 'Auditing wireless networks.',
    pros: ['Comprehensive suite'],
    cons: ['Requires compatible hardware'],
    legalNote: 'Illegal to use on networks you do not own.',
    resources: [{ label: 'Docs', href: 'https://www.aircrack-ng.org/doku.php' }],
  },
  {
    slug: 'ghidra',
    name: 'Ghidra',
    category: 'Reverse Engineering',
    level: 'Advanced',
    website: 'https://ghidra-sre.org/',
    overview: 'A software reverse engineering (SRE) suite of tools developed by NSA\'s Research Directorate.',
    features: ['Disassembler', 'Decompiler', 'Scripting'],
    installation: {
      windows: 'Download zip -> Run ghidraRun.bat',
      linux: 'Download zip -> Run ghidraRun',
    },
    usage: {
      basics: [
        { title: 'Analyze', command: 'Import file -> Double click -> Yes to analyze' },
      ],
    },
    useCase: 'Analyzing malware or closed-source software.',
    pros: ['Powerful decompiler', 'Free'],
    cons: ['Steep learning curve', 'Java-based (can be heavy)'],
    legalNote: 'Respect IP laws and terms of service.',
    resources: [{ label: 'Cheat Sheet', href: 'https://ghidra-sre.org/CheatSheet.html' }],
  },
  {
    slug: 'sqlmap',
    name: 'sqlmap',
    category: 'Web',
    level: 'Intermediate',
    website: 'https://sqlmap.org/',
    overview: 'Automatic SQL injection and database takeover tool.',
    features: ['Full support for MySQL, PostgreSQL, Oracle, etc.', 'Automatic injection detection'],
    installation: {
      linux: 'sudo apt install sqlmap',
      windows: 'Download python script',
    },
    usage: {
      basics: [
        { title: 'Basic scan', command: 'sqlmap -u "http://target.com/page?id=1"' },
        { title: 'Dump database', command: 'sqlmap -u "..." --dbs' },
      ],
    },
    useCase: 'Testing web apps for SQLi vulnerabilities.',
    pros: ['Extermely powerful automation'],
    cons: ['Noisy', 'Can damage data if not careful'],
    legalNote: 'Strictly for authorized testing.',
    resources: [{ label: 'Usage', href: 'https://github.com/sqlmapproject/sqlmap/wiki/Usage' }],
  },
  {
    slug: 'hydra',
    name: 'Hydra',
    category: 'Cracking',
    level: 'Intermediate',
    website: 'https://github.com/vanhauser-thc/thc-hydra',
    overview: 'A very fast network logon cracker which supports many different services.',
    features: ['Supports SSH, FTP, HTTP, SMB, etc.', 'Parallel login attempts'],
    installation: {
      linux: 'sudo apt install hydra',
    },
    usage: {
      basics: [
        { title: 'Crack SSH', command: 'hydra -l user -P passlist.txt ssh://192.168.1.1' },
      ],
    },
    useCase: 'Testing weak credentials on network services.',
    pros: ['Fast', 'Protocol support'],
    cons: ['Command line', 'Can lock out accounts'],
    legalNote: 'Only use on your own systems.',
    resources: [],
  },
  {
    slug: 'owasp-zap',
    name: 'OWASP ZAP',
    category: 'Web',
    level: 'Beginner',
    website: 'https://www.zaproxy.org/',
    overview: ' The world’s most widely used web app scanner. Free and open source.',
    features: ['Automated scanner', 'Fuzzing', 'Scripting'],
    installation: {
      windows: 'Download installer',
      linux: 'Download installer / Snap',
    },
    usage: {
      basics: [
        { title: 'Quick Scan', command: 'Enter URL -> Attack' },
      ],
    },
    useCase: 'Automated DAST scanning.',
    pros: ['Free', 'Good for CI/CD'],
    cons: ['UI can be sluggish'],
    legalNote: 'Authorized testing only.',
    resources: [],
  },
  {
    slug: 'nessus',
    name: 'Nessus',
    category: 'Scanner',
    level: 'Intermediate',
    website: 'https://www.tenable.com/products/nessus',
    overview: 'Widely used vulnerability scanner.',
    features: ['Vulnerability assessment', 'Compliance checks'],
    installation: {
      linux: 'Download .deb/.rpm',
    },
    usage: {
      basics: [
        { title: 'Scan', command: 'Web UI -> New Scan' },
      ],
    },
    useCase: 'Enterprise vulnerability management.',
    pros: ['Industry standard', 'Comprehensive'],
    cons: ['Paid (Essentials is free limited)'],
  },
  {
    slug: 'hashcat',
    name: 'Hashcat',
    category: 'Cracking',
    level: 'Advanced',
    website: 'https://hashcat.net/hashcat/',
    overview: 'World\'s fastest password recovery tool.',
    features: ['GPU acceleration', 'Many hash modes'],
    installation: {
      linux: 'sudo apt install hashcat',
    },
    usage: {
       basics: [
         { title: 'Benchmark', command: 'hashcat -b' },
         { title: 'Crack MD5', command: 'hashcat -m 0 -a 0 hash.txt wordlist.txt' },
       ]
    },
    useCase: 'Recovering passwords from hashes.',
    pros: ['Extremely fast'],
    cons: ['Complex syntax'],
  },
  {
    slug: 'gobuster',
    name: 'Gobuster',
    category: 'Recon',
    level: 'Intermediate',
    website: 'https://github.com/OJ/gobuster',
    overview: 'Directory/File, DNS and VHost busting tool written in Go.',
    features: ['Fast', 'Recursion'],
    installation: {
      linux: 'sudo apt install gobuster',
    },
    usage: {
      basics: [
        { title: 'Dir bust', command: 'gobuster dir -u http://target.com -w wordlist.txt' },
      ],
    },
    useCase: 'Finding hidden web paths.',
    pros: ['Very fast (Go)'],
    cons: ['Noisy'],
  },
   {
    slug: 'nikto',
    name: 'Nikto',
    category: 'Web',
    level: 'Beginner',
    website: 'https://cirt.net/Nikto2',
    overview: 'Web server scanner which performs comprehensive tests against web servers.',
    features: ['Checks for outdated server versions', 'Known vulnerabilities'],
    installation: {
      linux: 'sudo apt install nikto',
    },
    usage: {
      basics: [
        { title: 'Scan', command: 'nikto -h http://target.com' },
      ],
    },
    useCase: 'Quick web server reconnaissance.',
    pros: ['Simple'],
    cons: ['False positives', 'Slow'],
  },
  {
    slug: 'ffuf',
    name: 'ffuf',
    category: 'Web',
    level: 'Intermediate',
    website: 'https://github.com/ffuf/ffuf',
    overview: 'Fast web fuzzer written in Go.',
    features: ['Fuzzing', 'Filtering'],
    installation: {
      linux: 'go install github.com/ffuf/ffuf@latest',
    },
    usage: {
       basics: [
         { title: 'Fuzz', command: 'ffuf -u http://target.com/FUZZ -w wordlist.txt' },
       ]
    },
    useCase: 'Discovery of content and parameters.',
    pros: ['Fast', 'Flexible'],
    cons: ['CLI only'],
  },
  {
    slug: 'dirb',
    name: 'Dirb',
    category: 'Web',
    level: 'Beginner',
    website: 'https://tools.kali.org/web-applications/dirb',
    overview: 'Web content scanner.',
    features: ['Dictionary based'],
    installation: {
      linux: 'sudo apt install dirb',
    },
    usage: {
       basics: [
         { title: 'Scan', command: 'dirb http://target.com' },
       ]
    },
    useCase: 'Finding web directories.',
    pros: ['Simple'],
    cons: ['Slower than gobuster/ffuf'],
  },
  {
    slug: 'netcat',
    name: 'Netcat',
    category: 'Networking',
    level: 'Intermediate',
    website: 'http://netcat.sourceforge.net/',
    overview: 'The Swiss army knife of networking.',
    features: ['Port scanning', 'File transfer', 'Backdoors'],
    installation: {
      linux: 'sudo apt install netcat',
    },
    usage: {
      basics: [
         { title: 'Listen', command: 'nc -lvnp 4444' },
         { title: 'Connect', command: 'nc target.com 4444' },
      ]
    },
    useCase: 'Debugging, reverse shells.',
    pros: ['Versatile', 'Installed everywhere'],
    cons: ['No encryption (use socat/ncat)'],
  },
  {
    slug: 'socat',
    name: 'Socat',
    category: 'Networking',
    level: 'Advanced',
    website: 'http://www.dest-unreach.org/socat/',
    overview: 'Multipurpose relay (SOcket CAT).',
    features: ['Encrypted connections', 'Port forwarding'],
    installation: { linux: 'sudo apt install socat' },
    usage: { basics: [{ title: 'Forward', command: 'socat TCP-LISTEN:80,fork TCP:target:80' }] },
    useCase: 'Complex pivoting and relaying.',
  },
  {
    slug: 'searchsploit',
    name: 'Searchsploit',
    category: 'Exploit',
    level: 'Beginner',
    website: 'https://www.exploit-db.com/searchsploit',
    overview: 'Command line search tool for Exploit-DB.',
    features: ['Offline search'],
    installation: { linux: 'sudo apt install exploitdb' },
    usage: {
        basics: [{ title: 'Search', command: 'searchsploit apache 2.4' }]
    },
    useCase: 'Finding public exploits.',
  },
  {
    slug: 'mimikatz',
    name: 'Mimikatz',
    category: 'Post-Exploitation',
    level: 'Advanced',
    website: 'https://github.com/gentilkiwi/mimikatz',
    overview: 'A tool to extract plaintexts passwords, hash, PIN code and kerberos tickets from memory.',
    features: ['Pass-the-hash', 'Golden Ticket'],
    installation: { windows: 'Download binary (Defenders hate it)' },
    usage: {
      basics: [{ title: 'Dump creds', command: 'sekurlsa::logonpasswords' }]
    },
    useCase: 'Windows lateral movement.',
  },
    {
    slug: 'responder',
    name: 'Responder',
    category: 'Post-Exploitation',
    level: 'Intermediate',
    website: 'https://github.com/lgandx/Responder',
    overview: 'LLMNR, NBT-NS and MDNS poisoner.',
    features: ['Credential harvesting', 'Relaying'],
    installation: { linux: 'git clone ...' },
    usage: {
        basics: [{ title: 'Start', command: 'python3 Responder.py -I eth0' }]
    },
    useCase: 'Capturing hashes on a LAN.',
  },
  {
    slug: 'bloodhound',
    name: 'BloodHound',
    category: 'Post-Exploitation',
    level: 'Advanced',
    website: 'https://github.com/BloodHoundAD/BloodHound',
    overview: 'Active Directory trust relationship visualization.',
    features: ['Graph theory', 'Attack path analysis'],
    installation: { linux: 'sudo apt install bloodhound' },
    usage: { basics: [{ title: 'Run', command: 'neo4j console && bloodhound' }] },
    useCase: 'Mapping AD paths to Domain Admin.',
  },
  {
    slug: 'crackmapexec',
    name: 'CrackMapExec',
    category: 'Post-Exploitation',
    level: 'Intermediate',
    website: 'https://github.com/Porchetta-Industries/CrackMapExec',
    overview: 'Swiss army knife for pentesting networks.',
    features: ['Password spraying', 'Enumeration'],
    installation: { linux: 'pip install crackmapexec' },
    usage: { basics: [{ title: 'Spray', command: 'cme smb 192.168.1.0/24 -u users.txt -p Password123' }] },
    useCase: 'Large scale AD auditing.',
  },
  {
     slug: 'impacket',
     name: 'Impacket',
     category: 'Networking',
     level: 'Advanced',
     website: 'https://github.com/fortra/impacket',
     overview: 'Collection of Python classes for working with network protocols.',
     features: ['psexec', 'smbclient', 'secretsdump'],
     installation: { linux: 'pip install impacket' },
     usage: { basics: [{ title: 'psexec', command: 'psexec.py user@target' }] },
     useCase: 'Low level protocol interaction.',
  },
  {
      slug: 'commix',
      name: 'Commix',
      category: 'Web',
      level: 'Intermediate',
      website: 'https://commixproject.com/',
      overview: 'Automated all-in-one OS command injection and exploitation tool.',
      features: ['Command injection'],
      installation: { linux: 'sudo apt install commix' },
      usage: { basics: [{ title: 'Scan', command: 'commix --url="http://target.com?id=1"' }] },
      useCase: 'Testing for command injection.',
  },
  {
      slug: 'wpscan',
      name: 'WPScan',
      category: 'Web',
      level: 'Beginner',
      website: 'https://wpscan.com/',
      overview: 'WordPress vulnerability scanner.',
      features: ['Plugin enumeration', 'User enumeration'],
      installation: { linux: 'gem install wpscan' },
      usage: { basics: [{ title: 'Scan', command: 'wpscan --url http://target.com' }] },
      useCase: 'Auditing WordPress sites.',
  },
  {
      slug: 'amass',
      name: 'Amass',
      category: 'Recon',
      level: 'Intermediate',
      website: 'https://github.com/owasp-amass/amass',
      overview: 'In-depth attack surface mapping and asset discovery.',
      features: ['DNS enumeration', 'Scraping'],
      installation: { linux: 'snap install amass' },
      usage: { basics: [{ title: 'Enum', command: 'amass enum -d target.com' }] },
      useCase: 'Large scale recon.',
  },
   {
      slug: 'sublist3r',
      name: 'Sublist3r',
      category: 'Recon',
      level: 'Beginner',
      website: 'https://github.com/aboul3la/Sublist3r',
      overview: 'Fast subdomains enumeration tool.',
      features: ['OSINT', 'Search engines'],
      installation: { linux: 'git clone ...' },
      usage: { basics: [{ title: 'Scan', command: 'python sublist3r.py -d target.com' }] },
      useCase: 'Subdomain discovery.',
   },
   {
       slug: 'maltego',
       name: 'Maltego',
       category: 'Recon',
       level: 'Intermediate',
       website: 'https://www.maltego.com/',
       overview: 'Graphical link analysis tool for OSINT.',
       features: ['Visual graphs', 'Transforms'],
       installation: { windows: 'Installer' },
       usage: { basics: [{ title: 'Graph', command: 'Drag and drop entities' }] },
       useCase: 'Visualizing relationships.',
   },
   {
       slug: 'shodan',
       name: 'Shodan',
       category: 'Recon',
       level: 'Beginner',
       website: 'https://www.shodan.io/',
       overview: 'Search engine for Internet-connected devices.',
       features: ['IoT search', 'Vulnerability search'],
       installation: { linux: 'pip install shodan' },
       usage: { basics: [{ title: 'CLI', command: 'shodan search apache' }] },
       useCase: 'Passive recon.',
   },
   {
       slug: 'cyberchef',
       name: 'CyberChef',
       category: 'Analysis',
       level: 'Beginner',
       website: 'https://gchq.github.io/CyberChef/',
       overview: 'The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.',
       features: ['Base64', 'Hex', 'Decoding'],
       installation: { web: 'Browser based' },
       usage: { basics: [{ title: 'Bake', command: 'Drag operations' }] },
       useCase: 'Data decoding and transformation.',
   }];

export function getToolDetail(slug: string): ToolDetail | undefined {
  return toolDetails.find(t => t.slug === slug);
}
