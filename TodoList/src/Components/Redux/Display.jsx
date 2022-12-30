import { useSelector } from "react-redux"

function Display (props){
    const data =useSelector((storedata)=>{
      return storedata
    })
    return(
        <div style={{padding:"5px 40px" ,color:"crimson"}}>
            <h1>Display Component</h1>
            <h3>{data}</h3>
        </div>
    )
}
export default Display;