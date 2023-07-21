import React from "react";
import "./css/style.css";


class Controlled extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isLoginSuccess: null,
    };
  }
  login = (event) => {
    event.preventDefault();
    //console.log(this.username.current.value);
    let uname = this.state.username;
    let pwd = this.state.password;

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
  };

  inputOnchange = (event) => {
    this.setState({                         
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div >
        <div className="card d-flex flex-sm-row" style={{width: "35rem"}}>
          <img src=""
          className="card-img 	d-none d-sm-block"  alt="..." />
          <div className="card-body">
            <h3 className="card-title">Controlled Form</h3>
            <p className="card-text" />
                 <form className=" mt-4 d-flex flex-column">
              <div>
                <div  style={{color:"white"}}>Username</div>
                <input className="uname font-size:12px"
                  type="text"
                  placeholder="Enter your Username"
                  value={this.state.username}
                  onChange={this.inputOnchange}
                  name="username"
                ></input>
              </div>
              <div className="mt-3" style={{color:"white"}}>
                <div>Password</div>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={this.inputOnchange}
                  name="password"
                  autoComplete="new-password"
                ></input>
                <div className="d-flex flex-row mt-3"> 
                  <div className="pass-hint">Password Strength</div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <button className="btn btn-primary mt-3" onClick={this.login}>
                Login
              </button>
              
            </form>
            <LoginStatus
              isLoginSuccess={this.state.isLoginSuccess}
            ></LoginStatus>
          </div>
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
export default Controlled;

  