import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress through the entire scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate horizontal translation
  // 7 cards, each roughly taking up viewport width, so we need to scroll through 6 card widths
  // Translate from 0 to -(cards * cardWidth)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const cards = [
    {
      id: 1,
      title: "Healthcare",
      description: "AI-powered patient care and diagnostic support",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 2,
      title: "Finance",
      description: "Intelligent financial advisory and risk management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 3,
      title: "Retail",
      description: "Personalized customer experiences at scale",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 4,
      title: "Education",
      description: "Adaptive learning and student support systems",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 5,
      title: "Manufacturing",
      description: "Predictive maintenance and quality control",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 6,
      title: "Hospitality",
      description: "Guest services and operational excellence",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: 7,
      title: "Technology",
      description: "Developer support and technical assistance",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Pinned container that stays fixed */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h2 className="text-[48px] font-bold text-[#06003F] tracking-tight leading-[1.1] mb-4">
            Universal Intelligence for Every Sector
          </h2>
          <p className="text-lg text-[#06003F]/70 max-w-2xl">
            Deploy AI-powered voice agents across industries, from healthcare to hospitality, 
            transforming how businesses interact with their customers.
          </p>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="overflow-hidden">
          <motion.div 
            style={{ x }}
            className="flex gap-6 px-6 md:px-12"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="flex-shrink-0 w-[380px] h-[480px] bg-white rounded-[12px] border border-[#06003F]/10 overflow-hidden group hover:border-[#FF4E3A]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="h-[320px] overflow-hidden bg-[#06003F]/5">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#06003F] mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#06003F]/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};