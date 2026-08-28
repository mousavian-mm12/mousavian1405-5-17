"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CartItemAnimationProps {
  children: ReactNode;
}

export default function CartItemAnimation({
  children,
}: CartItemAnimationProps) {
  return (
    <motion.div
    layout
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -30,
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}