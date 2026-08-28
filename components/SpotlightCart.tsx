"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });


  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };


  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >

      <motion.div
        className="
          pointer-events-none
          absolute
          z-20
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
        "
        style={{
          left: smoothX,
          top: smoothY,
          background:
             "radial-gradient(circle, rgba(139,92,246,0.42) 0%, rgba(139,92,246,0) 70%)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}