"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, MousePointer2, FileText, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "design",
    label: "Website Design",
    content: "We create beautiful, user-friendly website designs that align with your brand and business goals. Our design process focuses on creating intuitive interfaces, responsive layouts, and engaging user experiences that convert visitors into customers.",
    tags: ["UI/UX Design", "Responsive Design", "Brand Identity", "Wireframing", "Prototyping", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop"
  },
  {
    id: "frontend",
    label: "Frontend Development",
    content: "We build responsive, interactive user interfaces using modern frontend technologies. From React and Next.js to Vue and Angular, we create fast, beautiful websites that provide excellent user experiences across all devices and browsers.",
    tags: ["React", "Next.js", "Vue.js", "TypeScript", "Responsive Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
  },
  {
    id: "backend",
    label: "Backend Development",
    content: "We develop robust backend systems, APIs, and server infrastructure. We handle databases, authentication, business logic, and integrations. We build scalable, secure backends that power your website's functionality.",
    tags: ["Node.js", "API Development", "Database Design", "Authentication", "Server Infrastructure", "Cloud Services"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop"
  },
  {
    id: "wordpress",
    label: "WordPress Design",
    content: "We create custom WordPress websites with beautiful designs and powerful functionality. Our WordPress services include custom theme development, plugin creation, WooCommerce integration, WordPress optimization for speed and performance, security hardening, and ongoing maintenance. We build WordPress sites that are fast, secure, SEO-friendly, and easy to manage.",
    tags: ["Custom Themes", "Plugin Development", "WooCommerce", "WordPress Optimization", "Security", "Performance", "Responsive Design", "SEO Ready"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop"
  },
  {
    id: "seo",
    label: "SEO Services",
    content: "We provide comprehensive SEO services to improve your website's search engine visibility and rankings. Our SEO approach includes On-Page SEO (content optimization, meta tags, headings), Off-Page SEO (link building, social signals), Technical SEO (site speed, mobile optimization, structured data), and Local SEO (Google Business Profile, local citations). We can optimize existing websites or implement SEO best practices in new development projects.",
    tags: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "Content Optimization", "Link Building", "Site Performance", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
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
          {/* Website Design Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">Website Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create beautiful, user-friendly website designs that align with your brand. Our design process focuses on creating intuitive interfaces and engaging user experiences that convert visitors into customers.
              </p>
            </div>
            <Palette className="w-8 h-8 text-[#101703]/20" />
          </div>

          {/* SEO Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">SEO Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer comprehensive SEO services including On-Page SEO (content & meta optimization), Off-Page SEO (link building), Technical SEO (site speed & structure), and Local SEO (local visibility). We can optimize existing websites or include SEO best practices in new development projects.
              </p>
            </div>
            <Search className="w-8 h-8 text-[#101703]/20" />
          </div>

          {/* WordPress Design Card */}
          <div className="bg-white rounded-[2rem] p-8 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-[#101703] mb-4">WordPress Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create custom WordPress websites with beautiful designs and powerful functionality. From theme customization to plugin development, we build WordPress sites that are fast, secure, and easy to manage.
              </p>
            </div>
            <MousePointer2 className="w-8 h-8 text-[#101703]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}