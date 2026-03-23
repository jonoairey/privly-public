'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  FileText,
  Copy,
  Download,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  workDescription: string;
  originalContentUrl: string;
  infringingUrls: string[];
  platformName: string;
}

const faqItems = [
  {
    q: 'What is a DMCA takedown notice?',
    a: 'A DMCA (Digital Millennium Copyright Act) takedown notice is a legal request to remove copyrighted content from the internet. It must be sent to the hosting provider, CDN, or platform where the infringing content is located. The recipient is legally required to act on valid notices within 10 business days.',
  },
  {
    q: 'Is this DMCA generator legally binding?',
    a: 'This tool generates a properly formatted DMCA notice that follows the statutory requirements under 17 U.S.C. § 512(c)(3). However, this is not legal advice. For complex copyright disputes or high-value claims, consult an attorney. The generated notice is as legally valid as one written manually.',
  },
  {
    q: 'What information do I need to file a DMCA notice?',
    a: 'You need: identification of the copyrighted work (title, description, or location), the exact URL(s) of the infringing content, your contact information, a good-faith statement that you believe the use is unauthorized, and a statement under penalty of perjury that the information is accurate. False statements in a DMCA notice can result in legal liability.',
  },
  {
    q: 'How long does it take to remove content with a DMCA notice?',
    a: 'Legally, the hosting provider has 10 business days to respond. In practice, major platforms like YouTube, Pornhub, and Google remove content within 24-48 hours for clear-cut cases. Smaller sites may take longer. Privly files notices with the hosting provider, CDN, domain registrar, and Google simultaneously for faster removal.',
  },
  {
    q: 'Can I file a DMCA notice myself, or do I need a lawyer?',
    a: 'You can absolutely file a DMCA notice yourself — no lawyer required. This generator creates a legally compliant notice. However, if your content is complex, high-value, or the infringer disputes the claim, professional help is valuable. Many copyright attorneys offer flat-fee DMCA filing services.',
  },
  {
    q: 'What if the infringing content is on a large platform like YouTube or Pornhub?',
    a: 'YouTube, Pornhub, XVideos, and other major platforms have dedicated copyright reporting forms in their settings. While you can send a formal DMCA notice to their legal department, using their built-in reporting tool is faster and more reliable. This generator is ideal for smaller sites without formal reporting systems.',
  },
  {
    q: 'Will the infringing site get my contact information?',
    a: 'Yes, the DMCA notice includes your contact information so the hosting provider can respond. However, your information goes to the hosting provider or legal department, not publicly. Some hosting providers keep DMCA notices confidential; others may share them with the site operator.',
  },
  {
    q: 'What happens if I file a false DMCA notice?',
    a: 'Filing a false DMCA notice can result in liability for damages, including the infringer\'s legal fees and court costs. This is why the notice requires a statement "under penalty of perjury." Only file notices for content you genuinely own and have not authorized.',
  },
];

export default function DMCAGeneratorPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    workDescription: '',
    originalContentUrl: '',
    infringingUrls: [''],
    platformName: '',
  });

  const [generatedNotice, setGeneratedNotice] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInfringingUrlChange = (index: number, value: string) => {
    const newUrls = [...formData.infringingUrls];
    newUrls[index] = value;
    setFormData((prev) => ({ ...prev, infringingUrls: newUrls }));
  };

  const addInfringingUrlField = () => {
    setFormData((prev) => ({
      ...prev,
      infringingUrls: [...prev.infringingUrls, ''],
    }));
  };

  const removeInfringingUrlField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      infringingUrls: prev.infringingUrls.filter((_, i) => i !== index),
    }));
  };

  const generateNotice = () => {
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const infringingUrlsList = formData.infringingUrls
      .filter((url) => url.trim())
      .map((url, idx) => `${idx + 1}. ${url}`)
      .join('\n');

    const notice = `DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) TAKEDOWN NOTICE

Date: ${today}

TO THE OWNER/OPERATOR OF ${formData.platformName}:

This letter is to notify you of infringement of copyrighted material on your website/platform. I am writing to request the immediate removal or disabling of access to the infringing content.

1. IDENTIFICATION OF COPYRIGHTED WORK

I am the copyright owner (or authorized to act on behalf of the copyright owner) of the following copyrighted work(s):

Title/Description of Work:
${formData.workDescription}

Location of Original Work:
${formData.originalContentUrl}

2. IDENTIFICATION OF INFRINGING MATERIAL

The infringing material is located at the following URL(s):

${infringingUrlsList}

3. STATEMENT OF GOOD FAITH BELIEF

I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or by law. I am not aware of any legal basis for the use of this material on your platform.

4. ACCURACY STATEMENT

I declare, under penalty of perjury, that the information in this notice is accurate and that I am authorized to act on behalf of the copyright owner. I understand that false statements may result in liability for damages, including costs and attorney's fees.

5. CONTACT INFORMATION

Name: ${formData.fullName}
Email: ${formData.email}
Date: ${today}

Signature: ${formData.fullName}

---

NOTES:
- This notice is submitted pursuant to 17 U.S.C. § 512(c) of the Digital Millennium Copyright Act.
- The copyright owner may pursue all available remedies under law for the unauthorized use of copyrighted material, including damages and attorney's fees.
- Upon receipt of this notice, you are required to act expeditiously to remove or disable access to the infringing material.
- Failure to comply may result in legal liability and potential loss of DMCA safe harbor protections.

END OF DMCA NOTICE`;

    setGeneratedNotice(notice);
    setShowPreview(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedNotice).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadAsFile = () => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedNotice)
    );
    element.setAttribute('download', 'DMCA_Takedown_Notice.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <FileText className="w-4 h-4" />
              Free Legal Tool
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Free{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DMCA Notice Generator
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Generate a legally compliant DMCA takedown notice in minutes. No lawyer
              required. Includes all required statutory elements for immediate
              enforcement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  document.getElementById('generator-form')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Create Your Notice
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
              >
                Automate DMCA Filing
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              ⚠️ This tool is for educational purposes. Consult legal counsel for complex
              disputes.
            </p>
          </div>
        </section>

        {/* Generator Form */}
        <section
          id="generator-form"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">DMCA Notice Information</h2>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Description of Work */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Description of Copyrighted Work *
                  </label>
                  <textarea
                    name="workDescription"
                    value={formData.workDescription}
                    onChange={handleInputChange}
                    placeholder="E.g., 'A series of 50 exclusive video clips and photos published on OnlyFans between January 2024 and present'"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Original Content URL */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    URL of Original Content *
                  </label>
                  <input
                    type="url"
                    name="originalContentUrl"
                    value={formData.originalContentUrl}
                    onChange={handleInputChange}
                    placeholder="https://onlyfans.com/yourprofile"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Platform/Site Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Platform/Site Name *
                  </label>
                  <input
                    type="text"
                    name="platformName"
                    value={formData.platformName}
                    onChange={handleInputChange}
                    placeholder="E.g., 'Leak Site Name' or 'Reddit.com'"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Infringing URLs */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    URL(s) of Infringing Content *
                  </label>
                  <p className="text-sm text-gray-400 mb-4">
                    Add each infringing URL separately
                  </p>
                  <div className="space-y-3">
                    {formData.infringingUrls.map((url, index) => (
                      <div key={index} className="flex gap-3">
                        <input
                          type="url"
                          value={url}
                          onChange={(e) =>
                            handleInfringingUrlChange(index, e.target.value)
                          }
                          placeholder={`https://example.com/infringing-content-${index + 1}`}
                          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        {formData.infringingUrls.length > 1 && (
                          <button
                            onClick={() => removeInfringingUrlField(index)}
                            className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={addInfringingUrlField}
                    className="mt-4 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium"
                  >
                    + Add Another URL
                  </button>
                </div>
              </div>

              <button
                onClick={generateNotice}
                disabled={
                  !formData.fullName ||
                  !formData.email ||
                  !formData.workDescription ||
                  !formData.originalContentUrl ||
                  !formData.platformName ||
                  !formData.infringingUrls[0]
                }
                className="w-full mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate DMCA Notice
              </button>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Generated DMCA Notice</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors font-medium"
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={downloadAsFile}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 max-h-96 overflow-y-auto font-mono text-sm text-gray-300 whitespace-pre-wrap break-words">
                  {generatedNotice}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-blue-300 flex gap-2">
                    <span className="flex-shrink-0 mt-0.5">ℹ️</span>
                    <span>
                      Send this notice to the website's legal/copyright department. For
                      major platforms, use their copyright reporting forms for faster
                      processing.
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How DMCA Notices Work
              </h2>
              <p className="text-lg text-gray-400">
                Understanding the legal framework for content removal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Generate',
                  description: 'Create a compliant DMCA notice with all required elements',
                },
                {
                  step: '2',
                  title: 'Send',
                  description:
                    "Email or submit to the hosting provider's copyright agent",
                },
                {
                  step: '3',
                  title: 'Wait',
                  description: 'Provider has 10 business days to respond by law',
                },
                {
                  step: '4',
                  title: 'Verify',
                  description: 'Track removal and monitor for content reappearing',
                },
              ].map((item) => (
                <div key={item.step} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Tired of Filing DMCA Notices Manually?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Privly automatically detects your leaked content across 500+ sites and
                files DMCA takedowns to hosting providers, CDNs, registrars, and Google
                — all simultaneously. 96% success rate. No manual work.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                DMCA Generator FAQ
              </h2>
              <p className="text-gray-400">
                Common questions about DMCA notices and content removal
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed ml-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schema.org FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            }),
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
