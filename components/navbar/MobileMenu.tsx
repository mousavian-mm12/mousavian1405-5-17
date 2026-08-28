"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-6 top-6 z-50 rounded-full bg-white/70 p-3 shadow-sm backdrop-blur"
      >
        {open ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>


      
      {open && (
        <div className="fixed left-6 top-20 z-40 w-56 rounded-2xl bg-white/80 p-5 shadow-lg backdrop-blur">

          <nav className="flex flex-col gap-4 text-gray-700">

            <Link href="/">
              Home
            </Link>

            <Link href="/serverreq">
              Products
            </Link>

            <Link href="/shopping-cart">
              Shopping Cart
            </Link>

            <Link href="/login">
              Login
            </Link>

          </nav>

        </div>
      )}
    </>
  );
}