import {notFound} from "next/navigation";
import React from "react";



interface IProductprops{
  params: Promise <{slug: string}>;
  searchParams: Promise<{}>;
}
 async function product(props : IProductprops) {
   const {slug} = await props.params;

   if (parseInt(slug) > 20) {
    return notFound();
   }
  return (
   
    <div>product {slug}</div>
  )
  
 }
 export default product;