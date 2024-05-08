import React from 'react'

import logo from './imgs/logo.svg'
import ill from './imgs/Illustration.svg'

import "./SignIn.css"

const SignIn = () => {
  
  return (
      <div className="info-part">
        <img className='ill' src={ill} alt="" />
        <h1 className='join'>Присоединейся к <br /> онлайн сообществу</h1>
        <div className="logo-contain">
          <img src={logo} alt="" />
          <h2 className='logo__yololo'>Yololo</h2>
        </div>
        <p className='sign__info'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididun.</p>
      </div>
  )
}

export default SignIn;