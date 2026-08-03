"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-lima origin-left z-50 gpu-accelerated ${className}`}
      style={{ scaleX }}
    />
  );
}
