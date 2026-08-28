"use client"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
import { AnimatePresence } from "motion/react";
import CartItemAnimation from "@/components/animations/CartItemAnimation";
import CartTotalAnimation from "@/components/animations/CartTotalAnimation";



export default function ShoppingCart (){

  const items = useSelector (
    (state : RootState) => state.cart.items 
  );

  console.log (items);

  const dispatch = useDispatch();
  const total = items.reduce (
    (sum, item)=> sum + item.price * item.quantity , 0);

  return(
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="max-w-4xl">

      <AnimatePresence>
        {items.map((item) => (

          <CartItemAnimation  key={item.id}>
          <div
           
            className="mb-4 flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >

           
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 object-contain"
            />

            
            <div className="flex-1">

              <h2 className="font-semibold">
                {item.title}
              </h2>

              <p className="mt-1 text-gray-600">
                ${item.price}
              </p>

             
              <div className="mt-4 flex items-center gap-3">

                
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-lg font-medium transition-colors hover:bg-gray-200 active:scale-95"
                >
                  −
                </button>

                
                <span className="min-w-[100px] text-center text-sm text-gray-600 font-medium">
                  Quantity: {item.quantity}
                </span>

               
                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-gray-100 text-lg font-medium transition-colors hover:bg-gray-200 active:scale-95"
                >
                  +
                </button>

                
                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="ml-3 rounded-md border px-3 py-1.5 text-sm text-red-600 transition-colors hover:bg-red-50"
                >
                  Remove
                </button>

              </div>

            </div>

          </div>
          </CartItemAnimation>
        ))}

      </AnimatePresence>

        {/* Total */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">
              Total
            </span>

            <span className="text-xl font-bold">
              <CartTotalAnimation total ={total}/>
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}