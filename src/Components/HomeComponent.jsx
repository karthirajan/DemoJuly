import { useContext } from "react";
import { userContext } from "../App";

function HomeComponent(){
    return(
    <>
        <AboutComponent />
        </>
    )

}
function AboutComponent( ){
    return(
        <>
        <AboutComponent2 />
        </>
    )
}
function AboutComponent2( ){
    const obj=useContext(userContext);
    return(
        <>
        <h2>{obj.user}</h2>
        {
            obj.status ? <h5>IN</h5> : <h5>OUT</h5>
        }
        
        <button onClick={obj.changeStatus}>Change Status</button>
        </>
    )
}
export default HomeComponent;


// import { createContext, useState } from "react";
// import "./App.css";

// import HomeComponent from "./Components/HomeComponent";


// export const userContext =createContext();

// function App() {

//  const [user, setUser]=useState("Varsha");
//  const [status, setStatus]=useState(false);

//  const changeStatus=()=>{
//   setStatus(!status);
//  }

// return (
//   <userContext.Provider value={{ user: user, status : status, changeStatus: changeStatus}}>
//    <div className="App">
//     <header className="App-header">
//     <HomeComponent />

//     </header>
//   </div>
//   </userContext.Provider>
 
// );
// }

// export default App;