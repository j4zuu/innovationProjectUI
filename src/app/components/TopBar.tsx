import Hamburger from "./Hamburger";
import React from "react";
import "../styles.css";

const TopBar = ({ burger = true }: { burger?: boolean }) => {
    return (
        <div className="topBarStyle">
            {burger ? <Hamburger burger={true}/> : null}
        </div>
    );
}

export default TopBar;     