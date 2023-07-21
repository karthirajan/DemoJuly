import { useState } from "react";
import image from "../Components/assets/Flipkart-Group.png";
import tshirt from "../Components/assets/tshirt.png";
import "./css/Home.css";
import { useParams } from "react-router-dom";


function Home(){

     const[welcomeText, setWelcomeText]=useState("Welcome ");
     const {id}=useParams();

     return(
        <>
        <h2>{welcomeText} {id}</h2>
        {/* <div className="main-header" style={{height:"100px"}}>
                <div>
                    <img src={image} alt="logo" style={{height:"100px"}}/>
                </div>
                <div className="search-outer">
                    <input type="search" placeholder="search" />
                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div> */}

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li class="dropdown">Products
                        <ul>
                            <li><a href="#">Electronics</a> </li>
                            <li><a href="#">Fashions</a></li>
                            <li><a href="#">Home Appliances </a></li>
                        </ul>
                    </li>
                    <li><a href="#">Careers</a></li>

                    <li> <a href="#">Contact us</a> </li>
                    <li><a href="#">About us</a></li>
                </ul>
            </nav>
    
  
    
        <section>
            <div style={{backgroundColor:"aqua"}}>

                <div className="home-banner"></div>
            </div>
        </section>
        <section className="offers">
            <aside className="product-offers">
                <div className="product">
                    <img src={tshirt} alt="shoe" style={{width:"150px"}}/>

                </div>
                <div>
                    <ul>Men shoes
                        <li>50% offers</li>
                    </ul>
                </div>
            </aside>


            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam quos corporis, omnis
                voluptates in hic numquam exercitationem dolores eum est rem perferendis vel accusamus magni ipsa? Eos,
                a error.
            </div>
            <aside>
                <ul>
                    <b>Top Offers</b>
                    <li><a href="#">Electronics upto 80% off</a></li>
                    <li><a href="#">Mobiles upto 60% of</a></li>
                    <li><a href="#">Fashions upto 50% off</a></li>
                </ul>
            </aside>
        </section>
        <article>
            <div>
                <h4> FLIPKART:</h4>
                <div className="notes">The One-stop Shopping Destination E-commerce is revolutionizing the way we all shop in India. Why
                    do you want to hop from one store to another in search of the latest phone when you can find it on
                    the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly
                    imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to
                    in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like
                    sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing
                    machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from
                    home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we
                    got them all covered. You name it, and you can stay assured about finding them all here. For those
                    of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the
                    wee hours of the morning. This e-commerce never shuts down..</div>
            </div>
            <div>
                <h4> No Cost EMI</h4>

                <div className="notes">
                    In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop
                    with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops,
                    large and small appliances, furniture, electronics and watches, you can now shop without burning a
                    hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a
                    no cost EMI. Take a look ASAP! Terms and conditions apply..</div>

            </div>
            <div>
                <h4>Mobile Exchange Offers</h4>

                <div className="notes">
                    Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a
                    new one after the Flipkart experts calculate the value of your old phone, provided it is in a
                    working condition without damage to the screen. If a phone is applicable for an exchange offer, you
                    will see the 'Buy with Exchange' option on the product description of the phone. So, be smart,
                    always opt for an exchange wherever possible. Terms and conditions apply.</div>
            </div>
        </article>
   
    <footer>
        <div className="footer-content">
            <ul>
                About
                <li><a href="./amazon.html">About us</a></li>
                <li> <a href="./amazon.html">Contact us</a></li>
                <li> <a href="./amazon.html">Careers</a></li>
            </ul>
            <ul>
                Help
                <li><a href="./amazon.html">About us</a></li>
                <li> <a href="./amazon.html">Contact us</a></li>
                <li> <a href="./amazon.html">Careers</a></li>
            </ul>
            <ul>
                Social
                <li><a href="./amazon.html">About us</a></li>
                <li><a href="./amazon.html">Contact us</a></li>
                <li> <a href="./amazon.html">Careers</a></li>
            </ul>
            <ul>
                Registered Office Address
                <li>Flipkart Internet Private Ltd,</li>
                <li>Buildings Alyssa,Begonia &</li>
                <li>karnataka, India</li>
            </ul>
        </div>

        {/* <div className="copyright">Copyright &copy;</div> */}
    </footer>
        </>
     );
}
export default Home;