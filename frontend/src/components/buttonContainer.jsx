import React from 'react'
import CustomButton from './customButton'
import '../styles/buttoncontainer.css'
import { deleteRequest } from '../actions/taskActions'
import { useDispatch } from 'react-redux'
import { TOGGLE_INPUT_BOX } from '../constants/appConstants'

const ButtonContainer = ({handleCheck}) => {
  const dispatch = useDispatch()
  return (
    <div className="button-container">
    <CustomButton variant='list' color='rgb(21, 116, 174)' handler={()=>dispatch({type:TOGGLE_INPUT_BOX})} />

    <CustomButton variant='xmark' color='red' handler={()=>{dispatch(deleteRequest())}} />

    <CustomButton variant='check' color='green' handler={handleCheck} />
    </div>
  )
}

export default ButtonContainer