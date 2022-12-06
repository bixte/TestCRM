import React from "react";
import TableHeadItem from "./TableHeadItem";

export function TableHeader(props) {
    let heads = props.heads.map(
        head => <TableHeadItem key={head} id={props.id} name={head}/>);
    return (
        <thead style={{backgroundColor: "#274a5e", color: "white"}}>
        <tr>
            {heads}
        </tr>
        </thead>
    )
}




