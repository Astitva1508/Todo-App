import {React,useState,useReducer} from 'react'
import '../styles/inputbox.css'
import Message  from './message';
import inputBoxReducer from '../reducers/inputBoxreducer';

const InputBox=({onAdd})=>{
    const defaultState={
        task:'',
        isVisible:false,
        message:null
    }
    const [state,dispatch]=useReducer(inputBoxReducer,defaultState)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if ((state.task).length>20 || !state.task){
            dispatch({type:'CANT_POST'})
            setTimeout(()=>dispatch({type:'SET_MESSAGE_NULL',payload:null}),3000)
        }
        else{
            onAdd(state.task);
            dispatch({type:'SET_TASK_NULL',payload:null})
        }
    }

    const handleFocus=()=>{
        dispatch({type:'SHOW_PLUS_ICON'})
    }

    const handleChange=(e)=>{
        dispatch({type:'HANDLE_TASK',payload:e.target.value})
    }

    return (
        <>
        <form className='mb-2' style={{display:'flex',justifyContent:'center'}}>
            <input onFocus={handleFocus} className='p-1'
            value={state.task} onChange={handleChange}
          />
        { state.isVisible &&  <button type='submit' id='add' onClick={handleSubmit}>
                <i class="fa-solid fa-plus"></i>
            </button>}
        </form>
        {state.message && (
					<Message variant='warning' duration={10}>
						{state.message}
					</Message>
				)}
    </>
    )
}

export default InputBox;