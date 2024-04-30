import Img from "./imgForComponents/imgForLeftAside.png"
import Food from "./imgForComponents/food.png";

export default function MiddleAside() {
    
    return(
        <div className="middleAside">
            <input type="text" placeholder="О чем ты думаешь, Бекс?"/>
            <br />
            <div className="posts">
                <div className="post">
                    <div className="headInPost">
                        <img src={Img} alt="" />
                        Бекболот
                    </div>
                    <br />
                    <div className="bodyInPost">
                    Быть отцом - иногда самая трудная, но всегда самая благодарная работа. <br />
                    Поздравляю всех отцов с Днем отца. 
                    </div>
                </div>
                <div className="post">
                    <div className="headInPost">
                        <img src={Img} alt="" />
                        Бекс
                    </div>
                    <br />
                    <div className="bodyInPost">
                    Получайте удовольствие, готовя и поедая разнообразные блюда вместе с 
                      <div className="imgInPost">
                        <img src={Food} alt="" />
                        <img src={Food} alt="" />
                        <img src={Food} alt="" />
                      </div>
                    </div>
                </div>
                <div className="post">
                    <div className="headInPost">
                        <img src={Img} alt="" />
                        Самуел
                    </div>
                    <br />
                    <div className="bodyInPost">
                    Выключи мобильный, не заходи в социальные сети, и ты вскоре узнаешь, сколько в твоей жизни настоящих друзей.
                    </div>
                </div>
            </div>
        </div>
    )
};
