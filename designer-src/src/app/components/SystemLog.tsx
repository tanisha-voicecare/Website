import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const LOGS = [
  "Inbound request: 'Synthesize quarterly compliance report'",
  "Agent #042 assigned to 'Data Retrieval'",
  "Accessing SAP ERP instance... [OK]",
  "Extracted 1,240 rows of transaction data",
  "Agent #089 assigned to 'Anomaly Detection'",
  "Scanning for policy violations...",
  "Alert: Potential variance detected in Region-4",
  "Escalating to Agent #001 for reconciliation",
  "Reconciliation complete: Adjusted for currency flux",
  "Synthesizing final report structure...",
  "Report generated: 98.4% confidence score",
  "Awaiting final human verification..."
];

export const SystemLog = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[rgb(16,16,16)] text-white/60 font-mono text-[10px] p-6 rounded-[4px] border border-white/5 shadow-2xl h-[280px] flex flex-col">
      <div className="flex items-center gap-1.5 mb-6 border-b border-white/5 pb-4">
        <div className="w-2 h-2 rounded-full bg-[#FF4E3A]/50" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-[9px] text-white/40 uppercase tracking-widest font-bold">Live Orchestration Feed</span>
      </div>
      <div className="flex-1 overflow-hidden space-y-2">
        <AnimatePresence mode="popLayout">
          {LOGS.slice(Math.max(0, index - 8), index + 1).map((log, i) => (
            <motion.div
              key={`${log}-${i}`}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-3"
            >
              <span className="text-white/20 whitespace-nowrap">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              <span className={log === LOGS[index] ? "text-white font-medium" : ""}>
                {log}
                {log === LOGS[index] && <span className="animate-pulse ml-1 inline-block w-1 h-3 bg-[#FF4E3A]" />}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};