"use client";

import FloatingProduct from "@/components/animations/FloatingProduct";
import Image from "next/image";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "/products/product-1.png",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/products/product-3.png",
  },
  {
    id: 7,
    title: "Product 7",
    image: "/products/product-7.png",
  },
  {
    id: 11,
    title: "Product 11",
    image: "/products/product-11.png",
  },
  {
    id: 14,
    title: "Product 14",
    image: "/products/product-14.png",
  },
  {
    id: 15,
    title: "Product 15",
    image: "/products/product-15.png",
  },
];

export default function ProductShowcase() {
  return (
    <div className="relative h-[500px] w-full max-w-[520px] overflow-visible">

      
      <h2 className="absolute left-1/2 top-2 z-20 -translate-x-1/2 whitespace-nowrap text-3xl font-bold text-gray-800">
        Discover Our Products
      </h2>

      {/* Bell */}
      
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
     
      <motion.div
       className="drop-shadow-[0_18px_18px_rgba(0,0,0,0.18)]"
        animate={{
          // y:[0,-8,0],
          rotate:[0,1,-1,0]  
        }}
        transition={{
          duration:4,
          repeat:Infinity,
          ease:"easeInOut"
        }}
      >
        <Image
          src="/products/bell-1.png"
          alt="Bell"
          width={120}
          height={120}
          className="object-contain"
        />
      </motion.div>
      </div>

      {/* Product 1 */}
     <FloatingProduct
        image={products[0].image}
        title={products[0].title}
        duration={7}
        rotate={7}
        className="absolute left-[3%] top-[25%] h-16 w-16 object-contain lg:h-20 lg:w-20 lg:left-[-2%]"
      />

      {/* Product 3 */}
      <FloatingProduct
        image={products[1].image}
        title={products[1].title}
        duration={8}
        delay={1}
        rotate={-5}
        className="absolute right-[3%] top-[25%] h-18 w-18 object-contain lg:h-21 lg:w-21 lg:right-[-2%]"
      />

      {/* Product 7 */}
      <FloatingProduct
        image={products[2].image}
        title={products[2].title}
        duration={6.5}
        delay={0.7}
        rotate={6}
        className="absolute left-[-7%] top-[48%] h-12 w-12 object-contain lg:h-16 lg:w-16 lg:left-[-20%] "
      />

      {/* Product 11 */}
      <FloatingProduct
        image={products[3].image}
        title={products[3].title}
        duration={9}
        delay={1.3}
        rotate={-7}
        className="absolute right-[12%] top-[47%] h-12 w-12 object-contain drop-shadow-x1 lg:h-16 lg:w-16 lg:right-[-9%] "
      />

      {/* Product 14 */}
      <FloatingProduct
        image={products[4].image}
        title={products[4].title}
        duration={7.5}
        delay={0.3}
        rotate={5}
        className="absolute left-[1%] bottom-[20%] h-20 w-20 object-contain"
      />

      {/* Product 15 */}
      <FloatingProduct
        image={products[5].image}
        title={products[5].title}
        duration={8.5}
        delay={1.7}
        rotate={-6}
        className="absolute right-[0%] bottom-[18%] h-24 w-24 object-contain"
      />

    </div>
  );
}