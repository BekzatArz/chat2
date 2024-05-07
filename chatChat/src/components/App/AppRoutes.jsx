import React from 'react'
import { Route,  Routes, useLocation, NavLink} from 'react-router-dom'

import "./AppRoutes.css"

import Home from "../Home/Home"
import Messages from "../Messages/Messages"
import Friends from "../Friends/Friends"
import Bells from "../Bells/Bells"
import VideoBells from "../VideoBells/VideoBells"
import NotFound from "../NotFound/NotFound"
import Registration from "../Registration/Registration"
import NavBar from "../NavBar/NavBar"


const AppRoutes = () => {
  const location = useLocation()
  return(
    <div className='appRoutes'>
        {location.pathname === "/registration" ? null : 
        <NavBar  />
        }
      <div className={location.pathname === "/registration" ? "reg" : "container"} >
          <Routes> 
              <Route exact path="/" element={<Home />}/>
              <Route exact path='/registration' element={<Registration />} />
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