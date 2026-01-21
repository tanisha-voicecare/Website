import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = React.useState(0);
  
  const headings = [
    "Automating administrative burdens",
    "Creating time for care teams",
    "Improving patient outcomes"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prev) => (prev + 1) % headings.length);
    }, 4000); // Change heading every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Animated Noise Grain Texture Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG Noise Filter */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
          <filter id="noiseFilter">
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
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(6,0,63,0.02)_100%)]" />

        {/* Very subtle gradient accents */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[400px]"
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(6, 0, 63, 0.06) 0%, transparent 60%)',
          }}
        />

        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px]"
          animate={{
            opacity: [0.02, 0.04, 0.02],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255, 78, 58, 0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <motion.div
          className="absolute bottom-[10%] left-[15%] w-[600px] h-[600px]"
          animate={{
            opacity: [0.025, 0.045, 0.025],
            scale: [1.05, 0.95, 1.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          style={{
            background: 'radial-gradient(circle, rgba(6, 0, 63, 0.05) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Animated scanline effect (very subtle) */}
        <motion.div
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(6, 0, 63, 0.03), transparent)',
          }}
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.1em] mb-12 text-[#06003F] border border-black/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
            >
              <Zap className="w-3 h-3 text-[#FF4E3A] fill-[#FF4E3A]" />
              Agentic Intelligence for RCM
            </motion.div>
            
            {/* Static Subheader */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[18px] md:text-[22px] font-medium text-[#06003F]/70 mb-4 tracking-tight"
            >
              Supercharging Healthcare Workers with Care and AI by
            </motion.div>

            {/* Rotating Headlines */}
            <div className="relative h-[140px] md:h-[200px] flex items-center justify-center mb-10 w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadingIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute text-[44px] md:text-[84px] font-bold tracking-[-0.04em] leading-[1.02] text-[#06003F] bg-clip-text text-transparent bg-linear-to-r from-[#06003F] via-[#06003F] to-[#FF4E3A] via-50%"
                >
                  {headings[currentHeadingIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button className="bg-[#06003F] text-white px-8 py-3.5 rounded-[6px] text-sm font-semibold hover:bg-[#06003F]/90 transition-all flex items-center gap-2 group shadow-xl shadow-[#06003F]/10">
                Experience it
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-[#06003F]/10 text-[#06003F] px-8 py-3.5 rounded-[6px] text-sm font-semibold hover:bg-black/5 transition-all shadow-sm">
                Schedule a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};