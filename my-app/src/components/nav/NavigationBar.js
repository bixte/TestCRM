import React from "react";
import {Nav} from "reactstrap";
import NavElement from "./NavElement";

export default class NavigationBar extends React.Component {
    navItems = ["Контакты", "Компания", "Задачи"];

    render() {
        let navItems = this.navItems.map(value => <NavElement value={value} key={value.toString()}/>)
        return (
            <nav className={"navigation"}>
                <div className={"navigation__container"}>
                    <NavigationLogo/>
                    <Nav className={"d-flex flex-column  navigation-nav"} onClick={this.props.clickHandler}>
                        {navItems}
                    </Nav>
                </div>
            </nav>
        );
    }
}


function NavigationLogo() {
    return (
        <div>
            <div className={"navigation-logo"}>
                <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
                     className={"navbar-brand navigation-logo__img"} alt={"logo"}/>
            </div>
        </div>
    )
}




