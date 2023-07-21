import { Navigate } from "react-router-dom";
import Authentication from "../js/Authentication"

function AuthenticationRouter(props){
    let isLoggedin=Authentication.isLoggedInUser();
   return(
    isLoggedin? props.children: <Navigate to='./' />
   )
   
    
   
}
export default AuthenticationRouter;

