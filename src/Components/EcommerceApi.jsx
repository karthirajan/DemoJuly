import { useEffect, useState } from "react";
import axios from "axios";

function EcommerceApi(){

    const[data, setData]=useState([]);
    var baseUrl='https://fakestoreapi.com/';
    
 
    useEffect(()=>{
        axios.get(`${baseUrl}posts`).then((response)=>{
            console.log(response.data)
            setData(response.data);
        }).catch((error)=>{
            console.log(error)
         })
   
    },[])
    return(
        <>
     <h3>Ecommerce Website</h3>
     {
        data.map((value,index)=>(
            <div key={index}>
             <div>${value.title}</div>
             <div>${value.price}</div>
             <div>${value.description}</div>
             <div>${value.category}</div>
             <img src="" alt="" />${value.image}
             <div>${value.rating}</div>
            </div>
        ))
     }
        </>
    )
}
export default EcommerceApi;
