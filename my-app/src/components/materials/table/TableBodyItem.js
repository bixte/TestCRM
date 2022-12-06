import React from "react";
import TableData from "./TableData";

export function TableBodyItem(props) {
    let item = props.item;
    let cols = Object.entries(item).map(
        val => <TableData key={val[0]} columnName={val[0]} data={val[1]}/>)
    return (
        <tr onClick={()=>props.onclick(item.id)} className={"companyTop__table-item"}>
            {cols}
        </tr>
    )
}