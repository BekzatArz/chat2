import Img from "./imgForComponents/imgForLeftAside.png"
import Phone from "./imgForComponents/phone.png"
import Camera from "./imgForComponents/camera.png"


export default function LeftAside() {
    
    return(
        <div className="leftAside">
            <div><img src={Img} alt="" /></div>
            <h3>Свадебный план Джессики</h3>
            <p>Активен сейчас</p>
            <br />
            <div>
                <p><img src={Phone} alt="" /> Звонок</p>
                <p><img src={Camera} alt="" /> Видеозвонок</p>
            </div>
            <br />
            <br />
            <div className="contacts">
            Онлайн-контакты
             <ul>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
                <li><img src={Img} alt="" />Та самая </li>
             </ul>
            </div>
        </div>
    )
};
