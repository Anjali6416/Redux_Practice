
let initialdata= {
    list:[]
}
const TodoReducer =(state=initialdata,action)=>{
  switch (action.type){
    case "ADD_TODO" :
        const{id ,data} = action.payload;
        return{
            ...state,data:[...state.list,{
                id:id,
                data:data
            }]
        }
  }
}

export default TodoReducer;