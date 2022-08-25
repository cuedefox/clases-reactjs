import React,{ Component } from "react";
import Nav from "./Nav";

class Header extends Component {
    render() {
        return <>
            <h1>{this.props.titulo}</h1>
            <Nav />
        </>
    }
}

export default Header;