"use client";

import { motion } from "framer-motion";
import { Users, Code, Target, Award, FileCode, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { teamMembers } from "@/lib/team-data";

export default function AboutPage() {
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
            <Users className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            We are full stack <br className="hidden md:block" />
            <span className="text-primary-soft">website developers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            Specializing in building custom websites from frontend to backend. We create high-performing digital solutions for your business.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              We are a team of full stack developers who specialize in website creation and development. We build custom websites from the ground up, handling both frontend and backend development to deliver complete, functional solutions for your business.
            </p>
            <p>
              Our expertise spans modern frontend frameworks, robust backend systems, and seamless integrations. We work closely with clients to understand their unique needs and deliver websites that not only look great but perform exceptionally well.
            </p>
            <p>
              We specialize in both custom full stack development and WordPress design. Our WordPress services include custom theme development, plugin creation, WooCommerce integration, WordPress optimization, and security. Beyond development, we also provide comprehensive SEO services as an additional offering. Our SEO services include On-Page SEO (content optimization, meta tags, headings), Off-Page SEO (link building, social signals), Technical SEO (site speed, mobile optimization, structured data), and Local SEO (Google Business Profile, local citations) to help improve your website's search engine visibility and drive organic growth.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our team of full stack developers brings together expertise in frontend and backend development. We combine technical skills with a collaborative approach to deliver exceptional websites for our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each team member specializes in different aspects of website development, from creating beautiful user interfaces to building robust backend systems. Together, we work as a cohesive unit to bring your website vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-soft font-medium mb-3">{member.role}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Full Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle both frontend and backend development, delivering complete website solutions from start to finish. We use modern technologies like React, Next.js, Node.js, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our full stack expertise ensures seamless integration between frontend and backend, creating fast, scalable, and maintainable websites.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <FileCode className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                WordPress Design
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We create custom WordPress websites with beautiful designs and powerful functionality. Our WordPress services include custom theme development, plugin creation, and WooCommerce integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build WordPress sites that are fast, secure, SEO-friendly, and easy to manage. From custom themes to plugin development, we deliver professional WordPress solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                SEO Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide comprehensive SEO services to improve your website's search engine visibility. Our SEO approach includes On-Page SEO, Off-Page SEO, Technical SEO, and Local SEO.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We optimize content, build quality backlinks, improve site speed, and implement local SEO strategies to help your website rank better and attract more organic traffic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Maintenance & Support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide ongoing website maintenance, updates, and support to keep your site running smoothly. From bug fixes to feature additions, we ensure your website continues to perform well.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need it.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Code,
              title: "Full Stack Expertise",
              desc: "We handle both frontend and backend development, delivering complete website solutions from start to finish."
            },
            {
              icon: Target,
              title: "Custom Solutions",
              desc: "Every project is tailored to your business needs. No templates, just custom-built websites designed for your goals."
            },
            {
              icon: Users,
              title: "Collaborative Approach",
              desc: "We work closely with you throughout the development process, ensuring your vision becomes reality."
            },
            {
              icon: Award,
              title: "Quality Focus",
              desc: "We build fast, scalable, and maintainable websites that perform well and grow with your business."
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
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
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

