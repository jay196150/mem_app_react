import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  

  const [tag,setTag] = useState('car')
 
  const {gif,loading,fetchData} = useGif(tag); 
  function cliclHandler(){
    console.log("hiii")
    fetchData();

  }
  function changeHandler(event){
    setTag(event.target.value)
  }
  return (<div className="w-1/2  bg-blue-400 rounded-lg border border-black
  flex flex-col items-center gap-y-5 mt-[15px]">

    <h1 className="text-3xl underline uppercase font-bold mt-[20px]"> {tag} Gif </h1>
   {
   loading ? <div className="h-[200px] flex justify-center items-center "> <Spinner/>  </div> : <img src={gif}/>
   }

    <input
    className="w-9/12 text-lg bg-slate-100 text-center  rounded-lg py-2 mb-[20px]"
    onChange={changeHandler}
    value={tag}
     />
    
    <button  className="w-9/12 text-lg bg-slate-100 rounded-lg py-2 mb-[20px]"  onClick={cliclHandler}>
       Generate
    </button>
  </div>);
}
