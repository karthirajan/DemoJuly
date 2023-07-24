import React from "react";
import "./css/form.css"; 

class Uncontrolled extends React.Component {
  constructor() {
    super();
    this.fullname=React.createRef();
    this.email=React.createRef();
    this.password=React.createRef();

  }
  login = (event) => {
     event.preventDefault();
   let  name=this.fullname.current.value;
   let mail=this.email.current.value;
   let pwd=this.password.current.value;
  
   if(name=="selvi" && pwd==123456 && mail=="selvi25@gmail.com"){
    console.log("success");
   }else{
    console.log("failed");
   }

  }
  render() {
    return (
      <div className="outerCard">
        <div className="innerCard">
          <div className="form1"> </div>
          <form className="form2">
            <h3 className="head">Welcome!</h3>
            <div className="inp1">
               <i className="fa fa-user" aria-hidden="true"></i>
                <input  id="name" placeholder="Your name" ref={this.fullname} />
            </div>
            <div className="inp2">
              <i className="fa fa-envelope" aria-hidden="true"></i>
               <input  id="email" placeholder="Your e-mail" ref={this.email}/>
            </div>
            <div className="inp3">
            <i className="fa fa-unlock-alt" aria-hidden="true"></i>
               <input  id="pwd" placeholder="Create password" ref={this.password}/>
            </div>
            <div className="sten"> <p className="pass">Password Strength</p>
             <hr />   <hr />   <hr /></div>
            <div>
              <button className="btn2">Create account</button>
              <button className="btn3">sign in</button>
            </div>
          </form>
        </div>
    </div>
      
    );
  }
}
export default Uncontrolled;
