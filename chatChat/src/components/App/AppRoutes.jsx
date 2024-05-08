import React, { useEffect } from 'react'
import { Route,  Routes, useLocation, NavLink, Navigate } from 'react-router-dom'

import "./AppRoutes.css"

import Home from "../Home/Home"
import Messages from "../Messages/Messages"
import Friends from "../Friends/Friends"
import Bells from "../Bells/Bells"
import VideoBells from "../VideoBells/VideoBells"
import NotFound from "../NotFound/NotFound"
import NavBar from "../NavBar/NavBar"
import Registration from '../SignIn/Registration/Registration'
import Login from '../SignIn/Login/Login'


const AppRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    console.log(location)
  })
  return(
    <div className='appRoutes'>
        {location.pathname === "/login" || location.pathname === "/registration" ? null : 
        <NavBar  />
        }
      <div className={location.pathname === "/registration" || location.pathname === "/login" ? "sign" : "container"} >
          <Routes> 
              <Route exact path="/" element={<Home />}/>
              <Route path='/registration' element={<Registration />}/> 
              <Route path='/login' element={<Login />}/> 
              <Route exact path="/messages" element={<Messages />}/>
              <Route exact path="/friends" element={<Friends />}/>
              <Route exact path="/bells" element={<Bells />}/>
              <Route exact path="/videobells" element={<VideoBells />}/>
              <Route path='*' element={<NotFound />}/>
          </Routes>


      <div className="btns">
        <NavLink to="/registration">Login</NavLink>
        <NavLink to="/">Logout</NavLink>
      </div>
      </div>
    </div>
  )
}

export default AppRoutes