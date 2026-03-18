export interface GlossaryEntry {
  term: string;
  slug: string;
  definition: string;
  extendedDescription: string;
  relatedTerms: string[];
  category: string;
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: "DMCA Takedown",
    slug: "dmca-takedown",
    definition:
      "A legal notice filed under the Digital Millennium Copyright Act to demand removal of copyrighted content from hosting platforms, CDNs, and search engines.",
    extendedDescription: `A DMCA takedown is a formal legal notification process that requires web hosting providers, content delivery networks, domain registrars, and search engines to remove infringing copyrighted content within 24-48 hours. The process is governed by the Digital Millennium Copyright Act, which provides creators with legal protection against unauthorized reproduction and distribution of their work.

When filing a DMCA takedown, you must identify the specific infringing content, provide evidence of copyright ownership, declare under penalty of perjury that you are the copyright holder, and include contact information. The notice must be submitted to the platform's designated copyright agent. Effective enforcement targets not just the leak site operator but also the infrastructure providers (hosting, CDN, domain registrar, and search engines), which dramatically increases removal success rates.

Privly's automated DMCA filing system manages the entire process—from detection through confirmed removal tracking. This multi-target approach achieves 96% takedown success rates compared to 40-50% for manual DIY notices, because it removes the content at the infrastructure level rather than relying on individual site operators to comply.`,
    relatedTerms: ["dmca-counter-notice", "google-deindexing", "content-piracy"],
    category: "Legal",
  },
  {
    term: "Reverse Image Search",
    slug: "reverse-image-search",
    definition:
      "A technique that uses AI and fingerprinting to find copies of an image across the internet, even when the image has been cropped, compressed, or edited.",
    extendedDescription: `Reverse image search identifies and locates copies of your content across the web by analyzing the visual characteristics of an image rather than searching by name or text. Tools like Google Lens, TinEye, and Yandex compare an image's visual features—color distribution, object patterns, layout—against billions of indexed images to find matches.

For content creators, reverse image search is critical for discovering leaked content, especially when thumbnails or screenshots are posted without identifying information. A single leaked video thumbnail can reveal dozens of mirror sites where your full content has been rehosted. The technology is particularly effective at finding content that has been slightly cropped, compressed, or watermarked, which would defeat simple URL matching.

Privly integrates reverse image search into its continuous monitoring system, automatically scanning for your photos and video thumbnails across the web. When copies are found, the platform immediately files DMCA takedowns with hosting providers and Google to remove the images from search results and prevent further distribution. This prevents casual discovery while more comprehensive takedown efforts target the underlying content.`,
    relatedTerms: [
      "content-fingerprinting",
      "perceptual-hashing",
      "google-deindexing",
    ],
    category: "Detection",
  },
  {
    term: "Content Fingerprinting",
    slug: "content-fingerprinting",
    definition:
      "A technology that creates a unique mathematical identifier for digital content that persists even after compression, cropping, or re-encoding.",
    extendedDescription: `Content fingerprinting is a sophisticated matching technology that creates a permanent, unchangeable identifier for your content. Unlike simple file hashing (which changes if a single byte is altered), fingerprinting uses perceptual analysis to identify content even after it has been compressed, cropped, re-encoded, or partially obscured.

Digital fingerprints work by analyzing the distinctive characteristics of content—patterns, colors, shapes—and creating a numerical signature that remains constant even if the file is modified. This is fundamentally different from watermarking, which visibly or invisibly marks the content itself. Fingerprints exist independently and can identify your content across the internet regardless of whether it's been altered.

Privly's fingerprinting system enables automated leak detection across 500+ platforms. When your OnlyFans content is uploaded to a leak site, even in compressed or cropped form, Privly's fingerprint database instantly recognizes it and triggers automated DMCA takedown filing. This is far more effective than manual monitoring because it catches leaks within hours and eliminates false negatives from edited or re-encoded files.`,
    relatedTerms: [
      "perceptual-hashing",
      "digital-watermarking",
      "forensic-watermarking",
    ],
    category: "Technology",
  },
  {
    term: "Deepfake Detection",
    slug: "deepfake-detection",
    definition:
      "AI technology that identifies synthetic or artificially-generated video and audio that impersonates a real person using their likeness or voice.",
    extendedDescription: `Deepfake detection uses machine learning to identify whether video or audio content has been artificially generated or manipulated using AI techniques like generative adversarial networks (GANs) or neural rendering. As deepfake technology becomes increasingly accessible, malicious actors can create convincing fake videos of creators in compromising situations, causing severe reputational and financial damage.

Detection systems analyze digital artifacts that remain after deepfake generation—inconsistencies in blinking patterns, skin texture anomalies, audio-visual mismatches, and other imperceptible flaws that indicate synthetic generation. The most advanced detection uses forensic analysis of pixel-level data, temporal consistency checks, and neural network classifiers trained on millions of deepfakes.

Privly's deepfake detection monitors the internet for synthetic content impersonating creators using their photos or video. When impersonation deepfakes are detected, Privly files immediate takedowns and can escalate to legal action if needed. This is critical because deepfakes threaten to destroy creator brands and income in ways that traditional content protection cannot address—the content is fabricated, not stolen.`,
    relatedTerms: [
      "impersonation-detection",
      "digital-watermarking",
      "content-piracy",
    ],
    category: "AI & Security",
  },
  {
    term: "Digital Watermarking",
    slug: "digital-watermarking",
    definition:
      "The process of embedding visible or invisible identifying marks into digital content to prove ownership and deter unauthorized sharing.",
    extendedDescription: `Digital watermarking embeds ownership information directly into image or video files. Visible watermarks are graphics overlaid on content (like logos or text), while invisible watermarks embed data in the pixel values that are imperceptible to the human eye but detectable by software.

Visible watermarks can be cropped or edited out by sophisticated actors, but they effectively deter casual sharing by making content less attractive for redistribution. Invisible (forensic) watermarks survive compression, re-encoding, and format conversion, making them more robust for identifying leakers and proving ownership in legal disputes.

For creators, watermarking serves dual purposes: prevention (discouraging sharing due to visible marks) and enforcement (forensic watermarks identify which subscriber leaked content). Privly embeds invisible forensic watermarks into creator content, allowing identification of the specific leaker when content appears on unauthorized platforms. This creates accountability among subscribers and provides evidence for subscriber bans or legal action.`,
    relatedTerms: ["forensic-watermarking", "content-fingerprinting", "leak-site"],
    category: "Prevention",
  },
  {
    term: "Forensic Watermarking",
    slug: "forensic-watermarking",
    definition:
      "Invisible watermarking technology that embeds unique subscriber identifiers into content, allowing creators to identify exactly which subscriber leaked their material.",
    extendedDescription: `Forensic watermarking is an advanced form of invisible watermarking specifically designed to trace leaks back to their source. Unlike standard invisible watermarks that only prove ownership, forensic watermarks encode unique identifiers for each subscriber into the content's pixel data. When that subscriber's copy appears on a leak site, the forensic watermark reveals their subscriber ID.

This technology survives aggressive compression, file format conversion, screenshot capture, and screen recording—it persists in the fundamental pixel data that defines the image or video. When the watermarked content is leaked and found on a piracy site, forensic analysis extracts the subscriber ID, allowing creators to ban the leaker, refund the leak-originating subscriber, and potentially pursue legal action.

Privly applies forensic watermarks to all content in its Content Vault, creating a permanent record linking each file to each subscriber. When your content is found on a leak site, Privly's forensic analysis immediately identifies the leaker's subscriber ID, enabling swift enforcement action and accountability. This transforms subscribers from anonymous account numbers into individually accountable users, dramatically reducing unauthorized sharing.`,
    relatedTerms: [
      "digital-watermarking",
      "content-fingerprinting",
      "leak-site",
    ],
    category: "Prevention",
  },
  {
    term: "Perceptual Hashing",
    slug: "perceptual-hashing",
    definition:
      "A hashing algorithm that creates identical signatures for similar or slightly modified versions of the same image or video, unlike traditional hashing which requires exact file matches.",
    extendedDescription: `Perceptual hashing applies cryptographic hash functions to the visual features of media rather than to the raw file data. While traditional MD5 or SHA-256 hashing produces completely different values if even a single byte changes, perceptual hashing recognizes that two visually similar images should produce the same or very similar hash values.

Common perceptual hashing methods include Average Hash (dividing an image into blocks and comparing brightness), Difference Hash (comparing adjacent pixels), and Wavelet Hash (analyzing frequency components). These algorithms are specifically designed to tolerate compression, format conversion, minor cropping, and resolution changes—all common modifications attackers apply to stolen content.

Privly uses perceptual hashing as the foundation of its leak detection system. When you upload OnlyFans content to Privly's vault, the system creates perceptual hashes that match the original and all anticipated variants. The system then continuously scans the internet for content matching these hashes. If your video is leaked in compressed form or with cropped thumbnails, perceptual hashing identifies it as your content and triggers automated takedown procedures.`,
    relatedTerms: [
      "content-fingerprinting",
      "reverse-image-search",
      "leak-site",
    ],
    category: "Technology",
  },
  {
    term: "Content Piracy",
    slug: "content-piracy",
    definition:
      "The unauthorized reproduction, distribution, or sale of copyrighted digital content without permission or compensation to the original creator.",
    extendedDescription: `Content piracy is the illegal distribution of copyrighted material. For creators, piracy means subscribers or other bad actors capturing content (screenshots, screen recordings, video capture) and sharing it on leak sites, file-sharing platforms, forums, or social media without authorization or compensation.

The piracy ecosystem for adult content is highly organized. Leak sites aggregate stolen content from thousands of creators, tube sites (Pornhub, XVideos, xHamster) host pirated material alongside user-generated content, file-sharing services (Mega, MediaFire, Google Drive) host single or bulk stolen content drops, forums and Reddit discuss and share links to pirated content, and Telegram channels distribute stolen content to subscribers—often with associated communities.

For individual creators, piracy causes catastrophic financial damage. Studies show that 23% of adult content creators have experienced significant unauthorized distribution, losing an average of $4,500/month per creator. The top OnlyFans creators lose over $50,000 monthly to piracy. The legal foundation for combating piracy is copyright law, with DMCA takedowns as the primary enforcement mechanism. Privly automates this process, continuously scanning 500+ piracy platforms and filing takedowns that achieve 96% success rates.`,
    relatedTerms: ["leak-site", "dmca-takedown", "content-vault"],
    category: "Legal",
  },
  {
    term: "Leak Site",
    slug: "leak-site",
    definition:
      "A website that aggregates and distributes stolen or pirated content without permission, typically operating to profit from advertising or user subscriptions.",
    extendedDescription: `Leak sites are dedicated platforms that aggregate and distribute stolen adult content. Some operate as open indexing sites where anyone can browse and download, others require subscription for access, and many operate on dark web domains to avoid legal action. Common leak sites specialize in OnlyFans content, Patreon content, or content from other subscription platforms.

Leak sites generate revenue through multiple channels: advertising (display ads shown on pages), premium subscriptions (users pay to access higher quality or exclusive content), and cryptocurrency payments (avoiding payment processor prosecution). This economics make leak sites highly profitable even with modest traffic, and many operators simply abandon sites when legal notices arrive, only to relaunch under new domains.

Privly's monitoring covers 500+ known leak sites, plus emerging new ones. When your content appears on any tracked leak site, Privly's system automatically files DMCA takedowns with the hosting provider, CDN, domain registrar, and Google simultaneously. Multi-target enforcement removes content faster and more completely than single-site notices. Additionally, Privly tracks content reappearance and re-files takedowns when sites are resurrected under new domains.`,
    relatedTerms: [
      "content-piracy",
      "dmca-takedown",
      "google-deindexing",
      "dmca-counter-notice",
    ],
    category: "Piracy",
  },
  {
    term: "DMCA Counter-Notice",
    slug: "dmca-counter-notice",
    definition:
      "A legal response filed by content uploaders claiming fair use or ownership, triggering a 10-14 day waiting period before DMCA takedown removal is finalized.",
    extendedDescription: `When you file a DMCA takedown, the content uploader has the right to file a counter-notice claiming they own the content or that their use qualifies as fair use (parody, commentary, education, etc.). A valid counter-notice stops the removal process and initiates a 10-14 day waiting period. Only after this period expires, or if the copyright holder files litigation, will the content actually be removed.

Counter-notices are commonly filed by leak site operators and malicious uploaders using false ownership claims. They rarely succeed because proving ownership or fair use is extremely difficult—parody and commentary uses cannot include the full original work, especially in adult content contexts where no legitimate fair use claim typically exists.

For creators, counter-notices are minor obstacles in comprehensive enforcement. Privly tracks counter-notices and automatically handles the waiting periods. For high-value content, Privly can escalate to cease-and-desist letters or pursue civil litigation to force removal despite counter-notices. The existence of counter-notices actually strengthens legal cases, as they create documented evidence of intentional infringement.`,
    relatedTerms: ["dmca-takedown", "content-piracy", "copyright"],
    category: "Legal",
  },
  {
    term: "Google De-indexing",
    slug: "google-deindexing",
    definition:
      "The process of removing web pages from Google Search results through DMCA notices or manual removal requests, preventing discovery of stolen content.",
    extendedDescription: `Even if leaked content is removed from the hosting site, it often remains indexed in Google Search results. People searching for creator names, content descriptions, or other identifiers find leaked versions through search results, driving traffic to remaining copies and other leak sites.

Google operates a dedicated copyright removal system where you can file DMCA notices targeting search results directly. Google processes these requests within 24-48 hours, removing the page from search results and reducing discoverability of leaked content. This is critical because search traffic is often the primary discovery mechanism for leak site users.

Privly includes Google de-indexing in its automated DMCA system. When leaked content is detected, Privly simultaneously files takedowns with hosting providers AND submits Google Search result removal requests. This dual approach removes the content from both the actual hosting locations AND from discovery through the world's largest search engine, cutting off multiple distribution and discovery vectors.`,
    relatedTerms: ["dmca-takedown", "leak-site", "reverse-image-search"],
    category: "Enforcement",
  },
  {
    term: "Certificate Transparency",
    slug: "certificate-transparency",
    definition:
      "A system that logs all SSL/TLS certificates issued for domains, making it possible to identify when leak sites re-register under new domains after takedowns.",
    extendedDescription: `Certificate Transparency (CT) is a public system maintained by Google, Apple, and other certificate authorities that logs every SSL certificate issued for every domain. This creates a public record of all domain registrations and their certificates, preventing certificate authorities from issuing certificates secretly.

For content creators and enforcement professionals, Certificate Transparency is valuable for tracking when leak sites re-emerge under new domains after takedowns. When a leaked-content site receives takedowns, operators often abandon the domain and register a new one, relaunching under a different name. CT logs reveal these new registrations, allowing enforcement to continue against the relaunched site.

Privly monitors Certificate Transparency logs and tracks domain registration patterns associated with known leak site operators. When a previously-enforced leak site re-launches under a new domain, Privly identifies it and automatically escalates enforcement. This prevents operators from simply abandoning domain names and relaunching indefinitely—each relaunch adds additional legal records supporting claims of intentional infringement.`,
    relatedTerms: ["leak-site", "dmca-takedown", "google-deindexing"],
    category: "Technology",
  },
  {
    term: "Impersonation Detection",
    slug: "impersonation-detection",
    definition:
      "Technology that monitors the internet for accounts, profiles, or content falsely claiming to be from a creator, including deepfakes and fake accounts.",
    extendedDescription: `Impersonation is distinct from traditional content piracy. Rather than stealing your actual content, impersonators create fake accounts, deepfake videos, or other content falsely presenting as you. This damages your brand, diverts revenue to fraudsters, and can destroy creator reputation if audiences cannot distinguish between real and fake content.

Impersonation detection uses multiple technologies: reverse image search to find photos used in fake accounts, facial recognition to identify when your photos are used in other profiles, deepfake detection to identify synthetic videos impersonating you, and account monitoring to track suspicious activity on platforms under your name.

Privly's impersonation detection continuously scans social media, OnlyFans, other creator platforms, and the wider internet for accounts, profiles, or content falsely claiming to be from you. When impersonators are detected, Privly files takedowns and can escalate to platform Trust & Safety teams for account suspension. For deepfakes specifically, Privly can file DMCA notices claiming copyright infringement (since deepfakes use your likeness without permission) to force removal even from platforms without explicit anti-impersonation policies.`,
    relatedTerms: ["deepfake-detection", "content-piracy", "digital-watermarking"],
    category: "Security",
  },
  {
    term: "Content Vault",
    slug: "content-vault",
    definition:
      "A secure cloud storage system that preserves original content with forensic watermarks and fingerprints to prove ownership and enable leak identification.",
    extendedDescription: `A Content Vault is a secure, encrypted repository where creators upload original, un-watermarked content. The vault system then applies forensic watermarks with subscriber identifiers, creates digital fingerprints for leak detection, and maintains timestamped records proving ownership and creation date.

The vault serves multiple critical functions: it proves you created the content (via timestamped storage), it enables forensic watermark application to all distributed copies, it maintains backup copies in case original files are lost, and it creates forensic evidence for DMCA disputes. Leak site operators cannot claim ownership of content that predates their sites if vault records prove you created it first.

Privly's Content Vault encrypts all uploaded content, applies forensic watermarks to every file, and creates fingerprint databases for automated leak detection. The vault is essential for high-value content creators because it transforms content protection from reactive (removing leaks after they happen) to proactive (proving ownership and identifying leakers before major distribution occurs). For legal disputes and DMCA counter-notices, Content Vault records provide undisputable proof of ownership.`,
    relatedTerms: [
      "forensic-watermarking",
      "content-fingerprinting",
      "dmca-takedown",
    ],
    category: "Prevention",
  },
  {
    term: "File Hosting Abuse",
    slug: "file-hosting-abuse",
    definition:
      "The misuse of file-hosting services (Google Drive, Mega, MediaFire) to distribute copyrighted content without permission by uploading and sharing links.",
    extendedDescription: `File-hosting services like Google Drive, Mega, MediaFire, and Dropbox were designed for legitimate file sharing but are frequently abused to distribute pirated content. A single upload link can be shared across forums, Telegram channels, Reddit, and other platforms, enabling mass distribution with minimal detection risk.

File-hosting abuse is particularly problematic because: (1) the platforms are legitimate, reducing abuse detection, (2) accounts can be anonymous, complicating takedowns, (3) shared links don't require account registration, lowering barriers to access, and (4) links can be quickly recreated if removed. Additionally, file-hosting platforms are less aggressive in DMCA enforcement than dedicated leak sites, often requiring multiple takedown requests before content is removed.

Privly's monitoring system tracks file-hosting platforms for your content and files DMCA takedowns with the hosting providers. Because these are legitimate platforms with responsive legal teams, takedown success rates are typically 80-90%, higher than leak sites. However, because file-sharing links can be quickly regenerated, continuous monitoring is essential to catch new uploads of the same content.`,
    relatedTerms: ["content-piracy", "leak-site", "dmca-takedown"],
    category: "Piracy",
  },
];
