import image from "../images/profile_img.svg";
import search from "../images/search.svg"
import video from "../images/video-camera.svg"
import call from "../images/call.svg"
import ellipsis from "../images/ellipsis.svg"
import style from "./style.module.scss"
const Chat = () => {
  return (
   <>
   <header>
    <img src={image} alt="profile img" /> 
    <div className={style.header_text}>
      <h4>Room mate</h4>
      <p>friends forever</p>
    </div>
    <div className={style.header_icons}> 
  <img src={search} alt="icon" />
  <img src={video} alt="icon" />
  <img src={call} alt="icon" />
  <img src={ellipsis} alt="icon" />
    </div>
   </header>
   </>
  )
}

export default Chat