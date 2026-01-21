import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logos";
import { Features } from "./components/Features";
import { Performance } from "./components/Performance";
import { Showcase } from "./components/Showcase";
import { ParallaxSection } from "./components/ParallaxSection";
import { HorizontalScrollSection } from "./components/HorizontalScrollSection";
import { Industries } from "./components/Industries";
import { Integrations } from "./components/Integrations";
import { Testimonials } from "./components/Testimonials";
import { WhyUs } from "./components/WhyUs";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { InfiniteMarquee } from "./components/InfiniteMarquee";
import { SmoothScroll } from "./components/SmoothScroll";
import { Company } from "./components/Company";
import { TeamPage } from "./components/TeamPage";
import { Platform } from "./components/Platform";
import { Solutions } from "./components/Solutions";
import { RadicalEfficiencies } from "./components/RadicalEfficiencies";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<"home" | "about" | "team" | "platform" | "solutions">("home");

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background selection:bg-accent/30">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        
        {currentPage === "home" ? (
          <>
            <Hero />
            <main className="relative">
              <Logos />
              <Performance />
              {/* REMOVED: Features - "AI agents that do real work" */}
              {/* <Features /> */}
              <WhyUs />
              {/* REMOVED: RadicalEfficiencies - duplicate content now in InfiniteMarquee */}
              {/* <RadicalEfficiencies /> */}
              <InfiniteMarquee />
              <CTA />
              {/* REMOVED SECTIONS */}
              {/* <Showcase /> */}
              {/* <ParallaxSection /> */}
              {/* <Integrations /> */}
              {/* <HorizontalScrollSection /> */}
              {/* <Industries /> */}
              {/* <Testimonials /> */}
              {/* <FAQ /> */}
            </main>
            <Footer />
          </>
        ) : currentPage === "team" ? (
          <div className="relative">
            <TeamPage onNavigate={setCurrentPage} />
          </div>
        ) : currentPage === "platform" ? (
          <div className="relative">
            <Platform onNavigate={setCurrentPage} />
          </div>
        ) : currentPage === "solutions" ? (
          <div className="relative">
            <Solutions onNavigate={setCurrentPage} />
          </div>
        ) : (
          <div className="relative">
            <Company onNavigate={setCurrentPage} />
          </div>
        )}
      </div>
    </SmoothScroll>
  );
}