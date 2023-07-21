import { Navigate } from "react-router-dom";
import Authentication from "../js/Authentication";

function AuthenticatedRouter(props){

    let isLoggedIn=Authentication.isLoggedInUser();

return(


  isLoggedIn ? props.children : <Navigate to='/' /> 

)
}
export default AuthenticatedRouter;