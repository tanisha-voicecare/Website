import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Shield, Lock, Eye, Database } from "lucide-react";

export const ExpandableCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const cards = [
    {
      title: "Infrastructure Security",
      description: "Multi-layered infrastructure protection with automated threat detection and real-time security monitoring across all systems.",
      image: "https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgyOTY3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Encryption",
      description: "End-to-end AES-256 encryption for all data at rest and in transit, ensuring complete data privacy and security compliance.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY4MzA5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Lock,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Continuous Monitoring",
      description: "24/7 security operations center with AI-powered anomaly detection and instant threat response capabilities.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjgzMTQwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Eye,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Framework",
      description: "HIPAA, SOC 2, and HITRUST certified with regular third-party audits and comprehensive compliance documentation.",
      image: "https://images.unsplash.com/photo-1708807472445-d33589e6b090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzY4MzE0MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Database,
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="flex gap-4 h-[450px]">
      {cards.map((card, index) => {
        const isExpanded = expandedIndex === index;
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            animate={{
              flex: isExpanded ? 2.5 : 0.5
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            onMouseEnter={() => setExpandedIndex(index)}
            className="relative rounded-[12px] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8">
              {/* Icon */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-[12px] bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0 mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Title */}
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.h3
                    key="expanded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[24px] font-bold text-white leading-tight mb-4"
                  >
                    {card.title}
                  </motion.h3>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center h-full"
                  >
                    <h3 
                      className="text-[26px] font-bold text-white whitespace-nowrap"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)'
                      }}
                    >
                      {card.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-[15px] text-white/85 leading-relaxed mb-6"
                  >
                    {card.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Learn More Link */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="text-[14px] font-semibold text-white flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};