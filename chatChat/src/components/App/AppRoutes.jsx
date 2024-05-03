import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "../Home/Home"
import Messages from "../Messages/Messages"
import Friends from "../Friends/Friends"
import Bells from "../Bells/Bells"
import VideoBells from "../VideoBells/VideoBells"
import NotFound from "../NotFound/NotFound"
import NavBar from '../NavBar/NavBar'
import styles from "./AppRoutes.module.css"

const AppRoutes = () => {
  return (
    <div className={styles.out_container}>
        <Router>
            <NavBar />
            <div className={styles.container}>
                <Routes basename={import.meta.env.BASE_URL}> 
                    <Route exact path="/chat2/" element={<Home />}/>
                    <Route path='*' element={<NotFound />}/>
                    <Route exact path="/chat2/messages" element={<Messages />}/>
                    <Route exact path="/chat2/friends" element={<Friends />}/>
                    <Route exact path="/chat2/bells" element={<Bells />}/>
                    <Route exact path="/chat2/videobells" element={<VideoBells />}/>
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default AppRoutes