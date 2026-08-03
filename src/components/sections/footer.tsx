"use client";

import * as React from "react";
import { GithubLogo, LinkedinLogo, Envelope, Phone } from "@phosphor-icons/react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FooterProps {
  variant?: "creative" | "professional";
}

export function Footer({ variant = "creative" }: FooterProps) {
  const isCreative = variant === "creative";

  return (
    <footer className="py-8 px-6 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          {personalInfo.name} · {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Envelope weight="bold" size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinLogo weight="bold" size={20} />
          </a>
          <a
            href={`tel:${personalInfo.phoneEncoded}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone weight="bold" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
