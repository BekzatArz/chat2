import './nav.css'

import { GoHome } from "react-icons/go"
import { IoChatbubbleOutline } from "react-icons/io5"
import { IoPersonOutline } from "react-icons/io5"
import { FiPhoneCall } from "react-icons/fi"
import { GoDeviceCameraVideo } from "react-icons/go"
import { useState } from 'react'


import logoYolo from "./logo.svg"

export default function Nav(){
   const [clikedHome, setClikedHome] = useState(true)
   const [clikedChat, setClikedChat] = useState(false)
   const [clikedPerson, setClikedPerson] = useState(false)
   const [clikedPhone, setClikedPhone] = useState(false)
   const [clikedCamera, setClikedCamera] = useState(false)

   const clickHome = ( )=>{
      setClikedHome(true)
      setClikedChat(false)
      setClikedPerson(false)
      setClikedPhone(false)
      setClikedCamera(false)
   }

   const clickChat = ( )=>{
      setClikedHome(false)
      setClikedChat(true)
      setClikedPerson(false)
      setClikedPhone(false)
      setClikedCamera(false)
   }

   const clickPerson = ( )=>{
      setClikedHome(false)
      setClikedChat(false)
      setClikedPerson(true)
      setClikedPhone(false)
      setClikedCamera(false)
   }

   const clickPhone = ( )=>{
      setClikedHome(false)
      setClikedChat(false)
      setClikedPerson(false)
      setClikedPhone(true)
      setClikedCamera(false)
   }

   const clickCamera = ( )=>{
      setClikedHome(false)
      setClikedChat(false)
      setClikedPerson(false)
      setClikedPhone(false)
      setClikedCamera(true)
   }


   return(
      <>
         <div className='nav'>
            <div className='icons' >
            <img src={logoYolo} alt="" className='logo'/>
               <div  clasName="continerIcon">
                  
                  <GoHome
                     size={30}
                     className={clikedHome === true? `icon clicked` : `icon`}
                     onClick={clickHome}
                  />
               </div>
               <div clasName="continerIcon">
                  <IoChatbubbleOutline
                     size={30}
                     className={clikedChat === true? `icon clicked` : `icon`}
                     onClick={clickChat}
                  />
               </div>
               <div clasName="continerIcon">
                  <IoPersonOutline 
                     size={30}
                     className={clikedPerson === true? `icon clicked` : `icon`}
                     onClick={clickPerson}
                  />
               </div>
               <div clasName="continerIcon">
                  <FiPhoneCall
                     size={26} 
                     className={clikedPhone === true? `icon clicked` : `icon`}
                     onClick={clickPhone}
                  />
               </div>
               <div clasName="continerIcon">
                  <GoDeviceCameraVideo 
                     size={30} 
                     className={clikedCamera === true? `icon clicked` : `icon`}
                     onClick={clickCamera}
                  />
               </div>

            </div>
         </div>
      </>
   )
}