/**
 * TrustedBySection Component
 * PIXEL-PERFECT implementation from designer-src/src/app/components/Logos.tsx
 *
 * DESIGNER EXACT VALUES:
 * - Container: border-y border-border/50 py-10 bg-background/50
 * - Title: text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-8 text-center
 * - Logo container: flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-125
 * - Logo text: text-xl font-bold tracking-tighter
 */

// ============================================
// Types
// ============================================

interface TrustedBySectionProps {
  className?: string;
}

// ============================================
// Data - Enterprise logos as per designer
// ============================================

const ENTERPRISE_LOGOS = [
  { name: 'Anthropic', id: 'anthropic' },
  { name: 'Scale', id: 'scale' },
  { name: 'Linear', id: 'linear' },
  { name: 'Vercel', id: 'vercel' },
  { name: 'Retool', id: 'retool' },
  { name: 'Ramp', id: 'ramp' },
] as const;

// ============================================
// Component
// ============================================

export function TrustedBySection({ className = '' }: TrustedBySectionProps) {
  return (
    <section
      className={`py-10 bg-white/50 ${className}`}
      style={{
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
      aria-labelledby="trusted-by-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title - EXACT designer values */}
        <p
          id="trusted-by-heading"
          className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-center"
          style={{ color: 'rgba(102, 102, 128, 0.6)' }}
        >
          Trusted by the next generation of enterprises
        </p>

        {/* Logo Grid - EXACT designer values */}
        <div 
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
          style={{ 
            opacity: 0.4,
            filter: 'grayscale(1) contrast(1.25)',
          }}
        >
          {ENTERPRISE_LOGOS.map((logo) => (
            <span
              key={logo.id}
              className="text-xl font-bold tracking-tighter"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
