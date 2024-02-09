import { GETAPI } from "../type/type"
export const ApiReduxCrud = (state=[] ,action) =>{
switch (action.type) {
        case GETAPI:{
            return  action.data;
}
  default : {
  return state
    }  
  }
}

//Normal Crud Starts here



