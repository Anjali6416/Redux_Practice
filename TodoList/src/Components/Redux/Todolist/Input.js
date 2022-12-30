import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,deleteTodo,removeTodo } from "./action";

const Input =()=>{
    const[inputdata,setInputdata] =useState({
        name:"",
        id:"",
        status:false,
    });
    const dispatch = useDispatch();
    return (
        <div>
            <h1 style={{color:"teal"}}>Todo App</h1>

            <input placeholder="Enter Todo here"  value={inputdata} onChange={(event)=>setInputdata(event.target.value)}/>
            <button onClick={()=>dispatchEvent(addTodo(inputdata))}>Add Todo</button>
        </div>
    )
}
export default Input;