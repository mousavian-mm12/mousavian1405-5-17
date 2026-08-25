"use client"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/cartSlice";

export default function ShoppingCart (){

  const items = useSelector (
    (state : RootState) => state.cart.items 
  );

  console.log (items);

  const dispatch = useDispatch();
  const total = items.reduce (
    (sum, item)=> sum + item.price * item.quantity , 0);

  return(
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>
      
      {
        items.map((item)=>(
          <div key={item.id} className="mb-4 flex items-center gap-6 border-b pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain"
            />
            <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p> ${item.price}</p>

            <div className="mt-2 flex items-center gap-3">

              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>

              <span>Quantity : {item.quantity}</span>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>

                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>

            </div>
          </div>
        ))
      }
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  )
}