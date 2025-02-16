import React from "react";
import Video from "./Video";


export default class VideoSection extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Video video={this.props.video} autoPlay={this.props.autoPlay} loop={this.props.loop} muted={this.props.mute} controls={this.props.controls}/>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <h2 className={"text-center"}> {this.props.text} </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}