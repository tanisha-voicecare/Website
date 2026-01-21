import React from "react";
import logoImage from "figma:asset/7777640f2ec56ab6c56e228f0ad9cc9c159f022e.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img src={logoImage} alt="VoiceCare AI" className="h-16" />
            </div>
            
            <p className="text-sm text-muted-foreground max-w-[320px] leading-relaxed">
              The orchestration layer for the autonomous enterprise. Built for scale, security, and intelligence.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px]">Product</h5>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Platform</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px]">Resources</h5>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm mb-6 uppercase tracking-wider text-[11px]">Company</h5>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/30">
          <p className="text-[12px] text-muted-foreground">
            © 2026 VoiceCare AI Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-[12px] text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};