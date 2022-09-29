import React, { useState } from 'react'
import axios from 'axios';
import { Collapse } from 'react-bootstrap';
import '../styles/task.css'


const Task = ({task,isChecked:isTicked,_id}) => {
  const [isChecked,setIsChecked]=useState(isTicked);

  const editData=async(_id)=>{
    await axios.patch('http://localhost:4000/api/v1/tasks/'+_id,{});
  }

  const lineThrough=()=>{
    editData(_id)
    setIsChecked(!isChecked)
  }

  return (
      <div className='p-2 task'>
          <div onClick={lineThrough} style={{textDecoration:isChecked && 'line-through',fontSize:'1.15rem'}}>{task}</div>
          <span>
            {isChecked && <i className="fa-solid fa-check" style={{color:'green',fontSize:'24px'}}></i>}
          </span>
      </div>
  )
}

export default Task