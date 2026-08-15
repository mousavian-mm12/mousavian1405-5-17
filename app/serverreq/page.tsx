import React from "react";
import axios from "axios";
// import { Mydata } from "../serverreq/page"


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
  const {data} = await axios("https://fakestoreapi.com/products")
 
  console.log(data);
  return(
    <div>
      server request

      {data.map((item:Mydata)=>
        <div key={item.id} className="bg-slate-100 mb-3">
          <h3>{item.id}</h3>
          <p>{item.title}</p>
          </div>
      )}
    </div>
    
  )
  
}
export default Serverreq;