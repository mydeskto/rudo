"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ArrowDown, ArrowUpRight, PenTool, Smartphone, FileText, MessageCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SiWordpress, SiReact, SiNextdotjs, SiNodedotjs, SiGoogle, SiGooglesearchconsole, SiGoogleadsense } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

import { ProcessCarousel } from "@/components/sections/process-carousel";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { teamMembers } from "@/lib/team-data";
import { projects } from "@/lib/projects-data";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary-soft selection:text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[110vh] bg-foreground text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary-soft/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-soft/5 rounded-full blur-[100px]" />
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
            Full-Stack Website <span className="text-primary-soft">Development</span> <br className="hidden md:block" />
            for Your Next <span className="text-primary-soft">Project</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white leading-relaxed"
          >
            We build high-performance websites from frontend to backend, handling everything from design to deployment. Our services include custom WordPress development, theme and plugin creation, optimization, and comprehensive SEO solutions to improve visibility, rankings, and business growth.          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/contact">
              <Button className="h-16 pl-6 pr-2 rounded-2xl bg-card text-foreground hover:bg-muted text-base font-semibold shadow-lg shadow-primary-soft/10 flex items-center gap-4 transition-transform hover:scale-105">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  Start Your Project
                </span>
                <div className="h-12 w-12 rounded-xl overflow-hidden bg-muted ml-2 relative flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-soft/20 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary-soft rounded-full border border-white"></div>
                </div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-foreground border-t border-white/5 overflow-hidden">
        <div className="w-full">
          <div className="opacity-80" style={{ height: '60px' }}>
            <LogoLoop
              logos={[
                { node: <SiWordpress className="text-primary-soft" />, title: "WordPress", href: "https://wordpress.org" },
                { node: <SiReact className="text-primary-soft" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="text-primary-soft" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiNodedotjs className="text-primary-soft" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiGooglesearchconsole className="text-primary-soft" />, title: "SEO", href: "https://search.google.com/search-console" },
                { node: <SiGoogleadsense className="text-primary-soft" />, title: "Google AdSense", href: "https://www.google.com/adsense" },
              ]}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology stack and services"
              renderItem={(item, key) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <span className="logoloop__node">{item.node}</span>
                    <span className="text-primary-soft text-sm font-medium whitespace-nowrap">{item.title}</span>
                  </div>
                );
                return item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="logoloop__link"
                    aria-label={item.ariaLabel || item.title || 'logo link'}
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              }}
            />
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
        <section className="py-10 sm:py-12 md:py-16 lg:py-24 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                We develop websites from frontend to backend
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We are full stack developers specializing in website creation and development. We handle both frontend and backend development to build complete, functional websites for your business. We also create custom WordPress solutions and provide comprehensive SEO services (On-Page, Off-Page, Technical, and Local SEO) as additional services to help improve your website's performance and search engine visibility.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Grid */}
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Left Column - Dark Panel */}
          <div className="bg-foreground rounded-[3rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[200px] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-soft mb-12 leading-tight text-center">
                We Create World-Class Websites
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-sm">
                We are a team of full stack developers who specialize in building custom websites from frontend to backend. We handle both frontend and backend development, create WordPress solutions, and provide comprehensive SEO services (On-Page, Off-Page, Technical, and Local SEO) to build complete, functional websites that perform well in search engines.
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
                title: "WordPress Design & Development",
                desc: "We create custom WordPress websites with beautiful designs and powerful functionality. Our services include custom theme development, plugin creation, WooCommerce integration, WordPress optimization, and security hardening. We build fast, secure, and SEO-friendly WordPress sites.",
                icon: PenTool
              },
              {
                title: "SEO Services",
                desc: "We provide comprehensive SEO services including On-Page SEO (content optimization, meta tags, headings), Off-Page SEO (link building, social signals), Technical SEO (site speed, mobile optimization, structured data), and Local SEO (Google Business Profile, local citations). We can optimize existing sites or include SEO best practices in new projects.",
                icon: MessageCircle
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-input hover:shadow-md transition-shadow duration-300">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <IconComponent className="w-8 h-8 text-foreground opacity-20" />
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
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Meet the team
          </h2>
          <Link href="/about">
            <Button variant="link" className="text-foreground text-lg font-medium hidden md:flex items-center gap-2">
              See all members <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-100" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary-soft font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Recent Projects Section */}
      <section className="py-10 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Our Recent Projects
          </h2>
          <Link href="/case-studies">
            <Button variant="link" className="text-foreground text-lg font-medium hidden md:flex items-center gap-2">
              View all work <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="group relative">
              <Link href={`/case-studies/${project.id}`} className="block cursor-pointer">
                <div className="relative overflow-hidden rounded-sm border border-input shadow-sm aspect-21/9 mb-6 ">
                  <div className="absolute inset-0  group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                      <ArrowUpRight size={20} className="text-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">{project.name}</h3>
                <p className="text-muted-foreground text-lg">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 bg-foreground text-white rounded-t-[3rem] mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to start your <span className="text-primary-soft">website project</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-soft/80 text-lg font-bold">
                Schedule Intro Call
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

