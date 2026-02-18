"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cloud, Building2, Factory, HeartPulse, Users, Wallet, ChevronDown, Code, FileCode, Globe, Smartphone, Server, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const isCaseStudiesPage = pathname === "/case-studies";
  const ActionPlanPage = pathname === "/action-plan";
  const isProcessPage = pathname === "/process";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechnologiesOpen, setMobileTechnologiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMenuOpen = activeMenu !== null;
  
  // On case studies page, links should always be black
  // On home page, links should be white initially, black on scroll
  const shouldUseBlackText = isCaseStudiesPage || ActionPlanPage || isProcessPage || isMenuOpen || isScrolled;

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isCaseStudiesPage || ActionPlanPage || isProcessPage
          ? (isScrolled && !isMenuOpen ? "bg-white backdrop-blur-md py-4 shadow-lg border-b border-gray-200" : "bg-primary-soft py-6")
          : (isScrolled && !isMenuOpen ? "bg-white backdrop-blur-md py-4 shadow-lg border-b border-gray-200" : "bg-transparent py-6"),
        isMenuOpen ? "bg-background py-6" : ""
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="NexiqoTech" 
            className={cn("h-8 w-auto transition-all duration-300")}
            // style={
            //   isCaseStudiesPage || ActionPlanPage || isProcessPage
            //     ? { filter: "brightness(0) saturate(0%)" } // Force black on case studies page
            //     : !isMenuOpen && !isScrolled 
            //       ? { filter: "brightness(0) saturate(100%) invert(88%) sepia(21%) saturate(718%) hue-rotate(39deg) brightness(101%) contrast(96%)" } 
            //       : { filter: "brightness(0) saturate(0%)" } // Black logo when scrolled or menu open
            // }
          />
           <span className="sr-only">NexiqoTech</span>
        </Link>

        {/* Desktop Nav - Custom Full Width Menu */}
        <div className="hidden lg:flex items-center gap-8">
            {/* Services Trigger */}
            <button 
              onMouseEnter={() => setActiveMenu('industry')}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors py-2 px-1",
                shouldUseBlackText ? "text-foreground hover:text-primary-hover" : "text-white hover:text-primary-soft",
                activeMenu === 'industry' && "text-foreground"
              )}
            >
              Services <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'industry' && "rotate-180")} />
            </button>

            {/* Technologies Trigger */}
            <button 
              onMouseEnter={() => setActiveMenu('cms')}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors py-2 px-1",
                shouldUseBlackText ? "text-foreground hover:text-primary-hover" : "text-white hover:text-primary-soft",
                 activeMenu === 'cms' && "text-foreground"
              )}
            >
              Technologies <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'cms' && "rotate-180")} />
            </button>

            <Link href="/about" className={cn("text-sm font-medium transition-colors", shouldUseBlackText ? "text-foreground hover:text-primary-hover" : "text-white hover:text-primary-soft")} onMouseEnter={() => setActiveMenu(null)}>
              About
            </Link>
            
            <Link href="/process" className={cn("text-sm font-medium transition-colors", shouldUseBlackText ? "text-foreground hover:text-primary-hover" : "text-white hover:text-primary-soft")} onMouseEnter={() => setActiveMenu(null)}>
              Process
            </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
           <Link 
             href="/case-studies" 
             className={cn(
               "font-medium text-sm transition-colors",
               shouldUseBlackText 
                 ? "text-foreground hover:text-primary-hover" 
                 : "text-white/90 hover:text-primary-soft"
             )}
             onMouseEnter={() => setActiveMenu(null)}
           >
             Case Studies
           </Link>
           <div className="flex items-center gap-3">
            <Link href="/action-plan">
            <Button 
              variant="outline" 
              className={cn(
                  "rounded-lg px-6 h-11 text-sm font-medium border transition-all duration-300",
                  shouldUseBlackText
                    ? "border-foreground/10 bg-foreground/5 text-foreground hover:bg-primary-soft hover:border-primary-soft hover:text-foreground hover:shadow-md" 
                    : "border-white/20 bg-transparent text-white hover:bg-primary-soft hover:border-primary-soft hover:text-foreground hover:shadow-md"
              )}
            >
              Action Plan
            </Button>
            </Link>
            <Link href="/contact">
            <Button 
              className={cn(
                 "rounded-lg px-6 h-11 text-sm font-semibold transition-colors",
                   "bg-foreground text-white hover:bg-foreground/90" // Always dark button as per screenshot
              )}
            >
              Contact
            </Button>
            </Link>
           </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden relative z-50 transition-colors", shouldUseBlackText ? "text-foreground" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Width Menu Content Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-t border-gray-200 shadow-xl pb-12 pt-8 z-40"
            onMouseEnter={() => {}} // Keep menu open when hovering content
          >
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {activeMenu === 'industry' && (
                  <div className="grid grid-cols-[1fr_2fr] gap-20">
                    <div className="space-y-4 max-w-sm">
                      <h4 className="text-2xl font-bold text-foreground">Our Services</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We provide comprehensive website development services from frontend to backend. Our full stack expertise ensures complete, scalable solutions tailored to your business needs.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                       {/* Column 1 */}
                       <div className="space-y-8">
                          <Link href="/services/full-stack-development" className="flex gap-4 group">
                            <Cloud className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Full Stack Development</h5>
                              <p className="text-xs text-gray-500">Complete website development from frontend to backend</p>
                            </div>
                          </Link>
                          <Link href="/services/wordpress-design" className="flex gap-4 group">
                            <Factory className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">WordPress Design</h5>
                              <p className="text-xs text-gray-500">Custom WordPress themes, plugins, and WooCommerce</p>
                            </div>
                          </Link>
                          <Link href="/services/seo-services" className="flex gap-4 group">
                            <Users className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">SEO Services</h5>
                              <p className="text-xs text-gray-500">On-Page, Off-Page, Technical, and Local SEO</p>
                            </div>
                          </Link>
                       </div>
                       
                       {/* Column 2 */}
                       <div className="space-y-8">
                          <Link href="/services/frontend-development" className="flex gap-4 group">
                            <Building2 className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Frontend Development</h5>
                              <p className="text-xs text-gray-500">Modern, responsive user interfaces with React & Next.js</p>
                            </div>
                          </Link>
                          <Link href="/services/backend-development" className="flex gap-4 group">
                            <HeartPulse className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Backend Development</h5>
                              <p className="text-xs text-gray-500">Robust APIs, databases, and server-side systems</p>
                            </div>
                          </Link>
                          <Link href="/services/maintenance-support" className="flex gap-4 group">
                            <Wallet className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Maintenance & Support</h5>
                              <p className="text-xs text-gray-500">Ongoing updates, security, and technical support</p>
                            </div>
                          </Link>
                       </div>
                    </div>
                  </div>
                )}

                {activeMenu === 'cms' && (
                  <div className="grid grid-cols-[1fr_2fr] gap-20">
                    <div className="space-y-4 max-w-sm">
                      <h4 className="text-2xl font-bold text-foreground">Technologies We Use</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We work with modern technologies and platforms to build fast, scalable, and maintainable websites. Our expertise spans from content management systems to cutting-edge frameworks.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                       {/* Column 1 */}
                       <div className="space-y-8">
                          <Link href="/technologies/wordpress" className="flex gap-4 group">
                            <FileCode className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">WordPress</h5>
                              <p className="text-xs text-gray-500">Custom themes, plugins, and WooCommerce</p>
                            </div>
                          </Link>
                          <Link href="/technologies/react-nextjs" className="flex gap-4 group">
                            <Code className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">React & Next.js</h5>
                              <p className="text-xs text-gray-500">Modern frontend frameworks for fast websites</p>
                            </div>
                          </Link>
                          <Link href="/technologies/nodejs" className="flex gap-4 group">
                            <Server className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                            <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Node.js</h5>
                              <p className="text-xs text-gray-500">Robust backend development and APIs</p>
                            </div>
                          </Link>
                       </div>
                       
                       {/* Column 2 */}
                       <div className="space-y-8">
                          <Link href="/technologies/typescript" className="flex gap-4 group">
                            <Smartphone className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                          <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">TypeScript</h5>
                              <p className="text-xs text-gray-500">Type-safe development for reliability</p>
                          </div>
                          </Link>
                          <Link href="/technologies/seo-tools" className="flex gap-4 group">
                            <Globe className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                          <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">SEO Tools</h5>
                              <p className="text-xs text-gray-500">Google Search Console, Analytics & more</p>
                          </div>
                          </Link>
                          <Link href="/technologies/security-performance" className="flex gap-4 group">
                            <Shield className="w-5 h-5 text-foreground mt-1 shrink-0 group-hover:text-primary-hover transition-colors" />
                          <div>
                              <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary-hover transition-colors">Security & Performance</h5>
                              <p className="text-xs text-gray-500">Optimized, secure, and fast websites</p>
                            </div>
                          </Link>
                          </div>
                    </div>
                  </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-foreground z-40 flex flex-col pt-24 pb-6 px-6 overflow-y-auto">
          <div className="max-w-md mx-auto w-full space-y-4">
            <Link href="/" className="block text-xl font-medium text-white hover:text-primary-soft py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="border-t border-white/10 pt-4">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-xl font-medium text-white hover:text-primary-soft py-2"
              >
                Services
                <ChevronDown size={20} className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
              </button>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 space-y-3 pl-4"
                >
                  <Link href="/services/full-stack-development" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Full Stack Development
                  </Link>
                  <Link href="/services/frontend-development" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Frontend Development
                  </Link>
                  <Link href="/services/backend-development" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Backend Development
                  </Link>
                  <Link href="/services/wordpress-design" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    WordPress Design
                  </Link>
                  <Link href="/services/seo-services" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    SEO Services
                  </Link>
                  <Link href="/services/maintenance-support" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Maintenance & Support
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div className="border-t border-white/10 pt-4">
              <button
                onClick={() => setMobileTechnologiesOpen(!mobileTechnologiesOpen)}
                className="w-full flex items-center justify-between text-xl font-medium text-white hover:text-primary-soft py-2"
              >
                Technologies
                <ChevronDown size={20} className={cn("transition-transform duration-200", mobileTechnologiesOpen && "rotate-180")} />
              </button>
              {mobileTechnologiesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 space-y-3 pl-4"
                >
                  <Link href="/technologies/wordpress" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    WordPress
                  </Link>
                  <Link href="/technologies/react-nextjs" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    React & Next.js
                  </Link>
                  <Link href="/technologies/nodejs" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Node.js
                  </Link>
                  <Link href="/technologies/typescript" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    TypeScript
                  </Link>
                  <Link href="/technologies/seo-tools" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    SEO Tools
                  </Link>
                  <Link href="/technologies/security-performance" className="block text-base text-white/80 hover:text-primary-soft py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Security & Performance
                  </Link>
                </motion.div>
              )}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <Link href="/about" className="block text-xl font-medium text-white hover:text-primary-soft py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/process" className="block text-xl font-medium text-white hover:text-primary-soft py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Process
              </Link>
              <Link href="/case-studies" className="block text-xl font-medium text-white hover:text-primary-soft py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link href="/action-plan" className="block text-xl font-medium text-white hover:text-primary-soft py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Action Plan
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3">
              <Link href="/action-plan" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
           <Button 
            variant="outline" 
                  className="rounded-full bg-transparent border-white/20 text-white w-full h-12"
          >
            Action Plan
          </Button>
              </Link>
              <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
          <Button 
                  className="rounded-full bg-primary-soft text-foreground w-full h-12"
          >
            Contact
          </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}