"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, BarChart, TrendingUp, FileText, Globe, Target, TrendingDown, AlertCircle, RefreshCw, Shield } from "lucide-react";

export default function SEOToolsPage() {
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
            We use industry-leading SEO tools including Google Search Console, Google Analytics, Google Trends, SEMrush, MozBar, Ahrefs, and other analytics platforms to optimize your website's search visibility.
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
                Our comprehensive SEO toolkit includes Google Search Console, Google Analytics, Google Tag Manager, Google Trends, SEMrush, MozBar, Ahrefs, and various analytics platforms. We implement proper tracking, set up conversion goals, create custom reports, and provide regular SEO audits and recommendations.
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
              icon: TrendingUp,
              title: "Google Trends",
              desc: "We leverage Google Trends to identify emerging search trends, seasonal patterns, and rising keyword opportunities. Google Trends helps us understand search interest over time, compare keyword popularity across regions, and discover related queries. This tool enables us to create timely, relevant content that aligns with current search behavior and capitalize on trending topics in your industry."
            },
            {
              icon: Target,
              title: "SEMrush",
              desc: "We use SEMrush for comprehensive SEO analysis including keyword research, competitor analysis, backlink audits, and site audits. SEMrush provides detailed insights into keyword difficulty, search volume, competitor rankings, and backlink profiles. We use this powerful tool to identify optimization opportunities, track keyword rankings, analyze competitor strategies, and build effective SEO campaigns that drive measurable results."
            },
            {
              icon: FileText,
              title: "MozBar",
              desc: "We utilize MozBar, a browser extension that provides instant SEO metrics while browsing any website. MozBar displays domain authority, page authority, link metrics, and on-page SEO factors in real-time. This tool helps us quickly assess the SEO strength of pages, identify optimization opportunities, and analyze competitor websites efficiently. MozBar streamlines our SEO analysis workflow and provides actionable insights at a glance."
            },
            {
              icon: Globe,
              title: "Ahrefs",
              desc: "We use Ahrefs for advanced SEO research including backlink analysis, keyword research, content gap analysis, and rank tracking. Ahrefs provides comprehensive data on backlink profiles, referring domains, organic search traffic estimates, and keyword difficulty scores. We leverage Ahrefs to build high-quality backlink strategies, identify content opportunities, track keyword rankings, and conduct thorough competitor research to develop winning SEO strategies."
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

      {/* Google Updates Recovery Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-soft/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-soft/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-primary-soft" />
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 bg-white/5 backdrop-blur-sm">
                    Google Algorithm Updates
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Recover from Google <br className="hidden md:block" />
                  <span className="text-primary-soft">Algorithm Updates</span>
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  Has your website's ranking dropped or traffic decreased due to a Google algorithm update? We specialize in helping websites recover from ranking penalties and traffic drops caused by Google's algorithm changes. Our team analyzes what went wrong, implements necessary fixes, and rebuilds your search visibility.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: TrendingDown,
                      title: "Identify the Problem",
                      desc: "We analyze your website to identify what caused the ranking drop, whether it's a core update, spam update, or quality issue."
                    },
                    {
                      icon: RefreshCw,
                      title: "Implement Fixes",
                      desc: "We address technical issues, improve content quality, fix on-page SEO problems, and ensure compliance with Google's guidelines."
                    },
                    {
                      icon: TrendingUp,
                      title: "Rebuild Rankings",
                      desc: "We develop a recovery strategy to rebuild your search visibility, improve rankings, and restore organic traffic growth."
                    },
                    {
                      icon: Shield,
                      title: "Future-Proof Your Site",
                      desc: "We implement best practices to protect your website from future algorithm updates and maintain stable rankings."
                    }
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 items-start bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-soft/20 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary-soft" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold mb-1 text-base md:text-lg">
                            {item.title}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
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

