import React from "react";
import {Table} from "reactstrap";
import { TableHeader} from "../materials/table/TableHeader";
import {TableBody} from "../materials/table/TableBody";

let heads =["Id","Фамилия", "Имя", "Отчество", "Дата рождения", "Город"]
export class CompanyTop extends React.Component {
    render() {
        return (
            <div className={"app-company-top"}>
                <div className={"app-company-top-content"}>
                    <Table className={"app-company-top__table table-bordered table-hover table-responsive"}>
                        <TableHeader heads={heads}/>
                        <TableBody changeCurrentRow={this.props.changeCurrentRow} data={this.props.data}/>
                    </Table>
                </div>
            </div>
        );
    }
}