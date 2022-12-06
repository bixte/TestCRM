export default  function TableData(props) {
    return (
        <td className={"companyTop__table-item__" + props.columnName}>
            {props.data}
        </td>
        )
}