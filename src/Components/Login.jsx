import { useState } from "react";
import "./css/form.css";
import { useNavigate } from "react-router-dom";
import Authentication from "./js/Authentication";


function Login(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLoginSuccess, setIsLoginSuccess] = useState(null);
    const navigate=useNavigate();

  let loginbtn=()=>{
    if(name==='selvi' &&  password==='123456'){
      Authentication.setLoggedinUser(name)
        navigate(`/home`)
    }else{
        setIsLoginSuccess(false);
        console.log("Login Failed");
    }
  }
    return(
        <>
      <div className="outerCard">
        <div className="innerCard">
          <div className="form1"> </div>
          <form className="form2">
            <h3 className="head">Welcome!</h3>
            <div className="inp1">
               <i className="fa fa-user" aria-hidden="true"></i>
                <input  id="name" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="inp2">
              <i className="fa fa-envelope" aria-hidden="true"></i>
               <input  id="email" placeholder="Your e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="inp3">
            <i className="fa fa-unlock-alt" aria-hidden="true"></i>
               <input  id="pwd" placeholder="Create password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="sten"> <p className="pass">Password Strength</p>
             <hr />   <hr />   <hr /></div>
            <div>
              <button className="btn2">Create account</button>
              <button className="btn3" onClick={loginbtn}>Log in</button>
            </div>
          </form>
        </div>
    </div>
    <LoginStatus isLoginSuccess={isLoginSuccess} />
        </>
    )
}
export function LoginStatus(props) {
    if (props.isLoginSuccess !== null) {
      return props.isLoginSuccess == true ? <div className="status">Login Success</div> : <div className="status">Login failed</div>;
    }
  }
  
export default Login;