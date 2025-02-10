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
                        <div className="col-md-3">
                            <img className="img-galllery-item" src={img1} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="img-galllery-item" src={img2} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="img-galllery-item" src={img3} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img className="img-galllery-item" src={img4} alt="" />
                        </div>
                        <div className="col-md-12 mt-5 text-center">
                            <h2>Lorem ipsum dolor sit</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolorem laudantium libero natus quibusdam similique.</p>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, fugit ipsa maiores repellendus unde veniam!</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}