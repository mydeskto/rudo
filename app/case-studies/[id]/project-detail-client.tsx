"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects-data";
import Link from "next/link";

export function ProjectDetailClient() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find(p => p.id === projectId);
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (e.key === "ArrowRight" && currentImageIndex < projectImages.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex, projectImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/case-studies">
            <Button className="mt-4">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/case-studies">
            <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:bg-gray-100">
              <ArrowLeft size={20} />
              Back to Projects
            </Button>
          </Link>
          {project.url && (
            <Button
              onClick={() => window.open(project.url, '_blank')}
              className="bg-foreground text-white hover:bg-foreground/90 flex items-center gap-2"
            >
              Visit Website
              <ExternalLink size={18} />
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-foreground/60 bg-primary-soft px-4 py-2 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {project.name}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
        {projectImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-12"
          >
             <div className="relative w-full aspect-21/9 rounded-xl overflow-hidden bg-gray-100 shadow-md">
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                    >
                      <ChevronLeft size={24} className="text-foreground" />
                    </button>
                  )}
                  {currentImageIndex < projectImages.length - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                    >
                      <ChevronRight size={24} className="text-foreground" />
                    </button>
                  )}
                </>
              )}

              {/* Image Counter */}
              {projectImages.length > 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {projectImages.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {projectImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-foreground ring-2 ring-foreground/20"
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
          </motion.div>
        )}

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm space-y-4"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-md text-gray-700 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {project.projectPurpose && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Project Purpose</h3>
              <p className="text-md text-gray-700 leading-relaxed">
                {project.projectPurpose}
              </p>
            </div>
          )}

          {project.workDone && project.workDone.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Work</h3>
              <ul className="space-y-3">
                {project.workDone.map((work, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1 shrink-0">•</span>
                    <span className="text-md text-gray-700 leading-relaxed">{work}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-foreground font-bold mt-1 shrink-0">✓</span>
                    <span className="text-md text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        {project.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <Button
              onClick={() => window.open(project.url, '_blank')}
              size="lg"
              className="h-14 px-8 rounded-full bg-foreground text-white hover:bg-foreground/90 text-lg font-bold flex items-center justify-center gap-2 mx-auto"
            >
              Visit Website
              <ExternalLink size={20} />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

