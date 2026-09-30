import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function ScrollFadeIn({ children, delay = 0, direction = "up", className }: ScrollFadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {}
  };

  // If accessibility settings prefer reduced motion, simplify transitions
  const initialStyles = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 0.96,
        filter: "blur(6px)",
        ...directionOffset[direction]
      };

  const animateStyles = shouldReduceMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0
      };

  return (
    <motion.div
      initial={initialStyles}
      whileInView={animateStyles}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: [0.22, 1, 0.36, 1], // Butter-smooth custom Apple-like ease out
        delay: shouldReduceMotion ? 0 : delay
      }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }} // Hardware-accelerated transforms and filters
    >
      {children}
    </motion.div>
  );
}
