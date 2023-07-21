import React from "react";
import "./css/ListStyle.css";

class ListComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            username: "",
            designation: "",
            phone:"",
            email:"",
           
        
          };

        this.state={
            users:[
                {
                    id:1,
                    name:"Akila",
                    designation:"Developer",
                    phone:"098765434",
                    email:"ak@gmail.com"
                },
                {
                    id:2,
                    name:"Priya",
                    designation:"Tester",
                    phone:"0987645434",
                   email:"pri@gmail.com"
                },
                {
                    id:3,
                    name:"Varsha",
                    designation:"Developer",
                    phone:"092345434",
                    email:"var@gmail.com"
                }
            ],
            dUsers:[],
            selectedIndex: null,
            selectedId:null
           
        };
    }
    inputOnchange = (event) => {
        this.setState({                         
          [event.target.name]: event.target.value,
        });
      };
      
      createUser = (event) => {
        event.preventDefault();
        //console.log(this.username.current.value);
        let uname = this.state.username;
        let phn = this.state.phone;
        let mail=this.state.email;
        let desgntn=this.state.designation;
        let tempUsers = [...this.state.users];

        let obj = {
            id: tempUsers[tempUsers.length - 1].id + 1,
            name:uname,
            designation:desgntn,
            phone:phn,
            email:mail
        }

        tempUsers.push(obj);
        console.log(obj)
        this.setState({
            users:tempUsers
            
        })
    }
    
    UpdateUser=(event)=>{
        event.preventDefault();       
        let uname = this.state.username;
        let phn = this.state.phone;
        let mail=this.state.email;
        let desgntn=this.state.designation;
        let tUsers = [...this.state.users];

        let obj = {
            id: this.state.selectedId,
            name:uname,
            designation:desgntn,
            phone:phn,
            email:mail
        };
        console.log(obj)
        tUsers[this.state.selectedIndex]=obj;
        
        this.setState({
            users:tUsers,
            selectedIndex: null
        })
        
    }
    editUser=(index)=>{
        var temp=this.state.users
      this.setState({
        username :temp[index].name,
        designation:temp[index].designation,
        phone:temp[index].phone,
        email:temp[index].email,
        selectedIndex: index,
        selectedId:temp[index].id,
      })
      
        
    }

    deleteUser=(index)=>{
        console.log(index);
        let tempUsers=[...this.state.users];
        let deleted=tempUsers.splice(index, 1);
        let tempdelUsers=[...this.state.dUsers];
        this.setState({
            dUsers:tempdelUsers.concat(deleted)
        })
        this.setState({
            users:tempUsers
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <form className=" mb-4 d-flex flex-column justify-content-center align-items-center">
                  <h2>Users List</h2>
                  <input className="uname mt-3" 
                  type="text"
                  placeholder="Enter Username"
                  value={this.state.username}
                  onChange={this.inputOnchange}
                  name="username"
                ></input>
                 <input className="desgn mt-3" 
                  type="text"
                  placeholder="Enter User Designation"
                  value={this.state.designation}
                  onChange={this.inputOnchange}
                  name="designation"
                ></input>
                <input className="num mt-3" 
                  type="number"
                  placeholder="Enter User Phone No"
                  value={this.state.phone}
                  onChange={this.inputOnchange}
                  name="phone"
                ></input>
                <input className="email mt-3" 
                  type="email"
                  placeholder="Enter User Email"
                  value={this.state.email}
                  onChange={this.inputOnchange}
                  name="email"
                ></input>
                {
                    this.state.selectedIndex == null  && <button className="createUser btn btn-primary mt-3" onClick={this.createUser}>
                    Create User
                  </button>
                }
            
              {
                    this.state.selectedIndex != null &&  <button className="updateUser btn btn-primary mt-3" onClick={this.UpdateUser}>
                    Update User
                  </button>
                } 
              
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
                            {
                                this.state.users.map((user, index)=>(
                                    <tr key={index}>
                                    <td value={this.state.name} >{user.name}</td>
                                    <td value={this.state.designation}>{user.designation}</td>
                                    <td value={this.state.phone}>{user.phone}</td>
                                    <td value={this.state.email}>{user.email}</td>
                                    <td>
                                        <button className="btn btn-primary me-3"  onClick={()=>this.editUser(index)}>Edit</button>
                                        <button className="btn btn-danger" onClick={()=>this.deleteUser(index)}>Delete</button>
                                    </td>
                                </tr>
                                ))
                            }
                           
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
                            {
                                this.state.dUsers.map((user, index)=>(
                                    <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    
                                </tr>
                                ))
                            }
                           
                        </tbody>

                    </table>
                </div>
            </React.Fragment>
        )
    }

}
export default ListComponent;