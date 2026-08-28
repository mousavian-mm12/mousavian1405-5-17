"use client";

import { AnimatePresence, motion } from "motion/react";

interface CartTotalAnimationProps {
  total: number;
}

export default function CartTotalAnimation({
  total,
}: CartTotalAnimationProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={total}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.2,
        }}
        className="inline-block"
      >
        $ {total.toFixed(2)}
      </motion.span>
    </AnimatePresence>
  );
}