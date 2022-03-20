import  { useState,useEffect } from 'react'
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzRlODhmMjE3ODNjZGQ1OTRhMmE0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzc5NjIyOCwiZXhwIjoxNjQ4MDU1NDI4fQ.R2xuPPcGGPPlPQYLLAfzmuXW8uyxUIukoY9Zl5tIwMc";
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