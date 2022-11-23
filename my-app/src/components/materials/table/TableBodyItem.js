import React from "react";

export function TableBodyItem(props) {
    let item = props.item;
    let cols = Object.values(item).map(
        val => <td  key={val.toString()}>{val}</td>)
    return (
        <tr onClick={()=>props.onclick(item.id)} className={"companyTop__table-item"}
        >
            {cols}
        </tr>
    )
}