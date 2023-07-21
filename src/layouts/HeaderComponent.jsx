import { Link, useNavigate } from "react-router-dom";
import Authentication from "../Components/js/Authentication";

function HeaderComponent() {
  const navigate = useNavigate();

  let isLoggedIn = Authentication.isLoggedInUser();

  let logout = () => {
    Authentication.removeUser();
    navigate("/");
  };
  return (
    <div className="headerNav">
      <h5 className="headNavHeader">Valero</h5>
      {isLoggedIn && (
        <div>
          <div className="headerHome">
            <Link to="/home">Home</Link>
          </div>
          <div className="headerList">
            <Link to="/cardList">List</Link>{" "}
          </div>
          <button className="headerLogout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default HeaderComponent;
