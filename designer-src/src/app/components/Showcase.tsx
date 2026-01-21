import React from "react";
import { SystemLog } from "./SystemLog";
import { motion } from "motion/react";

export const Showcase = () => {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-semibold tracking-tight mb-6 leading-tight text-[#06003F]">
              Observe intelligence <br /> as it happens.
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed mb-8">
              Transparency is core to our orchestration layer. Monitor agent 
              reasoning paths, task delegation, and execution logs in real-time 
              with our centralized dashboard.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-[#06003F]/5 border border-[#06003F]/10 rounded flex-1">
                <div className="text-xl font-bold mb-1 tracking-tighter text-[#FF4E3A]">99.8%</div>
                <div className="text-[10px] text-[#06003F]/60 uppercase font-bold">Accuracy</div>
              </div>
              <div className="p-4 bg-[#06003F]/5 border border-[#06003F]/10 rounded flex-1">
                <div className="text-xl font-bold mb-1 tracking-tighter text-[#FF4E3A]">0.1s</div>
                <div className="text-[10px] text-[#06003F]/60 uppercase font-bold">Latency</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#06003F]/2 rounded-[8px] border border-[#06003F]/5 p-2"
            >
              <SystemLog />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};