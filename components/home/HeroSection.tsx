import React from "react";
import { LoginForm } from "./LoginForm";
import BlobAnimation from "../animations/BlobAnimation";
import ProductShowcase from "./ProductShowcase";
import MobileMenu from "../navbar/MobileMenu";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100">

      {/* Hamburger */}
      <MobileMenu/>

      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-2">

        {/* LEFT */}
        <div className="relative hidden min-h-[500px] items-center justify-center md:flex">
          
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-800">
              Discover
              <br />
              Something New
            </h2>

           <div className="relative hidden min-h-[500px] items-center justify-center md:flex">
              <ProductShowcase />
           </div>
          </div>

        </div>


        {/* RIGHT */}
        <div className="relative flex min-h-screen items-center justify-center md:min-h-[500px]">

          {/* Blob Top Right */}
          <BlobAnimation
            className="absolute right-0 top-0 h-64 w-64 rounded-[45%_55%_60%_40%] bg-purple-300/60 blur-2xl"
           >
            <div className="h-full w-full" />
          </BlobAnimation>
          
          {/* Blob Bottom Left */}
         <BlobAnimation
            className="absolute bottom-0 left-0 h-48 w-48 rounded-[60%_40%_45%_55%] bg-orange-300/60 blur-2xl"
          >
            <div className="h-full w-full" />
         </BlobAnimation>

          {/* Login */}
          <div className="relative z-10 w-full flex justify-center">
            <LoginForm />
          </div>

        </div>

      </div>

    </section>
  );
}