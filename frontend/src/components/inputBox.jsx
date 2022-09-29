import { React } from 'react'
import '../styles/inputbox.css'
import Message  from './message';
import {useSelector,useDispatch} from 'react-redux'
import { 
    CANT_POST,
    SET_MESSAGE_NULL,
    SET_TASK_NULL,
    SHOW_PLUS_ICON,
    HANDLE_TASK 
} from "../constants/inputBoxConstants"
import { postRequest } from '../actions/taskActions';


const InputBox=()=>{
    const {task,isVisible,message} = useSelector((state)=>state.inputBoxReducer)
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if ((task).length>20 || !task){
            dispatch({type:CANT_POST})

            setTimeout(()=>dispatch({type:SET_MESSAGE_NULL}),3000)
        }
        else{
            dispatch(postRequest(task));
            dispatch({type:SET_TASK_NULL})

        }
    }

    const handleFocus=()=>{
        dispatch({type:SHOW_PLUS_ICON})
    }

    const handleChange=(e)=>{
        dispatch({type:HANDLE_TASK,payload:e.target.value})
    }

    return (
        <>
        <form className='mb-2' style={{display:'flex',justifyContent:'center'}}>
            <input onFocus={handleFocus} className='p-1'
            value={task} onChange={handleChange}
          />
        { isVisible &&  
                <button type='submit' id='add' onClick={handleSubmit}>
                    <i className="fa-solid fa-plus"></i>
                </button>}
        </form>
        {message && (
					<Message variant='warning' duration={10}>
						{message}
					</Message>
				)}
    </>
    )
}

export default InputBox;