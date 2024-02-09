import { DELETEUSERDATA, EDITUSERDATA, GETDATA } from "../type/type"

export const ReduxCrudReducer = (state=[],action) =>{
switch (action.type) {
        case GETDATA:{
       state.push(action.data)
            return state
}

case DELETEUSERDATA:{
  let index=state.findIndex((x)=>x.id == action.id);
  state.splice(index,1)
  return [...state]
}

case EDITUSERDATA:{
  let index=state.findIndex((x)=>x.id == action.data.id);
  state.splice(index,1,action.data);
  return state;
}
default : {
  return state
    }  
  }
}