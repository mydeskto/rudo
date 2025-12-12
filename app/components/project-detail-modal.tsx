"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  img: string;
  url?: string;
  images?: string[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all images for the project
  const projectImages = project?.images && project.images.length > 0 
    ? project.images 
    : project?.img 
      ? [project.img] 
      : [];

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (e.key === "ArrowRight" && currentImageIndex < projectImages.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImageIndex, projectImages.length, onClose]);

  if (!project) return null;

  const nextImage = () => {
    if (currentImageIndex < projectImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[101] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded- shadow-xl max-w-7xl mx-auto min-h-full flex flex-col">
              {/* Header */}
              <div className="sticky top-0 bg-white rounded-t-3xl px-3 md:px-4 py-3 border-b border-gray-200 z-10 flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#101703] mb-">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[#101703]/60 bg-[#DAF9A0] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#101703]/60 hover:text-[#101703] flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ml-4"
                >
                  <X size={20} className="text-[#101703]" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 p-3 md:p-4">
                {/* Image Gallery */}
                {projectImages.length > 0 && (
                  <div className="relative mb-4">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100">
                      <img
                        src={projectImages[currentImageIndex]}
                        alt={`${project.name} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      
                      {/* Navigation Arrows */}
                      {projectImages.length > 1 && (
                        <>
                          {currentImageIndex > 0 && (
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                            >
                              <ChevronLeft size={24} className="text-[#101703]" />
                            </button>
                          )}
                          {currentImageIndex < projectImages.length - 1 && (
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                            >
                              <ChevronRight size={24} className="text-[#101703]" />
                            </button>
                          )}
                        </>
                      )}

                      {/* Image Counter */}
                      {projectImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                          {currentImageIndex + 1} / {projectImages.length}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Navigation */}
                    {projectImages.length > 1 && (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                        {projectImages.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              currentImageIndex === index
                                ? "border-[#101703] ring-2 ring-[#DAF9A0]"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Project Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#101703]">About This Project</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer */}
              {project.url && (
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 md:px-8 py-6 rounded-b-3xl">
                  <Button
                    onClick={() => window.open(project.url, '_blank')}
                    className="w-full h-14 rounded-full bg-[#101703] text-white hover:bg-[#101703]/90 text-lg font-bold flex items-center justify-center gap-2"
                  >
                    Visit Website
                    <ExternalLink size={20} />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

