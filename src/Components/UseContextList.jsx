import { useContext } from "react";
import { UserContext } from "../App";
import "./css/list.css";

function UseContextList (){
    const obj=useContext(UserContext)
return(
    <>
    <div className="container">
        <h3 style={{ color: "red" }} className="text-center">
          Users List
        </h3>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th>Name</th>
              <th>Designation</th>
              <th>PhoneNum</th>
              <th>Email</th>
              <th>Update</th>
            </tr>
          </thead>

     <tbody>
         {obj.users.map((data, index) => (
           <tr key={index}>
                <td>{data.name}</td>
                <td>{data.designation}</td>
                <td>{data.phoneNum}</td>
                <td>{data.email}</td>
                <td> <button className="btn btn-primary" onClick={() =>obj.editData(index)}>edit </button> </td>
                <td> <button className="btn btn-danger" onClick={() => obj.deletebtn(index)}> Delete  </button>  </td>
           </tr>
                 ))}
     </tbody>
     </table>
    </div>
    <div className="container">
        <h3 style={{ color: "red" }} className="text-center">
          Deleted List
        </h3>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th>Name</th>
              <th>Designation</th>
              <th>PhoneNum</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {obj.dusers.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.designation}</td>
                <td>{data.phoneNum}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </>
)
}
export default UseContextList;