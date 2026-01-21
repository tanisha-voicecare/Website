import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, FileText, Globe, Search, BarChart3, Settings, CheckCircle2, Shield, Clock, Users, TrendingUp, Sparkles, Brain, Zap, Target, Activity, Database, Network, Play, ChevronRight, ChevronLeft } from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Platform = ({ onNavigate }: { onNavigate: (view: 'home' | 'about' | 'team' | 'platform' | 'solutions') => void }) => {
  const [activeTab, setActiveTab] = useState("automate");

  const capabilities = [
    {
      id: "automate",
      icon: Settings,
      label: "Automate Tasks",
      title: "Automate Tasks & Conversations",
      description: "One click scheduling + autonomous agent execution across all channels.",
      demo: "Schedule verification calls, process fax requests, and execute web tasks automatically."
    },
    {
      id: "search",
      icon: Search,
      label: "Search Conversations",
      title: "Search Across Conversations",
      description: "Find structured data from calls, faxes, transcripts, and summaries instantly.",
      demo: "Query patient eligibility, authorization status, or claim details from any conversation."
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "AI Analytics",
      title: "AI-Powered Analytics",
      description: "Actionable insights on performance and workflow optimization in real-time.",
      demo: "Track call success rates, processing times, and operational efficiency metrics."
    },
    {
      id: "customize",
      icon: Sparkles,
      label: "Customize Flows",
      title: "Customize Conversations",
      description: "Tailor agent ask flows for specific RCM outcomes and workflows.",
      demo: "Build custom conversation paths for benefit verification, prior auth, and claims."
    }
  ];

  const solutions = [
    {
      title: "Benefit Verification",
      description: "Autonomous eligibility & coverage checks with payer systems.",
      gradient: "from-blue-400 via-purple-400 to-pink-400"
    },
    {
      title: "Prior Authorization",
      description: "Smart determination, initiation, and follow-up across channels.",
      gradient: "from-orange-400 via-red-400 to-pink-400"
    },
    {
      title: "Prescription Support",
      description: "Context-aware verification and prior auth support workflows.",
      gradient: "from-cyan-400 via-blue-400 to-purple-400"
    },
    {
      title: "Claim Status & Denials",
      description: "Automated tracking, follow-ups, & appeal readiness.",
      gradient: "from-purple-400 via-pink-400 to-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - ElevenLabs Style Split Layout */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          {/* Split Layout: Headline Left, Description Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[56px] md:text-[72px] font-bold text-[#06003F] tracking-tight leading-[1.05]">
                The Intelligent RCM Platform
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-end"
            >
              <p className="text-[17px] text-[#06003F]/70 leading-relaxed mb-8">
                One secure, agentic AI platform that automates voice, fax, and web-driven administrative work — with analytics and orchestration built in.
              </p>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-[#06003F] text-white rounded-[6px] font-semibold text-[14px] hover:bg-[#06003F]/90 transition-all shadow-xl shadow-[#06003F]/10"
                >
                  Schedule Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-white border border-[#06003F]/10 text-[#06003F] rounded-[6px] font-semibold text-[14px] hover:bg-black/5 transition-all shadow-sm"
                >
                  See It In Action
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Large Feature Cards - Horizontal Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-[12px] overflow-hidden bg-gradient-to-br from-[#06003F] to-[#1a0f4d] cursor-pointer"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558731991-cb3430a08bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBwaG9uZSUyMGNhbGx8ZW58MXx8fHwxNzY3OTM4OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Voice Agents"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#06003F] via-[#06003F]/80 to-transparent" />
              
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-3 text-white mb-2">
                  <Phone className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[18px] font-bold">Voice Agents</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[13px] text-white/70">Autonomous phone conversations with payers</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-[12px] overflow-hidden bg-gradient-to-br from-[#0d4f5f] to-[#1a7a8a] cursor-pointer"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3Njc5NTczODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fax Agents"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d4f5f] via-[#0d4f5f]/80 to-transparent" />
              
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-3 text-white mb-2">
                  <FileText className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[18px] font-bold">Fax Agents</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[13px] text-white/70">Intelligent document processing and routing</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-[12px] overflow-hidden bg-gradient-to-br from-[#4a4a4a] to-[#6a6a6a] cursor-pointer"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1746292506315-e346cba2af48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBicm93c2VyJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3Njc5NTczODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web Agents"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a] via-[#4a4a4a]/80 to-transparent" />
              
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-3 text-white mb-2">
                  <Globe className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[18px] font-bold">Web Agents</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[13px] text-white/70">Automated portal navigation and data entry</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powered by HAGI Section */}
      <section className="relative py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          {/* Section Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase mb-6">
                HAGI
              </div>
              <h2 className="text-[48px] md:text-[56px] font-medium text-white tracking-tight leading-[1.1]">
                Powered by Healthcare Administration General Intelligence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-end"
            >
              <div>
                <p className="text-[16px] text-white/60 leading-relaxed mb-8">
                  At the core of our platform is Healthcare Administration General Intelligence — a purpose-built agentic AI architecture that plans, acts, and learns from real-world healthcare RCM workflows.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-[#FF4E3A] text-white rounded-[6px] font-semibold text-[14px] hover:bg-[#FF4E3A]/90 transition-all shadow-xl shadow-[#FF4E3A]/20 flex items-center gap-2 group"
                >
                  Learn About HAGI
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* HAGI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08]">
            {[
              {
                icon: Brain,
                title: "Intelligent Planning",
                description: "Strategic workflow design and task orchestration"
              },
              {
                icon: Zap,
                title: "Autonomous Action",
                description: "Self-directed execution across multiple systems"
              },
              {
                icon: Target,
                title: "Continuous Learning",
                description: "Adaptive improvement from every interaction"
              },
              {
                icon: Shield,
                title: "Secure Execution",
                description: "Enterprise-grade safety and compliance"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.08,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="bg-[#0A0A0A] p-8 hover:bg-[#111111] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF4E3A]/10 flex items-center justify-center mb-6 text-[#FF4E3A] group-hover:bg-[#FF4E3A]/20 transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-medium text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Platform Capabilities */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#06003F] tracking-tight leading-[1.05]">
                What the Platform Does
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-end"
            >
              <p className="text-[16px] text-[#06003F]/70 leading-relaxed">
                Create with our production-grade agentic AI models and industry-leading automation capabilities, all-in-one platform.
              </p>
            </motion.div>
          </div>

          {/* Tabbed Interface */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12">
            {/* Left: Tab Navigation */}
            <div className="flex flex-col gap-3">
              {capabilities.map((cap, index) => (
                <motion.button
                  key={cap.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveTab(cap.id)}
                  className={`group flex items-center gap-3 px-6 py-4 rounded-[6px] text-left transition-all ${
                    activeTab === cap.id
                      ? "bg-[#06003F] text-white shadow-lg"
                      : "bg-transparent text-[#06003F]/60 hover:bg-[#F5F5F7]"
                  }`}
                >
                  <cap.icon className={`w-5 h-5 ${activeTab === cap.id ? "text-[#FF4E3A]" : "text-[#06003F]/40"}`} />
                  <span className="font-semibold text-[15px]">{cap.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Right: Content Area */}
            <AnimatePresence mode="wait">
              {capabilities.map(
                (cap) =>
                  activeTab === cap.id && (
                    <motion.div
                      key={cap.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#FAFAFA] rounded-[12px] p-10 border border-[#06003F]/5"
                    >
                      <h3 className="text-[32px] font-bold text-[#06003F] mb-4">{cap.title}</h3>
                      <p className="text-[16px] text-[#06003F]/80 leading-relaxed mb-8">{cap.description}</p>

                      {/* Demo Preview Area */}
                      <div className="bg-white rounded-[12px] p-6 border border-[#06003F]/10">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#06003F]/5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <p className="text-[14px] text-[#06003F]/60 leading-relaxed font-mono">
                          {cap.demo}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Solution Modules */}
      <section className="relative py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
                Solutions for Real RCM Workflows
              </h2>
              
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-[#06003F] text-white rounded-[6px] font-semibold text-[14px] hover:bg-[#06003F]/90 transition-all shadow-xl shadow-[#06003F]/10 flex items-center gap-2 group"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-white border border-[#06003F]/10 text-[#06003F] rounded-[6px] font-semibold text-[14px] hover:bg-black/5 transition-all shadow-sm"
                >
                  View All Modules
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-end"
            >
              <p className="text-[16px] text-[#06003F]/70 leading-relaxed">
                Explore automated solutions designed for critical healthcare revenue cycle workflows — from benefit verification to claims management.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex gap-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative flex-shrink-0 w-[320px] bg-white rounded-[12px] p-8 border border-[#06003F]/5 hover:border-[#06003F]/10 hover:shadow-xl transition-all cursor-pointer"
                  >
                    {/* Gradient Orb */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${solution.gradient} opacity-80 blur-xl`} />
                      <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-[20px] font-bold text-[#06003F] mb-3 text-center">
                      {solution.title}
                    </h3>
                    <p className="text-[14px] text-[#06003F]/60 leading-relaxed text-center">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
                Insights that Drive Smarter Decisions
              </h2>
              <p className="text-[16px] text-[#06003F]/70 leading-relaxed">
                Transform raw conversation data into actionable intelligence with structured summaries, drill-down metrics, and operational dashboards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="bg-[#FAFAFA] rounded-[12px] p-6 border border-[#06003F]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#FF4E3A]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#06003F] mb-2">Structured Summaries</h4>
                    <p className="text-[14px] text-[#06003F]/60 leading-relaxed">
                      Structured summaries of agent conversations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] rounded-[12px] p-6 border border-[#06003F]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#FF4E3A]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#06003F] mb-2">Drill-Down Metrics</h4>
                    <p className="text-[14px] text-[#06003F]/60 leading-relaxed">
                      Drill-down metrics for activities and outcomes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] rounded-[12px] p-6 border border-[#06003F]/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#FF4E3A]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#06003F] mb-2">Efficiency Dashboards</h4>
                    <p className="text-[14px] text-[#06003F]/60 leading-relaxed">
                      Operational efficiency dashboards
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[10%] right-[5%] w-[400px] h-[400px]"
            animate={{
              opacity: [0.03, 0.05, 0.03],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255, 78, 58, 0.06) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px]"
            animate={{
              opacity: [0.02, 0.04, 0.02],
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            style={{
              background: 'radial-gradient(circle, rgba(6, 0, 63, 0.04) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-20">
              <h2 className="text-[56px] md:text-[64px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
                Why It Matters
              </h2>
              <p className="text-[17px] text-[#06003F]/60 max-w-2xl mx-auto leading-relaxed">
                Transform your healthcare revenue cycle operations with intelligent automation that delivers measurable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-[12px] border border-[#06003F]/5 p-10 hover:border-[#06003F]/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center group-hover:bg-[#FF4E3A]/15 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-[#FF4E3A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[22px] font-bold text-[#06003F] mb-3 group-hover:text-[#FF4E3A] transition-colors">
                      Reclaim Staff Time
                    </h4>
                    <p className="text-[15px] text-[#06003F]/70 leading-relaxed">
                      Free your team from repetitive administrative tasks and redirect their expertise to higher-value patient care and strategic initiatives.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-[12px] border border-[#06003F]/5 p-10 hover:border-[#06003F]/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center group-hover:bg-[#FF4E3A]/15 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-[#FF4E3A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[22px] font-bold text-[#06003F] mb-3 group-hover:text-[#FF4E3A] transition-colors">
                      Reduce Operational Burden
                    </h4>
                    <p className="text-[15px] text-[#06003F]/70 leading-relaxed">
                      Streamline complex workflows, eliminate bottlenecks, and achieve unprecedented operational efficiency across your revenue cycle.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-[12px] border border-[#06003F]/5 p-10 hover:border-[#06003F]/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center group-hover:bg-[#FF4E3A]/15 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-[#FF4E3A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[22px] font-bold text-[#06003F] mb-3 group-hover:text-[#FF4E3A] transition-colors">
                      Improve Interactions
                    </h4>
                    <p className="text-[15px] text-[#06003F]/70 leading-relaxed">
                      Deliver better patient and payer communication experiences with faster response times and more accurate information.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-[12px] border border-[#06003F]/5 p-10 hover:border-[#06003F]/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#FF4E3A]/10 flex items-center justify-center group-hover:bg-[#FF4E3A]/15 transition-colors">
                      <CheckCircle2 className="w-7 h-7 text-[#FF4E3A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[22px] font-bold text-[#06003F] mb-3 group-hover:text-[#FF4E3A] transition-colors">
                      Enterprise-Grade Security
                    </h4>
                    <p className="text-[15px] text-[#06003F]/70 leading-relaxed">
                      Built on HIPAA & SOC 2 compliant infrastructure with end-to-end encryption to protect sensitive healthcare data.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-[#06003F]">
        {/* Pure Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06003F] via-[#1a0d5e] to-[#0d1942]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[20%] right-[10%] w-[600px] h-[600px]"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255, 78, 58, 0.4) 0%, rgba(255, 78, 58, 0.1) 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <motion.div
            className="absolute bottom-[15%] left-[10%] w-[700px] h-[700px]"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1.1, 0.9, 1.1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            style={{
              background: 'radial-gradient(circle, rgba(138, 43, 226, 0.35) 0%, rgba(138, 43, 226, 0.15) 40%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />

          <motion.div
            className="absolute top-[40%] left-[40%] w-[500px] h-[500px]"
            animate={{
              opacity: [0.25, 0.4, 0.25],
              scale: [0.95, 1.15, 0.95],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
            style={{
              background: 'radial-gradient(circle, rgba(255, 105, 180, 0.3) 0%, rgba(255, 105, 180, 0.1) 40%, transparent 70%)',
              filter: 'blur(100px)',
            }}
          />

          {/* SVG Noise Filter */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
            <filter id="noiseCTAFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="5"
                stitchTiles="stitch"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.9;0.92;0.9"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseCTAFilter)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[56px] font-bold text-white tracking-tight leading-[1.05] mb-8">
              See the Platform in Action
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-[#FF4E3A] text-white rounded-[6px] font-semibold text-[14px] hover:bg-[#FF4E3A]/90 transition-all shadow-xl shadow-[#FF4E3A]/20 flex items-center gap-2 group"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-[6px] font-semibold text-[14px] hover:bg-white/10 transition-all shadow-sm backdrop-blur-sm"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};