"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Zap, Smartphone, Layers, Globe, Rocket } from "lucide-react";

export default function ReactNextJSPage() {
  return (
    <div className="min-h-screen bg-background font-sans pt-8">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-foreground text-white pt-22 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary-soft/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-soft/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Code className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              React & Next.js
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Modern frontend <br className="hidden md:block" />
            <span className="text-primary-soft">frameworks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            We use React and Next.js to build fast, interactive user interfaces with server-side rendering, optimal performance, and excellent user experiences.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                Modern frontend frameworks <br className="hidden md:block" />
                for exceptional performance
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We leverage React and Next.js to build enterprise-grade, scalable frontend applications. These technologies enable us to create lightning-fast websites with exceptional user experiences, superior SEO optimization through server-side rendering, and seamless integration with any backend system.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Dark Panel */}
          <div className="bg-foreground rounded-[3rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[200px] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-soft mb-12 leading-tight text-center">
                react & next.js expertise
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                React is used by companies like Netflix, Airbnb, and Instagram. Next.js enables server-side rendering, static site generation, and optimal performance. Our React applications are built with TypeScript for type safety, modern hooks for state management, and optimized rendering for maximum performance.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Code,
              title: "Component-Based Architecture",
              desc: "We build applications using React's component-based architecture, creating reusable, modular components that ensure code consistency, maintainability, and scalability. Our components follow best practices with proper separation of concerns, prop validation, and state management. This approach enables rapid development, easier testing, and seamless collaboration across development teams."
            },
            {
              icon: Rocket,
              title: "Next.js Server-Side Rendering",
              desc: "We leverage Next.js's powerful SSR and SSG capabilities to deliver optimal performance and SEO benefits. Server-side rendering ensures content is available to search engines immediately, improving crawlability and indexing. Static site generation pre-renders pages at build time, resulting in instant page loads and reduced server load, perfect for content-heavy websites and e-commerce platforms."
            },
            {
              icon: Zap,
              title: "Performance Optimization",
              desc: "We implement advanced performance optimization techniques including automatic code splitting, lazy loading of components and images, route-based code splitting, and optimized bundle sizes. Our Next.js applications achieve Lighthouse scores of 90+ with Core Web Vitals optimization, ensuring fast First Contentful Paint (FCP), Largest Contentful Paint (LCP), and minimal Cumulative Layout Shift (CLS)."
            },
            {
              icon: Smartphone,
              title: "Responsive & Mobile-First",
              desc: "We adopt a mobile-first responsive design approach, ensuring applications work flawlessly across all devices and screen sizes. Our React applications use modern CSS techniques, flexible layouts, and touch-optimized interactions. We test across multiple devices and browsers to ensure consistent user experiences from mobile phones to large desktop displays."
            },
            {
              icon: Layers,
              title: "Design Systems & Architecture",
              desc: "We create well-structured component libraries and design systems that promote consistency and reusability. Our architecture follows industry best practices with proper folder structure, component composition patterns, and state management strategies. This ensures maintainable, scalable codebases that can grow with your business needs while maintaining code quality and developer productivity."
            },
            {
              icon: Globe,
              title: "SEO & Search Visibility",
              desc: "Next.js's server-side rendering capabilities ensure that search engines can crawl and index your content effectively. We implement proper meta tags, structured data (JSON-LD), semantic HTML, and optimized URLs. Combined with performance optimization, this results in improved search engine rankings, better visibility, and increased organic traffic to your website."
            }
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-input hover:shadow-md transition-shadow duration-300">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-end">
                  <IconComponent className="w-8 h-8 text-foreground opacity-20" />
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Why React & Next.js?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            These technologies have become the industry standard for building modern, high-performance web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Standard",
              desc: "Used by major companies like Netflix, Airbnb, and Instagram for their frontend applications."
            },
            {
              title: "Performance",
              desc: "Achieve Lighthouse scores of 90+ with server-side rendering and optimization techniques."
            },
            {
              title: "Developer Experience",
              desc: "Excellent tooling, TypeScript support, and a thriving ecosystem of libraries and tools."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-foreground rounded-[3rem] p-12 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build with React & Next.js?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your frontend project and create a modern, fast application using React and Next.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/frontend-development">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Frontend Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

