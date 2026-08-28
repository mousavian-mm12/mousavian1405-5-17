"use client";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { setCart } from "./cartSlice";
import { RootState } from "./store";


function LocalStorageSync() {
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      console.log(JSON.parse(savedCart));

      store.dispatch(setCart(JSON.parse(savedCart)));
    }
  }, []);

  return null;
}

function CartSaver() {
  
  const items = useSelector(
    (state : RootState) => state.cart.items
  );

  useEffect(()=>{

    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );
  }, [items]);

  return null;
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>

      <LocalStorageSync />
      
      <CartSaver />

      {children}
    
    </Provider>
  );
}
