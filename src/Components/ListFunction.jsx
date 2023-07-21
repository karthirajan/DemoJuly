import { useState } from "react";
import "./css/ListStyle.css";

function ListFunctionComponent() {
  const [user, setUser] = useState({});
  

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

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  let [dUsers, setDUsers] = useState([]);

    let inputOnchange = (event) => {
      setUser((prevState) => {
        return { ...prevState, [event.target.name]: event.target.value };
      });
    };

  let createUser = (event) => {
    event.preventDefault();
    //console.log(username);
    let uname = user.username;
    let phn = user.phone;
    let mail = user.email;
    let desgntn = user.designation;
    let tempUsers = [...users];

    let obj = {
      id: tempUsers[tempUsers.length - 1].id + 1,
      name: uname,
      designation: desgntn,
      phone: phn,
      email: mail,
    };

    tempUsers.push(obj);
    console.log(obj);
    setUsers(tempUsers);
  };

  let UpdateUser = (event) => {
    event.preventDefault();
    let uname = user.username;
    let phn = user.phone;
    let mail = user.email;
    let desgntn = user.designation;
    let tUsers = [...users];

    let obj = {
      id: selectedId,
      name: uname,
      designation: desgntn,
      phone: phn,
      email: mail,
    };
    console.log(obj);
    tUsers[selectedIndex] = obj;

    setUsers( tUsers);
    setSelectedIndex(null);
    
    
  };
  let editUser = (index) => {
    var temp = users;
    setUser({
      username: temp[index].name,
      designation: temp[index].designation,
      phone: temp[index].phone,
      email: temp[index].email,
      
    });
    setSelectedIndex(index);
    setSelectedId(temp[index].id);
     
  };

  let deleteUser = (index) => {
    console.log(index);
    let tempUsers = [...users];
    let deleted = tempUsers.splice(index, 1);
    let tempdelUsers = [...dUsers];
    setDUsers(tempdelUsers.concat(deleted))
    setUsers(tempUsers);
  };

  return (
    <>
      <form className=" mb-4 d-flex flex-column justify-content-center align-items-center">
        <h2>Users List</h2>
        <input
          className="uname mt-3"
          type="text"
          placeholder="Enter Username"
          value={user.username}
          onChange={(e) => inputOnchange(e)}
          name="username"
        ></input>
        <input
          className="desgn mt-3"
          type="text"
          placeholder="Enter User Designation"
          value={user.designation}
          onChange={(e) => inputOnchange(e)}
          name="designation"
        ></input>
        <input
          className="num mt-3"
          type="number"
          placeholder="Enter User Phone No"
          value={user.phone}
          onChange={(e) => inputOnchange(e)}
          name="phone"
        ></input>
        <input
          className="email mt-3"
          type="email"
          placeholder="Enter User Email"
          value={user.email}
          onChange={(e) => inputOnchange(e)}
          name="email"
        ></input>
        {selectedIndex == null && (
          <button
            className="createUser btn btn-primary mt-3"
            onClick={createUser}
          >
            Create User
          </button>
        )}

        {selectedIndex != null && (
          <button
            className="updateUser btn btn-primary mt-3"
            onClick={UpdateUser}
          >
            Update User
          </button>
        )}
      </form>
      <div className="container">
        <h2 className="text-center">Users List</h2>
        <table className="table table-striped mt-3">
          <thead>
            <tr className="table table-dark">
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.designation}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>
                            <button
                                className="btn btn-primary me-3"
                                onClick={() => editUser(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteUser(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <h2 className="text-center">Deleted Users List</h2>
        <table className="table table-striped mt-3">
          <thead>
            <tr className="table table-dark">
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.designation}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListFunctionComponent;
