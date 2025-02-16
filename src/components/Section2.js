import React from "react";
import img1 from "../img/rose.png";
export default class Section2 extends React.Component {
    render() {
        return (
            <section id="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-rose" src={img1} alt="" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <h2 className="text-center">Ты моя любоффф)<br/> Всегда самая красивая и умная! Оставайся такой всегда</h2>
                        </div>
                        <div className="col-md-3">
                            <img className="img-rotate" src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}