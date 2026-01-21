import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Lock, Eye, FileCheck, CheckCircle2, Database, Server, ShieldCheck, Globe, Key, Bell, Activity } from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExpandableCards } from "./figma/ExpandableCards";
import { createScrollAnimation, ANIMATION_DURATION, EASING } from "@/utils/animations";

export const Solutions = ({ onNavigate }: { onNavigate: (view: 'home' | 'about' | 'team' | 'platform' | 'solutions') => void }) => {
  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare data protection standards",
      image: "https://images.unsplash.com/photo-1646038572891-86b08ccd6719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwd2F2ZXN8ZW58MXx8fHwxNzY4MTQwMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all data at rest and in transit",
      image: "https://images.unsplash.com/photo-1630973981820-4a756320d1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGdyYWRpZW50JTIwYWJzdHJhY3Q8ZW58MXx8fHwxNzY4MTQwNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Real-time threat detection and incident response",
      image: "https://images.unsplash.com/photo-1762716514229-739f6769e282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NjgyMDIyODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: ShieldCheck,
      title: "SOC 2 Type II",
      description: "Independently audited security controls",
      image: "https://images.unsplash.com/photo-1689005046927-0aa9f398247a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMG1lc2glMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjgyMzAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const certifications = [
    { name: "HIPAA", icon: Shield },
    { name: "SOC 2", icon: ShieldCheck },
    { name: "HITRUST", icon: Lock },
    { name: "GDPR", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            {/* Left Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#06003F]/10 rounded-full mb-10"
              >
                <span className="text-[13px] font-medium text-[#06003F]/70">SOC 2 Type II Certified</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h1 className="text-[68px] md:text-[80px] font-bold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-linear-to-r from-[#06003F] via-[#06003F] to-[#FF4E3A] via-50%">
                  Security &<br />Compliance
                </h1>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-end space-y-8 pt-12"
            >
              <p className="text-[17px] text-[#06003F]/60 leading-relaxed">
                Built with healthcare in mind. Our platform delivers bank-level security with comprehensive compliance certifications, protecting patient data at every layer.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[14px] font-medium text-[#06003F]">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[14px] font-medium text-[#06003F]">100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[14px] font-medium text-[#06003F]">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4E3A]" />
                  <span className="text-[14px] font-medium text-[#06003F]">24/7 Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Large Gradient Card */}
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="relative py-24 bg-[#FAFAFA] mt-[-110px] mr-[0px] mb-[0px] ml-[0px]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Compliance Management",
                description: "Automated compliance monitoring and reporting across HIPAA, SOC 2, and GDPR requirements with real-time alerts."
              },
              {
                number: "02",
                title: "Threat Detection",
                description: "AI-powered threat intelligence with behavioral analysis to identify and neutralize security risks in real-time."
              },
              {
                number: "03",
                title: "Data Encryption",
                description: "End-to-end AES-256 encryption for all data at rest and in transit, with automated key rotation and management."
              },
              {
                number: "04",
                title: "Access Control",
                description: "Role-based access control with multi-factor authentication and granular permission management across all systems."
              },
              {
                number: "05",
                title: "Audit Logging",
                description: "Comprehensive activity tracking and immutable audit trails for complete visibility into all system operations."
              },
              {
                number: "06",
                title: "Incident Response",
                description: "24/7 security operations center with automated incident detection, response protocols, and recovery procedures."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: ANIMATION_DURATION.normal, delay: index * 0.08, ease: EASING.smooth }}
                className="bg-white border border-[#06003F]/10 rounded-[12px] p-8 hover:border-[#06003F]/20 transition-all duration-300"
              >
                <div className="text-[15px] font-bold text-[#FF4E3A] mb-4">
                  {feature.number}
                </div>
                <h3 className="text-[24px] font-bold text-[#06003F] mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#06003F]/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Security Pillars */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: ANIMATION_DURATION.normal, ease: EASING.smooth }}
            className="text-center mb-20"
          >
            <h2 className="text-[56px] md:text-[64px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
              Security Pillars
            </h2>
            <p className="text-[17px] text-[#06003F]/60 max-w-2xl mx-auto">
              Four foundational layers protecting your healthcare data
            </p>
          </motion.div>

          <ExpandableCards />
        </div>
      </section>

      {/* Content + Image Section 1 - Content Left */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: ANIMATION_DURATION.normal, ease: EASING.smooth }}
            >
              <h2 className="text-[56px] md:text-[64px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-8">
                Real-Time Threat Intelligence
              </h2>
              <p className="text-[17px] text-[#06003F]/60 leading-relaxed">
                Our advanced security monitoring system operates 24/7, leveraging machine learning algorithms to detect and neutralize threats before they impact your operations. With real-time alerts and automated response protocols, your healthcare data remains protected against emerging vulnerabilities and sophisticated attack vectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: ANIMATION_DURATION.normal, ease: EASING.smooth }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706248504630-d165ae5f7134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG1vbml0b3JpbmclMjBkYXNoYm9hcmQ8ZW58MXx8fHwxNzY4MjgyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security monitoring dashboard"
                className="w-full h-[500px] object-cover rounded-[12px] border border-[#06003F]/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content + Image Section 2 - Content Right */}
      <section className="relative py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: ANIMATION_DURATION.normal, ease: EASING.smooth }}
              className="relative order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY4MzE2NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data encryption network"
                className="w-full h-[500px] object-cover rounded-[12px] border border-[#06003F]/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: ANIMATION_DURATION.normal, ease: EASING.smooth }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-[56px] md:text-[64px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-8">
                Enterprise-Grade Encryption
              </h2>
              <p className="text-[17px] text-[#06003F]/60 leading-relaxed">
                Every piece of data is protected with military-grade AES-256 encryption, both at rest and in transit. Our automated key management system ensures seamless rotation and compliance, while zero-knowledge architecture guarantees that only authorized parties can access sensitive healthcare information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[56px] md:text-[64px] font-bold text-[#06003F] tracking-tight leading-[1.05] mb-6">
              Questions About Security?
            </h2>
            <p className="text-[18px] text-[#06003F]/60 mb-12 leading-relaxed">
              Our security team is here to answer your questions and provide detailed documentation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-[#06003F] text-white rounded-full font-semibold text-[15px] hover:bg-[#06003F]/90 transition-all shadow-xl shadow-[#06003F]/20 flex items-center gap-2 group"
              >
                Schedule Security Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-white border border-[#06003F]/10 text-[#06003F] rounded-full font-semibold text-[15px] hover:bg-black/5 transition-all shadow-sm"
              >
                Download Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};