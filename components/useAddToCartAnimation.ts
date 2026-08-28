"use client";

import { animate } from "motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function useAddToCartAnimation() {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    const productImage = document.querySelector(
      `[data-product-image="${product.id}"]`
    ) as HTMLImageElement | null;

    const cartIcon = document.getElementById("cart-icon");

    // اگر عنصری پیدا نشد،
    // حداقل محصول را به Redux اضافه کن
    if (!productImage || !cartIcon) {
      dispatch(
        addToCart({
          ...product,
          quantity: 1,
        })
      );

      return;
    }

    const imageRect = productImage.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const startX = imageRect.left;
    const startY = imageRect.top;

    const endX =
      cartRect.left +
      cartRect.width / 2 -
      imageRect.width / 2;

    const endY =
      cartRect.top +
      cartRect.height / 2 -
      imageRect.height / 2;

    const x = endX - startX;
    const y = endY - startY;

    //  اول محصول را بهRedux اضافه کن   
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );

    // ساخت clone از تصویر
    const flyingImage = document.createElement("img");

    flyingImage.src = product.image;

    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${startX}px`;
    flyingImage.style.top = `${startY}px`;
    flyingImage.style.width = `${imageRect.width}px`;
    flyingImage.style.height = `${imageRect.height}px`;
    flyingImage.style.objectFit = "contain";
    flyingImage.style.pointerEvents = "none";
    flyingImage.style.zIndex = "9999";

    document.body.appendChild(flyingImage);

   // انیمیشن حرکت تصویر به سمت Cart
    animate(
      flyingImage,
      {
        x: [0, x * 0.35, x * 0.75, x],
        y: [0, y * 0.15 - 70, y * 0.85 - 20, y],
        scale: [1, 0.8, 0.5, 0.2],
        opacity: [1, 1, 0.8, 0],
        rotate: [0, 8, -8, 0],
      },
      {
        duration: 0.8,
        ease: "easeInOut",
      }
    ).then(() => {
      flyingImage.remove();

      // انیمیشن کوچک Cart بعد از رسیدن محصول
      animate(
        cartIcon,
  {
    scale: [1, 1.5, 0.8, 1],
    rotate: [0, 10, -10, 0],
  },
  {
    duration: 0.6,
    ease: "easeOut",
  }
      );
    });
  };

  return handleAddToCart;
}