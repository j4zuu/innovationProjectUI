import { slide as Menu } from 'react-burger-menu'
import React from "react";

type HamburgerProps = {
    burger: boolean;
};

class Hamburger extends React.Component<HamburgerProps> {
    render() {
        return (
            <Menu>
                <a id="temperatures" className="menu-item" href="/data">Temperatures</a>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}

export default Hamburger;