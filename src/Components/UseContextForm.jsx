import { useContext } from "react"
import { UserContext } from "../App"
import "./css/list.css";
   
 function UseContextForm(){
    const obj=useContext(UserContext)
          return(
                 <>
                    <div className="outercard">
                    <div className="innercard">
                <div className="formOne">  </div> 
                    <form className="formTwo">
                    <h3 className="heading">Welcome!</h3>
                    <div className="fields">
                    <input
                        type="text"
                        placeholder="Enter Your name"
                        className="formfield"
                        value={obj.name.Name}
                        onChange={obj.formChange}
                        name="Name"
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Desination"
                        className="formfield"
                        value={obj.name.Designation}
                        onChange={obj.formChange}
                        name="Designation"
                    />
                    <input
                        type="text"
                        placeholder="Enter Your phoneNum"
                        className="formfield"
                        value={obj.name.PhoneNum}
                        onChange={obj.formChange}
                        name="PhoneNum"
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="formfield"
                        value={obj.name.Email}
                        onChange={obj.formChange}
                        name="Email"
                    />
                    </div>
                    {obj.selectedIndex == null && (
                        <button className="btn1" 
                    onClick={obj.createUser}
                        >
                        Create
                        </button>
                    )}
                    {obj.selectedIndex !== null && (
                        <button className="btn1" 
                        onClick={obj.updateUser}
                        >
                        Update
                        </button>
                    )}
                    </form>
                </div>
                </div>
                </>
                    )
                }

                export default UseContextForm;