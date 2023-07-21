import { memo } from "react";


function Post({ todos, addTodo } ){

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