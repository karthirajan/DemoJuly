import React from "react";
import "./css/style.css";
import image from "./assets/loginformpic.jpg"


class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      email:"",
      isLoginSuccess: null,
    };
  }
  login = (event) => {
    event.preventDefault();
    //console.log(this.username.current.value);
    let uname = this.state.username;
    let pwd = this.state.password;
    let mail=this.state.email;

    if (uname == "Akila" && pwd == "12345") {
      console.log("Success");
      this.setState({
        isLoginSuccess: true,
      });
    } else {
      console.log("Failed");
      this.setState({
        isLoginSuccess: false,
      });
    }
    const container = () => {
        document.getElementById('container');
      }

    if(pwd.length<5){
         
        const classRed = () => {
            container.classList.add('line bg-danger');
         }; 

    }else if(pwd.length>5 && pwd.length<8){
        const classYellow = () => {
            container.classList.add('line bg-warning');
         }; 
    }else if(pwd.length>8 ){
        const classGreen = () => {
            container.classList.add('line bg-success');
         }; 
    }

  };

  inputOnchange = (event) => {
    this.setState({                         
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container mt-5  col-3" id="container" >
        
           <div className="card  d-flex flex-sm-row align-items-center justify-content-center mx-auto" > 
           <div>
          <img src={image}
          className="card-img d-none d-sm-block"  alt="img" />
          </div>           
               
             <form className="d-flex flex-column">
              <div > 
              <h3 className="title  mb-5 mt-4" style={{color:"white"}} > Welcome!</h3>               
                <div className="inputfield"><i class="fa fa-user"></i>
                <input className="uname   "
                  type="text"
                  placeholder="Your name"
                  value={this.state.username}
                  onChange={this.inputOnchange}
                  name="username"
                ></input>
                </div>
              </div>
              <div className="mt-3">                
                <div className="inputfield"><i class="fa fa-envelope" aria-hidden="true"></i>
                <input className="email "
                  type="email"
                  placeholder="Your e-mail"
                  value={this.state.email}
                  onChange={this.inputOnchange}
                  name="email"
                ></input>
                </div>
              </div>
              <div className="mt-3 " >                
                <div className="inputfield"><i class="fa fa-lock" aria-hidden="true"></i>
                <input  className=" pass "
                  type="password"
                  placeholder="Create password"
                  value={this.state.password}
                  onChange={this.inputOnchange}
                  name="password"
                  autoComplete="new-password"
                ></input>
                </div>
                <div className="d-flex flex-row mt-3"> 
                  <div className="pass-hint">Password Strength</div>
                  <div className="line classRed classYellow"></div>
                  <div className="line classYellow"></div>
                  <div className="line classGreen"></div>
                </div>
                
              </div>
              <div className="d-flex">
              <button className="btn-create mt-4" onClick={this.login}>
                Create Account
              </button>
              <button className="btn-login  mt-4" onClick={this.login}>
                Login
              </button>
              </div>
              
            </form>
            <LoginStatus
              isLoginSuccess={this.state.isLoginSuccess}
            ></LoginStatus>
          </div>
        </div>
      
    );
  }
}

function LoginStatus(props){
    if(props.isLoginSuccess!=null){
        return(
            props.isLoginSuccess==true ? <div class="alert alert-success mt-3" role="alert"> Login Success!! </div> : 
            <div  class="alert alert-danger mt-3" role="alert"> Login Failed !!</div>
        );
    }
   
}
export default LoginForm;

  