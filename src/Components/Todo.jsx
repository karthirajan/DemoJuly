import { memo } from "react";


function Todo({ todos, addTodo } ){

    console.log("Todo rendered")
       return(
                 <>
                   <h2>My Todos</h2>
                   {
                    todos.map (( value, index)=>(
                        <div key={index}>{value}</div>
                    ))
                   }
                   <button onClick={addTodo}>Add Todo</button>
                 </>
    )

}
export default memo(Todo);













// import { useState } from "react";
// import "./App.css";
// import Todo from "./Components/Todo";


// function App() {
//   const [todos, setTodos]=useState(["Todo1", "Todo2"]);
//   const [count, setCount]=useState(0);

//   let increment = ()=>{
//   setCount(count+1);
//   }

//   let addTodo =()=>{
//     setTodos([...todos, "Todo3"])
//   }

//  return (
//    <>
//      <div className="App">
//        <header className="App-header">
//          {/* <Todo todos={todos} /><br></br>
//          <button onClick={addTodo}>Add Todo</button>
//          <h2>Counter</h2>
//          <h3>{count}</h3>
//          <button onClick={increment}>Count+1</button> */}
       
//        </header>
//      </div>
//      </>
//  );
// }

// export default App;



// import { useCallback, useState } from "react";
// import "./App.css";
// import Todo from "./Components/Todo";

// function App() {
//   const [todos, setTodos]=useState(["Todo1", "Todo2"]);
//   const [count, setCount]=useState(0);

//   let increment = ()=>{
//   setCount(count+1);
//   }

//   let addTodo =useCallback(() =>{
//     setTodos([...todos, "New Todo"])
//   }, [todos]);

//  return (
//    <>
//      <div className="App">
//        <header className="App-header">
//          <Todo todos={todos} addTodo={addTodo}/><br></br>
         
//          <h2>Counter</h2>
//          <h3>{count}</h3>
//          <button onClick={increment}>Count+1</button> 
       
//        </header>
//      </div>
//      </>
//  );
// }




