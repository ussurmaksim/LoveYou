import React from "react";
import img1 from "../img/photo_1_2025-02-14_14-41-50.jpg";
import img2 from "../img/photo_2_2025-02-14_14-41-50.jpg";
import img3 from "../img/photo_2025-02-14_14-40-01.jpg";


export default class Section6 extends React.Component {
    render() {
        return (
            <section id="section3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 my-3">
                            <img className="img-galllery-item" src={img1} alt="" />
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <img className="img-galllery-item" src={img2} alt="" />
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <img className="img-galllery-item" src={img3} alt="" />
                        </div>
                        <div className={"col-12"}>
                            <h3 className={" my-5 text-center"}>Ты прекрасна в любом состоянии!) И когда не довольная и когда спишь и когда радуешься)</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}