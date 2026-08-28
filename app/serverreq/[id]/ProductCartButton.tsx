"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/cartSlice";
import { animate } from "motion";
import { useAddToCartAnimation } from "@/components/useAddToCartAnimation";
import MagneticButton from "@/components/MagneticButton";
import { useEffect, useState } from "react";

interface ProductCartButtonProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCartButton({
  id,
  title,
  price,
  image,
}: ProductCartButtonProps) {
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);

  const items = useSelector(
    (state: RootState) => state.cart.items
  );

  useEffect (()=>{
    setMounted(true);
  }, []);

  const cartItem = items.find(
    (item) => item.id === id
  );

  const handleAddToCart = useAddToCartAnimation();

  if (!mounted) {
  return null;
}

  if (!cartItem) {
    return (
      // <button
      //   onClick={() =>
      //     handleAddToCart({
      //       id,
      //       title,
      //       price,
      //       image,
      //     })
      //   }
         
      //   className="mx-auto rounded-[10px] border border-gray-500 px-2 py-[6px]"
      // >
      //   Add to cart
      // </button>
    
      <MagneticButton
      className="
  rounded-full
  bg-pink-400
  px-5
  py-2
  text-sm
  font-medium
  text-white
  shadow-sm
  transition-all
  duration-300
  hover:bg-pink-500
  hover:shadow-md
"
        onClick={() =>
          handleAddToCart({
            id,
            title,
            price,
            image,
          })
        }
      >
        Add to cart
      </MagneticButton>
    
    );
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch(decreaseQuantity(id))}
        className="rounded border px-3 py-1"
      >
        -
      </button>

      <span>{cartItem.quantity}</span>

      <button
        onClick={() => dispatch(increaseQuantity(id))}
        className="rounded border px-3 py-1"
      >
        +
      </button>
    </div>
  );
}