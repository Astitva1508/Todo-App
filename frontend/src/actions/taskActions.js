import { SET_TASKS,SET_TASKS_NULL,NETWORK_CONNECTION_ERROR,SET_ERROR_NULL } from "../constants/appConstants";
import axios from "axios";

export const getAllRequest=()=>async(dispatch,getState)=>{
    try {
        const res = await axios.get(`http://localhost:4000/api/v1/tasks`)
        const {content:{tasks}} = res.data;
        dispatch({type:SET_TASKS,payload:{tasks}})
    } catch (error) {
        console.log(error)
        dispatch({type:SET_TASKS_NULL})
    }
}

export const postRequest=(task)=>async(dispatch)=>{
    try {
        await axios.post('http://localhost:4000/api/v1/tasks',{task})
        dispatch(getAllRequest())
    } catch (error) {
        if (error.message==='Network Error'){
            dispatch({type:NETWORK_CONNECTION_ERROR})
            setTimeout(()=>{
                dispatch({type:SET_ERROR_NULL})
            },4000)
            }
        }
}

export const deleteRequest=(_id)=>async(dispatch,getState)=>{
    const {tasks} = getState().appReducer
    try{
        const IDs = tasks.map(task=>task._id)
        await axios.post('http://localhost:4000/api/v1/tasks/remove',{IDs})
        dispatch(getAllRequest());
    }catch(error){
        if (error.message==='Network Error'){
            dispatch({type:NETWORK_CONNECTION_ERROR})
            setTimeout(()=>{
                dispatch({type:SET_ERROR_NULL})
            },4000)
            }
        }
}


