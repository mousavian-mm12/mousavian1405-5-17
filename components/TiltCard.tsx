"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 200,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 200,
    damping: 20,
  });


  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const normalizedX =
      (x / rect.width) * 2 - 1;

    const normalizedY =
      (y / rect.height) * 2 - 1;


    rotateY.set(normalizedX * 6);

    rotateX.set(-normalizedY * 6);
  };


  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };


  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={className}
      style={{
        perspective: 1000,
      }}
    >

      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
        }}
      >
        {children}
      </motion.div>

    </div>
  );
}