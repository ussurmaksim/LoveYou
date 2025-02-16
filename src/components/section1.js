import React from "react";
import img1 from "../img/photo_3_2025-02-10_12-24-39.jpg";
export default class Section1 extends React.Component {
    render() {
        return (
            // Маська ты любовь моя)
            <section id="section1">
                <div className="container">
                    <div className="row px-3">
                        <div className="col-md-6 my-5">
                            <h1>Если ты не знала, то я тебя люблю ващет</h1>
                            <p className="lead">Ты даже не думай что тебя когда нибудь разлюблю) Ниже валентинка там вопросик логичный и очень разнообразный выбор)</p>
                            <a href="#Valentine" className="btn btn-outline-info">К валентинке</a>
                        </div>
                        <div className="col-md-6 justify-content-center d-flex">
                            <div className="cardImg">
                                <img src={img1} alt =""/>
                            </div>
                            <span className="lead"></span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

