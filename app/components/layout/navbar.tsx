"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cloud, Building2, Factory, HeartPulse, Users, Wallet, ChevronDown } from "lucide-react";
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
          ? (isScrolled && !isMenuOpen ? "bg-white backdrop-blur-md py-4 shadow-lg border-b border-gray-200" : "bg-[#DAF9A0] py-6")
          : (isScrolled && !isMenuOpen ? "bg-white backdrop-blur-md py-4 shadow-lg border-b border-gray-200" : "bg-transparent py-6"),
        isMenuOpen ? "bg-[#F1F1F1] py-6" : ""
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Rudo" 
            className={cn("h-8 w-auto transition-all duration-300")}
            style={
              isCaseStudiesPage || ActionPlanPage || isProcessPage
                ? { filter: "brightness(0) saturate(0%)" } // Force black on case studies page
                : !isMenuOpen && !isScrolled 
                  ? { filter: "brightness(0) saturate(100%) invert(88%) sepia(21%) saturate(718%) hue-rotate(39deg) brightness(101%) contrast(96%)" } 
                  : { filter: "brightness(0) saturate(0%)" } // Black logo when scrolled or menu open
            }
          />
           <span className="sr-only">Rudo</span>
        </Link>

        {/* Desktop Nav - Custom Full Width Menu */}
        <div className="hidden lg:flex items-center gap-8">
            {/* By Industry Trigger */}
            <button 
              onMouseEnter={() => setActiveMenu('industry')}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors py-2 px-1",
                shouldUseBlackText ? "text-[#101703] hover:text-[#88cc20]" : "text-white hover:text-[#DAF9A0]",
                activeMenu === 'industry' && "text-[#101703]"
              )}
            >
              by Industry <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'industry' && "rotate-180")} />
            </button>

            {/* By CMS Trigger */}
            <button 
              onMouseEnter={() => setActiveMenu('cms')}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors py-2 px-1",
                shouldUseBlackText ? "text-[#101703] hover:text-[#88cc20]" : "text-white hover:text-[#DAF9A0]",
                 activeMenu === 'cms' && "text-[#101703]"
              )}
            >
              by CMS <ChevronDown size={14} className={cn("transition-transform duration-200", activeMenu === 'cms' && "rotate-180")} />
            </button>

            <Link href="/about" className={cn("text-sm font-medium transition-colors", shouldUseBlackText ? "text-[#101703] hover:text-[#88cc20]" : "text-white hover:text-[#DAF9A0]")} onMouseEnter={() => setActiveMenu(null)}>
              About
            </Link>
            
            <Link href="/process" className={cn("text-sm font-medium transition-colors", shouldUseBlackText ? "text-[#101703] hover:text-[#88cc20]" : "text-white hover:text-[#DAF9A0]")} onMouseEnter={() => setActiveMenu(null)}>
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
                 ? "text-[#101703] hover:text-[#88cc20]" 
                 : "text-white/90 hover:text-[#DAF9A0]"
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
                    ? "border-[#101703]/10 bg-[#101703]/5 text-[#101703] hover:bg-[#DAF9A0] hover:border-[#DAF9A0] hover:text-[#101703] hover:shadow-md" 
                    : "border-white/20 bg-transparent text-white hover:bg-[#DAF9A0] hover:border-[#DAF9A0] hover:text-[#101703] hover:shadow-md"
                )}
              >
                Action Plan
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                className={cn(
                   "rounded-lg px-6 h-11 text-sm font-semibold transition-colors",
                   "bg-[#101703] text-white hover:bg-[#101703]/90" // Always dark button as per screenshot
                )}
              >
                Contact
              </Button>
            </Link>
           </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden relative z-50 transition-colors", shouldUseBlackText ? "text-[#101703]" : "text-white")}
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
            className="absolute top-full left-0 right-0 bg-[#F1F1F1] border-t border-gray-200 shadow-xl pb-12 pt-8 z-40"
            onMouseEnter={() => {}} // Keep menu open when hovering content
          >
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                {activeMenu === 'industry' && (
                  <div className="grid grid-cols-[1fr_2fr] gap-20">
                    <div className="space-y-4 max-w-sm">
                      <h4 className="text-2xl font-bold text-[#101703]">Our Focus Industries</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We understand that every industry has unique needs. Our tailored approach ensures your website is designed to resonate with your audience, deliver measurable results, and support your business goals.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                       {/* Column 1 */}
                       <div className="space-y-8">
                          <a href="#" className="flex gap-4 group">
                            <Cloud className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Tech & SaaS</h5>
                              <p className="text-xs text-gray-500">Build a website for tech business</p>
                            </div>
                          </a>
                          <a href="#" className="flex gap-4 group">
                            <Factory className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Manufacturing</h5>
                              <p className="text-xs text-gray-500">Build a website for manufacturing business</p>
                            </div>
                          </a>
                          <a href="#" className="flex gap-4 group">
                            <Users className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Recruitment</h5>
                              <p className="text-xs text-gray-500">Build a website for recruitment business</p>
                            </div>
                          </a>
                       </div>
                       
                       {/* Column 2 */}
                       <div className="space-y-8">
                          <a href="#" className="flex gap-4 group">
                            <Building2 className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Property</h5>
                              <p className="text-xs text-gray-500">Build a website for real estate business</p>
                            </div>
                          </a>
                          <a href="#" className="flex gap-4 group">
                            <HeartPulse className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Healthcare</h5>
                              <p className="text-xs text-gray-500">Build a website for healthcare business</p>
                            </div>
                          </a>
                          <a href="#" className="flex gap-4 group">
                            <Wallet className="w-5 h-5 text-[#101703] mt-1 shrink-0 group-hover:text-[#88cc20] transition-colors" />
                            <div>
                              <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">Financial Services</h5>
                              <p className="text-xs text-gray-500">Build a website for financial business</p>
                            </div>
                          </a>
                       </div>
                    </div>
                  </div>
                )}

                {activeMenu === 'cms' && (
                  <div className="grid grid-cols-[1fr_2fr] gap-20">
                    <div className="space-y-4 max-w-sm">
                      <h4 className="text-2xl font-bold text-[#101703]">Platforms</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Choosing the right CMS platform is essential for the project success. We work with time-tested platforms, delivering tailored solutions for seamless updates, scalability, and performance. Our expertise ensures measurable results and a user-friendly experience.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-y-10 max-w-md">
                        <a href="#" className="flex gap-4 group">
                          {/* HubSpot Icon Mock */}
                          <svg className="w-6 h-6 text-[#101703] shrink-0 group-hover:text-[#88cc20] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                          <div>
                            <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">HubSpot</h5>
                            <p className="text-xs text-gray-500">Build a website in HubSpot Content Hub</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group">
                          {/* Webflow Icon Mock */}
                          <svg className="w-6 h-6 text-[#101703] shrink-0 group-hover:text-[#88cc20] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z"/>
                          </svg>
                          <div>
                            <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">WebFlow</h5>
                            <p className="text-xs text-gray-500">Build a no-code website in WebFlow</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group">
                          {/* WordPress Icon Mock */}
                          <svg className="w-6 h-6 text-[#101703] shrink-0 group-hover:text-[#88cc20] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                          <div>
                            <h5 className="font-bold text-[#101703] text-base mb-1 group-hover:text-[#88cc20] transition-colors">WordPress</h5>
                            <p className="text-xs text-gray-500">Build a custom WordPress Theme</p>
                          </div>
                        </a>
                    </div>
                  </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#101703] z-40 flex flex-col items-center justify-center gap-8 p-4">
          {["by Industry", "by CMS", "About", "Process", "Case Studies"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-2xl font-medium text-white hover:text-[#DAF9A0]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
           <Button 
            variant="outline" 
            className="rounded-full bg-transparent border-white/20 text-white w-full max-w-xs h-12"
          >
            Action Plan
          </Button>
          <Link href="/contact" className="w-full max-w-xs">
            <Button 
              className="rounded-full bg-[#DAF9A0] text-[#101703] w-full h-12"
            >
              Contact
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}