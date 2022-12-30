
//  let initialdata ={
//     name : "Dummy"
//  }
let initialdata=""
const nameReducer = ( state=initialdata,action) =>{
    if(action.type ==="NAME"){
        state =action.username;
    }
 return state;
}
export default nameReducer;