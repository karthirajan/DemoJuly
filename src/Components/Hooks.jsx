import { memo, useEffect, useRef, useState } from "react";


function Hooks(){

    const inputRef=useRef();
    const count=useRef(0);
    const [inputValue, setInputValue]=useState("");

    useEffect(()=>{
        
        count.current=count.current+1;
        // setTimeout(() => {
        //     inputRef.current.focus();
        // }, 2000);
    })

    let focusInputBox=()=>{
        inputRef.current.focus();
    }

    return(
        <>
        <input type="text" ref={inputRef} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Enter your text" /><br></br>
        <div>{count.current}</div>
        <button onClick={focusInputBox}>Click here to focus the input field</button>
        </>
    )

}

export default memo(Hooks);