import  { useState,useEffect } from 'react'
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
export const  useRequest = (url)=>{
    const [data, setData] = useState(null);
 
    console.log("imb");
    useEffect(() => {
        console.log("Creando")
        const abortController = new AbortController();
        const signal = abortController.signal;
        const getPublicRequest = async () => {
            try{
                const res = await axios.get(BASE_URL+url,{
                    signal,
                });
                setData(res.data);
            }catch(err){}
        }
        getPublicRequest()
        return () => {
            console.log("abortano");
            abortController.abort()
        };
    }, [url]);
    console.log("returning")
    return {data};
 }