import React from "react";
import { motion } from "motion/react";
import { CircleCheck, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "DataStream",
    image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlciUyMHRlY2h8ZW58MXx8fHwxNzY3NzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Marcus Thorne",
    role: "CTO",
    company: "NexGen Systems",
    image: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMENFTyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NzAyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Pasit Thiannap",
    role: "Co-Founder & MD",
    company: "Bokboon",
    image: "https://images.unsplash.com/photo-1717671999279-b9b9853e2249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBvcnRyYWl0JTIwc3RhcnR1cHxlbnwxfHx8fDE3Njc3MDIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Worakorn Dieo",
    role: "Partner",
    company: "Woo Tender",
    image: "https://images.unsplash.com/photo-1603207757545-de4fffdb404c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzcwMjAzMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Papawarin Suk",
    role: "Marketing Comm",
    company: "Rakmao",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3MDIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Suphachok Ruj",
    role: "Marketing Manager",
    company: "Yogibo",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3MDIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const features = [
  "Built for enterprise scale",
  "Real-time orchestration dashboard",
  "Zero-latency integration layer"
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#06003F]/10 bg-[#06003F]/5">
            <div className="w-4 h-3 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-[1px]" />
            <span className="text-sm font-medium text-[#06003F]">Built for global brands</span>
          </div>
        </motion.div>

        {/* Header Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-[#06003F] mb-12 max-w-4xl mx-auto leading-[1.1]"
        >
          The orchestration-first <br /> 
          <span className="text-[#06003F]/80">agentic intelligence platform</span>
        </motion.h2>

        {/* Feature Checkmarks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-20"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CircleCheck className="w-5 h-5 text-blue-500" />
              <span className="text-[#06003F]/60 text-sm font-medium text-left max-w-[180px] leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Cards Row */}
        <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 -mx-4 scroll-smooth">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
              className="flex-none w-[280px] md:w-[320px] aspect-[4/5] relative rounded-[6px] overflow-hidden group snap-center cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06003F] via-[#06003F]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF4E3A]/20 via-transparent to-transparent" />
              </div>

              {/* Top Company Badge */}
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-lg">
                  <span className="text-xs font-bold text-white tracking-wide">{t.company}</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-left transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h4 className="text-lg font-bold text-white mb-0.5">{t.name}</h4>
                  <p className="text-sm text-white/70 font-medium">{t.role}</p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#FF4E3A] group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#FF4E3A]/50 transition-all duration-300">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              </div>

              {/* Card Shadow on Hover */}
              <div className="absolute inset-0 rounded-[6px] shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: '0 20px 60px rgba(6, 0, 63, 0.3)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};