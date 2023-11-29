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
                <a id="home" className="menu-item" href="/main">Home</a>
                <a id="temperatures" className="menu-item" href="/data">Temperatures</a>
                <a id="about" className="menu-item" href="/devices">Devices</a>
            </Menu>
        );
    }
}

export default Hamburger;