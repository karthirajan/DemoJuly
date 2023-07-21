import { useState } from "react";
import "./css/ListStyle.css";
import image from "./assets/loginformpic.jpg"
import { useNavigate } from "react-router-dom";
import Authentication from "./js/Authentication";


function Login() {
  let [user, setUser]=useState({})
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isLoginSuccess, setIsLoginSuccess] = useState(null);
  const navigate=useNavigate();
 

  let Login = (event) => {
    event.preventDefault();
    console.log(user.username);
    if (user.username == "Akila" && user.password == "12345") {      
      //setIsLoginSuccess(true);
      console.log("Success");
      Authentication.setLoggedInUser(user.username);
      navigate(`/home/${username}`);
    } 
    else {      
      setIsLoginSuccess(false);
      console.log("Failed");
    }
}
let onChangeUpdate=(event)=>{
  setUser(prevState=>{
    return {...prevState, [event.target.name]: event.target.value}
  })


}

    return (
      // <div className="outer mb-5">
        <div className="card  mt-5   d-flex flex-sm-row align-items-center justify-content-center mx-auto" >
          <img src={image} className="card-img 	d-none d-sm-block" alt="img" />             
            <form className="d-flex flex-column">
            <h3 className="title mt-3">Login Form</h3>
              <div>
                <div style={{ color: "white" }}>Username</div>
                <input
                  className="uname "
                  type="text"
                  placeholder="Enter your Username"
                  value={user.username}                  
                  onChange={onChangeUpdate}
                  name="username"
                ></input>
              </div>
              <div className="mt-3" style={{ color: "white" }}>
                <div>Password</div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={user.password}                 
                  onChange={onChangeUpdate}
                  name="password"
                  autoComplete="new-password"
                ></input>      
              </div>
              <button className="btn btn-primary mt-3" onClick={(e) => Login(e)}>
                Login
              </button>
              <LoginStatus isLoginSuccess={isLoginSuccess}></LoginStatus>
            </form>           
          </div>
         
        // </div>
     
    );
  
}
function LoginStatus(props) {
   
  if (props.isLoginSuccess != null) {
    return props.isLoginSuccess == true ? (
      <div className="alert alert-success mt-3" role="alert">
        {/* Login Success!! */}
      </div>
   ) : (
     <div className="alert alert-danger mt-3" role="alert">
       Login Failed!!
     </div>
    );
  }
}
export default Login;
