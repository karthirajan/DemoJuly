import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Authentication from "./js/Authentication";

function ViewApidata(){
    const {id}=useParams();
    const [todo, setTodo]=useState(null);

    useEffect(()=>{
        console.log("use param",id);
        axios.get(`${Authentication.baseUrl}posts/${id}`).then((response)=>{
            console.log(response);
            setTodo(response.data)
         }).catch((error)=>{
            console.log(error)
         })
    },[])

   let data={
    id:id,
    title:"selvisundar",
    body:"Developer"
   }
   
    const updatePost=()=>{
        axios.put(`${Authentication.baseUrl}posts/${id}`,data).then((response)=>{
            console.log(response);
            setTodo(response.data)
         }).catch((error)=>{
            console.log(error)
         })
    }

    const deletePost=()=>{
        axios.delete(`${Authentication.baseUrl}posts/${id}`).then((response)=>{
            console.log(response);
            setTodo(null)
         }).catch((error)=>{
            console.log(error)
         })
    }

    const createPost=()=>{
        axios.post(`${Authentication.baseUrl}posts`,data).then((response)=>{
            console.log(response);
            setTodo(response.data)
         }).catch((error)=>{
            console.log(error)
         })
    }
 return(
        <>
        <div style={{minHeight:"calc(100vh - 134px)"}}>
       { todo !=null &&
        <div className="viewApi">
           <strong>{todo.title}</strong> <br />
             <i className="apiBody">{todo.body}</i> <br />
             <button onClick={updatePost}>update</button> <br />
             <button onClick={deletePost}>Delete</button> <br />
             <button onClick={createPost}>Create</button> <br />

        </div>
       }
        </div>
        </>
    )
}
export default ViewApidata;