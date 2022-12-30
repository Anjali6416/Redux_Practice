import { nameAction } from "./action.js";
import { useState } from "react";
function Redux(){
    const[state,setState] = useState("")
    const sendDataToAction = ()=>{
     nameAction(state)
    }
    return(
        <div style={{padding:"150px",color:"teal"}}>
            <h1>Redux Page</h1>
        <input type="text" placeholder="Enter name here" onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={sendDataToAction}>Submit</button>
        </div>
    )
}
export default Redux;