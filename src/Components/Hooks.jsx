import { useEffect, useState } from "react";

function Hooks({ item }) {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "selvi",
    title: "Deve",
    phNum: 9710409894,
    mail: "selvi25@gmail.com",
  });

  // let decrement = () => {
  //   if (count > 0) {
  //     setCount(() => count - 1);
  //   }
  // };

  const[isphone, setIsphone]=useState(false)
  let updateDet = (key, value) => {
    setUser((preNum) => {
      return { ...preNum, [key]: value };
    });
  };
  let mobnumChange = (event) => {
    setUser((prevNum) => {
      return { ...prevNum, [event.target.name]: event.target.value };
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* <h5 style={{color:"Red"}}>Counter</h5>
      <button onClick={() => setCount(() => count + 1)}>counter+</button>
      <div style={{ textAlign: "center" }}>{count}</div>
      <button onClick={() => decrement()}>counter-</button>
      <br /> <br /> */}
      <input
        type="text"
        className="mt-3"
        value={user.phNum}
        onChange={mobnumChange}
        name="phNum"
      />
      <div>
        {item}'s ph Num will change {user.phNum} and email change {user.mail}{" "}
      </div>
    { isphone && <button onClick={() => updateDet("phNum", "123445566")}>Change phnum </button>}
    { !isphone && <button onClick={() => updateDet("mail", "Raj06@gmail.com")}>Change mail</button>}
      <br /> <br />
    </div>
  );
}

export function Hookeff() {
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("use effect triggered");
  },[]);

  let increment = () => {
    setCount1(() => count1 + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={increment}>counter</button>
      <div>{count1}</div>
    </div>
  );
}

//export function Hookeffect() {
//   const [add, setAdd] = useState(60);
//   useEffect(() => {
//     if (add > 0) {
//       setTimeout(() => {
//         setAdd(() => add - 5);
//       }, 1000);
//     }
//   });
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h5 style={{color:"Red"}}>Addition</h5>
//       <div>{add}</div>
//     <br /> <br />
//     </div>
//   );
// }

export default Hooks;






   {/* <h5 style={{color:"Red"}}>Counter</h5>
      <button onClick={() => setCount(() => count + 1)}>counter+</button>
      <div style={{ textAlign: "center" }}>{count}</div>
      <button onClick={() => decrement()}>counter-</button>
      <br /> <br /> */}