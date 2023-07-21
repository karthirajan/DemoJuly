import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Authentication from "./js/Authentication";


function ViewGetApi(){
    const {id} =useParams();
    const [todo, setTodo]=useState(null);

    useEffect(()=>{
        console.log("Id from Useparam", id);
        axios.get(`${Authentication.baseUrl}posts/${id}`).then((response)=>{
            console.log(response.data);
            setTodo(response.data)
       }).catch((error)=>{
         console.log(error);
       })
    },[]);

    const updatePost=()=>{
        let data={
            id:id,
            title:"Akila",
            body:"Student"
        }
        axios.put(`${Authentication.baseUrl}posts/${id}`, data ).then((response)=>{
            console.log(response.data);
            setTodo(response.data)
       }).catch((error)=>{
         console.log(error);
       })
    }
    let deletePost=()=>{
        axios.delete(`${Authentication.baseUrl}posts/${id}`).then((response)=>{
            console.log(response.data);
            setTodo(null);
       }).catch((error)=>{
         console.log(error);
       })
    }
    let createPost=()=>{
        let data={
          
            title:"Akila",
            body:"Student"
        }
        axios.post(`${Authentication.baseUrl}posts`, data).then((response)=>{
            console.log(response.data);
            setTodo(response.data)
       }).catch((error)=>{
         console.log(error);
       })
    }

    return(
        <>
        <div className="mt-5" style={{ "minHeight":"calc(100vh - 84px)"}}>
            
            {
                
               todo != null &&
               <div>          
            <strong>Title:{todo.title}</strong><br/>
            <i><b>Body:</b>{todo.body }</i><br/>
            <button onClick={()=>updatePost()}>Update</button><br/><br/>
            <button onClick={()=>deletePost()}>Delete</button><br/><br/>
            <button onClick={()=>createPost()}>Create</button>
            </div>
}
        </div>
        </>
    )
}
export default ViewGetApi; 