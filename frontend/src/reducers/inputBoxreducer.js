const inputBoxReducer=(state,action)=>{
    switch (action.type) {
        case 'CANT_POST':
            return {...state,message:'Task must be provided and must be less than 20 characters'}
        case 'SET_MESSAGE_NULL':
            return {...state,message:null}
        case 'SET_TASK_NULL':
            return {...state,task:''}
        case 'SHOW_PLUS_ICON':
            return {...state,isVisible:true}
        case 'HANDLE_TASK':
            return {...state,task:action.payload}
        default:
            return state
    }
}

export default inputBoxReducer;