import React from "react";
import img1 from "../img/photo_3_2025-02-10_12-24-39.jpg";
export default class Section1 extends React.Component {
    render() {
        return (
            // Маська ты любовь моя)
            <section id="section1">
                <div className="container">
                    <div className="row px-3">
                        <div className="col-md-6 mt-5">
                            <h1>Lorem ipsum dolor sit</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolorem laudantium libero natus quibusdam similique.</p>
                            <a href="#section3" className="btn btn-outline-info">К валентинке</a>
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

