// import snapdealLogo from "../Components/image/Snapdeal_2016.svg";
 import img1 from "../Components/image/e com women.jpg";
 import img2 from "../Components/image/e com web.jpg";
 import img3 from "../Components/image/e-com img1.jpg";


import { useState } from "react";
import "./css/form.css";
import homPro1 from "../Components/image/e-com img1.jpg"
import homPro2 from "../Components/image/HeelSocks1-aeb5a.jpg"
import homPro3 from "../Components/image/e com web.jpg"
import homPro4 from "../Components/image/Veirdo-tshirt.jpg"

function Home() {
  const [welcometext, setWelcomeText] = useState("Welcome user");
  return (
    <>
      <div>
        {/* <div className="homeNav">
          <img className="snapLogo" src={snapdealLogo} alt="img" />
          <input
            type="search"
            placeholder="Search  products & brands"
            className="searchBox"
          />
          <label className="searchLetter">
            {" "}
            <i className="fa fa-search" aria-hidden="true"></i>Search
          </label>
          <label className="cart">
            Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </label>
          <label className="sign">
            Sign in <i className="fa fa-user-circle" aria-hidden="true"></i>
          </label>
        </div> */}

        <div className="overallContent">
          <div className="snapSidebar">
            <h4 className="snaphead">TOP CATEGORIES</h4>
            <div className="snapSidehead">
              <div>Men's Fashion</div>
              <div>Women's Fashion</div>
              <div>Home & Kitchen</div>
              <div>Toy, Kids Fashion</div>
              <div>Men's Fashion</div>
            </div>

            
            <ul className="moreList">
                <h5 className="snaphead"> MORE CATEGORIES</h5>
              <li>Automotives</li>
              <li>Mobile & Accessories</li>
              <li>Electronics</li>
              <li>Sports, Fitness & Outdoor</li>
              <li>Computers & Gaming</li>
              <li>Books, Media & Music</li>
              <li>Hobbies</li>
            </ul>
          </div>

          <div className="mainContent">
            <div className="snapSlide">
              <div className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img src={img1} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} alt="img" />
                  </div>
                  <div className="carousel-item">
                    <img src={img3} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="productContent">
              <h3 className="proHead">RECENTLY VIEWED PRODUCTS</h3>
              <div className="products">
                <div className="snapPro1" >
                  <img src={homPro1} alt="img" />
                  <p>Laptop</p>
                  <span className="star">*****</span>
                  <p>Rs.44,567</p>
                </div>
                <div className="snapPro2">
                  <img src={homPro2} alt="" />
                  <p>Heel Product</p>
                  <span className="star">**</span>
                  <p>Rs.567</p>
                </div>
                <div className="snapPro3">
                  <img src={homPro3} alt="" />
                  <p>Womens Dress</p>
                  <span className="star">****</span>
                  <p>Rs.6,567</p>
                </div>
                <div className="snapPro4">
                  <img src={homPro4} alt="" />
                  <p>T-shirt</p>
                  <span className="star">*****</span>
                  <p>RS.14,567</p>
                </div>
                
              </div>
            </div>
        </div>
   </div>
      <br />  
   <div className="snapArticle">
    <b>Men:</b><span>Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for Men / Trousers for Men / Jacket for Men / Formal Pants for Men / Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men / Blazer for Men / Sweater for Men</span>
    <br /><b>Wonen:</b><span> Tops for Women / Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for Women / Shirts for Women / Skirts for Women / Ethnic wear for Women / Western Dresses for Women / Leggings for Women</span>
    <br /><b>Footwear:</b><span>Men's Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear for Women / Heels for Women / Sandals for Women / Shoes for Women / Sandals for Women / Slippers for Women / Boots for Women / Jutti for Women / Sports Shoes for Women</span>
   </div>
      </div>
    </>
  );
}
export default Home;
