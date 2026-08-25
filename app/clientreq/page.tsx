"use client"
import axios from "axios";
import { useEffect, useState } from "react";



export interface Myuser {
  address: Address
  id: number
  email: string
  username: string
  password: string
  name: Name
  phone: string
  __v: number
}

export interface Address {
  geolocation: Geolocation
  city: string
  street: string
  number: number
  zipcode: string
}

export interface Geolocation {
  lat: string
  long: string
}

export interface Name {
  firstname: string
  lastname: string
}


function Clientreq(){

 const [users,setusers] = useState([]);
  useEffect(()=>{
 axios("https://fakestoreapi.com/users").then((results)=>{
  setusers(results.data);
  
 })

  },[])
  console.log(users);
 return(
  <div>
     {users.map((item:Myuser)=>
            <div key={item.id} className="bg-slate-100 mb-3">
              <h3>{item.id}</h3>
              <p>{item.email}</p>
            </div>
          )}
  </div>
 )
}
export default Clientreq;