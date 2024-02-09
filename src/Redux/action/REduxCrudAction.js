import { DELETEUSERDATA, EDITUSERDATA, GETDATA } from "../type/type"
export const getdata =(obj) =>{
    return (dispatch) =>{
        dispatch({type:GETDATA,data:obj})
    }
}
export const Deleteuserdata =(id) =>{
    return (dispatch) =>{
        dispatch({type:DELETEUSERDATA,data:id})
    }
}

export const EditUserData =(obj) =>{
    return (dispatch) =>{
        dispatch({type:EDITUSERDATA,data:obj})
    }
}