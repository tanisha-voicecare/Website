/**
 * Security Page
 * Implementation from designer-src/src/app/components/Solutions.tsx
 *
 * Current sections IMPLEMENTED:
 * 1. SecurityHero
 * 2. SecurityCertifications
 * 3. SecurityCompliance (5 tabs + cards)
 *
 * NOTE: Header and Footer are rendered by root layout.tsx
 */

import type { Metadata } from 'next';
import {
  SecurityHero,
  SecurityCertifications,
  SecurityCompliance,
} from '@/components/security';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Security',
  description:
    'VoiceCare AI security and compliance. SOC 2 Type II attested and HIPAA-compliant healthcare data protection ensuring maximum security for sensitive patient information.',
  pathname: '/security',
});

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityCertifications />
      <SecurityCompliance />
    </>
  );
}
