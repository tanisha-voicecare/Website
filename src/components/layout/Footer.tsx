'use client';

/**
 * Footer Component
 * EXACT copy from designer-src/src/app/components/Footer.tsx
 *
 * DESIGNER EXACT VALUES:
 * - Background: bg-background (white), border-t border-border/50
 * - Grid: 5 columns, logo spans 2
 * - Headings: font-semibold text-[11px] uppercase tracking-wider
 * - Links: text-sm text-muted-foreground, hover:text-primary
 * - Copyright: text-[12px] text-muted-foreground
 */

import Link from 'next/link';
import Image from 'next/image';

// ============================================
// Footer Data - EXACT from designer
// ============================================

const footerNavigation = {
  product: [
    { name: 'Platform', href: '/platform' },
    { name: 'Agents', href: '/agents' },
    { name: 'Security', href: '/security' },
    { name: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Guides', href: '/guides' },
    { name: 'Status', href: '/status' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

// ============================================
// Logo Component - matching designer's logo asset style
// ============================================

function VoiceCareLogo() {
  return (
    <Link href="/" className="inline-block mb-8">
      <Image
        src="/icons/png/logo.png"
        alt="VoiceCare AI"
        width={160}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
}

// ============================================
// Component - EXACT from designer-src/src/app/components/Footer.tsx
// ============================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#06003F]/10 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Grid - EXACT 5 columns from designer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          {/* Logo Column - spans 2 */}
          <div className="col-span-2">
            <VoiceCareLogo />

            <p className="text-sm text-[#06003F]/60 max-w-[320px] leading-relaxed">
              The orchestration layer for the autonomous enterprise. Built for scale, security, and
              intelligence.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px] text-[#06003F]">
              Product
            </h5>
            <ul className="space-y-3.5 text-sm text-[#06003F]/60">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#06003F] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px] text-[#06003F]">
              Resources
            </h5>
            <ul className="space-y-3.5 text-sm text-[#06003F]/60">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#06003F] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px] text-[#06003F]">
              Company
            </h5>
            <ul className="space-y-3.5 text-sm text-[#06003F]/60">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#06003F] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - EXACT from designer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-[#06003F]/10">
          <p className="text-[12px] text-[#06003F]/60">
            © {currentYear} VoiceCare AI Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-[12px] text-[#06003F]/60">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#06003F] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
