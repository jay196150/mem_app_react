import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  


  const {gif,loading,fetchData} = useGif()  
  function cliclHandler(){
    console.log("hiii")
    fetchData();

  }
  return (<div className="w-1/2  bg-green-400 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">

    <h1 className="text-3xl underline uppercase font-bold mt-[20px]">A Random Gif </h1>
   {
   loading ? <div className="h-[200px] flex justify-center items-center "> <Spinner/>  </div> : <img src={gif}/>
   }
    <button  className="w-9/12 text-lg bg-slate-100 rounded-lg py-2 mb-[20px]"  onClick={cliclHandler}>
       Generate
    </button>
  </div>);
}
