"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, BarChart, TrendingUp, FileText, Globe, Target } from "lucide-react";

export default function SEOToolsPage() {
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
            <Search className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              SEO Tools
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            SEO tools & <br className="hidden md:block" />
            <span className="text-primary-soft">analytics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            We use industry-leading SEO tools including Google Search Console, Google Analytics, and other analytics platforms to optimize your website's search visibility.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                Data-driven SEO <br className="hidden md:block" />
                optimization & analytics
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We leverage industry-leading SEO tools and analytics platforms to optimize your website's search engine visibility, track performance, and make data-driven decisions. Our comprehensive toolkit provides insights into search performance, user behavior, and optimization opportunities.
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
                professional seo toolkit
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                Our comprehensive SEO toolkit includes Google Search Console, Google Analytics, Google Tag Manager, keyword research tools like Ahrefs and SEMrush, and various analytics platforms. We implement proper tracking, set up conversion goals, create custom reports, and provide regular SEO audits and recommendations.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Search,
              title: "Google Search Console",
              desc: "We use Google Search Console to monitor your website's search performance, identify indexing issues, track keyword rankings, and analyze click-through rates. We set up proper sitemaps, monitor Core Web Vitals, fix crawl errors, and optimize for featured snippets. Search Console provides invaluable insights into how Google sees and indexes your website, enabling us to make data-driven improvements to your search visibility."
            },
            {
              icon: BarChart,
              title: "Google Analytics & Tracking",
              desc: "We implement comprehensive Google Analytics tracking to monitor website traffic, user behavior, conversion funnels, and goal completions. We set up custom events, e-commerce tracking, user flow analysis, and conversion attribution. Our analytics implementation provides deep insights into your audience, their behavior, and how they interact with your website, enabling us to optimize for better user experience and conversions."
            },
            {
              icon: Target,
              title: "Keyword Research & Strategy",
              desc: "We use professional keyword research tools to identify high-value keywords with strong search volume and commercial intent. Our keyword strategy includes primary keywords, long-tail keywords, semantic keywords, and competitor keyword analysis. We map keywords to content, track keyword rankings, and continuously refine our keyword strategy based on performance data and search trends."
            },
            {
              icon: TrendingUp,
              title: "Performance Monitoring",
              desc: "We continuously monitor SEO performance metrics including organic traffic growth, keyword rankings, backlink profiles, domain authority, and conversion rates. We create custom dashboards and reports to track progress, identify trends, and measure ROI. Our performance monitoring ensures we can quickly identify issues, capitalize on opportunities, and demonstrate the value of our SEO efforts with clear, measurable results."
            },
            {
              icon: FileText,
              title: "Content Performance Analysis",
              desc: "We analyze content performance to identify top-performing pages, content gaps, and optimization opportunities. We track metrics like page views, time on page, bounce rates, and conversion rates for each piece of content. This analysis helps us understand what content resonates with your audience and search engines, enabling us to create more effective content and optimize existing pages for better performance."
            },
            {
              icon: Globe,
              title: "Competitive Intelligence",
              desc: "We conduct comprehensive competitor analysis to understand their SEO strategies, identify opportunities, and benchmark performance. We analyze competitor keywords, backlink profiles, content strategies, and technical SEO implementations. This competitive intelligence helps us develop strategies to outperform competitors, identify content gaps, and discover new opportunities for growth in your market."
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
            Why Professional SEO Tools?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            Data-driven SEO decisions lead to measurable improvements in search rankings and business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data-Driven",
              desc: "Every SEO decision is backed by real data and analytics, ensuring measurable results."
            },
            {
              title: "Comprehensive Insights",
              desc: "Track organic traffic, keyword rankings, user behavior, and conversion rates."
            },
            {
              title: "Continuous Improvement",
              desc: "Regular monitoring and optimization to improve search rankings and drive growth."
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
            Ready to improve your SEO?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your SEO needs and use these powerful tools to improve your search rankings and drive organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/seo-services">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View SEO Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

