"use client";

import { motion, useMotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { 
  ArrowRight, Envelope, LinkedinLogo, Phone, MapPin,
  Sparkle, GithubLogo, Certificate, Briefcase, GraduationCap
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { personalInfo, experience, education, certifications, projects, skills } from "@/lib/data";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Footer } from "@/components/sections/footer";

// Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  target,
  className = "" 
}: { 
  children: ReactNode; 
  href: string;
  target?: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`gpu-accelerated inline-flex items-center gap-2 px-4 py-2.5 rounded-xl 
        bg-card border border-border hover:border-primary hover:shadow-lg 
        transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default function CreativePage() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <ScrollProgress />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin weight="bold" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            {personalInfo.name}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <MagneticButton href={`mailto:${personalInfo.email}`}>
              <Envelope weight="bold" size={18} />
              <span className="text-sm">Email</span>
            </MagneticButton>
            <MagneticButton href={personalInfo.linkedin} target="_blank">
              <LinkedinLogo weight="bold" size={18} />
              <span className="text-sm">LinkedIn</span>
            </MagneticButton>
            <MagneticButton href={`tel:${personalInfo.phoneEncoded}`}>
              <Phone weight="bold" size={18} />
              <span className="text-sm font-semibold">Teléfono</span>
            </MagneticButton>
          </div>
        </motion.header>

        {/* Resumen */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Resumen Profesional
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ingeniero de Petróleo con 11 años en la industria Oil & Gas y 7 años en transformación digital. 
              Experto en la creación de prototipos y MVPs para resolver problemas de negocio, utilizando integración de LLMs, 
              Prompt Engineering y herramientas de IA. Desarrollo de soluciones tecnológicas para optimizar operaciones industriales.
            </p>
          </div>
        </motion.section>

        {/* Experiencia */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Briefcase weight="bold" size={16} />
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold">{job.title}</h3>
                      <span className="text-sm text-primary">{job.company}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((desc, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <ArrowRight weight="bold" size={12} className="text-primary shrink-0 mt-1.5" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {i < experience.length - 1 && <div className="border-b border-border mt-8" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Educación y Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Educación */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-3xl bg-card border border-border h-full">
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <GraduationCap weight="bold" size={16} />
                Educación
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.institution} · {edu.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Certificaciones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-3xl bg-card border border-border h-full">
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <Certificate weight="bold" size={16} />
                Certificaciones
              </h2>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Proyectos IA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <GithubLogo weight="bold" size={16} />
              Proyectos de IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-background border border-border hover:border-azul transition-all flex flex-col gap-3"
                >
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {project.name === "Drilling Calculator" && (
                    <a
                      href="https://obandrilling-calculator.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 text-sm text-azul font-medium hover:underline"
                    >
                      Ver calculadora <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Sección Final: Proyecto Destacado */}
        <div className="mb-12 border border-azul p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">PROYECTO DE APLICACIÓN DIGITAL</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Proyecto integrador que aplica IA, automatización y desarrollo web para optimizar operaciones de perforación.
          </p>
          <a
            href="https://obandrilling-calculator.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-azul text-white font-medium hover:bg-azul/90 transition-colors"
          >
            Ir a Drilling Calculator →
          </a>
        </div>

        {/* Competencias Principales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Sparkle weight="bold" size={16} />
              COMPETENCIAS PRINCIPALES
            </h2>
            <div className="space-y-6">
              {skills.map((skillGroup, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer variant="creative" />
    </div>
  );
}
