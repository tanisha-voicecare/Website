import React from "react";
import { motion } from "motion/react";

const COMPANIES = ["Anthropic", "Scale", "Linear", "Vercel", "Retool", "Ramp"];

export const Logos = () => {
  return (
    <div className="border-y border-border/50 py-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-8 text-center">
          Trusted by the next generation of enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
          {COMPANIES.map((company) => (
            <span key={company} className="text-xl font-bold tracking-tighter">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
