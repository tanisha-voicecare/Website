import React from "react";
import { motion } from "motion/react";

export const RadicalEfficiencies = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F8F9FC]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(#06003F 1px, transparent 1px), linear-gradient(90deg, #06003F 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
      
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06003F]/10 to-transparent" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.1em] mb-8 text-[#FF4E3A] border border-[#FF4E3A]/20 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4E3A] animate-pulse" />
              Real-World Impact
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-[#06003F] tracking-[-0.02em] leading-[1.05] mb-4">
              Radical Efficiencies
            </h2>
            
            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#06003F]/60 font-medium leading-relaxed">
              Savings of 32,000 minutes per 1,000 phone calls
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06003F]/10 to-transparent" />
    </section>
  );
};
