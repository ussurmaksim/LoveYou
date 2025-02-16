    import React from "react"

    export default class Video extends React.Component {
        render() {
            return (
                <video className={"video"} autoPlay={this.props.autoPlay}
                       loop={this.props.loop} muted={this.props.mute}
                       controls={this.props.controls} src={this.props.video}
                />
            )
        }
    }