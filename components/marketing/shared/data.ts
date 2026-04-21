// Unsplash portraits — Unsplash License (commercial use permitted)
export const AVATARS = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces',
]

export const POLAROID_BEFORE =
  'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=600&h=750&fit=crop'
export const POLAROID_AFTER =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=750&fit=crop'

export const NAV_ITEMS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/articles' },
]

export const MARQUEE_ITEMS = [
  '✨ no more sleepless nights',
  '🛡️ forensic-level protection',
  '🔍 subscriber-level forensics',
  '🚫 DMCA on autopilot',
  '⚡ takedowns actioned instantly',
  '💬 real humans, named agents',
  '🤖 AI-powered protection',
]

export const EMPATHY_CARDS = [
  {
    emoji: '😮‍💨',
    title: "You found your drop on Telegram. For free.",
    body: "A fan DM'd you the link. Or you found it yourself at 2am. That sinking, violated feeling? It's real, and you're allowed to be furious.",
  },
  {
    emoji: '😤',
    title: "You've sent DMCAs that went nowhere.",
    body: "Copy the URL. Fill out the form. Wait three weeks. Watch it reappear an hour later. You're a creator, not an IP lawyer.",
  },
  {
    emoji: '🥺',
    title: "You don't know who's doing this to you.",
    body: "Is it a subscriber? An ex? A leak site scraper? Not knowing keeps you up at night — especially when it keeps happening.",
  },
]

export const HOW_STEPS = [
  {
    n: '01',
    emoji: '🧬',
    title: 'Upload & fingerprint',
    body: 'Drop your content in. Every subscriber who downloads gets their own invisible watermark. Takes 30 seconds.',
    note: 'fully automatic',
  },
  {
    n: '02',
    emoji: '👀',
    title: 'We scan. 24/7.',
    body: "500+ leak sites, Telegram channels, Discord, Mega, Reddit, forums. Every 30 minutes. You do nothing.",
    note: 'while you sleep',
  },
  {
    n: '03',
    emoji: '🔎',
    title: 'Leak found → we trace it.',
    body: "The watermark tells us exactly which subscriber released it. You get their account, email, and when they shared it.",
    note: 'caught red-handed',
  },
  {
    n: '04',
    emoji: '💌',
    title: 'Gone in hours.',
    body: "Automated DMCAs filed the second a leak is found + a real human who chases platforms until it's actually removed.",
    note: 'receipts included',
  },
]

export const STORIES = [
  {
    name: 'Maya R.',
    role: 'OnlyFans · top 0.5%',
    avatar: AVATARS[0],
    spice: '🌶️🌶️🌶️',
    quote:
      "I was losing maybe $4k a month to Telegram resellers. Three weeks on Privly, that was zero. They caught a paying subscriber selling my bundle to a group of 14k people. Banned. Refunded. Revenue up 22% this quarter just from plugged leaks.",
    metric: '+$4,200/mo recovered',
    ago: '3 months in',
  },
  {
    name: 'Jess K.',
    role: 'Fansly · 200k subs',
    avatar: AVATARS[2],
    spice: '🌶️🌶️',
    quote:
      "What sold me is that a real person actually replied to my email. Her name is Dana. She texts me when she's working on my case. It doesn't feel like a SaaS tool — it feels like having a lawyer on retainer who cares.",
    metric: 'named agent + Slack',
    ago: '8 months in',
  },
  {
    name: 'A. (verified)',
    role: 'Indie · $40k/mo',
    avatar: AVATARS[3],
    spice: '🌶️🌶️🌶️🌶️',
    quote:
      "I've used three other services. Privly is the first one that actually identifies the leaker. Watching someone get banned mid-subscription, knowing exactly why, is the most satisfied I've ever been paying $49 a month.",
    metric: '17 leakers identified',
    ago: '6 months in',
  },
]

export const FEATURES_LIST = [
  { emoji: '🔍', title: 'Always watching', body: "Our bots (and real humans) scan 500+ leak sites every 30 minutes. Even the ones you've never heard of." },
  { emoji: '🔐', title: 'Invisible watermarks', body: "Every file gets a unique fingerprint for each subscriber. They can't see it. We can. So can the law." },
  { emoji: '⚡', title: 'Instant takedowns', body: "Automated DMCAs go out the second we find something. No queues, no delays — actioned immediately." },
  { emoji: '🎯', title: 'Find the leaker', body: "Decode the watermark → know exactly which subscriber account shared it. Refund. Ban. Blacklist." },
  { emoji: '🛡️', title: 'Private vault', body: "AES-256 encrypted storage with timestamped proof of ownership. We never view. We never share. Yours forever." },
  { emoji: '🤖', title: 'Deepfake detection', body: "AI-generated impersonations get caught before they spread. Protect your face, not just your files." },
  { emoji: '📬', title: 'Google de-indexing', body: "We don't just remove the host — we make sure it disappears from search results too." },
  { emoji: '💬', title: 'A real person, yours', body: "Named protection agent. Slack, email, or WhatsApp. They know your case, your content, your boundaries." },
  { emoji: '🤐', title: 'Zero judgment, ever', body: "Our team comes from this industry. No lectures, no weird questions, no raised eyebrows. Just protection." },
  { emoji: '🌐', title: 'Every platform', body: "Telegram, Reddit, Discord, Mega, cyberlockers, tube sites, image boards, Twitter/X. If it's online, we cover it." },
  { emoji: '💜', title: 'Creator-first, always', body: "Built and staffed by people who come from the industry. No judgment, no lectures, just protection." },
]

export const COMPARE_ROWS: [string, boolean, boolean, boolean][] = [
  ['AI-powered leak detection', true, false, false],
  ['Real human protection agent', true, false, false],
  ['Invisible watermarks → leaker ID', true, false, false],
  ['Telegram, Discord, Mega coverage', true, true, false],
  ['Takedowns actioned instantly', true, false, false],
  ['Deepfake & impersonation detection', true, false, false],
  ['Unlimited content + takedowns', true, false, true],
  ['No annual contract', true, false, false],
  ['Registered DMCA + EU Flagger', true, true, false],
]

export const PRIVACY_CARDS = [
  ['🤐', 'Zero judgment', "Our team comes from this industry. No lectures, no weird questions, no raised eyebrows. Ever."],
  ['🔐', 'AES-256 zero-knowledge vault', "Your content is encrypted before it leaves your device. We physically can't view it."],
  ['🕶️', 'Anonymous agents', "Our protection agents never see your content. They work from hashes and metadata only."],
  ['🗑️', 'Delete anytime', "One click. Everything gone — watermarks, files, case history. No retention, no export."],
]

export const TRIAL_FEATURES = [
  ['Watermark up to 3 files', '💜'],
  ['Content Vault (up to 3 uploads)', '🔐'],
  ['1 leak scan', '🔍'],
  ['Deepfake detection', '🤖'],
  ['Explore the full dashboard', '✨'],
]

export const PRICING_FEATURES = [
  ['Unlimited content + watermarks', '💜'],
  ['500+ platforms scanned 24/7', '🔍'],
  ['Unlimited DMCA takedowns', '📬'],
  ['Your own named protection agent', '💬'],
  ['Slack / WhatsApp / email support', '📱'],
  ['Google de-indexing included', '🌐'],
  ['Legal escalation when needed', '⚖️'],
  ['Deepfake & impersonation detection', '🤖'],
]

export const FAQ_ITEMS = [
  {
    q: "I do adult content — does that matter?",
    a: "Only in that we built this for you specifically. Our whole team comes from the adult creator industry. Zero judgment, and we know the platforms you care about (Telegram, Mega, tube sites, niche forums) better than any generic DMCA service.",
  },
  {
    q: "I don't know where my content was leaked. Can you still help?",
    a: "Yes — that's literally what we're for. You don't have to find anything. We scan for you. Most creators find out about leaks from our dashboard before they'd ever have spotted them.",
  },
  {
    q: "Do I have to upload my actual content?",
    a: "Not always, but it helps. Uploaded content is encrypted end-to-end — we can't view it, your agent can't view it, and it never leaves our vault. Most creators upload; some only send us URLs and descriptions. Either works.",
  },
  {
    q: "Is there really a human on the other end?",
    a: "Yes. Every account gets a named protection agent on day one. You'll know their name. They'll know your content, your boundaries, your preferences. Weird, we know. It's how we think this should work.",
  },
  {
    q: "What if the leaker is an ex, not a subscriber?",
    a: "Forensic watermarking catches anyone who had access — exes, past collaborators, leaked account sessions. If the content is pre-watermark and has no identifiable source, we still take it down and try to de-anonymize the uploader legally.",
  },
  {
    q: "Can I cancel mid-month?",
    a: "Yes, any time, no questions, no retention call. Just hit cancel and you're done — no hoops, no retention teams.",
  },
]

export const FOOTER_GROUPS = [
  {
    heading: 'The product',
    links: [
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'By platform',
    links: [
      { label: 'OnlyFans', href: '/onlyfans' },
      { label: 'Fansly', href: '/fansly' },
      { label: 'Patreon', href: '/patreon' },
      { label: 'Chaturbate', href: '/chaturbate' },
      { label: 'Manyvids', href: '/manyvids' },
      { label: 'TikTok', href: '/tiktok' },
      { label: 'Instagram', href: '/instagram' },
      { label: 'Reddit', href: '/reddit' },
    ],
  },
  {
    heading: 'Remove from',
    links: [
      { label: 'Erome', href: '/remove-from-erome' },
      { label: 'Bunkr', href: '/remove-from-bunkr' },
      { label: 'Coomer', href: '/remove-from-coomer' },
      { label: 'Simpcity', href: '/remove-from-simpcity' },
      { label: 'Cyberdrop', href: '/remove-from-cyberdrop' },
      { label: 'Telegram', href: '/remove-from-telegram' },
      { label: 'Google', href: '/remove-from-google' },
      { label: 'MrDeepfakes', href: '/remove-from-mrdeepfakes' },
      { label: 'ThotHub', href: '/remove-from-thothub' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'Privly vs Rulta', href: '/privly-vs-rulta' },
      { label: 'Privly vs Ceartas', href: '/privly-vs-ceartas' },
      { label: 'Privly vs BranditScan', href: '/privly-vs-branditscan' },
      { label: 'Privly vs CopyrightShark', href: '/privly-vs-copyrightshark' },
      { label: 'Privly vs Takedowns.ai', href: '/privly-vs-takedowns-ai' },
      { label: 'Privly vs OnlyGuard', href: '/privly-vs-onlyguard' },
      { label: 'Privly vs RemoveTech', href: '/privly-vs-removetech' },
      { label: 'Privly vs Bruqi', href: '/privly-vs-bruqi' },
    ],
  },
  {
    heading: 'For you',
    links: [
      { label: 'Articles & guides', href: '/articles' },
      { label: 'Free DMCA generator', href: '/tools/dmca-generator' },
      { label: 'State of leaks 2026', href: '/report/content-leaks-2026' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    heading: 'The company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]
