import { useEffect, useState } from "react";
import "./css/style.css";

function CounterComponent() {
const [count, setCount]=useState(0);
 

   let decrement = () => {
    if(count>0){
    setCount(() => count - 1);
    }
  }

  return (
    <div>
      <h3>Counter</h3>
      <div className="d-flex flex-row ">
        <button className="ms-3" onClick={() => setCount(() => count + 1)}>
          +1
        </button>
        <div className="ms-3">{count}</div>

        <button className="ms-3" onClick={() => decrement() }>
          -1
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
