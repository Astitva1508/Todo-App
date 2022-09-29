import React, { useState,useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputBox from './inputBox'
import '../styles/app.css';
import Task from './task'
import ButtonContainer from './buttonContainer';
import {useSelector,useDispatch} from 'react-redux'
import { SET_TASKS } from "../constants/appConstants"
import { getAllRequest} from '../actions/taskActions';

const App=()=>{

    const {tasks,showInputBox,error} = useSelector(state=>state.appReducer)
    const [truth,setTruth] = useState(false)
    const dispatch = useDispatch()

    const handleCheck=()=>{
        if (!truth){
            const res = tasks.filter((task)=>task.isChecked)
            setTimeout(()=>dispatch({type:SET_TASKS,payload:{tasks:res}}),0)
        }else{
           dispatch(getAllRequest())
        }
        setTruth(!truth)
    }


    useEffect(()=>{
      dispatch(getAllRequest())
    },[])


    return(
        <Container fluid className='block'>
        <Row className='box'>
        <h1 className='fw-bold m-2 p-2' style={{textAlign:'center',fontSize:'60px'}}>Todos</h1>
        <div className='mb-0' style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
            {tasks.map(task => {
            return (
                <Task
                    {...task}
                    key={task._id}
                />
                );
            })}
        </div>
            {showInputBox && <InputBox/>}
            <ButtonContainer 
                handleCheck={handleCheck}/>
        </Row>
        </Container>
    )
}

export default App