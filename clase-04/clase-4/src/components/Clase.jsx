import React from "react";
import { Component } from "react";

class Clase extends Component {
    constructor() {
        super();
        this.state= {
            curso:"React",
            lugar:"ya"
        }
    }

    actualizarNombre = () => {
        this.setState(
            {lugar:"asereje ja deje"}
        )
    }

    render() {
        return(
            <div onClick={this.actualizarNombre}>
                <h1>ola {this.state.curso} chaboncio en {this.state.lugar}</h1>
            </div>
        )
    }
}

export default Clase;