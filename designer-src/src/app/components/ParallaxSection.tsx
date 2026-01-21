import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const ParallaxSection = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress through the entire scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smoother transitions with more overlap
  // State 1: AI Orchestration (0% - 40%)
  const state1Active = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.35],
    [1, 1, 0, 0]
  );
  
  // State 2: Real-Time Analytics (30% - 70%)
  const state2Active = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  
  // State 3: Enterprise Control (60% - 100%)
  const state3Active = useTransform(
    scrollYProgress,
    [0.65, 0.75, 1],
    [0, 1, 1]
  );

  // Smooth scale effects for visuals
  const visual1Scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.98]);
  const visual2Scale = useTransform(scrollYProgress, [0.25, 0.45, 0.75], [0.98, 1, 0.98]);
  const visual3Scale = useTransform(scrollYProgress, [0.65, 0.85], [0.98, 1]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Pinned container that stays fixed */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative">
            
            {/* Left side - All titles visible, stacked */}
            <div className="space-y-0">
              
              {/* Title 1: AI Orchestration */}
              <div className="relative">
                <motion.div style={{ 
                  opacity: useTransform(state1Active, [0, 1], [0.25, 1]),
                  scale: useTransform(state1Active, [0, 1], [0.98, 1])
                }}>
                  <h2 className="tracking-tight text-[#06003F] mb-3 leading-[1.1] text-[36px] font-bold">
                    AI Orchestration
                  </h2>
                </motion.div>
                
                <motion.div
                  style={{ 
                    opacity: state1Active,
                    height: useTransform(state1Active, [0, 1], [0, 140])
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-[#06003F]/70 leading-relaxed mb-5 max-w-lg">
                    Coordinate multiple AI agents seamlessly with intelligent routing and context-aware delegation.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4E3A] text-white rounded-[6px] font-semibold text-sm hover:bg-[#FF4E3A]/90 transition-all hover:gap-3">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
                
                {/* Divider */}
                <div className="w-full h-px bg-[#06003F]/10 my-12" />
              </div>

              {/* Title 2: Real-Time Analytics */}
              <div className="relative">
                <motion.div style={{ 
                  opacity: useTransform(state2Active, [0, 1], [0.25, 1]),
                  scale: useTransform(state2Active, [0, 1], [0.98, 1])
                }}>
                  <h2 className="tracking-tight text-[#06003F] mb-3 leading-[1.1] text-[36px] font-bold">
                    Real-Time Analytics
                  </h2>
                </motion.div>
                
                <motion.div
                  style={{ 
                    opacity: state2Active,
                    height: useTransform(state2Active, [0, 1], [0, 140])
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-[#06003F]/70 leading-relaxed mb-5 max-w-lg">
                    Monitor performance metrics and gain actionable insights with live conversation intelligence.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4E3A] text-white rounded-[6px] font-semibold text-sm hover:bg-[#FF4E3A]/90 transition-all hover:gap-3">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
                
                {/* Divider */}
                <div className="w-full h-px bg-[#06003F]/10 my-12" />
              </div>

              {/* Title 3: Enterprise Control */}
              <div className="relative">
                <motion.div style={{ 
                  opacity: useTransform(state3Active, [0, 1], [0.25, 1]),
                  scale: useTransform(state3Active, [0, 1], [0.98, 1])
                }}>
                  <h2 className="tracking-tight text-[#06003F] mb-3 leading-[1.1] text-[36px] font-bold">
                    Enterprise Control
                  </h2>
                </motion.div>
                
                <motion.div
                  style={{ 
                    opacity: state3Active,
                    height: useTransform(state3Active, [0, 1], [0, 140])
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-base text-[#06003F]/70 leading-relaxed mb-5 max-w-lg">
                    Full governance with compliance guardrails, audit logging, and enterprise-grade security.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4E3A] text-white rounded-[6px] font-semibold text-sm hover:bg-[#FF4E3A]/90 transition-all hover:gap-3">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

            </div>

            {/* Right side - Single card with morphing content */}
            <div className="relative">
              <div className="bg-white rounded-[12px] border border-[#06003F]/10 p-0 min-h-[600px] relative overflow-hidden">
                
                {/* State 1 Visual: AI Orchestration */}
                <motion.div
                  style={{ 
                    opacity: state1Active,
                    scale: visual1Scale
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZXxlbnwxfHx8fDE3Njc3MTg3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Customer Service Team"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </motion.div>

                {/* State 2 Visual: Real-Time Analytics */}
                <motion.div
                  style={{ 
                    opacity: state2Active,
                    scale: visual2Scale
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY3NzkwNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business Analytics Team"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </motion.div>

                {/* State 3 Visual: Enterprise Control */}
                <motion.div
                  style={{ 
                    opacity: state3Active,
                    scale: visual3Scale
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3Njc3ODEwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Enterprise Leadership"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};