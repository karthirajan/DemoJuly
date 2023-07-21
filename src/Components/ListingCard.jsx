import { useState } from "react";
import "./css/style.css";


function ListingCard() {
  
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Akila",
      designation: "Developer",
      phone: "098765434",
      email: "ak@gmail.com",
    },
    {
      id: 2,
      name: "Priya",
      designation: "Tester",
      phone: "0987645434",
      email: "pri@gmail.com",
    },
    {
      id: 3,
      name: "Varsha",
      designation: "Developer",
      phone: "092345434",
      email: "var@gmail.com",
    },
  ]);

  return (
    <>  
     
      
       
            <h2 className="text-center">POSTS</h2>
            <div className="cards-Container">
              {users.map((item, index) => {
                return (
                  <div
                    className="card d-flex flex-row mb-4 col-md-12"
                    style={{ width: "100%" }}
                  >
                    <div className="d-flex align-items-flex-start ">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        style={{ height: "50px" }}
                        class="m-3 rounded-circle"
                        width="50"
                        alt="User"
                      />
                      <div className="m-3">
                        <h5 className="mb-2" style={{ color: "red" }}>
                          {"User Details"}
                        </h5>
                        <h4 className="card-text">{item.name}</h4>
                        <h4 className="card-text">{item.designation}</h4>
                        <h4 className="card-text">{item.phone}</h4>
                        <h4 className="card-text">{item.email}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        
      
    </>
  );
}

export default ListingCard;
