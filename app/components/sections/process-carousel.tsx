"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Project Discovery",
    desc: "We start by understanding your business goals, target audience, and project requirements. Through discussions and analysis, we define the scope and objectives for your website development project."
  },
  {
    number: "02",
    title: "Design & Planning",
    desc: "We create website designs and plan the architecture. This includes wireframes, user flows, and visual designs that align with your brand and provide excellent user experiences."
  },
  {
    number: "03",
    title: "Frontend Development",
    desc: "We build the user interface using modern frontend technologies. We create responsive, interactive websites that work seamlessly across all devices and browsers."
  },
  {
    number: "04",
    title: "Backend Development",
    desc: "We develop the server-side systems, APIs, and databases. We handle authentication, data management, integrations, and all the technical infrastructure your website needs."
  },
  {
    number: "05",
    title: "Testing & Launch",
    desc: "We thoroughly test your website for functionality, performance, and compatibility. Once everything is ready, we deploy your website and ensure it's live and running smoothly."
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
    <section id="process" className="py-24 bg-primary-soft overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight lowercase">
            process overview
          </h2>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-soft transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-primary-soft transition-colors"
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
                <div className="bg-card rounded-3xl p-8 h-full flex flex-col justify-between min-h-[420px] transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <span className="text-4xl font-bold text-primary mb-8 block">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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