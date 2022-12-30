import reduxStore from "./Store.js"
export const nameAction = (name)=>{
 reduxStore.dispatch({
    type :"NAME",
     username:name
 })
}