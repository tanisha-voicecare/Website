import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const SplitScreenWipe = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
        
        {/* Left Half - Slides Left */}
        <motion.div
          style={{ x: leftX }}
          className="absolute inset-0 w-1/2 bg-[#06003F] z-10 origin-right"
          initial={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)" }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="text-center px-6">
              <h3 className="text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                Before
              </h3>
              <p className="text-white/60 text-xl">
                Complex systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Half - Slides Right */}
        <motion.div
          style={{ x: rightX }}
          className="absolute inset-0 left-1/2 w-1/2 bg-[#FF4E3A] z-10 origin-left"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="text-center px-6">
              <h3 className="text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                After
              </h3>
              <p className="text-white/90 text-xl">
                Simple solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Revealed Content */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-0 text-center px-6"
        >
          <h2 className="text-7xl font-bold text-[#06003F] tracking-tight leading-[1.1] mb-6">
            Transformation
          </h2>
          <p className="text-2xl text-[#06003F]/70 max-w-3xl mx-auto">
            Watch complexity give way to elegance as VoiceCare simplifies your entire communication stack
          </p>
          <div className="mt-12 flex gap-8 justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF4E3A] mb-2">-80%</div>
              <div className="text-[#06003F]/60">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF4E3A] mb-2">+200%</div>
              <div className="text-[#06003F]/60">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF4E3A] mb-2">99.9%</div>
              <div className="text-[#06003F]/60">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
