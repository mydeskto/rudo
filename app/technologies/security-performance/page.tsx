"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Zap, Lock, CheckCircle, AlertTriangle, Gauge } from "lucide-react";

export default function SecurityPerformancePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[20vh] bg-foreground text-white pt-22 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary-soft/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-soft/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Shield className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Security & Performance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Secure & optimized <br className="hidden md:block" />
            <span className="text-primary-soft">websites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            We prioritize security and performance in every project. Our websites are secure, fast, and optimized for the best user experience and search engine rankings.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                Secure & optimized <br className="hidden md:block" />
                websites for your business
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                Security and performance are fundamental pillars of every website we build. We implement industry best practices, advanced security measures, and cutting-edge optimization techniques to ensure your website is secure, fast, and reliable.
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
                enterprise-level security
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                Our performance optimization strategy focuses on achieving Core Web Vitals scores of 90+ and page load times under 2 seconds. We implement comprehensive security measures including SSL/TLS encryption, security headers, input validation, and compliance with GDPR and CCPA. We follow OWASP security guidelines and implement defense-in-depth strategies.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Shield,
              title: "Comprehensive Security Hardening",
              desc: "We implement multi-layered security measures including SSL/TLS encryption, security headers (HSTS, CSP, X-Frame-Options), secure authentication, authorization, and session management. We follow OWASP Top 10 security guidelines, implement input validation and sanitization, use parameterized queries to prevent SQL injection, and implement Content Security Policy (CSP) to prevent XSS attacks. Regular security audits and penetration testing ensure ongoing protection."
            },
            {
              icon: Lock,
              title: "Data Protection & Compliance",
              desc: "We implement robust data protection measures including encryption at rest and in transit, secure password hashing, GDPR and CCPA compliance, data anonymization, and secure data storage practices. We ensure proper access controls, audit logging, and data retention policies. Our implementations comply with industry standards and regulations to protect user data and maintain legal compliance."
            },
            {
              icon: Zap,
              title: "Advanced Performance Optimization",
              desc: "We achieve exceptional performance through code minification and bundling, image optimization (WebP, lazy loading, responsive images), CDN integration for global content delivery, browser caching strategies, database query optimization, and server-side caching (Redis, Memcached). We optimize JavaScript execution, implement code splitting, and use modern build tools to minimize bundle sizes and maximize performance."
            },
            {
              icon: Gauge,
              title: "Continuous Performance Monitoring",
              desc: "We implement continuous performance monitoring using tools like Google PageSpeed Insights, Lighthouse, WebPageTest, and real user monitoring (RUM). We track Core Web Vitals (LCP, FID, CLS), monitor server response times, track page load metrics, and set up performance budgets. Regular performance audits and optimization ensure your website maintains excellent performance as it grows and evolves."
            },
            {
              icon: AlertTriangle,
              title: "Threat Protection & Monitoring",
              desc: "We implement comprehensive threat protection including Web Application Firewalls (WAF), DDoS protection, malware scanning, intrusion detection systems, and security monitoring. We set up automated security alerts, implement rate limiting, use CAPTCHA for form protection, and monitor for suspicious activities. Regular security updates and patches ensure protection against known vulnerabilities and emerging threats."
            },
            {
              icon: CheckCircle,
              title: "Industry Best Practices",
              desc: "We follow industry best practices and standards including secure coding practices, code reviews, automated security testing, dependency vulnerability scanning, and regular security updates. We implement proper error handling, logging, and monitoring. Our development process includes security considerations from the design phase, ensuring security is built-in rather than bolted-on, resulting in more secure and maintainable applications."
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
            Why Security & Performance Matter
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            Fast, secure websites provide better user experiences and rank higher in search engines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "User Trust",
              desc: "Secure websites build trust with users and protect sensitive data from threats."
            },
            {
              title: "Search Rankings",
              desc: "Page speed is a confirmed ranking factor, and fast sites rank higher in search results."
            },
            {
              title: "Business Impact",
              desc: "Fast, secure websites improve conversions, reduce bounce rates, and drive business growth."
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
            Ready for secure, fast websites?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your security and performance needs and create a website that's both secure and optimized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/maintenance-support">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Maintenance Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

