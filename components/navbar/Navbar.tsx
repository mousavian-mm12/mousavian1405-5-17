"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


function Navbar (){

  const pathname= usePathname();
  const items =useSelector(
    (state : RootState) => state.cart.items
  );

  const cartCount = items.reduce(
    (sum, item)=> sum + item.quantity , 0);

  const navs=[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"serverreq",
      link:"/serverreq"
    },
    {
      title:"clientreq",
      link:"/clientreq"
    },
    {
      title:"shopping-cart",
      link:"/shopping-cart"
    }
  ]
  return(
   <div className="p-4 border-b">
      <nav>
        <ul className="flex">
          {navs.map((item)=>(
               
            <li  key={item.title} className="mr-4">
              <Link className={item.link === pathname ? "text-blue-500" : "#333"} href={`${item.link}`} >{item.title}</Link>
            </li>
          ))}

         <li>
         
          <div className="relative">
            <Link href="/shopping-cart">
             🛒
             {cartCount > 0 &&
            ( <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-2 text-sm">
              {cartCount}
            </span>)}
            </Link>
          </div>

         </li>
          
        </ul>
      </nav>
  </div>
)
}
export default Navbar;