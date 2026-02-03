'use client';

/**
 * WhoWeServeTabs Component
 * Dynamic content from WordPress + PIXEL-PERFECT design
 */

import { useState, ComponentType, SVGProps } from 'react';
import { motion } from 'motion/react';
import {
  FlaskConical,
  Pill,
  Stethoscope,
  Heart,
  Activity,
  Brain,
  Bone,
  Baby,
  Syringe,
  Plus,
  LucideProps,
} from 'lucide-react';
import {
  VirusIcon,
  StomachIcon,
  BloodIcon,
  KidneyIcon,
  ToothIcon,
} from './MedicalIcons';
import type { WhoWeServeContent, WhoWeServeTabCard } from '@/lib/content';

// ============================================
// Types
// ============================================

interface WhoWeServeTabsProps {
  content?: WhoWeServeContent['tabs'];
}

type TabId =
  | 'healthcare-stakeholders'
  | 'specialist-practice'
  | 'revenue-cycle'
  | 'dental';

interface Tab {
  id: TabId;
  label: string;
}

type IconComponent = ComponentType<LucideProps> | ComponentType<SVGProps<SVGSVGElement>>;

interface Card {
  icon: IconComponent;
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  subtitle: string;
  cards: Card[];
}

// ============================================
// Tab Labels
// ============================================

const tabs: Tab[] = [
  { id: 'healthcare-stakeholders', label: 'Healthcare Stakeholders' },
  { id: 'specialist-practice', label: 'Specialist Practice Providers' },
  { id: 'revenue-cycle', label: 'Revenue Cycle Management' },
  { id: 'dental', label: 'Dental' },
];

// ============================================
// Icon Mapping
// ============================================

const ICON_MAP: Record<string, IconComponent> = {
  'Health Systems': Plus,
  'Labs & Diagnostics': FlaskConical,
  'Specialty Pharmacies': Pill,
  'Ambulatory Surgery Centers': Stethoscope,
  'Cardiology': Heart,
  'Oncology': Activity,
  'Infectious Diseases': VirusIcon,
  'Gastroenterology': StomachIcon,
  'Nephrology': KidneyIcon,
  'Neurology': Brain,
  'Urology': KidneyIcon,
  'Rheumatology': Bone,
  'Hematology': BloodIcon,
  'Anesthesia': Syringe,
  'Orthopedics': Bone,
  'Pediatrics': Baby,
  'Revenue Cycle Management': Plus,
  'Dental': ToothIcon,
};

// ============================================
// Default Content (Fallback)
// ============================================

const DEFAULT_TABS_CONTENT: WhoWeServeContent['tabs'] = {
  healthcareStakeholders: {
    title: 'Healthcare Stakeholders',
    subtitle: 'We collaborate with stakeholders across different verticals within the healthcare domain.',
    cards: [
      { title: 'Health Systems', description: 'Maximize Patient Throughput & Revenue. Delegate repetitive, high-volume insurance verification and authorization tasks to AI agents.' },
      { title: 'Labs & Diagnostics', description: 'Accelerate Diagnostic Cycles and shorten the time between order and result.' },
      { title: 'Specialty Pharmacies', description: 'Reduce Time-to-Therapy and get critical medications to patients faster.' },
      { title: 'Ambulatory Surgery Centers', description: 'Optimize Surgical Schedules and ensure every operating room slot is utilized and reimbursed.' },
    ],
  },
  specialistPractice: {
    title: 'Specialist Practice Providers',
    subtitle: 'We specialize in providing efficient, customized solutions for specialized segments within the healthcare industry.',
    cards: [
      { title: 'Cardiology', description: 'Accelerate Cardiac Care and eliminate administrative delays for critical heart procedures.' },
      { title: 'Oncology', description: 'Optimize Revenue & Care Pathways. Delegate repetitive insurance billing and claims management to AI.' },
      { title: 'Infectious Diseases', description: 'Expedite Critical Treatments and automate repetitive insurance tasks to facilitate faster approvals.' },
      { title: 'Gastroenterology', description: 'Optimize Revenue & Efficiency. Enhance operational efficiency by automating insurance billing and claims processing.' },
      { title: 'Nephrology', description: 'Ensure Timely Access and optimize patient care by automating insurance verification and pre-authorization processes.' },
      { title: 'Neurology', description: 'Offload complex administrative workflows to AI. Enable specialists to focus on personalized care plans.' },
      { title: 'Urology', description: 'Streamline Urology Workflows. Automate insurance interactions to optimize revenue cycles.' },
      { title: 'Rheumatology', description: 'Enhance Chronic Care Management. Delegate insurance hurdles to AI to ensure continuity of care.' },
      { title: 'Hematology', description: 'Accelerate Critical Access and streamline patient care with automated verification and pre-authorization.' },
      { title: 'Anesthesia', description: 'Automate complex billing and pre-operative authorizations. Ensure seamless revenue capture and compliance.' },
      { title: 'Orthopedics', description: 'Optimize Surgical Throughput and automate authorizations for surgeries and imaging.' },
      { title: 'Pediatrics', description: 'Prioritize Family-Centric Care. Automate insurance verification and pre-authorization to remove administrative burdens.' },
    ],
  },
  revenueCycle: {
    title: 'Revenue Cycle Management',
    subtitle: 'Optimizing financial operations for healthcare organizations.',
    cards: [
      { title: 'Revenue Cycle Management', description: 'Maximize Revenue Integrity and improve margins with AI-driven automation for insurance eligibility verification and denial management.' },
    ],
  },
  dental: {
    title: 'Dental',
    subtitle: 'Transforming dental practice operations with AI-powered automation.',
    cards: [
      { title: 'Dental', description: 'Maximize Practice Revenue and improve revenue integrity by automating insurance eligibility verification and denial management.' },
    ],
  },
};

// ============================================
// Helper Function
// ============================================

const getTabContent = (activeTab: TabId, tabsContent: WhoWeServeContent['tabs']): TabContent => {
  const mapCardsWithIcons = (cards: WhoWeServeTabCard[]): Card[] => {
    return cards.map((card) => ({
      icon: ICON_MAP[card.title] || Plus,
      title: card.title,
      description: card.description,
    }));
  };

  switch (activeTab) {
    case 'healthcare-stakeholders':
      return {
        title: tabsContent.healthcareStakeholders.title,
        subtitle: tabsContent.healthcareStakeholders.subtitle,
        cards: mapCardsWithIcons(tabsContent.healthcareStakeholders.cards),
      };
    case 'specialist-practice':
      return {
        title: tabsContent.specialistPractice.title,
        subtitle: tabsContent.specialistPractice.subtitle,
        cards: mapCardsWithIcons(tabsContent.specialistPractice.cards),
      };
    case 'revenue-cycle':
      return {
        title: tabsContent.revenueCycle.title,
        subtitle: tabsContent.revenueCycle.subtitle,
        cards: mapCardsWithIcons(tabsContent.revenueCycle.cards),
      };
    case 'dental':
      return {
        title: tabsContent.dental.title,
        subtitle: tabsContent.dental.subtitle,
        cards: mapCardsWithIcons(tabsContent.dental.cards),
      };
    default:
      return {
        title: tabsContent.healthcareStakeholders.title,
        subtitle: tabsContent.healthcareStakeholders.subtitle,
        cards: mapCardsWithIcons(tabsContent.healthcareStakeholders.cards),
      };
  }
};

// ============================================
// Component
// ============================================

export function WhoWeServeTabs({ content }: WhoWeServeTabsProps) {
  const tabsContent = content || DEFAULT_TABS_CONTENT;
  const [activeTab, setActiveTab] = useState<TabId>('healthcare-stakeholders');
  const currentContent = getTabContent(activeTab, tabsContent);

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Tab Navigation - horizontal scroll on mobile */}
        <div className="flex overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16 pb-2 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 overscroll-x-contain [-webkit-overflow-scrolling:touch] scrollbar-hide">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
              className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-[6px] text-[12px] sm:text-[13px] md:text-[14px] font-semibold transition-all whitespace-nowrap min-w-max flex-shrink-0 md:flex-shrink ${
                activeTab === tab.id
                  ? 'bg-[#FF4E3A] text-white'
                  : 'bg-[#F5F5F7] md:bg-white border border-[#06003F]/10 text-[#06003F] hover:border-[#FF4E3A]/30'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title and Subtitle */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#06003F] tracking-tight leading-[1.1] mb-3 sm:mb-4">
              {currentContent.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#06003F]/60 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {currentContent.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-[#06003F]/10 rounded-[12px] p-5 sm:p-6 md:p-7 lg:p-8 hover:border-[#FF4E3A]/30 transition-all duration-300 w-full min-w-0 overflow-hidden will-change-transform"
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-[10px] sm:rounded-[12px] bg-[#FF4E3A] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shrink-0">
                    <IconComponent
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#06003F] mb-3 sm:mb-4 group-hover:text-[#FF4E3A] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#06003F]/60 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
