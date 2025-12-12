"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "They delivered a complete website from frontend to backend. Impressive technical expertise.",
    author: "Deborah O'Sullivan",
    role: "Director, Ten2Two",
    color: "#E0B0FF" // Lilac/Purple from image
  },
  {
    id: 2,
    quote: "Exceptional website development. The final result exceeded our expectations.",
    author: "Hayley Van Leeuwan",
    role: "Director of Product, Voyager Worldwide",
    color: "#DAF9A0" // Green
  },
  {
    id: 3,
    quote: "Their efficiency and approach are unrivaled. They handled frontend and backend seamlessly.",
    author: "Andrew Mabbitt",
    role: "Director, Computer & Network Security Firm",
    color: "#FFD700" // Yellowish
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const currentTestimonial = testimonials[currentIndex];
  // Calculate next two cards for the stack effect
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
  const nextNextTestimonial = testimonials[(currentIndex + 2) % testimonials.length];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div 
        ref={containerRef}
        className="relative h-[400px] md:h-[500px] w-full cursor-none group"
        onClick={handleNext}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Render stacked cards first (behind main card) */}
        <div 
           className="absolute top-8 right-[-20px] bottom-8 w-20 rounded-r-[3rem] -z-20 transition-colors duration-500"
           style={{ backgroundColor: nextNextTestimonial.color }}
        />
        <div 
           className="absolute top-4 right-[-10px] bottom-4 w-20 rounded-r-[3rem] -z-10 transition-colors duration-500"
           style={{ backgroundColor: nextTestimonial.color }}
        />

        <AnimatePresence mode="popLayout">
          {/* Main Card */}
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, zIndex: 10 }}
            exit={{ opacity: 0, scale: 0.9, x: -20, zIndex: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[3rem] p-6 sm:p-8 md:p-16 flex flex-col justify-between shadow-sm"
            style={{ backgroundColor: currentTestimonial.color }}
          >
            <div>
              <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#101703] opacity-20 mb-4 md:mb-8" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#101703] leading-tight max-w-4xl select-none">
                {currentTestimonial.quote}
              </h3>
            </div>
            
            <div className="flex items-end justify-between select-none">
              <div>
                <p className="text-[#101703] font-bold text-sm md:text-lg">
                  — {currentTestimonial.author}
                </p>
                <p className="text-[#101703]/70 text-xs md:text-base">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Custom Cursor "Next" Button */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute z-50 w-24 h-24 rounded-full bg-[#101703] text-white flex items-center justify-center font-bold text-xs tracking-widest pointer-events-none shadow-2xl"
              style={{ 
                left: mousePos.x, 
                top: mousePos.y,
                transform: "translate(-50%, -50%)" // Center the circle on cursor
              }}
            >
              NEXT
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}