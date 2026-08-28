import axios from "axios";
import {notFound} from "next/navigation";
import React from "react";
import {motion} from "motion/react";
import ProductDescription from "./ProductDescription";
import ProductCartButton from "./ProductCartButton";


interface IProductprops{
  params: Promise <{id: string}>;
  searchParams: Promise<{}>;
}
 async function productid (props : IProductprops) {
   const {id} = await props.params;

   if (!Number.isInteger(Number(id)) ) {
    return notFound();
   }

try{   
    
       const {data} =await axios (`https://fakestoreapi.com/products/${id}`);
      
       return(

        <div className="flex flex-row-reverse gap-5 m-5" dir="rtl">

          <img
            src={data.image}
            data-product-image ={data.id}
            className="h-[200px] w-[200px] object-contain"
            alt={data.title}
          />

          <div dir="ltr">

            <h1 className="mb-3 text-2xl font-bold mb-3 w-fit border-b border-black text-[#244f88]">
              {data.title}
            </h1>

            <ProductDescription
              description={data.description}
            />

            <ProductCartButton
            id={data.id}
            title={data.title}
            price={data.price}
            image={data.image}
            />

          </div>

        </div>
      );
    
} catch (error){
   
  console.log(error);

  return (
      <div>
        <p>Product could not be loaded.</p>
      </div>
    
    );
}
  
 }
 export default productid;