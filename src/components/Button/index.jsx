import React from 'react'
import { Link } from 'react-router-dom'
import './../../assets/css/index.css'

const Button = ( {cls , label , link} ) => {
  return (
    <div  className='button'>
      <Link to={link}>
        <button className={cls ? 'outlineButton' : ''} >{label}</button>
      </Link>
    </div>
  )
}

export default Button