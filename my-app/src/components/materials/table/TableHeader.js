import React from "react";

export function TableHeader(props) {
    let heads = props.heads.map(
        head => <th key={head.toString()}>{head}</th>);
    return (
        <thead style={{backgroundColor: "black", color: "white"}}>
        <tr>
            {heads}
        </tr>
        </thead>)
}




