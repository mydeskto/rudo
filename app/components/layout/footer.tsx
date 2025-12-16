"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.svg" 
                alt="Rudo" 
                className="h-8 w-auto"
                style={{ filter: "brightness(0) saturate(100%) invert(88%) sepia(21%) saturate(718%) hue-rotate(39deg) brightness(101%) contrast(96%)" }}
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Full stack developers specializing in website creation and development. We build custom websites from frontend to backend, create WordPress solutions, and provide comprehensive SEO services.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  WordPress Design
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <a href="mailto:hello@rudo.co.uk" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  hello@rudo.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <a href="tel:+441234567890" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Rudo. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

