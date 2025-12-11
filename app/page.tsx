"use client";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { ProcessCarousel } from "@/components/sections/process-carousel";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { BookingSection } from "@/components/sections/booking-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] font-sans selection:bg-[#DAF9A0] selection:text-[#101703]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[110vh] bg-[#101703] text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-[#DAF9A0]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#DAF9A0]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8 mt-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {["Strategy", "UX/UI Design", "Development", "SEO & Support"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            <span className="text-[#DAF9A0]">Strategy-led</span> websites for <br className="hidden md:block" />
            ambitious <span className="text-[#DAF9A0]">B2B</span> brands
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
          >
            From content strategy and UX to custom development and SEO. We craft high-performing websites that turn B2B goals into measurable outcomes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <Button className="h-16 pl-6 pr-2 rounded-2xl bg-white text-[#101703] hover:bg-gray-100 text-base font-semibold shadow-lg shadow-[#DAF9A0]/10 flex items-center gap-4 transition-transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                Schedule Intro Call
              </span>
              <div className="h-12 w-12 rounded-xl overflow-hidden bg-gray-200 ml-2 relative">
                 {/* Placeholder for avatar */}
                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Team" className="w-full h-full object-cover" />
                 <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#DAF9A0] rounded-full border border-white"></div>
              </div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-[#101703] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
             {/* Using text placeholders as SVG paths are not provided for all, ideally use SVGs */}
             <span className="text-xl font-bold font-serif text-white">WordPress</span>
             <span className="text-xl font-bold font-sans text-white">Webflow</span>
             <span className="text-xl font-bold font-sans text-white">Google Ads</span>
             <span className="text-xl font-bold font-sans text-white">HubSpot</span>
           </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 text-center justify-center items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101703] leading-tight mb-8">
              Rudo is the design partner for B2B brands <br/> Ready to Grow
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a London-based web design agency working with B2B clients across industries. Our team of marketers, designers, and developers creates high-impact websites that combine strategy, UX/UI design, and performance — tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-[#101703] mb-20 uppercase tracking-tight">
          We create <span className="inline-block px-4 py-1 bg-[#DAF9A0] rounded-lg rotate-2 mx-2">world-class</span> websites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Strategy-first Approach",
              desc: "We don't dive into design blindly. Every project starts with clear positioning, audience insights, and conversion goals so your website is built with purpose.",
              icon: "01"
            },
            {
              title: "Tailored UX/UI Design",
              desc: "We create intuitive, high-converting interfaces tailored to your users and sales funnel. No templates, just smart, scalable design.",
              icon: "02"
            },
            {
              title: "Future-proof Development",
              desc: "Built on platforms like WordPress, Webflow, or HubSpot CMS, our sites are fast, flexible, and ready to evolve with your business.",
              icon: "03"
            },
            {
              title: "Long-term Support & Growth",
              desc: "Beyond launch, we stay hands-on with ongoing improvements, performance tracking, SEO, and scalable support plans.",
              icon: "04"
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white hover:bg-[#101703] transition-all duration-300 shadow-sm border border-gray-200 hover:border-[#101703]">
              <div className="w-12 h-12 mb-6 rounded-full bg-[#F1F1F1] group-hover:bg-[#DAF9A0] flex items-center justify-center text-sm font-bold transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#101703] group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Process Carousel */}
      <ProcessCarousel />

      {/* Team Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-[#101703] tracking-tight">
              meet the team
            </h2>
            <Button variant="link" className="text-[#101703] text-lg font-medium hidden md:flex items-center gap-2">
              See all members <ArrowRight size={20} />
            </Button>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Charlotte", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
              { name: "Mike", role: "Tech Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
              { name: "Nick", role: "Design Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101703]/90 via-transparent to-transparent opacity-100" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#DAF9A0] font-medium">{member.role}</p>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Booking Section */}
      <BookingSection />

      {/* Recent Projects Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#101703] tracking-tight">
            our recent projects
          </h2>
          <Button variant="link" className="text-[#101703] text-lg font-medium hidden md:flex items-center gap-2">
            View all work <ArrowRight size={20} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "Event Footprints", 
              category: "B2B Event Technology", 
              img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" 
            },
            { 
              name: "Global Commodities", 
              category: "Commodities Trading Platform", 
              img: "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&h=600&fit=crop" 
            },
            { 
              name: "Source Investments", 
              category: "Property Search & Investment", 
              img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
            },
            { 
              name: "Gravitee", 
              category: "API Management Platform", 
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
            },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={20} className="text-[#101703]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#101703] mb-2 group-hover:text-[#DAF9A0] transition-colors">{project.name}</h3>
              <p className="text-gray-500 text-lg">{project.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#101703] text-white rounded-t-[3rem] mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to scale your <span className="text-[#DAF9A0]">B2B</span> brand?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button className="h-14 px-8 rounded-full bg-[#DAF9A0] text-[#101703] hover:bg-[#c5e885] text-lg font-bold">
              Schedule Intro Call
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

