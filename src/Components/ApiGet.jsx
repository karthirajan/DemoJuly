import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from './image/shoes.jpg'

const baseUrl='https://jsonplaceholder.typicode.com/';
function ApiGet(){
    const [todos, setTodos]=useState([]);
   const navigate=useNavigate();
    
    useEffect(()=>{
         axios.get(`${baseUrl}posts`).then((response)=>{
            console.log(response);
            setTodos(response.data)
         }).catch((error)=>{
            console.log(error)
         })
    },[])
    return(
      <> 
      <div>
        <h3 className="apiHeader">Todos</h3>

       <div className="d-flex flex-wrap" >
       {
           todos.map((value, index)=>(
         <div  key={index}>
             <div className="container " >
           <div className="apiCard" style={{width:"240px", height:"300px"}}>
             <img className="shoeImage" src={image} alt="img" />
             <div><b>Title:</b>{value.title}</div>
             <div><b>id:</b>{value.id}</div>
            <button onClick={()=>navigate(`/view/${value.id}`)}>view</button>
           </div>
           </div>
          </div>
          )) 
        }
       </div>
      </div>
      </>
    )
}
export default ApiGet;