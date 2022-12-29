import { incCountAction,decCountAction } from "../Redux/action.js";
import myStore from "../Redux/Store.js";
myStore
function incCount(data){
incCountAction(data);
console.log(myStore.getState());
}

function decCount(data){
decCountAction(data);
decCountAction(data);
console.log(myStore.getState());
}
console.log(myStore.getState());

 incCount(7)
 incCount(1)
 decCount(2)