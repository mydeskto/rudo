"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Server, Database, Key, Zap, Shield, Plug } from "lucide-react";

export default function BackendDevelopmentPage() {
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
            <Server className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Backend Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Robust server-side <br className="hidden md:block" />
            <span className="text-primary-soft">solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            We develop robust server-side systems, APIs, and databases. We handle authentication, data management, integrations, and all the technical infrastructure your website needs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Backend Development
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              We develop robust server-side systems, APIs, and databases. We handle authentication, data management, integrations, and all the technical infrastructure your website needs.
            </p>
            <p>
              Our backend development focuses on scalability, security, and performance. We use Node.js, modern databases, and cloud services to build reliable and efficient backend systems.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Server,
              title: "API Development",
              desc: "RESTful and GraphQL APIs for seamless communication between frontend and backend, and integration with third-party services."
            },
            {
              icon: Database,
              title: "Database Design",
              desc: "Efficient database architecture, optimization, and management. We design scalable data structures that support your business growth."
            },
            {
              icon: Key,
              title: "Authentication & Authorization",
              desc: "Secure user authentication and authorization systems to protect your application and user data."
            },
            {
              icon: Plug,
              title: "Third-Party Integrations",
              desc: "Seamless integration with payment gateways, email services, cloud storage, and other third-party APIs."
            },
            {
              icon: Zap,
              title: "Performance & Scalability",
              desc: "Optimized backend systems that handle high traffic loads and scale efficiently as your business grows."
            },
            {
              icon: Shield,
              title: "Security & Best Practices",
              desc: "Secure backend systems following industry best practices for data protection, encryption, and security."
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
            Ready to build your backend?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your backend development needs and create a robust, scalable server-side solution for your project.
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

