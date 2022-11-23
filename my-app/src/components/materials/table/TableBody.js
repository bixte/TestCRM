import React from "react";
import {TableBodyItem} from "./TableBodyItem";

export function TableBody(props) {
    let rows = props.data.map((item =>
        <TableBodyItem key={item.id} onclick={props.changeCurrentRow} item={item}/>));
    return (
        <tbody>
            {rows}
        </tbody>)
}