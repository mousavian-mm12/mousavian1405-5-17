import React from "react";
import axios from "axios";
// import { Mydata } from "../serverreq/page"
import { CardEdgeToEdge } from "@/components/CardEdgeToEdge";



export interface Mydata {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}


async function Serverreq() {
  try{
  const {data} = await axios("https://fakestoreapi.com/products")
 
  console.log(data);

  return(
    
    <div className=" bg-site-bg p-6">
      server request
     
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     
      {data.map((item:Mydata)=>
        <div key={item.id} className="mb-3">
           
           <CardEdgeToEdge
              id= {item.id}
              title= {item.title}
              description= {item.description}
              image= {item.image}
              price={item.price}
              />
          {/* <h3>{item.id}</h3>
          <p>{item.title}</p> */}
         
        </div>
      )}
      </div>
    </div>
    
  );
  } catch (err){
    console.log(err);
    
    return(
      <div>
        <p>" server not coneccted"</p>
      </div>
  )
}
  
}
export default Serverreq;