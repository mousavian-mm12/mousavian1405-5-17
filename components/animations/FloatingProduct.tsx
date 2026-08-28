"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface FloatingProductProps {
  image: string;
  title: string;
  className?: string;
  duration?: number;
  delay?: number;
  rotate?: number;
}

export default function FloatingProduct({
  image,
  title,
  className,
  duration = 6,
  delay = 0,
  rotate = 4,
}: FloatingProductProps) {
  return (
    <motion.div
      className={`${className} drop-shadow-[0_10px_12px_rgba(0,0,0,0.15)]`}
      animate={{
        y: [0, -12, 0, 10, 0],
        rotate: [0, rotate, -rotate * 0.7, rotate * 0.5, 0],
        scale: [1, 1.06, 0.98, 1.04, 1],
        opacity: [0.82, 1, 0.88, 0.96, 0.82],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
}