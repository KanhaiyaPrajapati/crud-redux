import React, { useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteUserData, editData } from '../Redux/action/apiAction'



let  ApiCrud = () => {
    let [obj, setobj] = useState({})
    const [blankobj, setblankobj] = useState({})
    const state = useSelector(state =>state.api)
    const dispatch = useDispatch()
    console.log(state);

    
    let getvalue = (e) =>{
        if(e.target.type == "checkbox"){
            obj[e.target.name]= obj[e.target.name] ?? [] ;
            blankobj[e.target.name]=[];
            if(e.target.checked){
                obj[e.target.name].push(e.target.value)
            }
            else
            {
                obj[e.target.name]=obj[e.target.name].filter((x)=> x !== e.target.value)
            }
        }
        else{
            obj[e.target.name]= e.target.value;
            blankobj[e.target.name]='';
        }
        setobj({...obj})
        setblankobj({...blankobj})
       }

       let Editdata = (x) =>{
        x.id = x._id;
        obj =({...x})
        setobj({...obj})
      }

      let deleteData = (id) =>{
        dispatch(deleteUserData(id))

      }
  
       let adddata = () =>{
          if(obj.id){
            dispatch(editData(obj))
          }else{
            dispatch(addData(obj))
          }
          setobj({...blankobj})
        }
  return (
    <>
        <div className='text-center  bg-danger fs-4 text-white'>Redux Api Crud</div>
        <form className='shadow-lg w-50 m-auto mt-3 px-3 py-3'>

        <div>
          <label htmlFor="" className='w-100'>First Name</label>
          <input type="text" name="firstName" className='w-100 mb-3' onChange={getvalue} value={obj.firstName} />
        </div>
        <div>
          <label htmlFor="" className='w-100'>Last Name</label>
          <input type="text"  name="lastName"  className='w-100 mb-3' onChange={getvalue} value={obj.lastName} />
        </div>

        <div>
          <label htmlFor="" className='w-100'>age</label>
          <input type="number" name="age" className='w-100 mb-3' onChange={getvalue} value={obj.age} />
        </div>

        <div>
          <label htmlFor="" className='w-100'>Gender</label>
          <input type="radio" name='gender' value="male" onChange={getvalue} checked={obj.gender=="male"}/>Male
          <input type="radio" name='gender' className='ms-3' value="Female" onChange={getvalue} checked={obj.gender=="Female"}/>Female
        </div>

          <label htmlFor="" className='w-100 mt-2'>City</label>
          <select className='form-control mt-2 me-2' name='city' value={obj.city} onChange={getvalue}>
            <option name="" id="">Surat</option>
            <option name="" id="">Ahemdabad</option>
            <option name="" id="">Vadodara</option>
          </select>

         
		<div className='mb-4'>
          <label htmlFor="" className='w-100 mt-2'>Hobby</label>
          <input type="checkbox" name='hobbies'  value="reading" onChange={getvalue} checked={obj.hobbies?.includes('reading')}/>Reading
          <input type="checkbox" name='hobbies' className='ms-3' value="playing" onChange={getvalue} checked={obj.hobbies?.includes('playing')}/>playing
          <input type="checkbox" name='hobbies' className='ms-3' value="Sleeping" onChange={getvalue} checked={obj.hobbies?.includes('Sleeping')}/>Sleeping
        </div>
        
         <div className='text-center'>
          <button className='btn btn-danger me-2' type='button' onClick={adddata}>Submit</button>
          <button type='reset' className='btn btn-info'>Reset</button>
        </div>  
       </form>

       <table className='table mt-3'>
        <thead>
              <tr>
                <td>Id</td>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Age</td>
                <td>Gender</td>
                <td>City</td>
                <td>hobby</td>
                <td>action</td>
              </tr>
        </thead>
        <tbody>
              {
                state?.map((x,i)=>{
                    return <tr key={i}>
                        <td>{x._id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.hobbies}</td>
                        <td>
                            <button className='btn btn-info me-3' onClick={()=>Editdata(x)} >Edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteData(x._id)} >Delete</button>
                        </td>
                    </tr>
                })
              }
        </tbody>
       </table>
    </>
    
  )
}

export default ApiCrud;