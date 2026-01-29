/**
 * Company Page
 * Implementation from designer-src/src/app/components/Company.tsx
 *
 * All sections IMPLEMENTED:
 * 1. CompanyHero
 * 2. AboutUsSection
 * 3. CEOQuoteSection
 * 4. PrinciplesSection
 * 5. AdvisorsSection
 *
 * NOTE: Header and Footer are rendered by root layout.tsx
 */

import type { Metadata } from 'next';
import {
  CompanyHero,
  AboutUsSection,
  CEOQuoteSection,
  PrinciplesSection,
  AdvisorsSection,
} from '@/components/company';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Company',
  description:
    'Learn about VoiceCare AI and our mission to supercharge healthcare administration with Artificial Intelligence. Meet our leadership team, advisors, and investors.',
  pathname: '/company',
});

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <AboutUsSection />
      <CEOQuoteSection />
      <PrinciplesSection />
      <AdvisorsSection />
    </>
  );
}
