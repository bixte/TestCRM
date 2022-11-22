import {NavItem} from "reactstrap";
import React from "react";

function NavButton(props) {
    return (<button className={"NavButton"} value={props.value}>{props.value}</button>)
}

export default function NavElement(props) {
    return (
        <NavItem className={"navigation-nav__item"}>
            <NavButton className={"NavButton"} value={props.value}></NavButton>
        </NavItem>)
}