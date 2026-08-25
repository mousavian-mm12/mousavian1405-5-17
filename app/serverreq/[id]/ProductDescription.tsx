"use client";

import { motion } from "motion/react";

interface ProductDescProps {
  description: string;
}

export default function ProductDescription(
  {description,}: ProductDescProps) {

  const lines = description ?.match(/.{1,55}(?:\s|$)/g) || [];

  return (
   <div
      className="
        relative
        h-40
        overflow-hidden
        [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
      "
    >
      <div className="text-sm leading-7">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.25,
              ease: "easeOut",
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}