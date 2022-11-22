import React from "@types/react";


export class TableBodyItem extends React.Component {
    render() {
        let cols = Object.values(value).map(
            val => <td key={val.toString()}>{val}</td>
        )
        return (
            <tr className={"companyTop__table-item"}
            >
                {cols}
            </tr>
        );
    }
}
