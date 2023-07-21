import React from "react";
import "./css/style.css";

class Uncontrolled extends React.Component {

    constructor(){
        super();

        this.username=React.createRef();
        this.password=React.createRef();
       this.loginSuccess=React.createRef();
    }
    login=(event)=>{
        event.preventDefault();
        // console.log(this.username.current.value);
        let uname=this.username.current.value;
        let pwd=this.password.current.value;
        let lognS=this.loginSuccess.current;
        if(uname=="Akila" && pwd=="12345"){
            console.log("Success");
            lognS.innerHTML="Login Success!!"
            
        }else{
            console.log("Failed");
            lognS.innerHTML="Login Failed!!"
        }

    }

    render(){
        return(
            <div>
                <label>Uncontrolled Form</label>
                <form className="mt-4">
                    <div>
                    <div>Username</div>
                    <input type="text" placeholder="Enter your Username" ref={this.username}></input>
                    </div>
                    <div className="mt-3">
                    <div>Password</div>
                    <input type="Password" placeholder="Enter your Password" ref={this.password}></input>
                    </div>
                    <button className="btn btn-primary mt-3" onClick={this.login}>Login</button>
                    <div className="mt-2" ref={this.loginSuccess}></div>
                </form>
            </div>
        )
    }
       
    
}
export default Uncontrolled;
