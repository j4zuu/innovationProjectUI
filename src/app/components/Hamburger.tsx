import { slide as Menu } from 'react-burger-menu'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";


type HamburgerProps = {
    burger: boolean;
};

class Hamburger extends React.Component<HamburgerProps> {
    render() {
        return (
            <Menu customBurgerIcon={ <FontAwesomeIcon icon={faBars} /> }>
                <a id="rooms" className="menu-item" href="/main">Your rooms</a>
                <br></br>
                <a id="about" className="menu-item" href="/devices">Add a new device</a>
                <br></br>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}

export default Hamburger;