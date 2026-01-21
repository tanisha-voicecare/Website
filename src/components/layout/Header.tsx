'use client';

/**
 * Header/Navbar Component
 * Fixed navigation header matching Figma design for VoiceCare AI
 */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================
// Types
// ============================================

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  { label: 'Platform', href: '/platform' },
  { label: 'Security', href: '/security' },
  { label: 'Company', href: '/company' },
  { label: 'Docs', href: '/docs' },
];

// ============================================
// Icons
// ============================================

function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ============================================
// Component
// ============================================

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/80 backdrop-blur-md border-b border-black/[0.08]">
      <nav
        className="flex items-center justify-between h-full px-6 md:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/png/logo.png"
            alt="VoiceCare AI"
            width={180}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#06003F]/60">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#06003F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-[#06003F] hover:text-[#FF4E3A] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="bg-[#FF4E3A] text-white px-4 py-1.5 rounded-[4px] text-sm font-medium hover:brightness-110 transition-all shadow-sm"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[#06003F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-black/[0.08]"
        >
          <div className="px-6 py-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-[14px] font-medium text-[#06003F]/70 hover:bg-[#06003F]/5 hover:text-[#06003F] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-black/[0.08] space-y-3">
                <Link
                  href="/login"
                  className="block w-full px-4 py-2.5 text-sm font-medium text-[#06003F] text-center hover:bg-[#06003F]/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/demo"
                  className="block w-full px-4 py-2.5 bg-[#FF4E3A] text-white text-center text-sm font-medium rounded-[4px] hover:brightness-110 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
