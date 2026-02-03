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
// React Hook for Client Components
// ============================================

/**
 * Check if content API is configured
 */
export function isContentAPIConfigured(): boolean {
  return Boolean(CONTENT_API_BASE);
}
