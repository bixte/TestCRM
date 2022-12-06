import React from "react";

export default function TableBtnCollapse(props) {
    const [isCollapse, setIsCollapse] = React.useState();

    return (
        <span onClick={props.clickHandler} className={"table-head__item-content-collapse"}><img
            src={"./img/collapse.png"} width={16}/></span>
    )
}