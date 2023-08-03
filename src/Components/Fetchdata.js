import { useEffect, useState } from "react";
import { ListItems } from "./ListItems";
import Loading from "../UI/Loading";

export const Fetch=()=>{
const [loading, setLoading]= useState(true);
const [arr, setArr]= useState([]);

useEffect(()=>{
try{
    fetch('https://course-project-54c3e-default-rtdb.firebaseio.com/items.json').then((e)=>e.json())
    .then((data)=>{setArr(data)});
}finally{
  setLoading(false);
}
},[]);   
return (
    <>
{
     arr.map((e)=><ListItems item={e}/>)
}
{
    loading && <Loading/>
}
</> 
)
    
}