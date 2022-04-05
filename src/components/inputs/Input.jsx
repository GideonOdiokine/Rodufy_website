import React from 'react'
import './styles/Input.scss'

const Input = ({type, placeholder}) => {
  return (
    <div className='input'>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input