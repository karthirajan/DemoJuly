import './css/Animate.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from './image/e com women.jpg'
import slide2 from './image/e-com img1.jpg'
import  slide3 from'./image/e com web.jpg'


function AnimationTest(){
    return(
       <>
       <div className='container'>
       <div className='conChild'>
         {/* <div className="text">1</div>
        <div className="tex"></div>
        <div className="text">2</div> <br />  */}
        <div style={{width:"200px"}}>
        <input type="datetime-local" className="form-control"  placeholder="enter" />
        <input type="month" className='form-control' placeholder='enter'/>
        <input type="year" className='form-control' placeholder='enter'/>
        <label >Points 0 to 1000</label>
        <input type="range" min="0"  max="1000 " />
         <label >Select your favorite color:</label>
        <input type="color"  />
        </div>
      </div> 
        </div> 

      {/* <Carousel >
               <div >
                 <img style={{width:"600px", height:"600px"}} src={slide1} />
                   
                </div>
                <div>
                    <img style={{width:"600px", height:"600px"}} src={slide2} />
                   
                </div>
                <div>
                    <img style={{width:"600px", height:"600px"}} src={slide3} />

                </div>
      </Carousel> */}
      <div className='outercards'>
        <div className='child'></div>
      </div>
      
        </>
    )
}
export default AnimationTest;