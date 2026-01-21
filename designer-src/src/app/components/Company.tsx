import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Clock, TrendingUp, Lightbulb, Users, Target, Phone, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";
import ceoImage from "figma:asset/d6874224e9e333bb927a992992096e640e5a5405.png";

interface CompanyProps {
  onNavigate: (page: 'home' | 'about' | 'team' | 'platform' | 'solutions') => void;
}

export const Company = ({ onNavigate }: CompanyProps) => {
  const stats = [
    {
      number: "60-80%",
      label: "Admin Time Saved",
      description: "Administrative time redirected from repetitive tasks back to meaningful patient care."
    },
    {
      number: "24/7",
      label: "Autonomous Operation",
      description: "AI agents working continuously across voice, fax, and web channels without supervision."
    },
    {
      number: "100%",
      label: "HIPAA Compliant",
      description: "Enterprise-grade security with SOC 2 Type II attestation for healthcare operations."
    },
    {
      number: "3",
      label: "Channel Coverage",
      description: "Voice calls, fax processing, and web portal navigation—all in one platform."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Question",
      description: "What if AI could autonomously act like a specialist — across voice, fax, and web channels?",
      highlight: true
    },
    {
      year: "2024",
      title: "HAGI Platform Launch",
      description: "Introduced Healthcare Administration General Intelligence — specialized autonomous AI for complex RCM tasks.",
      visual: true
    },
    {
      year: "2024",
      title: "Enterprise Compliance",
      description: "Achieved HIPAA compliance and SOC 2 Type II attestation, establishing foundation for enterprise healthcare.",
      highlight: false
    },
    {
      year: "2025",
      title: "Today",
      description: "Transforming healthcare operations with intelligent agents that converse, act, and complete work autonomously.",
      highlight: false
    }
  ];

  const capabilities = [
    { icon: Users, title: "Voice Agents", description: "Human-like conversations for extended payer calls" },
    { icon: Shield, title: "Fax Agents", description: "Intelligent extraction and action on fax documents" },
    { icon: TrendingUp, title: "Web Agents", description: "Autonomous portal navigation and task completion" }
  ];

  const principles = [
    { 
      icon: Target, 
      title: "Customer-First Solutions", 
      description: "We relentlessly focus on solving real customer problems. Every feature, every line of code exists to deliver measurable value to healthcare teams." 
    },
    { 
      icon: Lightbulb, 
      title: "Continuous Innovation", 
      description: "Innovation isn't a department—it's our operating system. We constantly push boundaries to stay ahead of healthcare's evolving challenges." 
    },
    { 
      icon: TrendingUp, 
      title: "Excellence Beyond Expectations", 
      description: "Good enough isn't in our vocabulary. We go above and beyond to deliver exceptional outcomes that exceed industry standards." 
    },
    { 
      icon: Shield, 
      title: "Radical Ownership", 
      description: "We take full ownership of our commitments. When we say we'll do something, we deliver—no excuses, no finger-pointing." 
    },
    { 
      icon: Users, 
      title: "Default to Trust", 
      description: "We build a culture where trust is the foundation. Transparency, honesty, and integrity guide every interaction with our team and clients." 
    },
    { 
      icon: Clock, 
      title: "First-Principles Thinking", 
      description: "We break down complex problems to their fundamental truths, building solutions from the ground up rather than following conventions." 
    },
    { 
      icon: Phone, 
      title: "Obsessive Attention to Detail", 
      description: "Excellence lives in the details. We sweat the small stuff because we know it's what separates good from extraordinary." 
    }
  ];

  return (
    <div className="relative bg-white">
      {/* Noise Grain Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
          <filter id="noiseFilterAbout">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch">
              <animate attributeName="baseFrequency" values="0.8;0.82;0.8" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAbout)" />
        </svg>
      </div>

      {/* Hero Section - Minimal */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-[64px] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Redefining RCM with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06003F] via-[#3D1B5F] to-[#FF4E3A]">Agentic AI</span>
            </h1>
            <p className="text-[20px] text-[#06003F]/60 leading-relaxed max-w-2xl">
              We're on a mission to dramatically improve access, adherence, and outcomes for patients 
              and the healthcare workforce by automating routine administrative work with autonomous AI agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-[#06003F]/[0.015]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-[6px] border border-[#06003F]/5 p-8"
              >
                <div className="text-[32px] font-bold text-[rgb(255,78,58)] leading-none mb-3">{stat.number}</div>
                <div className="text-[16px] font-semibold text-[#06003F] mb-2">{stat.label}</div>
                <p className="text-[14px] text-[#06003F]/50 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Timeline Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column - Story */}
            <div>
              <h2 className="text-[48px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-8">
                Building a Better Way to Manage Healthcare Admin, One Milestone at a Time
              </h2>
              <div className="space-y-6 text-[17px] text-[#06003F]/60 leading-relaxed">
                <p>
                  Healthcare back-office work is overloaded with repetitive tasks — benefit verification, 
                  prior authorizations, claims follow-ups, faxes, and portal logins. These processes consume 
                  60–80% of administrative time.
                </p>
                <p>
                  We asked a bold question: What if AI could autonomously act like a specialist across all channels? 
                  That question sparked our journey to build HAGI — Healthcare Administration General Intelligence.
                </p>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 border-l-2 border-[#06003F]/10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#FF4E3A]" />
                  
                  <div className="text-[13px] font-bold text-[#FF4E3A] mb-2 uppercase tracking-wider">{item.year}</div>
                  <h3 className="text-[24px] font-bold text-[#06003F] mb-3">{item.title}</h3>
                  <p className="text-[16px] text-[#06003F]/60 leading-relaxed">{item.description}</p>
                  
                  {/* Visual Element for certain milestones */}
                  {item.visual && (
                    <div className="mt-6 rounded-[6px] overflow-hidden bg-[#06003F]/5 aspect-[16/10] flex items-center justify-center border border-[#06003F]/10">
                      {/* Abstract System Diagram */}
                      <svg width="280" height="160" viewBox="0 0 280 160" className="opacity-40">
                        {/* Central Node */}
                        <circle cx="140" cy="80" r="24" fill="#06003F" opacity="0.1" />
                        <circle cx="140" cy="80" r="16" fill="#FF4E3A" opacity="0.3" />
                        
                        {/* Connecting Lines */}
                        <line x1="140" y1="80" x2="60" y2="40" stroke="#06003F" strokeWidth="1.5" opacity="0.2" />
                        <line x1="140" y1="80" x2="220" y2="40" stroke="#06003F" strokeWidth="1.5" opacity="0.2" />
                        <line x1="140" y1="80" x2="60" y2="120" stroke="#06003F" strokeWidth="1.5" opacity="0.2" />
                        <line x1="140" y1="80" x2="220" y2="120" stroke="#06003F" strokeWidth="1.5" opacity="0.2" />
                        
                        {/* Outer Nodes */}
                        <circle cx="60" cy="40" r="12" fill="#06003F" opacity="0.15" />
                        <circle cx="220" cy="40" r="12" fill="#06003F" opacity="0.15" />
                        <circle cx="60" cy="120" r="12" fill="#06003F" opacity="0.15" />
                        <circle cx="220" cy="120" r="12" fill="#06003F" opacity="0.15" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section - Full Horizontal Scroll */}
      <section className="relative py-32 overflow-hidden bg-[#F8F9FA]">
        <div className="relative">
          {/* Full-width Horizontal Scroll Container */}
          <div className="overflow-x-auto scrollbar-hide px-6 md:px-16">
            <div className="flex gap-6 pb-8">
              {/* First Card - Heading */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-shrink-0 w-[380px] bg-white rounded-[6px] border border-[#06003F]/10 p-12 flex flex-col justify-center"
              >
                <h2 className="text-[48px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-4">
                  Our<br />Operating<br />System
                </h2>
                <p className="text-[15px] text-[#06003F]/60 leading-relaxed">
                  Core principles that guide how we build, ship, and deliver excellence.
                </p>
                <div className="flex items-center gap-3 text-[#FF4E3A] group cursor-pointer">
                </div>
              </motion.div>

              {/* Principle Cards */}
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex-shrink-0 w-[380px] bg-white rounded-[6px] border border-[#06003F]/10 p-10 hover:border-[#FF4E3A]/30 hover:shadow-xl transition-all group cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-[6px] bg-[#E8F0FE] flex items-center justify-center mb-8 group-hover:bg-[#FFE8E5] transition-colors">
                      <Icon className="w-8 h-8 text-[#06003F]/70 group-hover:text-[#FF4E3A] transition-colors" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[22px] font-bold text-[#06003F] mb-4 leading-tight">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-[#06003F]/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}

              {/* Ending Spacer for better scroll experience */}
              <div className="flex-shrink-0 w-6 md:w-16" />
            </div>
          </div>

          {/* Scroll Hint - Subtle gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Capabilities Section - Apple-style Grid Layout */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#FF4E3A] mb-4">Capabilities</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#06003F] mb-6">
                Autonomous Healthcare Intelligence
              </h2>
              <p className="text-lg text-[#06003F]/60 leading-relaxed font-medium">
                Explore our AI agents' precision capabilities. From voice calls to document processing, 
                experience comprehensive automation at its finest.
              </p>
            </motion.div>
          </div>

          {/* Grid Layout - 2 rows x 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 - Col 1: Voice Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square relative rounded-[6px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761311984112-ce2c5db45984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHZvaWNlJTIwYXNzaXN0YW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4Njk3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Voice Agents"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Row 1 - Col 2: Voice Text Card (White) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square bg-[#F5F5F7] rounded-[6px] p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#EBEBED] transition-all"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#06003F] mb-4">
                  Voice<br />Agents
                </h3>
                <p className="text-[#06003F]/60 text-[15px] leading-relaxed">
                  Natural language AI that handles complex payer conversations with human-like understanding.
                </p>
              </div>
              <div className="text-[13px] font-medium text-[#FF4E3A] group-hover:underline underline-offset-4 transition-all">
                More information
              </div>
            </motion.div>

            {/* Row 1 - Col 3: Fax Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square relative rounded-[6px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzg2OTc2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fax Agents"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Row 1 - Col 4: Stats Card (Dark Navy) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square bg-[#06003F] rounded-[6px] p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#08004F] transition-all"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  24/7<br />Operation
                </h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  Continuous autonomous monitoring and task execution without supervision.
                </p>
              </div>
              <div className="text-[13px] font-medium text-[#FF4E3A] group-hover:underline underline-offset-4 transition-all">
                More information
              </div>
            </motion.div>

            {/* Row 2 - Col 1: Fax Text Card (Muted Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square bg-[#8E9EAB] rounded-[6px] p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#7E8E9B] transition-all"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Fax<br />Processing
                </h3>
                <p className="text-white/80 text-[15px] leading-relaxed">
                  Intelligent extraction and processing of medical records and authorizations with clinical accuracy.
                </p>
              </div>
              <div className="text-[13px] font-medium text-white group-hover:underline underline-offset-4 transition-all">
                More information
              </div>
            </motion.div>

            {/* Row 2 - Col 2: Fax Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square relative rounded-[6px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzg2OTc2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Document Processing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Row 2 - Col 3: Web Text Card (White) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square bg-[#F5F5F7] rounded-[6px] p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#EBEBED] transition-all"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#06003F] mb-4">
                  Web<br />Automation
                </h3>
                <p className="text-[#06003F]/60 text-[15px] leading-relaxed">
                  Navigate payer portals autonomously, completing eligibility checks to claims submissions.
                </p>
              </div>
              <div className="text-[13px] font-medium text-[#FF4E3A] group-hover:underline underline-offset-4 transition-all">
                More information
              </div>
            </motion.div>

            {/* Row 2 - Col 4: Web Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-1 aspect-square relative rounded-[6px] overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhdXRvbWF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Nzg2OTc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Web Automation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Section - Quote & Vision */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background - Deep Blue to Purple/Magenta */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B2E] via-[#1a0f3d] to-[#2d1147]" />
        
        {/* Radial Glow Effect (Top Right) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-[#FF4E3A]/40 via-[#8B3A8B]/30 to-transparent blur-3xl" />
        </div>

        {/* Radial Glow Effect (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-[#4E3AFF]/30 via-[#2d1147]/20 to-transparent blur-3xl" />
        </div>

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ceoPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ceoPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Quote & Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Quote */}
              <div className="mb-12">
                <div className="text-[#FF4E3A] text-[80px] leading-none mb-6 font-serif">"</div>
                <p className="text-[24px] md:text-[28px] text-white/95 leading-relaxed mb-8 font-light">
                  We're giving back time to healthcare professionals so that they can focus on high-order patient tasks and driving radical efficiencies with every conversation.
                </p>
                <div className="border-l-2 border-[#FF4E3A] pl-6">
                  <div className="text-white font-bold text-[18px] mb-1">Parag Jhaveri</div>
                  <div className="text-[#FF4E3A] text-[14px] font-medium">CEO, Founder</div>
                </div>
              </div>

              {/* Additional Bio */}
              <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                <p>
                  Parag founded Agentic AI with a singular vision: to eliminate the administrative burden that keeps healthcare professionals from doing what they do best—caring for patients.
                </p>
                <p>
                  With deep expertise in artificial intelligence and healthcare operations, Parag has assembled a world-class team to build HAGI, an autonomous AI platform that doesn't just automate tasks—it fundamentally transforms how healthcare organizations operate.
                </p>
                <p>
                  Under his leadership, Agentic AI has pioneered multi-channel autonomous agents capable of handling voice calls, fax processing, and web navigation with human-level competence, all while maintaining enterprise-grade security and compliance.
                </p>
              </div>
            </motion.div>

            {/* Right Column - CEO Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-[6px] overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBmb3VuZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3OTQyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Parag Jhaveri - CEO & Founder" 
                  className="w-full h-auto object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06003F]/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative py-32 bg-[#F8F9FA] overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[42px] md:text-[52px] font-bold text-[#06003F] tracking-tight leading-[1.1] mb-4">
              Meet the Agentic AI team
            </h2>
            <p className="text-[16px] text-[#06003F]/60 max-w-2xl leading-relaxed">
              Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3ODQ3NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah Chen"
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* White card overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">Sarah Chen</h3>
                    <p className="text-[13px] text-[#06003F]/60">VP of Engineering</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3Njc5NDU5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marcus Rodriguez"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">Marcus Rodriguez</h3>
                    <p className="text-[13px] text-[#06003F]/60">Head of AI Research</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2Nzg2MTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Priya Patel"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">Priya Patel</h3>
                    <p className="text-[13px] text-[#06003F]/60">Chief Product Officer</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758873272249-71e3d173f3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNoJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc2Nzk0NTkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="James Wilson"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">James Wilson</h3>
                    <p className="text-[13px] text-[#06003F]/60">Senior ML Engineer</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzg4MTEwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Alex Kumar"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">Alex Kumar</h3>
                    <p className="text-[13px] text-[#06003F]/60">Compliance Lead</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Member 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative"
            >
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBlbmdpbmVlciUyMGhlYWRzaG90fGVufDF8fHx8MTc2Nzk0NTkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Emily Zhang"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[6px] p-4 shadow-lg flex items-center justify-between group-hover:shadow-xl transition-shadow">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#06003F] mb-0.5">Emily Zhang</h3>
                    <p className="text-[13px] text-[#06003F]/60">Head of Design</p>
                  </div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#06003F] flex items-center justify-center group-hover:bg-[#FF4E3A] transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-end mt-12"
          >
            <button 
              onClick={() => onNavigate('team')}
              className="flex items-center gap-2 px-6 py-3 rounded-[6px] border border-[#06003F]/20 hover:border-[#FF4E3A] hover:bg-[#FF4E3A] text-[#06003F] hover:text-white transition-all group"
            >
              <span className="text-[14px] font-medium">View all members</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Horizontal Scroll */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-4">
              Leadership & Advisors
            </h2>
            <p className="text-[16px] text-[#06003F]/50 max-w-2xl">
              Industry veterans and visionaries guiding our mission to transform healthcare administration.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide px-6 md:px-16">
            <div className="flex gap-4 pb-8">
              {/* Dave Vreeland - Investor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2Nzk0MTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dave Vreeland"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#FF4E3A] font-bold mb-2">Investor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Dave Vreeland</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">Senior Managing Director</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Investor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Dave Vreeland</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Leading healthcare technology investments with expertise in revenue cycle management and enterprise software.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Caduceus</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Goldman Sachs</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">McKinsey</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mary Grove - Investor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758599543111-a7ed48b8ad2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMENFTyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3Njc4Njk5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mary Grove"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#FF4E3A] font-bold mb-2">Investor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Mary Grove</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">Managing Partner</p>
                  <p className="text-[12px] text-[#06003F]/40">Bread & Butter Ventures</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Investor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Mary Grove</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Venture capital leader focused on transformative healthcare and technology companies with proven track record in scaling startups.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Google Ventures</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Revolution</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Andrew Vaz - Advisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHN1aXQlMjBwb3J0cmFpdCUyMG9mZmljZXxlbnwxfHx8fDE3Njc5NDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Andrew Vaz"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#06003F]/40 font-bold mb-2">Advisor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Andrew Vaz</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">Ex-Global Chief Innovation Officer</p>
                  <p className="text-[12px] text-[#06003F]/40">Deloitte</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Advisor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Andrew Vaz</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Innovation strategist and digital transformation expert with extensive experience leading global consulting initiatives.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Deloitte</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Accenture</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sheena Menezes - Advisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwd2hpdGUlMjBzaGlydHxlbnwxfHx8fDE3Njc5NDE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sheena Menezes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#06003F]/40 font-bold mb-2">Advisor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Sheena Menezes, Ph.D.</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">CEO and Co-Founder</p>
                  <p className="text-[12px] text-[#06003F]/40">Simple HealthKit</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Advisor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Sheena Menezes, Ph.D.</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Healthcare technology entrepreneur focused on patient engagement and digital health solutions with deep clinical expertise.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Simple HealthKit</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Stanford</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Paul Conley - Advisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1594938350684-4c251b5030d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW4lMjByZWQlMjB0aWUlMjBzdWl0fGVufDF8fHx8MTc2Nzk0MTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Paul Conley"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#06003F]/40 font-bold mb-2">Advisor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Paul Conley</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">Chairman & CEO</p>
                  <p className="text-[12px] text-[#06003F]/40">General Inception</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Advisor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Paul Conley</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Seasoned executive with expertise in building and scaling technology companies in healthcare and enterprise software markets.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">General Inception</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Oracle</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mark Nathan - Advisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1763034179057-acad3a072568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhlY3V0aXZlJTIwY2FzdWFsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzk0MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mark Nathan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#06003F]/40 font-bold mb-2">Advisor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">Mark Nathan</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">CEO & Founder</p>
                  <p className="text-[12px] text-[#06003F]/40">Mangoose Health</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Advisor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">Mark Nathan</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Healthcare software innovator building solutions that improve patient outcomes and streamline clinical workflows.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Mangoose Health</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Athenahealth</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* James Fan - Advisor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group bg-white rounded-[6px] border border-[#06003F]/10 flex-shrink-0 w-[280px] overflow-hidden hover:border-[#FF4E3A]/30 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F7]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzk0MTQ1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="James Fan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#06003F]/40 font-bold mb-2">Advisor</div>
                  <h4 className="text-[17px] font-bold text-[#06003F] mb-1">James Fan</h4>
                  <p className="text-[13px] text-[#06003F]/60 mb-0.5">Co-Founder & CTO</p>
                  <p className="text-[12px] text-[#06003F]/40">Tomato.ai</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#3D1B5F] to-[#FF4E3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-5 flex flex-col justify-between rounded-[6px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-2">Advisor</div>
                    <h4 className="text-[17px] font-bold text-white mb-3">James Fan</h4>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      AI and machine learning expert building intelligent automation platforms for enterprise and healthcare applications.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Previously at</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Tomato.ai</div>
                      <div className="px-2.5 py-1 bg-white/10 rounded-[4px] text-[11px] text-white/90 font-medium">Google</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Ending Spacer */}
              <div className="flex-shrink-0 w-6 md:w-16" />
            </div>
          </div>

          {/* Scroll Hint Gradient */}
          <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Full-Width CTA with Gradient Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE8E5] via-[#E8E5FF] to-[#E5F5FF] opacity-30" />
        
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06003F" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-16 max-w-4xl relative z-10 text-center">
          <h2 className="text-[56px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
            See VoiceCare AI in Action
          </h2>
          <p className="text-[18px] text-[#06003F]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            Speed up your healthcare operations with our autonomous AI platform. Discover how we're redirecting 
            time back to people, not processes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#FF4E3A] text-white px-8 py-4 rounded-[6px] text-[15px] font-semibold hover:bg-[#FF4E3A]/90 transition-all flex items-center gap-2 group">
              Get a demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
            <button className="bg-white text-[#06003F] px-8 py-4 rounded-[6px] text-[15px] font-semibold border border-[#06003F]/10 hover:border-[#06003F]/20 transition-all">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};