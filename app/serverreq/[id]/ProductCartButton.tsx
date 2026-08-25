"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/cartSlice";

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

  const items = useSelector(
    (state: RootState) => state.cart.items
  );

  const cartItem = items.find(
    (item) => item.id === id
  );

  if (!cartItem) {
    return (
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id,
              title,
              price,
              image,
              quantity: 1,
            })
          )
        }
        className="mx-auto rounded-[10px] border border-gray-500 px-2 py-[6px]"
      >
        Add to cart
      </button>
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