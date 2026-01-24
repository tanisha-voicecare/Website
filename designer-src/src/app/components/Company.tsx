import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";

interface CompanyProps {
  onNavigate: (
    page: "home" | "about" | "team" | "platform" | "solutions",
  ) => void;
}

export const Company = ({ onNavigate }: CompanyProps) => {
  const principles = [
    {
      icon: Target,
      title: "Solving Customer Problems",
      description:
        "We relentlessly focus on solving real customer problems with measurable value.",
    },
    {
      icon: Lightbulb,
      title: "Innovate Constantly",
      description:
        "Innovation isn't a department—it's our operating system for staying ahead.",
    },
    {
      icon: TrendingUp,
      title: "Go Above & Beyond",
      description:
        "Good enough isn't in our vocabulary. We deliver exceptional outcomes.",
    },
    {
      icon: Shield,
      title: "Take Ownership",
      description:
        "We take full ownership of our commitments—no excuses, no finger-pointing.",
    },
    {
      icon: Users,
      title: "Default Trust",
      description:
        "Transparency, honesty, and integrity guide every interaction with our team.",
    },
    {
      icon: Clock,
      title: "Think in First Principles",
      description:
        "We break down complex problems to fundamentals, building from the ground up.",
    },
    {
      icon: Zap,
      title: "Attention to Detail",
      description:
        "Excellence lives in the details—we sweat the small stuff because it matters.",
    },
  ];

  const advisors = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Advisor",
      designation: "Chief Medical Officer, Stanford Health",
      description:
        "Leading digital health transformation initiatives with 15+ years in healthcare innovation. Expert in clinical AI implementation and patient care optimization.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      companies: ["Stanford Health", "NIH"],
    },
    {
      name: "Michael Rodriguez",
      role: "Investor",
      designation: "Partner, Sequoia Capital",
      description:
        "Early-stage investor in healthcare technology with portfolio companies valued at $10B+. Former founder of two successful health-tech startups.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      companies: ["Sequoia Capital", "Y Combinator"],
    },
    {
      name: "Dr. Priya Patel",
      role: "Advisor",
      designation: "Former CTO, Epic Systems",
      description:
        "Healthcare software architecture expert with 20+ years building EHR systems. Specializes in AI integration and interoperability standards.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      companies: ["Epic Systems", "HL7"],
    },
    {
      name: "James Mitchell",
      role: "Investor",
      designation: "Managing Director, Andreessen Horowitz",
      description:
        "Focus on AI and enterprise software investments. Led funding rounds for 15+ unicorn companies in the healthcare and automation space.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      companies: ["Andreessen Horowitz", "Tiger Global"],
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Medical Advisor",
      designation: "Dean of Medicine, Johns Hopkins",
      description:
        "Renowned for advancing clinical AI ethics and implementing AI-assisted diagnostic tools. Published 100+ papers on healthcare technology adoption.",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      companies: ["Johns Hopkins", "FDA"],
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Noise Grain Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
          <filter id="noiseFilterCompany">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            >
              <animate
                attributeName="baseFrequency"
                values="0.8;0.82;0.8"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilterCompany)"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Simple Gradient Background */}
        <div className="absolute inset-y-0 left-12 right-12 bg-gradient-to-br from-[#06003F] to-[#FF4E3A] rounded-b-[29px]" />

        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-[18px] text-white/80 mb-6 tracking-wide">
              Supercharging administration with
            </div>
            <h1 className="text-[84px] md:text-[96px] font-bold tracking-[-0.04em] leading-[1.1] text-white inline-block px-2 pb-4">
              Artificial Intelligence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-24 bg-[rgb(255,255,255)]">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[48px] font-bold text-[#06003F] mb-6">
              Our Mission
            </h2>
            <p className="text-[18px] text-[#06003F]/60 leading-relaxed max-w-2xl mx-auto mb-12">
              To dramatically improve access, adherence, and
              outcomes for the patients and the healthcare
              workforce through the application of generative
              AI.
            </p>
          </motion.div>

          {/* Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[24px] bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] p-1"
          >
            <div className="relative rounded-[23px] bg-[#2C3E50] p-16 md:p-24 flex items-center justify-center min-h-[400px] overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="missionPattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="1.5"
                        fill="white"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#missionPattern)"
                  />
                </svg>
              </div>

              {/* Center Icon/Visual */}
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-[24px] bg-gradient-to-br from-[#4A5568] to-[#2D3748] flex items-center justify-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/80"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#1a0f3d] to-[#2d1147]" />

        {/* Radial Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-[#FF4E3A]/40 via-[#8B3A8B]/30 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#FF4E3A] text-[80px] leading-none mb-6 font-serif">
                "
              </div>
              <p className="text-[28px] text-white/95 leading-relaxed mb-8 font-light">
                We're giving back time to healthcare
                professionals so that they can focus on
                high-order patient tasks, and driving radical
                efficiencies with every conversation.
              </p>
              <div className="border-l-2 border-[#FF4E3A] pl-6">
                <div className="text-white font-bold text-[20px] mb-1">
                  Parag Jhaveri
                </div>
                <div className="text-[#FF4E3A] text-[16px] font-medium">
                  CEO, Founder
                </div>
              </div>
            </motion.div>

            {/* Right Column - CEO Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[12px] overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Parag Jhaveri - CEO & Founder"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Principles Section */}
      <section className="relative py-32 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[48px] font-bold text-[#06003F] mb-4">
              Our Operating Principles
            </h2>
            <p className="text-[18px] text-[#06003F]/60 max-w-2xl mx-auto">
              Core principles that guide how we build, ship, and
              deliver excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-[6px] bg-[#06003F]/5 flex items-center justify-center group-hover:bg-[#FF4E3A]/10 transition-colors">
                      <Icon
                        className="w-6 h-6 text-[#06003F]/70 group-hover:text-[#FF4E3A] transition-colors"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-[#06003F] mb-2 leading-tight">
                      {principle.title}
                    </h3>
                    <p className="text-[15px] text-[#06003F]/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1800px] relative z-10">
          {/* Gradient Card */}
          <div className="relative rounded-[12px] bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px] py-12">
                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-white px-12 md:px-16 flex flex-col justify-center"
                >
                  <h2 className="text-[56px] font-bold mb-6 leading-tight">
                    About Us
                  </h2>
                  <p className="text-[18px] text-white/90 leading-relaxed mb-8 max-w-lg">
                    We are building a Healthcare Administration
                    General Intelligence (HAGI) company for the
                    entire back-office. Powered by advanced
                    Generative AI, we are massively eliminating
                    administrative burden and radically
                    improving operational efficiency.
                  </p>
                  <div>
                    <button className="px-8 py-4 bg-white text-[#06003F] hover:bg-white/90 font-semibold rounded-[6px] transition-all hover:scale-105">
                      Learn More About HAGI
                    </button>
                  </div>
                </motion.div>

                {/* Right Column - Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative overflow-hidden flex items-center justify-center px-12 md:px-16"
                >
                  <div className="relative w-full max-w-md">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                      alt="Healthcare AI Interface"
                      className="w-full h-auto object-cover rounded-[12px] aspect-square"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors & Investors Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-[56px] font-bold text-[#06003F] mb-4">
              Our Advisors & Investors
            </h2>
            <p className="text-[20px] text-[#06003F]/60 max-w-3xl mx-auto">
              Backed by industry leaders who share our vision
              for transforming healthcare administration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[12px] border border-[#06003F]/10 overflow-hidden transition-all group"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-[#F8F9FA]">
                  <ImageWithFallback
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-[24px] font-bold text-[#06003F] mb-2">
                      {advisor.name}
                    </h3>
                    <div className="text-[14px] font-semibold text-[#FF4E3A] mb-1 uppercase tracking-wide">
                      {advisor.role}
                    </div>
                    <div className="text-[15px] text-[#06003F]/60 font-medium">
                      {advisor.designation}
                    </div>
                  </div>

                  <p className="text-[15px] text-[#06003F]/70 leading-relaxed mb-6">
                    {advisor.description}
                  </p>

                  {/* Company Logos */}
                  <div className="flex gap-3 flex-wrap">
                    {advisor.companies.map((company, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-[#F8F9FA] rounded-[6px] text-[12px] font-medium text-[#06003F]/80"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};