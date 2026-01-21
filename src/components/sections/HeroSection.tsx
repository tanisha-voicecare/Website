'use client';

/**
 * HeroSection Component
 * PIXEL-PERFECT implementation from designer-src/src/app/components/Hero.tsx
 *
 * DESIGNER EXACT VALUES (DO NOT CHANGE):
 *
 * Section:
 * - pt-32 pb-20
 *
 * Badge:
 * - px-4 py-1.5
 * - rounded-full
 * - bg-white
 * - text-[10px] font-bold uppercase tracking-[0.1em]
 * - text-[#06003F]
 * - border border-black/5
 * - shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]
 * - mb-12
 * - gap-2
 * - Icon: text-[#FF4E3A] fill-[#FF4E3A]
 *
 * Subheader:
 * - text-[18px] md:text-[22px]
 * - font-medium
 * - text-[#06003F]/70
 * - mb-4
 * - tracking-tight
 *
 * Headline Container:
 * - h-[140px] md:h-[200px]
 * - mb-10
 *
 * Headline:
 * - text-[44px] md:text-[84px]
 * - font-bold
 * - tracking-[-0.04em]
 * - leading-[1.02]
 * - bg-linear-to-r from-[#06003F] via-[#06003F] to-[#FF4E3A] via-50%
 *
 * Primary Button:
 * - bg-[#06003F]
 * - text-white
 * - px-8 py-3.5
 * - rounded-[6px]
 * - text-sm font-semibold
 * - shadow-xl shadow-[#06003F]/10
 * - hover:bg-[#06003F]/90
 *
 * Secondary Button:
 * - bg-white
 * - border border-[#06003F]/10
 * - text-[#06003F]
 * - px-8 py-3.5
 * - rounded-[6px]
 * - text-sm font-semibold
 * - shadow-sm
 * - hover:bg-black/5
 *
 * Button Container:
 * - gap-4
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================
// Types
// ============================================

interface HeroSectionProps {
  className?: string;
}

// ============================================
// Constants
// ============================================

const HEADLINES = [
  ['Automating administrative', 'burdens'],
  ['Creating time for', 'care teams'],
  ['Improving patient', 'outcomes'],
];

const ROTATION_INTERVAL = 4000; // 4 seconds

// ============================================
// Icons
// ============================================

function ZapIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#FF4E3A"
      stroke="none"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ============================================
// Component
// ============================================

export function HeroSection({ className = '' }: HeroSectionProps) {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
        setIsAnimating(false);
      }, 400);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative pt-32 pb-20 overflow-hidden bg-white ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* SVG Noise Filter */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
          <filter id="heroNoiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroNoiseFilter)" />
        </svg>

        {/* Subtle vignette overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(6, 0, 63, 0.02) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge - EXACT designer values */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 mb-12"
              style={{
                boxShadow: '0 2px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05)',
              }}
            >
              <ZapIcon className="w-3 h-3" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.1em]"
                style={{ color: '#06003F' }}
              >
                Agentic Intelligence for RCM
              </span>
            </div>

            {/* Subheader - EXACT designer values */}
            <p 
              className="text-[18px] md:text-[22px] font-medium tracking-tight mb-4"
              style={{ color: 'rgba(6, 0, 63, 0.7)' }}
            >
              Supercharging Healthcare Workers with Care and AI by
            </p>

            {/* Rotating Headlines - EXACT designer values */}
            <div className="relative h-[140px] md:h-[200px] flex items-center justify-center mb-10 w-full">
              <h1
                id="hero-heading"
                className={`
                  absolute text-[44px] md:text-[84px] font-bold tracking-[-0.04em] leading-[1.02]
                  transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isAnimating ? 'opacity-0 translate-y-[-30px] blur-[8px]' : 'opacity-100 translate-y-0 blur-0'}
                `}
                style={{
                  background: 'linear-gradient(to right, #06003F 0%, #06003F 50%, #FF4E3A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {HEADLINES[currentHeadlineIndex][0]}
                <br />
                {HEADLINES[currentHeadlineIndex][1]}
              </h1>
            </div>

            {/* CTA Buttons - EXACT designer values */}
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Primary CTA - DARK NAVY per designer */}
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[6px] text-sm font-semibold text-white transition-all group"
                style={{
                  backgroundColor: '#06003F',
                  boxShadow: '0 20px 25px -5px rgba(6,0,63,0.1), 0 8px 10px -6px rgba(6,0,63,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(6,0,63,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#06003F';
                }}
              >
                Experience it
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA - WHITE with border per designer */}
              <Link
                href="#demo"
                className="inline-flex items-center px-8 py-3.5 rounded-[6px] text-sm font-semibold bg-white transition-all shadow-sm"
                style={{
                  color: '#06003F',
                  border: '1px solid rgba(6,0,63,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
