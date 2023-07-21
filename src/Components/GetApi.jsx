import { memo, useEffect, useState } from "react";
import Authentication from "./js/Authentication";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import shoes from "../Components/assets/shoes.jpg";
 
function GetApi({  } ){

  const [todos, setTodos]=useState([]);
  const navigate=useNavigate();
    useEffect(()=>{

      axios.get(`${Authentication.baseUrl}posts`).then((response)=>{
           console.log(response.data);
           setTodos(response.data)
      }).catch((error)=>{
        console.log(error);
      })                                                                      
    },[]);
       return(
                 <>
                   <h2>My Todos</h2>
                   <div className="d-flex flex-wrap ">
                   
                   {
                    todos.map (( value, index)=>(
                      <div  key={index}>
                        <div className="Container">
                          <div className="card m-3" style={{width:"200px", height:"420px"}}>
                        <img  className="mt-3 ps-2 pe-2" style={{width:"200px"}} src={shoes} /><br/>
                        <div ><b>Title:</b>{value.title}</div>
                        <div ><b>Id:</b>{value.id}</div>
                        {/* <div ><b>Body:</b>{value.body}</div> */}
                        <div className="text-center">
                        <button className="btn btn-success text-center" style={{width:"50%"}} onClick={()=>navigate( `/view/${value.id}` )}>View</button>
                        </div>
                        </div>
                      </div>
                      </div>
                    ))  
                   }
                   </div>
                  
                 </>
    )

}
export default memo(GetApi);


// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Errorpage from "./Errorpage";
// import Login from "./Components/LoginFunction";
// import Home from "./Components/HomeFunction";
// import ListingCard from "./Components/ListingCard";
// import Header from "./Components/Layouts/Header";
// import Footer from "./Components/Layouts/Footer";
// import AuthenticatedRouter from "./Components/Common/AuthenticatedRouter";
// import GetApi from "./Components/GetApi";
// import ViewGetApi from "./Components/ViewGetApi";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <Router>
//             <Header />
//             <Routes>
//               <Route path="/" element={<Login />}></Route>
//               <Route path="/login" element={<Login />}></Route>
//               <Route
//                 path="/home"
//                 element={
//                   <AuthenticatedRouter>
//                     <Home />
//                   </AuthenticatedRouter>
//                 }
//               ></Route>
//               <Route
//                 path="/view/:id"
//                 element={
//                   <AuthenticatedRouter>
//                     <ViewGetApi />
//                   </AuthenticatedRouter>
//                 }
//               ></Route>
//                <Route
//                 path="/view"
//                 element={
//                   <AuthenticatedRouter>
//                     <GetApi />
//                   </AuthenticatedRouter>
//                 }
//               ></Route>
//               <Route
//                 path="/list"
//                 element={
//                   <AuthenticatedRouter>
//                     <ListingCard />
//                   </AuthenticatedRouter>
//                 }
//               ></Route>
//               <Route path="/*" element={<Errorpage />}></Route>
//             </Routes>
//             <Footer />
//           </Router>
//         </header>
//       </div>
//     </>
//   );
// }

// export default App;