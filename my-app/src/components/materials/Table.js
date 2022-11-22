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


export function TableBody(props) {
    let data = props.data;
    let rows = data.map((item =>
        <TableBodyItem key={item.id} value={item}/>));

    return (
        <tbody onClick={props.changeCurrentRow}>
        {rows}
        </tbody>)
}

export function TableBodyItem(props) {
    let value = props.value;
    let cols = Object.values(value).map(
        val => <td key={val.toString()}>{val}</td>)
    return (
        <tr className={"companyTop__table-item"}
            data-id={value.id}
        >
            {cols}
        </tr>
    )

}