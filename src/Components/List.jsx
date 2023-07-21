import { Fragment, useState } from "react";
import "./css/list.css";

function List() {
  const [user, setUser] = useState({
    username:"",
    designation:"",
    phoneNum:"",
    email:""
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "selvi",
      designation: "dev",
      phoneNum: 9710409894,
      email: "selvi25@gmail.com",
    },
    {
      id: 2,
      name: "sundar",
      designation: "Engg",
      phoneNum: 87996868585,
      email: "sundar25@gmail.com",
    },
    {
      id: 3,
      name: "raj",
      designation: "Doc",
      phoneNum: 6574748884,
      email: "raj25@gmail.com",
    },
    {
      id: 4,
      name: "deephi",
      designation: "IAS",
      phoneNum: 97106757747,
      email: "deephi25@gmail.com",
    },
  ]);
  const [dusers, setDusers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  let createUser = (event) => {
    event.preventDefault();

    let temp = [...users];
    let obj = {
      id: temp[temp.length - 1].id + 1,
      name: user.username,
      designation: user.designation,
      phoneNum: user.phoneNum,
      email: user.email,
    };
    temp.push(obj);
    console.log(obj);
    setUsers(temp);
  };

  let updateUser = (event) => {
    event.preventDefault();
    let update = [...users];
    let obj = {
      id: selectedId,
      name: user.username,
      designation: user.designation,
      phoneNum: user.phoneNum,
      email: user.email,
    };
    console.log(obj);
    update[selectedIndex] = obj;
    setUsers(update);
    setSelectedIndex(null);
  };

  let formChange = (event) => {
    console.log(event.target.value);
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  let editData = (index) => {
    var edit = [...users];
    console.log(edit);

    setUser({
      username:edit[index].name,
      designation:edit[index].designation,
      phoneNum:edit[index].phoneNum,
      email:edit[index].email,
    });
    setSelectedIndex(index);
    setSelectedId(edit[index].id);
  };

  let deletebtn = (index) => {
    console.log(index);
    let temusers = [...users];
    let delet = temusers.splice(index, 1);
    let remoAdd = [...dusers];
    setDusers(remoAdd.concat(delet));
    setUsers(temusers);
  };

  return (
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
            value={user.username}
            onChange={formChange}
            name="username"
          />
          <input
            type="text"
            placeholder="Enter Your Desination"
            className="formfield"
            value={user.designation}
            onChange={formChange}
            name="designation"
          />
          <input
            type="text"
            placeholder="Enter Your phoneNum"
            className="formfield"
            value={user.phoneNum}
            onChange={formChange}
            name="phoneNum"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="formfield"
            value={user.email}
            onChange={formChange}
            name="email"
          />
        </div>
          {selectedIndex == null && (
            <button className="btn1" onClick={createUser}>
              Create
            </button>
          )}
          {selectedIndex !== null && (
            <button className="btn1" onClick={updateUser}>
              Update
            </button>
          )}
        </form>
       </div>
       </div>
     
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
            {
              users.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.designation}</td>
                <td>{data.phoneNum}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editData(index)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletebtn(index)}
                  >
                    Delete
                  </button>
                </td>
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
            {dusers.map((data, index) => (
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
  );
}

export default List;
