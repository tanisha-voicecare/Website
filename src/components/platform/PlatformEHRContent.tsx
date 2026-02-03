'use client';

/**
 * Platform EHR Content Section
 * Dynamic content from WordPress + PIXEL-PERFECT design
 */

import { motion } from 'motion/react';
import type { PlatformEHRContent as PlatformEHRContentType } from '@/lib/content';

// ============================================
// Types
// ============================================

interface PlatformEHRContentProps {
  content?: PlatformEHRContentType;
}

// ============================================
// Default Content (Fallback)
// ============================================

const DEFAULT_CONTENT: PlatformEHRContentType = {
  heading: 'The Enterprise Administration Platform',
  subheading: 'Your secure command center turns administrative chaos into structured intelligence.',
  bulletPoints: [
    'Complete thousands of calls and tasks in a single click using our advanced generative models.',
    'Actionable Intelligence and AI-powered analytics measure the performance of every conversation to drive improvement.',
    'All data is automatically formatted and ingested into any EHR or system of record.',
    'Instantly search historical calls and access summarized, use-case-specific data.',
  ],
  closingStatement: 'Every conversation matters. Elevate your patient experience by automating your back office.',
};

export function PlatformEHRContent({ content }: PlatformEHRContentProps) {
  const ehrContent = content || DEFAULT_CONTENT;

  return (
    <section className="relative py-16 sm:py-20 md:py-[90px] bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#06003F] mb-4 sm:mb-6 tracking-tight leading-[1.1] max-w-[20ch] mx-auto md:max-w-none">
            {ehrContent.heading}
          </h2>
          
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#06003F]/80 font-medium mb-6 sm:mb-8 max-w-3xl mx-auto">
            {ehrContent.subheading}
          </p>

          <div className="text-[15px] sm:text-[16px] md:text-[17px] text-[#06003F]/70 leading-relaxed space-y-3 sm:space-y-4 max-w-4xl mx-auto text-left">
            <ul className="space-y-3 sm:space-y-4">
              {ehrContent.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FF4E3A] mt-1.5 flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-bold text-[16px] sm:text-[17px] md:text-[18px] text-[#06003F] mt-6 sm:mt-8">
            {ehrContent.closingStatement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PlatformEHRContent;
