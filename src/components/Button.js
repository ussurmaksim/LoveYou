import React from "react";

export default class Button extends React.Component {
    render() {
        return (
        <div className={"d-flex justify-content-center align-items-center my-3"}>
            <button onClick={this.props.click} className="btn btn-secondary valen-btn">{this.props.isAgree}</button>
        </div>

        )
    }
}


