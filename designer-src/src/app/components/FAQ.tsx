import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Smile, 
  CreditCard, 
  LayoutDashboard, 
  MessageSquare, 
  Mail, 
  Play, 
  UserPlus, 
  ShieldCheck,
  Zap,
  Layers
} from "lucide-react";

const categories = ["General", "Pricing", "Dashboard", "API"];

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try our agentic orchestration platform for free for 30 days. We'll provide you with a free 30-minute onboarding call to get you up and running with your first automated workflow."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes are prorated, ensuring you only pay for exactly what you use."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer a flexible month-to-month commitment. You can cancel your subscription at any time with a single click, and you'll maintain access until the end of your current billing cycle."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add custom billing details, VAT numbers, and secondary email addresses for invoice delivery directly within the billing section of your workspace settings."
  },
  {
    question: "How does billing work?",
    answer: "Billing is based on active agent hours and successful task completions. We offer transparent, volume-based pricing that scales with your enterprise needs."
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your primary contact email through the Security tab in your Profile settings. We require a brief verification step to ensure your account remains secure."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#06003F]/5 py-8">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group transition-all"
      >
        <span className="text-xl font-bold text-[#06003F] tracking-tight group-hover:text-[#FF4E3A] transition-colors">
          {question}
        </span>
        <div className={`flex-shrink-0 ml-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={22} className="text-[#06003F]/20 group-hover:text-[#06003F]/40" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[#06003F]/60 text-lg leading-relaxed max-w-2xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 bg-white border-t border-[#06003F]/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#06003F] mb-6">
            Frequently asked questions
          </h2>
          <p className="text-[#06003F]/50 text-xl font-medium max-w-2xl">
            Everything you need to know about the platform and billing. Can't find the answer you're looking for? <span className="text-[#FF4E3A] cursor-pointer hover:underline">Chat to our team.</span>
          </p>
        </motion.div>

        <div className="divide-y divide-[#06003F]/5">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="border-b border-[#06003F]/5 py-8"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="w-full flex items-center justify-between text-left group transition-all"
              >
                <span className="text-xl font-bold text-[#06003F] tracking-tight group-hover:text-[#FF4E3A] transition-colors duration-300">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-8 transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <ChevronDown size={22} className="text-[#06003F]/20 group-hover:text-[#06003F]/40 transition-colors" />
                </div>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#06003F]/60 text-lg leading-relaxed max-w-2xl font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};