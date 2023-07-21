import { Carousel } from "react-responsive-carousel";
import "./css/Animate.css";
import image from "./assets/shoes.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function AnimationTest(){


    return(
        <>
        <div classNameName="container">
        {/* <div classNameName="box" style={{height:"100px", width:"100px", backgroundColor:"blue"}}></div><br/>
        <div classNameName="box1" style={{height:"50px", width:"50px", backgroundColor:"blue"}}></div><br/>
        <div classNameName="box" style={{height:"100px", width:"100px", backgroundColor:"blue"}}></div>
        <input type="date"/><br/>
        <input type="week"/><br/>
        <input type="month"/><br/>
        <input type="time"/><br/>
        <input type="datetime-local"/><br/>
        <label >Points (between 0 and 10):</label>
        <input type="range"  min="0" max="10"/><br/><br/> */}
       <Carousel >
                <div>
                <img src={image}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={image}  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image}  />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image}  />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={image}  />
                    <p className="legend">Legend 5</p>
                </div>
               
            </Carousel>
</div>
        {/* </div> */}
        </>
    )
}
export default AnimationTest;