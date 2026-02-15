'use client';

import { Metadata } from 'next';
import { useState, FormEvent } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, MessageSquare } from 'lucide-react';

// Note: Metadata cannot be used in 'use client' components
// This would need to be moved to layout.tsx or a separate page wrapper

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about Privly? Want to learn more about protecting your content? Our dedicated human support team is here to help — no bots, no scripts, just real people.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/20 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:hello@useprivly.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                  hello@useprivly.com
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/20 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Response Time</h3>
                <p className="text-gray-400">
                  Usually within 24 hours
                </p>
              </div>

              {/* Status */}
              <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/20 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-green-600 mb-4">
                  <div className="h-3 w-3 rounded-full bg-green-300 animate-pulse" />
                </div>
                <h3 className="text-lg font-bold mb-2">Status</h3>
                <p className="text-green-300">
                  We're online
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl border border-purple-500/20 p-8 md:p-12">
              {isSubmitted && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-300">
                    Thank you for your message! A real person on our team will get back to you within 24 hours.
                  </p>
                </div>
              )}

              {errorMsg && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-300">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                We respect your privacy. Read our privacy policy to learn how we handle your data.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">
                  How do I get support?
                </h3>
                <p className="text-gray-300">
                  Email us at hello@useprivly.com or use the contact form above. Every message is handled by a real person on our team — we respond within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">
                  Do you offer phone support?
                </h3>
                <p className="text-gray-300">
                  Currently, we support inquiries via email. This allows us to maintain the highest quality of service
                  and ensure detailed, thoughtful responses to your questions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">
                  What's your response time?
                </h3>
                <p className="text-gray-300">
                  We aim to respond to all inquiries within 24 business hours. During holidays or very high volume periods,
                  it may take up to 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
