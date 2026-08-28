"use client";

import { useRef } from "react";
import { motion } from "motion/react";

// interface Props {
//   children: React.ReactNode;
//   onClick?: () => void;
// }

interface Props 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MagneticButton({
  children,
  onClick,
  className,
  ...props
}: Props) {

  const buttonRef = useRef<HTMLButtonElement>(null);


  const handleMouseMove = (
    e: React.MouseEvent
  ) => {

    const button = buttonRef.current;

    if (!button) return;


    const rect = button.getBoundingClientRect();


    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;


    button.animate(
      [
        {
          transform: `translate(0px,0px)`
        },
        {
          transform: `translate(${x * 0.2}px, ${y * 0.2}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards",
      }
    );

  };


  const reset = () => {

    buttonRef.current?.animate(
      [
        {
          transform:"translate(0px,0px)"
        }
      ],
      {
        duration:300,
        fill:"forwards"
      }
    );

  };


 return (
  <motion.button
    ref={buttonRef}
    onClick={onClick}
    onMouseMove={handleMouseMove}
    onMouseLeave={reset}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);
}