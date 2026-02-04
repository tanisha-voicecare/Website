'use client';

/**
 * Footer Component
 * Dynamic content from WordPress + PIXEL-PERFECT design
 */

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, ArrowRight } from 'lucide-react';
import type { FooterContent } from '@/lib/content';

interface FooterProps {
  content?: FooterContent;
}

const DEFAULT_CONTENT: FooterContent = {
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest news and updates delivered to your inbox.',
  socialLabel: 'Connect with us',
  linkedinUrl: 'https://linkedin.com',
  companyColumnTitle: 'Company',
  resourcesColumnTitle: 'Resources',
  copyrightText: '© 2025 VoiceCare AI. All rights reserved.',
};

// ============================================
// Pages that should NOT render Footer (per designer-src)
// ============================================
const PAGES_WITHOUT_FOOTER = ['/partner-with-us', '/privacy-policy', '/terms-of-service'];

// ============================================
// Footer Navigation Data - EXACT from designer-src
// ============================================

interface FooterLink {
  name: string;
  href: string;
  isDisabled?: boolean;
}

// Company column - EXACT from designer-src
const companyLinks: FooterLink[] = [
  { name: 'About Us', href: '/company' },
  { name: 'Our Platform', href: '/platform' },
  { name: 'Who We Serve', href: '/who-we-serve' },
  { name: 'Schedule a Demo', href: '/schedule-demo' },
  { name: 'Press', href: '/press' },
];

// Resources column - EXACT from designer-src
const resourcesLinks: FooterLink[] = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Security', href: '/security' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blogs', href: '#', isDisabled: true }, // WordPress CMS not connected yet
];

// Legal links - Privacy Policy & Terms of Service from designer-src, Cookie Policy added for compliance
const legalLinks: FooterLink[] = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  // { name: 'Cookie Policy', href: '/cookies' },
];

// ============================================
// Component
// ============================================

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Footer({ content }: FooterProps) {
  const footerContent = content || DEFAULT_CONTENT;
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Hide footer on specific pages (per designer-src behavior)
  if (PAGES_WITHOUT_FOOTER.includes(pathname)) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'newsletter',
          fields: {
            // Exact field name from existing voicecare.ai Newsletter form
            'newsletteremail': email,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for subscribing!');
        setEmail('');
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="bg-white border-t border-[#06003F]/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 max-w-7xl">
        {/* Main Footer Content */}
        <div className="pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Logo & Social */}
            <div className="md:col-span-4 text-center md:text-left">
              <Link href="/" className="inline-block">
                <Image
                  src="/icons/png/logo.png"
                  alt="VoiceCare AI logo"
                  width={200}
                  height={80}
                  sizes="200px"
                  className="h-16 sm:h-20 w-auto mb-6 sm:mb-8 mx-auto md:mx-0"
                />
              </Link>

              {/* Social Section */}
              <div>
                <p className="text-[13px] font-medium text-[#06003F]/40 uppercase tracking-wider mb-4">
                  {footerContent.socialLabel}
                </p>
                <a
                  href={footerContent.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-[8px] border border-[#06003F]/10 hover:border-[#FF4E3A] bg-white hover:bg-[#FF4E3A] text-[#06003F] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className="md:col-span-2 text-center md:text-left">
              <h5 className="text-[13px] font-semibold text-[#06003F] uppercase tracking-wider mb-4 sm:mb-6">
                {footerContent.companyColumnTitle}
              </h5>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    {link.isDisabled ? (
                      <span className="text-[15px] text-[#06003F]/40 cursor-not-allowed inline-flex items-center justify-center md:justify-start">
                        {link.name}
                      </span>
                    ) : link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-[#06003F]/60 hover:text-[#FF4E3A] transition-colors inline-flex items-center justify-center md:justify-start group"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#06003F]/60 hover:text-[#FF4E3A] transition-colors inline-flex items-center justify-center md:justify-start group"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="md:col-span-2 text-center md:text-left">
              <h5 className="text-[13px] font-semibold text-[#06003F] uppercase tracking-wider mb-4 sm:mb-6">
                {footerContent.resourcesColumnTitle}
              </h5>
              <ul className="space-y-4">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    {link.isDisabled ? (
                      <span className="text-[15px] text-[#06003F]/40 cursor-not-allowed inline-flex items-center justify-center md:justify-start">
                        {link.name}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#06003F]/60 hover:text-[#FF4E3A] transition-colors inline-flex items-center justify-center md:justify-start group"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-4 text-center md:text-left">
              <h5 className="text-[13px] font-semibold text-[#06003F] uppercase tracking-wider mb-4 sm:mb-6">
                {footerContent.newsletterTitle}
              </h5>
              <p className="text-[15px] text-[#06003F]/60 mb-6 leading-relaxed">
                {footerContent.newsletterDescription}
              </p>

              {submitStatus === 'success' ? (
                <p className="text-[13px] text-[#FF4E3A] font-medium">
                  {statusMessage}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="relative">
                  {/* Desktop: Button inside input | Mobile: Stacked */}
                  <div className="relative hidden md:block">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={submitStatus === 'loading'}
                      className="w-full px-5 py-3.5 text-[15px] bg-[#06003F]/[0.02] border border-[#06003F]/10 rounded-[8px] focus:outline-none focus:border-[#FF4E3A] focus:bg-white transition-all placeholder:text-[#06003F]/30 disabled:opacity-50 pr-32"
                    />
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#FF4E3A] text-white px-5 rounded-[6px] font-semibold hover:bg-[#FF4E3A]/90 transition-all flex items-center gap-2 group disabled:opacity-50"
                    >
                      {submitStatus === 'loading' ? (
                        '...'
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Mobile: Stacked layout */}
                  <div className="flex flex-col gap-3 md:hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-3.5 text-[15px] bg-[#06003F]/[0.02] border border-[#06003F]/10 rounded-[8px] focus:outline-none focus:border-[#FF4E3A] focus:bg-white transition-all placeholder:text-[#06003F]/30 text-center disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-[#FF4E3A] text-white px-5 py-3 rounded-[6px] font-semibold hover:bg-[#FF4E3A]/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 min-h-[44px]"
                    >
                      {submitStatus === 'loading' ? (
                        'Subscribing...'
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && statusMessage && (
                    <p className="text-[13px] text-red-600 mt-3 font-medium text-center md:text-left">
                      {statusMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-[#06003F]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[14px] text-[#06003F]/40 text-center md:text-left order-3 md:order-1">
              {footerContent.copyrightText}
            </p>

            {/* Compliance Badges */}
            <div className="flex items-start gap-6 sm:gap-8 order-1 md:order-2">
              <Image
                src="/images/icons/soc-hipaa-badges.png"
                alt="SOC 2 Type II and HIPAA Compliance badges"
                width={200}
                height={80}
                sizes="200px"
                className="h-16 sm:h-20 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              
              {/* ISO 14001 Logo with Coming Soon */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-16 sm:h-20 flex flex-col items-center justify-center">
                  <Image
                    src="/images/icons/iso-logo.png"
                    alt="ISO Certification"
                    width={80}
                    height={50}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <span className="text-[11px] sm:text-[13px] font-bold text-[#1C3B6D] tracking-tight mt-1">
                    ISO14001
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[#06003F]/30 uppercase tracking-[0.1em]">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 order-2 md:order-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-[#06003F]/40 hover:text-[#FF4E3A] transition-colors min-h-[44px] flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
