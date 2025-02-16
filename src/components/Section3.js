import React from "react";
import img1 from "../img/photo_2_2025-02-10_12-24-39.jpg";
import img2 from "../img/photo_6_2025-02-10_12-24-39.jpg";
import img3 from "../img/photo_5_2025-02-10_12-24-39.jpg";
import img4 from "../img/photo_4_2025-02-10_12-24-39.jpg";


export default class Section2 extends React.Component {
    render() {
        return (
            <section id="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6 my-3">
                            <img className="img-galllery-item" src={img1} alt="" />
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <img className="img-galllery-item" src={img2} alt="" />
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <img className="img-galllery-item" src={img3} alt="" />
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <img className="img-galllery-item" src={img4} alt="" />
                        </div>
                        <div className="col-md-12 mt-5 text-center">
                            <h2>Смотри какая ты красотка)</h2>
                            <p className="lead">Никогда даже не думай, что ты выглядишь не красиво, если ты когда нибудь так подумаешь напиши мне, я тебе по жопе заряжу за такие мысли))</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}