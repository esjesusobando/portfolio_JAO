"use client";

import { motion } from "motion/react";
import {
  ArrowRight, Envelope, LinkedinLogo, Phone, MapPin,
  FileText, GraduationCap, Certificate, Briefcase, Brain
} from "@phosphor-icons/react";
import { personalInfo, experience, education, certifications, projects, skills } from "@/lib/data";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <ScrollProgress />

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin weight="bold" size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
            {personalInfo.name}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-sm"
            >
              <Envelope weight="bold" size={14} />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-sm"
            >
              <LinkedinLogo weight="bold" size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`tel:${personalInfo.phoneEncoded}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors text-sm"
            >
              <Phone weight="bold" size={14} />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </motion.header>

        {/* Resumen */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Resumen Profesional
            </h2>
            <p className="text-sm leading-relaxed">
              Ingeniero de Petróleo con 11 años en la industria Oil & Gas y 7 años en transformación digital. 
              Experto en crear prototipos y MVPs rápidamente usando LLM Integration, Prompt Engineering 
              y Growth Marketing. Lideró iniciativas de transformación digital logrando un incremento del 30% 
              en velocidad de entrega del equipo y reducción del 95% en tiempo de análisis de documentos.
            </p>
          </div>
        </motion.section>

        {/* Habilidades */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Competencias Principales
            </h2>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <h3 className="text-sm font-medium mb-2">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground border border-border"
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

        {/* Experiencia */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <Briefcase weight="bold" size={14} />
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={i}>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold">{job.title}</h3>
                      <span className="text-xs text-muted-foreground">{job.company}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{job.period}</span>
                  </div>
                  <ul className="space-y-1">
                    {job.description.map((desc, j) => (
                      <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-muted-foreground shrink-0">—</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {i < experience.length - 1 && (
                    <div className="border-b border-border mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Educación */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap weight="bold" size={14} />
              Educación
            </h2>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline pb-3 border-b border-border last:border-0 last:pb-0">
                  <div>
                    <div className="text-sm font-medium">{edu.degree}</div>
                    <div className="text-xs text-muted-foreground">{edu.institution}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certificaciones */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Certificate weight="bold" size={14} />
              Certificaciones
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className="text-xs">{cert.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Proyectos */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Brain weight="bold" size={14} />
              Proyectos de IA
            </h2>
            <div className="space-y-3">
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className="pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <h3 className="text-sm font-medium">{project.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Navegación */}
        <div className="flex justify-center">
          <Link
            href="/creative"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-secondary transition-colors text-sm"
          >
            Ver Portfolio Creativo
            <ArrowRight weight="bold" size={14} />
          </Link>
        </div>
      </main>

      <Footer variant="professional" />
    </div>
  );
}
