import TableBtnCollapse from "./TableBtnCollapse";

export default function TableHeadItem(props) {
    return (
        <th key={props.name} className={"table-head__item"}>
            <div className={"d-flex justify-content-between  table-head__item-content"}>
                <span>{props.name}</span>
                <TableBtnCollapse/>
            </div>
        </th>
    )
}