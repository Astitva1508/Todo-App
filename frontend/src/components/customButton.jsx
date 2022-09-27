import React from 'react'

const CustomButton = ({variant,handler,color}) => {
  return (
        <p onClick={handler}>
        <i class={`fa-solid fa-${variant}`} style={{color:color}}></i></p>
  )
}

export default CustomButton