import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Zap, Clock, Users, Globe, Target } from "lucide-react";

export const InfiniteMarquee = () => {
  const testimonials = [
    { 
      text: "Reduced response time by 95%", 
      author: "Tech Corp", 
      metric: "95%",
      icon: Clock,
      color: "from-[#FF4E3A] to-[#FF6B5A]"
    },
    { 
      text: "Scaled to 10,000 calls/day effortlessly", 
      author: "Healthcare Inc", 
      metric: "10K",
      icon: TrendingUp,
      color: "from-[#06003F] to-[#1a0f5f]"
    },
    { 
      text: "ROI achieved in 2 months", 
      author: "Finance Co", 
      metric: "2mo",
      icon: Target,
      color: "from-[#FF4E3A] to-[#FF6B5A]"
    },
    { 
      text: "Customer satisfaction up 40%", 
      author: "Retail Brand", 
      metric: "+40%",
      icon: Users,
      color: "from-[#06003F] to-[#1a0f5f]"
    },
    { 
      text: "24/7 support without hiring", 
      author: "Startup XYZ", 
      metric: "24/7",
      icon: Zap,
      color: "from-[#FF4E3A] to-[#FF6B5A]"
    },
    { 
      text: "Multilingual from day one", 
      author: "Global Ltd", 
      metric: "100+",
      icon: Globe,
      color: "from-[#06003F] to-[#1a0f5f]"
    },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8F9FC] to-white" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(#06003F 1px, transparent 1px), linear-gradient(90deg, #06003F 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
      
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06003F]/10 to-transparent" />
      
      <div className="relative z-10 mb-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.1em] mb-8 text-[#06003F] border border-[#06003F]/5 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4E3A] animate-pulse" />
              Real-World Impact
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#06003F] tracking-[-0.02em] leading-[1.05] mb-6">
              Radical Efficiencies
            </h2>
            <p className="text-[#06003F]/60 md:text-lg max-w-2xl mx-[132px] font-medium leading-relaxed text-[18px] px-[38px] py-[0px] my-[0px]">
              Savings of 32,000 minutes per 1,000 phone calls
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-5 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex-shrink-0 bg-white border border-[#06003F]/6 rounded-[12px] px-7 py-7 min-w-[460px] hover:border-[#FF4E3A]/20 transition-all duration-700 hover:shadow-xl hover:shadow-[#06003F]/[0.04] relative overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#FF4E3A]/5 via-transparent to-[#06003F]/5" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-[12px]" />
                </div>
                
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex-1 flex gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-11 h-11 rounded-[12px] bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-[#06003F] text-[15px] font-semibold mb-2.5 leading-snug tracking-tight">
                        {item.text}
                      </p>
                      <p className="text-[#06003F]/40 text-[13px] font-medium tracking-tight">
                        {item.author}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metric badge */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E3A]/20 to-[#FF4E3A]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative bg-gradient-to-br from-[#FF4E3A]/8 to-[#FF4E3A]/12 border border-[#FF4E3A]/15 rounded-[12px] px-5 py-3 group-hover:from-[#FF4E3A]/12 group-hover:to-[#FF4E3A]/18 group-hover:border-[#FF4E3A]/25 transition-all duration-700">
                      <span className="text-[#FF4E3A] text-xl font-bold tracking-tight">
                        {item.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-5 whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].reverse().map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex-shrink-0 bg-white border border-[#06003F]/6 rounded-[12px] px-7 py-7 min-w-[460px] hover:border-[#FF4E3A]/20 transition-all duration-700 hover:shadow-xl hover:shadow-[#06003F]/[0.04] relative overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#FF4E3A]/5 via-transparent to-[#06003F]/5" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-[12px]" />
                </div>
                
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex-1 flex gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-11 h-11 rounded-[12px] bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-[#06003F] text-[15px] font-semibold mb-2.5 leading-snug tracking-tight">
                        {item.text}
                      </p>
                      <p className="text-[#06003F]/40 text-[13px] font-medium tracking-tight">
                        {item.author}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metric badge */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E3A]/20 to-[#FF4E3A]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative bg-gradient-to-br from-[#FF4E3A]/8 to-[#FF4E3A]/12 border border-[#FF4E3A]/15 rounded-[12px] px-5 py-3 group-hover:from-[#FF4E3A]/12 group-hover:to-[#FF4E3A]/18 group-hover:border-[#FF4E3A]/25 transition-all duration-700">
                      <span className="text-[#FF4E3A] text-xl font-bold tracking-tight">
                        {item.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06003F]/10 to-transparent" />
    </section>
  );
};