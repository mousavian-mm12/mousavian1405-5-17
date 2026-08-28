"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface BlobAnimationProps {
  children: ReactNode;
  className?: string;
}

export default function BlobAnimation({
  children,
  className,
}: BlobAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
         x: [0, -25, 15, 0],
        y: [0, 20, -15, 0],
        scale: [1, 1.1, 0.96, 1],
        rotate: [0, 4, -3, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}