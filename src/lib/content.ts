/**
 * Site Content API
 * Fetches dynamic content from WordPress headless CMS
 * Content is managed in WordPress Admin → React Site Content
 */

// ============================================
// Configuration
// ============================================

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || '';
const CONTENT_API_BASE = WORDPRESS_API_URL ? `${WORDPRESS_API_URL}/wp-json/voicecare/v1` : '';

// Revalidation time (10 minutes) - content updates will reflect within this time
export const CONTENT_REVALIDATE_TIME = 600;

// ============================================
// Types
// ============================================

export interface SiteContent<T = Record<string, unknown>> {
  slug: string;
  title: string;
  data: T;
  updated: string;
}

export interface ContentResponse<T = Record<string, unknown>> {
  success: boolean;
  slug: string;
  title: string;
  data: T;
  updated: string;
}

export interface ContentBatchResponse {
  success: boolean;
  content: Record<string, SiteContent | null>;
}

// ============================================
// Content Type Definitions (for each section)
// ============================================

// Homepage Hero Section
export interface HomepageHeroContent {
  badge: string;
  headline: string;
  rotatingHeadlines: string[];
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

// Value Metrics Section (The VoiceCare Advantage)
export interface ValueMetricsContent {
  sectionTitle: string;
  sectionDescription: string;
  metrics: Array<{
    value: string;
    title: string;
    description: string;
  }>;
}

// Radical Efficiencies (Marquee)
export interface RadicalEfficienciesContent {
  sectionTitle: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

// EHR Integrations Section
export interface EHRIntegrationsContent {
  sectionTitle: string;
  sectionDescription: string;
}

// Product Intro Section (Meet Your AI Workforce)
export interface ProductIntroContent {
  sectionTitle: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// ============================================
// Fetch Functions
// ============================================

/**
 * Fetch single content block by slug
 * @param slug - The section identifier (e.g., "homepage-hero")
 * @param fallback - Optional fallback data if content not found
 */
export async function getContent<T = Record<string, unknown>>(
  slug: string,
  fallback?: T
): Promise<T | null> {
  if (!CONTENT_API_BASE) {
    console.warn(`[Content] ${slug}: Using FALLBACK (WordPress API not configured)`);
    return fallback || null;
  }

  try {
    const response = await fetch(`${CONTENT_API_BASE}/content/${slug}`, {
      next: {
        revalidate: CONTENT_REVALIDATE_TIME,
        tags: ['content', `content-${slug}`],
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`[Content] ${slug}: Using FALLBACK (not found in WordPress)`);
        return fallback || null;
      }
      throw new Error(`Content API Error: ${response.status}`);
    }

    const result: ContentResponse<T> = await response.json();
    console.log(`[Content] ${slug}: Loaded from WORDPRESS ✓`);
    return result.data;
  } catch (error) {
    console.error(`[Content] ${slug}: Using FALLBACK (error: ${error})`);
    return fallback || null;
  }
}

/**
 * Fetch multiple content blocks at once
 * @param slugs - Array of section identifiers
 */
export async function getContentBatch(
  slugs: string[]
): Promise<Record<string, unknown>> {
  if (!CONTENT_API_BASE) {
    console.warn('WordPress API not configured. Returning empty content.');
    return {};
  }

  try {
    const response = await fetch(
      `${CONTENT_API_BASE}/content-batch?slugs=${slugs.join(',')}`,
      {
        next: {
          revalidate: CONTENT_REVALIDATE_TIME,
          tags: ['content', ...slugs.map((s) => `content-${s}`)],
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Content API Error: ${response.status}`);
    }

    const result: ContentBatchResponse = await response.json();
    
    // Extract just the data from each content block
    const content: Record<string, unknown> = {};
    for (const [slug, block] of Object.entries(result.content)) {
      content[slug] = block?.data || null;
    }
    
    return content;
  } catch (error) {
    console.error('Failed to fetch content batch:', error);
    return {};
  }
}

/**
 * List all available content blocks (for debugging/admin)
 */
export async function listAllContent(): Promise<Array<{
  id: number;
  title: string;
  slug: string;
  updated: string;
}>> {
  if (!CONTENT_API_BASE) {
    return [];
  }

  try {
    const response = await fetch(`${CONTENT_API_BASE}/content`, {
      next: { revalidate: CONTENT_REVALIDATE_TIME },
    });

    if (!response.ok) {
      throw new Error(`Content API Error: ${response.status}`);
    }

    const result = await response.json();
    return result.content_blocks || [];
  } catch (error) {
    console.error('Failed to list content:', error);
    return [];
  }
}

// ============================================
// Typed Content Fetchers (Convenience Functions)
// ============================================

/**
 * Get Homepage Hero content with fallback
 */
export async function getHomepageHeroContent(): Promise<HomepageHeroContent> {
  const fallback: HomepageHeroContent = {
    badge: 'Agentic Intelligence for RCM',
    headline: 'Your back office just got a massive upgrade. Stop Managing Admin and Delegate it to VoiceCare. Backed by Mayo Clinic.',
    rotatingHeadlines: [
      'Your AI workforce that autonomously handles Prior Auths, Benefits Verification, and Claims.',
      'Enterprise-Ready deep integration with your EHR and payor portals.',
      'Clinical-Grade Reliability by securing every task with a Human-in-the-Loop safety net.',
      'Supercharging teams by replacing painful, time-consuming manual work.',
      'SOC 2 Type II attested and HIPAA-compliant platform.',
    ],
    primaryButtonText: 'Experience it',
    primaryButtonLink: '#experience',
    secondaryButtonText: 'Schedule a Demo',
    secondaryButtonLink: '/schedule-demo',
  };

  const content = await getContent<HomepageHeroContent>('homepage-hero', fallback);
  return content || fallback;
}

/**
 * Get Value Metrics (VoiceCare Advantage) content with fallback
 */
export async function getValueMetricsContent(): Promise<ValueMetricsContent> {
  const fallback: ValueMetricsContent = {
    sectionTitle: 'The VoiceCare Advantage',
    sectionDescription: 'Delegate complex, variable administrative tasks from payor portal navigation to faxes into structured, EHR-ready data in one click, in real-time.',
    metrics: [
      {
        value: '70%',
        title: 'Higher ROI',
        description: 'See an impact on your account receivables within months, not years.',
      },
      {
        value: '99.999%',
        title: 'Data Integrity',
        description: 'Ensure consistent, 20% better data output for every conversation through our Human-in-the-Loop safety net.',
      },
      {
        value: '40%',
        title: 'Faster Execution',
        description: 'Accelerate collection, initiation, and transfer of mission-critical data.',
      },
    ],
  };

  const content = await getContent<ValueMetricsContent>('homepage-value-metrics', fallback);
  return content || fallback;
}

/**
 * Get Radical Efficiencies (Marquee) content with fallback
 */
export async function getRadicalEfficienciesContent(): Promise<RadicalEfficienciesContent> {
  const fallback: RadicalEfficienciesContent = {
    sectionTitle: 'Radical Efficiencies',
    stats: [
      { value: '530+', label: 'hours recovered per 1,000 conversations' },
      { value: '1060+', label: 'hours saved per day' },
      { value: '130+', label: 'workdays of staff time recovered every day' },
    ],
  };

  const content = await getContent<RadicalEfficienciesContent>('homepage-radical-efficiencies', fallback);
  return content || fallback;
}

/**
 * Get EHR Integrations section content with fallback
 */
export async function getEHRIntegrationsContent(): Promise<EHRIntegrationsContent> {
  const fallback: EHRIntegrationsContent = {
    sectionTitle: 'Supported EHR Integrations',
    sectionDescription: 'Transform complex administrative tasks into structured data within your existing systems',
  };

  const content = await getContent<EHRIntegrationsContent>('homepage-ehr-integrations', fallback);
  return content || fallback;
}

/**
 * Get Product Intro (Meet Your AI Workforce) content with fallback
 */
export async function getProductIntroContent(): Promise<ProductIntroContent> {
  const fallback: ProductIntroContent = {
    sectionTitle: 'Meet Your AI Workforce',
    heading: 'Introducing Joy',
    description: 'Introducing Joy, your lead AI agent. Joy orchestrates a team of agents to autonomously talk to stakeholders, navigate complex workflows from payor portals to EHRs with clinical-grade precision and empathy to significantly reduce administrative burden.',
    buttonText: 'Learn More',
    buttonLink: '/platform',
  };

  const content = await getContent<ProductIntroContent>('homepage-product-intro', fallback);
  return content || fallback;
}

// ============================================
// Platform Page Content Types
// ============================================

// Platform Hero Section
export interface PlatformHeroContent {
  eyebrow: string;
  headline: string;
  description: string;
}

// Platform EHR/Enterprise Section
export interface PlatformEHRContent {
  heading: string;
  subheading: string;
  bulletPoints: string[];
  closingStatement: string;
}

// Platform Benefits Section
export interface PlatformBenefitsContent {
  sectionTitle: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

// Platform Solutions/Capabilities Section
export interface PlatformSolutionsContent {
  sectionTitle: string;
  capabilities: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
  }>;
}

// ============================================
// Platform Page Content Fetchers
// ============================================

/**
 * Get Platform Hero content with fallback
 */
export async function getPlatformHeroContent(): Promise<PlatformHeroContent> {
  const fallback: PlatformHeroContent = {
    eyebrow: 'Powered by',
    headline: 'Healthcare Administration General Intelligence (HAgi)',
    description: 'The cognitive core of the VoiceCare platform. HAgi goes beyond standard automation to understand the nuances of healthcare operations with the judgment of a human expert. It fuses Generative AI with deep clinical context to autonomously reason through complex workflows adapting to variable payor rules and unstructured conversations in real-time.',
  };

  const content = await getContent<PlatformHeroContent>('platform-hero', fallback);
  return content || fallback;
}

/**
 * Get Platform EHR/Enterprise content with fallback
 */
export async function getPlatformEHRContent(): Promise<PlatformEHRContent> {
  const fallback: PlatformEHRContent = {
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

  const content = await getContent<PlatformEHRContent>('platform-ehr', fallback);
  return content || fallback;
}

/**
 * Get Platform Benefits content with fallback
 */
export async function getPlatformBenefitsContent(): Promise<PlatformBenefitsContent> {
  const fallback: PlatformBenefitsContent = {
    sectionTitle: 'Benefits',
    benefits: [
      {
        title: 'Automate Tasks & Conversations',
        description: 'Schedule one-time or recurring phone conversations and tasks seamlessly in one click.',
      },
      {
        title: 'Search for Conversations',
        description: 'Find structured data across every conversational audio and transcript, and instantly access use-case specific call summaries.',
      },
      {
        title: 'AI-Powered Call Analytics',
        description: 'Generate insights and knowledge grounded in your back-office data with detailed analytics for every conversation to pinpoint what\'s working and where to improve.',
      },
      {
        title: 'Customize Conversations',
        description: 'Configure use-case specific conversations to ask the questions that matter, delivering better healthcare outcomes for your patients.',
      },
    ],
  };

  const content = await getContent<PlatformBenefitsContent>('platform-benefits', fallback);
  return content || fallback;
}

/**
 * Get Platform Solutions/Capabilities content with fallback
 */
export async function getPlatformSolutionsContent(): Promise<PlatformSolutionsContent> {
  const fallback: PlatformSolutionsContent = {
    sectionTitle: 'Our Solutions',
    capabilities: [
      {
        id: 'benefit-verification',
        label: 'Benefit Verification',
        title: 'Benefit Verification',
        description: 'Autonomous eligibility & coverage checks with payer systems.',
      },
      {
        id: 'prior-authorization',
        label: 'Prior Authorization',
        title: 'Prior Authorization',
        description: 'Smart determination, initiation, and follow-up across channels.',
      },
      {
        id: 'prescription-support',
        label: 'Prescription Support',
        title: 'Prescription Support',
        description: 'Context-aware verification and prior auth support workflows.',
      },
      {
        id: 'claim-status',
        label: 'Claim Status',
        title: 'Claim Status',
        description: 'Automated tracking and follow-ups for claim processing.',
      },
      {
        id: 'claim-denials',
        label: 'Claim Denials',
        title: 'Claim Denials',
        description: 'Intelligent denial management and appeal readiness.',
      },
    ],
  };

  const content = await getContent<PlatformSolutionsContent>('platform-solutions', fallback);
  return content || fallback;
}

// ============================================
// Who We Serve Page Content Types
// ============================================

export interface WhoWeServeHeroContent {
  headline: string;
  description: string;
}

export interface WhoWeServeTabCard {
  title: string;
  description: string;
}

export interface WhoWeServeTabContent {
  title: string;
  subtitle: string;
  cards: WhoWeServeTabCard[];
}

export interface WhoWeServeContent {
  hero: WhoWeServeHeroContent;
  tabs: {
    healthcareStakeholders: WhoWeServeTabContent;
    specialistPractice: WhoWeServeTabContent;
    revenueCycle: WhoWeServeTabContent;
    dental: WhoWeServeTabContent;
  };
}

/**
 * Get Who We Serve content with fallback
 */
export async function getWhoWeServeContent(): Promise<WhoWeServeContent> {
  const fallback: WhoWeServeContent = {
    hero: {
      headline: 'Who We Serve',
      description: 'From large health systems and specialized clinics to RCM firms and dental practices, we replace administrative friction with AI-enabled autonomous efficiency.',
    },
    tabs: {
      healthcareStakeholders: {
        title: 'Healthcare Stakeholders',
        subtitle: 'We collaborate with stakeholders across different verticals within the healthcare domain.',
        cards: [
          {
            title: 'Health Systems',
            description: 'Maximize Patient Throughput & Revenue. Delegate repetitive, high-volume insurance verification and authorization tasks to AI agents. Reduce administrative bottlenecks to improve patient flow and allow clinical teams to focus purely on quality of care.',
          },
          {
            title: 'Labs & Diagnostics',
            description: 'Accelerate Diagnostic Cycles and shorten the time between order and result. Automate the heavy lifting of repetitive pre-authorizations and patient follow-ups, ensuring technicians and pathologists focus on accurate, timely diagnostics, not phone tag.',
          },
          {
            title: 'Specialty Pharmacies',
            description: 'Reduce Time-to-Therapy and get critical medications to patients faster. Automate complex benefits investigations and prior authorizations to clear administrative hurdles instantly, boosting patient adherence and satisfaction.',
          },
          {
            title: 'Ambulatory Surgery Centers',
            description: 'Optimize Surgical Schedules and ensure every operating room slot is utilized and reimbursed. Automate repetitive insurance interactions to secure payment authorizations prior to arrival, keeping surgical teams focused on procedural excellence.',
          },
        ],
      },
      specialistPractice: {
        title: 'Specialist Practice Providers',
        subtitle: 'We specialize in providing efficient, customized solutions for specialized segments within the healthcare industry.',
        cards: [
          {
            title: 'Cardiology',
            description: 'Accelerate Cardiac Care and eliminate administrative delays for critical heart procedures. Automate repetitive insurance interactions to secure faster approvals, ensuring patients receive timely treatment and improved outcomes.',
          },
          {
            title: 'Oncology',
            description: 'Optimize Revenue & Care Pathways. Delegate repetitive insurance billing and claims management to AI. Reduce administrative overhead to accelerate revenue cycles, allowing clinical teams to focus entirely on life-saving patient care.',
          },
          {
            title: 'Infectious Diseases',
            description: 'Expedite Critical Treatments and automate repetitive insurance tasks to facilitate faster approvals. Ensure seamless coordination for time-sensitive interventions, improving outcomes when speed is critical.',
          },
          {
            title: 'Gastroenterology',
            description: 'Optimize Revenue & Efficiency. Enhance operational efficiency by automating insurance billing and claims processing. Reduce administrative workload and optimize revenue cycles, ensuring your practice runs at peak performance.',
          },
          {
            title: 'Nephrology',
            description: 'Ensure Timely Access and optimize patient care by automating insurance verification and pre-authorization processes for nephrology treatments and procedures, ensuring timely access to critical care services.',
          },
          {
            title: 'Neurology',
            description: 'Offload complex administrative workflows to AI. Enable specialists to focus on personalized care plans and innovative treatments without the distraction of paperwork.',
          },
          {
            title: 'Urology',
            description: 'Streamline Urology Workflows. Automate insurance interactions to optimize revenue cycles. Allow providers to dedicate more time to comprehensive care and innovative treatment planning.',
          },
          {
            title: 'Rheumatology',
            description: 'Enhance Chronic Care Management. Delegate insurance hurdles to AI to ensure continuity of care. Empower teams to deliver personalized treatments for complex autoimmune conditions with enhanced administrative efficiency.',
          },
          {
            title: 'Hematology',
            description: 'Accelerate Critical Access and streamline patient care with automated verification and pre-authorization tailored for hematology. Ensure timely access to life-saving interventions without administrative delays.',
          },
          {
            title: 'Anesthesia',
            description: 'Automate complex billing and pre-operative authorizations. Ensure seamless revenue capture and compliance while fully supporting surgical teams.',
          },
          {
            title: 'Orthopedics',
            description: 'Optimize Surgical Throughput and automate authorizations for surgeries and imaging. Reduce wait times to help patients regain mobility faster while ensuring payment security.',
          },
          {
            title: 'Pediatrics',
            description: 'Prioritize Family-Centric Care. Automate insurance verification and pre-authorization to remove administrative burdens. Allow providers to focus entirely on the health and comfort of young patients and their families.',
          },
        ],
      },
      revenueCycle: {
        title: 'Revenue Cycle Management',
        subtitle: 'Optimizing financial operations for healthcare organizations.',
        cards: [
          {
            title: 'Revenue Cycle Management',
            description: 'Maximize Revenue Integrity and improve margins with AI-driven automation for insurance eligibility verification and denial management. Ensure accurate billing and coding to maximize reimbursements, minimize revenue leakage, and reduce administrative costs through clean-claim precision.',
          },
        ],
      },
      dental: {
        title: 'Dental',
        subtitle: 'Transforming dental practice operations with AI-powered automation.',
        cards: [
          {
            title: 'Dental',
            description: 'Maximize Practice Revenue and improve revenue integrity by automating insurance eligibility verification and denial management. Ensure accurate billing and coding to maximize reimbursements and minimize revenue leakage, allowing your team to focus on patient care and chair-side excellence.',
          },
        ],
      },
    },
  };

  const content = await getContent<WhoWeServeContent>('who-we-serve', fallback);
  return content || fallback;
}

// ============================================
// React Hook for Client Components
// ============================================

/**
 * Check if content API is configured
 */
export function isContentAPIConfigured(): boolean {
  return Boolean(CONTENT_API_BASE);
}
