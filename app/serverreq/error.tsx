"use client"
import { error } from "console";
import React, { useEffect } from "react";

function ServerreqError({error}:{error:Error}) {
  // useEffect(()=>{
  //   <p>{error}</p>
  // },[])
  console.log(error);
  return(
    <div> Server request Error</div>
  )
}
export default ServerreqError;