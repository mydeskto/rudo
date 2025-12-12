"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { categories, projects } from "@/lib/projects-data";

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#DAF9A0] font-sans">
      {/* Main Content */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#101703] text-center mb-16 tracking-tight">
          our recent projects
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                text-sm md:text-base font-medium transition-all duration-200
                ${activeCategory === category
                  ? "text-[#101703] font-bold"
                  : "text-[#101703]/50 hover:text-[#101703]/70"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <Link href={`/case-studies/${project.id}`} className="block cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 bg-white">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {project.url && (
                      <div
                        className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg"
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
                  <h3 className="text-2xl font-bold text-[#101703] mb-2 group-hover:text-[#101703]/70 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#101703]/60 text-base">
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#101703]/60 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#101703] rounded-[3rem] p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your website development project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-[#DAF9A0] text-[#101703] hover:bg-[#c5e885] text-lg font-bold">
                Get in Touch
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

