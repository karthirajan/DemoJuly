import { useState } from "react";
import "./css/style.css";

function FuncControlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(null);

  let Login = (event) => {
    event.preventDefault();
    if (name == "selvi" && password == "123456") {
      setIsLoginSuccess(true);
      console.log("Login success");
    } else {
      setIsLoginSuccess(false);
      console.log("Login failed");
    }
  };
  return (
    <div>
      <div className="outercard">
        <div className="innerCard">
          <div className="form1">
            <p className="para1"> Company Logo</p>
            <h3>Welcome to...</h3>
            <p className="para2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
              eaque quia vitae harum, voluptatem ipsa voluptatum, autem
              doloribus quis aperiam consequatur nostrum pariatur!
            </p>
            <p className="para3">Get access to the top </p>
          </div>
          <form className="form2">
            <div className="icon">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <h4>Login</h4>
            <p className="logpara">
              Welcome Login to get amazing discounts and offers only for you
            </p>
            <div>
              <label className="lab">username</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>
            <div>
              <label className="lab">Password</label>
              <input
                type="password"
                id="pwd"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="checkk">
              <input type="checkbox" id="check" />
              <label>Remember me</label>
            </div>
            <div>
              <button className="btn1" onClick={(e) => Login(e)}>
                Login
              </button>
            </div>
            <div className="foot">
              <div className="par">
                New User?<span> Sign-Up</span>
              </div>
              <div className="pwd">Forget Password?</div>
            </div>
            <div className="line">
              {" "}
              <hr className="hr1" /> <span className="or"> Or </span>{" "}
              <hr className="hr2" />
            </div>
            <p className="goopara">
              <i class="fa fa-google" aria-hidden="true" id="goo"></i>Login with
              Google
            </p>
            <LoginStatus isLoginSuccess={isLoginSuccess} />
          </form>
        </div>
      </div>
    </div>
  );
}

export function LoginStatus(props) {
  if (props.isLoginSuccess !== null) {
    return props.isLoginSuccess == true ? <div className="succ">Login Success</div> : <div className="succ">Login failed</div>;
  }
}
export default FuncControlled;
