'use client';

/**
 * PricingFAQ Component
 * Tabbed FAQ section with Pricing, Implementation, Support
 * Dynamic content from WordPress + matching site design
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  DollarSign,
  Calendar,
  Headphones,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';
import type { PricingFAQContent } from '@/lib/content';

interface PricingFAQProps {
  content?: PricingFAQContent;
}

// Animation constants matching site design
const EASING = {
  smooth: [0.4, 0, 0.2, 1] as const,
};

const ANIMATION_DURATION = {
  normal: 0.6,
};

type TabKey = 'pricing' | 'implementation' | 'support';

// Tab configuration with icons
const tabs: { key: TabKey; label: string; icon: LucideIcon }[] = [
  { key: 'pricing', label: 'Pricing', icon: DollarSign },
  { key: 'implementation', label: 'Implementation', icon: Calendar },
  { key: 'support', label: 'Support', icon: Headphones },
];

// Default content from existing voicecare.ai/pricing
const DEFAULT_CONTENT: PricingFAQContent = {
  tabs: {
    pricing: [
      'We charge a price per successful call or a fixed monthly price (SaaS) based on customer archetype.',
      'Discounted pricing is available to customers who engage with us through multi-year contracts.',
    ],
    implementation: [
      'We offer a no-cost trial period during which we will make a certain number of agreed upon calls for you to experience the capabilities of the VoiceCare platform.',
      'Post the trial period, the full-fledged implementation of the platform typically takes 30 calendar days.',
    ],
    support: [
      'For every customer, we offer three kinds of support - technical support, customer success manager and the ability to chat with our team of experts during business hours via VoiceCare\'s portal chat.',
    ],
  },
};

export function PricingFAQ({ content }: PricingFAQProps) {
  const faqContent = content || DEFAULT_CONTENT;
  const [activeTab, setActiveTab] = React.useState<TabKey>('pricing');

  // Get content for current tab
  const getCurrentContent = (): string[] => {
    return faqContent.tabs[activeTab] || [];
  };

  const currentContent = getCurrentContent();
  const ActiveIcon = tabs.find(t => t.key === activeTab)?.icon || DollarSign;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{
            duration: ANIMATION_DURATION.normal,
            ease: EASING.smooth,
          }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#06003F] text-white shadow-lg'
                    : 'bg-[#F5F5F7] text-[#06003F] hover:bg-[#06003F]/10 border border-[#06003F]/10'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASING.smooth }}
          className="max-w-4xl mx-auto"
        >
          {/* Icon Header */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FF4E3A]/10 to-[#FF4E3A]/5 flex items-center justify-center"
            >
              <ActiveIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF4E3A]" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Content Cards */}
          <div className="space-y-4 sm:space-y-6">
            {currentContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: EASING.smooth,
                }}
                className="bg-[#F8F9FA] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-[#FF4E3A]/5 hover:border-[#FF4E3A]/20 border border-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4E3A]" strokeWidth={2} />
                  </div>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#06003F] leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-[#06003F]/60 text-base sm:text-lg mb-6">
            Ready to get started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule-demo"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FF4E3A] text-white rounded-lg font-medium hover:brightness-110 transition-all text-[15px]"
            >
              Schedule a Demo
            </a>
            <a
              href="/partner-with-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#06003F] text-white rounded-lg font-medium hover:bg-[#06003F]/90 transition-all text-[15px]"
            >
              Partner with Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingFAQ;
