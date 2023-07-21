import axios from "axios";
import { useEffect, useState } from "react";
 

function ECommerceWeb(){
  let  baseUrl="https://jsonplaceholder.typicode.com/";
    const [product, setProduct]=useState([]);

    useEffect(()=>{

        axios.get(`${baseUrl}posts`).then((response)=>{
             console.log(response.data);
             setProduct(response.data)
        }).catch((error)=>{
          console.log(error);
        })                                         
      },[]);
      return(
        <>
         <div className="container ">

            {
                product.map((value, index)=>(
                    
                      <div  key={index}>
                        <div ><b>Title:</b> ${value.title}</div>
                        <div ><b>Price:</b> ${value.price}</div>
                        <div ><b>Description:</b> ${value.description}</div>                      
                        <div ><b>Category:</b>${value.category}</div>
                        <img /><b>Image:</b>${value.image}
                        <div ><b>Rating:</b>${value.rating}</div>
                    </div>
                  
                ))
            }

         </div>
        </>
      )
}
export default ECommerceWeb;