"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Shield, Zap, CheckCircle, Bug, FileCode } from "lucide-react";

export default function TypeScriptPage() {
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
            <Code className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              TypeScript
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Type-safe <br className="hidden md:block" />
            <span className="text-primary-soft">development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            TypeScript adds static type checking to JavaScript, helping us catch errors early, improve code quality, and build more reliable applications.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                Type-safe development <br className="hidden md:block" />
                for reliable applications
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                We use TypeScript extensively in our projects to improve code quality, maintainability, and developer productivity. TypeScript's type system helps catch errors during development rather than at runtime, significantly reducing bugs and improving code reliability.
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
                typescript expertise
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                According to the 2023 Stack Overflow Developer Survey, TypeScript is the 5th most loved programming language. Major companies like Google, Microsoft, and Airbnb use it for large-scale applications. Our TypeScript implementation includes strict type checking, proper interface definitions, and advanced TypeScript features.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Shield,
              title: "Static Type Safety",
              desc: "TypeScript's static type system catches errors during compilation, before code reaches production. This includes type mismatches, null/undefined errors, and incorrect function calls. Studies show that TypeScript can catch 15% of common bugs that would otherwise reach production, significantly improving code reliability and reducing debugging time. Our strict TypeScript configuration ensures maximum type safety."
            },
            {
              icon: CheckCircle,
              title: "Enhanced Developer Experience",
              desc: "TypeScript provides superior IDE support with intelligent autocomplete, inline documentation, real-time error detection, and powerful navigation features. IDEs like VS Code can provide accurate code suggestions, show parameter types, and highlight potential issues as you type. This dramatically improves developer productivity and reduces the learning curve for new team members."
            },
            {
              icon: Bug,
              title: "Early Error Detection",
              desc: "TypeScript's compiler catches type-related errors, logic mistakes, and potential runtime issues during development. This prevents bugs from reaching production, saving time and money. Common issues like accessing properties on undefined objects, incorrect function parameters, and type mismatches are caught immediately, allowing developers to fix issues before they become problems."
            },
            {
              icon: FileCode,
              title: "Self-Documenting Code",
              desc: "TypeScript's type annotations serve as inline documentation, making codebases more readable and maintainable. Function signatures, interfaces, and type definitions clearly communicate the expected data structures and behaviors. This reduces the need for extensive comments and makes it easier for developers to understand code written by others, improving team collaboration and code maintainability."
            },
            {
              icon: Zap,
              title: "Safe Refactoring",
              desc: "TypeScript's type system enables confident, large-scale refactoring. When you rename a function or change an interface, TypeScript will show you all places that need to be updated. This prevents breaking changes and ensures consistency across the codebase. Refactoring becomes safer and faster, allowing teams to continuously improve code quality without fear of introducing bugs."
            },
            {
              icon: Code,
              title: "Modern JavaScript Features",
              desc: "TypeScript supports the latest ECMAScript features including async/await, destructuring, arrow functions, and more. It compiles these modern features to compatible JavaScript, allowing you to use cutting-edge language features while maintaining compatibility with older browsers and Node.js versions. TypeScript also adds features not available in JavaScript like decorators and namespaces."
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
            Why TypeScript?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            TypeScript adds static type checking to JavaScript, making development safer and more productive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Error Prevention",
              desc: "Catch 15% of common bugs during development, before they reach production."
            },
            {
              title: "Better IDE Support",
              desc: "Intelligent autocomplete, inline documentation, and real-time error detection."
            },
            {
              title: "Self-Documenting",
              desc: "Type annotations serve as inline documentation, improving code readability."
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
            Ready to build with TypeScript?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create type-safe, reliable applications using TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/full-stack-development">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

