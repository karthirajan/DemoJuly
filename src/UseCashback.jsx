import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";


function App() {
  const [todos, setTodos]=useState(["Todo1", "Todo2"]);
  const [count, setCount]=useState(0);

  const expensiveFunction=(numb)=>{
    for(let i=0;i<100000000;i++){
      numb +=1
    }
    return numb;
  }
  const calculation=useMemo(() =>expensiveFunction(count), [count]);

  let increment = ()=>{
  setCount(count+1);
  }

  let addTodo =useCallback(() =>{
    setTodos([...todos, "New Todo"])
  }, [todos]);

  
 return (
   <>
     <div className="App">
       <header className="App-header">
       <h2>My Todos</h2>
                   {
                    todos.map (( value, index)=>(
                        <div key={index}>{value}</div>
                    ))
                   }
                   <button onClick={addTodo}>Add Todo</button><br></br>
         
         <h2>Counter</h2>
         
         <button onClick={increment}>Count+1</button> 
       
       <div>{calculation}</div>
       </header>
     </div>
     </>
 );
}

export default App;
