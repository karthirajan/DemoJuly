import { memo, useEffect, useRef, useState } from "react"

function UserefComponent(){
    const inputField=useRef();
    const [input, setInput]=useState("");
    const count=useRef(0)

    let focusInputBox =() =>{
            inputField.current.focus();
            
    }
    useEffect(()=>{
    //    setTimeout(()=>{
    //     inputField.current.focus();
    //    },2000)
    count.current=count.current + 1
    })
    return(
        <>
        <input type="text" ref={inputField} value={input} onChange={(e)=>setInput(e.target.value)} placeholder="enter your name"/>
        <div>{count.current}</div>
        <button onClick={focusInputBox}>click</button>
        </>
    )

}
export default memo(UserefComponent);