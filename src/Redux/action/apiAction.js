import axios from "axios";
import { GETAPI } from "../type/type";
export const getapi = () =>{
    return(dispatch) =>{
    axios.get('https://student-api.mycodelibraries.com/api/student/get').then(res =>{
     dispatch({type:GETAPI ,data : res.data.data});
        })
    }
}
export const addData = (obj) =>{
    return(dispatch) =>{
    axios.post('https://student-api.mycodelibraries.com/api/student/add',obj).then(res =>{
     dispatch(getapi())
    })
    }
}
export let editData = (obj) =>{
    return(dispatch) =>{
    axios.post('https://student-api.mycodelibraries.com/api/student/update',obj).then(res =>{
     dispatch(getapi());
    })
    }
}
export let deleteUserData = (id) =>{
    return(dispatch) =>{
    axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+ id).then(res =>{
     dispatch(getapi());
    })
    }
}

//Redux Normal Crud Functions 