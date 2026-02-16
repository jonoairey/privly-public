'use client';

import { useState, FormEvent } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, MessageSquare } from 'lucide-react';

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

      <main className="flex-grow pt-24 pb-12 px-4">
        {/* Contact Section — form-first layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: Form (takes up 3 cols) */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-gray-300 mb-8">
                Our dedicated human support team is here to help. No bots, just real people.
              </p>

              <div className="bg-gray-900 rounded-2xl border border-purple-500/20 p-6 md:p-8">
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

            {/* Right: Info cards sidebar (takes up 2 cols) */}
            <div className="lg:col-span-2 space-y-4 lg:pt-[88px]">
              {/* Email */}
              <div className="bg-gray-900 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400">Email us directly</h3>
                    <a href="mailto:hello@useprivly.com" className="text-purple-300 hover:text-purple-200 transition-colors font-medium">
                      hello@useprivly.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-900 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400">Response time</h3>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gray-900 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-300 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400">Status</h3>
                    <p className="text-green-300 font-medium">We're online</p>
                  </div>
                </div>
              </div>

              {/* FAQ inline */}
              <div className="bg-gray-900 rounded-xl p-6 border border-purple-500/20 space-y-4 mt-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">FAQ</h3>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Do you offer phone support?</p>
                  <p className="text-gray-400 text-sm">Currently we support inquiries via email, ensuring detailed and thoughtful responses.</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">What's your response time?</p>
                  <p className="text-gray-400 text-sm">We respond within 24 business hours. During high volume periods, up to 48 hours.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
