import Img from "./imgForComponents/imgForLeftAside.png"

export default function RightAside() {
    
    return(
        <div className="rightAside">
            <div className="stories">
                <h1>Сторисы</h1>
                <br />
                <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                    <div className="cardInStories">
                        <div><img src={Img} alt="" />
                             <br />
                             Sweetie Fox
                        </div>
                    </div>
                    <div className="cardInStories">
                        <div><img src={Img} alt="" />
                             <br />
                             Sweetie Fox
                        </div>
                    </div>
                    <div className="cardInStories">
                        <div><img src={Img} alt="" />
                             <br />
                             Sweetie Fox
                        </div>
                    </div>
                </div>
                <br />
                <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                    <div className="cardInStoriesForNew">
                        <p>Поп Корн</p>
                        <p>Начните смотреть с <br /> друзьями и семьей.</p>
                        <button>Watch Now</button>
                        <br />
                        <div> <img src={Img} alt="" /><h5>35 друзья сейчас <br />наблюдают за нами</h5></div>
                    </div>
                    <div className="cardInStoriesForNew">
                        <p>Поп Корн</p>
                        <p>Начните смотреть с <br /> друзьями и семьей.</p>
                        <button>Watch Now</button>
                        <br />
                        <div> <img src={Img} alt="" /><h5>35 друзья сейчас <br />наблюдают за нами</h5></div>
                    </div>
                </div>
                <br />
                <br />
                <div className="follow">
                <h3>За кем следовать</h3>
                <br />
                <div className="personsInFollow">
                    <p><img src={Img} alt="" /> Скала Джо &nbsp;&nbsp;&nbsp;&nbsp;<button>Следовать</button></p>
                    <p><img src={Img} alt="" /> Скала Джо &nbsp;&nbsp;&nbsp;&nbsp;<button>Следовать</button></p>
                </div>
                </div>
            </div>
        </div>
    )
};
