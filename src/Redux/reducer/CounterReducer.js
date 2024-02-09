import { DECREMENT, INCREMENT } from "../type/type"

export const CountReducer = (state=0, action) =>{
    switch (action.type) {
        
        case INCREMENT:{
            return  state + 1
        }
        
        case DECREMENT:{
            return  state - 1
          }
        
        default : {
            return state
        }
        
    }
}