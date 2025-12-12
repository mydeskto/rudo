"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ArrowDown, ArrowUpRight, PenTool, Smartphone, FileText, MessageCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

import { ProcessCarousel } from "@/components/sections/process-carousel";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { teamMembers } from "@/lib/team-data";
import { projects } from "@/lib/projects-data";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#F1F1F1] font-sans selection:bg-[#DAF9A0] selection:text-[#101703]">
      {/* Hero Section */}
      <section className="relative min-h-[110vh] bg-[#101703] text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-[#DAF9A0]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#DAF9A0]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mt-">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {["Frontend Development", "Backend Development", "Full Stack", "WordPress Design", "SEO Services"].map((tag) => (
              <span key={tag} className="px-3 py-2 text-center rounded-full border border-white/10 text-xs text-white/60 bg-white/5 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Full stack website <span className="text-[#DAF9A0]">development</span> <br className="hidden md:block" />
            for your next <span className="text-[#DAF9A0]">project</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white leading-relaxed"
          >
            We build custom websites from frontend to backend, including WordPress design and development. From design to deployment, we handle your entire website development project. We create custom WordPress themes, plugin development, and WordPress optimization. We also offer comprehensive SEO services including On-Page, Off-Page, Technical, and Local SEO to help your site perform better in search engines.
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
                Start Your Project
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
      <div className="relative">
        {/* Decorative SVG Line - Overlay on heading, positioned to the left */}
        <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl pointer-events-none z-0" style={{ left: '0%' }}>
          <img
            src="/intro_line_1.svg"
            alt="Decorative line"
            className="w-full h-auto"
          />
        </div>
        {/* Decorative SVG Line 2 - Overlay on heading, positioned in center */}
        <div className="hidden md:block absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] sm:max-w-xs pointer-events-none z-0">
          <img
            src="/intro_line_2.svg"
            alt="Decorative line 2"
            className="w-full h-auto"
          />
        </div>
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-[#101703] leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                We develop websites from frontend to backend
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We are full stack developers specializing in website creation and development. We handle both frontend and backend development to build complete, functional websites for your business. We also provide comprehensive SEO services (On-Page, Off-Page, Technical, and Local SEO) as an additional service to help improve your website's search engine visibility.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Left Column - Dark Green Panel */}
          <div className="bg-[#101703] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[600px] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DAF9A0] mb-12 leading-tight text-center">
                we create world-class websites
        </h2>
              <p className="text-white text-sm leading-tight text-center max-w-sm">
                We are a team of full stack developers who specialize in building custom websites from frontend to backend. We handle both frontend and backend development to build complete, functional websites for your business. We also provide comprehensive SEO services (On-Page, Off-Page, Technical, and Local SEO) as an additional service to help improve your website's search engine visibility.
              </p>
            </div>
          </div>

          {/* Right Column - White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
            {
                title: "Frontend Development",
                desc: "We build beautiful, responsive user interfaces using modern frameworks and technologies. We create intuitive designs that provide excellent user experiences and work seamlessly across all devices.",
                icon: Smartphone
            },
            {
                title: "Backend Development",
                desc: "We develop robust server-side systems, APIs, and databases. We handle authentication, data management, integrations, and all the technical infrastructure your website needs.",
                icon: FileText
            },
            {
                title: "WordPress Design",
                desc: "We create custom WordPress websites with beautiful designs and powerful functionality. Our services include custom theme development, plugin creation, WooCommerce integration, WordPress optimization, and security hardening.",
                icon: PenTool
              },
              {
                title: "Complete Website Projects",
                desc: "From concept to launch, we handle your entire website development project. We work with you to understand your needs, build the solution, and deliver a fully functional website.",
                icon: FileText
              },
              {
                title: "SEO Services (Additional)",
                desc: "We provide comprehensive SEO services including On-Page SEO (content optimization, meta tags), Off-Page SEO (link building), Technical SEO (site speed, mobile optimization), and Local SEO (local visibility). We can optimize existing sites or include SEO best practices in new projects.",
                icon: MessageCircle
            }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#101703] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                {item.desc}
              </p>
            </div>
                  <div className="flex justify-end">
                    <IconComponent className="w-8 h-8 text-[#101703] opacity-20" />
                  </div>
                </div>
              );
            })}
          </div>
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
          {teamMembers.map((member, i) => (
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

      {/* Recent Projects Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#101703] tracking-tight">
            our recent projects
          </h2>
          <Link href="/case-studies">
          <Button variant="link" className="text-[#101703] text-lg font-medium hidden md:flex items-center gap-2">
            View all work <ArrowRight size={20} />
          </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="group relative">
              <Link href={`/case-studies/${project.id}`} className="block cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                  {project.url && (
                    <div
                      className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.url, '_blank');
                      }}
                    >
                  <ArrowUpRight size={20} className="text-[#101703]" />
                </div>
                  )}
              </div>
              <h3 className="text-2xl font-bold text-[#101703] mb-2 group-hover:text-[#DAF9A0] transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-lg">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#101703] text-white rounded-t-[3rem] mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to start your <span className="text-[#DAF9A0]">website project</span>?
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

