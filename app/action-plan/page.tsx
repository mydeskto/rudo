"use client";

import { motion } from "framer-motion";
import { FileText, Target, CheckCircle, ArrowRight, FileCode, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActionPlanPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[20vh] bg-primary-soft text-foreground pt-26 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-foreground/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-foreground/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <FileText className="w-5 h-5 text-foreground" />
            <span className="px-4 py-2 rounded-full border border-foreground/10 text-sm text-foreground/60 bg-foreground/5 backdrop-blur-sm">
              Action Plan
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-foreground"
          >
            Your website <br className="hidden md:block" />
            <span className="text-foreground">development roadmap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-foreground/80 leading-relaxed"
          >
            Get a customized action plan for your website development project. We'll help you understand the steps needed to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Action Plan Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Your Development Journey
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We start by understanding your business goals, target audience, and project requirements. This phase includes stakeholder interviews, technical requirements gathering, and project scope definition.",
                icon: Target
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "We create website designs and plan the technical architecture. This includes wireframes, user flows, visual designs, and system architecture planning for both frontend and backend.",
                icon: FileText
              },
              {
                step: "03",
                title: "Development Phase",
                desc: "We build your website using modern technologies. Our full stack development covers frontend interfaces, backend systems, APIs, databases, and integrations.",
                icon: CheckCircle
              },
              {
                step: "04",
                title: "WordPress Development",
                desc: "For WordPress projects, we develop custom themes, create plugins, integrate WooCommerce, and optimize for performance. We ensure your WordPress site is fast, secure, and easy to manage.",
                icon: FileCode
              },
              {
                step: "05",
                title: "SEO Optimization",
                desc: "We implement comprehensive SEO strategies including On-Page SEO (content optimization, meta tags), Off-Page SEO (link building), Technical SEO (site speed, mobile optimization), and Local SEO (local visibility) to improve search rankings.",
                icon: Globe
              },
              {
                step: "06",
                title: "Testing & Launch",
                desc: "We thoroughly test your website for functionality, performance, and compatibility. Once everything is ready, we deploy your website and ensure it's live and running smoothly.",
                icon: ArrowRight
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-6 h-6 text-foreground" />
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-foreground rounded-[3rem] p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your website development project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
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

