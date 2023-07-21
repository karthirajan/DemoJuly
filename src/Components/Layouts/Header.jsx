import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";
import Authentication from "../js/Authentication";

function Header(){
  const navigate=useNavigate();

  let isLoggedIn=Authentication.isLoggedInUser();

   const logout=()=>{
    Authentication.removeUser();
     navigate('/')
}
    return(
        <>
        <nav className="navbar varbar-dark navbar-expand-lg bg-primary  " style={{ height: "50px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CGT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    { isLoggedIn && 
    (<div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">View</Link>
        </li>
             
      </ul>
   
      <button className="btn btn-danger" onClick={logout} type="submit">
          Logout
      </button>
     
    </div>)
  }


  </div>
</nav>
        </>
    );
}
export default Header;