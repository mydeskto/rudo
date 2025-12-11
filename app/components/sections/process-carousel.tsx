"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    desc: "We begin by understanding your business, market, and objectives — through stakeholder interviews, brand positioning workshops, and content audits."
  },
  {
    number: "02",
    title: "Audience & Journey Mapping",
    desc: "Using personas and funnel stages, we define who your users are and how they should move through the site — so we can design with intent."
  },
  {
    number: "03",
    title: "Content Strategy & Wireframes",
    desc: "We map out user flows and wireframes to shape the structure, interactions, and conversion pathways before any visual design begins."
  },
  {
    number: "04",
    title: "UX/UI Design",
    desc: "Our designers create clean, conversion-focused interfaces tailored to your brand with mobile-first thinking and atomic design principles."
  },
  {
    number: "05",
    title: "Development",
    desc: "We bring designs to life with clean, semantic code, ensuring fast load times, accessibility compliance, and seamless CMS integration."
  }
];

export function ProcessCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="process" className="py-24 bg-[#DAF9A0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold text-[#101703] tracking-tight lowercase">
            process overview
          </h2>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-[#101703]/20 flex items-center justify-center text-[#101703] hover:bg-[#101703] hover:text-[#DAF9A0] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-[#101703]/20 flex items-center justify-center text-[#101703] hover:bg-[#101703] hover:text-[#DAF9A0] transition-colors"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col justify-between min-h-[420px] transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <span className="text-4xl font-bold text-[#DAF9A0] mb-8 block">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#101703] mb-4 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}