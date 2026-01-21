import React from "react";
import { motion } from "motion/react";
import { 
  Calendar, 
  Terminal, 
  Phone, 
  Fingerprint, 
  RefreshCw, 
  Plug, 
  Sparkles, 
  Hash, 
  Zap, 
  Square,
  Network
} from "lucide-react";

export const Integrations = () => {
  return (
    <section className="py-32 bg-[#020202] text-white relative overflow-hidden">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-[80px] mt-[-48px] mr-[0px] ml-[0px]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Network size={16} className="text-white/60" />
            <h2 className="text-xl font-medium tracking-tight">Native Tools Integration</h2>
          </div>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
          </p>
        </motion.div>

        {/* Integration Diagram */}
        <div className="relative h-[500px] w-full mb-[128px] flex items-center justify-center mt-[-126px] mr-[0px] ml-[0px]">
          
          {/* Left Side Labels */}
          <div className="absolute left-0 space-y-12">
            {[
              { icon: Calendar, label: "Meeting Summarizer" },
              { icon: Terminal, label: "Code Reviewer" },
              { icon: Phone, label: "Customer Support" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center gap-4 group"
              >
                <div className="w-5 h-5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Lines and Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.05))' }}>
            {/* Background Grid Lines (Subtle) */}
            <path d="M0 250 H1200" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" fill="none" />
            <path d="M500 0 V600" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" fill="none" />

            {/* Lines from left labels to center node */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              d="M210 145 H480" stroke="white" strokeWidth="0.5" fill="none" 
            />
            {/* Diagonal cross connection */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              d="M210 145 L480 250" stroke="white" strokeWidth="0.5" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              d="M190 250 H480" stroke="white" strokeWidth="0.5" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              d="M210 355 H480" stroke="white" strokeWidth="0.5" fill="none" 
            />
            {/* Diagonal cross connection bottom */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
              d="M210 355 L480 250" stroke="white" strokeWidth="0.5" fill="none" 
            />
            
            {/* Main Flow Line to right side */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              d="M520 250 H650" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 4" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              d="M730 250 H780" stroke="white" strokeWidth="0.5" fill="none" 
            />
            
            {/* Inter-app connections (The "Web") */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
              d="M690 145 L850 80" stroke="white" strokeWidth="0.5" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
              d="M850 80 L950 225" stroke="white" strokeWidth="0.5" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              d="M950 225 L850 225" stroke="white" strokeWidth="0.5" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
              d="M850 225 L690 355" stroke="white" strokeWidth="0.5" fill="none" 
            />

            {/* Vertical connections to apps */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              d="M690 140 V360" stroke="white" strokeWidth="0.5" fill="none" 
            />
            
            {/* Junction Points */}
            <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.3 }} cx="480" cy="250" r="2" fill="white" fillOpacity="0.5" />
            <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.3 }} cx="690" cy="145" r="2" fill="white" fillOpacity="0.5" />
            <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.3, duration: 0.3 }} cx="850" cy="80" r="2" fill="white" fillOpacity="0.5" />
            <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 0.3 }} cx="950" cy="225" r="2" fill="white" fillOpacity="0.5" />

            {/* Pulse Animations (Data Flow) */}
            <motion.circle r="1.5" fill="#FF4E3A">
              <animateMotion dur="3s" repeatCount="indefinite" path="M190 250 H500" />
            </motion.circle>
            <motion.circle r="1" fill="#FF4E3A" opacity="0.5">
              <animateMotion dur="4s" repeatCount="indefinite" path="M210 145 L480 250" />
            </motion.circle>
            <motion.circle r="1.5" fill="white">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M520 250 H730" />
            </motion.circle>
            <motion.circle r="1" fill="white" opacity="0.4">
              <animateMotion dur="5s" repeatCount="indefinite" path="M690 145 L850 80 L950 225 H850" />
            </motion.circle>
          </svg>

          {/* Central Node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.15, rotate: 2, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }}
              className="w-14 h-14 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center shadow-2xl relative cursor-pointer group"
            >
              <div className="w-6 h-6 flex flex-col gap-1">
                <div className="h-2 w-full bg-white rounded-sm transition-all duration-300 group-hover:bg-[#FF4E3A]" />
                <div className="h-2 w-2/3 bg-white/40 rounded-sm transition-all duration-300 group-hover:bg-[#FF4E3A]/60 group-hover:w-full" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full scale-150 transition-all duration-500 group-hover:bg-[#FF4E3A]/20 group-hover:scale-[2]" />
            </motion.div>
          </div>

          {/* Connected Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-[calc(50%+160px)] top-1/2 -translate-y-1/2"
          >
            <div className="bg-[#1D4ED8] px-3 py-1 rounded-[4px] text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-blue-500/20">
              Connected
            </div>
          </motion.div>

          {/* App Icons (Right Side) */}
          <div className="absolute right-[15%] h-full w-48 flex items-center justify-center">
            {/* Notion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, rotate: -3, transition: { duration: 0.3 } }}
              className="absolute top-[120px] left-0 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center text-white/60 transition-all duration-300 group-hover:border-white/30 group-hover:text-white group-hover:shadow-lg group-hover:shadow-white/10">
                <Square size={20} />
              </div>
            </motion.div>
            {/* Linear */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.3 } }}
              className="absolute top-[80px] right-0 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center text-[#4ADE80] transition-all duration-300 group-hover:border-[#4ADE80]/50 group-hover:shadow-lg group-hover:shadow-[#4ADE80]/20">
                <Zap size={20} fill="currentColor" />
              </div>
            </motion.div>
            {/* Slack */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, rotate: -2, transition: { duration: 0.3 } }}
              className="absolute top-[225px] right-0 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center text-[#EAB308] transition-all duration-300 group-hover:border-[#EAB308]/50 group-hover:shadow-lg group-hover:shadow-[#EAB308]/20">
                <Hash size={24} />
              </div>
            </motion.div>
            {/* ChatGPT */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.35, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.3 } }}
              className="absolute top-[225px] right-[-80px] group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center text-white/80 transition-all duration-300 group-hover:border-white/30 group-hover:text-white group-hover:shadow-lg group-hover:shadow-white/10">
                <Sparkles size={20} />
              </div>
            </motion.div>
            {/* Vercel/Linear style icon below */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
              className="absolute bottom-[100px] left-0 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-[6px] flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
                <div className="w-5 h-5 border-t-2 border-l-2 border-white/40 transition-all duration-300 group-hover:border-white" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16 mt-[-212px] mr-[0px] mb-[0px] ml-[0px]">
          {[
            { icon: Fingerprint, title: "One Click Auth", description: "A drag-and-drop interface to create, connect, and configure agents into logical workflows" },
            { icon: RefreshCw, title: "Realtime Sync", description: "Agents operate independently and coordinate tasks to complete complex all goals" },
            { icon: Plug, title: "Custom Connector SDK", description: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <feature.icon size={20} className="text-white/60" />
                <h3 className="text-lg font-medium">{feature.title}</h3>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};