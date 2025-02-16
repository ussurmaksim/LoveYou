import React from "react";
import img1 from '../img/photo_1_2025-02-17_00-13-51.jpg'
import img2 from '../img/photo_2_2025-02-17_00-13-51.jpg'
import img3 from '../img/photo_3_2025-02-17_00-13-51.jpg'
import img4 from '../img/photo_4_2025-02-17_00-13-51.jpg'
import img5 from '../img/photo_5_2025-02-17_00-13-51.jpg'
import img6 from '../img/photo_6_2025-02-17_00-13-51.jpg'


class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row row-gap-4 ">
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img1} alt=""/>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img2} alt=""/>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img3} alt=""/>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img4} alt=""/>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img5} alt=""/>
                    </div>
                    <div className="col-md-3 col-6">
                        <img className={'img-galllery-item'} src={img6} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;
