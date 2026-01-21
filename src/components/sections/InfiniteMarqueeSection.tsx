'use client';

/**
 * InfiniteMarqueeSection Component
 * "Radical Efficiencies" - Real-World Impact testimonials
 * PIXEL-PERFECT implementation from designer-src/src/app/components/InfiniteMarquee.tsx
 *
 * DESIGNER EXACT VALUES:
 * - Section: relative py-32 md:py-40 overflow-hidden
 * - Background: bg-gradient-to-b from-white via-[#F8F9FC] to-white
 * - Subtle grid pattern: opacity-[0.015], 64px grid
 * - Top/bottom borders: h-px bg-gradient-to-r from-transparent via-[#06003F]/10 to-transparent
 * - Badge: bg-white text-[10px] font-bold uppercase tracking-[0.1em] text-[#06003F] border border-[#06003F]/5
 * - Badge dot: w-1.5 h-1.5 rounded-full bg-[#FF4E3A] animate-pulse
 * - Heading: text-4xl md:text-6xl font-bold text-[#06003F] tracking-[-0.02em] leading-[1.05]
 * - Subheading: text-[#06003F]/60 md:text-lg font-medium
 * - Card: bg-white border border-[#06003F]/6 rounded-[12px] px-7 py-7 min-w-[460px]
 * - Icon: w-11 h-11 rounded-[12px] with gradient backgrounds
 * - Text: text-[#06003F] text-[15px] font-semibold
 * - Author: text-[#06003F]/40 text-[13px] font-medium
 * - Metric: bg-gradient-to-br from-[#FF4E3A]/8 to-[#FF4E3A]/12 text-[#FF4E3A] text-xl font-bold
 */

// ============================================
// Types
// ============================================

interface Testimonial {
  id: string;
  quote: string;
  company: string;
  metric: string;
  iconType: 'clock' | 'trend' | 'target' | 'users' | 'zap' | 'globe';
  gradientColor: 'coral' | 'navy';
}

interface InfiniteMarqueeSectionProps {
  className?: string;
}

// ============================================
// Icons
// ============================================

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TrendIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function TargetIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UsersIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZapIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// ============================================
// Data - Exact from designer-src
// ============================================

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tech-corp',
    quote: 'Reduced response time by 95%',
    company: 'Tech Corp',
    metric: '95%',
    iconType: 'clock',
    gradientColor: 'coral',
  },
  {
    id: 'healthcare-inc',
    quote: 'Scaled to 10,000 calls/day effortlessly',
    company: 'Healthcare Inc',
    metric: '10K',
    iconType: 'trend',
    gradientColor: 'navy',
  },
  {
    id: 'finance-co',
    quote: 'ROI achieved in 2 months',
    company: 'Finance Co',
    metric: '2mo',
    iconType: 'target',
    gradientColor: 'coral',
  },
  {
    id: 'retail-brand',
    quote: 'Customer satisfaction up 40%',
    company: 'Retail Brand',
    metric: '+40%',
    iconType: 'users',
    gradientColor: 'navy',
  },
  {
    id: 'startup-xyz',
    quote: '24/7 support without hiring',
    company: 'Startup XYZ',
    metric: '24/7',
    iconType: 'zap',
    gradientColor: 'coral',
  },
  {
    id: 'global-ltd',
    quote: 'Multilingual from day one',
    company: 'Global Ltd',
    metric: '100+',
    iconType: 'globe',
    gradientColor: 'navy',
  },
];

// ============================================
// Testimonial Card Component
// ============================================

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const renderIcon = (type: Testimonial['iconType']) => {
    const iconClass = 'w-5 h-5';
    switch (type) {
      case 'clock':
        return <ClockIcon className={iconClass} />;
      case 'trend':
        return <TrendIcon className={iconClass} />;
      case 'target':
        return <TargetIcon className={iconClass} />;
      case 'users':
        return <UsersIcon className={iconClass} />;
      case 'zap':
        return <ZapIcon className={iconClass} />;
      case 'globe':
        return <GlobeIcon className={iconClass} />;
    }
  };

  const gradientBg = testimonial.gradientColor === 'coral' 
    ? 'linear-gradient(to bottom right, #FF4E3A, #FF6B5A)'
    : 'linear-gradient(to bottom right, #06003F, #1a0f5f)';

  return (
    <div
      className="group flex-shrink-0 rounded-[12px] px-7 py-7 min-w-[460px] transition-all duration-700 hover:shadow-xl relative overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(6, 0, 63, 0.06)',
      }}
    >
      {/* Animated gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: 'linear-gradient(to bottom right, rgba(255, 78, 58, 0.05), transparent, rgba(6, 0, 63, 0.05))',
        }}
      />
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-[12px]"
          style={{
            background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), transparent, transparent)',
          }}
        />
      </div>

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex-1 flex gap-4">
          {/* Icon - EXACT designer values */}
          <div
            className="flex-shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
            style={{
              background: gradientBg,
              color: '#FFFFFF',
            }}
          >
            {renderIcon(testimonial.iconType)}
          </div>

          <div className="flex-1">
            {/* Quote - EXACT designer values */}
            <p 
              className="text-[15px] font-semibold mb-2.5 leading-snug tracking-tight"
              style={{ color: '#06003F' }}
            >
              {testimonial.quote}
            </p>
            {/* Company - EXACT designer values */}
            <p 
              className="text-[13px] font-medium tracking-tight"
              style={{ color: 'rgba(6, 0, 63, 0.4)' }}
            >
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Metric badge - EXACT designer values */}
        <div className="flex-shrink-0 relative">
          <div 
            className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(to bottom right, rgba(255, 78, 58, 0.2), rgba(255, 78, 58, 0.1))',
            }}
          />
          <div
            className="relative rounded-[12px] px-5 py-3 transition-all duration-700"
            style={{
              background: 'linear-gradient(to bottom right, rgba(255, 78, 58, 0.08), rgba(255, 78, 58, 0.12))',
              border: '1px solid rgba(255, 78, 58, 0.15)',
            }}
          >
            <span 
              className="text-xl font-bold tracking-tight"
              style={{ color: '#FF4E3A' }}
            >
              {testimonial.metric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function InfiniteMarqueeSection({ className = '' }: InfiniteMarqueeSectionProps) {
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const reversedItems = [...items].reverse();

  return (
    <section
      className={`relative py-32 md:py-40 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF, #F8F9FC, #FFFFFF)',
      }}
      aria-labelledby="marquee-heading"
    >
      {/* Subtle grid pattern - EXACT designer values */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(#06003F 1px, transparent 1px), linear-gradient(90deg, #06003F 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.015,
        }}
      />

      {/* Top gradient border - EXACT designer values */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(6, 0, 63, 0.1), transparent)',
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          {/* Badge - EXACT designer values */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.1em] mb-8 shadow-sm"
            style={{
              color: '#06003F',
              border: '1px solid rgba(6, 0, 63, 0.05)',
            }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#FF4E3A' }}
            />
            Real-World Impact
          </div>

          {/* Heading - EXACT designer values */}
          <h2
            id="marquee-heading"
            className="text-4xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.05] mb-6"
            style={{ color: '#06003F' }}
          >
            Radical Efficiencies
          </h2>

          {/* Subheading - EXACT designer values */}
          <p 
            className="md:text-lg font-medium leading-relaxed text-[18px]"
            style={{ color: 'rgba(6, 0, 63, 0.6)' }}
          >
            Savings of 32,000 minutes per 1,000 phone calls
          </p>
        </div>
      </div>

      {/* Fade gradients on edges - EXACT designer values */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #FFFFFF, rgba(255, 255, 255, 0.8), transparent)',
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #FFFFFF, rgba(255, 255, 255, 0.8), transparent)',
        }}
      />

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6 overflow-hidden" role="marquee" aria-label="Customer testimonials">
        <div 
          className="flex gap-5 whitespace-nowrap animate-marquee"
          style={{ willChange: 'transform' }}
        >
          {items.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative overflow-hidden" role="marquee" aria-label="Customer testimonials">
        <div 
          className="flex gap-5 whitespace-nowrap animate-marquee-reverse"
          style={{ willChange: 'transform' }}
        >
          {reversedItems.map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Bottom gradient border - EXACT designer values */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(6, 0, 63, 0.1), transparent)',
        }}
      />
    </section>
  );
}

export default InfiniteMarqueeSection;
