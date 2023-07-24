import { useState } from "react";
import logo from '../Components/image/Valero Energy.png';
import man from '../Components/image/robot img.png'

function ErrorPage(){
    const [error, setError]=useState("404")
    return(
        <>
      <div className="errorOuterCard">
        <div className="errorCard">
        <div className="errorHead">
            <div className="errorName"> <img src={logo} className="errorLogo"  /></div>
            <div className="errorNav">
                <ul>
                    <li>Volunteers</li>
                    <li>Call to Action</li>
                    <li>About Us</li>
                    <li className="active">Join</li>
                </ul>
            </div>
        </div>
      <div className="erorPage">
            <div className="errorContent">
                <h1 className="errorCode">404</h1>
                <h5>Something went</h5>
                <h4>Wrong!</h4>
                <button className="errorbtn">Back to HomePage</button>
            </div>
            <img src={man} className="errorImage" />
      </div>
        </div> 
      </div>

        </>
    )
}
export default  ErrorPage;