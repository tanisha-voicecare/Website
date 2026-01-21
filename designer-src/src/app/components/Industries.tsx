import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Stethoscope, Activity, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
  {
    title: "Healthcare Intelligence",
    description: "Simplify diagnostics, patient management, and laboratory automation with secure, compliant agentic workflows.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1658763440414-07d3b9c42bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGhlYWx0aGNhcmUlMjBiaW90ZWNobm9sb2d5JTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzY3Njk5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#FF4E3A"
  },
  {
    title: "Financial Operations",
    description: "Automate high-frequency reconciliation, risk assessment, and fraud detection with 200ms reasoning latency.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpbmFuY2lhbCUyMGRhdGElMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njc2OTkxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#06003F"
  },
  {
    title: "Supply Chain Autonomy",
    description: "Coordinate complex global logistics and warehouse robotics using a unified orchestration nervous system.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1593931769132-a3fa26120f1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxvZ2lzdGljcyUyMHN1cHBseSUyMGNoYWluJTIwY29ubmVjdGlvbiUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzY3Njk5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#06003F"
  }
];

export const Industries = () => {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FF4E3A] mb-4"
          >
            Universal Adaptation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-[#06003F] mb-8"
          >
            Universal intelligence <br />
            <span className="text-[#06003F]/60">for every sector.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Our neural orchestration engine adapts to the specific constraints and complexities of your domain, providing a foundation for autonomous agents that learn, reason, and execute with precision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-[#06003F]/10 text-[#06003F] px-8 py-3 rounded-[6px] text-sm font-semibold hover:bg-[#06003F]/5 transition-all shadow-sm hover:shadow-md"
            >
              Build with Aether-1
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden border border-[#06003F]/5 mb-6 bg-black/5">
                <ImageWithFallback
                  src={item.image}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06003F]/60 via-transparent to-transparent opacity-60" />
                
                {/* Abstract UI overlay element */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-[6px] shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-[4px]" style={{ backgroundColor: `${item.color}10` }}>
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 w-16 bg-[#06003F]/10 rounded-full mb-1.5 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className="h-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                        <div className="h-1 w-24 bg-[#06003F]/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#06003F] mb-3 group-hover:text-[#FF4E3A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center gap-1 text-sm font-semibold text-[#06003F] group-hover:gap-2 transition-all">
                Learn more
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};