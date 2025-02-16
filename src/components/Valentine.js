// src/Valentine.js
import React from "react";
import imgValentine from "../img/as_93-1024.webp";
import Button from "./Button";


export default class Valentine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFalling: false,
        };
    }

    handleClick = () => {
        this.setState({ isFalling: true });
        setTimeout(() => this.setState({ isFalling: false }), 3000); // Сбросить состояние через 3 секунды
    };

    render() {
        return (
            <section className="Valentine" id="Valentine">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={imgValentine} alt="" />
                        </div>
                        <div className="col-md-6 text-center d-flex justify-content-center align-items-center flex-column">
                            <h2 className="mb-5"> Будешь моей валентинкой? :) </h2>
                            <div className="row">
                                <div className="col-6">
                                    <Button isAgree="Да" />
                                </div>
                                <div className="col-6">
                                    <Button isAgree="Да" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img className="img-rotate" src={imgValentine} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}