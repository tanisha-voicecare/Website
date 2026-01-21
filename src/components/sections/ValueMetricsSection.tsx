'use client';

/**
 * ValueMetricsSection Component
 * "Why VoiceCare" - Business outcomes and ROI metrics
 * EXACT copy from designer-src/src/app/components/WhyUs.tsx
 *
 * Uses Framer Motion for hover effects exactly as designer implemented
 */

import { motion } from 'motion/react';

// ============================================
// Icons (matching designer's lucide-react icons)
// ============================================

function TrendingUpIcon({ className = '' }: { className?: string }) {
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
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function ZapIcon({ className = '' }: { className?: string }) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CheckCircleIcon({ className = '' }: { className?: string }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ============================================
// Data - EXACT from designer-src
// ============================================

const benefits = [
  {
    title: 'Higher ROI',
    description:
      'Significantly reduce overhead while increasing billing accuracy and practice throughput.',
    icon: TrendingUpIcon,
    bgColor: '#06003F',
    percentage: '70%',
  },
  {
    title: 'Faster',
    description:
      'Instantly collect, initiate, and transfer data between patients and clinical systems.',
    icon: ZapIcon,
    bgColor: '#FF4E3A',
    percentage: '40%',
  },
  {
    title: 'Better Data Quality',
    description:
      'Eliminate human error with consistent, structured data output for every single conversation.',
    icon: CheckCircleIcon,
    bgColor: '#06003F',
    percentage: '20%',
  },
];

// ============================================
// Component - EXACT from designer-src/src/app/components/WhyUs.tsx
// ============================================

export function ValueMetricsSection({ className = '' }: { className?: string }) {
  return (
    <section className={`py-24 bg-background ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#06003F] mb-8">
            Why VoiceCare.
          </h2>

          <p className="text-lg text-[#06003F]/60 leading-relaxed font-medium max-w-3xl">
            Transform complex and variable administrative conversations and tasks into structured
            notes, in one click, in near real-time.
          </p>
        </motion.div>

        {/* Grid Features - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
              }}
              className={`group cursor-pointer ${
                index !== benefits.length - 1 ? 'md:border-r md:border-[#06003F]/10 md:pr-12' : ''
              }`}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6 transition-all duration-300"
                style={{ backgroundColor: benefit.bgColor }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Percentage + Title on same line */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold text-[#06003F] tracking-tight group-hover:text-[#FF4E3A] transition-colors duration-300">
                  {benefit.percentage}
                </span>
                <h3 className="text-2xl font-bold text-[#06003F] tracking-tight group-hover:text-[#FF4E3A] transition-colors duration-300">
                  {benefit.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[16px] text-[#06003F]/60 leading-relaxed group-hover:text-[#06003F]/80 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueMetricsSection;
