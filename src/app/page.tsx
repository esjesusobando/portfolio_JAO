"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useTheme } from "next-themes";
import { personalInfo } from "@/lib/data";

function LandingContent() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Header minimal */}
      <header className="w-full px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
              <img src="/Jesus_Obando.PNG" alt="Jesús Obando" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-base font-semibold tracking-tight">Jesús Obando</h1>
              <p className="text-xs text-muted-foreground">Portfolio</p>
            </div>
          </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              AIPM & Petroleum Engineering
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Jesús Obando
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Single CTA */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/creative"
                className="block px-10 py-5 rounded-3xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-xl transition-all duration-300 group"
              >
                Ver Portfolio
                <ArrowRight weight="bold" size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-xs text-muted-foreground">
              {personalInfo.location}
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          Construido con Next.js, Motion y Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LandingContent />
    </ThemeProvider>
  );
}
