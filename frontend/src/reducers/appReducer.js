import { SET_TASKS,SET_TASKS_NULL,NETWORK_CONNECTION_ERROR,SET_ERROR_NULL,TOGGLE_INPUT_BOX} from "../constants/appConstants"

const initialState={
    tasks:[],
    showInputBox:true,
    error:null
}

export const appReducer=(state=initialState,action)=>{
    if (action.type===SET_TASKS){
        return {...state,tasks:action.payload.tasks}
    }
    if(action.type===SET_TASKS_NULL){
        return {...state,tasks:[]}
    }
    if(action.type===NETWORK_CONNECTION_ERROR){
        return {...state,error:'Network Connection Falied'}
    }
    if(action.type===SET_ERROR_NULL){
        return {...state,error:null}
    }
    if(action.type===TOGGLE_INPUT_BOX){
        return {...state,showInputBox:!state.showInputBox}
    }
    else{
        return state
    }
    
}
