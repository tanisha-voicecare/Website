'use client';

/**
 * SupportedEHRIntegrationsSection Component
 * Dynamic content from WordPress + PIXEL-PERFECT design
 */

import Image from 'next/image';
import { motion } from 'motion/react';
import type { EHRIntegrationsContent } from '@/lib/content';

// ============================================
// Types
// ============================================

interface SupportedEHRIntegrationsSectionProps {
  className?: string;
  content?: EHRIntegrationsContent;
}

// ============================================
// Default Content (Fallback)
// ============================================

const DEFAULT_CONTENT: EHRIntegrationsContent = {
  sectionTitle: 'Supported EHR Integrations',
  sectionDescription: 'Transform complex administrative tasks into structured data within your existing systems',
};

interface EHRLogo {
  name: string;
  src: string;
  alt: string;
}

// ============================================
// Data - EHR Partner Logos (order matches Figma)
// Row 1: athenahealth, Greenway, CareStack, OpenDental
// Row 2: ModMed, denticon, Dentrix Ascend, cloud 9
// ============================================

const EHR_LOGOS: EHRLogo[] = [
  // Row 1
  {
    name: 'Athena Health',
    src: '/images/logos/ehr/athena-health.png',
    alt: 'Athena Health EHR Integration - VoiceCare AI seamlessly integrates with Athena Health electronic health records',
  },
  {
    name: 'Greenway Health',
    src: '/images/logos/ehr/greenway.png',
    alt: 'Greenway Health EHR Integration - VoiceCare AI integrates with Greenway Health electronic health records',
  },
  {
    name: 'CareStack',
    src: '/images/logos/ehr/carestack.png',
    alt: 'CareStack EHR Integration - VoiceCare AI connects with CareStack dental practice management software',
  },
  {
    name: 'Open Dental',
    src: '/images/logos/ehr/opendental.png',
    alt: 'Open Dental EHR Integration - VoiceCare AI integrates with Open Dental practice management software',
  },
  // Row 2
  {
    name: 'ModMed',
    src: '/images/logos/ehr/modmed.png',
    alt: 'ModMed EHR Integration - VoiceCare AI connects with Modernizing Medicine specialty EHR',
  },
  {
    name: 'Denticon',
    src: '/images/logos/ehr/denticon.png',
    alt: 'Denticon EHR Integration - VoiceCare AI integrates with Denticon cloud-based dental software',
  },
  {
    name: 'Dentrix Ascend',
    src: '/images/logos/ehr/dentrix-ascend.png',
    alt: 'Dentrix Ascend EHR Integration - VoiceCare AI works with Dentrix Ascend dental practice management',
  },
  {
    name: 'Cloud 9',
    src: '/images/logos/ehr/cloud-9.png',
    alt: 'Cloud 9 EHR Integration - VoiceCare AI works with Cloud 9 orthodontic practice management',
  },
];

// ============================================
// Component
// ============================================

export function SupportedEHRIntegrationsSection({
  className = '',
  content,
}: SupportedEHRIntegrationsSectionProps) {
  // Use provided content or fallback to defaults
  const sectionContent = content || DEFAULT_CONTENT;

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 bg-white ${className}`}
      aria-labelledby="ehr-integrations-heading"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Title */}
        <motion.h2
          id="ehr-integrations-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#06003F] tracking-[-0.02em] text-center mb-4 sm:mb-6"
        >
          {sectionContent.sectionTitle}
        </motion.h2>

        {/* Description */}
        {sectionContent.sectionDescription && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#06003F]/60 leading-relaxed font-medium max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          >
            {sectionContent.sectionDescription}
          </motion.p>
        )}

        {/* Logo Grid - 2 columns mobile, 4 columns desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-items-center"
        >
          {EHR_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="flex items-center justify-center w-full"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                loading="lazy"
                className="h-[40px] sm:h-[50px] lg:h-[60px] w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SupportedEHRIntegrationsSection;
