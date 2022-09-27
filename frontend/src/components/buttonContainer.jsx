import React from 'react'
import CustomButton from './customButton'
import '../styles/buttoncontainer.css'

const ButtonContainer = ({deleteTask,handleCheck,handleList}) => {
  return (
    <div className="button-container">
    <CustomButton variant='list' color='rgb(21, 116, 174)' handler={handleList} />
    <CustomButton variant='xmark' color='red' handler={()=>{deleteTask()}} />
    <CustomButton variant='check' color='green' handler={handleCheck} />
    </div>
  )
}

export default ButtonContainer