import { useEffect, useState } from "react";

function CounterHookComponent({ item }) {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Akila",
    email: "aki@gmail.com",
    phone: "987654567",
  });
  const [isPhone, setIsPhone] = useState(true);

  useEffect(() => {
    console.log("Use Effect Triggered");
        // if(count>0){
      let setTimer=  setTimeout(() => {

            setCount(()=>count +1);
        }, 1000);
    //}
    clearTimeout(setTimer);
  }, [item, count]);

  let onChangeUpdate = (key, value) => {
    setUser((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  // let updateUserPhone=()=>{
  //     setUser(prevState=>{
  //         return {...prevState, phone:"1234"};
  //     });
  // }
  let increment = () => {
    setCount(() => count + 1);
  };

  // let onChangeInput=(event)=>{
  //     setUser(prevState=>{
  //        return {...prevState, [event.target.name]: event.target.value}
  //     })
  // }

  return (
    <div>
      <h3>User</h3>
      {/* <input type="text" name="phone" value={user.phone} onChange={onChangeInput}/> */}
      <div>
        {item}'s mobile number is {user.phone} - email is {user.email}
      </div>
      {isPhone && (
        <button onClick={() => onChangeUpdate("phone", "12345")}>
          Change Phone
        </button>
      )}
      {!isPhone && (
        <button onClick={() => onChangeUpdate("email", "shree@gmail.com")}>
          Change email
        </button>
      )}

      <h3>Count</h3>
      <div>{count}</div>
      <button onClick={increment}>Change count</button>
    </div>
  );
}
export default CounterHookComponent;

// write in App
// let [name, setName]=useState("Ashwin")
// return (
//   <div className="App">
//     <header className="App-header">
//     <button onClick={()=>setName("Shree")}>Change Name</button>
//      <CounterHookComponent item={name}/>

//     </header>
//   </div>
// );
