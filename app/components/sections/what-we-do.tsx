"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, MousePointer2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "strategy",
    label: "Strategy",
    content: "Every successful B2B website begins with a clear strategy. During discovery, we align on goals, define your audience, and uncover insights that guide every decision. From user journeys to messaging, we build a strong foundation focused on achieving measurable results.",
    tags: ["Research", "UI/UX audit", "Moodboard", "User Personas", "Product strategy", "Prototypes/Wireframes"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop"
  },
  {
    id: "design",
    label: "Design",
    content: "We craft visually stunning, user-centric designs that elevate your brand. Our design process focuses on creating intuitive interfaces that engage users and drive conversions, ensuring your digital presence is both beautiful and functional.",
    tags: ["Visual Design", "Design Systems", "Interaction Design", "Animation", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop"
  },
  {
    id: "development",
    label: "Development",
    content: "Our development team brings designs to life with clean, scalable code. We prioritize performance, accessibility, and security to ensure your website is robust, fast, and easy to manage for the long term.",
    tags: ["Frontend Dev", "CMS Integration", "Performance Optimization", "Accessibility", "QA Testing"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
  }
];

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="bg-[#DAF9A0] rounded-[3rem] p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#101703] mb-12 tracking-tight">
          what we do
        </h2>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 mb-8">
          {/* Tabs Navigation */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-left px-8 py-6 rounded-2xl text-2xl font-bold transition-all duration-300",
                  activeTab.id === tab.id
                    ? "bg-white text-[#101703] shadow-sm"
                    : "bg-[#DAF9A0] text-[#101703]/40 hover:text-[#101703]/70 hover:bg-[#c5e885]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Content Area */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[500px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <img 
                  src={activeTab.image} 
                  alt={activeTab.label}
                  className="w-full h-full object-cover brightness-[0.7]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                    {activeTab.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm font-medium">
                    {activeTab.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Get In Touch Circle Button */}
                <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-2">
                   <span className="text-white text-xs font-bold tracking-widest uppercase">Get in Touch</span>
                   <button className="w-20 h-20 rounded-full bg-[#DAF9A0] flex items-center justify-center text-[#101703] hover:scale-110 transition-transform duration-300">
                     <ArrowUpRight size={32} />
                   </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* SEO Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">SEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build SEO in from the start, optimizing site architecture, content, and performance to help your site rank and reach the right people. This brings in qualified traffic and ensures your investment works harder for your business.
              </p>
            </div>
            <Search className="w-8 h-8 text-[#101703]/20" />
          </div>

          {/* PPC Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">Pay Per Click (PPC)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pay-per-click advertising brings immediate visibility to your site. We create targeted campaigns across Google, LinkedIn, and Meta to reach decision-makers and drive leads. It's a fast and measurable way to support growth and generate results.
              </p>
            </div>
            <MousePointer2 className="w-8 h-8 text-[#101703]/20" />
          </div>

          {/* Copywriting Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">Copywriting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Effective messaging is critical to conversion. Our copywriting turns complex ideas into compelling, accessible language. From value propositions to calls to action, we write with clarity and purpose to engage the right audience and drive them to act.
              </p>
            </div>
            <FileText className="w-8 h-8 text-[#101703]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}