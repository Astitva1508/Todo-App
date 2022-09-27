import React, { useState,useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputBox from './inputBox'
import '../styles/app.css';
import axios from 'axios';
import Task from './task'
import {backEndTalk} from '../middleware/backendTalk'
import ButtonContainer from './buttonContainer';

const App=()=>{
    const [tasks,setTasks] = useState([])
    const [showInputBox,setShowInputBox]=useState(true)
    const [truth,setTruth]=useState(false)
    const [error,setError]=useState(null)

    //Request To Backend
    const getAllRequest=async()=>{
        const res = await axios.get(`http://localhost:3000/api/v1/tasks`)
        const {content:{tasks}} = res.data;
        setTasks(tasks)
    }

    const postRequest=async(task)=>{
        await axios.post('http://localhost:3000/api/v1/tasks',{task})
        getAllRequest();
    }

    const deleteRequest=async(note,_id)=>{
        const IDs = tasks.map(task=>task._id)
        await axios.post('http://localhost:3000/api/v1/tasks/remove',{IDs})
        getAllRequest();
    }

    //Custom Error Handler for Frontend
    const errorHandler=(error)=>{
        if (error.message==='Network Error'){
          setError('Network Connection Failed')
          setTimeout(()=>{setError(null)},4000)
        }
    }

    //Wrapping functions inside aysnc Await 
    const fetchTasks=backEndTalk(getAllRequest,()=>{setTasks([])})
    const addTask=backEndTalk(postRequest,errorHandler)
    const deleteTask=backEndTalk(deleteRequest,errorHandler)


    //Handling ClickEventListeners

    const handleCheck=()=>{
        setTruth(!truth)
        if (truth){
            const res = tasks.filter((task)=>task.isChecked)
            setTasks(res)
        }else{
            fetchTasks()
        }
    }

    const handleList=()=>{
        setShowInputBox(!showInputBox)
    }

    useEffect(()=>{
      fetchTasks()
    },[])


    return(
        <Container fluid className='block'>
        <Row className='box'>
        <h1 class='fw-bold m-2 p-2' style={{textAlign:'center',fontSize:'60px'}}>Todos</h1>
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
            {showInputBox && <InputBox onAdd={addTask}/>}
            <ButtonContainer 
                deleteTask={deleteTask} 
                handleCheck={handleCheck} 
                handleList={handleList}/>
        </Row>
        </Container>
    )
}

export default App