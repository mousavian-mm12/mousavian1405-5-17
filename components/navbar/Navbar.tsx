"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { motion } from "motion/react";

function Navbar() {
  const pathname = usePathname();
  const items = useSelector((state: RootState) => state.cart.items);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "serverreq",
      link: "/serverreq",
    },
    {
      title: "clientreq",
      link: "/clientreq",
    },
    // {
    //   title:"shopping-cart",
    //   link:"/shopping-cart"
    // }
  ];
  return (
    <div
      className="p-4 border-b fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-md
      bg-white/70
      border-b"
    >
      <nav>
        <ul className="flex">
          {navs.map((item) => (
            <li key={item.title} className="mr-4">
              <Link
                className={item.link === pathname ? "text-blue-500" : "#333"}
                href={`${item.link}`}
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <div className="relative">
              <Link href="/shopping-cart">
                <span id="cart-icon">🛒</span>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                      scale: [1.3, 1],
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-2 text-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
