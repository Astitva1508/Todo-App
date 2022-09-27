import {React,useState,useRef,useEffect} from 'react'
import '../styles/inputbox.css'
import Message  from './message';

const InputBox=({onAdd})=>{
    const [task,setTask] = useState('')
    const [isVisible,setIsVisible]=useState(false)
    const [message,setMessage]= useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (task.length>20 || !task){
            setMessage('Task must be provided and must be less than 20 characters')
            setTimeout(()=>{setMessage(null)},3000)
        }
        else{
            onAdd(task);
            setTask('')
        }
    }

    return (
        <>
        <form className='mb-2' style={{display:'flex',justifyContent:'center'}}>
            <input onFocus={()=>setIsVisible(true)} className='p-1'
            value={task} onChange={(e)=>setTask(e.target.value)}
          />
        { isVisible &&  <button type='submit' id='add' onClick={handleSubmit}>
                <i class="fa-solid fa-plus"></i>
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