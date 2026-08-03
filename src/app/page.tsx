"use client";

import { motion } from "motion/react";
import {
  Sparkle,
  FileText,
  ArrowRight,
  Sun,
  Moon,
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

          {/* Two versions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Versión Creativa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/creative"
                className="block p-8 rounded-3xl bg-card border border-border 
                  hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <Sparkle weight="bold" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Creativo</h2>
                    <p className="text-xs text-muted-foreground">Portfolio Premium</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-6">
                  Ver Portfolio
                  <ArrowRight weight="bold" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Versión Profesional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/professional"
                className="block p-8 rounded-3xl bg-card border border-border 
                  hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <FileText weight="bold" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Profesional</h2>
                    <p className="text-xs text-muted-foreground">CV Optimizado ATS</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-6">
                  Ver Currículum
                  <ArrowRight weight="bold" size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
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
