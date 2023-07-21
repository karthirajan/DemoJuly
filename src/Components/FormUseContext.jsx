import { useContext } from "react";
import { userContext } from "../App";
import "./css/ListStyle.css";
import image from "./assets/loginformpic.jpg"


function FormUseContext() {
    const obj=useContext(userContext);

    return (
      <div>
        <div className="card  d-flex flex-sm-row align-items-center justify-content-center mx-auto" >
          <img src={image} className="card-img 	d-none d-sm-block" alt="imhg" />             
            <form className="d-flex flex-column">
            <h3 className=" mt-4 title">Login Form</h3>
              <div>
                <div  className="mt-4" style={{ color: "white" }}>Username</div>
                <input
                  className="  uname font-size:12px"
                  type="text"
                  placeholder="Enter your Username"
                  value={obj.user.username}
                  // onChange={(e) => setUsername(e.target.value)}
                  onChange={obj.onChangeUpdate}
                  name="username"
                ></input>
              </div>
              <div className="mt-4" style={{ color: "white" }}>
                <div>Password</div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={obj.user.password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={obj.onChangeUpdate}
                  name="password"
                  autoComplete="new-password"
                ></input>
              </div>
              <button className=" btn btn-primary mt-3"
              onClick={(e) => obj.Login(e)}>
                Login
              </button>
              <LoginStatus isLoginSuccess={obj.isLoginSuccess}></LoginStatus>
            </form>
           
          </div>
         
        </div>
     
    );
  

}
function LoginStatus(props) {
    // const obj=useContext(userContext);
  if (props.isLoginSuccess != null) {
    return props.isLoginSuccess == true ? (
      <div className="alert alert-success mt-3" role="alert">
        Login Success!!
      </div>
   ) : (
     <div className="alert alert-danger mt-3" role="alert">
       Login Failed!!
     </div>
    );
  }
}
export default FormUseContext;



// import { createContext, useState } from "react";
// import "./App.css";
// import FormUseContext from "./Components/FormUseContext";

// export const userContext = createContext();

// function App() {
//   let [user, setUser]=useState({})
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");
//   let [isLoginSuccess, setIsLoginSuccess] = useState(null);

  
//   let Login = (event) => {
//     event.preventDefault();
   
//     if (user.username == "Akila" && user.password == "12345") { 
//       // console.log(user.username);     
//       setIsLoginSuccess(true);
//       console.log("Success");
//     } 
//     else {      
//       setIsLoginSuccess(false);
     
//       console.log("Failed");
//     }
// }
// let onChangeUpdate=(event)=>{
//   setUser(prevState=>{
//     return {...prevState, [event.target.name]: event.target.value}
//   })
// }

 
//   return (
//     <userContext.Provider
//       value={{
//         user: user,
//         username : username, 
//         password : password, 
//         isLoginSuccess : isLoginSuccess, 
//         Login : Login,
//         onChangeUpdate : onChangeUpdate
//       }}
//     >
//       <div className="App">
//         <header className="App-header">
//           <FormUseContext />
//         </header>
//       </div>
//     </userContext.Provider>
//   );
// }

// export default App;


