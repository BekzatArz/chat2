import React from 'react'

import logo from './imgs/logo.svg'
import ill from './imgs/Illustration.svg'

import "./Registration.css"

const Registration = () => {
  
  return (
    <div className='registration'>
      <div className="info-part">
        <img className='ill' src={ill} alt="" />
        <h1 className='join'>Присоединейся к <br /> онлайн сообществу</h1>
        <div className="logo-contain">
          <img src={logo} alt="" />
          <h2 className='logo__yololo'>Yololo</h2>
        </div>
        <p className='login__info'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididun.</p>
      </div>
      <div className="login">
        <h1 className='login__join'>Присоединяйтесь к самому <br /> быстрорастущему онлайн-сообществу и  <br /> подключайтесь к нему</h1>
        <div className="login__btns">
          <a href="#" className='login-google'>
          <svg viewBox="0 0 32 32" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>
            Войти через Google</a>
          <a href="#" className='login-vk'>
          <svg height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill: '#436EAB'}} d="M440.649,295.361c16.984,16.582,34.909,32.182,50.142,50.436 c6.729,8.112,13.099,16.482,17.973,25.896c6.906,13.382,0.651,28.108-11.348,28.907l-74.59-0.034 c-19.238,1.596-34.585-6.148-47.489-19.302c-10.327-10.519-19.891-21.714-29.821-32.588c-4.071-4.444-8.332-8.626-13.422-11.932 c-10.182-6.609-19.021-4.586-24.84,6.034c-5.926,10.802-7.271,22.762-7.853,34.8c-0.799,17.564-6.108,22.182-23.751,22.986 c-37.705,1.778-73.489-3.926-106.732-22.947c-29.308-16.768-52.034-40.441-71.816-67.24 C58.589,258.194,29.094,200.852,2.586,141.904c-5.967-13.281-1.603-20.41,13.051-20.663c24.333-0.473,48.663-0.439,73.025-0.034 c9.89,0.145,16.437,5.817,20.256,15.16c13.165,32.371,29.274,63.169,49.494,91.716c5.385,7.6,10.876,15.201,18.694,20.55 c8.65,5.923,15.236,3.96,19.305-5.676c2.582-6.11,3.713-12.691,4.295-19.234c1.928-22.513,2.182-44.988-1.199-67.422 c-2.076-14.001-9.962-23.065-23.933-25.714c-7.129-1.351-6.068-4.004-2.616-8.073c5.995-7.018,11.634-11.387,22.875-11.387h84.298 c13.271,2.619,16.218,8.581,18.035,21.934l0.072,93.637c-0.145,5.169,2.582,20.51,11.893,23.931 c7.452,2.436,12.364-3.526,16.836-8.251c20.183-21.421,34.588-46.737,47.457-72.951c5.711-11.527,10.622-23.497,15.381-35.458 c3.526-8.875,9.059-13.242,19.056-13.049l81.132,0.072c2.406,0,4.84,0.035,7.17,0.434c13.671,2.33,17.418,8.211,13.195,21.561 c-6.653,20.945-19.598,38.4-32.255,55.935c-13.53,18.721-28.001,36.802-41.418,55.634 C424.357,271.756,425.336,280.424,440.649,295.361L440.649,295.361z"></path> </g></svg>
            Войти через VK</a>
        </div>
        <form action="#" className='login-form'>
          <label htmlFor="name">Name</label>
          <input className='login-form__input' id='name' type="text" />
          <label htmlFor="email">Email</label>
          <input className='login-form__input' type="email" id='email'/>
          <label htmlFor="pass">Password</label>
          <input className='login-form__input'id='pass' type="password" />
          <div className="sign-in">
            <input id='accept' type="checkbox" className='sign-in__checkbox' />
            <label htmlFor="accept">Я принимаю условие соглашения</label>
            <button className='sign-in__btn'>Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration;