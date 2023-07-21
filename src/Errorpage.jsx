import { useState } from "react";
import image from "../src/Components/assets/error.png"

function Errorpage(){
    
    const [errorText, setErrorText]=useState("Error 404, Page Not Found");

    return(
        <>
        <img src={image}/>
        </>
    );
}
export default Errorpage;