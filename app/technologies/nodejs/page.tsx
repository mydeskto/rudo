"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Server, Database, Zap, Shield, Plug, Network } from "lucide-react";

export default function NodeJSPage() {
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
            <Server className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Node.js
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Robust backend <br className="hidden md:block" />
            <span className="text-primary-soft">development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            Node.js enables us to build scalable, high-performance backend systems with JavaScript. Perfect for APIs, real-time applications, and server-side development.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                Scalable backend systems <br className="hidden md:block" />
                with Node.js
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We use Node.js to develop enterprise-grade APIs, real-time applications, microservices, and server-side systems. Node.js's event-driven, non-blocking I/O model makes it exceptionally efficient for handling concurrent requests, making it ideal for applications that require high throughput and low latency.
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
                high-performance backend
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                With over 2 million packages in the npm ecosystem, Node.js has become the preferred choice for building scalable backend systems. Companies like Netflix, LinkedIn, and Uber rely on Node.js for their backend infrastructure. Our Node.js development follows industry best practices for security, scalability, and performance.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Server,
              title: "RESTful & GraphQL APIs",
              desc: "We develop robust RESTful APIs following REST principles and GraphQL APIs for flexible data fetching. Our APIs are well-documented, versioned, and follow OpenAPI specifications. We implement proper HTTP status codes, error handling, request validation, rate limiting, and API authentication. Our APIs are designed for scalability, maintainability, and seamless integration with frontend applications and third-party services."
            },
            {
              icon: Database,
              title: "Database Integration & Optimization",
              desc: "We integrate Node.js applications with various database systems including MongoDB, PostgreSQL, MySQL, and Redis. We use ORMs and query builders like Mongoose, Sequelize, and Prisma for efficient database operations. Our database implementations include connection pooling, query optimization, indexing strategies, and proper transaction management to ensure data integrity and optimal performance."
            },
            {
              icon: Zap,
              title: "High-Performance Architecture",
              desc: "We leverage Node.js's event-driven, non-blocking I/O architecture to build applications that handle thousands of concurrent connections efficiently. We implement clustering, load balancing, and caching strategies to maximize performance. Our applications are optimized for low latency and high throughput, making them ideal for real-time applications, microservices, and high-traffic web services."
            },
            {
              icon: Network,
              title: "Real-Time Applications",
              desc: "We build real-time applications using WebSockets, Socket.io, and Server-Sent Events (SSE). Our real-time solutions enable instant communication, live updates, collaborative features, and interactive experiences. Perfect for chat applications, live dashboards, gaming platforms, collaborative tools, and any application requiring instant data synchronization across multiple clients."
            },
            {
              icon: Plug,
              title: "Third-Party Integrations",
              desc: "We seamlessly integrate Node.js applications with external services including payment gateways (Stripe, PayPal), email services (SendGrid, Mailgun), cloud storage (AWS S3, Cloudinary), authentication providers (Auth0, Firebase), and other APIs. Our integration approach ensures reliability, error handling, and proper fallback mechanisms for critical business operations."
            },
            {
              icon: Shield,
              title: "Security & Best Practices",
              desc: "We implement comprehensive security measures including JWT authentication, OAuth2, encryption, input sanitization, SQL injection prevention, XSS protection, and CORS configuration. We follow Node.js security best practices, use security-focused packages, implement rate limiting, and conduct security audits. Our applications are protected against common vulnerabilities and follow OWASP security guidelines."
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
            Why Node.js?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            Node.js enables JavaScript on the server-side, providing a unified language for full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Event-Driven",
              desc: "Non-blocking I/O architecture that handles thousands of concurrent connections efficiently."
            },
            {
              title: "Rich Ecosystem",
              desc: "Over 2 million packages in npm, providing solutions for almost any backend requirement."
            },
            {
              title: "Unified Language",
              desc: "Use JavaScript for both frontend and backend, reducing context switching and improving productivity."
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
            Ready to build with Node.js?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your backend project and create a scalable, high-performance solution using Node.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/backend-development">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Backend Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

