import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
  
    
  const [gif,setGif] = useState('')
  const [loading,setLoading] = useState(false);
  async function fetchData(){
    setLoading(true)
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get( tag? `${Url}&tag=${tag}`:Url);
    const source = data.data.images.downsized_large.url;
    console.log(source);
    setGif(source)
    setLoading(false)
  }

  useEffect( ()=>{
    fetchData();
  } ,[] )

  return {gif,loading,fetchData};
  
};

export default useGif;
